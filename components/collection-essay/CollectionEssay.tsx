import Layout from "@/components/Layout";
import { MetaOgTagData } from "@/types/meta";
import { PublicationCollectionItem } from "@/types/publications";
import { ReactNode } from "react";

type Props = {
  essay: PublicationCollectionItem
  children?: ReactNode | ReactNode[]
}

export default function InvestigatingDatasetsEssayPage({essay, children}:Props) {
  const metaOgTagData:MetaOgTagData = {
    title: essay.title,
    description: essay.excerpt,
    url: "https://knowingmachines.org" + essay.excerpt,
    imageUrl: "https://knowingmachines.org" + essay.img,
    imageAlt: "https://knowingmachines.org" + (essay?.imgAlt || ""),
  }
  return (
    <Layout metaOgTagData={metaOgTagData}>
      <div className="border-[1px] border-black p-6 flex flex-col items-center gap-[40px]">
        <div className="relative my-12 p-6 border-black border-[1px] border-b-0">
          <img src={essay.img} alt={essay?.imgAlt || ""} />
          <div className="absolute top-[-4px] right-[-4px] h-[4px] w-[250px] bg-black"></div>
          <div className="absolute top-[-4px] right-[-4px] h-[100px] w-[4px] bg-black"></div>
          <div className="absolute bottom-0 left-0 h-[4px] w-[100px] bg-black"></div>
          <span className="absolute -top-6 left-[-1px] content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            ESSAY
          </span>
        </div>
        <div className="py-3 px-6 border-t-[2px] border-black uppercase font-bold text-[20px] text-center max-w-[450px] tracking-widest ">
          {essay.title}
        </div>
        <div className="text-xs my-6 text-center mx-auto">
            <span className="font-bold uppercase">{essay.authors}</span>
        </div>
        <div className="max-w-3xl">
        {children}
        </div>
      </div>
    </Layout>
  );
}
