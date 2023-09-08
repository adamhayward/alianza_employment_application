import React from "react";
import { Col, FloatingLabel, Form } from "react-bootstrap";

export default function FieldRequied(props) {
  return (
    <Col xs={props.xs} md={props.md}>
      <FloatingLabel label={props.label}>
        <Form.Control className="mt-3"
          required
          offset={props.offset}
          placeholder={props.label}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          maxLength={props.maxLength}
          pattern={props.pattern}
        />
      </FloatingLabel>
    </Col>
  );
}
