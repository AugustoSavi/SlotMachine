require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

const emojis = ["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐒","🐔","🐧","🐦","🐥","🦆","🦅","🦉","🦇","🐺","🐗","🐴","🦄","🐝","🐛","🦋","🐌","🐞","🐜","🦟","🦗","🕷","🦂","🐢","🐍","🦎","🦖","🦕","🐙","🦑","🦐","🦞","🦀","🐡","🐠","🐟","🐬","🐳","🦈","🐊","🐅","🐆","🦓","🦍","🦧","🐘","🦛","🦏","🐪","🐫","🦒","🦘","🐂","🐄","🐎","🐖","🐏","🐑","🦙","🐐","🦌","🐕","🐩","🦮","🐕‍🦺","🐈","🐓","🦃","🦚","🦜","🦢","🦩","🕊","🐇","🦝","🦨","🦡","🦦","🦥","🐁","🐀","🐿","🦔","🐉","🐲","⛄️"];

function random(){ return Math.floor(Math.random() * 100)};

client.on('ready', () => {
  console.log(`O bot foi iniciado, com ${client.users.cache.size} usuários e em ${client.guilds.cache.size} servidores.`);
  client.user.setActivity('Charme na Visinha', { type: 'PLAYING' }); (`Eu estou em ${client.guilds.cache.size} servidores`);
});

client.on("message", async message => {

  let pontos = 0;

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(process.env.PREFIX)) return;

  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);

  const comando = args.shift().toLowerCase();

  if (comando === "bixo") { 

    var numeroDeRepeticoes = 1

    for(let i = 0;i < numeroDeRepeticoes; i++){
      let jogo = [random(),random(),random(),random(),random(),random(),random(),random(),random()];

      // [0,1,2]
      // [3,4,5]
      // [6,7,8]
      
      if(jogo[0] === jogo[1] && jogo[1] === jogo[2]){
        pontos += 100;
      }
      if( jogo[3] === jogo[4] && jogo[4] ===  jogo[5]){
        pontos += 1000;
      }
      if( jogo[6] === jogo[7] && jogo[7] ===  jogo[8]){
        pontos += 100;
      }
      if( jogo[0] === jogo[3] && jogo[3] ===  jogo[6]){
        pontos += 500;
      }
      if( jogo[1] === jogo[4] && jogo[4] ===  jogo[7]){
        pontos += 500;
      }
      if( jogo[2] === jogo[5] && jogo[5] ===  jogo[8]){
        pontos += 500;
      }
      if( jogo[0] === jogo[4] && jogo[4] ===  jogo[8]){
        pontos += 1500;
      }
      if( jogo[2] === jogo[4] && jogo[4] ===  jogo[6]){
        pontos += 1500;
      }

      message.channel.send(
            `ㅤ
            [${emojis[jogo[0]]}|${emojis[jogo[1]]}|${emojis[jogo[2]]}]
            [${emojis[jogo[3]]}|${emojis[jogo[4]]}|${emojis[jogo[5]]}]
            [${emojis[jogo[6]]}|${emojis[jogo[7]]}|${emojis[jogo[8]]}]
            
      **Pontos da rodada:** ${pontos}
            `
      );
    }
  }
})

client.login(process.env.TOKEN);