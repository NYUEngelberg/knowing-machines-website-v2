---
title: "ImageNet"
draft: false
index: 3
contentType: "essay"
coverImg: "/img/9_ways/imagenet_black.png"
coverImgAlt: "/img/9_ways_to_see_a_dataset.png"
preposition: "by"
authors: "Sasha Luccioni"
excerpt: "ImageNet is one of the first datasets AI researchers are exposed to when learning and experimenting with computer vision approaches. Since it was first released in 2009, it has been used to train and evaluate nearly every AI model in the object recognition task, and improvement upon state-of-the-art performance on the dataset can translate into getting accepted into top AI conferences and appearing on leaderboards."
---

ImageNet is one of the first datasets AI researchers are exposed to when
learning and experimenting with computer vision approaches. Since it was
released in 2009, it has been used to train and evaluate nearly every AI
model in the object recognition task, and improving the state-of-the-art
performance on the dataset can garner acceptance into top AI conferences
and leaderboards. The process for creating ImageNet – large-scale web
scraping followed by manual validation by Mechanical Turk workers – has
become the de facto standard for creating AI datasets.

But despite its iconicity and ubiquity, no single “ImageNet” dataset
exists. Instead, there are 9 versions of the dataset, created both by
the Stanford team behind the original dataset and by the AI community at
large, messily slicing and dicing at least 9 distinct versions of
ImageNet. Some of these are designed for specific tasks, such as the
ImageNet ILSVRC subset of a thousand classes, created to evaluate object
detection and image classification. Others, such as the recent “Fall
2021” version of ImageNet, are the result of filtering and moderation
aiming to improve the perceived fairness of the original dataset. These
versions, and at least 7 others, are being used to train and test
different AI approaches, as proxies for general (visual) understandings
of images of the world.

But as Crawford and Paglen showed years ago, and researchers such as
Prabhu and Birhane confirmed more recently, ImageNet contains many
baked-in biases in both its categories as well as the images that
populate them. Close inspection of the dataset and its categories often
shocks people: surely misogynistic categories such as “ball-buster” and
racist categories such as “redneck” can’t possibly be used for training
object recognition systems? But these categories, and many other harmful
ones, still persist in the versions of ImageNet being used to train
large-scale AI models today. Even if these problematic categories are
not used for downstream tasks (i.e. if the models are adapted on
task-specific datasets that replace the initial categories), the biases
that are encoded by AI models trained on images representing misogyny
and racism percolate into downstream model functionalities as well, for
instance when models are used in applications like predictive policing
and have learned to associate people from a given identity group with
concepts like criminality or violence.

Carousel of sample images with problematic labels

Tools like SeeSet enable us to explore datasets like ImageNet, to poke
them and probe them, to investigate them in ways that are otherwise
impossible. In recent years, we’ve seen subtle shifts happen the machine
learning community, questioning the “train first, ask questions later”
approach advocated by the creators of datasets like ImageNet (as well as
its contemporary successors such as LAION) and promoting more in-depth
data exploration and a more “data-centric” approach to training and
evaluating AI models. This is an approach I have wholly adopted in my
own work, both within the Knowing Machines project and via other
research that I am involved in, which aims both to better understand AI
datasets and the values that they encode, and create tools to empower
members of the community to explore these datasets themselves.
