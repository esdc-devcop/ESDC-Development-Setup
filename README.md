# ESDC Development Workstation - Setup Guide

This guide outlines how to set up your ESDC departmental workstation.  
We will help you set up the networking configurations so you can pull from GitLab and GitHub.
This will also help you install node.js; which you will need to work on many projects on these sites.

## Prerequisites

* Administrative Privliages
* Account on eith GitLab or GitHub with 2FA enabled and an access token.

## Network

### Proxy settings

If you are working on these external project daily, you should consider following all the setps in [ESDC Proxy Scripts](proxy-scripts.md). Otherwise you can just run the commands from [proxy-yes.bat file](proxy-scripts/proxy-yes.bat).

This will automatically configure all your proxy settings.

## Software

### Git for Windows

1. Download the latest version of it from [Git for Windows' website](https://git-for-windows.github.io/).
2. Install it with default options, *except* for the following steps:
    1. **Select Components**  
    Uncheck "*Windows Explorer integration*" if you only intend to use the command line or a different Git GUI than the one that's built-into Git for Windows. Other Git GUIs (such as TortoiseGit) come with their own Windows shell extensions.
    2. **Choosing the default editor used by Git**  
    Select your preferred text editor in the dropdown list. If your preferred editor isn't listed, use the default option ("Use Vim").
    3. **Choosing HTTPS transport backend**  
    Tick "Use the native Windows Secure Channel library" to make Git rely on the department's internal Root CA certificates for any HTTPS connections it establishes.  
    **Note:** This may not work outside of the department's network (need confirmation).
3. Open a command prompt and enter the following commands:
    * ``git config --global user.name "Your name"`` (replace ``Your name`` accordingly)
    * ``git config --global user.email email@domain.com`` (replace ``email@domain.com`` with your email address)

### TortoiseGit (skippable if using command line or another Git GUI)

1. Download the latest 64-bit version from the [TortoiseGit website's download page](https://tortoisegit.org/download/).
2. Install it with default recommended settings, *except* for the following step:
    1. **Custom setup**  Open the dropdown beside "Crash Reporter" and pick "Entire feature will be unavailable".

### Node.js

1. Download the [latest Node.js LTS Windows 64-bit installer](https://nodejs.org/en/).
2. Install it with default recommended settings.