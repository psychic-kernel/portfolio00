import Link from 'next/link';
import prisma from '@/app/lib/db';

// The Edge: distributed computing pardigm that places hardware for computation and data storage in many locations around the world to improve response times and save bandwidth.

// Turso: Offers hosting for SQLite. 
// SQLite: is a live server database.
    // server is continuoulsy running and listening for requests.

// PostGres: is a serverless database. (more efficient)
    // Only runds when a request is sent.

// Default: Pages are Statically generated at build-time (deployment) 

// NextJS Caching in General: data cache is persistent accross deployments

// Prisma Accelerate: Caching Strategies.


// import { unstable_cache as cache } from 'next/cache';
// const getCachedPost = cache((slug) => {
//     return prisma.post.findUnique({
//         where: {
//             slug,
//         }
//     });
// });


export default async function PostPage({
    params,
}: {
    params: { slug: string }
}) { // if dynamic {params}, then page wont be statically pregenerated.
    const post = await prisma.post.findUnique({
        where: {
            slug: params.slug,
        }
    })

    return (
        <main>
            <h1 className="text-2xl">{post?.title}</h1>
            <p className="text-green-300">Content: {post?.content}</p>
            
        </main>
    )
}