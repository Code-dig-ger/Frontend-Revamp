import styles from './ActionButton.module.css'
const ActionButton = ({ className, onClick, children }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default ActionButton
