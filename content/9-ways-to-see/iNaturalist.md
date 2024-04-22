---
title: "9 Ways To See A Dataset: Some Blobs Are Human, Too"
slug: "iNaturalist"
draft: false
index: 4
contentType: essay
coverImg: "/img/9_ways/blob_black.png"
coverImgAlt: "A dithered image of a spray foam blob in the crook of a tree"
preposition: "by"
authors: "Jer Thorp"
excerpt: "If you’ve found a featureless blob and you’d like to identify it, your first stop should be iNaturalist."
image-1:
  caption: "Blob image 1."
  imagePath: "/n-ways-to-see-a-dataset/collections/7/82060419"
grid-1:
  caption: "Images of blob-like organisms from the iNat2021 training set"
  collection: 7
grid-2:
  caption: "Images of ‘human’ labeled images"
  collection: 2
---

[:grid-1]

If you’ve found a featureless blob and you’d like to identify it, your first stop should be iNaturalist.

The living world is full of featureless blobs, and iNaturalist’s computer vision model has been trained to recognize thousands of them. If you’re on a beach you might find out that your blob could be a stranded moon jelly, or the swim bladder of a porcupinefish. If your blob is big and white and you’re standing in a farmer’s field, iNaturalist may tell you’re looking at a giant puffball mushroom. If you were in a forest outside of Frankfurt at the beginning of May, your blob would be ID’ed as a patch of dog vomit slime mold:

![An unidentified blob sits at the point where a branch connects to the tree trunk.](https://inaturalist-open-data.s3.amazonaws.com/photos/274368677/original.jpeg "An unidentified blob sits at the point where a branch connects to the tree trunk.")

*The Frankfurt Blob (image by Bernard Hiller).*

Blobs, particularly featureless ones, are a challenge for computer vision systems, which really like features. Edges, corners, ridges - these are all things that models use to distinguish images of birds from images of fish; they’re what a system uses to learn what a face is, or a letter T, or a convoy of armored trucks. Without these things blobs can blend together for machines, and one can easily be mistaken for another. 

So we shouldn’t be too hard on iNat for making a mistake.

The Frankfurt blob is spray foam, the kind that might be used to fill a crack underneath a drafty window. How it ended up in the crook of a tree in a German forest or how long it’s been there is anyone’s guess. The mistaken identification, though, only lasted on iNaturalist for a day before it [was corrected by a user named inczi89](https://www.inaturalist.org/observations/158786749) who wrote: “Its insulation foam used by builders. Its \[sic] not anything alive. someone must have played with a can and sprayed the trees.” The original poster agreed with the new identification and the species in the photo was changed: from Dog Vomit Slime Mold (*Fuligo septica*) to Human (*Home sapiens*).

This little fungus to foam story carries in it an important lesson: that datasets are artifacts of the people that create them. In the case of iNaturalist, the datasets it uses for machine learning (and releases publicly) are constructed by its community of users - more than 1.5 million people who have made at least one verified observation on the platform. By giving us a brief look at the practices and philosophies of the iNat community, the story helps us to better understand the extent and quality of the dataset. 

With the Frankfurt blob, we can see how these users act as both creators and maintainers of data. Inczi89, who correctly IDed the foam insulation, [has 2,366 observations of his own](https://www.inaturalist.org/observations?place_id=any&reviewed=true&user_id=inczi89). Because an identification requires ⅔ consensus to be considered ‘research grade’ and included in the training sets, every image in the iNat dataset has involved the attention of a minimum of two people: the person who took the photo and at least one other user who’s confirmed the ID.

The specifics of this example, that the *Fuligo* ended up as *Homo sapiens*, reveal something important about iNat’s philosophy. Search for ‘human’ on the website and you’ll find thousands of selfies – people tend to test the automatic identification on the first animal they find handy. Humans are very much a part of iNaturalist’s idea of nature. You’ll also find photos of [drones](https://www.inaturalist.org/observations/159020304) and [dog poop bags](https://www.inaturalist.org/observations/159058908) and [old tires](https://www.inaturalist.org/observations/155619810). Graffiti and gum wrappers and bike racks. iNaturalist considers these things as evidence of a species, in the way that a small skull might tell of a rabbit or a pile of small round droppings a deer. 

Machine learning datasets are designed to carry world views: to pass to the systems that are trained upon them their own particular ways of seeing the world. In the case of iNaturalist, its human-as-wildlife and cigarette-butt-as-human ethic carries into its community and its tools; something you can experience firsthand the next time you stumble upon a blob (featureless or not). 

