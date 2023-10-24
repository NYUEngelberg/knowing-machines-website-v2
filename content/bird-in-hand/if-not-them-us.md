---
title: "If Not Them, Us"
slug: "if-not-them-us"
draft: false
index: 3
contentType: Op-Ed
coverImg: "/img/9_ways/c4_black.png"
coverImgAlt: "xx"
preposition: "by"
authors: "Hamsini Sridharan & Jer Thorp"
excerpt: "A year into the so-called AI revolution, Silicon Valley’s scions are asking us to believe two things at once. 
First, that this time will be different. More massive than big data, more disruptive than web 2.0, more transformative than social media. That the territory is new and strange, the dragons bigger and more sharply-toothed, the old maps useless. 
Second, that they are somehow still the right ones to lead the way."

---

A year into the so-called AI revolution, Silicon Valley’s scions are asking us to believe two things at once. 

First, that this time will be different. More massive than big data, more disruptive than web 2.0, more transformative than social media. That the territory is new and strange, the dragons bigger and more sharply-toothed, the old maps useless. 

Second, that they are somehow still the right ones to lead the way.

So far where they've led us seems remarkably familiar. It's a place where user data is exploited with no attention to permissions or ownership, where underpaid content workers labor in shadows, where mitigating harm (particularly to marginalized groups) is forever deprioritized. When these concerns are raised, they're met with a shrugged indifference. Under this disregard is a question that’s half dare: *If not us, who?*

But some of this country’s biggest AI success stories don't come from Silicon Valley, they’re not about chatbots, and they’re not backed by venture capital. They’re about nature and living things, and they’re supported by communities of volunteers from all around the world. 

iNaturalist, self-described as “an online social network of people sharing biodiversity information”, has been developing an AI model to identify species since 2017. iNaturalist’s computer vision model, which takes several months and hundreds of thousands of dollars to train, can identify more than seventy-four thousand unique biological taxa. 

Across the country in Ithaca, NY, the Cornell Lab of Ornithology has been working on Merlin Sound ID since 2020. Their AI model, which you can run on your phone, can tell you exactly which bird is making that tweet or chirp or chip-ke-chek you keep hearing in your backyard, in real time. Merlin is being continually trained and updated with new bird calls; as of right now it can identify more than a thousand birds, just about ten percent of the world’s species.

It’s true that these models, placed next to ChatGPT or DALL-E 2, might seem unimpressive. They won’t paint you a fresco using the mish-mashed styles of Dr. Seuss and Agnes Martin, and neither of them will ever pass the bar. They just identify animals and plants and fungi. These projects though, besides being very good at this task, have managed to solve some of AI’s stickiest issues, challenges so thorny that Big Tech has chosen mostly to ignore them: problems of ownership, accuracy, and agency. They’ve done so by interweaving the dense mathematics of AIs with communities of enthusiasts and experts.

Systems like ChatGPT are trained on huge databases of images and text. Most of this data is scraped from the internet, without any consent from content creators. Every piece of data used to train iNaturalist’s model, on the other hand, comes from its community: 160 million observations with images, submitted by three million participants. Each observation is identified by species, every identification is verified by iNaturalist users themselves. Using a clever system built around consensus, observations are considered to be ‘research grade’ if at least two thirds of the people suggesting an ID are in agreement. Any species with more than 100 research grade observations automatically becomes part of the computer vision model.

Merlin Sound ID gets its training data from the hundreds of thousands of birders around the world who use eBird, an online database of bird observations also run out of Cornell. Teaching a machine to identify bird calls from field recordings - often made in noisy places - requires careful annotation. A single recording might contain sounds from a dozen species, and each chirp and trill (often overlapping) needs to be separated and labeled. It’s tricky, specialized work, for which Merlin depends on a large corps of volunteer birders, often experienced field recordists.

These human-centered processes stand in stark contrast to the tactics used most commonly by developers like OpenAI for vetting huge sets of training data. One tactic is to delegate the job of cleaning datasets to smaller models. There might be one model to decide if an image is NSFW, another to check if it’s watermarked, and a third to check whether captions match images. These nesting-doll models are trained on their own datasets, which themselves might have been algorithmically assembled. This can easily go awry: the smaller models could miss objectionable content that wasn’t included in their training sets, or, inversely, they may learn to flag something as objectionable in ways that amplify social biases. Either way, errors are carried up the line, from smaller models to bigger ones, from old training sets to new.

The second tactic is to outsource vetting and filtering to content workers overseas, who spend days or even months looking at what is often (in the case of NSFW models) extremely disturbing content, being paid wages that are well under this country’s minimum wage. Their work is not only undervalued, it’s deliberately kept invisible. When we’re using DALL-E 3 or ChatGPT, we’re meant to believe that the images and text we’re given are produced from some shiny algorithmic assemblage, free of the messy complications of human labor.

When a large model goes into public use, it will inevitably make mistakes. LinkedIn’s profile generator overly sexualizes images of women. ChatGPT has a predilection for inventing academic citations out of whole cloth. iNaturalist has a tendency to mistake blobs of insulating foam for fungi. Merlin’s model hears owls where there is only city noise. 

In the Big Tech world, these potentially embarrassing and very possibly harmful errors are mitigated using a process called Reinforcement Learning From Human Feedback (RLHF). This process, like the content filtering, happens behind closed doors and under NDAs. While the humans who do the reinforcement are crucial to the model’s success, their labor is also often intentionally invisible.

In contrast, after iNaturalist’s computer vision model is trained and a new version goes into use, the community performs its own version of RLHF, figuring out where it is still failing and correcting the training data for the next go-around. On a sprawling 294-page wiki on iNaturalist’s website, you can find users responding to the 2020 release of the computer vision model, collaborating to figure out where the it fails (ie. wolf spiders), and rallying the volunteer base to add observations to shore up weak points.

Merlin’s community of volunteer bird experts work directly with the project’s machine learning researchers, analyzing the ways the model is succeeding and failing. Such collaborations usefully scramble AI’s hierarchies, putting data makers and model builders in the same room. This approach is miles away from Silicon Valley standards, where AI developers might not ever see an image from a training set, let alone meet the person who created it.

Community-based approaches to AI bring their own challenges, including geographic, racial, gender, and other disparities in participation that shape datasets and models. But these can be addressed as problems of community, rather than treating biased data and models as a purely technical problem to be solved with more data and better models. 

Big Tech’s greedy approaches have so far dominated AI conversations — but by looking to groups that are charting a different course, we can push back on the narrative that this is inevitable, that it can’t be otherwise. Paying closer attention to the technical and social approaches pioneered by projects like iNaturalist could have profound effects on how AI is developed and deployed, particularly in science and medicine. More broadly, these models can inspire us to build AI models as tools with specific purposes, whose workings are visible, and whose impacts can be measured and known: things that can be built by and accountable to specific communities.  

If not them, us.