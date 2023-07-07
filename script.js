const form = document.querySelector('form');
const section = document.querySelector('section');
const resultadoDiv = document.createElement('div');
section.appendChild(resultadoDiv);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const poke = form.poke.value;
    console.log(poke);
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${poke}`,
        success: function (result) {
            console.log(result);
            console.log(result.name);

            // Limpar resultados anteriores
            resultadoDiv.innerHTML = '';

            const nome = document.createElement("h3");
            const tamanho = document.createElement("p");
            const peso = document.createElement("p");
            const imagem = document.createElement("img");

            nome.innerHTML = `<h4>${result.name}</h4>`;
            tamanho.innerHTML = `Tamanho: ${result.height}`;
            peso.innerHTML = `Peso: ${result.weight}`;
            imagem.src = result.sprites.front_default;
            imagem.alt = result.name;

            resultadoDiv.appendChild(nome);
            resultadoDiv.appendChild(tamanho);
            resultadoDiv.appendChild(peso);
            resultadoDiv.appendChild(imagem);
        }
    });
});

