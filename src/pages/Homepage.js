import LandingImg from '../assets/Landing-Page Image.png'
import styles from './HomePage.module.css'
import Ellipse from '../assets/Ellipse 1.png'
import Ellipse2 from '../assets/Ellipse 2.png'
import CodeChef from '../assets/CodeChef Box.png'
import AtCoder from '../assets/Atcoder Box.png'
import CodeForces from '../assets/Codeforces Box.png'
import UpsolveWindow from '../assets/Upsolve Window.png'
import LevelWindow from '../assets/Level window.png'
import TopicWindow from '../assets/Topic Window.png'
import ProblemWindow from '../assets/Problems window.png'
import ProfileWindow from '../assets/Profile window.png'
import MentorsBox from '../assets/Mentors Box.png'
import GrowthBox from '../assets/Growth Box.png'
import FriendsBox from '../assets/Friends Box.png'
import ActionButton from '../components/ActionButton/ActionButton'
import HomeInfo from '../components/HomeInfo/HomeInfo'
import Aos from 'aos'

const HomePage = () => {
  const info = {
    upsolve: {
      heading: "Don't just solve but Upsolve.",
      description:
        'The site provides the feature of upsolving the problems in a live or a virtual contest from three sites including Codechef, Codeforces, and Atcoder which helps the users to analyze their mistakes and thus provides scope for improvement.',
    },
    ladder: {
      heading: `Reach new heights by climbing this Ladder.`,
      description:
        'It helps in listing the problems topic wise and levelwise (that is on the basis of difficulty). Before attempting the new problems the user has to make sure that he/she has solved all the previously listed problems.',
    },
    profile: {
      heading: 'Tired of having several profiles?',
      description:
        'The site provides Competitive Programming profiles which help the users to track and analyze their algorithmic progress. Cards help the users to view their profiles for different Competitive Programming sites.',
    },
  }
  Aos.init()

  return (
    <main className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.heroInfo}>
          <h1 className={styles.heroTitle}>
            One platform for all your competitive programming <br /> needs
            <span>.</span>
          </h1>
          <p className={styles.heroDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi amet,
            amet maecenas ipsum sit felis, sagittis purus proin. Faucibus neque
            volutpat non risus amet, id aliquet eleifend sed.
          </p>
          <ActionButton>Sign up</ActionButton>
        </div>
        <div className={styles.heroImgBox}>
          <img
            data-aos="fade-right"
            src={LandingImg}
            alt="Code"
            className={styles.heroImage}
          />
          <img src={Ellipse} alt="Code" className={styles.heroBlur} />
          <img src={Ellipse2} alt="Code" className={styles.heroBlur2} />
        </div>
      </div>
      {/* UPSOLVE FEATURE */}
      <div className={styles.featBox}>
        <div className={styles.featImageBox}>
          <img src={UpsolveWindow} alt="Upsolve Window" data-aos="fade-left" />
          <img src={Ellipse} alt="Ellipse" className={styles.featBlur} />
        </div>
        <div className={styles.featInfo}>
          <HomeInfo
            heading={info.upsolve.heading}
            description={info.upsolve.description}
          />
          <div className={styles.featPlatform}>
            <img src={CodeChef} alt="Platforms" />
            <img src={CodeForces} alt="Platforms" />
            <img src={AtCoder} alt="Platforms" />
          </div>
        </div>
      </div>
      {/* LADDERS FEATURE */}
      <div className={`${styles.featBox} ${styles.ladderBox}`}>
        <div className={`${styles.featInfo} ${styles.ladderInfo}`}>
          <HomeInfo
            heading={info.ladder.heading}
            description={info.ladder.description}
          />
        </div>
        <div className={styles.featImageBox}>
          <img
            src={ProblemWindow}
            alt="Ladder Window"
            className={styles.ladderImg}
            data-aos="fade-up-left"
          />
          <img
            src={TopicWindow}
            alt="Topic Window"
            className={styles.topicImg}
            data-aos="fade-left"
          />
          <img
            src={LevelWindow}
            alt="Level Window"
            className={styles.levelImg}
          />
          <img
            src={Ellipse}
            alt="Ellipse"
            className={`${styles.ladderBlur}`}
            data-aos="fade-up-left"
          />
        </div>
      </div>
      {/* PROFILE FEATURE */}
      <div className={styles.featBox}>
        <div className={styles.featImageBox}>
          <img src={ProfileWindow} alt="Profile Window" data-aos="fade-left" />
          <img src={Ellipse} alt="Ellipse" className={styles.featBlur} />
        </div>
        <div className={styles.featInfo}>
          <HomeInfo
            heading={info.profile.heading}
            description={info.profile.description}
          />
        </div>
      </div>
      <div className={styles.listContainer}>
        <div className={styles.listItem}>
          <img src={FriendsBox} alt="Friends" data-aos="zoom-in-up" />
          <div className={styles.listInfo}>
            <h3 className={styles.listHeading}>Friends</h3>
            <p className={styles.listDesc}>
              The site provides Competitive Programming profiles which help the
              users to track and analyze their algorithmic progress.{' '}
            </p>
          </div>
        </div>
        <div className={styles.listItem}>
          <img src={MentorsBox} alt="Mentor" data-aos="zoom-in-up" />
          <div className={styles.listInfo}>
            <h3 className={styles.listHeading}>Mentors</h3>
            <p className={styles.listDesc}>
              The site provides Competitive Programming profiles which help the
              users to track and analyze their algorithmic progress.{' '}
            </p>
          </div>
        </div>
        <div className={styles.listItem}>
          <img src={GrowthBox} alt="Growth" data-aos="zoom-in-up" />
          <div className={styles.listInfo}>
            <h3 className={styles.listHeading}>Analysis</h3>
            <p className={styles.listDesc}>
              The site provides Competitive Programming profiles which help the
              users to track and analyze their algorithmic progress.{' '}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage
