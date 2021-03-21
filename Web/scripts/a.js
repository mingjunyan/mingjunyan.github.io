let mybutton = document.querySelector('button');
let myhead1 = document.querySelector('h1');

function setusername(){
    let myname = prompt('Enter your name')
    if(myname){
        localStorage.setItem('name',myname)
        myhead1.textContent = 'Welcome' + myname
    }
    else{
        setusername()
    }
}

if(localStorage.getItem('name')){
    myhead1.textContent = 'Welcome!' + localStorage.getItem('name')
}
else{
    setusername()
}
mybutton.onclick=function(){
    setusername()
}