"use server"

import { readMarkdownFile } from "@/lib/data"
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export default async function RenderFileContent({
    fileName
} : {
    fileName: string
}) {
    const content = await readMarkdownFile(fileName);

    if(!content) return;

    return <article className="px-10 md:px-0 self-center flex flex-col prose prose-pre:bg-zinc-800 prose-strong:text-white prose-em:text-orange-400 text-white prose-img:rounded-md prose-headings:text-red-400">
        <Markdown
            remarkPlugins={[remarkGfm]}
        >{ content }</Markdown>
    </article>
}