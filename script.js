function verificar(){
    const personagem = document.getElementsByName('personagem')
    const tempo = document.getElementsByName('tempo')
    const res = document.querySelector('div.res')
    const img = document.createElement('img')

    

    if(personagem[0].checked && tempo[0].checked){
        img.setAttribute('src', 'img/jonas1.png')
    } else if(personagem[0].checked && tempo[1].checked){
        img.setAttribute('src', 'img/jonas2.png')
    } else if(personagem[1].checked && tempo[0].checked){
        img.setAttribute('src', 'img/elisabeth1.png')
    } else if(personagem[1].checked && tempo[1].checked){
        img.setAttribute('src', 'img/elisabeth2.png')
    } else if(personagem[2].checked && tempo[0].checked){
        img.setAttribute('src', 'img/magnus1.png')
    } else if(personagem[2].checked && tempo[1].checked){
        img.setAttribute('src', 'img/magnus2.png')
    } else if(personagem[3].checked && tempo[0].checked){
        img.setAttribute('src', 'img/franziska1.png')
    } else if(personagem[3].checked && tempo[1].checked){
        img.setAttribute('src', 'img/franziska2.png')
    } else{
        res.innerHTML = '[ERRO] Selecione as opções corretamente!'
    }

    res.style.textAlign = 'center'
    res.appendChild(img)
}