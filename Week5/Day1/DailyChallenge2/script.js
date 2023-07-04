// Create a function that returns true if all parameters are truthy, and false otherwise.

function allTruthy(...vals) {
    for (const val of vals) {
        if (!val) {
            return false
        }
    }
    return true
}
