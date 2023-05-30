import { PublicationMetaData } from "@/types/publications";
import { getPublicationByHref, getPublicationPagePaths } from "@/util/publications";

type Props = {
    publication: PublicationMetaData
}

export default function PublicationPage({publication}:Props) {
    return <div>
        <div
            className="border-[1px] border-black p-6 mb-6 flex flex-col items-center gap-[40px]"
          >
            <img src={publication.coverImg} alt={publication.coverImgAlt} />
            <div
              id="set-collection-items"
              className="relative border-black border-t-[1px]"
            >
              <div>
                <a
                  href={publication.href}
                  target="_blank"
                  className="flex flex-row items-center gap-[10px] mt-[20px]"
                >
                  <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
                    {publication.contentType}
                  </span>
                  <h3 className="flex-grow uppercase font-bold tracking-widest">
                    {publication.title}
                  </h3>
                  <img
                    src="/img/arrow-top-right.svg"
                    className="link-arrow-magic"
                  />
                </a>
                <div className="text-xs my-4">
                  {publication.preposition + ": "}
                  <span className="font-bold">{publication.authors}</span>
                </div>
                <div
                  className="markdown-content text-xs"
                  dangerouslySetInnerHTML={{ __html: publication.excerpt || "" }}
                ></div>
              </div>
            </div>
          </div>
    </div>
};

export async function getStaticPaths() {
    const publicationStaticPaths = getPublicationPagePaths();
    return {
      paths: publicationStaticPaths.map(publication => ({
        params: { publication },
      })),
      //[{ params: { id: '1' } }, { params: { id: '2' } }],
      fallback: false, // can also be true or 'blocking'
    };
  }
  
  export async function getStaticProps(context: any) {
    const slug: string = context.params.publication;
    const href = "/publications/" + slug;
    const publication = getPublicationByHref(href) as PublicationMetaData;
    return {
      // Passed to the page component as props
      props: { publication: publication },
    };
  }
  