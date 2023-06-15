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
      <div className="border-[1px] border-black p-6 flex flex-col items-center gap-[40px]">
        <div className="relative my-12 p-6 border-black border-[1px] border-b-0">
          <div className="max-w-3xl w-[900px] h-[265.93px] bg-center bg-cover"
            style={{backgroundImage: "url(" + publication.coverImg + ")"}}
            title={publication.coverImgAlt}></div>
          <div className="absolute top-[-4px] right-[-4px] h-[4px] w-[250px] bg-black"></div>
          <div className="absolute top-[-4px] right-[-4px] h-[100px] w-[4px] bg-black"></div>
          <div className="absolute bottom-0 left-0 h-[4px] w-[100px] bg-black"></div>
          <span className="absolute -top-6 left-[-1px] content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            {publication.contentType}
          </span>
        </div>
        <div className="py-3 px-6 border-t-[2px] border-black uppercase font-bold text-[20px] text-center max-w-[450px] tracking-widest ">
          {publication.title}
        </div>
        <div className="text-xs my-6 text-center mx-auto">
            <span className="font-bold uppercase">{publication.authors}</span>
        </div>
        <div className="max-w-3xl">
            <p>
sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam 
            </p>
            <br />
            <p>
pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer 
            </p>
            <br />
            <p>
malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at
            </p>
        </div>
        <div className="max-w-3xl">
          {(publication.collectionItems || []).map((item) => (
            <div
              key={item.title}
              className="p-6 flex flex-col items-center gap-[40px]"
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
