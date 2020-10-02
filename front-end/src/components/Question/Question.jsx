import React, { useState } from 'react'

function Question(props) {
    return (
        <>
        <div className="game__question-text">{props.songInfo[0].lyrics}</div>
            <div className="game__answer-section">
                {props.songInfo[0] &&
                <>
                {props.songInfo[0].answerOptions.map(answerOption => <button>{answerOption.answerText} </button>)}
                </>
                }
        </div>
        </>
    )
}

export default Question
