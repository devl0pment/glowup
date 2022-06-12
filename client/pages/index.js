import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.introWrapper}>
          <h1 className={styles.intro}>Welcome to Leicestershires mobile tanning solution</h1>
          <p className={styles.lead}>paragraph</p>

          <div className={styles.buttonWrapper}>
            <button className={styles.button}>Pricing</button>
            <button className={styles.button}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
