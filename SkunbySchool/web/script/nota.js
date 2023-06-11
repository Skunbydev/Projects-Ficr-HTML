function adicionarNota(divId) {
    const notaInput = document.getElementById("dialog-input");
    const nota = notaInput.value;
    const select = document.getElementById("v-select");
    const selecao = select.value;
  
    const notaSelecionada = divId.querySelector(".nota-" + selecao + " p");
    notaSelecionada.textContent = nota;
  
    fecharDialog();
  }
  
  function cancelarNota() {
    fecharDialog();
  }
  
  function abrirDialog(divId) {
    const dialog = document.getElementById("dialog");
    const notaInput = divId.querySelector('.nota-input');
    const dialogInput = document.getElementById('dialog-input');
    const adicionarButton = document.getElementById('adicionar-button');
    const cancelarButton = document.getElementById('cancelar-button');
  
    dialogInput.value = notaInput.value;
  
    adicionarButton.onclick = function () {
      notaInput.value = dialogInput.value;
      adicionarNota(divId); 
      dialog.style.display = 'none';
    };
  
    cancelarButton.onclick = function () {
      dialog.style.display = 'none';
    };
  
    dialog.style.display = 'block';
    dialogInput.focus();
  }
  
  function fecharDialog() {
    const dialog = document.getElementById("dialog");
    dialog.style.display = "none";
  }
  