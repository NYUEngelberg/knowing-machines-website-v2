import Layout from "@/components/Layout";
import Chapter from "@/components/reading-list/Chapter";
import SideNav from "@/components/SideNav";
import { MetaOgTagData } from "@/types/meta";
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
  const metaOgTagData:MetaOgTagData = {
    title: "Critical Dataset Studies Reading List",
    description: "How should we study datasets in machine learning? As machine learning (ML) increasingly becomes a site of sociotechnical inquiry, invoking numerous social, political, legal, and ethical issues, datasets are a crucial component as they are core material used to train models. Inspired by Tarleton Gillespie and Nick Seaver’s Critical Algorithm Studies reading list, this collection is meant to serve as an entry point to the growing literature on ML datasets across the fields of computer science, human-computer interaction, science and technology studies, media studies, and histories of technology, among others.",
    url: "https://knowingmachines.org/reading-list",
    imageUrl: "https://knowingmachines.org/img/field_guide_black_1.png",
    imageAlt: "a geometric pattern of boxes evoking a spreadsheet",
  }
  const title = metaOgTagData.title;
  return (
    <Layout id="reading-list" metaOgTagData={metaOgTagData}>
      <main
        className={
          "max-w-[1175px] mx-auto py-10 " +
          " md:grid md:grid-rows-[1fr] md:grid-cols-[300px_minmax(0,1fr)] md:gap-[40px]"
        }
      >
        <SideNav
          title={title}
          submitSuggestion={true}
          links={chapters.map((c) => c.link)}
        />
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
