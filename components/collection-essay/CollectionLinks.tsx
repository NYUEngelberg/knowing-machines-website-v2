import { PublicationMetaData } from "@/types/publications";
import CollectionItemsList from "./CollectionItemsList";

type Props = {
  publication: PublicationMetaData;
};

export default function CollectionLinks({ publication }: Props) {
  return (
    <div className="my-12">
      <div className="relative border-black border-t-[1px] relative max-w-3xl mb-12">
        <div className="absolute top-[-25px] left-0">
          <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            {publication.contentType}
          </span>
        </div>
        <div className="absolute top-[-4px] right-0 h-[5px] w-[200px] bg-black"></div>
        <div>
          <a
            href={publication.href}
            target="_blank"
            className="flex flex-row items-center gap-[10px] mt-[20px]"
          >
            <h3 className="flex-grow uppercase font-bold tracking-wides text-xl">
              {publication.title}
            </h3>
          </a>
        </div>
      </div>
      <CollectionItemsList
        collectionItems={publication.collectionItems}
        showTitleOnly={true}
        hidePartialBulkyBorder={true}
      />
    </div>
  );
}
