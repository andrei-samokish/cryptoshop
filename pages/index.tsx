import Link from "next/link";

function HomePage(): JSX.Element {
  return (
    <Link href="/main">
      <button>browse items</button>
    </Link>
  );
}

export default HomePage;
