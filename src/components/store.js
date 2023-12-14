import { useEffect, useState } from "react";
import axios from "axios";
import Games from './games';
//Store page to list all games on the Database
function Store(){

    //Document by document, get an entry off the database, send it to games.js, format it then send it back to be displayed on this page
    const [data, setData] = useState([]);
    //Used to store filtered data from the above, in this case for storing games that match the search
    const [dataSearch, setDataSearch] = useState('');


    //Sync with DB to get up to date entries
    useEffect(
        ()=>{
            //Retrieve data with axios
            axios.get('http://localhost:4000/api/games')
            //if successful
            .then(
                (response)=>{
                    setData(response.data);
                }
            )
            //If not, log an error to the console
            .catch(
                (error)=>{
                    console.log(error);
                    console.log("This is most likely happening because the server is not running!");
                }
            )
        },[]
    );

    //Refresh after deleting games
    const ReloadStore = (e) => {
        axios.get('http://localhost:4000/api/games')
        //if successful
        .then(
             (response)=>{
                setData(response.data);
             }
         )
        //If not, log an error to the console
        .catch(
              (error)=>{
                  console.log(error);
                  console.log("This is most likely happening because the server is not running!");
              }
        )
    }

    /*Filters all by lower-case so it is case-insensitive. Used to make the searching experience better.
    I was inspired by the top answer in this Stack Overflow question regarding case-insensitive filters.
    https://stackoverflow.com/questions/48979908/react-filter-function-case-insensitive
    */
    const gameSearch = data.filter(game => 
        game.title.toLowerCase().includes(dataSearch.toLowerCase())
    );

    //When the user types in a new value in the search bar, change the filtered game list value (dataSearch)
    const doGameSearch = (event) => {
        setDataSearch(event.target.value);
    };


    return(
        //Display the cards that follow in the center of the store page
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{
                padding: '5px',
                background: 'linear-gradient(to right, #F05511, #9C0902)',
                borderRadius: '5px 5px 5px 5px',
                margin: 'auto', width: '60%'
            }}>Store</h2>
            <input 
                type="text" 
                placeholder="Search for a game..." 
                value={dataSearch}
                onChange={doGameSearch}
            />
            <br/>
            <Games gameDetails={gameSearch} Reload={ReloadStore}></Games>
        </div>
    );
}
export default Store;