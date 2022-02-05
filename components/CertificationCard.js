import { Row, Col, Card, Tag, Divider, Pagination } from 'antd';
import Image from 'next/image'
import selligentLogo from '../public/certifications/selligent-logo.png';
import securityjourneyLogo from '../public/certifications/securityjourney-logo.png';

export default function CertificationCard() {
    return (
        <>
        <h2 className='about-headline'>Zertifizierungen/Trainings</h2>
                <Row gutter={[1, 1]}>
                    <Col span={6} lg={8} xs={24} md={12}>
                        <Card hoverable size="small" style={{height:'100%'}} bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                            <Image src={selligentLogo} width={150} height={50} />
                            <Tag>Campaing Fundamentals</Tag>
                        </Card>
                    </Col>
                    <Col span={6} lg={8} xs={24} md={12}>
                        <Card hoverable size="small" style={{height:'100%'}} bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Image src={selligentLogo} width={150} height={50} />
                            <Tag>Site Fundamentals</Tag>
                        </Card>
                    </Col>
                    <Col span={6} lg={8} xs={24} md={12}>
                        <Card hoverable size="small" style={{height:'100%'}} bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Image src={securityjourneyLogo} width={150} height={50} />
                            <Tag>White Belt</Tag>
                        </Card>
                    </Col>
                </Row>

        </>

    )
}