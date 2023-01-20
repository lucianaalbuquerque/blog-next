import { groq } from "next-sanity"
import Image from "next/image"
import { client } from "../../../../lib/sanity.client"
import urlFor from "../../../../lib/urlFor"
import { Post } from "../../../../typings"
import { PortableText } from "@portabletext/react"
import { RichTextComponents } from "../../../../components/RichText"

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`
  *[_type=='post'] { slugs }`
  const slugs: Post[] = await client.fetch(query)
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map(slug => ({
    slug,
  }))
}

const Post = async ({params: {slug}}: Props) => {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0] {
    ...,
    author->,
    categories[]->
  }`

  const post: Post = await client.fetch(query, {slug})

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-[#eaeaea] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full p-10
               opacity-20 blur-sm">
            <Image  className="object-cover object-center mx-auto"
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            fill/>
          </div>

          <section className="p-5 bg-[#445588] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <h1 className=" text-4xl font-bold">{post.title}</h1>
              <p>{new Date(post._createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                  </p>
            </div>
            <div className="flex items-center space-x-2">
              <h3 >{post.author.name}</h3>
            </div>
          </section>
        </div>
      </section>
     { //@ts-ignore
      <PortableText value={post.body} components={RichTextComponents} />}
    </article>
  )
}

export default Post