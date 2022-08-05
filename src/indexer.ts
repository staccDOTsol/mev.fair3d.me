// todo: ok we need teh account balances from your top level tokens. Or fuck off
// prettier be damned
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PromisePool } from '@supercharge/promise-pool';

import { Market } from '@project-serum/serum'
import {Connection,Account, Keypair, LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";
import { sleep } from "@strata-foundation/spl-utils";
import {NodeWallet} from "@project-serum/common"; //TODO remove this
import { FanoutClient, FanoutMint, Fanout } from "@glasseaters/hydra-sdk";
import * as anchor from '@project-serum/anchor'
import { SplTokenBonding } from "@strata-foundation/spl-token-bonding";
import { SplTokenCollective } from "@strata-foundation/spl-token-collective";
import { getAssociatedAccountBalance, SplTokenMetadata } from "@strata-foundation/spl-utils";
import * as fs from 'fs';
let doOulala = true
const numberFormater = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
let goods: any[] = []
let tasties = []
export const formatNumber = {
  format: (val?: number) => {
    if (!val) {
      return '--';
    }

    return numberFormater.format(val);
  },
  asNumber: (val?: anchor.BN) => {
    if (!val) {
      return undefined;
    }

    return val.toNumber() ;
  },
};
const connection =  new Connection("https://solana--devnet.datahub.figment.io/apikey/fff8d9138bc9e233a2c1a5d4f777e6ad", "recent");//new Connection("https://solana--mainnet.datahub.figment.io/apikey/24c64e276fc5db6ff73da2f59bac40f2", "recent");
let authorityWallet: Keypair;
let aw: Uint8Array;
let fanoutSdk: FanoutClient;
aw = (
  new Uint8Array(new Uint8Array(JSON.parse(process.env.key || fs.readFileSync('../id.json').toString())))
);
authorityWallet = Keypair.fromSecretKey(aw)



let thehydra = new PublicKey(("BPFLoaderUpgradeab1e11111111111111111111111"))
async function oulala(){
  if (doOulala){
    doOulala = false
let oops : number 
let oldoops : number = -1
const connection =  new Connection("https://solana--mainnet.datahub.figment.io/apikey/fff8d9138bc9e233a2c1a5d4f777e6ad", "recent");//new Connection("https://solana--mainnet.datahub.figment.io/apikey/24c64e276fc5db6ff73da2f59bac40f2", "recent");
const connection2 = connection// = new Connection("https://solana--devnet.datahub.figment.io/apikey/fff8d9138bc9e233a2c1a5d4f777e6ad", "recent");


let inflows = JSON.parse(fs.readFileSync('./recordInflow.json').toString())
//console.log(inflows)
let goodhs = JSON.parse(fs.readFileSync('./goodhs.json').toString())
  const hydras = await connection2.getProgramAccounts(
       thehydra as PublicKey,
      {}
    );
    let haha = 0;
    let rl = (950000*12)/365/24/60/60/1000
    rl = 1 / rl
    let ms = 1 / 250
    console.log(hydras.length)
let somehs = [] 
for (var aha of hydras){
  somehs.push(aha.pubkey)
  console.log(somehs.length)
}
fs.writeFileSync('somehs.json', JSON.stringify(somehs))

    await PromisePool.withConcurrency(500)
    .for(hydras)
    // @ts-ignore
    .handleError(async (err, asset) => {
      console.error(
        `\nError uploading or whatever`,
        err.message,
      );
      ms = ms * 2
      await sleep(ms * 4);
    })
    // @ts-ignore
    .process(async tasty => {
      const progs = await connection2.getProgramAccounts(
        tasty.pubkey as PublicKey,
       {}
     );
    for(var ablarg of progs){
    try 
  {
      let market = await Market.load(connection2, tasty.pubkey, {}, ablarg.pubkey);
    console.log('market loaded');
    let bids = await market.loadBids(connection2);
    let asks = await market.loadAsks(connection2);
let good = false 
    // bids
    console.log('bids are:');
    for (let [price, size] of bids.getL2(1)) {
      console.log(price, size);
      good = true; 
    }

    // asks
    console.log('asks are:');
    for (let [price, size] of asks.getL2(1)) {
      console.log(price, size);

      good = true ; 
    }
    if (good){
      goods.push( [tasty.pubkey.toBase58(), ablarg.pubkey.toBase58()])
      fs.writeFileSync('goods.json', JSON.stringify(goods))
      console.log(goods.length)
    }
  } catch (err){

  }
}
  });
  

  doOulala = true
}
}
setInterval(async function(){
oulala()
}, 1.38 * 1000)

setInterval(async function(){
doOulala = true
}, 1.38 * 1000 * 60 * 60 * 1.38)
setTimeout(async function(){
oulala()
}, 1);