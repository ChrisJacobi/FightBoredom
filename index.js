// CONSTS

const randomAct = document.getElementById('randomAct')
const currentAct = document.getElementById('currentAct')
const type = document.getElementById('type').value
const participants = document.getElementById('participants').value
const freeOnly = document.getElementById('freeOnly')


async function randomActivity() {
    const res = await fetch('http://www.boredapi.com/api/activity/')
    const activity = await res.json();
    displayActivity(activity)   
}
async function filterAct() {
    let i
    if (freeOnly.checked){
        i = 0
        const res = await fetch(`http://www.boredapi.com/api/activity?type=${type}&participants=${participants}&price=${i}`)
        const genActData = await res.json();
        displayActivity(genActData)
    } else {
        const res = await fetch(`http://www.boredapi.com/api/activity?type=${type}&participants=${participants}`)
        const genActData = await res.json();
        displayActivity(genActData)
    }
}

function displayActivity(activity) {
    onlyOne()
    const newAct = document.createElement('section')
    if (activity.type === 'undefined') {
        newAct.innerHTML = 'No tasks found'
        currentAct.append(newAct)
    } else {
        newAct.innerHTML = `
        <ul class="list">
            <li class="li">${activity.activity}!</li>
            <li class="li">Type: ${activity.type}</li>
            <li class="li">${activity.participants} participant(s) needed</li>
        </ul>
        `
        currentAct.append(newAct)
    }
   
}

function onlyOne() {
    if (currentAct.innerHTML) {
        currentAct.innerHTML = ''
    } 
}