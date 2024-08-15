const input1 = document.getElementById("input1");
const msgEncriptar = document.querySelector('.msgEncriptar');
const buttonEncriptar = document.querySelector('.buttonEncriptar');
const imgMuneco = document.querySelector('.imgMuneco');
const h2 = document.querySelector('.h2');
//const contDerecho = document.querySelector('.contDerecho');


const input2 = document.getElementById("input2");
const buttonDesencriptar = document.querySelector('.buttonDesencriptar');

const buttonCopiar = document.querySelector('.buttonCopiar');

buttonEncriptar.addEventListener("click", (e) => {
  
    const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
    const regex = /[!@#$%^&*(),.?":{}|<>A-ZÁÉÍÓÚáéíóú+-]/g;
    
    //encriptar
    const msgEncriptado = encriptar(input1.value);
    
    //validar
    if (msgEncriptado != msgEncriptado.toLowerCase() || msgEncriptado.match(regex) || msgEncriptado == '') {
        //input1.value = '';
        return alert("debe ser minúscula y sin carácteres especiales");    
    } else {
        h2.style.visibility = 'hidden';
        imgMuneco.style.visibility = 'hidden';
       // msgEncriptar.style.visibility = 'hidden;'
        msgEncriptar.add
        msgEncriptar.innerHTML = msgEncriptado;
        msgEncriptar.classList.add('centrarMsg');
        
    }
});

buttonDesencriptar.addEventListener("click", (e) => {
    
    //desencriptar
    const msgDesencriptado = desencriptar(input1.value);

    msgEncriptar.innerHTML = msgDesencriptado;
});

buttonCopiar.addEventListener('click', () => {
    const copiarContenido = async () => {
        try {
          await navigator.clipboard.writeText(msgEncriptar.innerHTML);
          console.log('Contenido copiado al portapapeles');
        } catch (err) {
          console.error('Error al copiar: ', err);
        }
      }

      copiarContenido();
});

function encriptar (msg) {
    let result = '';
    
    for( i in msg ){
        console.log(msg[i]);

          msg[i] == 'a'  ? result+='ai' : 
          msg[i] == 'e'  ? result+='enter' : 
          msg[i] == 'i'  ? result+='imes' : 
          msg[i] == 'o'  ? result+='ober' : 
          msg[i] == 'u'  ? result+='ufat' : result+= msg[i];
    }

    return result;
}

function desencriptar (msg) {
    let result = '';
    
    result = msg.replaceAll('ai','a');
    console.log(result);
    result = result.replaceAll('enter','e');
    console.log(result);
    result = result.replaceAll('imes','i');
    console.log(result);
    result = result.replaceAll('ober','o');
    console.log(result);
    result = result.replaceAll('ufat','u');
    console.log(result);
    
    return result;
}

