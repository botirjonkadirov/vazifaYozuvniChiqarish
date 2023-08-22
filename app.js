const c = document.querySelector(`form`)
const text = document.querySelector(`div`)
c.addEventListener(`keyup`, (e)=>{
    const reg = /^[a-zA-Z0-9]{0,20}$/
    if (reg.test(e.target.value)){
        text.textContent=e.target.value
    } 
    // console.log(e.target.value)
})

