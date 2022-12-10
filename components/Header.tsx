import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { Input, Menu } from "semantic-ui-react";
import useLocalStorage from "./useLocalStorage";

function Header(): JSX.Element {
  const [searchRequest, setSearchRequest] = useState("");
  const router = useRouter(); // for page navigation

  function keyDownHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    localStorage.setItem("req", searchRequest); // to pass request through pages
    if (e.key == "Enter") router.push("/search");
  }

  return (
    <Menu>
      <Link href="/main">
        <Menu.Item>
          <div className="font-black text-lg hover:underline">ζ</div>
        </Menu.Item>
      </Link>
      <Link href="/account">
        <Menu.Item>
          <div className="font-black text-lg hover:underline">Personal account</div>
        </Menu.Item>
      </Link>
      <Menu.Item position="right">
        <div className="ui input">
          <input
            type="text"
            placeholder="Search..."
            value={searchRequest}
            onChange={(e) => setSearchRequest(e.target.value)}
            onKeyDown={(e) => keyDownHandler(e)}
          />
        </div>
      </Menu.Item>
    </Menu>
  );
}

export { Header };
