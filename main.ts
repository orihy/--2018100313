let 거리 = 0
basic.forever(function () {
    거리 = sonar.ping(
    DigitalPin.P3,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (거리 <= 5) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(1000)
    } else {
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(5000)
    }
})
basic.forever(function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P3,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
})
