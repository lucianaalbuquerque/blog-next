import Image from "next/image"
import urlFor from "../lib/urlFor"
import Link from "next/link"

export const RichTextComponents = {
  types: {
    image: ({value}: any) =>  {
      return (
        <div className="relative w-full h-96 mx-auto">
        <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      )
    }
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({children}: any) => <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>,
    number: ({children}: any) => <ol className="mt-lg list-decimal">{children}</ol>,
  },
  block: {
    h1: ({children}: any) => <h1 className="text-5xl py-10 font-bold">{children}</h1>,
    h2: ({children}: any) => <h1 className="text-4xl py-10 font-bold">{children}</h1>,
    h3: ({children}: any) => <h1 className="text-3xl py-10 font-bold">{children}</h1>,
    h4: ({children}: any) => <h1 className="text-2xl py-10 font-bold">{children}</h1>,
    blockquote: ({children}: any) => <blockquote className="border-l-purple-200 border-l-4 pl-5 py-5 my-5">{children}</blockquote>,
  },
  marks: {
    link: ({children, value}: {children: any; value: any;}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <Link href={value.href} rel={rel} className="underline decoration-purple-500 hover:decoration-gray">
      {children}
    </Link>
      )
    },
  },
}