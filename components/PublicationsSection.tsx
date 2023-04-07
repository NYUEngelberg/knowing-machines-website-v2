import HomePageHeading from "./HomePageHeading";

export default function PublicationsSection() {
  const item = {
    href: "/critical-field-guide",
    contentType: "Guide",
    title: "A CRITICAL FIELD GUIDE FOR WORKING WITH MACHINE LEARNING DATASETS",
    preposition: "Written by",
    authors: "Sarah Ciston",
    excerpt:
      "Maybe you’re an engineer creating a new machine vision system to track birds. You might be a journalist using social media data to research Costa Rican households. You could be a researcher who stumbled upon your university’s archive of handwritten census cards from 1939. Or a designer creating a chatbot that relies on large language models like GPT-3. Perhaps you’re an artist experimenting with visual style combinations using DALLE-2. Or maybe you’re an activist with an urgent story that needs telling, and you’re searching for the right dataset to tell it.",
  };
  return (
    <section className="text-sm px-4">
      <HomePageHeading text={"Publications"} />
      <div className={"pb-10 md:p-10 relative"}>
        <div className="absolute top-0 left-0 w-[1px] h-[333px] bg-black"></div>
        <div className="border-[1px] border-black p-6 flex flex-col items-center gap-[40px]">
          <img src="/img/field_guide_black_1.png" />
          <div
            id="set-collection-items"
            className="relative border-black border-t-[1px]"
          >
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
                <img src="/img/arrow-top-right.svg" className="link-arrow-magic" />
              </a>
              <div className="text-xs my-4">
                {item.preposition + ": "}
                <span className="font-bold">{item.authors}</span>
              </div>
              <div
                className="markdown-content text-xs"
                dangerouslySetInnerHTML={{ __html: item.excerpt || "" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
