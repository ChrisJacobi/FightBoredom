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
    const res = await fetch(`http://www.boredapi.com/api/activity?type=${type}&participants=${participants}`)
    const genActData = await res.json();
    displayActivity(genActData)
}

function displayActivity(activity) {
    onlyOne()
    const newAct = document.createElement('section')
    if (activity.type === undefined) {
        newAct.innerHTML = '<h3>Sorry, No tasks found</h3>'
        currentAct.append(newAct)
    } else {
        console.log(activity.type)
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