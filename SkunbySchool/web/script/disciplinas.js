  document.getElementById("concluir-btn").addEventListener("click", function(event) {
    event.preventDefault(); 

    var nomeDisciplina = document.getElementById("nome-disciplina").value;
    var cargaHoraria = document.getElementById("carga-horaria").value;

    if (nomeDisciplina === "" || cargaHoraria === "") {
      alert("Por favor, preencha todos os campos obrigatórios.");
    } else {
        alert ("Disciplina cadastrada com sucesso!")
        window.location.href = "disciplinas.html";
      
      console.log("Formulário preenchido corretamente. Ação realizada!");
    }
  });

  
  document.getElementById("nome-disciplina").addEventListener("input", function() {
    this.value = this.value.replace(/[^A-Za-zÀ-ú\s]/g, "");
  });
  var timeoutId;

  document.getElementById("carga-horaria").addEventListener("input", function() {
    clearTimeout(timeoutId); 
    var input = this;
    timeoutId = setTimeout(function() {
      var value = input.value.replace(/\D/g, "");
      input.value = value ? value + "h" : "";
    }, 1000); 
  });

  document.getElementById("nome-disciplina").addEventListener("input", function() {
    var value = this.value;
    var errorMessage = document.getElementById("alerta-vermelho");
  
    if (!/^[a-zA-Z]+$/.test(value)) {
      errorMessage.textContent = "APENAS LETRAS";
    } else {
      errorMessage.textContent = "";
    }
  });
  
  document.getElementById("carga-horaria").addEventListener("input", function() {
    var value = this.value;
    var errorMessage = document.getElementById("alerta-vermelho2");
  
    if (!/^\d*$/.test(value)) {
      errorMessage.textContent = "APENAS NÚMEROS";
    } else {
      errorMessage.textContent = "";
    }
  });
  