import { Divider } from 'antd';
import { CopyrightOutlined, HeartFilled } from '@ant-design/icons';
import style from './footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <Divider />
            <div className={style.bottomContainer}>
                <div className={style.textLogo}>
                    <CopyrightOutlined style={{ marginRight: 5 }} /> Momme Ristow
                </div>
                <div>
                    <Link href="/impress"><a style={{marginRight:10}}>Impressum</a></Link>
                    <span>Made with <HeartFilled /> in 2022</span>

                </div>
            </div>

        </div>
    )
}