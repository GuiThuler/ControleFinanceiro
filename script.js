function adicionarEvent() {

  const formLembrete = document.querySelector('.formLembrete');
  const formGanho = document.querySelector('.formGanho');
  const formGasto = document.querySelector('.formGasto');

  const resultadoLembrete = document.querySelector('.resultadoLembrete');
  const resultadoGanho = document.querySelector('.resultadoGanho');
  const resultadoGasto = document.querySelector('.resultadoGasto');

  function formEvent(e) {
    e.preventDefault();

    setTimeout(() => {
            e.target.reset(); // Limpa todos os campos do formulário , o 1 siginifica milisegundo
        }, 1);

    // ADD LEMBRETES

    if (e.target === formLembrete) {
      const lembrete = [];
      // lembrete = JSON.parse(localStorage.getItem('arrayLembrete'));
      // localStorage.arrayLembrete = JSON.stringify(lembrete);

      const addLembrete = e.target.querySelector('.addLembrete');

      lembrete.push(addLembrete.value);
      resultadoLembrete.innerHTML += `<p>${addLembrete.value}</p>`;
    }

    // ADD CATEGORIA E VALOR DOS GASTOS E GANHOS

    if (e.target === formGanho) {
      const valorCategoriaGanho = [{categoriaGanho: '' , valorGanho: ''}];
      const [{categoriaGanho , valorGanho}] = valorCategoriaGanho;
      const addCategoriaGanho = e.target.querySelector('.addCategoriaGanho');
      const addValorGanho = e.target.querySelector('.addValorGanho');

      valorCategoriaGanho.push(addCategoriaGanho.value , Number(addValorGanho.value));
      resultadoGanho.innerHTML += `<p>${addCategoriaGanho.value} + ${addValorGanho.value}R$</p>`;
    }

    if (e.target === formGasto) {
      const valorCategoriaGasto = [{categoriaGasto: '' , valorGasto: ''}];
      const [{categoriaGasto , valorGasto}] = valorCategoriaGasto;
      const addCategoriaGasto = e.target.querySelector('.addCategoriaGasto');
      const addValorGasto = e.target.querySelector('.addValorGasto');

      valorCategoriaGasto.push(addCategoriaGasto.value , Number(addValorGasto.value));
      resultadoGasto.innerHTML += `<p>${addCategoriaGasto.value} + ${addValorGasto.value}R$</p>`;
    }

  }

  formLembrete.addEventListener("submit", formEvent);
  formGanho.addEventListener("submit", formEvent);
  formGasto.addEventListener("submit", formEvent);

}
adicionarEvent();
