import CollectionEssay from "@/components/collection-essay/CollectionEssay";

export default function InvestigatingDatasetsEssayPage() {
  const essay = {
    "index": 4,
    "contentType": "essay",
    "title": "Investigating Datasets", 
    "img": "/img/n_ways_to_see_a_dataset.png",
    "imgAlt": "/img/n_ways_to_see_a_dataset.png",
    "preposition": "by",
    "authors": "Christo Buschek",
    "excerpt": "While research and investigations share many similarities, there are also key differences that set them apart. An investigation aims to scrutinize the investigative subject, to discover something hidden or secret, and then tell a story about it.",
    "href": "/n-ways-to-see/investigating-datasets"
  };
  return (
    <CollectionEssay essay={essay}>
      <p>
        While research and investigations share many similarities, there are
        also key differences that set them apart. An investigation aims to
        scrutinize the investigative subject, to discover something hidden or
        secret, and then tell a story about it. The SeeSet tool was developed to
        allow scrutiny and introspection
      </p>
      <br />
      <p>
        When we investigate datasets, we are not doing this within the context
        or field in which the dataset was created, but instead, we engage with
        the dataset on our turf. Datasets are created with certain assumptions,
        values, and constraints in mind. More often than not, those are implicit
        rather than explicit. Investigation recognizes that nothing exists in a
        vacuum but always is the product of power relations and interests.
        Taking an adversarial standpoint will unearth the explicit qualities of
        datasets and the implicit ones.
      </p>
      <br />
      <p>
        From the beginning, it is necessary to acknowledge and continually
        revisit the following concerns:
      </p>
      <ul className="list-disc pl-4">
        <li>What questions do we want to ask?</li>
        <li>How can we answer our questions?</li>
        <li>
          What methodologies and tools do we need to support the process and
          answer our questions?
        </li>
      </ul>
      <br />
      <p>
        Initially, all data is just information. How we engage with this
        information will shape our results. The same information, examined with
        different questions in mind, can yield other answers. To transform
        information into reliable data that can address our questions, we must
        carefully review and authenticate this information through a
        verification process.
      </p>
      <br />
      <p>
        Data verification processes start as a creative and iterative endeavor.
        It’s the time to learn and “get a feel” for what we are dealing with.
        Rarely can we precisely predict how this process will unfold from the
        outset. We adjust the verification process by using iterative feedback
        loops as we interact with the data and narrow down answers to our
        questions.
      </p>
      <br />
      <p>
        At the beginning of an investigation it is tempting to immediately jump
        to the concerns of which tools to use, almost as if they would solve all
        our problems and not create new ones. This is a mistake. While tools can
        be the start and output of an investigation, they are always a detour to
        something else – insight and facts. We have to model and pick our tools
        following our questions and process, and not the other way around. We
        place much prominence on technology and technological artifacts and
        often forget that they are means to an end.
      </p>
      <br />
      <p>
        The SeeSet tool started its life to solve challenges we faced – how to
        introspect and explore datasets and make them comparable. Datasets are
        meant for machine consumption, not human examination. We used SeeSet to
        engage with ten different datasets and 80 Million data points.
      </p>
      <br />
      <p>
        Not every engagement took place in SeeSet – one tool rarely satisfies
        all required functionality and interface needs. From the beginning,
        SeeSet focused on building a foundational information architecture to
        store and query data, allowing us to ask different questions based on
        search. While the user interface of SeeSet was aimed at exploring and
        browsing data, we also adopted a workflow where we used spreadsheets as
        a second interface to data. We always considered SeeSet a team player by
        fostering to export data that can be utilized in other tools.
      </p>
      <br />
      <p>
        Investigating datasets is a method as well as a critical practice. If
        anything, it is an antidote to suspending one’s disbelief, which has
        been the common reaction recently to the ubiquity of generative models.
      </p>
    </CollectionEssay>
  );
}
