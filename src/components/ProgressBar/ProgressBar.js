import React from 'react';
import "./progressBar.css"

const ProgressBar = ({score, totalQuestion, wrongScore}) => {

    const scopePercent = Math.round((score / totalQuestion) * 100)


    function calcWidth(barType){
        let width = 0
        if(barType === "correct"){
            width = (score / totalQuestion) * 100

        } else {
            width = (wrongScore / totalQuestion) * 100
        }

        return width + "%"
    }


    return (
        <div className="progressbar-root">

            <div className="score-bar">
                <span className="progressbar correct-score--progressbar" style={{width: calcWidth("correct")}}></span>
            </div>

            <div className="score-percent">{scopePercent}%</div>

            <div className="score-bar">
                <span className="progressbar wrong-score--progressbar" style={{width: calcWidth()}}></span>
            </div>
        </div>
    );
};

export default ProgressBar;