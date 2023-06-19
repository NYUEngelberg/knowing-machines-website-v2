import { PublicationCollectionItem } from "@/types/publications";
import PartialBulkyBorder from "../PartialBulkyBorder";

type Props = {
  collectionItems: PublicationCollectionItem[] | undefined;
  showTitleOnly?: boolean;
  hidePartialBulkyBorder?: boolean;
};

export default function CollectionItemsList({
  collectionItems,
  showTitleOnly,
  hidePartialBulkyBorder,
}: Props) {
  return (
    <div className="max-w-3xl">
      {(collectionItems || []).map((item) => (
        <div
          key={item.title}
          className="py-6 flex flex-col items-stretch gap-[40px]"
        >
          <div
            id="set-collection-items"
            className="relative border-black border-t-[1px] relative"
          >
            {!hidePartialBulkyBorder && (
              <PartialBulkyBorder
                total={(collectionItems || []).length}
                i={item.index - 1}
                bottom={false}
              />
            )}
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
              {!showTitleOnly && (
                <div className="text-xs mt-4 mb-2">
                  <span className="font-bold uppercase">{item.authors}</span>
                </div>
              )}
              {!showTitleOnly && (
                <div
                  className="markdown-content text-xs"
                  dangerouslySetInnerHTML={{
                    __html: item.excerpt || "",
                  }}
                ></div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
