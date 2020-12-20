let btnAdd=$('#btnAdd')
let btnClear=$('#btnClear')
let inpNewTask=$('#inpNewTask')
let ulTasks=$('#ulTasks')
let btnSort=$('#btnSort')

btnAdd.click( () => {
    let newItem= $('<li>', {

        'class':'list-group-item',
        text:inpNewTask.val()
    })

    newItem.click((event)=> {
        $(event.target).toggleClass('done') //or newItem.toggleClass('done)
    
    })
    ulTasks.append(newItem)
    inpNewTask.val(' ')
})

btnClear.click( () => {
    inpNewTask.val(' ')
})

btnSort.click(function(){
    $('#ulTasks .done').appendTo(ulTasks)
})



