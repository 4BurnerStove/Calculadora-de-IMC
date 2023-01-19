export const modal = {
  wrapper: document.querySelector('#IMCModalResult'),
  OpModal: document.querySelector('.modal-wrapper'),

  open() {
    modal.OpModal.classList.remove('hide')
  },
  close() {
    modal.OpModal.classList.add('hide')
  }
}

CloseModal.onclick = () => {
  modal.close()
}

// Não usar onkeydown, detalhe simple que pode servir no futuro. pode haver outros registro de dados no window

// Fechando no ESC ---VV---
window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key === 'Escape') {
    modal.close()
  }
}
