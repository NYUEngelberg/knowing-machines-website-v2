---
title: "9 Ways To See A Dataset: What Can LAION Teach Us About Copyright Law?"
slug: "LAION-copyright"
draft: false
index: 4
contentType: essay
coverImg: "/img/9_ways/laion_copyright_black.png"
coverImgAlt: "A dithered image of Napoleon in profile, cropped"
preposition: "by"
authors: "Jason Schultz"
excerpt: "Looking through millions of dataset images can be a disorienting experience. Each one says something. But what does a sea of them say about the current status of copyright law?"
image-1:
  caption: "Image of Napoleon from the LAION-Face subset"
  imagePath: "https://machinist.smokingheaps.net/api/datasets/8/data/78676939"
image-2:
  caption: "Image of Clement Scott from the LAION-Face subset"
  imagePath: "https://machinist.smokingheaps.net/api/datasets/8/data/78191526"
image-3:
  caption: "Frampton Comes Alive! album cover"
  imagePath: "https://machinist.smokingheaps.net/api/datasets/8/data/79239582"
image-4:
  caption: "Image of William H Fitzgerald labelled as 'copyright-free'"
  imagePath: "https://machinist.smokingheaps.net/api/datasets/8/data/78327143"
image-5:
  caption: "Trump Bill Signing Meme image from LAION-Face"
  imagePath: "https://machinist.smokingheaps.net/api/datasets/8/data/42850351"
image-6:
  caption: "Padme Amidala, Jeff Lafferty"
  imagePath: "https://machinist.smokingheaps.net/api/datasets/8/data/78288479"
image-7:
  caption: "Image of Allie Mae Burroughs from LAION-Face"
  imagePath: "https://machinist.smokingheaps.net/api/datasets/8/data/77926428"
image-8:
  caption: "Andy Warhol's Michael Jackson"
  imagePath: "https://machinist.smokingheaps.net/api/datasets/8/data/79029811"
image-9:
  caption: "North Korea propaganda poster"
  imagePath: "https://machinist.smokingheaps.net/api/datasets/8/data/78408202"
grid-1:
  caption: "Copyright curiousities in the LAION training set"
  collection: 3
carousel-1:
  caption: "A small sample of public domain works in LAION"
  collection: 10
---

_Looking through millions of dataset images can be a disorienting experience. Each one says something. But what does a sea of them say about the current status of copyright law?_

[:grid-1]

