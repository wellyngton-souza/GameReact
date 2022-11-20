import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="Title_jogo">
          <h2>Game in JavaScript</h2>
        </div>
        <div class="game">
          <div id="canva_jogo">
            <div id="jogo_personagem"></div>
            <div id="jogo_quadrado1"></div>
            <div id="jogo_quadrado2"></div>
            <div id="jogo_quadrado3"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

var posicao = 2;
document.addEventListener('keypress', function(e) {
  if (e.key === 'a') {
    posicao += -1;
    if (posicao === 1)
    {
      esquerda();
    }
    if (posicao === 2)
    {
      meio();
    }
    if (posicao < 1)
    {
      posicao = 1;
    }
  }
  if (e.key === 'd') {
    posicao += 1;
    if (posicao === 2)
    {
      meio();
    }
    if (posicao === 3)
    {
      direita();
    }
    if (posicao > 3)
    {
      posicao = 3;
    }
  }
});

posicao = 2;
function esquerda() {
  if (jogo_personagem.classList != 'andar_esquerda') {
    jogo_personagem.classList.add('andar_esquerda')
  }
  setTimeout(function() {
    jogo_personagem.classList.remove('andar_esquerda');
    document.getElementById('jogo_personagem').style.left = 80 + "px";
  }, 200)
}

function meio() {
  if (jogo_personagem.classList != 'andar_meio') {
    jogo_personagem.classList.add('andar_meio')
  }
  setTimeout(function() {
    jogo_personagem.classList.remove('andar_meio');
    document.getElementById('jogo_personagem').style.left = 225 + "px";
  }, 200)
}

function direita() {
  if (jogo_personagem.classList != 'andar_direita') {
    jogo_personagem.classList.add('andar_direita')
  }
  setTimeout(function() {
    jogo_personagem.classList.remove('andar_direita');
    document.getElementById('jogo_personagem').style.left = 370 + "px";
  }, 200)
}

export default App;