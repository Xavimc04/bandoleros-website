import { getMarkdownFiles } from "@/lib/data"
import RenderFileContent from "./markdown";

export default async function Devblogs() {
    const files = await getMarkdownFiles();

    if(!files) return; 

    return <section className="mt-20 flex flex-col gap-16 min-h-32">
        {/* @ Display single blog content */}
        
        {
            files.map((file: string, index: number) => <RenderFileContent
                fileName={ file }
                key={ file + index }
            />)
        }
    </section>
}