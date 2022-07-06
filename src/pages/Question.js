import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../services/api'
import { Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap'
import moment from 'moment'
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  content: Yup.string()
    .min(10, "en az 10 karakter giriniz")
    .required("Zorunlu alan"),
});

const Question = () => {
  const { questionId } = useParams()
  const navigate = useNavigate()
  const [question, setQuestion] = useState()

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axiosInstance.get(`/questions/${questionId}`)
        setQuestion(response.data)
      } catch (err) {
        if (err) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log("Error: " + err.message);
        }
      }
    }
    fetchQuestion()
  }, [questionId])

  console.log(question)

  return (
    <div>
      <Row>
        <Col><h1>Sorular</h1></Col>
        <Col>
          <Button className="float-end" color="dark" size="lg">
            <Link style={{ color: "white" }} to="/ask-question">Soru Sor</Link>
          </Button>
        </Col>
      </Row>
      <Row>
        <Card className="my-4"
        >
          <CardBody>
            <CardTitle tag="h5">
              {question?.data.title}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {question?.data.user.name + " - " + moment(question?.data.createdAt).format('DD/MM/YYYY')}
            </CardSubtitle>
            <CardText>
              {question?.data.content}
            </CardText>
          </CardBody>
        </Card>
        <hr />
      </Row>
      <Row>
        {question?.data.answers.map(answer => {
          return (
            <Card className="my-2 w-75 mx-auto"
            >
              <CardBody>
                <CardTitle tag="h5">
                  {answer.user.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {moment(answer.createdAt).format('DD/MM/YYYY')}
                </CardSubtitle>
                <CardText>
                  {answer.content}
                </CardText>
              </CardBody>
            </Card>
          )
        })}
        <hr />
      </Row>
      <Row>
      <Formik
          initialValues={{
            content: ""
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            axiosInstance.post(`/questions/${questionId}/answers`, values)
            .then(navigate(0))
          }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="content">Cevap Yazın</Label>
                <Input
                  id="content"
                  name="content"
                  placeholder="Cevabınızı buraya yazınız"
                  type="textarea"
                  onChange={handleChange}
                  values={values.content}
                />
                {errors.content && errors.content ? (
                  <div className="text-danger">* {errors.content}</div>
                ) : null}
                <Button type="submit" className="mt-2" color="primary">
                  Cevapla
                </Button>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </Row>
    </div>
  )
}

export default Question