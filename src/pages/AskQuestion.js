import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/api";

const validationSchema = Yup.object({
  title: Yup.string()
    .min(10, "en az 10 karakter giriniz")
    .required("Zorunlu alan"),
  content: Yup.string()
    .min(20, "en az 20 karakter giriniz")
    .required("Zorunlu alan"),
});

const AskQuestion = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Row>
        <Col>
          <h1>Yeni Soru</h1>
        </Col>
      </Row>
      <Row>
        <Formik
          initialValues={{
            title: "",
            content: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            axiosInstance.post("/questions/ask", values)
            .then((response) => console.log(response))
            .then(() => navigate("/home"));
          }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="title">Soru Başlığı</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Sorunuz için başlık yazınız"
                  type="text"
                  onChange={handleChange}
                  values={values.title}
                />
                {errors.title && errors.title ? (
                  <div className="text-danger">* {errors.title}</div>
                ) : null}
                <Label for="content">Soru İçeriği</Label>
                <Input
                  id="content"
                  name="content"
                  placeholder="Sorunuzu buraya yazınız"
                  type="textarea"
                  onChange={handleChange}
                  values={values.content}
                />
                {errors.content && errors.content ? (
                  <div className="text-danger">* {errors.content}</div>
                ) : null}
                <Button type="submit" className="mt-2" color="primary">
                  Sor
                </Button>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </Row>
    </div>
  );
};

export default AskQuestion;
