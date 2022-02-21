import React from 'react';
import millyfy from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';
import heroImg from '../components/images/img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faCircleDollarToSlot, faDollarSign, faFunnelDollar } from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStat = data?.data?.stats;

  if (isFetching) return 'Loading...'
  return (
    <>
      <div className="home-main">
        <div className="content">
          <h1>Welcome to Cryptoverse</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nesciunt quia neque recusandae consectetur dolore eligendi veniam laudantium assumenda? Fugiat iste quas quam velit earum enim incidunt voluptatum cupiditate eius!</p>
        </div>
        <div className="image">
          <img src={heroImg} alt="image" />
        </div>
      </div>
      <section className="stats">
        <h1>Global Crypto Stats</h1>
        <div className="global-stats">
          <div className="stat-box">
            <div className="heading">
              <div className="icon">
                <FontAwesomeIcon className='ico' icon={faBitcoin} />
              </div>
              <h5>Total Cryptocurrencies</h5>
            </div>
            <p>{millyfy(globalStat.total)}</p>
            <p>A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend.</p>
          </div>
          <div className="stat-box">
            <div className="heading">
              <div className="icon">
                <FontAwesomeIcon className='ico' icon={faArrowTrendUp} />
              </div>
              <h5>Total Exchanges</h5>
            </div>
            <p>{millyfy(globalStat.totalExchanges)}</p>
            <p>A cryptocurrency exchange is an online platform where people exchange their fiat money (government-issued currency) into cryptocurrencies and vice versa.</p>
          </div>
          <div className="stat-box">
            <div className="heading">
              <div className="icon">
                <FontAwesomeIcon className='ico' icon={faCircleDollarToSlot} />
              </div>
              <h5>Total Market Cap</h5>
            </div>
            <p>{millyfy(globalStat.totalMarketCap)}</p>
            <p>In crypto, market cap is calculated by multiplying the total number of coins that have been mined by the price of a single coin at any given time.</p>
          </div>
          <div className="stat-box">
            <div className="heading">
              <div className="icon">
                <FontAwesomeIcon className='ico' icon={faDollarSign} />
              </div>
              <h5>Total 24h Volume</h5>
            </div>
            <p>{millyfy(globalStat.total24hVolume)}</p>
            <p>The 24h volume shows the total value of crypto traded in the past 24 hours. Volume is an indicator to determine the future profitability of cryptocurrencies.</p>
          </div>
          <div className="stat-box">
            <div className="heading">
              <div className="icon">
                <FontAwesomeIcon className='ico' icon={faFunnelDollar} />
              </div>
              <h5>Total Market</h5>
            </div>
            <p>{millyfy(globalStat.totalMarkets)}</p>
            <p>A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend.</p>
          </div>
        </div>
      </section>
      <section className='cryptos'>
        <div className="cryptos-container">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className='head'>Top 10 Cryptocurrencies in the world</h2>
            <Link to="/cryptocurrencies" className='btn-info btn'>Show More</Link>
          </div>
          <Cryptocurrencies simplified />
        </div>
      </section>
      <section className='cryptos bg-black'>
        <div className="cryptos-container">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className='head'>Latest Crypto News</h2>
            <Link to="/news" className='btn btn-info'>Show More</Link>
          </div>
          <News simplified />
        </div>
      </section>
    </>
  )
}

export default Homepage