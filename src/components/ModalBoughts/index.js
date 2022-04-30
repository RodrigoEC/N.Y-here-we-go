import { Col, Form, Input, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useContent } from '../../context/elements';
import { useTheme } from '../../context/theme';
import { createPage, removePage, updatePage } from '../../services/notion';
import { Close } from '../icons/Close';
import { Modal, Cancel, Submit, BackContainer, Footer, Title, Header, Reloading, SubmitContainer, Icon, TitleContainer, Delete } from './style';

export const ModalBoughts = () => {
    const [finishingLoad, setFinishingLoad] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [formOk, setFormOk] = useState(false);
    const [currentElementProps, setCurrentElementProps] = useState(null);
    const {
        setActiveModal,
        schema,
        getListData,
        handleModalElement,
        currentModalElement
    } = useContent();
    const [form] = Form.useForm();
    const { Option } = Select;
    const { theme } = useTheme();


    const handleCreate = async () => {
        if (!formOk) return;

        const formObject = form.getFieldsValue('Compra')
        const elementTitle = currentModalElement ? currentModalElement.properties['Compra'].title : null;
        const properties = {
            'Compra': {
                title: [
                    {
                        'type': 'text',
                        'text': {
                            'content': formObject.Compra || (elementTitle ? elementTitle[0].text.content : 'missing title')
                        }
                    }
                ]
            },
            'Preço': {
                'number': Number(formObject['Preço']) || currentModalElement.properties['Preço'].number,
            },
            'Moeda': {
                select: {
                    name: formObject.Moeda || currentModalElement.properties['Moeda'].select.name
                }
            },
            'Categoria': {
                select: {
                    name: formObject.Categoria || currentModalElement.properties['Categoria'].select.name
                }
            },
            'Check': {
                'checkbox': currentModalElement ?
                    currentModalElement.properties['Check'].checkbox :
                    false,
            }
        }

        const creatingPromise = currentModalElement ?
            updatePage(currentModalElement.id, properties) :
            createPage(properties);
        setFinishingLoad(true);
        creatingPromise.then(() => {
            setFinishingLoad(false);
            getListData();
            handleModalElement();
            setActiveModal(false);
        });
    };

    const handleFieldsChange = (_, allFields) => {
        const editChange = () => {
            return allFields.some((field) => {
                return (
                    field.value !== undefined &&
                    field.value !== '' &&
                    field.value.toString() !== currentElementProps[field.name[0]].toString()
                );
            });
        };

        const newChange = () => {
            return allFields.every((field) => {
                return (
                    field.value !== undefined &&
                    field.value !== ''
                );
            });
        }

        const canFinish = currentElementProps ? editChange() : newChange();
        setFormOk(canFinish);
    }

    const handleClose = () => {
        setActiveModal(false);
        handleModalElement();
    }

    const handleDelete = async () => {
        setDeleting(true);
        await removePage(currentModalElement.id);
        setDeleting(false);
        setActiveModal(false);
        getListData();
        handleModalElement();
    }

    useEffect(() => {
        if (!currentModalElement) return;

        const currentElement = currentModalElement.properties;

        const object = {
            'Compra': currentElement['Compra'].title[0].text.content,
            'Categoria': currentElement['Categoria'].select.name,
            'Moeda': currentElement['Moeda'].select.name,
            'Preço': currentElement['Preço'].number,
        }

        setCurrentElementProps(object);
    }, [currentModalElement]);

    return (
        <BackContainer onClick={handleClose}>
            <Modal onClick={(e) => e.stopPropagation()}>
                <Header>
                    <TitleContainer>
                        <Title>Adicionar compra</Title>
                        <Icon color={theme.secondary} />
                    </TitleContainer>
                    <Close
                        id='close-tab'
                        onClick={handleClose}
                    />
                </Header>
                <Form
                    layout="vertical"
                    form={form}
                    onFieldsChange={handleFieldsChange}
                    initialValues={currentModalElement && {
                        'Compra': currentModalElement.properties['Compra'].title[0].text.content,
                        'Preço': currentModalElement.properties['Preço'].number,
                        'Moeda': currentModalElement.properties['Moeda'].select.name,
                        'Categoria': currentModalElement.properties['Categoria'].select.name,
                    }}>
                    <Row gutter={24}>
                        <Col span={16}>

                            <Form.Item label='Compra' name='Compra'>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label='Preço' name='Preço'>
                                <Input type='number' />
                            </Form.Item>
                        </Col>

                    </Row>
                    <Row gutter={24}>
                        <Col span={8}>
                            <Form.Item label='Moeda' name='Moeda'>
                                <Select>
                                    {schema['Moeda'].select.options.map((option) => {
                                        return <Option key={option.name} value={option.name}>{option.name}</Option>
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={16}>
                            <Form.Item label='Categoria' name='Categoria'>
                                <Select>
                                    {schema['Categoria'].select.options.map((option) => {
                                        return <Option key={option.name} value={option.name}>{option.name}</Option>
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Footer>
                        {
                            currentModalElement &&
                            <Delete >
                                {
                                    deleting ? (<>
                                        <Reloading />
                                        <p>Deletando..</p>
                                    </>) :
                                        <p onClick={handleDelete}>Excluir</p>
                                }
                            </Delete>
                        }
                        <Cancel
                            onClick={handleClose}
                        >
                            Cancelar
                        </Cancel>
                        {
                            finishingLoad ?
                                <SubmitContainer>
                                    <Reloading />
                                    <p>Finalizando..</p>
                                </SubmitContainer> :
                                <Submit
                                    type='submit'
                                    onClick={handleCreate}
                                    className={!formOk && 'disabled'}
                                >
                                    Finalizar
                                </Submit>

                        }
                    </Footer>
                </Form>
            </Modal>
        </BackContainer>
    )
}

Modal.defaultProps = {};

