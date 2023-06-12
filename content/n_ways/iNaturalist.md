---
title: "N Ways to See a Dataset: iNaturalist"
slug: n_ways/iNaturalist
draft: false
image-1:
  title: "Blob image 1."
  imagePath: "https://machinist.smokingheaps.net/api/datasets/9/files/81061301"
image-2:
  title: "Blob image 2."
  imagePath: "https://machinist.smokingheaps.net/api/datasets/9/files/81061129"
grid-1:
  title: "images of blobs"
  collection: 7
grid-2:
  title: "More images of blobs"
  collection: 8
---

[:grid-1]

If you’ve found a featureless blob and you’d like to identify it, your
first stop should be iNaturalist.

The living world is full of featureless blobs, and iNaturalist’s
computer vision model has been trained to recognize thousands of them.
If you’re on a beach you might find out that your blob could be a
stranded moon jelly, or the swim bladder of a porcupinefish. If your
blob is big and white and you’re standing in a farmer’s field,
iNaturalist may tell you’re looking at a giant puffball mushroom. If
you were in a forest outside of Frankfurt at the beginning of May,
your blob would be ID’ed as a patch of dog vomit slime mold:

[:image-1]

Blobs, particularly featureless ones, are a challenge for computer
vision systems, which really like features. Edges, corners, ridges -
these are all things that models use to distinguish images of birds
from images of fish; they’re what a system uses to learn what a face
is, or a letter T, or a convoy of armored trucks. Without these things
blobs can blend together for machines, and one can easily be mistaken
for another.

So we shouldn’t be too hard on iNat for making a mistake.

The Frankfurt blob is spray foam, the kind that might be used to fill
a crack underneath a drafty window. How it ended up in the crook of a
tree in a German forest or how long it’s been there is anyone’s guess.
The mistaken identification, though, only lasted on iNaturalist for a
day before it was corrected by a user named inczi89 who wrote: “Its
insulation foam used by builders. Its \[sic] not anything alive.
someone must have played with a can and sprayed the trees.” The
original poster agreed with the new identification and the species in
the photo was changed: from Dog Vomit Slime Mold (Fuligo septica) to
Human (Home sapiens).

This little fungus to foam story carries in it an important lesson:
that datasets are artifacts of the people that create them. In the
case of iNaturalist, the datasets it uses for machine learning (and
releases publicly) are constructed by its community of users - more
than 1.5 million people who have made at least one verified
observation on the platform. By giving us a brief look at the
practices and philosophies of the iNat community, the story helps us
to better understand the extent and quality of the dataset.

With the Frankfurt blob, we can see how these users act as both
creators and maintainers of data. Inczi89, who correctly IDed the foam
insulation, has 2,366 observations of his own. Because an
identification requires ⅔ consensus to be considered ‘research grade’
and included in the training sets, every image in the iNat dataset has
involved the attention of a minimum of two people: the person who took
the photo and at least one other user who’s confirmed the ID.

The specifics of this example, that the Fuligo ended up as Homo
sapiens, reveal something important about iNat’s philosophy. Search
for ‘human’ on the website and you’ll find thousands of selfies –
people tend to test the automatic identification on the first animal
they find handy. Humans are very much a part of iNaturalist’s idea of
nature. You’ll also find photos of drones and dog poop bags and old
tires. Graffiti and gum wrappers and bike racks. iNaturalist considers
these things as evidence of a species, in the way that a small skull
might tell of a rabbit or a pile of small round droppings a deer.

[:grid-2]

**Images of ‘human’ labeled images**

Machine learning datasets are designed to carry world views: to pass
to the systems that are trained upon them their own particular ways of
seeing the world. In the case of iNaturalist, its human-as-wildlife
and cigarette-butt-as-human ethic carries into its community and its
tools; something you can experience firsthand the next time you
stumble upon a blob (featureless or not).
