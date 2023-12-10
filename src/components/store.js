import { useEffect, useState } from "react";
import axios from "axios";
//Store page to list all games on the Database
function Store(){

    //Document by document, get an entry off the database, send it to games.js, format it then send it back to be displayed on this page
    const [data, setData] = useState([]);

    //Sync with DB to get up to date entries
    useEffect(
        ()=>{
            //Retrieve data with axios
            axios.get("http://localhost:4000/api/games")
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
                }
            )
        },[]
    );


    return(
        <div>
            <h2>Store</h2>
            {/* <Games gameDetails={data}></Books> */}
        </div>
    );
}
export default Store;