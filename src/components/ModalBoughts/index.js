import { Col, Form, Input, Row, Select } from 'antd';
import React from 'react';
import { Modal, Cancel, Submit, BackContainer } from './style';

export const ModalBoughts = ({ element, schema }) => {

    return (
        <BackContainer>
            <Modal
                title="Informações de compra"
                footer={[
                    <Cancel>Cancelar</Cancel>,
                    <Submit>Finalizar</Submit>
                ]}
            >
                <Form layout="vertical" >
                    <Form.Item label='Compra'>
                        <Input />
                    </Form.Item>
                    <Row gutter={24}>
                        <Col span={10}>
                            <Form.Item label='Preço'>
                                <Input type='number' />
                            </Form.Item>
                        </Col>
                        <Col span={14}>
                            <Form.Item label='Moeda'>
                                <Select />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item label='Categoria'>
                        <Select />
                    </Form.Item>
                </Form>
            </Modal>
        </BackContainer>
    )
}

Modal.defaultProps = {};

