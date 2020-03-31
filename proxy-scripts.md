# ESDC Proxy Scripts

Using an ESDC laptop for external project development? Then use this page's scripts to make life painless!

When logging into Windows, the scripts will automatically check to see if you're behind the department's proxy. If you're detected as being behind the proxy, it'll automatically configure all your git and npm proxy settings. Otherwise, it'll remove all your git and npm proxy settings.

## Statup Script

Copy this file [`proxy-check-hidden.vbs`](proxy-scripts/proxy-check-hidden.vbs)  
And move it to `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup`

## The Scripts

Copy these files

- [`proxy-check.bat`](proxy-scripts/proxy-check.bat)  
- [`proxy-yes.bat`](proxy-scripts/proxy-yes.bat)  
- [`proxy-no.bat`](proxy-scripts/proxy-no.bat)  

And move them to `%APPDATA%\proxy\`
