import Layout from "@/components/Layout";
import PartialBulkyBorder from "@/components/PartialBulkyBorder";
import {
  PublicationCollectionItem,
  PublicationMetaData,
} from "@/types/publications";
import {
  getPublicationByHref,
  getPublicationPagePaths,
} from "@/util/publications";

type Props = {
  publication: PublicationMetaData;
};

export default function PublicationPage({ publication }: Props) {
  return (
    <Layout title={publication.title} navbarDefaultCollapsed={false}>
      <div className="border-[1px] border-black p-6 grid grid-column-[minmax(0,1fr)] justify-center gap-[40px]">
        <div className="relative my-12 p-6 border-black border-[1px] border-b-0">
          <div
            className="max-w-3xl w-full h-[265.93px] bg-center bg-cover"
            style={{ backgroundImage: "url(" + publication.coverImg + ")" }}
            title={publication.coverImgAlt}
          ></div>
          <div className="absolute top-[-4px] right-[-4px] h-[4px] w-[250px] bg-black"></div>
          <div className="absolute top-[-4px] right-[-4px] h-[100px] w-[4px] bg-black"></div>
          <div className="absolute bottom-0 left-0 h-[4px] w-[100px] bg-black"></div>
          <span className="absolute -top-6 left-[-1px] content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            {publication.contentType}
          </span>
        </div>
        <div className="py-3 px-6 border-t-[2px] border-black uppercase font-bold text-[20px] justify-self-center text-center max-w-[450px] tracking-widest ">
          {publication.title}
        </div>
        <div className="max-w-3xl">
          <p>
            sem viverra aliquet eget sit amet tellus cras adipiscing enim eu
            turpis egestas pretium aenean pharetra magna ac placerat vestibulum
            lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut
            ornare lectus sit amet est placerat in egestas erat imperdiet sed
            euismod nisi porta lorem mollis aliquam ut porttitor leo a diam
            sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet
            nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis
            mattis aliquam faucibus purus in massa tempor nec feugiat nisl
            pretium fusce id velit ut tortor pretium viverra suspendisse potenti
            nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi
            lacus sed viverra tellus in hac habitasse platea dictumst vestibulum
            rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt
            lobortis feugiat vivamus at augue eget arcu dictum varius duis at
            consectetur lorem donec massa sapien faucibus et molestie ac feugiat
            sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi
            tincidunt ornare massa eget egestas purus viverra accumsan in nisl
            nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu
            bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed
            viverra ipsum nunc aliquet bibendum enim facilisis gravida neque
            convallis a cras semper auctor neque vitae tempus quam
          </p>
        </div>
        <div className="max-w-3xl">
          {(publication.collectionItems || []).map((item) => (
            <div
              key={item.title}
              className="py-6 flex flex-col items-center gap-[40px]"
            >
              <div
                id="set-collection-items"
                className="relative border-black border-t-[1px] relative"
              >
                <PartialBulkyBorder
                  total={(publication.collectionItems || []).length}
                  i={item.index - 1}
                  bottom={false}
                />
                <div>
                  <a
                    href={item.href}
                    target="_blank"
                    className="flex flex-row items-center gap-[10px] mt-[20px]"
                  >
                    <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
                      {item.contentType}
                    </span>
                    <h3 className="flex-grow uppercase font-bold tracking-widest">
                      {item.title}
                    </h3>
                    <img
                      src="/img/arrow-top-right.svg"
                      className="link-arrow-magic"
                    />
                  </a>
                  {/* <div className="text-xs my-4">
                  {publication.preposition + ": "}
                  <span className="font-bold">{publication.authors}</span>
                </div> */}
                  <div className="text-xs mt-4 mb-2">
                    <span className="font-bold uppercase">{item.authors}</span>
                  </div>
                  <div
                    className="markdown-content text-xs"
                    dangerouslySetInnerHTML={{
                      __html: item.excerpt || "",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <></>
    </Layout>
  );
}

export async function getStaticPaths() {
  const publicationStaticPaths = getPublicationPagePaths();
  return {
    paths: publicationStaticPaths.map((publication) => ({
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
