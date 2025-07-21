import { Routes, Route } from "react-router-dom";
import ListCargo from "./ListCargo";
import FormCargo from "./FormCargo";
import FormProduct from "./FormProduct";
import ListMusteri from "./ListMusteri";
import ListOrder from "./ListOrder";
import FormMusteri from"./FormMusteri";
import FormOrder from "./FormOrder";
import ListProduct from "./ListProduct";
import LoginEkranı from "./LoginEkranı";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginEkranı />} />
        <Route path="/LoginEkranı" element={<LoginEkranı />} />
        <Route path="/ListCargo" element={<ListCargo />} />
        <Route path="/FormCargo" element={<FormCargo />} />
        <Route path="/FormProduct" element={<FormProduct/>} />
        <Route path="/ListMusteri" element={<ListMusteri/>} />
        <Route path="/FormOrder" element={<FormOrder/>} />
        <Route path="/ListProduct" element={<ListProduct/>} />
        <Route path="/FormMusteri" element={<FormMusteri/>} />
        <Route path="/ListOrder" element={<ListOrder/>} />
      </Routes>
    </div>
  );
}
export default App;
