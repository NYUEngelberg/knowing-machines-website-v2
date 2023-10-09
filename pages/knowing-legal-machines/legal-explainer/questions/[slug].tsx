import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { visit, SKIP } from "unist-util-visit";
import { filter } from "unist-util-filter";
import { u } from "unist-builder";
import { toHast } from "mdast-util-to-hast";
import { toHtml } from "hast-util-to-html";
import { markdownToHtml } from "../../../../util/markdownHelpers";
import Layout from "@/components/Layout";
import NWaysImage from "@/components/n-ways-to-see/NWaysImage";
import NWaysGrid from "@/components/n-ways-to-see/NWaysGrid";
import NWaysCarousel from "@/components/n-ways-to-see/NWaysCarousel";
import CollectionLinks from "@/components/collection-essay/CollectionLinks";
import { getPublicationByHref } from "@/util/publications";
import { GetStaticProps } from "next";
import { LegalExplainerQuestion } from "@/types/legal";
import { getQuestionFromSlug, getQuestionPageMetaOgTagData } from "@/util/legalExplainer/questions";

type Props = {
    question: LegalExplainerQuestion
}

export default function LegalExplainerQuestionPage({question}: Props) {

    return <Layout metaOgTagData={getQuestionPageMetaOgTagData(question)} >
        <pre>
        {JSON.stringify(question, null, 2)}
    </pre>
    </Layout>
}

export async function getStaticPaths() {
    const files = fs.readdirSync(
        path.join("content", "knowing_legal_machines", "legal_explainer", "questions"));
    const temppaths = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join("content", "knowing_legal_machines", "legal_explainer", "questions", filename),
        "utf-8"
      );
      const { data: frontmatter } = matter(markdownWithMeta);
      if (frontmatter.draft === false) {
        return { params: { slug: frontmatter.slug } };
      } else {
        return null;
      }
    });
    const paths = temppaths.filter((path) => {
      return path && path;
    });
    return { paths, fallback: false };
  }
  
  export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context.params?.slug + "";
    const question = getQuestionFromSlug(slug);
    return { props: { question } };
  }
  