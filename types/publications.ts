export type PublicationMetaData = {
  href: string;
  contentType: string;
  coverImg: string;
  coverImgAlt: string;
  title: string;
  preposition: string;
  authors: string;
  excerpt: string;
  intro?: string;
  external?: boolean;
};

export type PublicationElement = {
  index: number
  contentType: string
  title: string
  preposition: string
  authors: string
  excerpt: string
  href: string
}


