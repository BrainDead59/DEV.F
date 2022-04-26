const trans=[
    {
        name:'Optimus Prime',
        team:'Autobot',
        form:'Trailer'
    },
    {
        name:'Bumblebee',
        team:'Autobot',
        form:'Camaro'
    },
    {
        name:'Megatron',
        team:'Decepticon',
        form:'Jet'
    }
]

nombres=[]
trans.forEach((trans)=>{
    nombres.push(trans.name)
})
console.log(nombres)

//map
const transformersName=trans.map((element) =>{
    return element.name
})
console.log(transformersName)

//filter
const teams = trans.filter(team => team.team=='Decepticon')
console.log(teams)