import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import axiosInstance from '../services/api'

const HomePage = () => {
  const [questions, setQuestions] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axiosInstance.get("/questions")
        setQuestions(response.data)
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log("Error: " + err.message);
        }
      }
    }
    fetchQuestion()
  }, [])

  return (
    <div>
      <Row>
        <Col><h1>Sorular</h1></Col>
        <Col>
          <Button className="float-end" color="dark" size="lg">
            <Link style={{color: "white"}} to="/ask-question">Soru Sor</Link>
          </Button>
        </Col>
      </Row>
      <Row>
        {questions?.data?.slice(0).reverse().map((question) => {
          return (
            <Card style={{ cursor: "pointer" }} className="mt-2" onClick={() => {
              navigate(`/question/${question._id}`)
            }}
            >
              <CardBody>
                <CardTitle tag="h5">
                  {question.user.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {moment(question.createdAt).format('DD/MM/YYYY')}
                </CardSubtitle>
                <CardText>
                  {question.title}
                </CardText>
              </CardBody>
            </Card>
          )
        })}
      </Row>
    </div>
  )
}

export default HomePage