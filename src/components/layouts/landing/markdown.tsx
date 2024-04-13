export default async function Markdown({
    fileName
} : {
    fileName: string
}) {
    return <div>
        <h1>{ fileName }</h1>
    </div>
}