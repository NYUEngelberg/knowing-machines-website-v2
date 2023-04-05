import { ReadingListChapter } from "@/types/readingList";

type Props = {
  chapters: ReadingListChapter[];
};

export default function TableOfContents({ chapters }: Props) {
  return (
    <>
      {chapters.map((chapter, i) => (
        <div
          key={chapter.link.href}
          className="border-l-[3px] border-b-[1px] border-black h-[61px] px-2 flex relative"
        >
          <a
            className="grow leading-[123%] text-sm p-2 flex justify-between items-center"
            href={"#" + chapter.link.href}
          >
            <span>{chapter.link.text}</span>
            <img className="h-[12px]" src="/img/arrow-bottom-right.svg" />
          </a>
          <div
            className="absolute h-[3px] bottom-[-3px] left-0 bg-black"
            style={{ width: (chapters.length - i) * 10 + "%" }}
          ></div>
        </div>
      ))}
    </>
  );
}
