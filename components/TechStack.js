import { Row, Col, Card, Button, Tag, Divider, Pagination } from 'antd';

export default function Techstack() {
    return (
        <>
            <Card title="Diese Technologien nutze ich" size="small">
                <Row gutter={[10, 10]}>
                    <Col span={6} lg={12} xs={24} md={12}>
                        <Card size="small" title="Frontend">
                            <Row gutter={[10, 10]}>
                                <Col span={6} lg={8} xs={24} md={12}>
                                    <Card size="small" hoverable style={{ background: '#001529', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <a href="https://reactjs.org/" target="_blank"  rel="noreferrer" style={{ color: 'white' }}>React</a>
                                    </Card>
                                </Col>
                                <Col span={6} lg={8} xs={24} md={12}>
                                    <Card size="small" hoverable style={{ background: '#001529', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <a href="https://reactnative.dev/" target="_blank"  rel="noreferrer" style={{ color: 'white' }}>ReactNative</a>
                                    </Card>
                                </Col>
                                <Col span={6} lg={8} xs={24} md={12}>
                                    <Card size="small" hoverable style={{ background: '#001529', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <a href="https://nextjs.org/" target="_blank"  rel="noreferrer" style={{ color: 'white' }}>Next</a>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={6} lg={12} xs={24} md={12}>
                        <Card size="small" title="Backend">
                            <Row gutter={[10, 10]}>
                                <Col span={6} lg={8} xs={24} md={12}>
                                    <Card size="small" hoverable style={{ background: '#001529', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <a href="https://expressjs.com/de/" target="_blank"  rel="noreferrer" style={{ color: 'white' }}>Express</a>
                                    </Card>
                                </Col>
                                <Col span={6} lg={8} xs={24} md={12}>
                                    <Card size="small" hoverable style={{ background: '#001529', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <a href="https://nestjs.com/" target="_blank"  rel="noreferrer" style={{ color: 'white' }}>NestJs</a>
                                    </Card>
                                </Col>
                                <Col span={6} lg={8} xs={24} md={12}>
                                    <Card size="small" hoverable style={{ background: '#001529', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <a href="https://fastapi.tiangolo.com/" target="_blank"  rel="noreferrer" style={{ color: 'white' }}>FastApi</a>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Card size="small" title="Sonstiges" style={{ marginTop: 10 }}>
                    <Row gutter={[10, 10]}>
                        <Col span={6} lg={4} xs={24} md={12}>
                            <Card size="small" hoverable style={{ background: '#001529', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <a href="https://strapi.io/" target="_blank"  rel="noreferrer" style={{ color: 'white' }}>Strapi</a>
                            </Card>
                        </Col>
                        <Col span={6} lg={4} xs={24} md={12}>
                            <Card size="small" hoverable style={{ background: '#001529', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <a href="https://www.shopware.com/" target="_blank"  rel="noreferrer" style={{ color: 'white' }}>Shopware</a>
                            </Card>
                        </Col>
                        <Col span={6} lg={4} xs={24} md={12}>
                            <Card size="small" hoverable style={{ background: '#001529', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <a href="https://vuejs.org/" target="_blank"  rel="noreferrer" style={{ color: 'white' }}>Vue</a>
                            </Card>
                        </Col>
                        <Col span={6} lg={4} xs={24} md={12}>
                            <Card size="small" hoverable style={{ background: '#001529', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <a href="https://www.intershop.com/de/" target="_blank"  rel="noreferrer" style={{ color: 'white' }}>Intershop</a>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </Card>

        </>
    )
}