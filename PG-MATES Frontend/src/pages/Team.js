import { Card, Row } from "react-bootstrap";

export default function Team() {
  return (
    <div className="mt-3 mx-auto p-4" style={{minHeight:"200px",width:"96%",background:"white"}}>
      <Row>
        <h2 className="text-center">Meet Our Team</h2>
        <p className="text-center">FlatMate team brings you transperancy & a clear view of flats.We have dedicated our service
          to give you best experience
        </p>
        <Card style={{ width: '17rem' }} className="me-2 outline-warning">
          <Card.Img style={{height: '300px'}} variant="top" src={require ("./images/t5.jpg")}/>
          <Card.Body  className="text-center">
            <Card.Title>Anita Verma</Card.Title>
            <Card.Text>
              UI Designer of the project
            </Card.Text>

          </Card.Body>
        </Card>


        <Card style={{ width: '17rem' }} className="me-2">
          <Card.Img style={{height: '300px'}} variant="top" src={require("./images/t1.jpg")} />
          <Card.Body  className="text-center">
            <Card.Title>Ajay Kumar</Card.Title>
            <Card.Text>
              Database Designer
            </Card.Text>

          </Card.Body>
        </Card>

        <Card style={{ width: '17rem' }} className="me-2">
          <Card.Img style={{height: '300px'}} variant="top" src={require("./images/t2.jpg")} />
          <Card.Body  className="text-center">
            <Card.Title>Anand Singh</Card.Title>
            <Card.Text>
              Backend Developer
            </Card.Text>

          </Card.Body>
        </Card>

        <Card style={{ width: '17rem' }} className="me-2">
          <Card.Img style={{height: '300px'}} variant="top" src={require("./images/t3.jpg")}/>
          <Card.Body  className="text-center">
            <Card.Title>Vijay Kumar</Card.Title>
            <Card.Text>
              Frontend Developer
            </Card.Text>

          </Card.Body>
        </Card>

        <Card style={{ width: '17rem' }} className="me-2">
          <Card.Img style={{height: '300px'}} variant="top" src={require("./images/t4.jpg")} />
          <Card.Body  className="text-center">
            <Card.Title>Manoj Kumar</Card.Title>
            <Card.Text>
              DevOps Developer
            </Card.Text>

          </Card.Body>
        </Card>



      </Row>

    </div>
  );
}