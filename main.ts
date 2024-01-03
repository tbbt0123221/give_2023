function button () {
    ButtonVal = pins.analogReadPin(AnalogPin.P2)
    if (ButtonVal < 256) {
        ButtonNum = 5
        radio.sendNumber(5)
        led.plot(3, 2)
    } else if (ButtonVal < 597) {
        ButtonNum = 6
        radio.sendNumber(6)
        led.plot(4, 3)
    } else if (ButtonVal < 725) {
        ButtonNum = 7
        radio.sendNumber(7)
        led.plot(3, 4)
    } else if (ButtonVal < 793) {
        ButtonNum = 8
        radio.sendNumber(8)
        led.plot(2, 3)
    } else if (ButtonVal < 836) {
        ButtonNum = 9
        radio.sendNumber(9)
        led.plot(0, 4)
    } else if (ButtonVal < 938) {
        ButtonNum = 0
        radio.sendNumber(10)
        led.plot(1, 4)
    } else {
        ButtonNum = -1
        radio.sendNumber(-1)
    }
}
function はやさ () {
    if (input.isGesture(Gesture.LogoUp)) {
        led.plot(4, 0)
        led.plot(3, 0)
        radio.sendValue("spead", 25)
    } else {
        radio.sendValue("spead", 0)
    }
}
let ButtonVal = 0
let ButtonNum = 0
radio.setGroup(11)
ButtonNum = -1
basic.forever(function () {
    basic.clearScreen()
    led.plot(1, 1)
    led.plot(3, 3)
    はやさ()
    button()
    if (ButtonNum == -1) {
        if (pins.analogReadPin(AnalogPin.P0) < 400) {
            radio.sendNumber(4)
            led.plot(0, 1)
        } else if (pins.analogReadPin(AnalogPin.P0) > 600) {
            radio.sendNumber(2)
            led.plot(2, 1)
        } else if (pins.analogReadPin(AnalogPin.P1) < 400) {
            radio.sendNumber(3)
            led.plot(1, 2)
        } else if (pins.analogReadPin(AnalogPin.P1) > 600) {
            radio.sendNumber(1)
            led.plot(1, 0)
        }
    }
    basic.pause(200)
})
