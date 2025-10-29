// 1. Seleciona a imagem
const img = document.getElementById('imagemMovel');

// 2. Define a posição inicial e a velocidade
let x = 50; // Posição inicial no eixo X (horizontal)
let y = 50; // Posição inicial no eixo Y (vertical)

let dx = 2; // Velocidade no eixo X (2 pixels por quadro)
let dy = 2; // Velocidade no eixo Y (2 pixels por quadro)

// 3. Cria a função de animação
function moverImagem() {
    // Atualiza a posição
    x = x + dx;
    y = y + dy;

    // Aplica a nova posição à imagem
    img.style.left = x + 'px';
    img.style.top = y + 'px';

    // 4. Detecção de Colisão com as Bordas

    // Se bater na borda direita (window.innerWidth) OU na borda esquerda (0)
    if (x + img.clientWidth > window.innerWidth || x < 0) {
        // Inverte a direção horizontal
        dx = -dx; 
    }

    // Se bater na borda inferior (window.innerHeight) OU na borda superior (0)
    if (y + img.clientHeight > window.innerHeight || y < 0) {
        // Inverte a direção vertical
        dy = -dy; 
    }

    // 5. Continua o loop
    // Pede ao navegador para chamar esta função novamente na próxima "pintura" de tela
    requestAnimationFrame(moverImagem);
}

// Inicia a animação
moverImagem();
