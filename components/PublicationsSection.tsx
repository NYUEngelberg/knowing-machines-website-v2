import { PublicationMetaData } from "@/types/publications";
import HomePageHeading from "./HomePageHeading";

type Props = {
  publicationPreviews: PublicationMetaData[]
}

export default function PublicationsSection({publicationPreviews}:Props) {
  return (
    <section className="text-sm px-4 md:pl-0">
      <HomePageHeading text={"Publications"} />
      <div className={"pb-10 md:p-10 relative"}>
        <div className="absolute top-0 left-0 w-[1px] h-[333px] bg-black"></div>
        {publicationPreviews.map((publication) => (
          <div
            key={publication.href}
            className="border-[1px] border-black p-6 mb-6 flex flex-col items-center gap-[40px]"
          >
            <div className="bg-center bg-cover h-[262px] w-full"
              style={{backgroundImage: "url(" + publication.coverImg + ")"}}
              title={publication.coverImgAlt}></div>
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
                {/* <div className="text-xs my-4">
                  {publication.preposition + ": "}
                  <span className="font-bold">{publication.authors}</span>
                </div> */}
                <div
                  className="markdown-content text-xs mt-4"
                  dangerouslySetInnerHTML={{ __html: publication.excerpt || "" }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
