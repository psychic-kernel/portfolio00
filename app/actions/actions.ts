"use server";
// import {Post} from '@prisma/client';


import prisma from '@/app/lib/db';
import { revalidatePath } from 'next/cache';
import { join } from 'path';
import {Prisma } from '@prisma/client';
export async function createPost(formData: FormData) {
    const title = formData.get("title");
  
    if (title === null) {
      throw new Error("Missing form data: title");
    }
  
    try {
      await prisma.post.create({
        data: {
          title: title as string,
          // slug: (title as string).replace(/\s+/g, "-").toLowerCase(),
          slug: (formData.get("title") as string).replace(/\s+/g, "-").toLowerCase(),
          content: formData.get("content") as string,
          author: {
            connect: {
              email: "mike@gmail.com",
            }
          }
        },
      });
      revalidatePath("/posts");
    } catch(error){
      if(error instanceof Prisma.PrismaClientKnownRequestError){
        if(error.code === 'P2002'){
          throw new Error('Unique constraint violation, a new user cannot be created with this email.');
        }
      }
    }
  }

export async function UpdatePost(formData: FormData, id: string){
  try {
    await prisma.post.update({
      where: {id},
      data: {
        title: formData.get("title") as string,
        slug: (formData.get("title") as string)
         .replace(/\s+/g, "-")
         .toLowerCase(),
        content: formData.get("content") as string,
      },
    });
  } catch(error){
    if(error instanceof Prisma.PrismaClientKnownRequestError){
      if(error.code === 'P2002'){
        throw new Error('Unique constraint violation, a new user cannot be updated with this email.');
      }
    }
  }
}

export default async function DeletePost(id: string){
  await prisma.post.delete({where: {id}});
};