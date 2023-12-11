import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function GameEntries(props){
    return(
        <div className="App">
            <Card style={{ width: '42rem' }}>
            <Card.Title>{props.gameDetails.title}</Card.Title>
            <img src={props.gameDetails.boxArt}></img>
            <p>{props.gameDetails.desc}</p>
            </Card>
            <br/>
        </div>
    );
}
export default GameEntries;