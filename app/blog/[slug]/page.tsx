import { fullBlog } from '@/app/lib/interface';
import { client, urlFor } from '@/app/lib/sanity';
import { PortableText } from 'next-sanity';
import Image from 'next/image';

async function getData(slug: string) {
  const query = `*[_type == 'blog' && slug.current == '${slug}'] { "currentSlug": slug.current, title, content, titleImage }[0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);

  return (
    <div>
      <h1 className="mt-8">
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          mar Marshal - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt={data.title}
        priority
        className="rounded-lg mt-8 border"
      />

      {/* to get the content data we need a package to sanitize it, install @portabletext/react */}
      {/* we can use @tailwind/typography to style the text content */}

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary-foreground prose-a:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
