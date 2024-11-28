document.querySelectorAll('.option').forEach(button => {
    button.addEventListener('click', () => {
      // Remove as classes de estilo anteriores
      document.querySelectorAll('.option').forEach(btn => {
        btn.classList.remove('correct', 'incorrect');
      });
  
      // Verifica se a resposta é correta ou incorreta
      if (button.dataset.correct === "true") {
        button.classList.add('correct');
      } else {
        button.classList.add('incorrect');
      }
    });
  });
  