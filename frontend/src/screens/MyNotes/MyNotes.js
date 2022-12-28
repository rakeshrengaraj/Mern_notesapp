import React, { useEffect, useState } from "react";
import "./MyNotes.css";
import { Card, Container, Accordion, Button, Badge } from "react-bootstrap";
import MainScreen from "../../components/MainScreen/MainScreen";
// import notes from "../../data/notes"; // static data from json file not required as we are fetching from api
import axios from "axios";

const MyNotes = () => {
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      console.log("Delete clicked", id);
    }
  };

  const [notes, setNotes] = useState([]);

  const fetchApi = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="mynotes my-3">
      <MainScreen title={"Welcome Back Rakesh Rengaraj"}>
        <Container>
          <Button href="/createnote" variant="primary" size="lg">
            Create a note
          </Button>
          {notes.map((note) => {
            return (
              <Accordion key={note._id}>
                <Accordion.Item eventKey="0">
                  <Card className="mt-3">
                    <Card.Header>
                      <Accordion.Header>{note.title}</Accordion.Header>
                      <div className="accordion-btn">
                        <Button className="mx-1" href={`/edit/${note._id}`}>
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(note._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Header>
                    <Accordion.Body>
                      <Card.Body>
                        <Badge bg="success" className="mb-2 category-badge">
                          Category:- {note.category}
                        </Badge>
                        <blockquote className="blockquote mb-0">
                          <p>{note.content}</p>
                          <footer className="blockquote-footer">
                            created at
                          </footer>
                        </blockquote>
                      </Card.Body>
                    </Accordion.Body>
                  </Card>
                </Accordion.Item>
              </Accordion>
            );
          })}
        </Container>
      </MainScreen>
    </div>
  );
};

export default MyNotes;
