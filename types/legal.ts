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

export type LegalCaseCitation = {
    citation: string
    complaintDate: string
}

export type LegalCase = {
    index: number
    title: string
    slug: string
    isDraft: boolean
    citations: LegalCaseCitation[]
    content: string
    relatedQuestions: string[]
    lastModified: string
}