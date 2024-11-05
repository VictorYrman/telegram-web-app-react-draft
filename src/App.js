//import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductLIst/ProductList";
import Form from "./components/Form/Form";

function App() {
  //const { telegram } = useTelegram();

  // useEffect(() => {
  //   telegram.ready();
  // }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={"form"} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
