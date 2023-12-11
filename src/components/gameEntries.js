import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

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
            <p>{props.gameDetails.desc}</p>
            </Card>
            <br/>
        </div>
    );
}
export default GameEntries;