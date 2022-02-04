import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Tag, Divider, Pagination } from 'antd';
import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import moment from 'moment';
import axios from 'axios';
//Custom Components
import FeatureImage from '../components/FeatureImage';
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
    let blogRes = await axios.get(`http://23.88.104.109:1337/api/blog-articles?pagination[page]=${currentPage}&pagination[pageSize]=6&sort[0]=publishedAt%3Adesc&populate=%2A`, config);
    setBlogArticle(blogRes.data.data);
    setTotalPages(blogRes.data.meta.pagination.pageCount * 10);
    console.log(blogRes);
  }


  function changePagination(e) {
    loadBlogArticles(e);
  }

  return (
    <div>
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
          <Card title="Diese Technologien liegen mir im Blut">
            <Row gutter={[10, 10]} style={{ marginTop: 10 }}>
              <Col span={6} lg={12} xs={24} md={12}>
                <Card title="Frontend" size="small">
                  <Row gutter={[10, 10]} style={{ marginTop: 10 }}>
                    <Col span={6} lg={8} xs={24} md={12}>
                      <Card size='small'>
                        React
                      </Card>
                    </Col>
                    <Col span={6} lg={8} xs={24} md={12}>
                      <Card size='small'>
                        ReactNative
                      </Card>
                    </Col>
                    <Col span={6} lg={8} xs={24} md={12}>
                      <Card size='small'>
                        NextJs
                      </Card>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={6} lg={12} xs={24} md={12}>
                <Card title="Backend" size="small">
                  <Row gutter={[10, 10]} style={{ marginTop: 10 }}>
                    <Col span={6} lg={8} xs={24} md={12}>
                      <Card size='small'>
                        NestJs
                      </Card>
                    </Col>
                    <Col span={6} lg={8} xs={24} md={12}>
                      <Card size='small'>
                        FastApi
                      </Card>
                    </Col>
                    <Col span={6} lg={8} xs={24} md={12}>
                      <Card size='small'>
                        Express
                      </Card>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={6} lg={24} xs={24} md={12}>
                <p><b>Sontige Technologien:</b> Strapi, GraphQl, Shopware, Intershop, VueJs</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Card style={{ marginTop: 10, marginBottom: 10 }} title="Zertifizierungen/Trainings">
        <Row gutter={[10, 10]} style={{ marginTop: 10 }}>
          <Col span={6} lg={6} xs={24} md={12}>
            <Card size="small">
              Selligent Campaing Fundamentals
            </Card>
          </Col>
          <Col span={6} lg={6} xs={24} md={12}>
            <Card size="small">
              Selligent Site Fundamentals
            </Card>
          </Col>
          <Col span={6} lg={6} xs={24} md={12}>
            <Card size="small">
              Security Journey White Belt
            </Card>
          </Col>
        </Row>

      </Card>
      <h2 style={{ textAlign: 'center' }}>Mein Blog</h2>
      <Row gutter={[10, 10]} style={{ marginTop: 10 }}>
        {blogArticles.map((blogItem, index) => (
          <Col span={6} lg={8} xs={24} md={12} onClick={() => router.push(`/post/${blogItem.id}`)}>
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
