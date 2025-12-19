import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getAllPosts, getPostBySlug } from '../posts';

type PageProps = {
    params: Promise<{ slug: string }>;
};

// export const dynamicParams = false;

export async function generateStaticParams() {
    return getAllPosts().map(post => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const { slug } = await props.params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: '文章不存在',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function BlogPostPage(props: PageProps) {
    const { slug } = await props.params;
    const post = getPostBySlug(slug);

    if (!post) notFound();

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="w-full max-w-3xl px-6 py-24 sm:px-10">
                <nav className="flex items-center justify-between gap-4">
                    <Link href="/blog" className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">
                        返回博客
                    </Link>
                    <Link href="/" className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">
                        首页
                    </Link>
                </nav>

                <header className="mt-8">
                    <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">{post.title}</h1>
                    <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{post.date}</div>
                </header>

                <article className="mt-8 rounded-xl border border-black/[.08] bg-white px-6 py-6 dark:border-white/[.145] dark:bg-black">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>

                    <div className="mt-6 space-y-4 text-zinc-800 dark:text-zinc-200">
                        {post.content.map(p => (
                            <p key={p} className="leading-7">
                                {p}
                            </p>
                        ))}
                    </div>
                </article>
            </main>
        </div>
    );
}
