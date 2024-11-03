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
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/in01gn.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27849730363";
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
global.readcmds = process.env.READ_COMMAND || "true";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ01jOFBGUjBrLzZab0Z0QkhsL2xCL2V3UG8zdmVwMEtvTHgrTXUwYXgzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDljV0ZDbDBjTDdWR0ZoajA2TEFjYys0bHhEa3R2RGpBNmxzamd6dXlDVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRHJvZVdETHhpMXRCUFpsZ1NUcjFXNTNWTHFwM3EyVVZ5TkFiR3I4aVhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrVjUwU1lYWXQzendhanRaZGJnbjBBNW5HK0hVTUNyRzJ5Vmo5eWp2NUJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRQZGVyTGU3MVZWUGxEMURxaDVEUllMRiswQXpnTVJqWGNpbEppUFFyM0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI5MDhKV3lQTFF0ZjVrVTBCeWNrb0Iza1dXZGo3VnlDMS9ZSFZDenUxSFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZZelVOTmVHNzhINGhUd21mRUtma0ViOTM3TjFEcDFoUnM0Q0sxek4xUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUd4RzFNMXd5NjJaUjE2TFVVV1E0ellUa3hDbkw5bVZzaTI0bVdoWGhRMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdaYUdVc2o4M2wyZ1ZiTTVzWVRxSXprMkY2djVPbzF1MDhHZDQ1ZUQwWXJvWkkweFUva21mclBlM3BlaC9SOUlNRW1SS2d1QnZpekhwQWpPMkhac0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI2LCJhZHZTZWNyZXRLZXkiOiIvQUlIL09YMjRPa0ExWGFCUzkzS21Nenhabm1UMkFic0lQRmY4bUFmbFJnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1TDNPQnc1X1R1bVd1dmxUWE4wTll3IiwicGhvbmVJZCI6ImIwNTliYTAwLTE2OWYtNGRlNy1iOThhLTZhZDg3ZTM2ODU0OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5NHlSRmVaZ0N5UDNiN0V5d3lxM0VUUk5ITEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWm8xOTdSNTFIcVpYOHdmaW5LVzAyNG1ucEY4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjgyQlIxRUY1IiwibWUiOnsiaWQiOiIyNzYxNTA0NTU3Mjo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuWwiuaVrOOBqOOBqOOCguOBq+OCr+OCveOCkuWQm+OBq+iogOOBhiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzJ2d29ZRkVObjFtN2tHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibkZyQWtQQll1WUVlV29vTDg5TEkwSHdZL2dmbjZabERYOTFEN3lPNkFXcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZkxDaTdKaEtiRE1Zck5mdkowUmJFS0FhZyt1dTFmWFl4dzdjV1g0TkllTjhJQkJ2MjFVNFg1Q2FvZnIvd0Y5c2NhdVVVQlk4c0FTQmJNOWg1OGhwREE9PSIsImRldmljZVNpZ25hdHVyZSI6Ikg2ZDljWXJXVzF3R2IvbVZocE9ZVnUrOExrejViMU80d1Rwb3Y3Z0NJT3kySDVpZ0Ixb1dmeVowaGdTV3NycGVIY3BSSjZPVFd2N2owUnFGbWxJMUJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2MTUwNDU1NzI6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaeGF3SkR3V0xtQkhscUtDL1BTeU5COEdQNEg1K21aUTEvZFErOGp1Z0ZyIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNjA3ODQ3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBwZCJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Cylee is GOAT ❤️🧸`",
  author: process.env.PACK_AUTHER || "Sir Cylee ❤️🧸",
  packname: process.env.PACK_NAME || "c y l e e",
  botname: process.env.BOT_NAME || "theCyleeBot ❤️🧸",
  ownername: process.env.OWNER_NAME || "Sir Cylee ",
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
