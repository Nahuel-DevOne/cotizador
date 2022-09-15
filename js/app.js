
// constructores
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

// User Interface
// No va a requerir datos, porque se van a ir generando según lo que suceda en la aplicación
function UI() {}

// Llena las opciones de los años
// se puede usar arrow functions, porque no se va a hacer uso de this
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;
    const selectYear = document.querySelector('#year');

    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}      

// Instanciar UI
const ui = new UI();
console.log(ui);

// Event Listeners
// Una vez que se cargó el DOM, se va a ejecutar la función
document.addEventListener('DOMContentLoaded',()=>{
    
    // Llena el select con los años
    ui.llenarOpciones();
});


function cotizarSeguro(e) {
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    // Leer el año seleccionado
    const year = document.querySelector('#year').value;
    // Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    console.log(tipo);

    if (marca === '' || year === '' || tipo === '') {
        console.log('Faltan datos');
        return;
    }
    console.log('Todo correcto');

}


function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

eventListeners();


