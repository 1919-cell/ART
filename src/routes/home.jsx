export default function Home() {
  const containerStyle = {
    fontFamily: "'Courier Prime', Courier, monospace",
    fontStyle: "normal",
    padding: "clamp(16px, 5vw, 40px)",
    lineHeight: "1.8",
    color: "#111",
    maxWidth: "100%",
    boxSizing: "border-box",
    overflowWrap: "break-word",
    wordBreak: "break-word",
  };

  const paragraphStyle = {
    textAlign: "justify",
    hyphens: "auto",
    marginBottom: "1.4em",
  };

  const swahiliStyle = {
    color: "#064e3b",
    display: "block",
    marginTop: "0.8em",
    borderLeft: "3px solid #064e3b",
    paddingLeft: "12px",
  };

  const boldDark = { fontWeight: "bold", color: "#040404" };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "clamp(1.2rem, 5vw, 1.8rem)", marginBottom: "1em" }}>
        Welcome! Introduction
      </h1>

      {/* === PARAGRAPH 1 === */}
      <p style={paragraphStyle}>
        {/* English */}
        <strong>Emotions, Imagination, Reasoning, Experience and Curiosity</strong>{" "}
        — when these five unite, they give birth to{" "}
        <strong>Art, Creativity, Wisdom, and Meaning</strong>, whose descendants
        are <strong>Philosophy, Mathematics, and Science</strong>.

        {/* Swahili */}
        <span style={swahiliStyle}>
          Tunaweza kuchengesha maana kamili kwa maneno ya Kiswahili (changamoto
          ya misamiati au tafsiri) lakini maneno yafuatayo yanatafsiri kwa
          kupunguza au kuondoa upotevu wa maana kwenye tafsiri (kwa mpangilio):{" "}
          <span style={boldDark}>Hisia, Taswira ya kubuni, Mantiki, Uzoefu na Udadisi</span>.
          Hivi vikiwa pamoja vinazaa{" "}
          <strong>Sanaa, Ubunifu, Hekima, na Maana</strong> na wajukuu wake ni{" "}
          <strong>Falsafa, Hisabati na Sayansi</strong>.
        </span>
      </p>

      {/* === PARAGRAPH 2 === */}
      <p style={paragraphStyle}>
        {/* English */}
        That <strong>root</strong> altogether I call it the{" "}
        <em>shield of the mind</em> — for its nature of guarding the human
        intellect from whatever may test its strength, even if it is remarkable
        that such things will have been made by humans themselves. Everything —
        including nature, philosophy, mathematics, and science — can be real (or
        not), and can be felt as reality.{" "}
        <strong>Welcome to our world where the unreal becomes real.</strong>{" "}
        Step into the world of Arts.

        {/* Swahili */}
        <span style={swahiliStyle}>
          Hiyo <span style={boldDark}>mizizi</span> kwa pamoja naiita{" "}
          <em>ngao ya akili</em> kwa sifa yake ya kukinga asili ya akili ya
          mwanadamu kutoka chochote kitakachoipima nguvu, japo ni ajabu maana
          vitu (au kitu) hivyo vitakua vimetengenezwa na mwanadamu. Kila kitu
          ikiwemo asilia, falsafa, hisabati na sayansi yanaweza kuwa ni halisi
          (au la) na yakahisiwa kwa uhalisia. Karibu kwenye ulimwengu wetu
          ambao yasiyo halisi yanakua halisi.
        </span>
      </p>
    </div>
  );
}