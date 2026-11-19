import React from 'react'
import { Card, Row, Col, Button, Image } from 'react-bootstrap'

export default function PersonCard({ person }) {
  const { name, login, picture, gender, location, email, dob, registered, phone, cell } = person

  const fields = [
    ['User Name', <span className="username">{login.username}</span>],
    ['Gender', gender.toUpperCase()],
    ['Time Zone Description', location.timezone.description],
    [
      'Address',
      `${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.country} - ${location.postcode}`,
    ],
    ['Email', email],
    ['Birth Date and Age', `${dob.date} (${dob.age})`],
    ['Register Date', registered.date],
    ['Phone#', phone],
    ['Cell#', cell],
  ]

  return (
    <Card className="person-card">
      <Card.Header className="fw-bold">
        {name.title} {name.first} {name.last} - {login.uuid}
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md={2} className="text-center">
            <Image src={picture.large} roundedCircle className="avatar" alt={name.first} />
            <div className="mt-3">
              <Button variant="primary" size="sm">Details</Button>
            </div>
          </Col>
          <Col md={10}>
            {fields.map(([label, value]) => (
              <Row key={label} className="field-row">
                <Col xs={4} md={3} className="text-end">{label}:</Col>
                <Col xs={8} md={9}>{value}</Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
