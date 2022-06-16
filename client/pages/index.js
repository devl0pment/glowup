import Image from 'next/image';
import tan1 from '../public/tan-1.PNG';
import styles from '../styles/Home.module.css'

export default function Home({ props }) {
  return (
    <div className={styles.container}>


      <nav className={styles.nav}>

      </nav>

      <div className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroIntro}>
            <h1 className={styles.heroIntroTitle}>Mobile tanning solutions leicester</h1>
            <p className={styles.heroIntroLead}>lorem ipsum</p>
            <div className={styles.buttonWrapper}>
              <button className={styles.button}>About me</button>
              <button className={styles.button}>Bookings</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.intro}>

      </div>

      <div className={styles.solutions}>

      </div>

      <div className={styles.about}>

      </div>

      <div className={styles.pallete}>

      </div>

      <div className={styles.branding}>

      </div>

      <div className={styles.availability}>

      </div>

      <div className={styles.location}>

      </div>

      <div className={styles.contact}>

      </div>

      <div className={styles.reviews}>

      </div>

      <div className={styles.articles}>

      </div>

      <div className={styles.faq}>

      </div>
    </div>
  )
}
