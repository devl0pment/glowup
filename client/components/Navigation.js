import styles from '../styles/Navigation.module.css'

const Navigation = () => {
    return (
        <div className={styles.navWrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.navLogo}>
                    <h1>Glowup</h1>
                </div>
                <div className={styles.navToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Navigation;