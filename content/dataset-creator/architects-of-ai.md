---
title: "ARCHITECTS OF AI: Insights from Dataset Creators"
slug: "architects-of-ai"
draft: false
index: 0
contentType: "essay"
coverImg: "/img/creators/2.png"
coverImgAlt: "Abstract image oh black horizontal lines"
preposition: "by"
authors: "Will Orr & Kate Crawford"
excerpt: 'As part of the Knowing Machines Project, we have been interviewing dataset creators to understand the current developments in AI from the perspectives of those in charge of gathering data and sharing it with the technical community. Rather than investigating datasets as stable artifacts, we analyze "datasets-in-the-making" to uncover the uncertainties, personal assessments, and trade-offs made by dataset creators, amid their social, technical, and organizational contexts.'
---

How do you make a better dataset? When is a dataset ready to train an AI model?  Does the dataset accurately reflect what it claims? And could it be misinterpreted or misused? These are just some of the questions that creators of datasets ask when developing datasets for machine learning applications. Far from being neutral or objective artifacts, datasets are profoundly shaped by the intentions of their creators and the complex dynamics of their creation (Crawford and Paglen, 2019; Crawford, 2021; Denton et al., 2021). And with the widespread use of generative AI systems, the impacts of datasets are more pronounced than ever. Yet, the labor of constructing datasets is underexamined in machine learning research (Denton et al., 2020). And despite the foundational influence that dataset creators have in shaping models and their wider impacts, this work is often undervalued within the machine learning pipeline, as compared to model designers and developers (Sambasivan et al., 2021). 

As part of the Knowing Machines Project, we have been interviewing dataset creators to understand the current developments in AI from the perspectives of those in charge of gathering data and sharing it with the technical community. Rather than investigating datasets as stable artifacts, we analyze *"datasets-in-the-making"* to uncover the uncertainties, personal assessments, and trade-offs made by dataset creators, amid their social, technical, and organizational contexts. In this study, we explicitly center the voices of the creators of datasets for machine learning applications to foreground their experiences and expertise (see also Holstein et al, 2019; Sambasivan et al., 2021). 

We use the term "dataset creator" to refer to individuals who have constructed datasets for AI applications or manage the development of datasets. While in some cases datasets rely on additional human labor such as actors and crowd workers, dataset creators are in charge of designing and compiling datasets into final outputs and circulating them once they are deemed fit for release. Their contribution to this work is often signified as an author on the associated papers. As such, these individuals play a significant role in shaping the contents and form of datasets, as well as their social, political, and epistemological impacts.

To undertake this research, we conducted interviews with 18 dataset creators about their processes of constructing datasets. These interviews traced datasets throughout their creation process, beginning from their conceptual inception and the creators' aspirations and intentions for them. We asked about the intricate processes of data collection, labeling, cleaning, validation, and preparation required to make datasets ready for release and circulation. We also explored the post-release phase, investigating how these datasets were utilized and the maintenance practices that ensued. 

These interviews unearthed a shared set of common challenges that dataset creators face, regardless of their disciplinary backgrounds or domains. We also took this opportunity to ask dataset creators to reflect on their own practices, lessons they had learned through their successes and failures, as well as how they see the field of dataset creation developing. These interviews identify these shared challenges as well as the potential to leverage the practical expertise of dataset creators to create datasets in ways that minimize potential harms, reduce scientific uncertainty, and respect human rights and dignity.  

In our article, *The Social Construction of Datasets* (forthcoming in *New Media & Society*) we illustrate the ways in which datasets are products of complex and rapidly evolving social, technical, and institutional dynamics. Specifically, we identify four central challenges faced by creators that shape the construction of datasets:

- **SCALE**: Dataset creators feel increasing pressure to scale up their creations, yet this brings with it associated costs such as an inability to adequately care for its contents. 
- **RESOURCES**: Creators often negotiate limited computational and financial resources in constructing and making use of datasets, yet these trade-offs can compromise the quality of the subsequent dataset while also limiting those who are able to meaningfully make use of the dataset. 
- **SHORTCUTS**: Dataset creators also rely on shortcuts and proxies that, when naturalized, can lead to systemic failures that affect those who rely on them downstream. 
- **ACCOUNTABILITY**: Finally, creators communicate an ambivalence regarding where accountability for their creations and their impacts lie, due to the legal constraints they are operating within and the inability to control the uses of their dataset. 

These core challenges of *scale, resources, shortcuts,* and *accountability* work to distance creators from their creations and hinder feelings of care for and control over their creations. This points towards a need to further develop responsible practices for dataset development that could benefit creators across domains.

Taking up this call, in our article *Building Better Datasets* we share the suggestions for best practices made by our participants to improve dataset creation. We uncover the potential for collaboration across fields as well as knowledge sharing within the dataset community and propose seven recommendations for responsible design made by dataset creators. Dataset creators have learned valuable lessons, often in isolation, through their experiences, successes, and failures. Our work amplifies the importance of these insights to ensure that they are not lost or ignored. Included in the recommendations are techniques for ensuring data quality, diversity within datasets, deriving insights from failures, and clearly documenting the limitations and intended usage of datasets. 

There are significant ethical issues tied to dataset creation. Our interviews addressed privacy concerns, copyright issues, and the problem of obtaining consent from data subjects. Through these recommendations, we hope that dataset creators across domains will find common ground and that they are included as important stakeholders in the AI community. We hope that dataset creation will be taken more seriously as an area in computer science and engineering education and continue to shift from a fragmented, solitary endeavor into a cohesive community with its own norms, tools, and best practices. 

You can read a draft of our forthcoming article [here](https://osf.io/preprints/socarxiv/8c9uh). 

*November 2023*

**References:**

- Crawford, K. (2021). *Atlas of AI: Power, politics, and the planetary costs of artificial intelligence. Yale University Press.*
- Crawford, K., & Paglen, T. (2019). *Excavating AI: The Politics of Training Sets for Machine Learning.* https://excavating.ai
- Denton, E., Hanna, A., Amironesei, R., Smart, A., & Nicole, H. (2021). On the genealogy of machine learning datasets: A critical history of ImageNet. *Big Data & Society*, 8(2), 20539517211035955. https://doi.org/10.1177/20539517211035955
- Denton, E., Hanna, A., Amironesei, R., Smart, A., Nicole, H., & Scheuerman, M. K. (2020). *Bringing the People Back In: Contesting Benchmark Machine Learning Datasets* (arXiv:2007.07399). arXiv. https://doi.org/10.48550/arXiv.2007.07399
- Holstein, K., Vaughan, J. W., Daumé III, H., Dudík, M., & Wallach, H. (2019). Improving fairness in machine learning systems: What do industry practitioners need? *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems,* 1–16. https://doi.org/10.1145/3290605.3300830
- Sambasivan, N., Kapania, S., Highfill, H., Akrong, D., Paritosh, P. K., & Aroyo, L. M. (2021). *‘Everyone wants to do the model work, not the data work’: Data Cascades in High-Stakes* AI. 1–15. https://doi.org/10.1145/3411764.3445518
