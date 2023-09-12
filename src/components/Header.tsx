import styles from './Header.module.css';
import logo from '../assets/rocket-logo.svg';

export function Header() {
    return (
        <div>
            <header className={styles.header}>
                <img src={logo} alt='Logotipo'></img>
                <strong>to<span>do</span></strong>
            </header>
        </div>
    )
}