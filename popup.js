const toggleBtn = document.getElementById('toggle-btn')
const status = document.getElementById('status')
let isToggle = true 

toggleBtn.addEventListener('click',toggle)

function toggle(){
    if(isToggle){
        isToggle = false
        status.textContent = "OFF"
    }
    else if(!isToggle){
        isToggle = true
        status.textContent = "ON"
    }
}

