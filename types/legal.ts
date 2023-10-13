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
    caseDate: string
}

export type LegalCase = {
    index: number
    title: string
    slug: string
    coverImg: string
    coverImgAlt: string
    isDraft: boolean
    citations: LegalCaseCitation[]
    caseDateLabel: string
    content: string
    relatedQuestions: string[]
    lastModified: string
}