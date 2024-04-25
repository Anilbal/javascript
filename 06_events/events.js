// in javascript , events are run sequentially one by one

/*
    while making funtion in events  ,there is always a e 
    study these based on e: type,timestamp,preventDefault(),target,toElement,srcElement,currentTarget,
    clientX,clientY,screenX,screenY,altKey,ctrlKey,shiftKey,keyCode

    note:event propogation i.e document.getElementById("two").addEventListener('click',function(){
        alert('Second clicked')
     },false), here false or true value is said ti event propogation.
     there is two things it shows that is event bubbling(default or false) and event capturing
    
     Event Bubbling:-When an event occurs on a particular element, such as a click event on a button, the event doesn't just stop there only in child ; it propagates or bubbles up through the parent elements of that button, all the way up to the root of the document.For example :There is ul tag, inside of that ul tag there is five li tag. Each id my index starting from one to five .If we click on id two then it not only click second li but it also click its main ul tag too which is called bubbling

     Event Capturing:- Event capturing is the opposite of event bubbling. Instead of starting at the target element and propagating upwards through its ancestors, event capturing starts at the top of the DOM hierarchy and propagates downwards to the target element. However, it's important to note that event capturing is less commonly used than event bubbling.
     it first click parents i.e Ul tag and then its child i.e li tag of body.
*/