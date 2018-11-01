var scorum = require('@scorum/scorum-js');
let accountName = 'primetimesports'
let missedCount = -1;
scorum.api.setOptions({ url: 'https://prodnet.scorum.com' });
scorum.config.set('chain_id', 'db4007d45f04c1403a7e66a5c66b5b1cdfc2dde8b5335d1d2f116d592ca3dbb1');
try {
     let witness = scorum.api.getWitnessByAccountAsync(accountName);
     missedCount = witness.total_missed;
     console.log("Initial Missed Block count = " + missedCount);
     }
  catch (e){
      console.log("Error in getWitnessByAccount " + e)
      bot.sendMessage({
         to: config.discorduser,
         message: moment().utc().format("YYYY-MM-DD HH:mm:ss") + " : " + "`@" + config.accountname + "`" + " __Error in getWitnessByAccount__ " + "`" + e + "`"
     });
   }
