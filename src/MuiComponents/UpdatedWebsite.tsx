import React, { useState } from "react";
import lion from "./lion.jpg";
import dog from "./dog.jpg";
import tiger from "./tiger.jpg";
import cheetah from "./cheetah.jpg";
import deer from "./deer.jpeg";
import fox from "./fox.jpg";
import wolf from "./wolf.jpg";
import polarBear from "./polarBear.jpg";
import eagle from "./eagle.jpg";
import elephant from "./elephant.jpg";
import "./form.css";
import Test from "./Test1";

import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

type DataItem = {
  name: string;
  description: string;
  picture: string;
  more: string;
  click: string;
};

type DataItem2 = {
  name: string;
};

const data: DataItem[] = [
  {
    name: "Lion",
    description:
      "The lion is a large cat of the genus Panthera, native to Africa and India. It has a muscular, broad-chested body; a short, rounded head; round ears; and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.",
    picture: lion,
    more: "The lion inhabits grasslands, savannahs, and shrublands. It is usually more diurnal than other wild cats, but when persecuted, it adapts to being active at night and at twilight. During the Neolithic period, the lion ranged throughout Africa and Eurasia, from Southeast Europe to India, but it has been reduced to fragmented populations in sub-Saharan Africa and one population in western India. It has been listed as Vulnerable on the IUCN Red List since 1996 because populations in African countries have declined by about 43% since the early 1990s. Lion populations are untenable outside designated protected areas. Although the cause of the decline is not fully understood, habitat loss and conflicts with humans are the greatest causes for concern.One of the most widely recognised animal symbols in human culture, the lion has been extensively depicted in sculptures and paintings, on national flags, and in literature and films. Lions have been kept in menageries since the time of the Roman Empire and have been a key species sought for exhibition in zoological gardens across the world since the late 18th century. Cultural depictions of lions were prominent in Ancient Egypt, and depictions have occurred in virtually all ancient and medieval cultures in the lion's historic and current range.",
    click: "More",
  },

  {
    name: "Dog",
    description:
      "The dog is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from the extinct Pleistocene wolf; the gray wolf is the dog's closest living relative. The dog was the first species to be domesticated by humans.",
    picture: dog,
    more: "",
    click: "More",
  },

  {
    name: "Tiger",
    description:
      "The tiger is the largest living cat species and a member of the genus Panthera native to Asia. It has a powerful, muscular body with a large head and paws, a long tail, and orange fur with black, mostly vertical stripes.",
    picture: tiger,
    more: "",
    click: "More",
  },

  {
    name: "Cheetah",
    description:
      "The cheetah is a large cat and the fastest land animal. It has a tawny to creamy white or pale buff fur that is marked with evenly spaced, solid black spots. The head is small and rounded, with a short snout and black tear-like facial streaks.",
    picture: cheetah,
    more: "",
    click: "More",
  },

  {
    name: "Deer",
    description:
      "A deer or true deer is a hoofed ruminant ungulate of the family Cervidae. It is divided into subfamilies Cervinae and Capreolinae. Male deer of almost all species, as well as female reindeer, grow and shed new antlers each year.",
    picture: deer,
    more: "",
    click: "More",
  },

  {
    name: "Fox",
    description:
      "Foxes are small-to-medium-sized omnivorous mammals belonging to several genera of the family Canidae. They have a flattened skull; upright, triangular ears; a pointed, slightly upturned snout; and a long, bushy tail. Twelve species belong to the monophyletic 'true fox' group of genus Vulpes.",
    picture: fox,
    more: "",
    click: "More",
  },

  {
    name: "Wolf",
    description:
      "The wolf, also known as the gray wolf or grey wolf, is a large canine native to Eurasia and North America. More than thirty subspecies of Canis lupus have been recognized, including the dog and dingo, though gray wolves, as popularly understood, only comprise naturally-occurring wild subspecies.",
    picture: wolf,
    more: "",
    click: "More",
  },

  {
    name: "Polar Bear",
    description:
      "The polar bear is a large bear native to the Arctic and nearby areas. It is closely related to the brown bear, and the two species can interbreed. The polar bear is the largest extant species of bear and land carnivore, with adult males weighing 300–800 kg. ",
    picture: polarBear,
    more: "",
    click: "More",
  },

  {
    name: "Eagle",
    description:
      "Eagle is the common name for the golden eagle, bald eagle, and other birds of prey in the family Accipitridae. Eagles belong to several groups of genera, some of which are closely related. True eagles comprise the genus Aquila. Most of the 68 species of eagles are from Eurasia and Africa.",
    picture: eagle,
    more: "",
    click: "More",
  },

  {
    name: "Elephant",
    description:
      "Elephants are the largest living land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are the only surviving members of the family Elephantidae and the order Proboscidea; extinct relatives include mammoths and mastodons.",
    picture: elephant,
    more: "",
    click: "More",
  },
];

const data2: DataItem2[] = [
  { name: "Animal" },
  { name: "Birds" },
  { name: "Insects" },
  { name: "Fish" },
];

