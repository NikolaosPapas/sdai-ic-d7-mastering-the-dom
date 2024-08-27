// Write your JavaScipt code below this line. 
const mainTitle = document.querySelector("#main-title")//selceted element in line 13
mainTitle.textContent = 'Welcome to Our Cat Adoption Center'

const description = document.querySelector("#description")
description.textContent = "Find the perfect companion!"

const cat1Button = document.getElementById('cat-1-button')//first cat
cat1Button.addEventListener('click', () => { // this is the variable,arrow is mandatory always
  console.log("clicked the first cat")
  const cat = document.getElementById("cat-1") //no need to do anything but add the events since it works with the same variable
  alert('Congrats on adopting your new friend!')
  cat.remove()
})

const cat2Button = document.getElementById('cat-2-button')//second cat
cat2Button.addEventListener('click', () => {
  console.log("booped the second cat")
  const cat = document.getElementById('cat-2') 
  alert('Congrats on adopting your new friend!')
  cat.remove()
})

const cat3Button = document.getElementById('cat-3-button')//third cat
cat3Button.addEventListener('click', () => {
  console.log('clicked the third cat')
  const cat = document.getElementById('cat-2') 
  alert('Congrats on adopting your new friend!')
  cat.remove()
  
})

