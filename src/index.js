const messages = [
    "Hola niñes...",
    "Kika, te debo mucho dinero :(",
    "Adolfo, la más chaparra de Acambay EdoMex",
    "Hay compañerito, pues si no te parece, te puedes ir, nadie te obligo a estar aqui",
    "Kikana",
    "Quiero decirte cosas bonitas, eres muy linda cuando me invitas a compartir la vida junto a ti",
    "Un saludo para los niños pobres de Tenjay",
    "De Tlaxinacalpan para el mundo",
    "Puro Camdev",
    "Cosas plos plos ultra",];

const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
}
module.exports = { funnyCommit };