function UpdatedWebsite() {
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);

  const navigate = useNavigate();

  return (
    <div>
      <Test></Test>
      <div style={{ height: "100%" }}>
        <div
          style={{
            fontSize: "30px",
            color: "black",
            display: "flex",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          Animals - Overview
        </div>
        <div className="right">
          <a style={{ padding: "10px" }} href="#section-animals">
            Animals
          </a>
          <a style={{ padding: "10px" }} href="#section-birds">
            Birds
          </a>
          <a style={{ padding: "10px" }} href="#section-insects">
            Insects
          </a>
          <a style={{ padding: "10px" }} href="#section-fish">
            Fish
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "450px 1fr",
            height: "100%",
            backgroundColor: "rgb(245,245,245)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateRows: "repeat(11, 30px)",
              padding: "40px",
              gap: "20px",
              alignItems: "center",
              color: "black",
              borderRight: "1px solid",
            }}
          >
            {data.map((item) => (
              <div
                style={{ cursor: "pointer", fontSize: "20px" }}
                onClick={() => setSelectedItem(item)}
              >
                {item.name}
              </div>
            ))}
          </div>

          {selectedItem ? (
            <div style={{ padding: "60px", color: "black" }}>
              <h2>{selectedItem.name}</h2>
              <p>{selectedItem.description}</p>
              <div style={{ color: "black" }}>
                <img className="test" src={selectedItem.picture} />

                <div style={{ color: "black" }}></div>
              </div>
            </div>
          ) : (
            <div style={{ padding: "40px", color: "black", fontSize: 18 }}>
              <h2 id="section-animals">Animals</h2>
              <p>
                Animals are multicellular, eukaryotic organisms in the
                biological kingdom Animalia. With few exceptions, animals
                consume organic material, breathe oxygen, have myocytes and are
                able to move, can reproduce sexually, and grow from a hollow
                sphere of cells, the blastula, during embryonic development.
              </p>

              <p>
                Over 1.5 million living animal species have been described, of
                which around 1.05 million are insects, over 85,000 are molluscs,
                and around 65,000 are vertebrates. It has been estimated there
                are as many as 7.77 million animal species on Earth. Animal body
                lengths range from 8.5 μm (0.00033 in) to 33.6 m (110 ft). They
                have complex ecologies and interactions with each other and
                their environments, forming intricate food webs. The scientific
                study of animals is known as zoology, and the study of animal
                behaviors is known as ethology. Most living animal species
                belong to the infrakingdom Bilateria, a highly proliferative
                clade whose members have a bilaterally symmetric body plan. The
                vast majority belong to two large superphyla: the protostomes,
                which includes organisms such as the arthropods, molluscs,
                flatworms, annelids and nematodes; and the deuterostomes, which
                include the echinoderms, hemichordates and chordates, the latter
                of which contains the vertebrates. The simple Xenacoelomorpha
                have an uncertain position within Bilateria.
              </p>
              <a href="#">Jump to Top</a>
              <h2 id="section-birds">Birds</h2>
              <p>
                Birds are a group of warm-blooded vertebrates constituting the
                class Aves (/ˈeɪviːz/), characterised by feathers, toothless
                beaked jaws, the laying of hard-shelled eggs, a high metabolic
                rate, a four-chambered heart, and a strong yet lightweight
                skeleton. Birds live worldwide and range in size from the 5.5 cm
                (2.2 in) bee hummingbird to the 2.8 m (9 ft 2 in) common
                ostrich. There are over 11,000 living species, more than half of
                which are passerine, or "perching" birds. Birds have wings whose
                development varies according to species; the only known groups
                without wings are the extinct moa and elephant birds. Wings,
                which are modified forelimbs, gave birds the ability to fly,
                although further evolution has led to the loss of flight in some
                birds, including ratites, penguins, and diverse endemic island
                species. The digestive and respiratory systems of birds are also
                uniquely adapted for flight. Some bird species of aquatic
                environments, particularly seabirds and some waterbirds, have
                further evolved for swimming. The study of birds is called
                ornithology. Birds are feathered theropod dinosaurs and
                constitute the only known living dinosaurs. Likewise, birds are
                considered reptiles in the modern cladistic sense of the term,
                and their closest living relatives are the crocodilians. Birds
                are descendants of the primitive avialans (whose members include
                Archaeopteryx) which first appeared during the Late Jurassic.
                According to recent estimates, modern birds (Neornithes) evolved
                in the Late Cretaceous and diversified dramatically around the
                time of the Cretaceous–Paleogene extinction event 66 million
                years ago, which killed off the pterosaurs and all non-avian
                dinosaurs.[7] Many social species pass on knowledge across
                generations, which is considered a form of culture. Birds are
                social, communicating with visual signals, calls, and songs, and
                participating in such behaviours as cooperative breeding and
                hunting, flocking, and mobbing of predators. The vast majority
                of bird species are socially (but not necessarily sexually)
                monogamous, usually for one breeding season at a time, sometimes
                for years, and rarely for life. Other species have breeding
                systems that are polygynous (one male with many females) or,
                rarely, polyandrous (one female with many males). Birds produce
                offspring by laying eggs which are fertilised through sexual
                reproduction. They are usually laid in a nest and incubated by
                the parents. Most birds have an extended period of parental care
                after hatching.
              </p>
              <a href="#">Jump to Top</a>
              <h2 id="section-insects">Insects</h2>

              <p>
                Insects (from Latin insectum) are hexapod invertebrates of the
                class Insecta. They are the largest group within the arthropod
                phylum. Insects have a chitinous exoskeleton, a three-part body
                (head, thorax and abdomen), three pairs of jointed legs,
                compound eyes, and a pair of antennae. Insects are the most
                diverse group of animals, with more than a million described
                species; they represent more than half of all animal species.
                The insect nervous system consists of a brain and a ventral
                nerve cord. Most insects reproduce by laying eggs. Insects
                breathe air through a system of paired openings along their
                sides, connected to small tubes that take air directly to the
                tissues. The blood therefore does not carry oxygen; it is only
                partly contained in vessels, and some circulates in an open
                hemocoel. Insect vision is mainly through their compound eyes,
                with additional small ocelli. Many insects can hear, using
                tympanal organs, which may be on the legs or other parts of the
                body. Their sense of smell is via receptors, usually on the
                antennae and the mouthparts. Nearly all insects hatch from eggs.
                Insect growth is constrained by the inelastic exoskeleton, so
                development involves a series of molts. The immature stages
                often differ from the adults in structure, habit and habitat.
                Groups that undergo four-stage metamorphosis often have a nearly
                immobile pupa. Insects that undergo three-stage metamorphosis
                lack a pupa, developing through a series of increasingly
                adult-like nymphal stages. The higher level relationship of the
                insects is unclear. Fossilized insects of enormous size have
                been found from the Paleozoic Era, including giant
                dragonfly-like insects with wingspans of 55 to 70 cm (22 to 28
                in). The most diverse insect groups appear to have coevolved
                with flowering plants. Adult insects typically move about by
                walking and flying; some can swim. Insects are the only
                invertebrates that can achieve sustained powered flight; insect
                flight evolved just once. Many insects are at least partly
                aquatic, and have larvae with gills; in some species, the adults
                too are aquatic. Some species, such as water striders, can walk
                on the surface of water. Insects are mostly solitary, but some,
                such as bees, ants and termites, are social and live in large,
                well-organized colonies. Others, such as earwigs, provide
                maternal care, guarding their eggs and young. Insects can
                communicate with each other in a variety of ways. Male moths can
                sense the pheromones of female moths over great distances. Other
                species communicate with sounds: crickets stridulate, or rub
                their wings together, to attract a mate and repel other males.
                Lampyrid beetles communicate with light.
              </p>
              <a href="#">Jump to Top</a>

              <h2 id="section-fish">Fish</h2>

              <p>
                A fish (pl.: fish or fishes) is an aquatic, anamniotic,
                gill-bearing vertebrate animal with swimming fins and a hard
                skull, but lacking limbs with digits. Fish can be grouped into
                the more basal jawless fish and the more common jawed fish, the
                latter including all living cartilaginous and bony fish, as well
                as the extinct placoderms and acanthodians. Most fish are
                cold-blooded, their body temperature varying with the
                surrounding water, though some large active swimmers like white
                shark and tuna can hold a higher core temperature. Many fish can
                communicate acoustically with each other, such as during
                courtship displays. The earliest fish appeared during the
                Cambrian as small filter feeders; they continued to evolve
                through the Paleozoic, diversifying into many forms. The
                earliest fish with dedicated respiratory gills and paired fins,
                the ostracoderms, had heavy bony plates that served as
                protective exoskeletons against invertebrate predators. The
                first fish with jaws, the placoderms, appeared in the Silurian
                and greatly diversified during the Devonian, the "Age of
                Fishes". Bony fish, distinguished by the presence of swim
                bladders and later ossified endoskeletons, emerged as the
                dominant group of fish after the end-Devonian extinction wiped
                out the apex placoderms. Bony fish are further divided into the
                lobe-finned and ray-finned fish. About 96% of all living fish
                species today are teleosts, a crown group of ray-finned fish
                that can protrude their jaws. The tetrapods, a mostly
                terrestrial clade of vertebrates that have dominated the top
                trophic levels in both aquatic and terrestrial ecosystems since
                the Late Paleozoic, evolved from lobe-finned fish during the
                Carboniferous, developing air-breathing lungs homologous to swim
                bladders. Despite the cladistic lineage, tetrapods are usually
                not considered to be fish, making "fish" a paraphyletic group.
                Fish have been an important natural resource for humans since
                prehistoric times, especially as food. Commercial and
                subsistence fishers harvest fish in wild fisheries or farm them
                in ponds or in breeding cages in the ocean. Fish are caught for
                recreation, or raised by fishkeepers as ornaments for private
                and public exhibition in aquaria and garden ponds. Fish have had
                a role in human culture through the ages, serving as deities,
                religious symbols, and as the subjects of art, books and movies.
              </p>
              <a href="#">Jump to Top</a>
              <Button
                size="medium"
                variant="contained"
                onClick={() => navigate("/new")}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "5px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  alignItems: "center",
                  backgroundColor: "#103566",
                }}
              >
                Back
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UpdatedWebsite;
