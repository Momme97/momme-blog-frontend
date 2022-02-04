import style from './header.module.css';
import Link from 'next/link'

export default function Header() {
    return (
        <div className={style.headerContainer}>
            <Link href="/">
                <a className={style.textLogo}><b>Momme</b> Ristow</a>
            </Link>

        </div>
    )
}