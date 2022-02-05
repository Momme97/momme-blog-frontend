import { Row, Col, Card, Button, Tag, Divider, Pagination } from 'antd';
import reactLogo from '../public/techstack/react-logo.png';
import reactnativeLogo from '../public/techstack/reactnative-logo.png';
import nextjsLogo from '../public/techstack/nextjs-logo.png';
import nestjsLogo from '../public/techstack/nestjs-logo.png';
import fastapiLogo from '../public/techstack/fastapi-logo.png';
import swaggerLogo from '../public/techstack/swagger-logo.png';
import dockerLogo from '../public/techstack/docker-logo.png';
import intershopLogo from '../public/techstack/intershop-logo.png';
import strapiLogo from '../public/techstack/strapi-logo.png';
import jqueryLogo from '../public/techstack/jquery-logo.png';
import stripeLogo from '../public/techstack/stripe-logo.png';
import csharpLogo from '../public/techstack/csharp-logo.png';
import mongodbLogo from '../public/techstack/mongodb-logo.png';
import apacheLogo from '../public/techstack/apache-logo.png';
import ubuntuLogo from '../public/techstack/ubuntu-logo.png';
import mysqlLogo from '../public/techstack/mysql-logo.png';
import typeormLogo from '../public/techstack/typeorm-logo.png';
import graphqlLogo from '../public/techstack/graphql-logo.png';
import javaLogo from '../public/techstack/java-logo.png';
import Image from 'next/image'
import style from './techstack.module.css';

import { Rate } from 'antd';
export default function Techstack() {

    return (
        <>
            <h2 className={style.headline} >Mein Technologie Stack</h2>
            <Row gutter={[1, 1]}>
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card
                        hoverable
                        size="small"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                        actions={[
                            <div><p>Skill Level</p><Rate disabled style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 14, textAlign: 'center' }} defaultValue={4} /></div>

                        ]}
                    >
                        <Image src={reactLogo} width={150} height={50} />
                    </Card>
                </Col>
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card
                        hoverable
                        size="small"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                        actions={[
                            <div><p>Skill Level</p><Rate disabled style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 14, textAlign: 'center' }} defaultValue={3} /></div>

                        ]}
                    >
                        <Image src={reactnativeLogo} width={150} height={50} />
                    </Card>
                </Col>
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card
                        hoverable
                        size="small"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                        actions={[
                            <div><p>Skill Level</p><Rate disabled style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 14, textAlign: 'center' }} defaultValue={4} /></div>

                        ]}
                    >
                        <Image src={nextjsLogo} width={150} height={50} />
                    </Card>

                </Col>
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card
                        hoverable
                        size="small"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                        actions={[
                            <div><p>Skill Level</p><Rate disabled style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 14, textAlign: 'center' }} defaultValue={3} /></div>

                        ]}
                    >
                        <Image src={nestjsLogo} width={150} height={50} />
                    </Card>
                </Col>
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card
                        hoverable
                        size="small"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                        actions={[
                            <div><p>Skill Level</p><Rate disabled style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 14, textAlign: 'center' }} defaultValue={2} /></div>

                        ]}
                    >
                        <Image src={fastapiLogo} width={150} height={50} />
                    </Card>

                </Col>
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card
                        hoverable
                        size="small"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                        actions={[
                            <div><p>Skill Level</p><Rate disabled style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 14, textAlign: 'center' }} defaultValue={4} /></div>

                        ]}
                    >
                        <Image src={swaggerLogo} width={150} height={50} />
                    </Card>
                </Col>
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card
                        hoverable
                        size="small"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                        actions={[
                            <div><p>Skill Level</p><Rate disabled style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 14, textAlign: 'center' }} defaultValue={2} /></div>

                        ]}
                    >
                        <Image src={dockerLogo} width={150} height={50} />
                    </Card>
                </Col>
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card
                        hoverable
                        size="small"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                        actions={[
                            <div><p>Skill Level</p><Rate disabled style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 14, textAlign: 'center' }} defaultValue={3} /></div>

                        ]}
                    >
                        <Image src={intershopLogo} width={150} height={50} />
                    </Card>

                </Col>
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card
                        hoverable
                        size="small"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                        actions={[
                            <div><p>Skill Level</p><Rate disabled style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 14, textAlign: 'center' }} defaultValue={4} /></div>

                        ]}
                    >
                        <Image src={strapiLogo} width={150} height={50} />
                    </Card>
                </Col>
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card
                        hoverable
                        size="small"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                        actions={[
                            <div><p>Skill Level</p><Rate disabled style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 14, textAlign: 'center' }} defaultValue={5} /></div>

                        ]}
                    >
                        <Image src={jqueryLogo} width={150} height={50} />
                    </Card>
                </Col>
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card
                        hoverable
                        size="small"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                        actions={[
                            <div><p>Skill Level</p><Rate disabled style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 14, textAlign: 'center' }} defaultValue={4} /></div>

                        ]}
                    >
                        <Image src={mongodbLogo} width={150} height={50} />
                    </Card>

                </Col>
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card
                        hoverable
                        size="small"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                        actions={[
                            <div><p>Skill Level</p><Rate disabled style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 14, textAlign: 'center' }} defaultValue={4} /></div>

                        ]}
                    >
                        <Image src={mysqlLogo} width={150} height={50} />
                    </Card>

                </Col>
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card hoverable size="small" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={stripeLogo} width={150} height={50} />
                    </Card>
                </Col>
                {/* 
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card hoverable size="small" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={csharpLogo} width={150} height={50} />
                    </Card>
                </Col>
                */}

                <Col span={6} lg={4} xs={12} md={8}>
                    <Card hoverable size="small" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={apacheLogo} width={150} height={50} />
                    </Card>
                </Col>
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card hoverable size="small" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={ubuntuLogo} width={150} height={50} />
                    </Card>
                </Col>
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card hoverable size="small" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={typeormLogo} width={150} height={50} />
                    </Card>
                </Col>
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card hoverable size="small" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={graphqlLogo} width={150} height={50} />
                    </Card>
                </Col>
                <Col span={6} lg={4} xs={12} md={8}>
                    <Card hoverable size="small" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={javaLogo} width={150} height={50} />
                    </Card>
                </Col>
            </Row>
        </>
    )
}