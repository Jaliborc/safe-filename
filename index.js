exports.name = name => name
    .replace(/\.$/, 'ꓸ')
    .replace('?', '❓')
    .replace('\\', ' ⃥')
    .replace('/', '⟋')
    .replace('|', '│')
    .replace(':', '꞉')
    .replace('<', 'ᐸ')
    .replace('>', 'ᐳ')
    .replace('>', 'ᐳ')
    .replace('"', 'ᐦ')
    .replace('*', '꘎')

exports.path = path => require('path').join(... path.split(/\/|\\/).map(exports.name))
