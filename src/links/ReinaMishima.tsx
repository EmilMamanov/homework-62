import React from 'react';
import reinaMishimaImage from '../assets/reina-mishima.jpg';

const ReinaMishima: React.FC = () => {
    return (
        <div>
            <h2>Reina Mishima</h2>
            <div>
                <img className="" src={reinaMishimaImage}/>
            </div>
            <h3>
                Biography
            </h3>
            <p>
                Reina is a mysterious girl who overwhelms those who confront her with lightning-fast skills. Everything about her is shrouded in mystery except that she is a high school student at Mishima Polytechnical School.
            </p>
            <h3>
                Personality
            </h3>
            <p>
                Reina exudes a charismatic sense of evil, reflecting her character’s duality in both personality and fighting style
            </p>
            <h3>
                Appearance
            </h3>
            <p>
                Reina is a young woman with a slight build. Her hair is cut in a short, untidy bob, with purple tips that fade into her natural black. Her primary outfit is sporty with an emphasis on style as well as practicality.
            </p>
        </div>
    );
};

export default ReinaMishima;