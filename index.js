let elementos = document.getElementsByClassName('rock1')

for (let el of elementos) {
  el.addEventListener("click", mostrar);
};

function mostrar(event){
  let ocultar = document.getElementById('circulos');
ocultar.style.display = 'none';
}
