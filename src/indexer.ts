// todo: ok we need teh account balances from your top level tokens. Or fuck off
// prettier be damned
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PromisePool } from '@supercharge/promise-pool';


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
const connection = new Connection("https://solana--mainnet.datahub.figment.io/apikey/24c64e276fc5db6ff73da2f59bac40f2", "confirmed");
let authorityWallet: Keypair;
let aw: Uint8Array;
let fanoutSdk: FanoutClient;
aw = (
  new Uint8Array(new Uint8Array(JSON.parse(process.env.key || fs.readFileSync('../id.json').toString())))
);
authorityWallet = Keypair.fromSecretKey(aw)



let thehydra = new PublicKey(("hyDQ4Nz1eYyegS6JfenyKwKzYxRsCWCriYSAjtzP4Vg"))
async function oulala(){
  if (doOulala){
    doOulala = false
let oops : number 
let oldoops : number = -1
const connection = new Connection("https://solana--mainnet.datahub.figment.io/apikey/24c64e276fc5db6ff73da2f59bac40f2", "confirmed");
const connection2 = new Connection("https://ssc-dao.genesysgo.net/", "confirmed");


let goodhs = JSON.parse(fs.readFileSync('./goodhs.json').toString())
  const hydras = await connection2.getProgramAccounts(
       thehydra as PublicKey,
      {}
    );
    let rl = (30000000*12)/365/24/60/60/1000
    rl = 1 / rl
    let ms = rl //* 10
    console.log(hydras.length)


//await airdrop(connection, authorityWallet.publicKey, LAMPORTS_PER_SOL * 10);
fanoutSdk = new FanoutClient(
    connection,
    new NodeWallet(new Account(aw))
); 
    let index = 0
    let start = new Date().getTime()

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

   // console.log(tasty.pubkey.toBase58())
  
    try{
    const fo = await fanoutSdk.fetch<Fanout>(
     ( tasty.pubkey) as PublicKey,
      Fanout
    );
    if ( /*
     !fo.name.toLowerCase().includes('fair')
      && !fo.name.toLowerCase().includes('test')
      && !fo.name.toLowerCase().includes('cope')
      && !fo.name.toLowerCase().includes('stacc')
      && !fo.name.toLowerCase().includes('jare')
      && !fo.name.toLowerCase().includes('free')
      && 
      */fo.membershipMint){
  
    var quote: any = null

      const tokAccs = await connection.getTokenAccountsByOwner( (tasty.pubkey),{mint:fo.membershipMint})
      for (var i in tokAccs.value){
      const balance = await connection.getTokenAccountBalance(tokAccs.value[i].pubkey)
    //  console.log(balance)
      if (balance.value.uiAmount){
      if (balance.value.uiAmount >= 0){
          if (!goodhs.includes(tasty.pubkey.toBase58())){
        goodhs.push(tasty.pubkey.toBase58())
          }
        console.log(goodhs.length)
        fs.writeFileSync('./goodhs.json', JSON.stringify(goodhs))


      }
    }
  }
}
    } catch(err){
      
    index ++
    oops = (Math.floor(index / hydras.length * 100) ) 
   // console.log(oops)
    if (oops % 5 == 0 && oldoops != oops){
 
 oldoops = oops
 await sleep(ms)
 console.log(oops + '%: ' + index + '; elapsed: ' + ((new Date().getTime() - start ) / 1000) + 's')
 
    }
    }

    index ++
   oops = (Math.floor(index / hydras.length * 100) ) 
  // console.log(oops)
   if (oops % 5 == 0 && oldoops != oops){

oldoops = oops
await sleep(ms)
console.log(oops + '%: ' + index + '; elapsed: ' + ((new Date().getTime() - start ) / 1000) + 's')

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