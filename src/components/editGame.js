import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function EditGame(props){
    //Take the passed on id from whatever game the edit button was pressed
    let {id} = useParams();
    //Similar to addGame.js, we wil update using useState
    const [title, setTitle] = useState('');
    const [boxArt, setBoxArt] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [tags, setTags] = useState('');
    //Used solely to stop the title from changing from user edits
    const [editTitleBar, setEditTitleBar] = useState('');
    
    //For returning to the store page
    const navigate = useNavigate();

    //Again, like addGame.js, use effect with axios to update the game with an id matching what was passed on
    useEffect(() => {
        axios.get('http://localhost:4000/api/game/' + id)
        .then((response) =>{
            setTitle(response.data.title);
            setBoxArt(response.data.boxArt);
            setDesc(response.data.desc);
            setPrice(response.data.price);
            setTags(response.data.tags);
            //Used solely to stop the title from changing from user edits
            setEditTitleBar(response.data.title);
        })
        //If there is an issue with connecting
        .catch(function(error){
            console.log(error);
            console.log("This is most likely happening because the server is not running!")
        })
    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();

        const game = ({
            title:title,
            boxArt:boxArt,
            desc:desc,
            price:price,
            tags:tags
        });
        axios.put('http://localhost:4000/api/game/'+ id, game)
        .then((res) =>{
            console.log(res.data);
            navigate('/store');
        });
        
    }

    //HTML with very similar layout to addGame.js
    return(
        <div style={{ margin: 'auto', width: '60%'}}>
           <h2 style={{
                padding: '5px',
                background: 'linear-gradient(to right, #F05511, #9C0902)',
                borderRadius: '5px 5px 5px 5px'
            }}>Edit {editTitleBar}'s Details</h2>
            <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="form-group">
                    <label>Edit Game Title:</label>
                    <input type="text"
                    value={title}
                    className="form-control"
                    onChange={(e)=> {setTitle(e.target.value) }}
                    />
                </div>
                {/* Box Art */}
                <div className="form-group">
                    <label>Edit Game Box Art:</label>
                    <input type="text"
                    value={boxArt}
                    className="form-control"
                    onChange={(e)=> {setBoxArt(e.target.value) }}
                    />
                </div>
                {/* Description */}
                <div className="form-group">
                    <label>Edit Game Description:</label>
                    <textarea type="text"
                    value={desc}
                    className="form-control"
                    onChange={(e)=> {setDesc(e.target.value) }}
                    />
                </div>
                {/* Price */}
                <div className="form-group">
                    <label>Edit Game Price:</label>
                    <input type="number"
                    value={price}
                    step="0.01"
                    min='0'
                    max='150'
                    className="form-control"
                    onChange={(e)=> {setPrice(e.target.value) }}
                    />
                </div>
                {/* Tags */}
                <div className="form-group">
                    <label>Edit Game Tags:</label>
                    <input type="text"
                    value={tags}
                    className="form-control"
                    onChange={(e)=> {setTags(e.target.value) }}
                    />
                </div>
                <br/>
                {/* Submit Button */}
                <div>
                    <input type="submit" value="Submit Edits"style={{ 
                        background: 'linear-gradient(to right, #F05511, #9C0902)',
                        color: 'white'
                        }}></input>
                </div>
            </form>
        </div>
    );
}