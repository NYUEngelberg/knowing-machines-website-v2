import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { LegalCase } from "@/types/legal";
import { MetaOgTagData } from "@/types/meta";
import { formatToMmDdYyyy } from "../formatting";
import { getLastCommitDate } from "../githubApi";

export async function getLegalCaseFromSlug(
  slug: string
): Promise<LegalCase | null> {
  const legalCases = await getLegalCases();
  const legalCase = legalCases.find((r) => r.slug === slug) || null;
  return legalCase;
}

export async function getLegalCases() {
  const files = fs.readdirSync(
    path.join(
      "content",
      "knowing_legal_machines",
      "legal_explainer",
      "cases"
    )
  );
  const legalCases: LegalCase[] = await Promise.all(files.map(async (filename) => {
    const fullPath = path.join(
      "content",
      "knowing_legal_machines",
      "legal_explainer",
      "cases",
      filename
    );
    const markdownWithMeta = fs.readFileSync(fullPath, "utf-8");
    const stats = fs.statSync(fullPath);
    const lastCommitDate = await getLastCommitDate(fullPath);
    //console.log(lastCommitDate);//, new Date(lastCommitDate));
    const lastModified = lastCommitDate || formatToMmDdYyyy(stats.mtime);
    //console.log(stats.mtime, filename);
    const { data: frontmatter, content } = matter(markdownWithMeta);
    return {
      index: frontmatter.index,
      title: frontmatter.title,
      slug: frontmatter.slug,
      coverImg: frontmatter.coverImg,
      coverImgAlt: frontmatter.coverImgAlt,
      isDraft: frontmatter.draft,
      citations: frontmatter.citations.map((c:string, i:number) => ({
        citation: c,
        link: frontmatter.citationLinks[i] || "",
        caseDate: frontmatter.caseDates[i] || ""
      })),
      caseDateLabel: frontmatter.caseDateLabel || "COMPLAINT DATE",
      contentType: frontmatter.contentType,
      content: content,
      relatedQuestions: frontmatter.relatedQuestions,
      lastModified: lastModified,
    };
  }));
  return legalCases;
}

export function getLegalCasePageMetaOgTagData(
  legalCase: LegalCase
): MetaOgTagData {
  const metaOgTagData = {
    title: legalCase.title,
    description: legalCase.content,
    url:
      "https://knowingmachines.org/knowing-legal-machines/legal-explainer/cases/" +
      legalCase.slug,
    imageUrl: "https://knowingmachines.org/img/legal/0.png",
    imageAlt: "A dithered abstract image of a mesh.",
  };
  return metaOgTagData;
}
