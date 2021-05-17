import data from "./data/index.js"
import ContainerAddExpenses from "./pages/addexpenses/index.js"
import ContainerBills from "./pages/bills/index.js"
import ContainerCreaterGoals from "./pages/createrGoals/index.js"
import ContainerExpensnesContinue from "./pages/expensesContinue/index.js"
import ContainerHome from "./pages/home/index.js"


const $root = document.getElementById('root')

// const _containerHome = ContainerHome.build()
// $root.appendChild(_containerHome)


//ExpensnesContinue
// const _containerExpensnesContinue = ContainerExpensnesContinue.build()
// $root.appendChild(_containerExpensnesContinue)

// ContainerAddexpenses
// const _containerAddExpenses = ContainerAddExpenses.build()
// $root.appendChild(_containerAddExpenses)

// const _containerCreaterGoals = ContainerCreaterGoals.build()
// $root.appendChild(_containerCreaterGoals)

const _containerBills = ContainerBills.build()
$root.appendChild(_containerBills)

const Usuario = data.getByid(2)

console.log(Usuario)