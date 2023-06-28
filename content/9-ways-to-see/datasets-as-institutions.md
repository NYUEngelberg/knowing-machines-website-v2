---
title: "9 Ways To See A Dataset: Datasets as Institutions — The New York Times Annotated Corpus"
draft: false
index: 0
contentType: "essay"
coverImg: "/img/9_ways/nyt_black.png"
coverImgAlt: "A dithered image of the New York Times logo, cropped so only the top part of the logo is visible"
preposition: "by"
authors: "Mike Ananny"
excerpt: "The NYT Annotated Corpus (NYTAC) shows how datasets are institutional achievements."
---

The _NYT Annotated Corpus_ (NYTAC) shows how datasets are institutional achievements.

When seen as parts of institutions (and not only information collections), datasets reveal a rich set of largely invisible professional practices, organizational assumptions, and historical patterns that make institutions seem stable and routine. Datasets like NYTAC are part of “[loosely coupled arrays of standardized elements](https://web.stanford.edu/~woodyp/papers/dimaggioandpowell_intro.pdf)” that make an organization like the New York Times (NYT), and an institution like “the press” seem coherent, stable, and predictable. In fact, organizations and fields are contingent, require ongoing maintenance, and can shift in unexpected ways. An _institutional_ view of datasets like NYTAC shows the “[lenses through which actors view the world and the very categories of structure, action, and thought](https://web.stanford.edu/~woodyp/papers/dimaggioandpowell_intro.pdf).”

## What is the NYTAC?

Including “[nearly every article published in The New York Times between January 01, 1987 and June 19, 2007](https://catalog.ldc.upenn.edu/docs/LDC2008T19/new_york_times_annotated_corpus.pdf),” the NYTAC [contains](https://graphics8.nytimes.com/packages/images/rd/final.pdf) 1,855,658 documents (over 1.5 million of which have been manually categorized into topics, people, location, and more) and 664,998 human-written abstracts, all organized into an XML structure that conforms to the [International Press Telecommunications Council](https://iptc.org)’s “[News Industry Text Format](https://iptc.org/standards/nitf/)” (NITF). Offering 48 different ways of describing NYT articles, NYTAC metadata reflects 20 years of different ways that _Times_ staff wrote, edited, indexed, and published news articles. The dataset has become an incredibly popular corpus of news articles and resource for data scientists, spawning countless academic articles, derivative datasets, and machine learning models – _e.g._, a [summarization dataset](https://aclanthology.org/N18-1065.pdf) of NYT article abstracts, an [extraction](<https://catalog.ldc.upenn.edu/LDC2018T12#:~:text=Concretely%20Annotated%20New%20York%20Times%20was%20developed%20by%20Johns%20Hopkins,Times%20Annotated%20Corpus%20(LDC2008T19).>) of NYT linguistic patterns, a computational [method](https://dl-acm-org.libproxy1.usc.edu/doi/10.5555/1888339.1888387) for detecting news events, and a [technique](https://rdcu.be/db6UR) for increasing the diversity of news search results. The NYTAC has become much more than a repository of news articles; it has become an infrastructure for studying journalism and, when used in systems that extract, summarize, and generate news stories, the NYTAC becomes an invisible authority on journalistic language – a kind of journalistic _lingua franca_ for computational news.

## What does the NYTAC show?

As an _institutional_ achievement, the NYTAC shows how countless largely invisible human and nonhuman actions combine to create taken-for-granted objects with the power to organize disparate communities. The NYT’s internal indexing service reflects [decades](http://www.jstor.org/stable/25541211) of bibliographic practice; the exclusion of wire articles and adherence to NITF standards show organizational contracts and partnerships; the derivative datasets, models, and tools show a vibrant community of journalism-adjacent engineers eager to build with the imprimatur of the NYT.

Beyond tracing the NYTAC as a site of (inter)organizational practices, the NYTAC is also a dataset ripe for asking questions about journalism and news. For example, engaging the NYTAC with the forensic Knowing Machines dataset tool lets us form some simple but generative inquiries like:

**Question:** Where in the paper do stories mentioning racism in sports appear?

**Method:** Searching for “racism” + “baseball”, “racism” + “football”, “racism” + “hockey” within Sports and News returns this pattern:

![Graph showing pattern returned from searching for “racism” + “baseball”, “racism” + “football”, “racism” + “hockey” within Sports and News](/img/9_ways/graph.png)

**Interpretation:** Taking 1987-2007 NYT coverage as a baseline, racism seems more likely to be discussed in stories appearing in the News section versus the Sports section. More sophisticated investigations into exactly how these discussions appear is needed, but this cursory look raises questions:

- why might stories mentioning racism in sports more likely appear in the News versus Sports section?
- what reporting and publishing practices and beat structures produce this pattern? How do News and Sports section journalists talk to each other about their coverage and what sustains the separations and overlaps we see in dataset categorizations?
- do other news organizations also mention sports racism in their News sections more than Sports sections?
- how might people building derivative datasets and machine learning models account for such a pattern in the assumptions guiding their own work?
- especially critical for Generative AI, is this NYTAC pattern one that builders think _should_ underpin the synthetic creation of news stories?

Counting word occurrences in datasets is not a new or particularly sophisticated research technique. What these two simple examples illustrate, however, is how a foundational, infrastructural dataset like NYTAC can be interrogated for patterns that could prompt broader, institutionally situated questions about machine learning datasets and their use. This relatively simple example raises questions about how NYTAC sees NYT news, the power of it becoming a proxy for generic news, and its potential significance as an authoritative knowledge source for teaching Generative AI systems how to create news stories.

Specifically, how did 20 years of NYT organizational culture create NYTAC patterns? How do shifts in NYTAC patterns suggest potential shifts in NYT practices? How do patterns in NYTAC mimic or diverge from other news organization datasets? How might the data scientists and machine learning engineers who _use_ and _extend_ the NYTAC understand its patterns and shifts, so that they might critically evaluate its _de facto_ status as a gold standard of news language, adjusting their practices in light of a deeper understanding of the institutional forces that created the NYTAC?

The NYTAC _emerged from_ decades of reporting habits, publishing standards, and news librarianship that seem contained within journalistic choices – but these choices are taking on a new and authoritative life in engineering communities using the NYTAC to build seemingly objective systems for classifying and producing news.

The NYTAC is simultaneously a reflection of news cultures and organizational patterns, a dataset with a life beyond journalism, and a standard for data engineers building derivative products. As “loosely coupled array of standardized elements” (practices, languages, norms, categories), the NYTAC is an institutional achievement. Understanding it and its journalism-engineering meetings shows the contemporary “press” to be not just what journalists and newsrooms do, but what datasets see and shape.
