export default function Kupata() {
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
    marginBottom: "0.8em",
  };

  const swahiliStyle = {
    color: "#064e3b",
    display: "block",
    marginTop: "0.8em",
    borderLeft: "3px solid #064e3b",
    paddingLeft: "12px",
  };

  const headingStyle = {
    fontSize: "clamp(1.2rem, 5vw, 1.8rem)",
    marginTop: "1.2em",
    marginBottom: "0.6em",
  };

  const green = { color: "#064e3b" };

  return (
    <div style={containerStyle}>

      {/* === How to get Art === */}
      <h1 style={headingStyle}>How to Get Art</h1>

      {/* Services */}
      <p style={paragraphStyle}>
        <strong>Services:</strong>
        <br />
        <strong>Coal</strong> — Free
        <br />
        <strong>Crystal</strong> — Moderate price
        <br />
        <strong>Diamond</strong> — Highest rank / Most expensive

        <span style={swahiliStyle}>
          <strong>Huduma:</strong>
          <br />
          <strong>Coal</strong> — Bure kabisa
          <br />
          <strong>Crystal</strong> — Bei ya wastani
          <br />
          <strong>Diamond</strong> — Ghali zaidi / Kiwango cha juu
        </span>
      </p>

      {/* How to order */}
      <p style={paragraphStyle}>
        All you need to do is choose the Art you want, then click the{" "}
        <span style={green}>WhatsApp</span> link found on each artwork to place
        your order.

        <span style={swahiliStyle}>
          Unachotakiwa kufanya ni kuchagua Art kisha bonyeza link au neno la{" "}
          <span style={green}>WhatsApp</span> lililopo katika kila kazi.
        </span>
      </p>

      {/* Coal */}
      <p style={paragraphStyle}>
        If you need a <strong>Coal</strong> artwork, you will receive it
        completely free — simply mention the name of the work you need.

        <span style={swahiliStyle}>
          Kama unahitaji kazi za <strong>Coal</strong> utapata kazi hiyo bure
          kabisa kwa kutaja tu jina la kazi unayoihitaji.
        </span>
      </p>

      {/* Crystal & Diamond */}
      <p style={paragraphStyle}>
        For <strong>Crystal</strong> and <strong>Diamond</strong> artworks,
        follow the payment instructions below.

        <span style={swahiliStyle}>
          Vilevile kwa kazi za <strong>Crystal</strong> na{" "}
          <strong>Diamond</strong>, maelekezo ni kama ifuatavyo.
        </span>
      </p>

      {/* === Payment === */}
      <h1 style={headingStyle}>Payment Process</h1>

      <p style={paragraphStyle}>
        You will make payment to the{" "}
        <span style={green}>WhatsApp number</span> or the indicated number,
        according to the listed price. With full honesty and care, you will
        receive your artwork on time.

        <span style={swahiliStyle}>
          Utafanya malipo kwenye{" "}
          <span style={green}>namba hiyo (ya WhatsApp)</span> au namba elekezi
          kulingana na bei elekezi, na kwa uaminifu mkubwa na kujali utapokea
          kazi kwa wakati.
        </span>
      </p>

      <p style={{ ...paragraphStyle, marginTop: "1.2em" }}>
        Welcome.{" "}
        <span style={swahiliStyle}>Karibu.</span>
      </p>

    </div>
  );
}