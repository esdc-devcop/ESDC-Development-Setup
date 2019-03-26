# ESDC WET Development - Setup Guide

This guide outlines how to get up and running for WET 4.0 development on a departmental workstation.

## Prerequisites
* Admin rights

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

### Proxy settings
1. Create a [proxy-yes.bat file](proxy-scripts.md#proxy-yesbat).
2. Run the file to automatically configure all your proxy settings.
3. If you're using a departmental laptop and attend code sprints, consider setting up all [ESDC Proxy Scripts](proxy-scripts.md) to make life easy.

## WET 4.0

### GitHub
1. [Create a GitHub account](https://github.com/join) and login.
2. Go to the [official wet-boew repository](https://github.com/wet-boew/wet-boew), click the "Fork" button on the top-right, then select your name.

### First-time setup
Open a normal command prompt and enter the following commands:

1. ``md C:\git``
2. ``cd C:\git``
3. ``git clone https://github.com/YOUR-GITHUB-USERNAME/wet-boew.git``
4. ``cd C:\git\wet-boew``
5. ``git remote add upstream https://github.com/wet-boew/wet-boew.git``
6. ``git fetch upstream``
7. ``git reset --hard upstream/master``
8. ``script\setup``

**Note:** If you run into any error messages, try running ``script\setup`` again. Certain kinds of errors only appear once in a blue moon and will go away after retrying.

### Building WET
Open a normal command prompt and enter the following commands:

1. ``C:``
2. ``cd git\wet-boew``
3. ``grunt``
  1. It'll output all compiled files to a \dist\ sub-folder.
  2. You can also enter ``grunt -h`` to view all of grunt's build options.

### Updating WET's build dependencies
Every once in awhile you may need to update your WET build dependencies if ``grunt`` fails. To do that, open a normal command prompt and enter the following commands:

1. ``C:``
2. ``cd git\wet-boew``
3. ``npm install``

### Troubleshooting build problems
If you run into hopeless problems with the build system, you can try resetting it via the following steps:

1. In C:\git\wet-boew\, delete your \lib\ and \node_modules\ sub-folders.
2. Open a command prompt and run the following commands:
  1. ``C:``
  2. ``cd git\wet-boew``
  3. ``npm cache clean``
  4. ``bower cache clean``
  5. ``script\setup``
  6. ``grunt``
4. If you're still having problems, try checking with colleagues that have similar setups, etc. If it's deemed to be a problem with WET itself, open a [GitHub issue](https://github.com/wet-boew/wet-boew/issues/new) about it.
