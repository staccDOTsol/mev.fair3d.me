// todo: ok we need teh account balances from your top level tokens. Or fuck off
// prettier be damned
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";


import {Connection,Account, Keypair, LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";
import { sleep } from "@strata-foundation/spl-utils";
import {NodeWallet} from "@project-serum/common"; //TODO remove this
import { FanoutClient, FanoutMint, Fanout } from "@glasseaters/hydra-sdk";
import * as anchor from '@project-serum/anchor'
import { SplTokenBonding } from "@strata-foundation/spl-token-bonding";
import { SplTokenCollective } from "@strata-foundation/spl-token-collective";
import { getAssociatedAccountBalance, SplTokenMetadata } from "@strata-foundation/spl-utils";
import * as fs from 'fs';

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
  new Uint8Array(new Uint8Array(JSON.parse(fs.readFileSync('./id.json').toString())))
);
authorityWallet = Keypair.fromSecretKey(aw)

async function hydrasSers(hydra: any, fo: any, fanoutSdk: any, authorityWallet: any){
  // @ts-ignore
const tokAccs = await connection.getTokenAccountsByOwner( (authorityWallet.publicKey),{mint:  fo.membershipMint})
const balance = await connection.getTokenAccountBalance(tokAccs.value[0].pubkey)
const ixs = await fanoutSdk.stakeTokenMemberInstructions({
  shares: parseInt(balance.value.amount),
  fanout:  (hydra.pubkey),
  // @ts-ignore
  membershipMint: fo.membershipMint,
  member: authorityWallet.publicKey,
  payer: authorityWallet.publicKey,
});
const tx = await fanoutSdk.sendInstructions(
  ixs.instructions,
  [authorityWallet],
  authorityWallet.publicKey
);
console.log('lol')
console.log(hydra.pubkey.toBase58())
console.log("lol")
}

