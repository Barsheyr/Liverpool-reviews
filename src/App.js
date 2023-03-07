import React, { useState } from "react";
import Review from "./Reviews";

function App() {
  const [players, setPlayers] = useState(0);
  return (
    <>
      <main>
        <section className="container">
          <div className="title">
            <h3> Liverpool Players Reviews</h3>
            <p> After defeating Man U (7-0)</p>
          </div>

          <Review players={players} setPlayers={setPlayers} />
        </section>
      </main>
    </>
  );
}

export default App;
