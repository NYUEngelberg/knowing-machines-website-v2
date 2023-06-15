import CollectionEssay from "@/components/collection-essay/CollectionEssay";

export default function C4EssayPage() {
  const essay = {
    index: 1,
    contentType: "essay",
    title:
      "Datasets as sociotechnical artifacts: The case of “Colossal Cleaned Common Crawl” (C4)",
    img: "/img/n_ways_to_see_a_dataset.png",
    imgAlt: "/img/n_ways_to_see_a_dataset.png",
    preposition: "by",
    authors: "Will Orr",
    excerpt:
      "The Colossal Cleaned Common Crawl dataset, or C4, is a large-scale text corpus developed by a team of engineers at Google. It was created by taking a single month’s scrape of Common Crawl and applying filtering heuristics to remove duplicate, placeholder, nonsense, and non-english language content.",
    href: "/n-ways-to-see/C4",
  };
  return (
    <CollectionEssay essay={essay}>
      <p><strong>Introduction</strong></p>
      <br />
      <p>
        The capabilities of artificial intelligence (AI) systems are bound by
        the datasets used to train them. Datasets encapsulate the concepts,
        representations, and notions of truth upon which AI relies. Training
        datasets carry inherent social and political perspectives into AI
        systems, such as how people, objects, and ideas are represented,
        influencing how AI systems allocate resources and opportunities.
      </p>
      <br />
      <p>
        Scholars have turned to dataset auditing to uncover the social and
        political nature of datasets by excavating the assumptions underpinning
        training datasets. While auditing datasets can uncover the
        representational and allocative harms embedded within datasets, they
        fail to reveal why datasets embody specific political perspectives or
        offer insights into how the practices of dataset creation can be
        improved. Rather, viewing datasets through the lens of their creators
        shows them to be less stable and far more complex and arbitrary than
        commonly understood, resulting from trade-offs, compromises, and
        constraints present at their formation. In short, datasets are products
        of their sociotechnical contexts.
      </p>
      <br />
      <p>
        The case of the Colossal Cleaned Common Crawl (C4) dataset underscores
        the importance of uncovering the sociotechnical dynamics that contribute
        to the formation of datasets. While audits of C4 reveal the presence of
        harmful content, misinformation, and the exclusion of content about
        marginalized individuals, a creator of C4 points to the organizational,
        resource, and personal factors that shaped the dataset’s final form.
        Understanding the conditions of dataset creation is crucial for
        improving the practices of dataset creation and preventing the creation
        of datasets that can produce and perpetuate societal harm in the future.
      </p>
      <br />

      <p><strong>What is C4?</strong></p>
      <br />
      <p>
        The Colossal Cleaned Common Crawl dataset, or C4, is a large-scale text
        corpus developed by a team of Google engineers. It was created by taking
        a single month’s scrape of the Common Crawl corpus and using filtering
        heuristics to remove duplicate, placeholder, nonsensical, and
        non-English language content. Offensive content was also filtered by
        erasing any web page that contained any of the over 400 words found on
        the "List of Dirty, Naughty, Obscene, and Otherwise Bad Words", an
        open-source project originally developed by Shutterstock engineers to
        sanitize the results of its autocomplete search suggestions. The list
        has since been widely used and is available in 28 languages including
        Esperanto and Klingon.
      </p>
      <br />
      <p>
        These methods produce a dataset of approximately 750 GB of "reasonably
        clean and natural English text" that can be used for pre-training large
        language models. Google uses C4 to train its open-source language model,
        T5, which it uses in its proprietary text-to-image generative model,
        Imagen. More recently, C4 has been used to train Google’s large language
        model LaMDA, making up 12.5% of its training corpus.
      </p>
      <br />

      <p><strong>Understanding C4 through audits</strong></p>
      <br />
      <p>
        Given the profound impact that C4 can have on large models, researchers
        have turned to auditing the dataset to understand the kinds of data
        contained within it. These audits have revealed the limitation of the
        dataset and the flaws of the filtering pipeline to remove harmful and
        inappropriate content.
      </p>
      <br />
      <p>
        For instance, the Washington Post uncovered a considerable quantity of
        pornographic and offensive content, including over 72,000 instances of
        the word "swastika", one of the words present on the block list. It also
        identified content sourced from sites associated with anti-trans
        perspectives, white supremacists, far-right conspiracy theories such as
        Q-Anon, and misinformation. Another study found that C4
        disproportionately excludes content about minoritized individuals, such
        as non-sexual and non-offensive content about LGBT+ people, and content
        associated with Black and Hispanic authors. Models trained upon this
        corpus will thus suppress the existence of marginalized people while
        further amplifying abusive perspectives toward them. These audits
        underscore that data cleaning is not a value-neutral practice, and the
        decisions made during its creation mold the political implications of a
        dataset and the voices represented within it.
      </p>
      <br />
      <p><strong>Datasets as sociotechnical products</strong></p>
      <br />
      <p>
        However, these audits provide limited insights into the obstacles faced
        by dataset creators in the development of datasets for machine learning
        applications. Rather than seeking to expose the harmful, abusive, and
        copyright-protected content present within datasets, qualitative
        research with dataset creators seeks to make sense of the complications
        present within datasets. In July 2022, I spoke with a creator of C4
        about their dataset. The creator acknowledged that C4 is far from
        perfect. They saw it not as a “proper dataset” constructed with human
        labor or considered curation. Rather, it was “haphazardly stitched
        together” as a compromise of various organizational, personal, and
        resource constraints. These trade-offs were seen as necessary to meet
        the project’s goals within the creators’ operational constraints.
      </p>
      <br />
      <p><strong>Organizational constraints</strong></p>
      <br />
      <p>
        A primary objective of the project was to create a publicly accessible
        dataset suitable for pre-training language models, in contrast to the
        private, proprietary datasets typically used for training large
        proprietary models. However, the C4 creators needed approval from
        Google's legal team, who acted as the final arbiter of what was
        permitted to be in the dataset. The restrictions imposed by the legal
        team materially impacted the type of data that was available to be used
        within the dataset, as well as the final form of the dataset.
      </p>
      <br />
      <p>
        In order to release the dataset publicly, they were only able to use
        publicly available resources. This prevented the team from using
        Google's own private web scrape (the collection of text and metadata
        about accessible sites on the web), a valuable asset used by Google to
        produce search engine results and train proprietary models such as
        Google’s chatbot, Bard. Instead, C4’s creators were required to rely on
        flawed-yet-publicly-available resources, such as Common Crawl. While
        Google may have more control over limiting inappropriate content from
        its web scrape, Common Crawl is known to include pornographic and
        abusive content, hate speech, and racial and sexual biases, making
        filtering the dataset essential before it can be used for pre-training.
      </p>
      <br />
      <p>
        Google’s legal team also prohibited the C4 creators from releasing the
        dataset itself. Instead, the creators released code that could be used
        to reproduce the C4 dataset, which has since been recreated and is
        hosted publicly.
      </p>
      <br />
      <p><strong>Personal constraints</strong></p>
      <br />
      <p>
        Beyond Google’s organizational constraints, the engineering team also
        had its own reservations that shaped the form of the final dataset.
        Primarily, C4 was created to train Google’s open-source language model,
        the Text-To-Text Transfer Transformer, or T5. The creator that I
        interviewed explained that of the team of nine engineers developing T5,
        no one was “the dataset person” responsible for ensuring that C4 was of
        high quality and suitable for training a language model.
      </p>
      <br />
      <p>
        The absence of a dedicated dataset curator had implications for the
        cleaning process. The team was reluctant to impose their own beliefs
        about what constitutes "good web content" to properly curate Common
        Crawl. They acknowledged the immense responsibility of creating a block
        list or filtering heuristic that defines what harmful web content is, as
        well as content considered permissible and safe for training. However,
        no one on the team felt capable of coordinating or leading this effort.
        Nor would Google permit them to release their own exclusion list.
      </p>
      <br />
      <p>
        To alleviate this burden, the team opted to use a publicly available
        block list. Doing so allowed them to defer accountability for defining
        what was considered safe and appropriate to the creators of this list.
        They also perceived that using an existing block list provided a sense
        of security for their team, shielding their opinions and subjectivities
        from becoming embedded in the dataset infrastructure. This was a
        strategic attempt to distance themselves from the potential biases and
        controversies associated with curating web content. While the creator
        that I spoke to recognized that the filtering pipeline was itself
        flawed, it was considered "the best bad option" available. The C4 team's
        decision to not alter or improve the block list mirrors assumptions that
        model creators make about C4 being "good enough" for their use.
      </p>
      <br />

      <p><strong>Resource constraints</strong></p>
      <br />
      <p>
        Finally, creators also faced resource constraints such as time pressures
        and limited human labor. The C4 creator I interviewed emphasized that
        manual data curation work is crucial for creating high-quality datasets.
        However, the engineering team lacked the necessary time and resources to
        undertake this complex and nuanced task themselves. They acknowledged
        that comprehensively curating the dataset would be a long-term project
        with multiple stakeholders, which was beyond the capacity of their
        engineering team.
      </p>
      <br />
      <p>
        The C4 creator explained that dataset creation is “all a matter of
        cost-benefit”. Considering time pressures and limited human labor, they
        made the strategic decision to implement a pipeline that would satisfy
        their operational constraints quickly. This necessitated utilizing
        publicly available resources, which, although flawed, offered a
        practical solution to their constraints.
      </p>
      <br />
      <p><strong>A faulty pipeline</strong></p>
      <br />
      <p>
        Operational constraints often require dataset creators to make
        challenging decisions and compromises. The case of C4 highlights how the
        sociotechnical context of the dataset’s creation shaped its final form.
        Though there were some “general mixed feelings” about using a block
        list, their constraints led to the implementation of a “bone-headed
        filtering” pipeline that inadvertently removed content about, and
        produced by, marginalized people. The exclusion of marginalized groups
        from the final dataset was "somewhat expected but not intended" by
        creators due to their flawed filtering pipeline. This case highlights
        the trade-offs and compromises that are made within the construction of
        datasets that are erased from the final published dataset. Despite its
        limitations, the dataset was deemed "clean enough" for pre-training a
        large language model to perform well on standard Natural Language
        Processing (NLP) benchmarks, which was a primary objective of the
        project.
      </p>
      <br />
      <p>
        While researchers may look to auditing datasets to understand their
        social and political implications, auditing datasets in their final form
        solely based on their contents overlooks the crucial sociotechnical
        conditions that shape them. Dataset creators provide a valuable entry
        point into interrogating datasets as contingent and unstable artifacts
        in the making. These insights are crucial for uncovering the complex
        trade-offs and compromises made in the construction of datasets that
        ultimately shape their social and political implications. Understanding
        these conditions of dataset creation is imperative to identify
        deficiencies and drive improvements in responsible dataset creation
        practices.
      </p>
      <br />
    </CollectionEssay>
  );
}
