# safe-filename
[![](https://img.shields.io/npm/v/safe-filename.svg)](https://www.npmjs.com/package/safe-filename) ![](https://img.shields.io/badge/dependencies-none-blue.svg) ![](https://img.shields.io/npm/l/safe-filename.svg)

Convert strings to a valid filenames or filepaths by replacing all reserved characters from UNIX and POSIX systems. It attempts to maintain the legibility of the original path or name by replacing each character from the reserved set `<>:"/\|?*` with a visually similar unicode character. Also guarantees no `.` at the end of a directory's or file's name.
