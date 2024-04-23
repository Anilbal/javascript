//DOM =>document object model
//console.log(document) gives only html dom but to get all windows document we can use console.dir(document)
//https://excalidraw.com/#json=X1oTAUaG_fyNm_rJ54NBi,BR2JwzrGaRy-fzZ3iXFIyg


/* 
**********
document.getElementById('title')
<h1 class="heading" id="title">This is my heading</h1>

**********
document.getElementById('title').id
'title'

**********
document.getElementById('title').className
 "heading"

*****
console.log(document.getElementById('title').getAttribute('id'))
'title'

*****
document.getElementById("title").setAttribute("class","test heading")
class="test heading"

const title=document.getElementById("title")
<h1 class="heading" id="title">This is my heading</h1>

title.style.backgroundColor="red"
'red' => it will by h1 backgroundColor red

title.style.padding="15px"
'15px' => it will be padding to my h1 tag

title.innerHTML
'This is my heading'

title.innerText
'This is my heading'

title.textContent
'This is my heading'

All three method gives  same output but their difference is innerText gives text that is only visiable ,textContent gives 
every text that is given in h1 and innerHTML gives each and every value including other nested tag inside of h1 tag 


//QUERY SELECTOR => querySelector always give the first value of given selected .For example if i use document.querySelector("h2") 
it will give me first h2 tag and its elements i.e <h2>This is a h2 tag</h2>

document.querySelector("#title") =>it selects by  id's
<h1 class="heading" id="title">This is my heading</h1>

document.querySelector(".heading") =>it selects by className
<h1 class="heading" id="title">This is my heading</h1>

document.querySelector("input[type="password"]") => it selects by input where i can select by types also 

document.querySelector('ul')
<ul>
<li>...</li>
<li>...</li>
<li>...</li>
</ul>

const myUl=document.querySelector('ul')

const firstList=myUl.querySelector("li")
firstList.style.backgroundColor="blue"
firstList.style.padding="15px"



//QUERY SELECTOR ALL
const selectAll=document.querySelectorAll('li') => it will give all li which will be nodelist .nodeList is an array but not pure array 
selectAll[0].style.color="green" => it will be first li color green

selectAll.forEach((item)=>{
   return  item.style.backgroundColor='green' => it will make every li color's green
})


//GET ELEMENT BY CLASSNAME
const temp=document.getElementByClassName("list-item")

HTMLCollection(3) [li.list-item, li.list-item, li.list-item] =>will be output as hmtl collection it is array but pure one
0: li.list-item
1: li.list-item
2: li.list-item

so we can convert this htmlcollection to array
const list=Array.from(temp) =>now we using any methods to get data
*/


