import styles from './Button/button.module.css'

function Button() {
  return (
    <button type="button" className={styles.button} onClick={() => alert('Button action triggered!')}>
      Przycisk
    </button>
  )
}

export default Button
