import React, { useState, useEffect } from 'react';
import millyfy from 'millify';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loading from './Loading';

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ?  10 : 100;
  const { data: cryptosList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filterData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filterData)
  }, [cryptosList, searchTerm])
  

  if(isFetching) return <Loading />
  return (
    <>
    {!simplified && (
      <div className="search-crypto" style={{marginTop: '80px'}}>
        <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
    ) }
      <div className='d-flex justify-content-center align-items-center flex-wrap'>
        {cryptos?.map((currency) => (
          <Link to={`/crypto/${currency.uuid}`}>
            <div className="coin-box hover">
              <div className="header d-flex justify-content-between align-items-center">
                <h5>{`${currency.rank}. ${currency.name}`}</h5>
                <img src={currency.iconUrl} alt="image" />
              </div>
              <p>Price: ${millyfy(currency.price)}</p>
              <p>Market Cap: {millyfy(currency.marketCap)}</p>
              <p>Daily Change: {millyfy(currency.change)}%</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Cryptocurrencies