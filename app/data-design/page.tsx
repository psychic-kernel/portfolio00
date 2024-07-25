// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

// type Market = {
//     id: number,
//     stock_symbol: string,
//     stock_name: string,
//     stock_change: string,
//     stock_price: string
// }

// export const getServerSideProps = (async () => {
//     // Fetch data from external API
//     const res = await fetch('http://localhost:3000/api/market-details');
//     const data: Market = await res.json()
//     // Pass data to the page via props
//     return { props: { data } }
//   }) satisfies GetServerSideProps<{ data: Market }>


// export default function Page({
//     data,
//   }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//     return (
//       <main>
//         <p>{data.stock_symbol}</p>
//         <p>{data.stock_name}</p>
//         <p>{data.stock_change}</p>
//         <p>{data.stock_price}</p>
//       </main>
//     )
//   }
//import MarketData from '../components/MarketData';

import {Suspense} from 'react';

type Market = {
    id: number,
    stock_symbol: string,
    stock_name: string,
    stock_change: string,
    stock_price: string
}
async function MarketData() {
    let res = await fetch('http://localhost:3000/api/market-details');
    let data = await res.json();
    const content = data.result.rows;
    console.log(content)
    return (
      <ul>
        {content.map((item: Market) => (
          <li key={item.id}>{item.stock_symbol}</li>
        ))}
      </ul>
    );
  }

export default function DataDesignPage(){

    return (
        <main>
            <h1 className="text-5xl">Data Design</h1>
            <MarketData/>
        </main>
    )
}; 