In recent months, [numerous lawsuits](https://www.saverilawfirm.com/our-cases/ai-artgenerators-copyright-litigation), [news headlines](https://www.vice.com/en/article/3ad58k/ai-is-probably-using-your-images-and-its-not-easy-to-opt-out), and [protest letters](https://artisticinquiry.org/AI-Open-Letter) have accused [LAION](https://laion.ai/) and the companies that train on its datasets of massively infringing copyright. They claim that dataset creators and subsequent users must get permission for each image included in the dataset. In response, we've seen a number of regulatory proposals around copyright and training data, including [new amendments](https://www.reuters.com/technology/eu-lawmakers-committee-reaches-deal-artificial-intelligence-act-2023-04-27/) to the EU AI Act that propose mandatory copyright dataset disclosures. LAION claims [it respects copyright law](https://laion.ai/faq/) and the companies that use it [claim](https://www.techdirt.com/2023/04/21/stability-ai-and-deviantart-ask-court-to-dismiss-artists-silly-lawsuit-against-generative-art/) that they haven't infringed anyone's rights.

So who is correct? Ultimately, the courts will decide, but one way to understand the controversy and its complexity is to look at the data itself. Using the new Knowing Machines see:set tool, I searched LAION Face (a 40-million-image subset of the larger LAION dataset) for "copyright" to see what it might reveal about what is actually going on under the hood of one of the most influential aspects of the current AI debate. Below are three lessons learned from my investigation.

## Lesson One: Copyright Is Easy to Claim but Often Hard to Determine

[:image-1]

I'm staring at an image of Napoleon, in profile. The LAION Face metadata (click on the image to view) about the image says "Napoleon in profile by Croizier, 1806, copyright McGill University." No other relevant information is given, other than the fact that the side of Napoleon's face is labeled "NSFW: UNLIKELY."

I sit for a minute, pondering what to think about these assertions from the point of view of copyright law. On the one hand, the drawing is clearly a work of art, potentially subject to copyright protection. On the other, the description suggests that it was made by [J. Croizier, an early 19th-century French artist](https://www.mutualart.com/Artist/J--Croizier/0A2B0607BC516D24). It also ends with the notion that McGill University somehow owns the copyright, presumably because both the image and its physical counterpart reside in the [McGill Napoleon Collection](https://digital.library.mcgill.ca/napoleon//search/printsdetail.php?ID=2540&doctype=Prints&sitelanguage=english&referer=detail). Several things don't add up. Copyright in most countries (including Canada) only lasts for 70 years after the author's death. Assuming Croizier drew the image and then, in fact, died in the 1800s, it would be in the public domain. Then how can it still be under copyright? And how did McGill end up with it?

McGill is probably making a mistake that many digital archivists make. While it knows it can't claim copyright in the underlying image (which is public domain), it probably believes that it has a copyright in the digital scan of the image because the scan is a separate "work." Unfortunately for McGill, this isn't how copyright law works. Courts have held that making an exact digital scan of a public domain work isn't creative enough to warrant its own copyright.[^1] So despite McGill claiming one, there isn't any. One can see similar mistaken claims to copyright for scans of public domain works in LAION in the image carousel below.

[:carousel-1]

In the final image, Sotheby's ironically claims copyright in its scan of [Diego Velázquez's Santa Rufina](https://www.sothebys.com/en/auctions/ecatalogue/2007/old-master-paintings-evening-l07031/lot.59.html), while at the same time disclaiming any knowledge of the underlying work's copyright status, despite the Old Master painter having died in 1660.

[:image-8]

The above example of an institution's claim to copyright has many twists. The painting is Andy Warhol's Michael Jackson, for which the Andy Warhol Foundation retains copyright. However, it looks like Time Magazine [commissioned](https://www.facebook.com/michaeljackson/posts/time-magazine-commissioned-andy-warhol-to-paint-a-portrait-for-its-march-1984-co/10157182355676473/) and then licensed it for [cover art](https://content.time.com/time/covers/0,16641,19840319,00.html) in 1984, and then [loaned](https://npg.si.edu/object/npg_NPG.86.TC14) that cover art to the National Portrait Gallery in 1987 as part of a large collection to "enrich\[\] our understanding of the United States in a global context." The metadata in LAION misstates that copyright rests with the National Portrait Gallery, again likely because they produced the digital scan of the work.

[:image-9]

Finally there is this example of the same problem with government publications. In 2016, Vox [published](https://www.vox.com/2016/1/6/10724334/north-korea-history) an article on understanding North Korea using a government propaganda poster, which is now included in LAION. The metadata says "Copyright Vox.com," but there is no information in the Vox story about who authored the poster or even who took the photograph of it that was used. Assuming the work was created or commissioned by the North Korean government, untangling the skein of copyright for this image would be quite complex.

## Lesson Two: Outdated or Mistaken Metadata Is Abundant

[:image-2]

Continuing to search, I run across a second set of mistaken copyright claims, these arising from images with outdated or mistaken metadata. Take, for example, this photo of the influential English theatre critic Clement Scott, whose metadata asserts "From a copyrighted photograph by Elliott & Fry." While it may be true that at one point [Elliott & Fry](https://en.wikipedia.org/wiki/Elliott_%26_Fry) owned the copyright for this photo, it is almost certainly no longer the case. According to [Wikipedia](https://en.wikipedia.org/wiki/Clement_Scott), Clement Scott died in 1904. Given that the photo had to be taken before his death, it is in the public domain in the United States, as are all works published before January 1, 1928\. Other similar LAION images with expired copyrights can be found [here](https://machinist.smokingheaps.net/datasets/8?q=copyright&page=14&size=50&details=78001621) and [here](https://machinist.smokingheaps.net/datasets/8?q=copyright&page=15&size=50&details=77939530).[^2]

[:image-3]

Above is the well-known cover image from "Frampton Comes Alive!" one of the best-selling rock albums of all time. The label says copyright Ticketmaster, but in reality it belongs to photographer [Richard E. Allen](https://rockpopgallery.typepad.com/rockpop_gallery_news/2007/04/cover_story_fra.html). Again, one must assume the Ticketmaster copyright claim is either a mistake or comes from Ticketmaster claiming copyright of the overall webpage where it sold tickets to Frampton's "[Comes Alive 35](https://www.staugustine.com/story/entertainment/arts/2011/05/24/evening-peter-frampton/16194056007/)" tour.

[:image-4]

Also deserving consideration is the above "vintage" photograph which the labeler considers "copyright-free" -- but is it? How would we know?

## Lesson Three: Fair Use Is Also Part of the Picture

[:image-5]

Finally, even when valid copyrights exist and metadata is accurate, issues of fair use can be implicated for each individual image. Take this version of a [classic Trump meme](https://imgflip.com/memegenerator/Trump-Bill-Signing) from 2018\. Vox [credits](https://www.vox.com/policy-and-politics/2018/3/23/17156900/omnibus-spending-bill-trump-statement) one version of the original photo to "Ron Sachs - Pool/Getty Images," but there are so many versions of these photos online, it is hard to know which one is the original. Beyond that, the use of the image to comment on fair use could itself qualify as fair, meaning that no license or permission is required.

[:image-6]

In the above example, we see a complex interaction between fair use and the right to make "derivative" works of other copyrighted works. Here, artist Jeff Lafferty has drawn his rendition of "Padme Amidala" claiming his own copyright in the drawing. But the work is a derivative of a [promo still](https://www.ebay.com/itm/363071775930) from the Star Wars prequels. Did Lafferty receive permission from Disney/Lucasfilm to make and [sell](https://www.behance.net/gallery/18245701/Padme-with-Blaster?locale=en_US) the drawing? Probably not. However, given that he has incorporated his own creativity into the drawing, it is [possible](https://www.supremecourt.gov/opinions/22pdf/21-869_87ad.pdf) that courts could find this a fair use of the still, especially since it is unlikely to compete with sales of official Star Wars images. On the other hand, if it is found to be infringing as a derivative work, it [loses](https://www.law.cornell.edu/uscode/text/17/103) its copyright. Which analysis should LAION users rely on?

[:image-7]

Finally, consider this image of Allie Mae Burroughs, one of several [famously shot](https://www.metmuseum.org/art/collection/search/284685) by Walker Evans in 1936\. Assuming Evans' copyright is still in effect, verbatim reproduction of the image would theoretically infringe. Yet in 1981 artist Sherrie Levine rephotographed the images as part of her [After Walker Evans](https://www.metmuseum.org/art/collection/search/267214) series. Subsequently, artist [Michael Mandiberg](https://www.mandiberg.com/) created [After Sherrie Levine](https://www.aftersherrielevine.com/), scanning Levine's rephotographing of Walker's originals as a comment on how we come to know information in this burgeoning digital age. Fair use? Infringing derivative? Again, LAION cannot provide clear answers.

There is no doubt that many images in LAION are properly under copyright. But to answer the question of exactly which images, and to what extent their use is infringing, turns out to be more complicated, especially when copyright information about the images is lacking, outdated, or mistaken. Other important copyright doctrines, such as fair use, also factor into the mix. Zooming in to investigate image-by-image helps untangle particular examples, but it also demonstrates the complexities and challenges of ascertaining concrete answers. The sea may look like a single body of water, but important differences exist among the different currents and depths.

[^1]: See _[Bridgeman Art Library v. Corel Corp.](https://en.wikipedia.org/wiki/Bridgeman_Art_Library_v._Corel_Corp.)_, 36 F. Supp. 2d 191 (S.D.N.Y. 1999). In that case, Corel sold a CD-ROM which contained digitized images of paintings by European masters. Bridgeman Art Library claimed Corel copied the images from its digital archive, and that notwithstanding the original works being part of the public domain, their digital copies were being infringed. The judge rejected Bridgeman’s theory, however, holding that digital scans which sought to reproduce underlying works with “absolute fidelity” weren’t creative enough to earn copyright protection. For a similar decision in Canada, see [CCH Canadian Ltd. v Law Society of Upper Canada [2004] 1 SCR 339](https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2125/index.do) (holding that the exercise of skill and judgment required to produce an original copyrighted work must not be so trivial that it could be characterized as a purely mechanical exercise, such as changing the font in a document.)
[^2]: For information supporting the conclusion of pre-1928 publication, see [https://en.wikipedia.org/wiki​/Giacomo_Puccini](https://en.wikipedia.org/wiki/Giacomo_Puccini) and [http://www.montyandstellamarks.com​/stella-marks-work-1910-1934](http://www.montyandstellamarks.com/stella-marks-work-1910-1934).
