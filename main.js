window.onload = function () {

	const titulo = document.querySelector('h1')
	const logo = document.querySelector('.logo')
	const firmaImagen = document.querySelector('.firma')
	const parrafo = document.querySelector('p')
	const firma = document.getElementById('nombre')

	let aux = true

    titulo.onmouseenter = function () {
    	titulo.style.display='none'
    }

    titulo.onmouseleave = function () {
    	titulo.style.display= 'block'
    }


    parrafo.onmouseenter = function () {
    	parrafo.style.fontSize = 'xx-large'
    	parrafo.style.color = 'violet'
    	parrafo.style.border = '2px solid blue'
    	parrafo.style.borderRadius= '25px'
    	parrafo.style.width = '50%'
    	parrafo.style.height = '50%'
    	parrafo.style.padding = '20px'
    }


    parrafo.onmouseleave = function () {
    	parrafo.style = null
    }


    firmaImagen.onclick = function () {
    	if(aux){   
    		firma.style.display= 'none'

    	} else {
    		firma.style.display= 'block'


    	}

    	aux = !aux
    }





	


	 
}

