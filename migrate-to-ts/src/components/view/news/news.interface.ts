export interface INews {
    author: string
    publishedAt: string
    title: string
    description: string
    url: string
    urlToImage: string
    source: Record<string, unknown>
}