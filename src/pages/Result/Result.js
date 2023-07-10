import React, { useContext } from 'react';
import { ContextScore } from '../../ContextScore/ContextScore';
import { useNavigate } from 'react-router-dom';

const Result = ({setques,ques}) => {
  const { score ,setscore} = useContext(ContextScore);
  const history=useNavigate();
  const handleClick=()=>{
      setscore(0)
      setques("");
      history("/")

  }
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-center">YOUR SCORE IS: {score}</h1>
      <button className="btn btn-primary mt-4" onClick={handleClick}>GO TO HOMEPAGE</button>
    </div>
  );
};

export default Result;
