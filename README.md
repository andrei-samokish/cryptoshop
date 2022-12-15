
# BAZZAR

Blockchain marketplace. Allows user to register and buy items wrapped in ERC1155 token. Moreover users may become sellers themselves and submit mew commodity to the marketplace along with some other actions on submitted items.


## Run Locally

Clone the project

```bash
  git clone https://github.com/andrei-samokish/cryptoshop.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

`ALCHEMY_API_KEY` - sign up at [_alchemy.com_](https://www.alchemy.com) and create Goerli app. You will be provided with an alchemy API key which you should paste in your .env;

`GOERLI_PRIVATE_KEY` - copy your MetaMask wallet`s private key and paste it in your .env (only if you want to deploy contract yourself);

`NEXT_PUBLIC_MAIN_CONTRACT_ADDRESS="0x89d546Dd87eFFfF1E41cBFa57D6077b2c01c3Cd4"` - use this address as an existing deployment of BAZZAR`s contract.


## Screenshots
**LANDING PAGE**
![Index](https://snipboard.io/cuvKNT.jpg)

**MAIN PAGE**
![Main](https://snipboard.io/pCUto2.jpg)

**PEROSNAL PAGE**
![Personal page](https://snipboard.io/dsxM47.jpg)

**ITEM SEARCH**
![Search](https://snipboard.io/dsxM47.jpg)



## Tech Stack

**Client:** TypeScript, React, Next.js, TailwindCSS, Solidity, Hardhat (deploy + tests + tasks), Ethers.js

**Server:** Node, Vercel


## Authors

- [@andrei-samokish](https://github.com/andrei-samokish)
- [@ThomasAqu1nas](https://github.com/ThomasAqu1nas)
