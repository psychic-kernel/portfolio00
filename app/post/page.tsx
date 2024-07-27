import { handler } from '@/app/actions/actions';

import Link from 'next/link';
import prisma from '@/app/lib/db';



export default async function CreatePost(){
    const posts = await prisma.post.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        select: {
            id: true,
            title: true,
            slug: true,

        },
        // take: 10,
        // skip: 19
    });
    const postsCount = await prisma.post?.count();

    return (
        <main className="relative block text-center">
            <h1 className="text-3xl">Posts</h1>
            <hr/>
            <span className="relative inline-block mt-5">Total Posts {postsCount}</span>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/${post.slug}`}>
                          {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <form action={handler} className="relative block p-5 mx-52 ">
            
            
            <input type="text" className="relative inline my-2 mr-2 text-slate-600" name="title" placeholder='Title' />

            <input className="relative inline my-2 text-slate-600" name="content" type="text"placeholder='Content'/>

            <button type="submit" className="relative inline p-1 my-1 bg-blue-400 rounded-md shadow hover:shadow-lg hover:shadow-cyan-300 ">Post</button>
        </form>

            
        </main>
    )
}