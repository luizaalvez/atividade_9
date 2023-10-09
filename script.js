
        function separarNomeSobrenome() {
            // Obter o valor da caixa de texto do nome completo
            var nomeCompleto = document.getElementById("nomeCompleto").value;

            // Dividir o nome completo em nome e sobrenome
            var partesDoNome = nomeCompleto.split(" ");

            // Verificar se existem pelo menos duas partes (nome e sobrenome)
            if (partesDoNome.length >= 2) {
                // Definir o valor dos campos de nome e sobrenome
                document.getElementById("nome").value = partesDoNome[0];
                document.getElementById("sobrenome").value = partesDoNome.slice(1).join(" ");
            } else {
                alert("Por favor, digite um nome completo válido.");
            }
        }
    
    