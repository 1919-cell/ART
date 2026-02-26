import "./art.css";
import { useState } from "react";

const artsData = [
  {
    id: 1,
    title: "the way of nature",
    image: "/ART/covers/way.png",
    name: "The Way of Nature",
    author: "Oden Mboya",
    year: "2023",
    genre: "Philosophy / Nature",
    service: "coal",
    price: null,
    shortDescription:
      "True explorers of the universe gonna need this short writing that continues with deeper meaning about life, space, time, and imagination blending together.",
    whatsappLink: "https://wa.me/255688198914",
  },
  {
    id: 2,
    title: "Abstract Art",
    image: "/ART/covers/mb.jpg",
    name: "Abstract Art",
    author: "Unknown Artist",
    year: "2022",
    genre: "Abstract / Contemporary",
    service: "crystal",
    price: { usd: 15, tsh: 39000 },
    shortDescription:
      "Abstract art for modern interiors that transforms spaces into emotional experiences through colors, movement, and expressive form beyond realism.",
    whatsappLink: "https://wa.me/255688198914",
  },
  {
    id: 3,
    title: "Portrait Sketch",
    image: "/ART/covers/art.png",
    name: "Portrait Sketch",
    author: "Unknown Artist",
    year: "2021",
    genre: "Sketch / Realism",
    service: "diamond",
    price: { usd: 40, tsh: 104000 },
    shortDescription:
      "Handmade portrait sketches capturing emotion, personality, and detail with precise shading techniques and expressive strokes.",
    whatsappLink: "https://wa.me/255688198914",
  },
  {
    id: 4,
    title: "Landscape Drawing",
    image: "/ART/covers/woods.png",
    name: "Landscape Drawing",
    author: "Unknown Artist",
    year: "2023",
    genre: "Landscape / Nature",
    service: "coal",
    price: null,
    shortDescription:
      "Detailed landscape drawings inspired by natural scenery, atmosphere, and light variations across different environments.",
    whatsappLink: "https://wa.me/255688198914",
  },
];

const SERVICE_CONFIG = {
  coal:    { label: "Coal",     className: "service-coal"    },
  crystal: { label: "Crystal",  className: "service-crystal" },
  diamond: { label: "Diamond",  className: "service-diamond" },
};

function ServiceBadge({ service }) {
  const cfg = SERVICE_CONFIG[service];
  return (
    <span className={`service-badge ${cfg.className}`}>
      {cfg.emoji} {cfg.label}
    </span>
  );
}

function ArtCard({ art }) {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => setExpanded(!expanded);

  const handleDownload = async () => {
    try {
      const response = await fetch(art.image);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const ext = art.image.split(".").pop();
      a.download = `${art.name.replace(/\s+/g, "_")}_cover.${ext}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      window.open(art.image, "_blank");
    }
  };

  return (
    <div className="art-card">
      <img src={art.image} alt={art.title} className="art-image" />
      <div className="art-info">
        <h2>{art.title}</h2>

        <div className="art-meta">
          <p><span className="meta-label">Name</span> : {art.name}</p>
          <p><span className="meta-label">Author/Artist</span> : {art.author}</p>
          <p><span className="meta-label">Year</span> : {art.year}</p>
          <p><span className="meta-label">Genre</span> : {art.genre}</p>

          {/* Service */}
          <p className="service-row">
            <span className="meta-label">Service</span> :{" "}
            <ServiceBadge service={art.service} />
            {art.service === "coal" && (
              <span className="free-tag">Free</span>
            )}
          </p>

          {/* Price — only for crystal & diamond */}
          {art.price && (
            <p className="price-row">
              <span className="meta-label">Price</span> :{" "}
              <span className="price-usd">${art.price.usd} USD</span>
              <span className="price-sep"> / </span>
              <span className="price-tsh">{art.price.tsh.toLocaleString()} TSh</span>
            </p>
          )}

          {/* Short Description */}
          <p>
            <span className="meta-label">Short Description</span> :{" "}
            {!expanded ? (
              <>
                {art.shortDescription.slice(0, 60)}...{" "}
                <span className="read-more" onClick={toggleReadMore}>
                  Read more
                </span>
              </>
            ) : (
              <>
                {art.shortDescription}{" "}
                <span className="read-more" onClick={toggleReadMore}>
                  Read less
                </span>
              </>
            )}
          </p>
        </div>

        {expanded && (
          <div className="expanded-actions">
            <button className="download-btn" onClick={handleDownload}>
               Download picture
            </button>
          </div>
        )}

        <div className="card-footer">
          <a href={art.whatsappLink} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
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
        "It may be unreal, yet experienced as real — welcome to the world where
        the unreal becomes real."
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