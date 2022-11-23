import Button from "../components/Button";
import ItemsRender from "../components/itemsRender";
import LoginButton from "../components/LogInButton";

export default function Landing() {
  return (
    <div>
      <h1>BAZZAR</h1>
      <Button>
        <h2>Browse items</h2>
      </Button>
      <LoginButton />
      <ItemsRender />
    </div>
  );
}
