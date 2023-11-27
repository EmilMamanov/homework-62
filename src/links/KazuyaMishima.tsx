import React from 'react';
import kazuyaMishimaImage from '../assets/profiles/kazuya-profile.png';

const KazuyaMishima: React.FC = () => {
    return (
        <div>
            <h2>Kazuya Mishima</h2>
            <div className="main-info">
            <div>
            <img className="profile-pic" src={kazuyaMishimaImage}/>
            </div>
            <p>Kazuya Mishima (三島 一八 Mishima Kazuya?) is one of the main characters in the Tekken series. He appears in all Tekken games except Tekken 3, in which he only made two cameo appearances. Although he is seen as the main protagonist and hero of the first Tekken game, Kazuya became one of the main antagonists of the series ever since Tekken 2. Kazuya is the son of Heihachi Mishima and Kazumi Mishima, the possible love interest of Jun Kazama and the father of Jin Kazama. He is also the adoptive brother of Lee Chaolan, the half-brother of Lars Alexandersson, and the grandson of Jinpachi Mishima.
            </p>
            <h3>
                Biography
            </h3>
            <p>
                Kazuya was born the son of Heihachi Mishima and Kazumi Mishima and raised on the Mishima Estate, the Mishima Clan's enormous aristocratic home in Japan. Kazuya's mother loved and doted on him, as did Kazuya's grandfather, Jinpachi Mishima, who also taught him Mishima Style Fighting Karate from a young age. Kazuya's life took a turn for the worse however when he was five years old. First, his beloved grandfather disappeared (Kazuya would later discover he was imprisoned by Heihachi under the family temple, after Jinpachi failed to retake the Mishima Zaibatsu from Heihachi, who had previously launched a coup against him). Then, Kazuya's mother was killed by Heihachi. Unbeknown to Kazuya, his mother had been tasked with stopping Heihachi from going down a warmongering path at all costs.[11] When her cause seemed lost, she fell into a series of illnesses, and was eventually taken over by a demonic alter ego which attempted to kill Heihachi.
            </p>
            <h3>
                Personality
            </h3>
            <p>
                Kazuya is driven by his need for control, power, and revenge against his father. After initially appearing to be a sympathetic protagonist in Tekken, from Tekken 2 onwards he has shown that everything comes second to his plans for complete control and power. Since Heihachi's death, Kazuya has continued crusading for power and is driven now by the desire for complete control and world domination, an ambition of his that has been hinted at from the very start.
            </p>
            </div>
        </div>
    );
};

export default KazuyaMishima;