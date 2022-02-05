import style from './featureImage.module.css';
import Image from 'next/image'
import mommeImage from '../public/momme-bild.jpg';
import { Button } from 'antd';

export default function FeatureImage() {
    return (
        <div className={style.featureContainer}>
   

            <Image src={mommeImage} width={250} height={250} className={style.profilePic} />
            <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: 36, textAlign: 'center',zIndex:0, margin:0 }}>Ein echtes Nordlicht</h2>
            <h2 style={{ color: 'white',zIndex:0 }}>Webentwickler aus Kiel</h2>
            <Button ghost><a  href="mailto:momme.ristow@web.de">Kontaktieren</a></Button>

        </div>
    )
}