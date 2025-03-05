import Search from "./components/Search";
import { useState } from "react";

function App() {
const [searchTerm, setSearchTerm] = useState("");
  return ( 
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <h1>
            <img src="/src/assets/hero.png" alt="hero" />
            Find <span className="text-gradient">Movies</span> That you Love without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <h1 className="text-white">{searchTerm}</h1>
        </header>
      </div>
    </main>
   
   );
}

export default App;