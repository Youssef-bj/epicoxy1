const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://probot-prime-2.glitch.me/`);
}, 280000);
 
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login("NzQ5MjIxNTA4MTM5NzEyNTUy.X0o05w.KCYN74N1nOFuIgjSh-uzJjDZeCw");
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
 
 //كود للتجربة


const money = JSON.parse(fs.readFileSync("./moneycode.json", "utf8"));
const coolDown = new Set();

client.on("message", message => {
 const args = message.content.split(' ');
  const money = require('./moneycode.json');
  const path = './moneycode.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!money[author]) money[author] = {money: 50};
  if(!money[mention.id]) money[mention.id] = {money: 50};
  fs.writeFile(path, JSON.stringify(money, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "money")) {
  if(args[0] !== `${prefix}money` && args[0] !== `${prefix}money`) return;
 
  if(args[2]) {
    if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the money you need to transfer! **`);
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(money[author].money < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
          money[author].money += (-balance);
          money[mention.id].money += (+balance);
          fs.writeFile(path, JSON.stringify(money, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
    message.channel.send(`**${mention.username}, your :credit_card: balance is** \`$${money[mention.id].money}\`**.** `);
  }
 
  }
        if(args[0].toLowerCase() === `${prefix}daily`) {  
     
if(money[message.author.id].daily != moment().format('L')) {
 
       money[message.author.id].daily = moment().format('L');
           
 
          let ammount = (635, 457, 765, 547, 356, 445, 654, 453,345,642);
          money[author].money += ammount;
       
       
          message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${ammount} daily money!**`);
        fs.writeFile("./moneycode.json", JSON.stringify(money), function(e) {
            if (e) throw e;
        })
 
      }else{
      message.channel.send(`:stopwatch: : **Please cool down  ${moment().endOf('day').fromNow()}**`);
 
      }
   
        }
         
   
 
});