import Layout from "@/components/Layout";
import Chapter from "@/components/reading-list/Chapter";
import SideNav from "@/components/SideNav";
import { ReadingListChapter } from "@/types/readingList";
import {
  getReadingListChapters,
  getReadingListIntro,
} from "@/util/readingListContent";

type Props = {
  intro: string;
  chapters: ReadingListChapter[];
};

export default function ReadingList({ intro, chapters }: Props) {
  const title = "Critical Dataset Studies Reading List";
  return (
    <Layout id="reading-list" title={title}>
      <main
        className={
          "max-w-[1175px] mx-auto py-10 " +
          " md:grid md:grid-rows-[1fr] md:grid-cols-[300px_minmax(0,1fr)] md:gap-[40px]"
        }
      >
        <SideNav title={title} submitSuggestion={true}
        links={chapters.map((c) => c.link)} />
        <section className="border-[1px] border-black mx-4">
          <div
            className="markdown-content p-8 text-sm"
            dangerouslySetInnerHTML={{ __html: intro }}
          />
          {chapters.map((chapter) => (
            <Chapter chapter={chapter} key={chapter.link.href} />
          ))}
        </section>
      </main>
      <></>
    </Layout>
  );
}

export async function getStaticProps() {
  const intro = await getReadingListIntro();
  const chapters = await getReadingListChapters();
  return {
    props: {
      intro,
      chapters,
    },
  };
}
