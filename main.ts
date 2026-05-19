input.onButtonPressed(Button.A, function () {
    broadcast = Math.constrain(broadcast - 1, 1, 9)
    basic.showNumber(broadcast)
})
input.onButtonPressed(Button.B, function () {
    broadcast = Math.constrain(broadcast + 1, 1, 9)
    basic.showNumber(broadcast)
})
let broadcast = 0
radio.setGroup(1)
radio.setTransmitPower(0)
broadcast = 1
basic.forever(function () {
    radio.sendNumber(broadcast)
    basic.pause(randint(500, 3000))
})
