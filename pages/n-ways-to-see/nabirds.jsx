import CollectionEssay from "@/components/collection-essay/CollectionEssay";

export default function NABirdsEssayPage() {
  const essay = {
    index: 2,
    contentType: "essay",
    title: "NABirds",
    img: "/img/n_ways_to_see_a_dataset.png",
    imgAlt: "/img/n_ways_to_see_a_dataset.png",
    preposition: "by",
    authors: "Hamsini Sridharan",
    excerpt:
      "How does a machine learning algorithm “recognize” a bird? Generic computer vision datasets, composed of images scraped unceremoniously from sites like Flickr, are most useful for general object recognition, training algorithms to distinguish a raven from a writing desk (or, at any rate, “bird” from “furniture”). But what species of raven is it? Answering that question requires access to images broken into much narrower, more precise categories.",
    href: "/n-ways-to-see-a-dataset/nabirds",
  };
  return (
    <CollectionEssay essay={essay}>
      <p>
        How does a machine learning algorithm “recognize” a bird? Generic
        computer vision datasets, composed of images scraped in bulk from sites
        like Flickr, are most useful for general object recognition, training
        algorithms to distinguish a raven from a writing desk (or, at any rate,
        “bird” from “furniture”). But what species of raven is it? An algorithm
        to assist with species identification would not only satisfy curiosity
        about the creatures in our environment, but could also help researchers
        monitor and conserve those species. Developing such algorithms could
        also help computer vision research move beyond broad object recognition
        to tackling fine-grained classification tasks. However, this requires
        access to images classified more precisely, broken into much narrower
        categories. This is the objective of the NABirds dataset, a collection
        of more than 48,000 photographs of 400 species of birds common in North
        America. Created through a collaboration of computer vision researchers
        with the Cornell Lab of Ornithology, NABirds consists of images
        collected from and annotated by the “birding community,” including
        professional ornithologists and citizen scientists — birdwatchers with
        more expertise than, say, the average Mechanical Turk worker tasked with
        labeling images in datasets (Van Horn et al., 2015).
      </p>
      <br />

      <p>Image of bird w/ labeled parts</p>
      <br />
      <p>
        Browsing the dataset, it is clear that NABirds is highly curated,
        composed of photographs of birds in naturalistic settings, carefully
        labeled by species, as well as, in some cases, age, sex, and morph
        (variations in plumage). The body of the bird is broken down for
        algorithmic recognition via annotations of its various visible “parts”
        (eye, crown, belly, left and right wings, tail, etc.). Annotations are
        limited by what is visible and knowable to the experts and citizen
        scientists tasked with preparing these images. But to me, the seeming
        orderliness of the dataset is belied by what is not visible in these
        images, and by the instability of the categories we use to process them
        into data.
      </p>
      <br />
      <p>From birds to data</p>
      <br />

      <p>Example of a particularly ‘flat’ image</p>
      <br />
      <p>
        I’m struck by the flatness of these images. For computational systems to
        “see” birds, the birds must be transmuted into data, a process
        entangling numerous creatures and technologies. Each image suggests many
        invisible stories: of the bird itself, in its environs and community; of
        the photographer, an enthusiast of both birds and cameras; of the
        platform used to submit, collect, and store the images; of the
        ornithologists who selected images and supervised their annotation; of
        the citizen scientists labeling species and annotating bird parts using
        a digital interface; and of the computer scientists building tools to
        aggregate these images and labels into a dataset. I can only speculate
        about these stories from images taken out of context: Who is this bird?
        Where was it encountered? What is its life like? Is it even still alive
        “out there” — or simply memorialized forever in the dataset? Who saw
        that bird and stopped to take a photo? Were they aware of each other,
        bird and photographer? When annotators came to an image, was it clear
        what kind of bird they had in hand, or were there moments of confusion
        and contestation? There are rich histories underlying such speculation,
        including the collection of bird (and other) specimens by colonial
        natural historians that led to the development of biological
        classification schemas, as well as the earliest intersections of amateur
        birding and technoscientific data that transformed birds’ life histories
        into aggregates for study (Benson, 2017). Browsing NABirds suggests the
        need for closer study of the processes by which beings-in-the-world
        become digital data, decontextualized, aggregated, and repurposed.
      </p>
      <br />
      <p>Naturalizing classifications</p>
      <br />
      <p>
        Looking at NABirds also points to the sometimes futile nature of
        classification. Its tidiness projects order onto the unruliness of
        birds, stabilizing categories such as species, age, sex, and geographic
        range that in life are constantly evolving. Beneath what is visible — or
        not — in these images lies questions about the certitude of
        classificatory labels themselves: what is considered a species in the
        first place is a matter of disagreement among scientists, and the
        boundaries of many species are shifting or disputed (Zimmer, 2008). Even
        seemingly uncontroversial assumptions of binary sex in birds run aground
        in practice, as can be seen in the presence, absence, and overlap of
        certain dataset labels: only 1,163 images are labeled as “female,” and
        10,131 as “male,” including Shakespearean moments where the annotators
        seemed uncertain whether a bird was a female or an immature male and
        included both labels. It is clearly challenging to identify a bird’s sex
        on sight, especially when age and sex are easily confused.
      </p>
      <br />

      <p>
        The biocultural assumptions underlying categories such as sex are
        destabilized by the behavior of birds themselves and by shifts in
        scientific evidence and understanding. Take, for instance, the
        white-throated sparrow, a common sight on the East Coast of the United
        States. The NABirds dataset contains 202 instances of this bird, with a
        subclassification as either “white-striped” or “tan-striped/immature,”
        referring to the shading of the stripes on its crown. Annotators equated
        color to age, relying on a traditional scientific understanding of the
        species. However, there is now evidence suggesting that these coloring
        differences signify sex, not age. Tan-striped white-throated sparrows do
        not change their stripes over time. Moreover, white-striped females mate
        only with tan-striped males, leaving tan-striped females to mate with
        white-striped males. Genetic analysis indicates that this is not merely
        sexual preference, but rather due to a chromosomal split equivalent to
        that between the Z and W chromosomes that typically differentiate binary
        sex in birds (Arnold, 2016). A species with four sexes, not two.
      </p>
      <br />

      <p>
        Probing the dataset’s orderliness challenges us to question the
        stability of the very categories — such as sexual binarism — that
        machine learning algorithms trained on such data naturalize.
        Misrecognition happens in the construction of our categories as much as
        at the level of individual images. Not only can a given bird be
        misclassified (by species, by age, by sex), but the very taxonomies that
        support classification prove to be imperfect fits for describing lively
        creatures, in ways that shape how we — aided by algorithms — come to
        know and manage them. Such misrecognition is fundamentally shaped by
        culture and power: we “see” (assume) binary sex, even when it is
        unsupported by reality, because that is what we are normatively
        conditioned to “see” (enforce and algorithmically reinforce). The stakes
        of such categorical misrecognition are real for birds — and, as research
        by scholars such as Scheurman et al. (2020) shows, even more so for
        humans.
      </p>
      <br />
    </CollectionEssay>
  );
}
