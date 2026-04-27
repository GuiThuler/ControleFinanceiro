function adicionarEvent() {

  const formLembrete = document.querySelector('.formLembrete');
  const formGanho = document.querySelector('.formGanho');
  const formGasto = document.querySelector('.formGasto');

  const resultadoLembrete = document.querySelector('.resultadoLembrete');
  const resultadoGanho = document.querySelector('.resultadoGanho');
  const resultadoGasto = document.querySelector('.resultadoGasto');

  function formEvent(evento) {
    evento.preventDefault();

    setTimeout(() => {
            this.reset(); // Limpa todos os campos do formulário , o 1 siginifica milisegundo
        }, 1);

    // ADD LEMBRETES
    
     function lembreteEvent() {

      const lembrete = [];
      const addLembrete = formLembrete.querySelector('.addLembrete');

      lembrete.push(addLembrete.value);
      resultadoLembrete.innerHTML += `<p>${addLembrete.value}</p>`;

    }

    lembreteEvent()

    // ADD CATEGORIA E VALOR DOS GASTOS E GANHOS

    function eventGanho() {
      const valorCategoriaGanho = [{categoriaGanho: '' , valorGanho: ''}];

      const [{categoriaGanho , valorGanho}] = valorCategoriaGanho;
      const addCategoriaGanho = formGanho.querySelector('.addCategoriaGanho');
      const addValorGanho = formGanho.querySelector('.addValorGanho');

      console.log(categoriaGanho , valorGanho)

      valorCategoriaGanho.push(addCategoriaGanho.value , Number(addValorGanho.value));

      resultadoGanho.innerHTML += `<p>${addCategoriaGanho.value}  ${addValorGanho.value}</p>`;
    }

    eventGanho()

    function eventGasto() {
      const valorCategoriaGasto = [{categoriaGasto: '' , valorGasto: ''}];

      const [{categoriaGasto , valorGasto}] = valorCategoriaGasto;
      const addCategoriaGasto = formGasto.querySelector('.addCategoriaGasto');
      const addValorGasto = formGasto.querySelector('.addValorGasto');

      console.log(categoriaGasto , valorGasto)

      valorCategoriaGasto.push(addCategoriaGasto.value , Number(addValorGasto.value));

      resultadoGasto.innerHTML += `<p>${addCategoriaGasto.value}  ${addValorGasto.value}</p>`;
    }

    eventGasto()

  }
  formLembrete.addEventListener("submit", formEvent);
  formGanho.addEventListener("submit", formEvent);
  formGasto.addEventListener("submit", formEvent);

}
adicionarEvent();


