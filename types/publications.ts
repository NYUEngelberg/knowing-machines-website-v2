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
  collectionItems?: PublicationCollectionItem[]
};

export type PublicationCollectionItem = {
  index: number
  contentType: string
  content?: string
  title: string
  slug: string
  img: string
  imgAlt?: string
  preposition: string
  authors: string
  excerpt: string
  href: string
}


