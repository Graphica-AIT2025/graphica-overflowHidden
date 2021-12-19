
let butt = document.querySelector('.random')
butt.addEventListener('click',
function(){
    let name = Math.floor((Math.random() * 10));
    let storage = ['subs/games/aim bot/index.html',
    'subs/games/aim bot/index.html',
    'subs/games/aim bot/index.html',
    'subs/games/aim bot/index.html',
    'subs/games/aim bot/index.html',
    'subs/games/coin flip/cf_main.html',
    'subs/games/dinogame/dino_game.html',
    'subs/entertainment/chat bot/chatbot.html',
    'subs/entertainment/jokes/index.html',
    'subs/entertainment/personality/personality.html'];
    let neww = storage[name];
    console.log(neww);
    window.open(neww,'_blank')
});