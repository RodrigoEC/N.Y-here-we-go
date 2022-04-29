import { Col, Form, Input, Row, Select } from 'antd';
import React from 'react';
import { Modal, Delete, Submit } from './style';

export const ModalBoughts = ({ active, element, schema }) => {

    return (
        <Modal
            title="Informações de compra"
            visible={active}
            footer={[
                <Delete>Deletar compra</Delete>,
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
    )
}

Modal.defaultProps = {};

