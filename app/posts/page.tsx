import { createPost } from '@/app/actions/actions';

import Link from 'next/link';
import prisma from '@/app/lib/db';



export default async function PostsPage(){
    ///const posts = await prisma.post.findMany({
        // orderBy: {
        //     createdAt: 'desc',
        // },
        // select: {
        //     id: true,
        //     title: true,
        //     slug: true,

        // },
        // take: 10,
        // skip: 19
    //});
    const user = await prisma.user.findUnique({
        where: {
            email: 'mike@gmail.com',
        },
        include: {
            posts: true,
        }
    })
    //const postsCount = await prisma.post?.count();

    return (
        <main className="relative block text-center">
            <h1 className="text-3xl">Posts</h1>
            <hr/>
            <span className="relative inline-block mt-5">Total Posts {user?.posts.length}</span>
            <ul>
                {user?.posts.map(post => (
                    <li key={post.id}>
                        <span>Author: {user.email.replace(/(@gmail.com)/g, '' ).toString()}</span><br/>
                        <Link href={`/posts/${post.slug}`}>
                          {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <form action={createPost} className="relative block p-5 mx-52 ">
            
            
            <input type="text" className="relative inline my-2 mr-2 text-slate-600" name="title" placeholder='Title' />

            <input className="relative inline my-2 text-slate-600" name="content" type="text"placeholder='Content'/>

            <button type="submit" className="relative inline p-1 my-1 bg-blue-400 rounded-md shadow hover:shadow-lg hover:shadow-cyan-300 ">Post</button>
        </form>

            
        </main>
    )
}