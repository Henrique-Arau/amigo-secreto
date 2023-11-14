let amigos = [];


function adicionar() {

    let amigo = document.getElementById('nome-amigo');

    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }
    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');

    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + ':';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + ', ';
        }
        
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição voia destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];

    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function ApenasLetras(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if (
            (charCode > 64 && charCode < 91) || 
            (charCode > 96 && charCode < 123) ||
            (charCode > 191 && charCode <= 255) // letras com acentos
        ){
            return true;
        } else {
            return false;
        }
    } catch (err) {
        alert(err.Description);
    }
}