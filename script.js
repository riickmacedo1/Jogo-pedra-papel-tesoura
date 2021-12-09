var elementos = document.querySelectorAll(".player-options div > img");
var playerOpt = "";
var inimigoOpt = "";

function validarVitoria() {
  let vencedor = document.querySelector(".vencedor");

  if (playerOpt == "paper") {
    if (inimigoOpt == "paper") {
      vencedor.innerHTML = "O jogo foi empatado";
    } else if (inimigoOpt == "scisor") {
      vencedor.innerHTML = "O inimigo ganhou";
    } else if (inimigoOpt == "rock") {
      vencedor.innerHTML = "O player ganhou";
    }
  }

  if (playerOpt == "scisor") {
    if (inimigoOpt == "paper") {
      vencedor.innerHTML = "O player ganhou";
    } else if (inimigoOpt == "scisor") {
      vencedor.innerHTML = "O jogo foi empatado";
    } else if (inimigoOpt == "rock") {
      vencedor.innerHTML = "O inimigo ganhou";
    }
  }

  if (playerOpt == "rock") {
    if (inimigoOpt == "paper") {
      vencedor.innerHTML = "O inimigo ganhou";
    } else if (inimigoOpt == "scisor") {
      vencedor.innerHTML = "O player ganhou";
    } else if (inimigoOpt == "rock") {
      vencedor.innerHTML = "O jogo foi empatado";
    }
  }
}

function resetInimigo() {
  const enemyOptions = document.querySelectorAll(".enemy-options div");
  for (var i = 0; i < enemyOptions.length; i++) {
    enemyOptions[i].childNodes[0].style.opacity = 0.3;
  }
}

function inimigoJogar() {
  let rand = Math.floor(Math.random() * 3);
  const enemyOptions = document.querySelectorAll(".enemy-options div");
  resetInimigo();
  for (var i = 0; i < enemyOptions.length; i++) {
    if (i == rand) {
      enemyOptions[i].childNodes[0].style.opacity = 1;
      inimigoOpt = enemyOptions[i].childNodes[0].getAttribute("opt");
    }
  }

  validarVitoria();
}

function resetOpacityPlayer() {
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.opacity = 0.3;
  }
}

for (var i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener("click", (t) => {
    resetOpacityPlayer();
    t.target.style.opacity = 1;
    playerOpt = t.target.getAttribute("opt");

    inimigoJogar();
  });
}
