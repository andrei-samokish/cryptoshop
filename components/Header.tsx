import Link from "next/link";
import { Menu } from "semantic-ui-react";

function Header(): JSX.Element {
  return (
    <Menu>
      <Link href="/main">
        <Menu.Item name="editorials">Main</Menu.Item>
      </Link>

      <Link href="/account">
        <Menu.Item name="reviews">Personal account</Menu.Item>
      </Link>
    </Menu>
  );
}

export { Header };
