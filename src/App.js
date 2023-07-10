import './App.css';
import React, { useState } from 'react';
import Header from './Component/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Quiz from './pages/Quiz/Quiz'
import Result from './pages/Result/Result'
import axios from 'axios';
function App() {
  const [name, setname] = useState("")
  const [ques, setques] = useState("")
  //const [score, setscore] = useState(0);

  const fetchQuestions = async (category, difficulty) => {
    try {

      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
        }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
      );
      console.log(data);
      setques(data.results) // question will contain all the data.results which have ques,ans,cat,diff etc 
    } 
    catch (error) {
      console.log(error);
    }


  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home name={name} setname={setname} fetchQuestions={fetchQuestions} />} />
          <Route path='/quiz' element={<Quiz name={name} ques={ques} setques={setques}  />} />
          <Route path='/result' element={<Result  setques={setques}/>}  />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
