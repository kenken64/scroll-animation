const observer = new IntersectionObserver((entries)=>{
    console.log(entries)
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden')
console.log(hiddenElements)
hiddenElements.forEach((el)=>observer.observe(el))