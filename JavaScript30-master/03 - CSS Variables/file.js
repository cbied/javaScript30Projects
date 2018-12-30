const controls = document.querySelectorAll('.controls input');


function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

}

controls.forEach(inputs => inputs.addEventListener('change', handleUpdate))
controls.forEach(inputs => inputs.addEventListener('mousemove', handleUpdate))
