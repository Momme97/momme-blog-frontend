import { useRouter } from 'next/router'
import styles from './post.module.css';
import { Typography, Button, Tag, Spin, Layout } from 'antd';
import { CalendarOutlined, UserOutlined, LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useQuery, query, gql } from "@apollo/client";
import ReactMarkdown from 'react-markdown'
import moment from 'moment';
import Head from 'next/head'
//Custom Components
import LoadingSpinner from '../../../components/LoadingSpinner';

export default function Post() {
  const { Title, Paragraph, Text, Link } = Typography;
  const router = useRouter();
  const { id } = router.query;
  const { Content } = Layout;


  const GETSINGLEBLOG = gql`
    query {
        blogArticle(id:${id}) {
          data {
            id
            attributes {
              Title,
              Author,
              publishedAt
              articleImage{
                data{
                      id,
                      attributes{
                        url
                      }
                    }
              } 
              ContentArea {
              __typename,
              ...on ComponentCodeCode {
                  id,
                CodeSnippet
                  
                }
                ...on ComponentBlogTextBlogText {
                  id,
                Text
                  
                }
                ...on ComponentImageImage {
                  id,
                  Image{
                    data{
                      id,
                      attributes{
                        url
                      }
                      
                    }
                  }
                }
                
              }
            }
             
              
          }
          
      }
      }
`;
  const { loading, error, data } = useQuery(GETSINGLEBLOG);
  if (loading) return (
    <LoadingSpinner />
  );
  if (error) return `Error! ${error.message}`;

  return (
    <Content className="content-container" style={{marginTop:20}}>
      <Head>
        <title>Blog | {data.blogArticle.data.attributes.Title} | Momme Ristow</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.blogNavigation}>
        <Button icon={<LeftCircleOutlined />} size="middle" onClick={() => router.back()}>
          Zur Übersicht
        </Button>


      </div>
      <div className={styles.container}>
        <img src={`${process.env.NEXT_PUBLIC_CMS_URL}${data.blogArticle.data.attributes.articleImage.data.attributes.url}`} style={{ width: '100%' }} />
        <Typography>
          <div style={{ marginBottom: 10 }}>
            <Title style={{ marginBottom: 5 }}>{data.blogArticle.data.attributes.Title}</Title>
            <Tag><UserOutlined /> {data.blogArticle.data.attributes.Author}</Tag>
            <Tag><CalendarOutlined /> {moment(data.blogArticle.data.attributes.publishedAt).locale('de').fromNow()}</Tag>
          </div>


          {data.blogArticle.data.attributes.ContentArea.map(blogContent => (
            blogContent.__typename === 'ComponentBlogTextBlogText'
              ? (
                <Paragraph>
                  <ReactMarkdown>{blogContent.Text}</ReactMarkdown>

                </Paragraph>
              )
              : blogContent.__typename === 'ComponentCodeCode'
                ? (
                  <SyntaxHighlighter language="javascript" style={materialLight}>
                    {blogContent.CodeSnippet}
                  </SyntaxHighlighter>
                )
                : blogContent.__typename === 'ComponentImageImage'
                  ? (
                    <div>
                      <img style={{ width: '100%' }} src={`${process.env.NEXT_PUBLIC_CMS_URL}${blogContent.Image.data.attributes.url}`} />
                    </div>
                  )
                  : (
                    <div>EMpty</div>
                  )


          ))}
        </Typography>
      </div>
      </Content>

      )
}