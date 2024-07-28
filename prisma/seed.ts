import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


const initialPosts: Prisma.PostCreateInput[] = [
    {
        title: 'Post 1',
        slug: 'post-1',
        content: 'Content of a post',
        author: {
            connectOrCreate: {
                where: {
                    email: 'mike@gmail.com'
                },
                create: {
                    email: 'mike@gmail.com',
                    password: 'p@$$word'
                },
            },
        },
    },
];

const initialStocks: Prisma.StockMarketCreateInput[] = [
  {
    symbol: 'AAPL',
    price: 120.50,
    change: -2.3,
    name: 'Apple Inc.',
  },
  {
    symbol: 'MSFT',
    price: 100.00,
    change: -0.50,
    name: 'Microsoft',
  },
  {
    symbol: 'GOOGL',
    price: 2000.00,
    change: -20.00,
    name: 'Alphabet Inc.',
  },
  {
    symbol: 'AMZN',
    price: 3000.00,
    change: -30.00,
    name: 'Amazon Inc.',
  },
  {
    symbol: 'TSLA',
    price: 600.00,
    change: 60.00,
    name: 'Tesla Inc.',
  },
  {
    symbol: 'FB',
    price: 300.00,
    change: 3.00,
    name: 'Facebook Inc.',
  },
  {
    symbol: 'NFLX',
    price: 500.00,
    change: 5.00,
    name: 'Netflix Inc.',
  },
  {
    symbol: 'NVDA',
    price: 400.00,
    change: -4.00,
    name: 'Nvidia Inc.',
  },
  {
    symbol: 'AMD',
    price: 100.00,
    change: 1.00,
    name: 'Advanced Micro Devices Inc.',
  },
  {
    symbol: 'INTC',
    price: 50.00,
    change: -0.50,
    name: 'Intel Inc.',
  },
  {
    symbol: 'QCOM',
    price: 150.00,
    change: -1.50,
    name: 'Qualcomm Inc.',
  },
  {
    symbol: 'CSCO',
    price: 50.00,
    change: 0.50,
    name: 'Cisco Inc.',
  },
  {
    symbol: 'IBM',
    price: 100.00,
    change: -1.00,
    name: 'IBM Inc.',
  },
  {
    symbol: 'ORCL',
    price: 75.00,
    change: 0.75,
    name: 'Oracle Inc.',
  },
  {
    symbol: 'SAP',
    price: 150.00,
    change: -1.50,
    name: 'SAP Inc.',
  },
  {
    symbol: 'CRM',
    price: 200.00,
    change: 2.00,
    name: 'Salesforce Inc.',
  },
  {
    symbol: 'ADBE',
    price: 300.00,
    change: -3.00,
    name: 'Adobe Inc.',
  },
  {
    symbol: 'PYPL',
    price: 200.00,
    change: 2.00,
    name: 'Paypal Inc.',
  },
  {
    symbol: 'SQ',
    price: 150.00,
    change: -1.50,
    name: 'Intuit Inc.',
  },
];

// Main function
async function main() { // inserting, but incase you want to update
  console.log("Seeding data...");

  // Seeding User Data
  console.log("Seeding initial posts...");
  for (const post of initialPosts){
    const newPost = await prisma.post.create({
        data: post,
    });
    console.log(`Created post with id: ${newPost.id}`);
  }
  console.log("Seeding initial posts done!");

  // Seeding Stock Market Data
  console.log("Seeding initial stocks...");
  for (const stock of initialStocks){
    const newStock = await prisma.stockMarket.create({
        data: stock,
    });
    console.log(`Created stock with id: ${newStock.id}`);
  }
  console.log("Seeding initial stocks done!");
}

// Run the main function to seed the database
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })


