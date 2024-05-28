import Markdown from "markdown-to-jsx" 
import getPostMetadata from "@/utils/getPostMetadata"
import React from "react"
import fs from 'fs'
import matter from 'gray-matter'
import Link from "next/link"
import Image from "next/image"


function getPostContent(slug) {
  const folder = 'posts/'
  const file = folder + `${slug}.md`
  const content = fs.readFileSync(file,'utf8')

  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata('posts')
  return posts.map((post) => ({slug: post.slug}))
}

export async function generateMetadata({params}){
  const id = params?.slug ? ' . ' + params?.slug : ''
  return {
    title: `Blogger ${id.replaceAll('_','')}`
  }
}
export default function BlogPage(props) {

  const slug = props.params.slug
  const  post = getPostContent(slug)

    return (
    <main  >
      <article className=" p-4 m-4">
        <Link href={'/'} className=" flex items-center p-2 text-lg text-red-400"> 
        <Image className="m-2" src={'/back.png'} width={20} height={20} alt="Back logo" />
        <p className="text-semibold">
          Back to home 
          </p>
        </Link>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
      
      

    )
}