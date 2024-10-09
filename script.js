const inputText = document.getElementById('inputText');
const output = document.getElementById('output');

// Escuta o evento de entrada no campo de texto
inputText.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && inputText.value.trim() !== '') {
    const text = inputText.value; // Obtém o texto do campo de entrada
    
    // Cria um novo elemento de texto
    const newText = document.createElement('div');
    newText.classList.add('text');
    newText.textContent = text; // Define o texto

    output.appendChild(newText); // Adiciona o texto ao output

    inputText.value = ''; // Limpa o campo de entrada

    // Role para o fundo
    output.scrollTop = output.scrollHeight; 
  }
});
