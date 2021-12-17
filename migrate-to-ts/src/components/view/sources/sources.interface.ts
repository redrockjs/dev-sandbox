export interface ISources {
    id: string
    name: string
    author: string
    publishedAt: string
    title: string
    description: string
    url: string
    urlToImage: string
    source: Record<string, unknown>
}