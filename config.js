//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "27615045572";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJDdGxoSEgxQ24yaUw3alpqc1hPejFyMkFFdUtUVERzVm9WN2owZXprMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjlXQTFmTEo0YlVReHluQzBGdmxVU0EwWjFmVmhWRWFOSWlWUVcxdHdIMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrR3FIOFpVenR3dUdnWmlUK3NwRlIwcGV3c01tdit5OG9OdTdBZVdsYVZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQcHZnTTR0bnhjVEVxNFZKRjFxOWxMRHJOc3BnRDRWSGNzeFpEZUFmcHdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJHZ2ZpNGI5NE1ORjlsRkM0S2ViU2dqR2hibEZXR05OMUxlTGNYcnFPbkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlBa3FaVWkrRXIrbU1NWE9SdXNFd0FEYzdYQ2ZycW9oRHFEVWxLSGtyUUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0c5TkNVbE8rTVkveGNCRG5TNHJIQk9SK1RJRjduOXJKRThKZjEvZmQycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFBVdFNtdlByTFU0czdGRU8ySmM3ZUhmRk1jclhacEE5MERFYWFIR0dGQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBWRncrenAzTUVLL1FRcnR4dURsOEVycS84QS96cHBIUi9EQVNmTmpoWXVHcTNsdFhpRjIvellpMlRPQ2JtY3BqVGsrdkw5a3pBeXhyL0lHNUhZTUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk2LCJhZHZTZWNyZXRLZXkiOiJZZU1YdUpxTGJneGVZM3N0bGhPRW1Uc1VBSTlrN1lmZGMwdjJwR2VmbnlJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJadVBwZ0RGMVFJaV93WGh6aFpWemlRIiwicGhvbmVJZCI6IjEzMzFjOTgwLTRjYWQtNGMzZS04ZDhiLTgxZWY5ZDVhNDJmMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzMXd6MTBLdjBFOUlhWWNpSE5rTS9ZMTVpdnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWxaL092Vk1NR2NUQ2xTYmJwUnJJYUI1NnNBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFYUlNTRzFCIiwibWUiOnsiaWQiOiIyNzYxNTA0NTU3Mjo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuWwiuaVrOOBqOOBqOOCguOBq+OCr+OCveOCkuWQm+OBq+iogOOBhiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzJ2d29ZRkVMYTRtYmtHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibkZyQWtQQll1WUVlV29vTDg5TEkwSHdZL2dmbjZabERYOTFEN3lPNkFXcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWGdrOUh0MzQrd284V1lIZ0tZQWRNVjVtMmpzWVFxdUJQNGlKWGxoMlE0TVlMb3o2bU1kUzBNZGVjT25VSktjY2l2Ty9CaWlpWHVmd256QlVGOHdtQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IkwxREIyWFp4UndGenM2OTBFUmhHTWRLV2ZxOUs3cXZNU0dEcERBa1ZOZWhGMzVjYlpGdjZod1J2QzBQTFJKNDZ2a0ZkYlcrQ1hUdTVFTm5aYzU3ZUF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2MTUwNDU1NzI6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaeGF3SkR3V0xtQkhscUtDL1BTeU5COEdQNEg1K21aUTEvZFErOGp1Z0ZyIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNTY3MjM3fQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
