//function Name(greeting, name)
//{
//   return '${greet} ${name}'
//}
//const value =Name("hello","saugat")
//console.log(value)


//function showMessage(user, message)
//{
//    console.log('${user}: ${message}')
//}
//showMessage("saugat","hi cayre")
//showMessage("cayre","hi saugat")


//function shoeMessage(2kg,80)
//{
//    return("2*80")
//}
//console.log('')


//function decreaseValue(value,sub)
//{
 //   return function decreaseValue()
//    {
  //      console.log(value = value - sub)
//    }
//}
//const returnValue = decreaseValue(100,2)
//returnValue()
//returnValue()


const increaseValue = step => {
    let value = 0
       return () => console.log(value = value - step)
    }
const returnValue = increaseValue(2)
returnValue()
returnValue()


const calculate = 