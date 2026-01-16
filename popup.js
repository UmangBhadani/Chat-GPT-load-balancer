const toggleBtn = document.getElementById('toggle-btn')
const status = document.getElementById('status')
let isToggle = true 

toggleBtn.addEventListener('click',toggle)

function toggle(){
    if(isToggle){
        status.textContent = "ON"
    }
    else if(!isToggle){
        status.textContent = "OFF"
    }
}

