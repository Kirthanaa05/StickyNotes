let colorText = document.querySelector('.color-text').children
let input = colorText[1].children[0] //color of note
let btn = document.querySelector('.button')
let rightContainer = document.querySelector('.right-container')
input.value = "#00ced1"   //default color
let notesBox = document.querySelector('.right-notes')
btn.addEventListener('click',()=>{  //add note button
  if(colorText[0].value === ""){
    alert(`Enter some text!`)
    return
  }
  addNotes(colorText[0].value, input.value) //function call
  colorText[0].value = ""
  document.querySelector('.text').style.display = "none"
  removeNotes()
})

function addNotes(note,color){
  div1 = document.createElement('div')
  div1.innerHTML = `
  <button class="btns">X</button>
  <p class="notes">${note}</p>
  `
  div1.style.backgroundColor = `${color}`
  div1.style.color = `white`
  notesBox.appendChild(div1)
}

function removeNotes(){
  let btn1 = document.querySelectorAll(".btns")
  btn1.forEach((val)=>{
    val.addEventListener('click',()=>{
      val.parentElement.remove()
    })
  })
}