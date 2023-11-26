import React from 'react';
import kazuyaMishimaImage from '../assets/kazuya-mishima.jpg';

const KazuyaMishima: React.FC = () => {
    return (
        <div>
            <h2>Kazuya Mishima</h2>
            <div>
            <img src={kazuyaMishimaImage}/>
            </div>
            <p>Kazuya Mishima (三島 一八 Mishima Kazuya?) is one of the main characters in the Tekken series. He appears in all Tekken games except Tekken 3, in which he only made two cameo appearances. Although he is seen as the main protagonist and hero of the first Tekken game, Kazuya became one of the main antagonists of the series ever since Tekken 2. Kazuya is the son of Heihachi Mishima and Kazumi Mishima, the possible love interest of Jun Kazama and the father of Jin Kazama. He is also the adoptive brother of Lee Chaolan, the half-brother of Lars Alexandersson, and the grandson of Jinpachi Mishima.</p>
        </div>
    );
};

export default KazuyaMishima;