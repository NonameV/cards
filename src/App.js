import CartList from "./components/carts/CartList";
import Form from "./components/Form/Form";
import { AppProvider } from "./contexts/AppContext";
import "./App.css";

function App() {
  return (
    <div className="conatainer">
      <AppProvider>
        <Form />
        <CartList />
      </AppProvider>
    </div>
  );
}
export default App;
