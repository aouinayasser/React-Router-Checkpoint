import { Modal, Button, Form } from 'react-bootstrap'
import { useState } from 'react'


export default function AddMovie({addInMovies}) {
    const [addTitle, setAddTitle] = useState('')
    const [description, setAddDescription] = useState('')
    const [posterUrl, setAddPosterUrl] = useState('')
    const [rating, setAddRating] = useState(1)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <>
        <Button className="buttonModal" variant="primary" onClick={handleShow}>
          Add a movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Control type="text" placeholder="Title" value={addTitle} onChange={(e) => setAddTitle(e.target.value)}/>
            <br />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>description</Form.Label>
              <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setAddDescription(e.target.value)}/>
            </Form.Group>
            <br />
            <Form.Control type="text" placeholder="posterURL" value={posterUrl} onChange={(e) => setAddPosterUrl(e.target.value)}/>
            <Form.Control type="text" placeholder="Rating" value={rating} onChange={(e) => setAddRating(e.target.value)}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>addInMovies({title:addTitle
              ,description,posterUrl,rating})}>
              Add this movie
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }