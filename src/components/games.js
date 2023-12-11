import GameEntries from "./gameEntries";

function Games(props){
    return props.gameDetails.map(
        (game)=>{
            return <GameEntries gameDetails={game} key={game._id} reload={()=>{props.Reload();}}></GameEntries> 
        }
    );
}

export default Games;