import * as xrpl from "xrpl";


async function connectToServer() {
  const testnet_server = "wss://xls20-sandbox.rippletest.net:51233";
  const client = new xrpl.Client(testnet_server);
  let faucetHost = "faucet-nft.ripple.com";
  await client.connect();
}

async function sendXrp(receiver_address: string, sender_wallet: xrpl.Wallet, client: xrpl.Client, sendAmount: number) {
  const prepared = await client.autofill({
    "TransactionType": "Payment",
    "Account": sender_wallet.address,
    "Amount": xrpl.xrpToDrops(sendAmount),
    "Destination": receiver_address
  })
}


connectToServer().then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
  process.exit(1);
})

//discord app:
// 1 accounting details
// 2 create a community
// 3 tip your favourite creator

// AMM

// Education application