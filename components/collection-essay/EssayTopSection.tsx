import {
  PublicationCollectionItem,
  PublicationMetaData,
} from "@/types/publications";

type Props = {
  essay: PublicationCollectionItem;
  publication: PublicationMetaData;
};

export default function EssayTopSection({ essay, publication }: Props) {
  return (
    <>
      <div className="relative my-12 p-6 border-black border-[1px] border-b-0">
        <div
          className="max-w-3xl w-full h-[265.93px] bg-center bg-cover"
          style={{ backgroundImage: "url(" + essay.coverImg + ")" }}
          role="img"
          aria-label={essay.coverImgAlt}
        ></div>
        <div className="absolute top-[-4px] right-[-4px] h-[4px] w-[250px] bg-black"></div>
        <div className="absolute top-[-4px] right-[-4px] h-[100px] w-[4px] bg-black"></div>
        <div className="absolute bottom-0 left-0 h-[4px] w-[100px] bg-black"></div>
        <div className="absolute -top-6 left-[-1px] text-xs text-white uppercase bg-black self-start">
          <a
            className="inline-block pl-2 p-1 hover:bg-[#1400FF] hover:text-white no-underline"
            href={publication.href}
          >
            ← collection |
          </a>
          <span className="inline-block pr-2 p-1 pl-0">
            {" "}
            {essay.contentType}
          </span>
        </div>
      </div>
      <div className="text-left max-w-3xl uppercase font-bold text-[20px] tracking-widest ">
        {essay.title}
      </div>
      <div className="text-left text-xs self-stretch max-w-3xl ">
        <span className="font-bold uppercase">{essay.authors}</span>
      </div>
    </>
  );
}
