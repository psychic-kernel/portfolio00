import Link from 'next/link';
import prisma from '@/app/lib/db';



export default async function Posts({params}){
    const post = await prisma.post.findUnique({
        where: {
            slug: params.slug,
        },
    })

    return (
        <main>
            <h1 className="text-2xl">{post?.title}</h1>
            <p className="text-green-300">Content: {post?.content}</p>
            
        </main>
    )
}