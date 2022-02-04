import style from './featureImage.module.css';
export default function FeatureImage() {
    return (
        <div className={style.featureContainer}>
            <h2 style={{ color: 'white', fontWeight:'bold',fontSize:36 }}>Ein echtes Nordlicht</h2>

            <h2 style={{ color: 'white' }}>Webentwickler Entwickler aus Kiel</h2>
        </div>
    )
}