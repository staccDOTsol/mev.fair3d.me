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
const connection =  new Connection("https://rpc.theindex.io/mainnet-beta/4ae962ec-5c8c-4071-9ef2-e5c6b59bdf3e", "recent");//new Connection("https://solana--mainnet.datahub.figment.io/apikey/24c64e276fc5db6ff73da2f59bac40f2", "recent");
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
const connection =  new Connection("https://rpc.theindex.io/mainnet-beta/4ae962ec-5c8c-4071-9ef2-e5c6b59bdf3e", "recent");//new Connection("https://solana--mainnet.datahub.figment.io/apikey/24c64e276fc5db6ff73da2f59bac40f2", "recent");
const connection2 = connection// = new Connection("https://rpc.theindex.io/mainnet-beta/4ae962ec-5c8c-4071-9ef2-e5c6b59bdf3e", "recent");


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
  let fo
    try{
     fo = await fanoutSdk.fetch<Fanout>(
     ( tasty.pubkey) as PublicKey,
      Fanout
    );

  } catch(err){
    // @ts-ignore
          if (err.toString().indexOf('ERR_BUFFER') == -1 && err.toString().indexOf('ERR_ASSERT') == -1){
          console.log(err)
          }
        index ++
        oops = (Math.floor(index / hydras.length * 100) ) 
       // console.log(oops)
        if (oops % 5 == 0 && oldoops != oops){
     
     oldoops = oops
     await sleep(ms)
     console.log(oops + '%: ' + index + '; elapsed: ' + ((new Date().getTime() - start ) / 1000) + 's')
     if (oops > 100){
       console.log(haha)
     }
        }
        }    
           const [holdingAccount, holdingAccountBumpSeed] =
        await FanoutClient.nativeAccount(new PublicKey(tasty.pubkey));
  
        const fortheculture_andoutstandingcontributinostothetech = await connection.getBalance ( (holdingAccount))
        const ftc = fortheculture_andoutstandingcontributinostothetech;
        if (fo?.membershipMint && (ftc / 10 ** 9) > 0.00195576){
         //   if (      fo.membershipMint.toBase58() == "8HGyAAB1yoM1ttS7pXjHMa3dukTFGQggnFFH3hJZgzQh"  ){ 
          console.log((ftc / 10 ** 9))
        //console.log((ftc / 10 ** 9).toString())
      haha+=(ftc / 10 ** 9);  //367 snapshot wallies at risk lol #seemstasty .. oops I lie, 1 second
      console.log(tasty.pubkey.toBase58())
      console.log(fo.membershipMint.toBase58()) // wat
      console.log(haha)
         //   }
     // tasties.push(fo.membershipMint.toBase58())
      
      }
/*
    if ( 
     !fo.name.toLowerCase().includes('fair')
      && !fo.name.toLowerCase().includes('test')
      && !fo.name.toLowerCase().includes('cope')
      && !fo.name.toLowerCase().includes('stacc')
      && !fo.name.toLowerCase().includes('jare')
      && !fo.name.toLowerCase().includes('free')
      && 
      ){
  
    var quote: any = null

      const tokAccs = await connection.getTokenAccountsByOwner( (tasty.pubkey),{mint:fo.membershipMint})
      for (var i in tokAccs.value){
      const balance = await connection.getTokenAccountBalance(tokAccs.value[i].pubkey)
    //  console.log(balance)
      if (balance.value.uiAmount){
      if (balance.value.uiAmount >= 0){
          if (!goodhs.includes(tasty.pubkey.toBase58())){
        goodhs.push(tasty.pubkey.toBase58())
        console.log(goodhs.length)
        console.log(fo.name.toLowerCase() + ' is ' + tasty.pubkey.toBase58() + ': ' + balance.value.uiAmountString)
        
          }
       fs.writeFileSync('./goodhs.json', JSON.stringify(goodhs))


      }
    }
  } */ 
//}

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