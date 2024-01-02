function button () {
    ButtonVal = pins.analogReadPin(AnalogPin.P2)
    if (ButtonVal < 256) {
        ButtonNum = 5
        radio.sendNumber(5)
    } else if (ButtonVal < 597) {
        ButtonNum = 6
        radio.sendNumber(6)
    } else if (ButtonVal < 725) {
        ButtonNum = 7
        radio.sendNumber(7)
    } else if (ButtonVal < 793) {
        ButtonNum = 8
        radio.sendNumber(8)
    } else if (ButtonVal < 836) {
        ButtonNum = 9
        radio.sendNumber(9)
    } else if (ButtonVal < 938) {
        ButtonNum = 0
        radio.sendNumber(10)
    } else {
        ButtonNum = -1
        radio.sendNumber(-1)
    }
}
let ButtonVal = 0
let ButtonNum = 0
radio.setGroup(11)
ButtonNum = -1
basic.forever(function () {
    button()
    if (ButtonNum == -1) {
        if (pins.analogReadPin(AnalogPin.P0) < 400) {
            radio.sendNumber(4)
            basic.showNumber(4)
        } else if (pins.analogReadPin(AnalogPin.P0) > 600) {
            radio.sendNumber(2)
            basic.showNumber(2)
        } else if (pins.analogReadPin(AnalogPin.P1) < 400) {
            radio.sendNumber(3)
            basic.showNumber(3)
        } else if (pins.analogReadPin(AnalogPin.P1) > 600) {
            radio.sendNumber(1)
            basic.showNumber(1)
        } else {
            basic.clearScreen()
        }
    }
    if (ButtonNum != -1) {
        basic.showNumber(ButtonNum)
    }
    basic.pause(50)
})
