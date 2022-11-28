import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import Link from "next/link";

function HomePage(): JSX.Element {
  return (
    <Link href="/main">
      <Button>browse items</Button>
    </Link>
  );
}

export default HomePage;
