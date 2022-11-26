import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { ProductCard } from "../components/ProductCard";
import { AddItem } from "../components/AddItem";
import LoginButton from "../components/LogInButton";
function HomePage(): JSX.Element {
  return (
    <div>
      <AddItem></AddItem>
      <LoginButton />
    </div>
  );
}

export default HomePage;
