import { useState } from "react";
import axios from "axios";

function AddGame(){
    //Defining the layout of each game entry
    const [title, setTitle] = useState('');
    const [boxArt, setBoxArt] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [tags, setTags] = useState('');

    //When the submit button is clicked
    const handleSubmit = (e)=>{
        //Stop empty entries
        e.preventDefault();

        //Set the former (layout) as the value of the latter (what the user entered in the form)
        const game = ({
            title:title,
            boxArt:boxArt,
            desc:desc,
            price:price,
            tags:tags
        });

        //Sent a post request to add this data to the database, first send it to the server and let it handle the rest
        axios.post("http://localhost:4000/api/games", game)
            .then()
            .catch();
    }

    //Display this HTML as the page, a form letting new games be added
    return(
        <div style={{ margin: 'auto', width: '60%'}}>
            <h2 style={{
                padding: '5px',
                background: 'linear-gradient(to right, #F05511, #9C0902)',
                borderRadius: '5px 5px 5px 5px'
            }}>Add Game to Store</h2>
            <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="form-group">
                    <label>Set Game Title:</label>
                    <input type="text"
                    className="form-control"
                    onChange={(e)=> {setTitle(e.target.value) }}
                    />
                </div>
                {/* Box Art */}
                <div className="form-group">
                    <label>Set Game Box Art:</label>
                    <input type="text"
                    className="form-control"
                    onChange={(e)=> {setBoxArt(e.target.value) }}
                    />
                </div>
                {/* Description */}
                <div className="form-group">
                    <label>Set Game Description:</label>
                    <textarea type="text"
                    className="form-control"
                    onChange={(e)=> {setDesc(e.target.value) }}
                    />
                </div>
                {/* Price */}
                <div className="form-group">
                    <label>Set Game Price:</label>
                    <input type="number"
                    step="0.01"
                    min='0'
                    max='150'
                    className="form-control"
                    onChange={(e)=> {setPrice(e.target.value) }}
                    />
                </div>
                {/* Tags */}
                <div className="form-group">
                    <label>Set Game Tags:</label>
                    <input type="text"
                    className="form-control"
                    onChange={(e)=> {setTags(e.target.value) }}
                    />
                </div>
                <br/>
                {/* Submit Button */}
                <div>
                    <input type="submit" value="Add Game"></input>
                </div>
            </form>
        </div>
    )
    
}
export default AddGame;