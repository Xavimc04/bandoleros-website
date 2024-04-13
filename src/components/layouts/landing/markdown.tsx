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

    return <Markdown
        remarkPlugins={[remarkGfm]}
    >{ content }</Markdown>
}