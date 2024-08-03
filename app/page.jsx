import React from 'react';
//import Head from 'next/head';
//import Layout, { siteTitle } from '../components/layout';
//import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

// async function getData() {
//     const res = await fetch('/json/inbox.json')
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
   
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       console.log(res)
//       throw new Error('Failed to fetch data')
      
//     }
   
//     return res.json()
//   }
   
  export default async function HomePage() {
   
    return <main>
        <h1>Home</h1>
    </main>
  }





















// import { useEffect, useState} from 'react';
// import axios from 'axios';
// ;
// export default function Home({}){

//     const [inbox, setInbox] = useState([]);

//     useEffect(() =>{
//         fetchInbox();
//     });
//     const fetchInbox = async() => {
//        const res = await axios.get('/inbox.json');
//        const data = res.value;
//        console.log(data);

//     //    setInbox(data);
//     }

//     return (
//         <main>

//             {inbox.map((d) => {
//                 return (
//                     <ul key={d.id}>
//                         <li>
//                             {d.from}
//                         </li>
//                         <li>
//                             {d.to}
//                         </li>
//                         <li>
//                             {d.date}
//                         </li>
//                         <li>
//                             {d.subject}
//                         </li>
//                         <li>
//                             {d.mailed_by}
//                         </li>
//                         <li>
//                             {d.signed_by}
//                         </li>
//                         <li>
//                             {d.message}
//                         </li>
//                     </ul>
//                 )
//             })}
//         </main>
//     )
// }

