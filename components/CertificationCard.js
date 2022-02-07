import { Row, Col, Card, Tag, Divider, Pagination } from 'antd';
import Image from 'next/image'
import selligentLogo from '../public/certifications/selligent-logo.png';
import securityjourneyLogo from '../public/certifications/securityjourney-logo.png';

export default function CertificationCard() {
    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Zertifizierungen/Trainings</h2>
            <Row gutter={[1, 1]} style={{ marginTop: 20 }} >
                <Col span={6} lg={8} xs={24} md={12}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
                        <Image src={selligentLogo} width={150} height={50} />
                        <Tag>Campaing Fundamentals</Tag>
                    </div>
                </Col>
                <Col span={6} lg={8} xs={24} md={12}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
                        <Image src={selligentLogo} width={150} height={50} />
                        <Tag>Site Fundamentals</Tag>
                    </div>
                </Col>
                <Col span={6} lg={8} xs={24} md={12}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
                        <Image src={securityjourneyLogo} width={150} height={50} />
                        <Tag>White Belt</Tag>
                    </div>
                </Col>
            </Row>

        </>

    )
}