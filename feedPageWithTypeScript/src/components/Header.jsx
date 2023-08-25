import styles from '../styles/Header.module.css'
import igniteLogo from '../assets/igniteLogo.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo Application" />
        </header>
    );
}