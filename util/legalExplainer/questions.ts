import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { LegalExplainerQuestion } from "@/types/legal";
import { MetaOgTagData } from "@/types/meta";

export function getQuestionFromSlug(
  slug: string
): LegalExplainerQuestion | null {
  const files = fs.readdirSync(
    path.join(
      "content",
      "knowing_legal_machines",
      "legal_explainer",
      "questions"
    )
  );
  const questions: LegalExplainerQuestion[] = files.map((filename) => {
    const fullPath = path.join(
      "content",
      "knowing_legal_machines",
      "legal_explainer",
      "questions",
      filename
    );
    const markdownWithMeta = fs.readFileSync(fullPath, "utf-8");
    const stats = fs.statSync(fullPath);
    const lastModified = stats.mtime.toISOString().slice(0, 10);
    //   console.log(stats.mtime, filename);
    const { data: frontmatter, content } = matter(markdownWithMeta);
    return {
      index: frontmatter.index,
      title: frontmatter.title,
      slug: frontmatter.slug,
      isDraft: frontmatter.draft,
      contentType: frontmatter.contentType,
      shortAnswer: frontmatter.shortAnswer,
      longAnswer: content,
      confidenceLevel: frontmatter.confidenceLevel,
      relatedCases: frontmatter.relatedCases,
      lastModified: lastModified,
    };
  });
  const question = questions.find((q) => q.slug === slug) || null;
  return question;
}

export function getQuestionPageMetaOgTagData (question: LegalExplainerQuestion):MetaOgTagData {
    const metaOgTagData = {
        title: question.title,
        description: "Short answer: " + question.shortAnswer,
        url:
          "https://knowingmachines.org/knowing-legal-machines/legal-explainer/questions/" +
          question.slug,
        imageUrl: "https://knowingmachines.org/img/legal/0.png",
        imageAlt: "A dithered abstract image of a mesh.",
      };
    return metaOgTagData;
}