import "./art.css";

// Import images so Vite can handle them
import wayImg from './covers/way.png';
import mbImg from './covers/mb.jpg';
import artImg from './covers/art.png';
import woodsImg from './covers/woods.png';

const artsData = [
  {
    id: 1,
    title: "the way of nature",
    image: wayImg, // ✅ imported image
    description: "True explorers of the universe gonna need this short writting",
    whatsappLink: "https://wa.me/255688198914", 
  },
  {
    id: 2,
    title: "Abstract Art",
    image: mbImg, // ✅ imported image
    description: "Abstract art for modern interiors",
    whatsappLink: "https://wa.me/255688198914",
  },
  {
    id: 3,
    title: "Portrait Sketch",
    image: artImg, // ✅ imported image
    description: "Handmade portrait sketches.",
    whatsappLink: "https://wa.me/255688198914",
  },
  {
    id: 4,
    title: "Landscape Drawing",
    image: woodsImg, // ✅ imported image
    description: "Detailed landscape drawings.",
    whatsappLink: "https://wa.me/255688198914",
  }
];

export default function Arts() {
  return (
    <>
      <p style={{
        fontFamily: "'Special Elite', monospace",
        letterSpacing: "-0.5px",       
        wordSpacing: "-2px",           
        lineHeight: "1.2",             
      }}>
        “It may be unreal, yet experienced as real — welcome to the world where the unreal becomes real.”
      </p>
      <div className="arts-container">
        <div className="arts-gallery">
          {artsData.map((art) => (
            <div key={art.id} className="art-card">
              <img src={art.image} alt={art.title} className="art-image" />
              <div className="art-info">
                <h2>{art.title}</h2>
                <p>
                  {art.description}{" "}
                  <a href={art.whatsappLink} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}