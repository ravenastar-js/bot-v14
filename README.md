<h2 align="center"> ━━━━━━  ❖  ━━━━━━ </h2>

<div align="center">
   <p></p>
   <a href="https://github.com/ravenastar-js/bot-v14/stargazers">
      <img src="https://img.shields.io/github/stars/ravenastar-js/bot-v14?color=%23ffb29b&labelColor=%23101415&style=for-the-badge">
   </a>
   <a href="https://github.com/ravenastar-js/raveninha-bot/network/members/">
      <img src="https://img.shields.io/github/forks/ravenastar-js/bot-v14?color=%23A2B7EE&labelColor=%23101415&style=for-the-badge">
   </a>
   <a href="https://github.com/ravenastar-js/bot-v14/">
      <img src="https://img.shields.io/github/repo-size/ravenastar-js/bot-v14?color=%23ee6a70&labelColor=%23101415&style=for-the-badge">
   </a>
   <br>
</div>

<p/>

<h2></h2>

> **Warning**<br>
> **Antes de iniciar nessa jornada, para facilitar o conhecimento e entedimento sugiro estudar javascript e a lógica de programação antes de praticar.**

> **Note**<br>
> Versões deprecated/descontinuadas ou antigas serão removidas desse projeto em atualizações futuras caso haja modificações total do projeto.

# Projeto referencial.
Guia para iniciantes que querem começar diretamente na criação de bot em discord.js
> v14 requer o node 16.9

## 📄 Confira alguns artigos que serão úteis para sua jornada:
● https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide<br>
● https://devdocs.io<br>
● https://www.cursoemvideo.com/curso/javascript/<br>
● https://discord.js.org/#/docs/main/stable/general/welcome<br>
● https://discordjs.guide/

## 📄 Discord.js guide:
● Atualizando da v13 para a v14<br>
 ➥ https://discordjs.guide/additional-info/changes-in-v14.html<br>

 ## Playlist recomendada.
 ![](https://i.imgur.com/toQwUZE.png) Veja a playlist [clicando aqui](https://youtube.com/playlist?list=PLj8eMR1hXlcJDjxtBi1QhJg0dEWk5b3t6)
 > :warning: **Na playlist é usada versão antiga do discord.js (v12), entretanto precisará atualizar, adaptar o projeto para as versões atuais.**

## 📄 Software recomendado para configurar o projeto:
<a href="https://code.visualstudio.com"><img src="https://img.shields.io/badge/-Visual%20Studio%20Code-0464bc?style=flat-square&labelColor=0464bc&logo=VisualStudioCode&logoColor=white&link=ttps://code.visualstudio.com"/></a>

## 📄 Configurações:
● Caso queira usar `config.json` em vez de `config.js`, coloque as informações abaixo:
```
{
    botClientID: "ID_DO_BOT",
    botPrefix: "PREFIXO_DO_BOT",
    ownerID: "ID_DO_DONO",
    embedColor: "HEXCOLOR",
    embedfooterText: "Exemplo bot - discord.js v14"
}
```
● Para puxar as informações do `config.json` coloque as informações abaixo no `index.js`:
```
const { botClientID, botPrefix, ownerID, embedColor, embedfooterText } = require('./config.json')
```
● Instale as dependências:
```
npm i discord.js
npm i dotenv
```
<a href="https://nodejs.org/pt-br/download/current/"><img src="https://img.shields.io/badge/-node.js-046c04?style=flat-square&labelColor=046c04&logo=node.js&logoColor=white&link=https://nodejs.org/pt-br/download/current/"/></a> <a href="https://discord.js.org/#/docs/discord.js/stable/general/welcome"><img src="https://img.shields.io/badge/-discord.js-ecdc1c?style=flat-square&labelColor=ecdc1c&logo=javascript&logoColor=black&link=https://discord.js.org/#/docs/discord.js/stable/general/welcome"/></a> <a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/badge/-discord.js-c40404?style=flat-square&labelColor=c40404&logo=npm&logoColor=white&link=https://www.npmjs.com/package/discord.js"/></a> <a href="https://www.npmjs.com/package/dotenv"><img src="https://img.shields.io/badge/-dotenv-c40404?style=flat-square&labelColor=c40404&logo=npm&logoColor=white&link=https://www.npmjs.com/package/dotenv"/></a> 

● Mude as informações dos arquivos `config.json`, `.env` e `SlashCommands/Bot/help.js`

● Não esqueça de ativar as permissões no [portal do desenvolvedor](https://discord.dev)
![](https://i.imgur.com/8DBc7xf.png)

> #discord.jsv14 #slashcommands #handlers #prefix
