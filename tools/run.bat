@echo off
:: Launch the Command Prompt windows
start cmd /k "unit tests.bat" 4444
start cmd /k localhost.bat 4444
start cmd /k watchFunctions.bat 5555
start cmd /k firebaseEmulator.bat 6666
start cmd /k "cd C:\users\sean5\Desktop\BENJI && C:\Program Files\nodejs\nodevars.bat"

