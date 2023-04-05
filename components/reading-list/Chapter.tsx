import { ReadingListChapter } from "@/types/readingList";

type Props = {
  chapter: ReadingListChapter;
};

export default function Chapter({ chapter }: Props) {
  return (
    <div
      id={chapter.link.href}
      className="p-8 border-t-[1px] border-black"
    >
      <h2 className="text-lg font-bold mb-4">{chapter.link.text}</h2>
      <div
        className="markdown-content with-breakable-links text-sm"
        dangerouslySetInnerHTML={{ __html: chapter.content }}
      />
    </div>
  );
}
