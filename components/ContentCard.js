import { Row, Col, Card, Layout, Tag, Divider, Pagination } from 'antd';
import Image from 'next/image';
import style from './contentCard.module.css';

import KielBanner from '../public/kiel-banner.jpg';
export default function ContentCard() {
    return (
        <>
            <Row gutter={[10, 10]} style={{ padding: 50 }}>
                <Col span={6} lg={12} xs={24} md={12}>
                    <Image
                        className={style.cardImage}
                        src={KielBanner}
                        height={400}
                        width={700}
                    />
                </Col>
                <Col span={6} lg={12} xs={24} md={12} style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
                    <h2 className='about-headline'>Über mich</h2>
                    Auzubildener zum Fachinformatiker für Anwendungsentwicklung aus Kiel.
                    Nach einem angefangenen Informatik Studium in Flensburg werde ich im Sommer 2022 die Ausbildung
                    zum Fachinformatiker für Anwendungsentwicklung.
                    In meiner Freizeit beschäftige ich mich mit der Entwicklung von Webapps mit aktuellen Technologien
                    wie z.B. React und NodeJs. Desweiteren betreibe ich einen kleinen Tech Blog in welchem ich
                    spannende Dinge aus meinem Arbeitsalttag zusammentrage.
                </Col>
            </Row>
        </>
    )
}