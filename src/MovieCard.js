import { Card } from 'react-bootstrap'
import { Typography,Rating } from '@mui/material'
import { Link } from 'react-router-dom'

export default function MovieCard ({ movie }) {
    return (
        <div>
            <Link to={`/MovieDescription/${movie.id}`}>
                <Card style={{ width: '12rem', height: '20px' }}>
                    <Card.Img variant="top" src={movie.posterUrl} />
                    <Card.Body>
                        <Card.Title><h6>{movie.title}</h6></Card.Title>
                        <Card.Text>
                            <Typography component="legend"></Typography>
                            <Rating name="read-only" value={movie.rating} readOnly />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}