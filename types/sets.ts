export type WorkingSetCollectionItem = {
    index: number
    contentType: string
    title: string
    preposition: string
    authors: string
    excerpt: string
    href: string
}

export type WorkingSet = {
    index: number
    name: string
    date: string
    heroImg: string
    blurb: string
    description?: string
    collection?: WorkingSetCollectionItem[]
}
