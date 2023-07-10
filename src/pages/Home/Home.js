import React, { useState } from 'react'
import './home.css'
import { TextField, MenuItem, Button } from '@mui/material';
import Categories from '../../Data.js/Categories';
import Difficulty from '../../Data.js/Difficulty';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../Component/Error/ErrorMessage';



const Home = ({ name, setname,fetchQuestions }) => {
    // const [name,setname]=useState("");
    const [category, setcategory] = useState("");
    const [difficulty, setdifficulty] = useState("");
    const [error, seterror] = useState(false);
    const history = useNavigate();//for navigating to other page on click..
  
    const handleSubmit = () => {
        if (!name || !category || !difficulty) {
            seterror(true);
        }
        else {
            seterror(false);
            fetchQuestions(category,difficulty);
            history("/quiz");

        }
    }
    return (
        <>
            <div className='Home-page'>

                <div className='setting'>

                    <span className='title'>Quiz Setting</span>

                    <div className='setting-select d-flex flex-column gap-5'>
                        {error && <ErrorMessage />}

                        <TextField className="text-area" id="outlined-basic" label="Enter Your Name" variant="outlined"  onChange={(e)=>setname(e.target.value)}/>

                        <TextField className='text-area'
                            id="outlined-select-category"
                            select
                            label="Select category"
                            value={category}
                            onChange={(e)=>{setcategory(e.target.value)}}
                            

                        >
                            {
                                Categories.map((cat) => (
                                    <MenuItem key={cat.category} value={cat.value}>
                                         {cat.category}
                                         </MenuItem>
                                ))
                            }
                        </TextField>

                        <TextField className='text-area'
                            id="outlined-select-difficulty"
                            select
                            label="Select difficulty"
                            value={difficulty}
                            onChange={(e)=>{setdifficulty(e.target.value)}}
                        >
                            {Difficulty.map((option) => (
                                <MenuItem key={option.difficulty} value={option.value}>
                                    {option.difficulty}
                                </MenuItem>
                            ))}
                        </TextField>

                        <Button variant="contained" size="large" onClick={handleSubmit}>
                            Start Quiz
                        </Button>
                    </div>
                </div>

                <div className='image-div'>
                    <img src='image/quiz.svg' />
                </div>

            </div>
        </>
    )
}

export default Home