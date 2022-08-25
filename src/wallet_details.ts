import * as xrpl from "xrpl";

async function createNewAccount(client: xrpl.Client, faucetHost: string) {
  const new_wallet = (await client.fundWallet(null, {faucetHost})).wallet;
  console.log(new_wallet);
  return new_wallet;
}


async function getAccountDetails(wallet: xrpl.Wallet, client: xrpl.Client) {
  const my_balance = (await client.getXrpBalance(wallet.address));
  console.log(my_balance);
}

async function connectToServer() {
  const testnet_server = "wss://s.altnet.rippletest.net:51233";
  const client = new xrpl.Client(testnet_server);
  await client.connect();
  return client;
}

async function main() {
  let faucetHost = null;
  const client = await connectToServer();
  const wallet = await createNewAccount(client, faucetHost);
  await getAccountDetails(wallet, client);
}

main().then((res) => console.log(res)).catch((err) => console.log(err))