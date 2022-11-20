import Button from "../components/Button";
import LoginButton from "../components/LogInButton";

export default function Landing() {
  return (
    <div>
      <h1>BAZZAR</h1>
      <Button>
        <h2>Browse items</h2>
      </Button>
      <LoginButton>
        <h2 className="my-2">Log in via metamask</h2>
        <input
          className="border-black border border-solid"
          placeholder="your nickname"></input>
      </LoginButton>
    </div>
  );
}
