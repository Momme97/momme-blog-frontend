import style from './featureImage.module.css';
import Image from 'next/image'
import mommeImage from '../public/momme-bild.jpg';
export default function FeatureImage() {
    return (
        <div className={style.featureContainer}>
            <Image src={mommeImage} width={250} height={250} className={style.profilePic} />
            <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: 36, textAlign: 'center' }}>Ein echtes Nordlicht</h2>
            <h2 style={{ color: 'white' }}>Webentwickler aus Kiel</h2>
            
        </div>
    )
}