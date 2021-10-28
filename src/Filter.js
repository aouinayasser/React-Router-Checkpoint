import { FormControl,Navbar,Container,Nav,Form,Button } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom'

export default function Filter({ setSearch, setRate }) {
    const ratingChanged = (newRating) => {
        setRate(newRating)
      }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                </Nav>
                <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                />
                </Container>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(event) => setSearch(event.target.value)}
                    />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}