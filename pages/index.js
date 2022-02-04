import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Tag, Divider, Pagination } from 'antd';
import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import moment from 'moment';
import axios from 'axios';
import Head from 'next/head'

//Custom Components
import FeatureImage from '../components/FeatureImage';
import TechStack from '../components/TechStack';
import CertificationCard from '../components/CertificationCard';

export default function Home() {
  const { Meta } = Card;
  const router = useRouter();

  const [blogArticles, setBlogArticle] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    loadBlogArticles(1);
  }, []);

  async function loadBlogArticles(currentPage) {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + '5d808bfc89170d0f731237859337a1dc8fd9ed225106851ce418701c26fd23ed00e80558024d659034726e41bf8b4ce6561987d31636473abb0897cbc08c15945c84c3d04497120530c54aba92b4d096861557a311cade9f9e4092942de0d3b254eeb4cb4c5e7bbe8ffcf0845732bfda51d7e41379380499981c25a6302dcd25'
      }
    }
    let blogRes = await axios.get(`https://strapi.momme-ristow.de/api/blog-articles?pagination[page]=${currentPage}&pagination[pageSize]=6&sort[0]=publishedAt%3Adesc&populate=%2A`, config);
    setBlogArticle(blogRes.data.data);
    setTotalPages(blogRes.data.meta.pagination.pageCount * 10);
  }


  function changePagination(e) {
    loadBlogArticles(e);
  }

  return (
    <div>
      <Head>
        <title>Home | Momme Ristow</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FeatureImage />
      <Row gutter={[10, 10]} style={{ marginTop: 10 }}>
        <Col span={6} lg={8} xs={24} md={12}>
          <Card title="Über mich" style={{ height: '100%' }}>
            Auzubildener zum Fachinformatiker für Anwendungsentwicklung aus Kiel.
            Nach einem angefangenen Informatik Studium in Flensburg werde ich im Sommer 2022 die Ausbildung
            zum Fachinformatiker für Anwendungsentwicklung.
            In meiner Freizeit beschäftige ich mich mit der Entwicklung von Webapps mit aktuellen Technologien
            wie z.B. React und NodeJs. Desweiteren betreibe ich einen kleinen Tech Blog in welchem ich
            spannende Dinge aus meinem Arbeitsalttag zusammentrage.
          </Card>
        </Col>
        <Col span={6} lg={16} xs={24} md={12}>
          <TechStack />
        </Col>
      </Row>
      <CertificationCard />
      
      <h2 style={{ textAlign: 'center' }}>Mein Blog</h2>
      <Row gutter={[10, 10]} style={{ marginTop: 10 }}>
        {blogArticles.map((blogItem, index) => (
          <Col span={6} lg={8} xs={24} md={12} onClick={() => router.push(`/post/${blogItem.id}`)} key={index}>
            <Card
              hoverable
              cover={<img alt="example" src={`${process.env.NEXT_PUBLIC_CMS_URL}${blogItem.attributes.articleImage.data.attributes.url}`} />}
              bodyStyle={{ height: 200 }}

            >
              <Meta title={blogItem.attributes.Title} description={blogItem.attributes.Description} style={{ height: 100 }} />
              <Divider />
              <Tag style={{ marginTop: 0 }}><UserOutlined /> {blogItem.attributes.Author}</Tag>
              <Tag style={{ marginTop: 0 }}><CalendarOutlined /> {moment(blogItem.attributes.publishedAt).locale('de').fromNow()}</Tag>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination onChange={(e) => changePagination(e)} defaultCurrent={1} total={totalPages} style={{ marginTop: 10 }} />
    </div>
  )
}
