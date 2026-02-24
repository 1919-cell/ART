export default function Kupata() {
  const containerStyle = {
    fontFamily: "'Courier Prime', Courier, monospace",
    fontStyle: "normal",
    padding: "40px",
    lineHeight: "1.6",
    color: "#111", 
  };

  return (
    <div style={containerStyle}>
      <h1>Jinsi ya kupata Art</h1>
      <p>Unachotakiwa kufanya ni kuchagua Art  kisha bonyeza link au neno la <span style={{ color: "#064e3b" }}>whatsApp</span>  lililopo katika kila kazi</p>
      <p>kama unahitaji kazi za bila malipo utapata kazi hiyo bure kabisa kwa kutaja tu jina la kazi unayoihitaji </p>
      <p>vilevile kwa kazi premium maelekezo ni kama ifuatavyo</p> 
      <h1>Utaratibu wa malipo</h1>
      <p>
        utafanya malipo kwenye {" "}
        <span style={{ color: "#064e3b" }}>namba hiyo (ya whatsApp)</span> au namba elekezi kulingana na bei elekezi na kwa uaminifu mkubwa na kujali
        utapokea kazi  kwa wakati.
      </p>
      <p>karibu</p>
    </div>
  );
}