let thehydra = new PublicKey(("hyDQ4Nz1eYyegS6JfenyKwKzYxRsCWCriYSAjtzP4Vg"))
  async function oulala(){
let oops : number 
let oldoops : number = 0
const connection2 = new Connection("https://solana--mainnet.datahub.figment.io/apikey/24c64e276fc5db6ff73da2f59bac40f2", "confirmed");
let goodhs = JSON.parse(fs.readFileSync('./goodhs.json').toString())
  const hydras = await connection2.getProgramAccounts(
       thehydra as PublicKey,
      {}
    );
    let ms = 138//.6
    console.log(hydras.length)

const connection = new Connection("https://ssc-dao.genesysgo.net/", "confirmed");

//await airdrop(connection, authorityWallet.publicKey, LAMPORTS_PER_SOL * 10);
fanoutSdk = new FanoutClient(
    connection,
    new NodeWallet(new Account(aw))
); 
let tokenBondingSdk = await SplTokenBonding.init(fanoutSdk.provider);
let tokenCollectiveSdk = await SplTokenCollective.init(fanoutSdk.provider);

    let index = 0
  for(var tasty in hydras){
  
    index ++
   oops = (Math.ceil(index / hydras.length * 100) )
   if (oldoops != oops){
console.log(oops + '%: ' + index + '; sleeping s: 1.38')
await sleep(1.38*1000)
oldoops = oops
   }
   // console.log(hydras[tasty].pubkey.toBase58())
  
    try{
    const fo = await fanoutSdk.fetch<Fanout>(
     ( hydras[tasty].pubkey) as PublicKey,
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

      const tokAccs = await connection.getTokenAccountsByOwner( (hydras[tasty].pubkey),{mint:fo.membershipMint})
      for (var i in tokAccs.value){
      const balance = await connection.getTokenAccountBalance(tokAccs.value[i].pubkey)
    //  console.log(balance)
      if (balance.value.uiAmount){
      if (balance.value.uiAmount >= 0){
          if (!goodhs.includes(hydras[tasty].pubkey.toBase58())){
        goodhs.push(hydras[tasty].pubkey.toBase58())
          }
        console.log(goodhs.length)
        fs.writeFileSync('./goodhs.json', JSON.stringify(goodhs))


      }
    }
  }
}
    } catch(err){
      
    }
  }

        /*
        console.log("testing: " + fo.name)
  
  
    try {

    var mm = await SplTokenBonding.tokenBondingKey(fo.membershipMint, 0)
   
      var ah = await tokenBondingSdk.getTokenBonding(mm[0] as PublicKey)
      var oh = await tokenCollectiveSdk.getTokenRef(mm[0] as PublicKey)
      

   try {
      // @ts-ignore
       quote = ah.baseMint
      }
      catch(err){
        try {
          // @ts-ignore
           quote = oh.collective
          }
          catch(err){
          }
      }

        if (quote){
      var mm1 = await SplTokenBonding.tokenBondingKey(quote, 0)
      var ah2 = await tokenBondingSdk.getTokenBonding(mm1[0] as PublicKey)
    // @ts-ignore
    var quote2 = ah2.baseMint
    let balance: number = 0
    if (quote2.toBase58() == "So11111111111111111111111111111111111111112"){
      // @ts-ignore
       balance = await connection.getBalance(authorityWallet.publicKey) / 10 ** 9
      console.log(balance)
    }
  else {//(t
  const tokAccs = await connection.getTokenAccountsByOwner( (authorityWallet.publicKey),{mint:quote})
  for (var i in tokAccs.value){
    let ag = ((await connection.getTokenAccountBalance(tokAccs.value[i].pubkey)).value.uiAmount as number)
    // @ts-ignore
    if (ag > balance){
      // @ts-ignore
   balance =  ag
   console.log(balance)
    }
  }
}
// @ts-ignore
  if (balance){
    // @ts-ignore
  if (balance >= 0){
    console.log('quote2: ' + quote2.toBase58())

  await tokenBondingSdk.buy({
    // @ts-ignore
    tokenBonding: mm1[0],
    // @ts-ignore
    baseAmount: balance / 10,
    slippage: 0.80
  }) 
  }
}
        }
  } catch (err){
    console.log('mm1 hates us, trying mm')
    //console.log(err)
  }
  let balance: number = 0
  
  try {
    try {
      // @ts-ignore
       quote = ah.baseMint
      }
      catch(err){
        try {
          // @ts-ignore
           quote = oh.collective
          }
          catch(err){
          }
      }
      if (quote){
        console.log(quote.toBase58())
   // @ts-ignore 
    if (quote.toBase58() == "So11111111111111111111111111111111111111112"){
      // @ts-ignore
       balance = await connection.getBalance(authorityWallet.publicKey) / 10 ** 9
      console.log(balance)
    }
  else {//(t
  const tokAccs = await connection.getTokenAccountsByOwner( (authorityWallet.publicKey),{mint:quote})
  for (var i in tokAccs.value){
    let ag = ((await connection.getTokenAccountBalance(tokAccs.value[i].pubkey)).value.uiAmount as number)
    if (ag > balance){
   balance =  ag
   console.log(balance)
    }
  }
}
// @ts-ignore
  if (balance){
    // @ts-ignore
  if (balance >= 0){
    // @ts-ignore
    console.log('quote1: ' + quote.toBase58())

  await tokenBondingSdk.buy({
    // @ts-ignore
    tokenBonding: mm[0],
    // @ts-ignore
    baseAmount: balance / 10,
    slippage: 0.80
  }) 
  }
}
  // @ts-ignore
  if (balance){
    // @ts-ignore
    if (balance > 0){
try{
      await hydrasSers(hydras[tasty], fo, fanoutSdk, authorityWallet)
}
catch(err)
{
  console.log('hydrasers?')
  console.log(err)
}
try{
let someinsts = []


const accounts = await connection.getParsedProgramAccounts(
  TOKEN_PROGRAM_ID, // new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
  {
    filters: [
      {
        dataSize: 165, // number of bytes
      },
      {
        memcmp: {
          offset: 32, // number of bytes
          bytes: hydras[tasty].pubkey.toBase58(), // base58 encoded string
        },
      },
    ],
  }
);
for (var abc in accounts){
console.log(abc)
    try{
  let fomint =  await fanoutSdk.fetch<FanoutMint>(
    ( hydras[tasty].pubkey) as PublicKey,
     accounts[abc].pubkey
   );
   console.log(fomint)
  let ix = await fanoutSdk.distributeTokenMemberInstructions({
    distributeForMint: true,
    fanoutMint: fomint.mint,
    membershipMint: fo.membershipMint,
    fanout: hydras[tasty].pubkey,
    member: authorityWallet.publicKey,
    payer: authorityWallet.publicKey,
  });

someinsts.push(...ix.instructions)
    }
  
  catch(err)
  {
    console.log(err)
    console.log('#insts: ' + someinsts.length)
    continue
  }
}

let ix = await fanoutSdk.distributeTokenMemberInstructions({
  distributeForMint: false,
  membershipMint: fo.membershipMint,
  fanout: hydras[tasty].pubkey,
  member: authorityWallet.publicKey,
  payer: authorityWallet.publicKey,
});
someinsts.push(...ix.instructions)

  // @ts-ignore
  const tx = await fanoutSdk.sendInstructions(
    someinsts,
    [authorityWallet],
    authorityWallet.publicKey
  );

  if (!!tx.RpcResponseAndContext.value.err) {
    const txdetails = await connection.getConfirmedTransaction(
      tx.TransactionSignature
    );
    console.log(txdetails, tx.RpcResponseAndContext.value.err);
  }
}

catch(err){
  console.log('distributes not?')
  console.log(err)
}
    }
  }
}
  }
catch(err){
  console.log('mm hates us?')
  console.log(err)
}
  //}else{
  //  console.log("" + 'refusing to buy, we do not own thing we need for membershipMint')
  //}
    
      }
    }
  
  }
}

    }
  catch(err){
  }
}

*/
setTimeout(async function(){
  oulala()
}, 1000)
  }
setTimeout(async function(){
  oulala()
}, 1);
