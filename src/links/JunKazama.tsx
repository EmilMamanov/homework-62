import React from 'react';
import YouTube from 'react-youtube';
import junKazamaImage from '../assets/jun-kazama.jpeg'

const JunKazama: React.FC = () => {

    const videoId = 'PbJ0ie1Ao3U';

    return (
        <div>
            <h2>Jun Kazama</h2>
            <div className="main-info">
                <img alt="jun" className="profile-pic" src={junKazamaImage}/>
                <p>Jun Kazama (風間 準 Kazama Jun?) is a character in the Tekken series who made her debut in Tekken 2. She is the mother of Jin Kazama, having raised him alone after failing to save Jin's father, Kazuya Mishima, from Devil's influence. Jin assumes her to be dead after witnessing her being attacked by Ogre on his fifteenth birthday, at a time when Ogre was attacking and killing participants of the second King of Iron Fist Tournament. Jun's official status, however, is "missing".[3] She has had multiple cameos and references in every mainline game following Tekken 2 despite not canonically returning as a playable character until Tekken 8. In the non-canonical Tekken Tag Tournament 2, after being defeated in Arcade Mode, Jun transforms into Unknown, the final boss.</p>
                <h3>
                    Biography
                </h3>
                <p>
                    Jun was a wildlife surveillance officer of the conservation group WWWC. She used Kazama Style Traditional Martial Arts, a martial art that has been handed down the Kazama family for generations.

                    Jun grew up surrounded by nature on the island of Yakushima, where she was taught the ways of the Kazama-style martial arts and developed strong psychic abilities, before moving to Tokyo when she reached adulthood. While city life distanced her from spiritual surroundings, her father's ghost appeared to her, reaffirming her beliefs in the supernatural.

                    It was during her time in Tokyo, while working for WWWC, that she heard of a man named Kazuya Mishima, who was involved in the smuggling of protected animals. Also sensing a mysterious power surrounding Kazuya, Jun decided to enter the second King of Iron Fist Tournament to put an end to the illegal smuggling and to free Kazuya from whatever power it was that surrounded him.[1]

                    At some point during this time, Jun and Kazuya became close,[6] and Jun became pregnant with Kazuya's child. Eventually, Kazuya confronted his father, who defeated him in battle and subsequently disposed of his son's body in an active volcano.[7]

                    Jun returned to Yakushima. She gave birth to her and Kazuya's son, whom she named Jin. There, she raised him in the mountains, teaching him the way of Kazama Style Traditional Martial Arts as he grew up.

                    As Jin approached his fifteenth birthday, Jun began to sense the approach of a great evil. Concerned, she warned Jin that, should anything happen to her, he was to seek out his grandfather, Heihachi. On the day of Jin's fifteenth birthday, Jun's premonition came true when she was attacked by Ogre, who was seeking out the world's greatest martial artists to defeat them and absorb their abilities. Jin rushed to his mother's side to aid her in battle, but was easily outmatched by Ogre and knocked unconscious. When he awoke, he found his home destroyed and Jun nowhere to be found. Believing her to be dead, Jin set out to avenge her by defeating Ogre.[8] Jun's true status after these events remains unknown.
                </p>
                <h3>
                    Personality
                </h3>
                <p>
                    Not much is known of Jun's personality aside from the few hints that other characters have given throughout the series; for example, Kazuya describes her as "mysterious" in his Tekken 6 prologue. Jun seems to embody tranquility and purity and is shown to have a peaceful and animal-loving nature. This is evident in her mission to save Kazuya from the corruption of Devil in Tekken 2, the forest animals' natural affinity towards her (shown in her Tekken 2 and Tekken Tag Tournament 2 endings), her choice of vocation as an animal welfare officer, and her ability to suppress the Devil Gene (as hinted at by Angel's presence in Kazuya, as well as in her Tekken Tag Tournament ending, and during her special tag win-pose with Devil Jin in Tekken Tag Tournament 2).

                    Jun is someone for whom spirituality is important. After coming to Tokyo for her work, she became disillusioned being so far from nature, only becoming renewed in her dedication after she was visited by the ghost of her father. Her Tekken 2 profile describes her as being able to 'commune' with nature, and that her meeting with her dead father helped her understand paranormal phenomena. Her desire to save Kazuya is always referred to in spiritual terms and she has some psychic or empathetic abilities of her own.

                    That Jun became close to Kazuya,[6] and desired to free him of Devil despite his part in illegal animal smuggling suggests that Jun may have had a forgiving outlook and a propensity to see past a person's negative traits.

                    Jun held a deep and strong love for she and Kazuya's son, Jin Kazama. Having raised Jin as a single parent since his birth, she and Jin appear to have shared a very powerful bond.

                    In Tekken 8 during the special interaction and unique dialogs, Jun acts as both a moderator and a peacemaker between both Kazuya and Jin due to their recent conflict and because of her closeness to Kazuya, she urges her son to stop fighting as the latter replies that he can't. Although her win animation shows that she was apologetic to her son for roughing him up.

                    Appearance
                    Jun is one of the tallest women in the Tekken series. She has shoulder-length black hair and brown eyes. She has bangs that frame her face, and wears a white headband or scarf in her hair. She often has a monochrome palette, wearing clothes of white and black, emphasizing her purity of character. She wears functional clothes, usually associated either with her work as a WWWC officer, or martial arts training gear.
                </p>
            </div>

            <div>
                <h3>Watch trailer</h3>
                <YouTube videoId={videoId} />
            </div>
        </div>
    );
};

export default JunKazama;