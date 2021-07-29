import Cart from "./components/carts/Cart";
import "./App.css";
import { data } from "./data";

function App() {
  return (
    <>
      {data.map((e) => (
        <Cart key={e.id} name={e.name} login={e.login} img={e.avatarUrl} />
      ))}
    </>
  );
}
export default App;
