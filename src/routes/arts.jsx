import "./art.css";
import { useState } from "react";

const artsData = [
  {
    id: 1,
    title: "the way of nature",
    image: "/ART/covers/way.png",
    description:
      "True explorers of the universe gonna need this short writting that continues with deeper meaning about life, space, time, and imagination blending together into artistic perception.",
    whatsappLink: "https://wa.me/255688198914",
  },
  {
    id: 2,
    title: "Abstract Art",
    image: "/ART/covers/mb.jpg",
    description:
      "Abstract art for modern interiors that transforms spaces into emotional experiences through colors, movement, and expressive form beyond realism.",
    whatsappLink: "https://wa.me/255688198914",
  },
  {
    id: 3,
    title: "Portrait Sketch",
    image: "/ART/covers/art.png",
    description:
      "Handmade portrait sketches capturing emotion, personality, and detail with precise shading techniques and expressive strokes.",
    whatsappLink: "https://wa.me/255688198914",
  },
  {
    id: 4,
    title: "Landscape Drawing",
    image: "/ART/covers/woods.png",
    description:
      "Detailed landscape drawings inspired by natural scenery, atmosphere, and light variations across different environments.",
    whatsappLink: "https://wa.me/255688198914",
  },
];

function ArtCard({ art }) {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  const previewLength = 80;
  const isLong = art.description.length > previewLength;

  return (
    <div className="art-card">
      <img src={art.image} alt={art.title} className="art-image" />

      <div className="art-info">
        <h2>{art.title}</h2>

        <p>
          {expanded || !isLong
            ? art.description
            : art.description.slice(0, previewLength) + "..."}

          {isLong && (
            <span className="read-more" onClick={toggleReadMore}>
              {expanded ? " Read less" : " Read more"}
            </span>
          )}{" "}
          <a
            href={art.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
}

export default function Arts() {
  return (
    <>
      <p
        style={{
          fontFamily: "'Special Elite', monospace",
          letterSpacing: "-0.5px",
          wordSpacing: "-2px",
          lineHeight: "1.2",
        }}
      >
        “It may be unreal, yet experienced as real — welcome to the world where
        the unreal becomes real.”
      </p>

      <div className="arts-container">
        <div className="arts-gallery">
          {artsData.map((art) => (
            <ArtCard key={art.id} art={art} />
          ))}
        </div>
      </div>
    </>
  );
}