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
                    email: 'malexrs93@gmail.com'
                },
                create: {
                    email: 'malexrs93@gmail.com',
                    password: 'p@$$word'
                }
            }
        }
        
    }
]
async function main() { // inserting, but incase you want to update
  console.log("Seeding data...");

  for (const post of initialPosts){
    const newPost = await prisma.post.create({
        data: post,
    });
    console.log(`Created post with id: ${newPost.id}`);
  }
  console.log("Seeding done!");
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })