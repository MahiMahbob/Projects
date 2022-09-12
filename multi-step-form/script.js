const prevBtns = document.querySelectorAll('.btn-pre')
const nextBtns = document.querySelectorAll('.btn-next')
const progress = document.getElementById('progress')
const formSteps = document.querySelectorAll('.form-step')
const progressSteps = document.querySelectorAll('.progress-step')

let formStepNumber = 0

nextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        formStepNumber++;
        updateFormSteps();
        updateProgressBar();
    })
})

prevBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        formStepNumber--;
        updateFormSteps();
        updateProgressBar();
    })
})

function updateFormSteps() {
    formSteps.forEach(formStep =>{
        formStep.classList.contains('active') && 
        formStep.classList.remove('active')
    })
    formSteps[formStepNumber].classList.add('active')
}

function updateProgressBar() {
    progressSteps.forEach((progresStep, idx) => {
        if (idx < formStepNumber + 1) {
            progresStep.classList.add('active')
        } else {
            progresStep.classList.remove('active')
        }
    })
    const progressActive = document.querySelectorAll('.progress-step.active')
    progress.style.width = (progressActive.length - 1) / (progressSteps.length - 1) * 100 + '%'
    
}