const safe = require('./index')

console.log(safe.path('feeling/Super Special < The Test: Sudoku/Banana Bread?/Yolo./Dunts'))
console.log(safe.name('Super Special < The Test: Sudoku\\Banana Bread'))
