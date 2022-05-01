// PSUEDO CODE
// Make click toggle function - unhide char's info (X9)
    // Call Function Request
    // Declare function
    // Create function instructions
        // function instructions need to make li have active class
        // function instructions need to properly display specific Character's section once their corresponding li have been clicked


// CALL FUNCTION REQUESTS - EVENTLISTENER
document.querySelector('#clickChihiro').addEventListener('click', clickChihiro)
document.querySelector('#clickHaku').addEventListener('click', clickHaku)
document.querySelector('#clickNoFace').addEventListener('click', clickNoFace)
document.querySelector('#clickKamaji').addEventListener('click', clickKamaji)
document.querySelector('#clickSootSprites').addEventListener('click', clickSootSprites)
document.querySelector('#clickLin').addEventListener('click', clickLin)
document.querySelector('#clickYubaba').addEventListener('click', clickYubaba)
document.querySelector('#clickBaby').addEventListener('click', clickBaby)
document.querySelector('#clickZeniba').addEventListener('click', clickZeniba)

// FUNCTION DECLARATION & INSTRUCTIONS
// CHIHIRO
function clickChihiro() {
    document.getElementById('clickChihiro').classList.toggle('active')
    document.querySelector('#chihiro').classList.toggle('hidden')

    document.getElementById('clickHaku').classList.remove('active')
    document.getElementById('clickNoFace').classList.remove('active')
    document.getElementById('clickKamaji').classList.remove('active')
    document.getElementById('clickSootSprites').classList.remove('active')
    document.getElementById('clickLin').classList.remove('active')
    document.getElementById('clickYubaba').classList.remove('active')
    document.getElementById('clickBaby').classList.remove('active')
    document.getElementById('clickZeniba').classList.remove('active')

    document.querySelector('#haku').classList.add('hidden')
    document.querySelector('#noFace').classList.add('hidden')
    document.querySelector('#kamaji').classList.add('hidden')
    document.querySelector('#sootSprites').classList.add('hidden')
    document.querySelector('#lin').classList.add('hidden')
    document.querySelector('#yubaba').classList.add('hidden')
    document.querySelector('#baby').classList.add('hidden')
    document.querySelector('#zeniba').classList.add('hidden')
}
// HAKU
function clickHaku() {
    document.getElementById('clickHaku').classList.toggle('active')
    document.querySelector('#haku').classList.toggle('hidden')

    document.getElementById('clickChihiro').classList.remove('active')
    document.getElementById('clickNoFace').classList.remove('active')
    document.getElementById('clickKamaji').classList.remove('active')
    document.getElementById('clickSootSprites').classList.remove('active')
    document.getElementById('clickLin').classList.remove('active')
    document.getElementById('clickYubaba').classList.remove('active')
    document.getElementById('clickBaby').classList.remove('active')
    document.getElementById('clickZeniba').classList.remove('active')

    document.querySelector('#chihiro').classList.add('hidden')
    document.querySelector('#noFace').classList.add('hidden')
    document.querySelector('#kamaji').classList.add('hidden')
    document.querySelector('#sootSprites').classList.add('hidden')
    document.querySelector('#lin').classList.add('hidden')
    document.querySelector('#yubaba').classList.add('hidden')
    document.querySelector('#baby').classList.add('hidden')
    document.querySelector('#zeniba').classList.add('hidden')
}
// NO FACE
function clickNoFace() {
    document.getElementById('clickNoFace').classList.toggle('active')
    document.querySelector('#noFace').classList.toggle('hidden')

    document.getElementById('clickChihiro').classList.remove('active')
    document.getElementById('clickHaku').classList.remove('active')
    document.getElementById('clickKamaji').classList.remove('active')
    document.getElementById('clickSootSprites').classList.remove('active')
    document.getElementById('clickLin').classList.remove('active')
    document.getElementById('clickYubaba').classList.remove('active')
    document.getElementById('clickBaby').classList.remove('active')
    document.getElementById('clickZeniba').classList.remove('active')

    document.querySelector('#chihiro').classList.add('hidden')
    document.querySelector('#haku').classList.add('hidden')
    document.querySelector('#kamaji').classList.add('hidden')
    document.querySelector('#sootSprites').classList.add('hidden')
    document.querySelector('#lin').classList.add('hidden')
    document.querySelector('#yubaba').classList.add('hidden')
    document.querySelector('#baby').classList.add('hidden')
    document.querySelector('#zeniba').classList.add('hidden')
}
// KAMAJI
function clickKamaji() {
    document.getElementById('clickKamaji').classList.toggle('active')
    document.querySelector('#kamaji').classList.toggle('hidden')

    document.getElementById('clickChihiro').classList.remove('active')
    document.getElementById('clickHaku').classList.remove('active')
    document.getElementById('clickNoFace').classList.remove('active')
    document.getElementById('clickSootSprites').classList.remove('active')
    document.getElementById('clickLin').classList.remove('active')
    document.getElementById('clickYubaba').classList.remove('active')
    document.getElementById('clickBaby').classList.remove('active')
    document.getElementById('clickZeniba').classList.remove('active')

    document.querySelector('#chihiro').classList.add('hidden')
    document.querySelector('#haku').classList.add('hidden')
    document.querySelector('#noFace').classList.add('hidden')
    document.querySelector('#sootSprites').classList.add('hidden')
    document.querySelector('#lin').classList.add('hidden')
    document.querySelector('#yubaba').classList.add('hidden')
    document.querySelector('#baby').classList.add('hidden')
    document.querySelector('#zeniba').classList.add('hidden')
}
// SOOT SPRITES
function clickSootSprites() {
    document.getElementById('clickSootSprites').classList.toggle('active')
    document.querySelector('#sootSprites').classList.toggle('hidden')

    document.getElementById('clickChihiro').classList.remove('active')
    document.getElementById('clickHaku').classList.remove('active')
    document.getElementById('clickNoFace').classList.remove('active')
    document.getElementById('clickKamaji').classList.remove('active')
    document.getElementById('clickLin').classList.remove('active')
    document.getElementById('clickYubaba').classList.remove('active')
    document.getElementById('clickBaby').classList.remove('active')
    document.getElementById('clickZeniba').classList.remove('active')

    document.querySelector('#chihiro').classList.add('hidden')
    document.querySelector('#haku').classList.add('hidden')
    document.querySelector('#noFace').classList.add('hidden')
    document.querySelector('#kamaji').classList.add('hidden')
    document.querySelector('#lin').classList.add('hidden')
    document.querySelector('#yubaba').classList.add('hidden')
    document.querySelector('#baby').classList.add('hidden')
    document.querySelector('#zeniba').classList.add('hidden')
}
// LIN
function clickLin() {
    document.getElementById('clickLin').classList.toggle('active')
    document.querySelector('#lin').classList.toggle('hidden')

    document.getElementById('clickChihiro').classList.remove('active')
    document.getElementById('clickHaku').classList.remove('active')
    document.getElementById('clickNoFace').classList.remove('active')
    document.getElementById('clickKamaji').classList.remove('active')
    document.getElementById('clickSootSprites').classList.remove('active')
    document.getElementById('clickYubaba').classList.remove('active')
    document.getElementById('clickBaby').classList.remove('active')
    document.getElementById('clickZeniba').classList.remove('active')

    document.querySelector('#chihiro').classList.add('hidden')
    document.querySelector('#haku').classList.add('hidden')
    document.querySelector('#noFace').classList.add('hidden')
    document.querySelector('#kamaji').classList.add('hidden')
    document.querySelector('#sootSprites').classList.add('hidden')
    document.querySelector('#yubaba').classList.add('hidden')
    document.querySelector('#baby').classList.add('hidden')
    document.querySelector('#zeniba').classList.add('hidden')
}
// Yubaba
function clickYubaba() {
    document.getElementById('clickYubaba').classList.toggle('active')
    document.querySelector('#yubaba').classList.toggle('hidden')

    document.getElementById('clickChihiro').classList.remove('active')
    document.getElementById('clickHaku').classList.remove('active')
    document.getElementById('clickNoFace').classList.remove('active')
    document.getElementById('clickKamaji').classList.remove('active')
    document.getElementById('clickSootSprites').classList.remove('active')
    document.getElementById('clickLin').classList.remove('active')
    document.getElementById('clickBaby').classList.remove('active')
    document.getElementById('clickZeniba').classList.remove('active')

    document.querySelector('#chihiro').classList.add('hidden')
    document.querySelector('#haku').classList.add('hidden')
    document.querySelector('#noFace').classList.add('hidden')
    document.querySelector('#kamaji').classList.add('hidden')
    document.querySelector('#sootSprites').classList.add('hidden')
    document.querySelector('#lin').classList.add('hidden')
    document.querySelector('#baby').classList.add('hidden')
    document.querySelector('#zeniba').classList.add('hidden')
}
// Baby
function clickBaby() {
    document.getElementById('clickBaby').classList.toggle('active')
    document.querySelector('#baby').classList.toggle('hidden')

    document.getElementById('clickChihiro').classList.remove('active')
    document.getElementById('clickHaku').classList.remove('active')
    document.getElementById('clickNoFace').classList.remove('active')
    document.getElementById('clickKamaji').classList.remove('active')
    document.getElementById('clickSootSprites').classList.remove('active')
    document.getElementById('clickLin').classList.remove('active')
    document.getElementById('clickYubaba').classList.remove('active')
    document.getElementById('clickZeniba').classList.remove('active')

    document.querySelector('#chihiro').classList.add('hidden')
    document.querySelector('#haku').classList.add('hidden')
    document.querySelector('#noFace').classList.add('hidden')
    document.querySelector('#kamaji').classList.add('hidden')
    document.querySelector('#sootSprites').classList.add('hidden')
    document.querySelector('#lin').classList.add('hidden')
    document.querySelector('#yubaba').classList.add('hidden')
    document.querySelector('#zeniba').classList.add('hidden')
}
// Zeniba
function clickZeniba() {
    document.getElementById('clickZeniba').classList.toggle('active')
    document.querySelector('#zeniba').classList.toggle('hidden')

    document.getElementById('clickChihiro').classList.remove('active')
    document.getElementById('clickHaku').classList.remove('active')
    document.getElementById('clickNoFace').classList.remove('active')
    document.getElementById('clickKamaji').classList.remove('active')
    document.getElementById('clickSootSprites').classList.remove('active')
    document.getElementById('clickLin').classList.remove('active')
    document.getElementById('clickYubaba').classList.remove('active')
    document.getElementById('clickBaby').classList.remove('active')

    document.querySelector('#chihiro').classList.add('hidden')
    document.querySelector('#haku').classList.add('hidden')
    document.querySelector('#noFace').classList.add('hidden')
    document.querySelector('#kamaji').classList.add('hidden')
    document.querySelector('#sootSprites').classList.add('hidden')
    document.querySelector('#lin').classList.add('hidden')
    document.querySelector('#yubaba').classList.add('hidden')
    document.querySelector('#baby').classList.add('hidden')
}