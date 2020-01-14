# ESDC Development Workstation - Setup Guide

This guide outlines how to set up your ESDC departmental workstation.
It will help you set up the networking configurations so you can pull from GitLab and GitHub.
This will also help you install software which you will need to work on many projects in ESDC.

## Network

### Proxy settings

If you are working on these external project daily, you should consider following all the steps in [ESDC Proxy Scripts](proxy-scripts.md). Otherwise you can just run the commands from [proxy-yes.bat file](proxy-scripts/proxy-yes.bat).

This will automatically configure all your proxy settings.

## Software

Most software you need can be downloaded through the [Application Catalog](http://srmis-sigdi-iagent.prv/WT-STO/iAgent/AppPortal/). Below we make not of some key software you will need to request.

### Git

Go to <http://srmis-sigdi-iagent.prv/WT-STO/iAgent/AppPortal/Home/Details/228> and click "Install".

**Suggested Settings:**

- Use 'Vim' as the default editor

**Configure Git**
Open a command prompt and enter the following commands replacing `"Your name"` and `"email@domain.com"` (It's suggested that you use your departmental email)

```bash
git config --global user.name "Your name"
git config --global user.email email@domain.com
```

### NuGet

The department has access to the NuGet repositories as well as hosting its own internal source for home brewed applications.
Check out the [ESDC NuGet User Guide](nugetuserguide.md).

### Node.js

Go to <http://srmis-sigdi-iagent.prv/WT-STO/iAgent/AppPortal/Home/Details/266> and click "Install".

## Attribution

This guide was copied from work originally created by [Eric Dunsworth](https://github.com/EricDunsworth).
