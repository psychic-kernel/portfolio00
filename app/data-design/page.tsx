
import prisma from '@/app/lib/db';

export default async function MarketData() {
    const market = await prisma.stockMarket.findMany();  
    return (
        <main>
          {market.map((item ) => (
            <ul key={item.id}>
              <li>{item.symbol}</li>
              <li>{item.name}</li>
              <li>{item.change}</li>
              <li>{item.price}</li>
            </ul>
          ))}
        </main>
    );
  }

