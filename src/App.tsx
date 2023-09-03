import React from "react";
import { Footer } from "./components/footer";
import { NewGoods } from "./components/newGoods";
import { PopularGoods } from "./components/popularGoods";

function App() {
  return (
    <div className="App">
      <PopularGoods/>
      <NewGoods />
      <Footer />
    </div>
  );
}

export default App;
