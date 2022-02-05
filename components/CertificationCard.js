import { Row, Col, Card, Button, Tag, Divider, Pagination } from 'antd';
import Image from 'next/image'
import selligentLogo from '../public/certifications/selligent-logo.png';
import securityjourneyLogo from '../public/certifications/securityjourney-logo.png';

export default function CertificationCard() {
    return (
        <Card style={{ marginTop: 10, marginBottom: 10 }} title="Zertifizierungen/Trainings">
            <Row gutter={[10, 10]}>
                <Col span={6} lg={12} xs={24} md={12}>
                    <Card size="small" bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                        <Image src={selligentLogo} width={150} height={50} />
                        <span>Campaing Fundamentals</span>
                    </Card>
                </Col>
                <Col span={6} lg={12} xs={24} md={12}>
                    <Card size="small" bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Image src={selligentLogo} width={150} height={50} />
                        Site Fundamentals
                    </Card>
                </Col>
                <Col span={6} lg={12} xs={24} md={12}>
                    <Card size="small" bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Image src={securityjourneyLogo} width={150} height={50} />
                        White Belt
                    </Card>
                </Col>
            </Row>

        </Card>
    )
}