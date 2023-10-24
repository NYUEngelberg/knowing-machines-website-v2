export type PublicationMetaData = {
  href: string;
  slug?: string;
  contentPath?: string;
  contentType: string;
  coverImg: string;
  coverImgAlt: string;
  title: string;
  preposition: string;
  authors: string;
  excerpt: string;
  intro?: string;
  external?: boolean;
  nonEssayCollectionItems?: PublicationCollectionItem[]
  collectionItems?: PublicationCollectionItem[]
};

export type PublicationCollectionItem = {
  index: number
  contentType: string
  content?: string
  title: string
  slug: string
  coverImg: string
  coverImgAlt?: string
  preposition: string
  authors: string
  excerpt: string
  href: string
}


