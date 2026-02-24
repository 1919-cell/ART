import "./art.css";


const artsData = [
  {
    id: 1,
    title: "the way of nature",
    image: "/covers/way.png",
    description: "True explorers of the universe gonna need this short writting",
    whatsappLink: "https://wa.me/255688198914", 
  },
  {
    id: 2,
    title: "Abstract Art",
    image: "/covers/mb.jpg",
    description: "Abstract art for modern interiors",
    whatsappLink: "https://wa.me/255688198914",
  },
  {
    id: 3,
    title: "Portrait Sketch",
    image: "/covers/art.png",
    description: "Handmade portrait sketches.",
    whatsappLink: "https://wa.me/255688198914",
  },
  {
    id: 4,
    title: "Landscape Drawing",
    image: "/covers/woods.png",
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
  }}>“It may be unreal, yet experienced as real — welcome to the world where the unreal becomes real.”</p>
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
