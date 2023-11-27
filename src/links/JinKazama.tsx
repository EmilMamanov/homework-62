import React from 'react';
import YouTube from 'react-youtube';
import jinKazamaImage from '../assets/profiles/jin-profile.png';

const JinKazama: React.FC = () => {

    const videoId = 'vkJQZ2Cz9-s';

    return (
        <div>
            <h2>Jin Kazama</h2>
            <div className="main-info"></div>
            <div>
                <img alt="jin" className="profile-pic" src={jinKazamaImage}/>
            </div>
            <p>Jin Kazama (風間 仁 Kazama Jin) is one of the main characters of the Tekken series. He is featured on the cover art for the console version of almost every sequel following his introduction in Tekken 3. He has been the main protagonist for the majority of the following entries ever since his debut in Tekken 3, and his main motivation has been trying to end the Mishima Bloodline to save the world from their evil.
                The exception to this was when he took on a role as the main antagonist in Tekken 6 (with Lars Alexandersson taking his role as the protagonist), and also when he took on the role of supporting character in Tekken 7 (where Heihachi Mishima and Kazuya Mishima became the main characters of the game). He will return as the main protagonist in Tekken 8. Jin is the son of Kazuya Mishima and Jun Kazama, the grandson of Heihachi Mishima and Kazumi Mishima, the nephew of Lee Chaolan, the half-nephew of Lars Alexandersson, a relative of Asuka Kazama, and the great-grandson of Jinpachi Mishima.
            </p>
            <h3>
                Biography
            </h3>
            <p>
                Jin Kazama is the son of Jun Kazama and Kazuya Mishima. During Jun's pregnancy, part of Kazuya's Devil, (which fled Kazuya when he was thrown into a volcano by his father) attempted to possess Jin, who inherited his father's Devil Gene. Jun managed to fight Devil off and hold it at bay throughout her pregnancy and Jin's childhood. Jun raised Jin in a remote location in the mountains of Yakushima, and trained him in the Kazama family's self-defense fighting style.

                When Jin was fifteen years old, Jun sensed the approach of a great evil. Preparing for the worst, she informed Jin of his origins and told him that, if anything should happen to her, he was to seek out his grandfather, Heihachi Mishima. Jun's premonitions soon proved to be correct, and she and Jin were attacked by Ogre. Jin was knocked unconscious, and woke up to find his surroundings burned to the ground and his mother gone. In Jun's absence, Devil seized its chance to possess Jin, and branded his left arm. Jin followed his mother's wishes and found Heihachi Mishima, who went on to train him in Mishima-style Karate. During this time, Jin attended the Mishima Polytechnical School and met Ling Xiaoyu there. He also met Hwoarang during a street fight in which they fought to a draw, leading to a persistent rivalry.
            </p>
            <h3>Personality</h3>
            <p>
                Jin's actions and the events that occurred to him fit the mold of a quintessential "tragic hero". As with many tragic heroes, all of the major traumatic events that occur within the hero's life are beyond his control.

                First and foremost, there's the fact that his father and grandfather are cruel and ruthless individuals only interested in furthering their own cause at the expense of everyone else. Secondly, his mother was cruelly and abruptly taken from him while he was still a teenager. Thirdly, he was betrayed by his grandfather, whom he trusted deeply. Fourthly, he finds he has inherited an evil devil that he cannot control or get rid of and embodies the evil in the Mishimas that he has been fighting against. Fifthly, the return of his great-grandfather, Jinpachi Mishima, contributed to Jin continuing to lose his internal struggle with the Devil within. Sixthly, the appearance of Azazel prompts him to corrupt the Mishima Zaibatsu further just for the chance to face the beast and sacrifice himself to destroy it. Each of these occurs to a helpless and unassuming Jin, who believes he is simply doing what he can to set things right at every turn (although his choices in Tekken 6 are pointed out by other characters to be too great a cost, and evil in nature).
            </p>
            <div>
                <h3>Watch trailer</h3>
                <YouTube videoId={videoId} />
            </div>
        </div>
    );
};

export default JinKazama;