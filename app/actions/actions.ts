"use server";
// import {Post} from '@prisma/client';


import prisma from '@/app/lib/db';

export async function handler(formData: FormData) {
    const title = formData.get("title");
  
    if (title === null) {
      throw new Error("Missing form data: title");
    }
  
    await prisma.post.create({
      data: {
        title: title as string,
        // slug: (title as string).replace(/\s+/g, "-").toLowerCase(),
        slug: (formData.get("title") as string).replace(/\s+/g, "-").toLowerCase(),
        content: formData.get("content") as string,
      },
    });
  }


// export async function handler(formData: FormData) {
//     await prisma.post.create({
//         data: {
//             title: formData.get("title") as string,
//             slug: (formData.get("title") as string)
//             .replace(/\s+/g, "-")
//             .toLowerCase(),
//             content: formData.get("content") as string,
//         }
//     })
// }