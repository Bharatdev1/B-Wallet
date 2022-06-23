import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import { useTranslation } from "react-i18next";

const Home = () => {

  const [coins, setCoins] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='container'>
        <table className="table ">
  <thead>
    <tr>
      <th scope="col">{t('Number')}</th>
      <th scope="col">{t('Name')}</th>
      <th scope="col">{t('Symbol')}</th>
      <th scope="col">{t('Price')}</th>
    </tr>
  </thead>
  <tbody>
   {coins.map((DataCoin,index)=>{
     var count=index+1
     return<tr id={DataCoin.id}>
     <th scope="row">{count}</th>
     <td>{DataCoin.name}</td>
     <td><img style={{width:"20%"}} src={DataCoin.image}/></td>
     <td>$ {DataCoin.current_price}</td>
   </tr>
   })}
  </tbody>

</table>

    </div>
  )
}

export default Home

/*
 <tr>
      <th scope="row">1</th>
      <td>Sit</td>
      <td>Amet</td>
      <td>Consectetur</td>
    </tr>
*/