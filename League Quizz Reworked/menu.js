const mode = document.querySelectorAll('.difficult')

const content = [ 
    {h1:'0/5', p:'Modo fácil contendo 5 questões'},
    {h1:'0/10', p:'Modo médio contendo 10 questões'},
    {h1:'0/15', p:'Modo difícil contendo 15 questões'}
]

let descriptionH1 = document.createElement('h1')
let descriptionTxt = document.createElement('p')
let description = document.createElement('div')
description.classList.add('descriptionBox')


mode.forEach(item => {
    item.addEventListener('click', () => {
                mode.forEach(item => item.classList.remove('selected'))
                item.classList.add('selected')
    })

    item.addEventListener('mouseenter', () => {   
        switch (item.id){
            case 'easyMode':
                descriptionH1.innerHTML = content[0].h1
                descriptionTxt.innerHTML = content[0].p
                description.appendChild(descriptionH1)
                description.appendChild(descriptionTxt)
                break
             case 'normalMode':
                descriptionH1.innerHTML = content[1].h1
                descriptionTxt.innerHTML = content[1].p
                description.appendChild(descriptionH1)
                description.appendChild(descriptionTxt)
                break
            case 'hardMode':
                descriptionH1.innerHTML = content[2].h1
                descriptionTxt.innerHTML = content[2].p
                description.appendChild(descriptionH1)
                description.appendChild(descriptionTxt)
                break
                
        }

        document.body.appendChild(description)
    })

    item.addEventListener('mouseleave', () => document.body.removeChild(description))

})
