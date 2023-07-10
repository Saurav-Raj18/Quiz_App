import React, { useContext, useEffect, useState } from 'react'
import './quiz.css'
import Question from '../../Question/Question'
import { ContextScore } from '../../ContextScore/ContextScore'
const Quiz = ({ name, ques, setques}) => {
    console.log(ques)
    const {score,setscore}=useContext(ContextScore)
    const [options, setoptions] = useState()
    const [currentques, setcurrentques] = useState(0);
    //for shuffling the options-->>>
    const handleShuffle = (optionss) => {
        return optionss.sort(() => 0.5 - Math.random());
    }

    useEffect(() => {
        setoptions(ques && handleShuffle(
            [ques[currentques].correct_answer,
            ...ques[currentques].incorrect_answers]))

    }, [currentques,ques]);
    // console.log(options)
    return (
        <div className='quiz-part d-flex flex-column gap-3'>
            <p className="quiz-welc"><span className='shadow'>Welcome,{name}</span></p>
            {
                ques && ques.length>0? (<>
                    <div className='quiz-info d-flex justify-content-between'>
                        <div className='quiz-info-contnt'>{ques[currentques].category}</div>
                        <div className='quiz-info-contnt'>Score:{score}</div>
                    </div>
                    <Question currentques={currentques} setcurrentques={setcurrentques}
                        ques={ques} options={options}
                        correct={ques[currentques].correct_answer}
                    />

                </>) : (<h1 className='text-center'>....Loading</h1>)
            }
        </div>
    )
}

export default Quiz