const { Sequelize } = require("sequelize");
const fs = require("fs");
require('dotenv').config();

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env', override: true });

// Function to convert text to boolean
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// Function to convert string to boolean
const toBool = (x) => (x && x.toLowerCase() === 'true') || false;
global.apiUrl = 'https://api.maskser.me/'
global.eypzApi = 'https://combative-sarine-eypz-god-d4cce0fc.koyeb.app/'

// Define the Sequelize instance based on DATABASE_URL
const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
// Export configuration variables
module.exports = {
  HANDLERS: (process.env.PREFIX || [.]trim(),
  BRANCH: "main",
  MODE: (process.env.MODE || 'private').toLowerCase(),
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  LOG_MSG: toBool(process.env.LOG_MSG) || true,
  READ_CMD: toBool(process.env.READ_CMD)||true,
  SESSION_ID: process.env.SESSION_ID || "izumi~axXsHCUP",
  MENU_URL: process.env.MENU_URL || "https://files.catbox.moe/ydqi4n.jpeg",
  CAPTION: process.env.CAPTION || "Iᴢᴜᴍɪ",
  READ_MSG: toBool(process.env.READ_MSG)||true,
  OWNER_NAME: process.env.OWNER_NAME || "⋆✮⃝🚩𝚸𝚫𝚩𝐋𝚯⋆✮⃝🚩"
  BOT_NAME: process.env.BOT_NAME || "꧁۞𝚸𝚫𝚩𝐋𝚯۞꧂"
  SUDO: process.env.SUDO || null,
  LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || "⋆⏤͟͟͞͞✮⃝🚩ᴰᴶ᭄ Ｐᴀ ᏼ ⳑｏ࿐⋆⏤͟͟͞͞✮⃝🚩",
  AUDIO_DATA: process.env.AUDIO_DATA || "⋆⏤͟͟͞͞✮⃝🚩𝚸𝚫𝚩𝐋𝚯⋆⏤͟͟͞͞✮⃝🚩;https://files.catbox.moe/ydqi4n.jpeg",
  PROCESSNAME: process.env.PROCESSNAME || "𝚸𝚫𝚩𝐋𝚯",
  AUTHOR: process.env.AUTHOR || "Eypz God",
  DELETED_LOG_CHAT: process.env.DELETED_LOG_CHAT || false,
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  KOYEB_API_KEY: process.env.KOYEB_API_KEY || "null",
  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || '',
  KOYEB: toBool(process.env.KOYEB) || true,
  HEROKU: toBool(process.env.HEROKU) || false,
  TERMUX: toBool(process.env.TERMUX) || false,
  DATABASE_URL: DATABASE_URL,
  DATABASE:
       DATABASE_URL === './database.db' ? new Sequelize({dialect: 'sqlite', storage: DATABASE_URL, logging: false,}) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: {native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false,}),
  DEBUG: DEBUG
};
