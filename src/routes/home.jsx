export default function Home() {
  const containerStyle = {
    fontFamily: "'Courier Prime', Courier, monospace",
    fontStyle: "normal",
    padding: "40px",
    lineHeight: "1.6",
    color: "#111",
    textAlign: "justify", 
  };

 
  const ending = (
    <span style={{ fontWeight: "bold", color: "#040404ff" }}>
    
    </span>
  );

  return (
    <div style={containerStyle}>
      <h1>Welcome! Introduction</h1>
      <p>
        <strong>Emotions, Imagination, Reasoning, Experience and curiosity</strong>{" "}
        <span style={{ color: "#064e3b" }}>:tunaweza kuchengesha maana kamili kwa maneno ya Kiswahili (changamoto ya misamiati au tafsiri) lakini maneno yafuatayo yanatafsiri kwa kupunguza
          au kuondoa upotevu wa maana kwenye tafsiri (kwa mpangilio) <span style={{fontWeight: "bold",color:"#040404ff"}}>Hisia,Taswira ya kubuni, Mantiki, Uzoefu na Udadisi</span> hivi vikiwa pamoja
          vinazaa <span style={{fontWeight: "bold"}}>Art(Sanaa),Creativity(Ubunifu),Wisdom(Hekima),and Meaning(na Maana)</span> na wajukuu wake ni <span style={{fontWeight: "bold"}}>Philosophy(Falsafa),Mathematics(Hisabati) and Science(na Sayansi)</span>.
        </span>
        {ending}
      </p>
      <p>
        <span style={{ color:"#064e3b"}}>Hiyo <span style={{fontWeight: "bold",color:"#040404ff"}}>mizizi</span> kwa pamoja naiita <em>ngao ya akili</em> kwa sifa yake ya kukinga asili ya akili ya mwanadamu
        kutoka chochote kitakachoipima nguvu ,japo ni ajabu maana vitu(au kitu) hivyo vitakua vimetengenezwa na mwanadamu.
        kilakitu  ikiwemo asilia,falsafa,hisabati na sayansi yanaweza kuwa ni halisi(au la) na yakahisiwa kwa uhalisia.karibu kwenye ulimwengu wetu
        ambao yasiyo halisi yanakua halisi.Step into the world of Arts
        </span>
      </p>

     
    </div>
  );
}
