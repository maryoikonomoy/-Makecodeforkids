let a = 0
let b = 0
// Πατώντας το A+B ελέγχουμε τις συνθήκες
input.onButtonPressed(Button.AB, function () {
    // AND: Αν το a είναι 5 ΚΑΙ το b είναι 10
    // OR: Αν το a είναι 3 Ή το b είναι 7
    // NOT: Αν το a ΔΕΝ είναι 5
    if (a == 5 && b == 10) {
        // Εικονίδιο για AND
        basic.showIcon(IconNames.Happy)
        basic.showString("A AND B")
    } else if (a == 3 || b == 7) {
        // Εικονίδιο για OR
        basic.showIcon(IconNames.Heart)
        basic.showString("A OR B")
    } else if (!(a == 5)) {
        // Εικονίδιο για NOT
        basic.showIcon(IconNames.Sad)
        basic.showString("NOT A")
    } else {
        // Εικονίδιο για NO MATCH
        basic.showIcon(IconNames.No)
        basic.showString("NO MATCH")
    }
})
// Πατώντας το A αυξάνουμε το a
input.onButtonPressed(Button.A, function () {
    a += 1
    basic.showString("A=" + a)
})
// Πατώντας το B αυξάνουμε το b
input.onButtonPressed(Button.B, function () {
    b += 1
    basic.showString("B=" + b)
})
