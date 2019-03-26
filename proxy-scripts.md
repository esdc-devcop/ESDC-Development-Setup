# ESDC Proxy Scripts
Using an ESDC laptop for WET development? Not using VPN? Then use this page's scripts to make life painless when attending code sprints!

When logging into Windows, the scripts will automatically check to see if you're behind the department's proxy. If you're detected as being behind the proxy, it'll automatically configure all your proxy settings and launch Skype. Otherwise, it'll remove all your proxy settings and skip Skype.

## proxy-check-hidden.vbs
**File directory:** %APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup
```
'Launch proxy check bat file as hidden (no quick-flashing command prompts)
Set WShShell = WScript.CreateObject("WScript.Shell")
WShShell.Run """%APPDATA%\proxy\proxy-check.bat""", 0
```

## proxy-check.bat
**File directory:** %APPDATA%\proxy-scripts
```
::Automatically configure proxy settings

::Ping proxy.prv to see if it exists...
::-If it exist, the current workstation is in the department's network, so call proxy-yes.bat
::-If it doesn't exist, the current workstation is outside the department's network, so call proxy-no.bat
ping -n 1 proxy.prv >nul &&(
call "%~dp0proxy-yes.bat"
call "%~dp0proxy-yes-extra.bat"
)||(
call "%~dp0proxy-no.bat"
)
```

## proxy-yes.bat
**File directory:** %APPDATA%\proxy-scripts
```
::Automatically configure Git/NPM/system account proxy settings

::Git proxy settings
git config --global http.proxy http://%USERNAME%@proxy.prv:80
git config --global https.proxy https://%USERNAME%@proxy.prv:443
git config --global url."https://github.com/".insteadOf git@github.com:
git config --global url."https://".insteadOf git://

::Copy F: drive's Git config file to C: user profile
copy %HOMEDRIVE%\.gitconfig %USERPROFILE%\.gitconfig

::NPM proxy settings
if not exist "%APPDATA%\npm" mkdir %APPDATA%\npm
call npm config set proxy http://%USERNAME%@proxy.prv:80
call npm config set https-proxy http://%USERNAME%@proxy.prv:80

::System account proxy environment variables
setx HTTP_PROXY http://%USERNAME%@proxy.prv:80
setx HTTPS_PROXY http://%USERNAME%@proxy.prv:80
```

## proxy-yes-extra.bat
**File directory:** %APPDATA%\proxy-scripts

**Note:** To prevent Skype from always starting up even when not behind the proxy, open Skype's "Options" window, go to the "Personal" tab, then uncheck "Start the app in the foreground".
```
::Bonus things to do for convenience if the proxy is detected

::Launch Skype
start "%PROGRAMFILES(X86)%\Microsoft Office\Office16" lync.exe
```

## proxy-no.bat
**File directory:** %USERPROFILE%\proxy
```
::Automatically remove Git/NPM/system account proxy settings

::Git proxy settings
git config --global --remove-section http
git config --global --remove-section https
git config --global --remove-section url."https://github.com/"
git config --global --remove-section url."https://"

::NPM proxy settings
call npm config rm proxy
call npm config rm https-proxy

::System account proxy environment variables
setx HTTP_PROXY ""
setx HTTPS_PROXY ""
```
