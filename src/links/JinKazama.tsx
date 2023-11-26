import React from 'react';
import jinKazamaImage from '../assets/jin-kazama.jpg';

const JinKazama: React.FC = () => {
    return (
        <div>
            <h2>Jin Kazama</h2>
            <div>
                <img className="Jin-image" src={jinKazamaImage}/>
            </div>
            <p>Jin Kazama (風間 仁 Kazama Jin) is one of the main characters of the Tekken series. He is featured on the cover art for the console version of almost every sequel following his introduction in Tekken 3. He has been the main protagonist for the majority of the following entries ever since his debut in Tekken 3, and his main motivation has been trying to end the Mishima Bloodline to save the world from their evil.
                The exception to this was when he took on a role as the main antagonist in Tekken 6 (with Lars Alexandersson taking his role as the protagonist), and also when he took on the role of supporting character in Tekken 7 (where Heihachi Mishima and Kazuya Mishima became the main characters of the game). He will return as the main protagonist in Tekken 8. Jin is the son of Kazuya Mishima and Jun Kazama, the grandson of Heihachi Mishima and Kazumi Mishima, the nephew of Lee Chaolan, the half-nephew of Lars Alexandersson, a relative of Asuka Kazama, and the great-grandson of Jinpachi Mishima.</p>
        </div>
    );
};

export default JinKazama;