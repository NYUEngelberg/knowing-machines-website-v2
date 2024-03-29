---
index: 1
title: "Can GenAI companies train their systems on images, text, code, or other things I’ve made without getting my permission?"
slug: "can-gen-ai-companies-train-their-systems-on-things-i-made"
draft: false
contentType: "Q&A"
shortAnswer: "Probably yes."
confidenceLevel: |
    4
relatedCases: ["doe-1-v-github", "andersen-v-stability-ai", "getty-images-v-stability-ai", "tremblay-v-openai", "silverman-v-openai", "kadrey-v-meta", "j-l-v-alphabet", "chabon-v-openai", "concord-v-anthropic", "huckabee-v-meta", "thomson_reuters_v_ross_intelligence","authors-guild-v-openai", "chabon-v-meta", "sacton-v-openai" ]
---
The non-consensual use of copyright works to train GenAI systems has been one of the most visible controversies surrounding GenAI lawsuits. If you’ve made something, the argument that you can prevent it from being used to train AI feels simple: (1) you own your copyrights; (2) copyright law grants you exclusive control over any attempt to make a copy of your work; and (3) when GenAI systems train on your works, the works are copied into its memory.[^1] Seems like a pretty slam dunk case, right?[^2]

It would be, except for the fair use doctrine. [Section 107 of the US Copyright Act](https://www.law.cornell.edu/uscode/text/17/107) states that if the use of a copyright-protected work is a fair use, it is a legal use – even if it is done without any compensation, credit, or consent to the copyright owner.

Fair use has been around for centuries, and there have been hundreds of decisions finding fair use over copyright owner objections. The preamble of Section 107 includes examples of the types of non-consensual uses that are likely to be fair, such as criticism, comment, news reporting, teaching, scholarship, or research, but those are just a few of the many uses courts have found to be fair. Fair use has a [four-factor test](https://www.law.cornell.edu/uscode/text/17/107) (which is too complex to explain here), but it's the underlying question behind it is whether the non-consensual use provides a significant enough scientific or social benefit to outweigh any harm it might cause to copyright owners in the process.

For computer programs, there have been dozens of fair use cases. Every time you access a digital image, video, document, song, or even a webpage, your computer has to copy that data into its memory in order to perform or display it for you. When these uses are done with permission, there is no copyright conflict. However, anytime someone loads content into a computer without permission, the courts usually look to fair use to decide if it should be legal or not to do so.

As to the question of whether training AI systems is fair use, US courts have addressed similar situations for over 30 years in dozens of cases, all of which overwhelmingly resulted in findings of fair use when the non-consensual copying was done for the purpose of improving computer systems, scientific knowledge, market competition, access to information, or some other socially beneficial purpose.[^3] So it is likely that they will find the same here.

That said, the fair use analysis of AI training AI datasets will likely turn on the answers to the two key questions:

**Will courts identify a distinction between “copying” and “learning”?**  When a human reads a book or studies a painting, we usually think of them as learning from that work, not merely copying it to their brain. For example, going to the library to scour books about art or inspiration for your own novel doesn’t infringe copyright, even though you might remember dozens or even hundreds of examples from what you read. Similarly, machine learning (ML) models are often described as being “trained” on data, meaning they load copyrighted works into their memory as sources to analyze for patterns of production, not merely objects to be replicated. To the degree that courts recognize the “learning” approach to ML, they are more likely to find training to be fair use. However, if courts see training as simply reproducing copyrighted works for the purposes of replicating them, it is less likely that they will find the copying protected by fair use. 

**Are copies of the works in the dataset stored in the model?** The legal community does not have a clear understanding of how individual works from a dataset are stored and represented in a trained model. If the individual works are represented in some specifically identifiable way, that might strengthen the case for copyright infringement.  In contrast, if the works are significantly abstracted in the model, it might weaken that same case, as it is less likely that a court will find the abstracted version to be a “copy” in the same sense as when one downloads a copy of a file.

[^1]: Technically many training datasets do not contain the training content themselves but instead provide links for those who train systems to pull the content from external servers across the internet at the time of training. While it is possible that US courts might see some distinction here, we doubt it will change the final analysis significantly since it is well-known that all the links are provided with the intent that content be pulled during the training process.

[^2]: In law, this is what we call a prima facie case – one where, on its face, the plaintiff has proven the basic violation. However, as we will see here, it doesn’t take into account any defenses that the defendants might raise to rebut the case factually or legally. 

[^3]: See, e.g., Authors Guild v. Google, Inc., 804 F.3d 202 (2d Cir. 2015); Authors Guild, Inc. v. HathiTrust, 755 F.3d 87 (2d Cir. 2014); A.V. ex rel. Vanderhye v. iParadigms, LLC, 562 F.3d 630 (4th Cir. 2009); Perfect 10, Inc. v. Amazon.com, Inc., 508 F.3d 1146 (9th Cir. 2007); Kelly v. Arriba Soft Corp., 336 F.3d 811 (9th Cir. 2003); Sony Computer Entm’t, Inc. v. Connectix Corp., 203 F.3d 596 (9th Cir. 2000); Bateman v. Mnemonics, Inc., 79 F.3d 1532 (11th Cir. 1996); Sega Enters., Ltd. v. Accolade, Inc., 977 F.2d 1510 (9th Cir. 1992); Atari Games Corp. v. Nintendo of Am. Inc., 975 F.2d 832 (Fed. Cir. 1992); Field v. Google Inc., 412 F. Supp. 2d 1106 (D. Nev. 2006).