'Launch proxy check bat file as hidden (no quick-flashing command prompts)
Set WShShell = WScript.CreateObject("WScript.Shell")
WShShell.Run """%APPDATA%\proxy\proxy-check.bat""", 0