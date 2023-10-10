import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { LegalCase } from "@/types/legal";
import { MetaOgTagData } from "@/types/meta";
import { formatToMmDdYyyy } from "../formatting";

export function getLegalCaseFromSlug(
  slug: string
): LegalCase | null {
  const legalCases = getLegalCases();
  const legalCase = legalCases.find((r) => r.slug === slug) || null;
  return legalCase;
}

export function getLegalCases() {
  const files = fs.readdirSync(
    path.join(
      "content",
      "knowing_legal_machines",
      "legal_explainer",
      "cases"
    )
  );
  const legalCases: LegalCase[] = files.map((filename) => {
    const fullPath = path.join(
      "content",
      "knowing_legal_machines",
      "legal_explainer",
      "cases",
      filename
    );
    const markdownWithMeta = fs.readFileSync(fullPath, "utf-8");
    const stats = fs.statSync(fullPath);
    const lastModified = formatToMmDdYyyy(stats.mtime);
    //   console.log(stats.mtime, filename);
    const { data: frontmatter, content } = matter(markdownWithMeta);
    return {
      index: frontmatter.index,
      title: frontmatter.title,
      slug: frontmatter.slug,
      isDraft: frontmatter.draft,
      citations: frontmatter.citations,
      citationComplaintDates: frontmatter.citationComplaintDates,
      contentType: frontmatter.contentType,
      content: content,
      relatedQuestions: frontmatter.relatedQuestions,
      lastModified: lastModified,
    };
  });
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
