import styles from './Card/button.module.css'

function Card() {
  return (
    <article className={styles.card}>
      <h2 className={styles.h2}>Tytuł karty</h2>
      <p>Opis karty</p>
      <button type="button" className={styles.button} onClick={() => alert('Card action triggered!')}>
        Przycisk
      </button>
    </article>
  )
}

export default Card
