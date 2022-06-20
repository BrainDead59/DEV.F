let allUsers = []

const renderUsers = (users) =>{
    //forEach
    users.forEach((user,i) => {
        // console.log({...user,index:i})
    });
    //map
    allUsers = users.map((user,i) => ({...user,index:i}))

    //filter
    gafas = users.filter(({emoji}) => emoji === ":gafas_de_sol:" )
    console.log(gafas)

    let numeros = [1,2,3,4,5,6]
    let position = numeros.indexof()
    console.log(position)
}
fetch('./user.json')
.then(response => response.json())
.then(data => users = data)
.catch(()=>console.error('Hubo error'))

//Los Json deben de llevar comillas