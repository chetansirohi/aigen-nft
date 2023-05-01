# Minti AI NFT

This is a decentralized app that allows users to mint an NFT by providing a name and description for the image they want to generate. The app uses Next.js and CSS for the frontend, Solidity for writing smart contracts, and the Stable-Diffusion model (API from HuggingFace) to generate images based on the user's description. The images are stored on IPFS (using nft.storage) and deployed on Polygon.

## How the App Works

1. Connect Wallet: The user connects their wallet to the browser.

2. Provide Name and Description: The user provides a name and description for the image they want to generate.

3. Generate Image: An API request is sent to the AI model with the provided description. The generated image is then sent to IPFS, and the user is given an IPFS URL.

4. Mint NFT: The user mints the AI-generated image with the help of a NFT minting smart contract by signing a transaction.

## Installation

1. Clone the repository: `git clone https://github.com/chetansirohi/aigen-nft.git`

2. Install dependencies: `npm install`

3. Create a `.env` file in the root directory of the project and add the following environment variables:

   ```
   QUICKNODE_HTTP_URL=<HTTP_Provider>
   NEXT_PUBLIC_HUGGING_FACE_API_KEY=<access-token>
   PRIVATE_KEY=<your-private-key>
   NFT_CONTRACT_ADDRESS=<address-of-the-deployed-contract>
   NEXT_PUBLIC_NFT_STORAGE_API_KEY=<nft-storage-api-key>
   ```

   Replace `<HTTP_Provider>` with your QuickNode HTTP Provider  URL,`<your-api-key>` with your HuggingFace API key, `<your-private-key>` with your private key, `<address-of-the-deployed-contract>` with the address of the deployed contract, and `<nft-storage-api-key>` for the nft.storage .

4. Start the app: `npm run dev`

5. Access the app at `http://localhost:3000`

## Usage

1. Connect your wallet to the browser.

2. Provide a name and description for the image you want to generate.

3. Click on the "Create & Mint" button.

4. Sign the transaction to mint the NFT.

5. View your newly minted NFT on the Polygon blockchain.

#App deployed at https://aigen-nft.vercel.app/
