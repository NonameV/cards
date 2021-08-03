import { useState, useCallback, useMemo } from "react";
import CartList from "./components/carts/CartList";
import Form from "./components/Form/Form";
import AppStateContext from "./contexts/AppContext";
import "./App.css";
import { sleep, getUsers } from "./utils.js";

// useCallback -- мемоизирует функцию
// useMemo -- мемоизирует величину
function App() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const addItem = async (userName) => {
    if (items.find((v) => v.login === userName)) {
      setError(`User ${userName} already here`);
      return;
    }
    setError("");
    setStatus("pending");
    await sleep();
    getUsers(userName).then(
      (item) => {
        setError("");
        setItems((x) => [...x, item]);
        setStatus("fulfilled");
      },
      (error) => {
        setError(error);
        setStatus("rejected");
      }
    );
  };

  const deleteUser = useCallback((id) => {
    setItems((items) => items.filter((e) => e.id !== id));
  }, []);

  const value = useMemo(() => ({ deleteUser }), [deleteUser]);
  return (
    <div className="conatainer">
      <Form isDisabled={status === "pending"} addItem={addItem} error={error} />
      <AppStateContext.Provider value={value}>
        <CartList data={items} />
      </AppStateContext.Provider>
    </div>
  );
}
export default App;
