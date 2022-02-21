import React, { useState } from 'react'
import { Select, Col } from 'antd';
import moment from 'moment';
import Loading from './Loading';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Option } = Select;

const demoImg = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
  const [newsCatogery, setNewsCatogery] = useState('Cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: newsCatogery, count: simplified ? 8 : 16 });
  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return <Loading />;
  return (
    <div>
      <div className='row'>
        {!simplified && (
          <Col span={24} style={{marginTop: '80px'}}>
            <Select
              showSearch
              className='select-news'
              placeholder='select a crypto'
              optionFilterProp='children'
              onChange={(value) => setNewsCatogery(value)}
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
            </Select>
          </Col>
        )}

        {
          cryptoNews.value.map((news, i) => (
            <div className="col-md-3" key={i} >
              <div className='my-3'>
                <div className="card bg-black text-light border border">
                  <div style={{ right: '0', zIndex: '1', display: 'flex', justifyContent: 'flex-end', position: 'absolute' }}>
                    <span className="badge rounded-pill bg-info">
                      {news.provider[0]?.name}
                    </span>
                  </div>
                  <img style={{ height: '200px', objectFit: 'cover' }} src={news?.image?.thumbnail?.contentUrl || demoImg} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title border-bottom pb-3 head">{news.name}</h5>
                    <div className="d-flex justify-content-between align-items-center my-2">
                      <img style={{ height: '30px', objectFit: 'cover' }} src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImg} alt="news" />
                      <p className='card-text'><small className='text-muted'>{moment(news.datePublished).startOf('ss').fromNow()}</small></p>
                    </div>
                    <p className="card-text">{news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                    <a href={news.url} target="_blank" className="btn btn-sm btn-info text-light">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default News

{/*
   */}

{/* <div>
      <Row gutter={[24,24]}>
        {
          cryptoNews.value.map((news, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className='news-card'>
                <a href={news.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <Title className='news-title' level={4}>
                      {news.name}
                    </Title>
                    <img src={news?.image?.thumbnail?.contentUrl || demoImg} alt='news' />
                  </div>
                  <p>
                    {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                  </p>
                  <div className="provider-container">
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImg} alt="news"/>
                    <Text className='provider-name'>{news.provider[0]?.name}</Text>

                  </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </a>
              </Card>
            </Col>
          ))
        }
      </Row>
    </div> */}