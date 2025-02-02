const customButton = document.getElementById('reveal') as HTMLButtonElement
const skillSection = document.getElementById('skill-set')as HTMLElement

customButton.addEventListener('click',()=>{
    if(skillSection.style.display === 'none'){
        skillSection.style.display = 'block'
    }else{
        skillSection.style.display = 'none'
    }
});