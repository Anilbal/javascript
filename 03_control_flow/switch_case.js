//switch case statement
//syntax
/*
switch(key){
    case Value:
        break;
    
        default:
            break;
}
*/

const days=5
switch (days) {
    case 1:
        console.log("This is sunday")
        break;
    case 2:
        console.log("This is Monday")
        break;
    case 3:
        console.log("This is Tuesday")
        break;
    case 4:
        console.log("This is Wednesday")
        break;
    case 5:
        console.log("This is Thursday")
        break;
    case 6:
        console.log("This is friday")
         break;
     case 7:
        console.log("This is saturday")
        break;
    default:
        console.log("There is not such days")
        break;
}


/*  Note: in switch case, if we dont give break then after matching case i.e here 5 then it will execute every all code below
    except default code 
*/

