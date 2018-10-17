import React from 'react';
import { Form, InputNumber, Button } from 'antd';

const InputForm = ({ form, onSubmit, className }) => (
  <Form
    className={className}
    layout="inline"
    hideRequiredMark
    onSubmit={(e) => {
      e.preventDefault();
      form.validateFields((err, values) => {
        if (!err) {
          onSubmit(values);
        }
      });
    }}
  >
    {[
      { label: 'Latitude', key: 'lat', default: 1.294 },
      { label: 'Longitude', key: 'lng', default: 103.776 },
      { label: 'Within (meters)', key: 'within', default: 5000 },
      { label: 'Count', key: 'count', default: 5 },
    ].map(item => (
      <Form.Item {...item}>
        {form.getFieldDecorator(item.key, {
          rules: [{ required: true, message: `Please input ${item.label}!` }],
          initialValue: item.default,
        })(<InputNumber />)}
      </Form.Item>
    ))}
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default Form.create()(InputForm);
