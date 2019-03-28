::Automatically configure proxy settings

::Ping proxy.prv to see if it exists...
::-If it exist, the current workstation is in the department's network, so call proxy-yes.bat
::-If it doesn't exist, the current workstation is outside the department's network, so call proxy-no.bat
ping -n 1 proxy.prv >nul &&(
call "%~dp0proxy-yes.bat"
)||(
call "%~dp0proxy-no.bat"
)