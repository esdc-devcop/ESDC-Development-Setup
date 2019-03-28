# ESDC Proxy Scripts

Using an ESDC laptop for external project development? Not using VPN? Then use this page's scripts to make life painless when attending code sprints!

When logging into Windows, the scripts will automatically check to see if you're behind the department's proxy. If you're detected as being behind the proxy, it'll automatically configure all your proxy settings and launch Skype. Otherwise, it'll remove all your proxy settings and skip Skype.

## Statup Script

Copy this file [`proxy-check-hidden.vbs`](proxy-scripts/proxy-check-hidden.vbs)  
And move it to `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup`

## The Scripts

Copy these files 

- [`proxy-check.bat`](proxy-scripts/proxy-check.bat)  
- [`proxy-yes.bat`](proxy-scripts/proxy-yes.bat)  
- [`proxy-no.bat`](proxy-scripts/proxy-no.bat)  

And move them to `%APPDATA%\proxy-scripts`
