import style from './featureImage.module.css';
import Image from 'next/image'
import mommeImage from '../public/momme-bild.jpg';
import { Button } from 'antd';

export default function FeatureImage() {
    return (
        <div className={style.featureContainer}>

            <div className={style.profileImageContainer}>
                <Image src={mommeImage} width={250} height={250} className={style.profilePic} />

            </div>
            <h2 style={{ fontWeight: 'bold', fontSize: 36, textAlign: 'center', zIndex: 0, margin: 0 }}>Ein echtes Nordlicht</h2>
            <h2 style={{ zIndex: 0 }}>Webentwickler aus Kiel</h2>
            <Button style={{ borderColor: 'grey', color: 'black' }} ghost><a href="mailto:momme.ristow@web.de">Kontaktieren</a></Button>

        </div>
    )
}