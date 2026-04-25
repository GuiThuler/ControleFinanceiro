// ADD A CATEGORIA E VALOR

function adicionarLembreteEvent() {

  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
  const lembreteAdicionado = [];

  function FormEvent(evento) {
    evento.preventDefault();

    const addLembrete = form.querySelector('.addLembrete');
    lembreteAdicionado.push(addLembrete.value);
    resultado.innerHTML += `<p>${addLembrete.value}</p>`;

    console.log(lembreteAdicionado);
  }
  form.addEventListener("submit", FormEvent);
}
adicionarLembreteEvent();