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
import { NextPageContext } from 'next'
import {Suspense} from 'react';
import {getMarketData} from '../components/MarketData';
import {InferGetStaticPropsType,GetStaticProps} from 'next'
// Page.getInitialProps = async (ctx: NextPageContext) => {
//     const res = await fetch('https://localhost:3000/api/market-details');
//     const data = await res.json();
//     const contents = data.result.rows;
//     console.log(contents)
//     return {props: {contents}}
// }
type Market = {
    id: number,
    stock_symbol: string,
    stock_name: string,
    stock_change: string,
    stock_price: string
}
//   export default function Page({ props }: { props: Market }) {
//     console.log(props.stock_name);
//     return (
//         <Suspense fallback={<p>Loading...</p>}>
           
//             {/* <div>{props}</div> */}
//         </Suspense>
//     )
//   }

// export const  getStaticProps = (async () => {
//     const res = await getMarketData();
//     const data = await res.json();
//     return {props: {data}}
// });



export default async function MarketData() {
    let res = await fetch('http://localhost:3000/api/market-details');
    let data = await res.json();
    const content = data.result.rows;
    console.log(content)
    return (
        content.map((item: Market) => (
          <ul key={item.id}>
            <li>{item.stock_symbol}</li>
            <li>{item.stock_name}</li>
            <li>{item.stock_change}</li>
            <li>{item.stock_price}</li>
          </ul>
        ))
    );
  }

// export default function DataDesignPage(){

//     return (
//         <main>
//             <h1 className="text-5xl">Data Design</h1>
//             <MarketData/>
//         </main>
//     )
// }; 