// dont forget to tip JARehRjGUkkEShpjzfuV4ERJS25j8XhamL776FAktNGm

const solanaWeb3 = require("@solana/web3.js");
const bip39 = require("bip39");
const ed = require("ed25519-hd-key");
const nacl = require("tweetnacl");
const fs = require("fs");
const utils = require("@strata-foundation/spl-utils");
const splutils = require("@solana/spl-token");
const PromisePool = require("@supercharge/promise-pool").default;
const jaregm = solanaWeb3.Keypair.fromSecretKey(
  new Uint8Array(
    JSON.parse(
      fs.readFileSync("/Users/jarettdunn/.config/solana/id.json").toString()
    )
  )
);
const mnemonics = JSON.parse(
  fs.readFileSync("/Users/jarettdunn/mem.ts").toString()
); //forgot n lol
const connection = new solanaWeb3.Connection(
  "https://solana--mainnet.datahub.figment.io/apikey/24c64e276fc5db6ff73da2f59bac40f2", //hahalolhaha
  "confirmed"
);
let hydras: number[] = [];
for (var i = 0; i <= 500 / mnemonics.length; i++) {
  hydras.push(i); // lol
}
setTimeout(async function () {
  await PromisePool.withConcurrency(mnemonics.length)
    .for(mnemonics)
    // @ts-ignore
    .handleError(async (err, asset) => {
      console.error(`\nError uploading or whatever`, err.message);
      console.log(err);
    })
    // @ts-ignore
    .process(async (mnemonic) => {
  await PromisePool.withConcurrency(hydras.length)
    .for(hydras)
    // @ts-ignore
    .handleError(async (err, asset) => {
      console.error(`\nError uploading or whatever`, err.message);
      console.log(err);
    })
    // @ts-ignore
    .process(async (i) => {
      let ran = i * 5;
      await utils.sleep(ran);
      console.log(i)
      //console.log(ran);
      const path = "m/44'/501'/" + i.toString() + "'/0'";
        const seed = bip39.mnemonicToSeedSync(mnemonic);
        const derivedSeed = ed.derivePath(path, seed.toString("hex")).key;
        const account = new solanaWeb3.Account(
          nacl.sign.keyPair.fromSeed(derivedSeed).secretKey
        );
        const keypair = solanaWeb3.Keypair.fromSecretKey(account.secretKey);
        const hm = await connection.getSignaturesForAddress(keypair.publicKey);

        if (hm.length > 0) {

    const configOrCommitment = {
      commitment: 'confirmed',
      filters: [
        {
          memcmp: {
            offset: 8,
            bytes: keypair.publicKey.toBase58(),
          },
        },
      ],
    };
    const accounts: any[] = await connection.getProgramAccounts(
      new solanaWeb3.PublicKey("BPFLoaderUpgradeab1e11111111111111111111111"),
      configOrCommitment,
    );

        let c = accounts.length;
        let tx = new solanaWeb3.Transaction();
        accounts.forEach(async (account: any, i: any) => {
        
          console.log(account)
        });

        if (c > 0) {
          console.log(keypair.publicKey.toBase58() + ": " + c.toString());
          // 1) use build-in function
        }
      }
      
    });
    });
  /*
     
  */
  /*
      for (var i in accounts.value){
      const balance = await connection.getTokenAccountBalance(accounts.value[i].pubkey)
      console.log(balance)

      if (balance.value.uiAmount){
      if (balance.value.uiAmount >= 0){
          if (!goodhs.includes(tasty.pubkey.toBase58())){
        goodhs.push(tasty.pubkey.toBase58())
        console.log(goodhs.length)
        console.log(fo.name.toLowerCase() + ' is ' + tasty.pubkey.toBase58() + ': ' + balance.value.uiAmountString)
        
          }
  ``     fs.writeFileSync('./goodhs.json', JSON.stringify(goodhs))


  }

    } */
});
