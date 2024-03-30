import React, { useState } from 'react';

export default function Main() {
  const [clicked, setClicked] = useState(false);

  return (<>
    <header>
      <div>
        <h2>"Att vara kreatör är att inspirera"</h2>
        <p>- Sam Pettersson</p>
      </div>
      <img src="/motiv.png" alt="Sam Pettersson" />
    </header>
    <main>
      <h1>SamTheKurs</h1>
      <h4>Lär dig allt om hur man lyckas på TikTok</h4>
      <h5>Köp min kurs för endast</h5>
      <div><i>899:-</i><b>699:-</b></div>
      <button onClick={() => setClicked(true)}>Köp</button>
    </main>
    {clicked && <section>
      <h1>April April!</h1>
      <div />
    </section>}
  </>);
}
