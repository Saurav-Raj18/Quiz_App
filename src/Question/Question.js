import React, { useContext, useState } from 'react';
import ErrorMessage from '../Component/Error/ErrorMessage';
import './question.css';
import { useNavigate } from 'react-router-dom';
import { ContextScore } from '../ContextScore/ContextScore';

const Question = ({ currentques, setcurrentques, ques, options, correct }) => {
  const { score, setscore } = useContext(ContextScore);
  const history = useNavigate();
  const [error, seterror] = useState(false);
  const [selected, setselected] = useState();

  const handleClick = (i) => {
    setselected(i);
    if (i === correct) {
      setscore(score + 1);
    }
    seterror(false);
  };

  const handleSelected = (i) => {
    if (selected === i && selected === correct) {
      return 'select';
    } else if (selected === i && selected !== correct) {
      return 'wrong';
    } else if (i === correct) {
      return 'select';
    }
  };

  const handleNext = () => {
    if (currentques > 8) {
      history('/result');
    } else {
      setcurrentques(currentques + 1);
      setselected();
    }
  };

  const handleQuit = () => {
    history('/');
    setcurrentques(0);
    setselected();
    setscore(0);
  };

  return (
    <>
      <h2 className="text-center">Question: {currentques + 1}</h2>
      <div className="single-ques text-center mt-4">
        <div className="btn-opt container-fluid">
          <h2>{ques[currentques].question}</h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-6 d-flex flex-column gap-5">
              {error && <ErrorMessage />}
              {options &&
                options.slice(0, 2).map((i) => (
                  <button
                    key={i}
                    onClick={() => handleClick(i)}
                    className={`singleoption ${selected ? handleSelected(i) : ''}`}
                    disabled={selected}
                  >
                    {i}
                  </button>
                ))}
            </div>
            <div className="col-12 col-md-6 d-flex flex-column gap-5">
              {options &&
                options.slice(2, 4).map((i) => (
                  <button
                    key={i}
                    onClick={() => handleClick(i)}
                    className={`singleoption ${selected ? handleSelected(i) : ''}`}
                    disabled={selected}
                  >
                    {i}
                  </button>
                ))}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 col-md-6 text-center text-md-start">
              <button
                className="btn btn-primary"
                style={{ cursor: 'pointer', padding: '10px' }}
                onClick={handleQuit}
              >
                Quit Quiz
              </button>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end mt-2 mt-md-0">
              <button
                className="btn btn-primary"
                onClick={handleNext}
                style={{ cursor: 'pointer', padding: '10px' }}
              >
                Next Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
