import ActionButton from '../ActionButton/ActionButton'
import styles from './HomeInfo.module.css'
const HomeInfo = (props) => {
  return (
    <>
      <h2 className={styles.featTitle}>{props.heading}</h2>
      <p className={styles.featDesc}>{props.description}</p>
      <ActionButton>Learn More</ActionButton>
    </>
  )
}

export default HomeInfo
