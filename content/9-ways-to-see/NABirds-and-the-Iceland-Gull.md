---
title: "9 Ways To See A Dataset: Consider The Iceland Gull"
draft: false
index: 4
contentType: essay
coverImg: "/img/9_ways/gull_black.png"
coverImgAlt: "A dithered image of the Iceland Gull, cropped so only the middle part of the bird is visible"
preposition: "by"
authors: "Jer Thorp"
excerpt: "What makes a bird hard to see? It may be a small bird, or a well camouflaged one. It may be rare, or it could live in a place that’s hard to get to. Or, it might be hiding in plain sight."
---

What makes a bird hard to see?

It may be a small bird, or a well camouflaged one. It may be rare, or it could live in a place that's hard to get to. Or, it might be hiding in plain sight.

![Image of Iceland gull from iNaturalist](https://machinist.smokingheaps.net/api/datasets/9/files/81059465 "Image of Iceland gull from iNaturalist
")

Consider the Iceland Gull.

If you've never seen one, picture whichever seagull it is in your part of the world that steals lunches on sunny afternoons, and then turn up the brightness. Lighten the gray on the wings and erase any signs of inky black that might be on your picnic-raiding gull's wing tips. You'll be left with a handsome bird (all gulls are handsome) that is the light gray of a dry sidewalk and the perfect white of copier paper.

If you can say with confidence that you've seen an Iceland gull, I can say with confidence that you're a birder. Iceland gulls live most of their lives in the Arctic, feeding in icy oceans and nesting on narrow cliff edges. Even in the winter, the overwhelming majority of them stay far up North. Only a small number of Iceland Gulls venture south every year to Northern Europe and the East and West coasts of North America, where they tend to settle in with flocks of other large seagulls.

Picking out an Iceland gull from a flock of ring-billed gulls and herring gulls in January is a kind of right of passage for birders in North America. I've spent many long evenings in a darkening Brooklyn Bridge Park, poring over the gulls that come by the thousands to settle onto the pilings and into the marina. I've only found an Iceland Gull on my own once. It was in 2021, just a few days before the New Year. I'd been looking at gulls for an hour, scanning the pilings as each new wave of birds came in to rest for the night, looking for one bird that was whiter than the rest. I was beginning to wonder if the Iceland Gull was an elaborate joke, dreamt up to trick new birders. Just as I was about to give up, I found one. It was perched just twenty feet away, all gray and white and perfect.

<Image of my Iceland Gull\>

While not looking for gulls, I spent many daytime hours last winter scanning through NABirds, a data set assembled to teach machines how to identify birds. NABirds contains 48,000 photographs of the most common 400 species in North America. There are at least 100 images of each bird; some are crisp and complete, others are blurred and partial. Each one is hand-labeled with a bounding box for the bird and a precise label for every visible body part.Images from NABirds

NABirds was designed to be used for fine-grained visual categorization experiments. It's meant to train and to benchmark computer vision systems designed to recognize broad classes of things (a bicycle) as well as specific subclasses (a mountain bike, a tandem bike, a penny-farthing). Birds have been bound to this kind of machine learning right from the start, because they offer a lot of subclasses that are well-defined and often very fine-grained.

<graphic: connection of images from NABirds from one species\>

Look through photos from single species, and you'll appreciate all the small variations that can occur in a bird even with the same set of genes. The Herring Gull (a close relative of the Iceland) has a full seven distinct (and handsome) plumage forms: juvenile, first winter, first summer, second winter, third winter, adult non-breeding and adult breeding. To split those fine grains even further, the Herring Gull has five subspecies which themselves can have subtly different developmental plumage types. The Herring Gull is one of these things that makes NABirds a challenging data set for computer vision systems: eight years after its release in 2015, best-in class ML systems can correctly label 93% of the images in the set, about 13 out of every 14 photos. Carousel of HerringGull images

What makes a bird hard to see for a machine?

Small, well-camouflaged, rare, hard to get to -- all of these same things can trickle down into the quality and quantity of data. Rare birds tend to have less available photos for systems to train on, and those that live in out of the way places are likewise less documented. Machines also have a unique version of birds that are hiding in plain sight: the ones that people don't choose to include in their datasets. There are nearly 800 species of birds in mainland North America, counting breeding species and regular visitors. When NABirds was assembled only the 400 most common of those birds were included. This number includes the 12 most common species of gull but not the 13th: The Iceland Gull.
