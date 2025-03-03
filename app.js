let div = null;

window.onload = () => {
    main();
};

function main() {
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const changeBtn = document.getElementById('change-btn');
    const copyBtn = document.getElementById('copy-btn');

    changeBtn.addEventListener('click', function(){
        const bgcolor = generateHexColor();
        root.style.backgroundColor = bgcolor;
        output.value = bgcolor;
        copyBtn.innerHTML = 'copy';
    });
    copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(output.value);

        if(div !=null){
            div.remove();
            div = null;
        }
        copyBtn.innerHTML = 'copied';
        generateToastMessage(`${output.value} copied`);
    });

}
function generateHexColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
   
}

function generateToastMessage(msg) {
   const div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in';
    document.body.appendChild(div);

    div.addEventListener('click', function(){
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');

        div.addEventListener('animationend', function(){
            div.remove();
            div = null;
        });
    });

    }

