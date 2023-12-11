import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function GameEntries(props){
    return(
        <div className="App">
            <Card style={{ width: '42rem',
            background: 'linear-gradient(to right, #F05511, #9C0902)',
            padding: '10px 10px 10px 10px',
            borderRadius: '15px 15px 15px 15px',
            }}>
            <Card.Title>{props.gameDetails.title}</Card.Title>
            <img src={props.gameDetails.boxArt} style={{ borderRadius: '15px 15px 15px 15px'}}></img>
            <Card.Body>
                <p style={{
                    background: 'linear-gradient(to right, #E0470E, #F05511)',
                    borderRadius: '5px 5px 5px 5px',
                    padding: '5px 5px 5px 5px',

            }}><b>{props.gameDetails.desc}</b></p>
                <h4>{props.gameDetails.tags}</h4>
                <h3>€{props.gameDetails.price}</h3>
            </Card.Body>
            <Link to={"/editGame/"+props.gameDetails._id} className='btn btn-primary'>Edit</Link>
            <Button variant="danger" onClick={
                (e)=>{
                    axios.delete('http://localhost:4000/api/game/'+props.gameDetails._id)
                    .then(()=>{
                        let reload = props.reload();
                    })
                    .catch(console.log(props.gameDetails._id));
                }
            }>Delete</Button>
            </Card>
            <br/>
        </div>
    );
}
export default GameEntries;