import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import contrWithSigner from "../components/connectProvider/contrWithSigner";

function HomePage(): JSX.Element {
  const [nickname, setNickname] = useState("");
  const router = useRouter(); // for page navigation

  useEffect(() => {
    (async () => {
      if (
        await (
          await contrWithSigner()
        ).userNames(await (await contrWithSigner()).signer.getAddress())
      ) {
        router.push("/main");
      }
    })();
  }, []);

  async function register() {
    if (nickname !== "") {
      await (await contrWithSigner()).register(nickname);
    }
  }

  return (
    <div className="h-screen w-full flex justify-center flex-col items-center bg-gradient-to-b from-indigo-500 to-gray-300">
      <h1 className="font-black mb-24 underline text-white">WELCOME TO BAζζAR</h1>
      <div className="flex flex-col h-96 w-1/5 rounded-lg border-black border border-solid justify-center bg-indigo-200">
        <div className="flex flex-col w-full h-1/2 justify-center items-center">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">nickname</label>
            <input
              className="bg-white border border-gray-400 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 shadow"
              placeholder="cool-guy123"
              onChange={(e) => setNickname(e.target.value)}
              value={nickname}
            />
          </div>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-60 mt-6 h-12"
            onClick={register}>
            Register
          </button>
        </div>
        <div className="ui horizontal divider">Or just</div>
        <div className="w-full h-1/2 flex justify-center items-center ">
          <Link href="/main">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-60 h-12">
              Browse items
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
