input.onGesture(Gesture.TiltRight, function () {
    led.plotBrightness(4, 4, 255)
    basic.showLeds(`
        # . . . #
        # . # . #
        . # # # .
        # . # . #
        # . . . #
        `)
})
input.onSound(DetectedSound.Quiet, function () {
    led.enable(true)
    basic.showLeds(`
        # # . # #
        . . # . .
        . # . # .
        . . # . .
        # # . # #
        `)
})
