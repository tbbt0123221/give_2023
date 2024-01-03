def button():
    global ButtonVal, ButtonNum
    ButtonVal = pins.analog_read_pin(AnalogPin.P2)
    if ButtonVal < 256:
        ButtonNum = 5
        radio.send_number(5)
    elif ButtonVal < 597:
        ButtonNum = 6
        radio.send_number(6)
    elif ButtonVal < 725:
        ButtonNum = 7
        radio.send_number(7)
    elif ButtonVal < 793:
        ButtonNum = 8
        radio.send_number(8)
    elif ButtonVal < 836:
        ButtonNum = 9
        radio.send_number(9)
    elif ButtonVal < 938:
        ButtonNum = 0
        radio.send_number(10)
    else:
        ButtonNum = -1
        radio.send_number(-1)
ButtonVal = 0
ButtonNum = 0
radio.set_group(11)
ButtonNum = -1

def on_forever():
    button()
    if ButtonNum == -1:
        if pins.analog_read_pin(AnalogPin.P0) < 400:
            radio.send_number(4)
            basic.show_number(4)
        elif pins.analog_read_pin(AnalogPin.P0) > 600:
            radio.send_number(2)
            basic.show_number(2)
        elif pins.analog_read_pin(AnalogPin.P1) < 400:
            radio.send_number(3)
            basic.show_number(3)
        elif pins.analog_read_pin(AnalogPin.P1) > 600:
            radio.send_number(1)
            basic.show_number(1)
        else:
            basic.clear_screen()
    if ButtonNum != -1:
        basic.show_number(ButtonNum)
    basic.pause(50)
basic.forever(on_forever)
