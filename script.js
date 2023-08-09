if (localStorage.getItem("coins" == null)) {
  const moeda = 0;
} else {
  var moeda = localStorage.getItem("coins");
}
const score = document.getElementById("score");
score.innerHTML = localStorage.getItem("coins");

function verificacao(id) {
  const opcao = document.getElementById("opcao0" + id);

  if (id == 0) {
    setTimeout(function () {
      window.location.href = "tarefas.html";
      alert("Parabéns você acertou e ganhou uma moeda!!");
    }, 500);
    moeda++;
    opcao.style.backgroundColor = "green";
    opcao.style.border = "0";
    localStorage.setItem("coins", moeda);
    score.innerHTML = localStorage.getItem("coins");
  } else {
    alert("Tente novamente!");
    opcao.style.backgroundColor = "red";
    opcao.style.border = "0";
  }
}
