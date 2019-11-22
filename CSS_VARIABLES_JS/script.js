const my_function = () => {
    const inputs = document.querySelectorAll('.controls input');

    console.log(inputs);



    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

}
function handleUpdate() {
    //dataset return object contains all the atributes start by 'data-..'
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    return (console.log(this.name));
    
}

window.addEventListener("load", my_function);


