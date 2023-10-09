export type LegalExplainerQuestion = {
    index: number
    title: string
    slug: string
    isDraft: boolean
    contentType: string
    shortAnswer: string
    longAnswer: string
    confidenceLevel: string
    relatedCases: string[]
    lastModified: string
}