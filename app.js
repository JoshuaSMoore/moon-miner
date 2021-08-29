let resource = 0
let Str = 0
let Focus = 0
let Item2 = 0
let Pass2 = 0
let sPrice = 20
let dPrice = 50
let buff1 = 100
let buff2 = 200
let sMulti = 0
let dMulti = 0
let hpBuff = 0
let xpBuff = 0
let passiveTotal = 0
let totalBonus = 0

let Clickupgrades = {
  str: {
    quantity: 0,
    multiplier: 0,
    price: 20
  },
  item: {
    quantity: 0,
    multiplier: 0,
    price: 0,
  }
  }
let autoUpgrades = {
  focus: {
    quantity: 0,
    multiplier: 0,
    price: 0
  },
  pass: {
    quantity: 0,
    multiplier: 0,
    price: 0,
  }
}


function mine(){
  resource++
  for(let key in Clickupgrades){
  resource +=  Clickupgrades[key].multiplier * Clickupgrades[key].quantity
  console.log(resource)
  document.getElementById('resourceCount').innerText = Math.round(resource).toString()
  }
}

function strBuy(key){
  if(resource >= sPrice){
    resource -= sPrice
    sPrice += 20
    Str += 1
    Clickupgrades[key].quantity += 1
    Clickupgrades[key].multiplier += .5
    sMulti += Clickupgrades[key].multiplier * Clickupgrades[key].quantity
    totalBonus += sMulti
  } else   
  // @ts-ignore
  Swal.fire({
    toast: true,
    text: 'Click Faster, Try Again',
    position: 'center',
    timer: 3000,
    timerProgressBar: true,
    imageUrl: 'https://thumbs.gfycat.com/DisloyalInbornCardinal-max-1mb.gif'
   })
  document.getElementById('strCount').innerText = Str.toString()
  document.getElementById('sPrice').innerText = sPrice.toString()
  document.getElementById('sMulti').innerText = sMulti.toString()
  document.getElementById('totalBonus').innerText = totalBonus.toString()
  update()
}

function ItemTwo(key){
  if(resource >= 50){
    resource -= dPrice
    dPrice += 50
    Item2 ++
    Clickupgrades[key].quantity += 1
    Clickupgrades[key].multiplier += 1.25
    dMulti += Clickupgrades[key].multiplier * Clickupgrades[key].quantity
    totalBonus += dMulti
  }else 

  Swal.fire({
    toast: true,
    text: 'Lololololololololololol',
    position: 'center',
    timer: 3000,
    timerProgressBar: true,
    imageUrl: 'https://thumbs.gfycat.com/DisloyalInbornCardinal-max-1mb.gif'
   })
  document.getElementById('itTwo').innerText = Item2.toString()
  document.getElementById('dPrice').innerText = dPrice.toString()
  document.getElementById('dMulti').innerText = dMulti.toString()
  document.getElementById('totalBonus').innerText = totalBonus.toString()
  update()
  
}
function focusUp(key){
  if(resource >= 100){
    resource -= buff1
    buff1 += 100
    Focus += 1
    autoUpgrades[key].quantity += 1
    autoUpgrades[key].multiplier += 5
    hpBuff += autoUpgrades[key].multiplier * autoUpgrades[key].quantity
    passiveTotal += hpBuff
 } else   

 Swal.fire({
  toast: true,
  text: 'Negative Ghost Rider',
  position: 'center',
  timer: 3000,
  timerProgressBar: true,
  imageUrl: 'https://thumbs.gfycat.com/ChubbyHideousIndochinesetiger-max-1mb.gif'
 })
   document.getElementById('focusCount').innerText = Focus.toString()
   document.getElementById('buff1').innerText = buff1.toString()
   document.getElementById('hpBuff').innerText = hpBuff.toString()
   document.getElementById('autoBonus').innerText = passiveTotal.toString()
   update()
  
}
function passUp(key){
  if(resource >= 200){
    resource -= buff2
    buff2 += 200
    Pass2 += 1
    autoUpgrades[key].quantity += 1
    autoUpgrades[key].multiplier += 10
    xpBuff += autoUpgrades[key].multiplier * autoUpgrades[key].quantity
    passiveTotal += xpBuff
 } else   

  Swal.fire({
  toast: true,
  text: 'Nope Nope Nope Too Broke',
  position: 'center',
  timer: 3000,
  timerProgressBar: true,
  imageUrl: 'https://thumbs.gfycat.com/ChubbyHideousIndochinesetiger-max-1mb.gif'
 })
   document.getElementById('passCount').innerText = Pass2.toString()
   document.getElementById('buff2').innerText = buff2.toString()
   document.getElementById('xpBuff').innerText = xpBuff.toString()
   document.getElementById('autoBonus').innerText = passiveTotal.toString()
  update()
}





function autoInterval(collectionInterval){
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
}
autoInterval()


function collectAutoUpgrades(){
  for(let key in autoUpgrades){
resource += autoUpgrades[key].multiplier * autoUpgrades[key].quantity
console.log(resource)
document.getElementById('resourceCount').innerText = Math.round(resource).toString()
  }
}


function update(){
document.getElementById('resourceCount').innerText =resource.toString()
}


