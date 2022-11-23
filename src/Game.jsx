import { keyboard } from '@testing-library/user-event/dist/keyboard';
import './Game.css';

function App() {
  return (
    <div className="App">
      <h3>Esse Jogo Não vai Rodar Nem a pau meu Amigão, ir Pra um aparelho desktop ou um notebook resolverá o seu problema</h3>
      <header className="App-header">
        <div class="Title_jogo">
          <h2>Game in JavaScript</h2>
        </div>
        <div class="game">
          <div id="canva_jogo">
            <a class="score-font" id="score">0</a>
            <div id="jogo_personagem"></div>
            <div id="jogo_quadrado1"></div>
            <div id="jogo_quadrado2"></div>
            <div id="jogo_quadrado3"></div>
          </div>
        </div>
        <h7>Press <a class="color-red">A</a> or <a class="color-green">D</a></h7>
      </header>
    </div>
  );
}

var posicao = 2;
var start = new Boolean(false);

var min = Math.ceil(1);
var max = Math.floor(3);
var resultado = Math.floor(Math.random() * (max - min + 1)) + min;

window.addEventListener('load',function(){
    if(start==false)
    {
      var inimigo1 = document.getElementById('jogo_quadrado1');
      inimigo1.style.cssText =
        'visibility: hidden;';
        var inimigo2 = document.getElementById('jogo_quadrado2');
      inimigo2.style.cssText =
        'visibility: hidden;';
        var inimigo3 = document.getElementById('jogo_quadrado3');
      inimigo3.style.cssText =
        'visibility: hidden;';
        var score = document.getElementById('score');
        score.style.cssText =
        'color: rgb(245, 245, 245)';
        var score = document.getElementById('score');
        score.innerHTML = 'Press Space to Start';
    }
});

document.addEventListener('keypress', function(e){
  if (start != true)
  {
    if(e.keyCode == 32)
    {
      start = true;
      var inimigo1 = document.getElementById('jogo_quadrado1');
      inimigo1.style.cssText =
        'visibility: visible;'+
        'animation: quadrado1 infinite linear 1s;';
        var inimigo2 = document.getElementById('jogo_quadrado2');
      inimigo2.style.cssText =
        'visibility: visible;'+
        'animation: quadrado2 infinite linear 1s;';
        var inimigo3 = document.getElementById('jogo_quadrado3');
      inimigo3.style.cssText =
        'visibility: visible;'+
        'animation: quadrado3 infinite linear 1s;';
        var score = document.getElementById('score');
        score.innerHTML = '0';
    }
  }

  if (e.key === 'a' || e.key === 'A') {
    posicao += -1;
    if (posicao === 1)
    {
      esquerda();
      if (start == true)
      {
        var personagem = document.getElementById('jogo_personagem');
          personagem.style.backgroundColor= 'red';
      }
    } 
    if (posicao === 2)
    {
      meio();
      if (start == true)
      {
        var personagem = document.getElementById('jogo_personagem');
          personagem.style.backgroundColor= 'rgb(98, 0, 255)';
      }
    }
    if (posicao < 1)
    {
      posicao = 1;
    }
  }
  if (e.key === 'd' || e.key === 'D') {
    posicao += 1;
    if (posicao === 2)
    {
      meio();
      if (start == true)
      {
      var personagem = document.getElementById('jogo_personagem');
          personagem.style.backgroundColor= 'rgb(98, 0, 255)';
      }
    }
    if (posicao === 3)
    {
      direita();
      if (start == true)
      {
        var personagem = document.getElementById('jogo_personagem');
          personagem.style.backgroundColor= 'rgb(55, 226, 3)';
      }
    }
    if (posicao > 3)
    {
      posicao = 3;
    }
  }
});

function esquerda() {
  if (jogo_personagem.classList !== 'andar_esquerda') {
    jogo_personagem.classList.add('andar_esquerda')
  }
  setTimeout(function() {
    jogo_personagem.classList.remove('andar_esquerda');
    document.getElementById('jogo_personagem').style.left = 80 + "px";
  }, 200)
}

function meio() {
  if (jogo_personagem.classList !== 'andar_meio') {
    jogo_personagem.classList.add('andar_meio')
  }
  setTimeout(function() {
    jogo_personagem.classList.remove('andar_meio');
    document.getElementById('jogo_personagem').style.left = 225 + "px";
  }, 200)
}

function direita() {
  if (jogo_personagem.classList !== 'andar_direita') {
    jogo_personagem.classList.add('andar_direita')
  }
  setTimeout(function() {
    jogo_personagem.classList.remove('andar_direita');
    document.getElementById('jogo_personagem').style.left = 370 + "px";
  }, 200)
}

export default App;