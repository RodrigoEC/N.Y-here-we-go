import { Col, Form, Input, Row, Select } from 'antd';
import React, { useState } from 'react';
import { useContent } from '../../context/elements';
import { useTheme } from '../../context/theme';
import { createPage } from '../../services/notion';
import { Close } from '../icons/Close';
import { Modal, Cancel, Submit, BackContainer, Footer, Title, Header, Reloading, SubmitContainer, Icon, TitleContainer } from './style';

export const ModalBoughts = () => {
    const [finishingLoad, setFinishingLoad] = useState(false);
    const { setActiveModal, schema, getListData } = useContent();
    const [form] = Form.useForm();
    const { Option } = Select;
    const { theme } = useTheme();


    const handleCreate = async () => {
        const formObject = form.getFieldsValue('Compra')
        const properties = {
            'Moeda': {
                select: {
                    name: formObject.Moeda
                }
            },
            'Categoria': {
                select: {
                    name: formObject.Categoria
                }
            },
            'Compra': {
                title: [
                    {
                        'text': {
                            content: formObject.Compra
                        }
                    }
                ]
            },
            'Preço': {
                'number': Number(formObject['Preço']),
            }
        }
        const creatingPromise = createPage(properties);
        setFinishingLoad(true);
        creatingPromise.then(() => {
            setActiveModal(false);
            getListData();
        });
    }

    return (
        <BackContainer onClick={() => setActiveModal(false)}>
            <Modal onClick={(e) => e.stopPropagation()}>
                <Header>
                    <TitleContainer>
                        <Title>Adicionar compra</Title>
                        <Icon color={theme.secondary} />
                    </TitleContainer>
                    <Close
                        id='close-tab'
                        onClick={() => setActiveModal(false)}
                    />
                </Header>
                <Form layout="vertical" form={form}>
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
                        <Cancel
                            onClick={() => setActiveModal(false)}
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

