import { useState } from "react";
import CartList from "./components/carts/CartList";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const addItem = async (userName) => {
    console.log(userName);
  };
  return (
    <>
      <Form addItem={addItem} />
      <CartList data={items} />
    </>
  );
}
export default App;
