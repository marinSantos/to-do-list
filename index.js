const inputAdd = document.getElementById('add')
const prioridade = document.getElementById('priority')
const addBtn = document.getElementById('addBtn')
const tarefas = document.getElementById('tarefas')
const urgente = document.getElementById('urgente')
const normal = document.getElementById('normal')
const sobra = document.getElementById('sobra')
const tarefa = document.querySelectorAll('div.tarefa')
const remover = document.getElementById('remover')


function wait(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 250)
    })
}


async function renderizarTarefa(ev) {

    ev.preventDefault()
    const uper =  inputAdd.value.slice(0,1).toUpperCase() 
    const result = inputAdd.value.replace(/^[a-zA-Z]/g, uper)
    if (inputAdd.value === '' || prioridade.value === '') {
        alert('Não se esqueça de dar um nome a tarefa!')

    } else if (prioridade.value === '1') {
        await wait(ev)


        let tarefa = document.createElement('div')
        tarefa.className ='tarefaU'
        tarefa.innerHTML = `<input class="check" type="checkbox"> <li class="text">${result}</li><img  class="remover" src="imagens/x-lg.png" alt="" onclick="removerTarefa(parentElement)">`

        urgente.appendChild(tarefa)
        inputAdd.value = ''
    } else if (prioridade.value === '2') {
        await wait(ev)

        let tarefa = document.createElement('div')
        tarefa.className ='tarefaN'
        tarefa.innerHTML = `<input  class="check" type="checkbox"><li class="text">${inputAdd.value}</li><img  class="remover" src="imagens/x-lg.png" alt="" onclick="removerTarefa(parentElement)">`

        normal.appendChild(tarefa)
        inputAdd.value = ''
    } else {
        await wait(ev)

        let tarefa = document.createElement('div')
        tarefa.className ='tarefaS'
        tarefa.innerHTML = `<input class="check" type="checkbox"><li class="text">${inputAdd.value}</li><img class="remover" src="imagens/x-lg.png" alt="" onclick="removerTarefa(parentElement)">`

        sobra.appendChild(tarefa)
        inputAdd.value = ''
    }

}



function removerTarefa(item) {
    if(item.className == 'tarefaU'){
        urgente.removeChild(item)
    }else if(item.className == 'tarefaN'){
        normal.removeChild(item)
    }else if(item.className == 'tarefaS'){
        sobra.removeChild(item)
    }
 
}


addBtn.addEventListener('click', renderizarTarefa)




