const mode = document.querySelectorAll('.difficult')

const descriptions = [ 
    {h1:'0/5', p:'Modo fácil contendo 5 questões'},
    {h1:'0/10', p:'Modo médio contendo 10 questões'},
    {h1:'0/15', p:'Modo difícil contendo 15 questões'}
]

let descripH1 = document.createElement('h1')
let descripTxt = document.createElement('p')
let descrip = document.createElement('div')
descrip.classList.add('descriptionBox')


mode.forEach(item => {
    item.addEventListener('click', () => {
                mode.forEach(item => item.classList.remove('selected'))
                item.classList.add('selected')
    })

    item.addEventListener('mouseenter', () => {   
        switch (item.id){
            case 'easyMode':
                descrip.style.top = '17vh'
                descripH1.innerHTML = descriptions[0].h1
                descripTxt.innerHTML = descriptions[0].p
                descrip.appendChild(descripH1)
                descrip.appendChild(descripTxt)
                break
             case 'normalMode':
                descrip.style.top = '35vh'
                descripH1.innerHTML = descriptions[1].h1
                descripTxt.innerHTML = descriptions[1].p
                descrip.appendChild(descripH1)
                descrip.appendChild(descripTxt)
                break
            case 'hardMode':
                descrip.style.top = '50vh'
                descripH1.innerHTML = descriptions[2].h1
                descripTxt.innerHTML = descriptions[2].p
                descrip.appendChild(descripH1)
                descrip.appendChild(descripTxt)
                break
                
        }

        document.body.appendChild(descrip)
    })

    item.addEventListener('mouseleave', () => document.body.removeChild(descrip))

})
