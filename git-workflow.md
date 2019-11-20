# Git workflow - GCWeb

by @shawnthompson

This is a page created to share my Git workflow for the GCWeb project on Github. Using Git Bash or Teminal on either Mac or Linux.

## Cloning and Installation

1. fork [GCWeb repo](https://github.com/wet-boew/GCWeb)
1. `git clone https://github.com/**_username_**/GCWeb.git`
1. `cd GCWeb`
1. `git remote add upstream https://github.com/wet-boew/GCWeb.git`

## Building WET

1. `./scripts/setup` // creates the _lib_ and _node_modules_ folders
2. `grunt` // creates the _dist_ folder

## Maintenance / Changes

1. `git pull upstream master` // make sure your local master is checked out
1. `git checkout -b _new branch_`
1. make changes
1. build your _dist_ folder
    * `grunt`
1. test your changes
1. `git add .`
1. `git commit -m "_new commit message_"`
1. `git push origin _new branch_`
1. On Github in your repo page, make a new pull request.
1. Once merge has been made, repeat steps 1 and 2.
1. `git branch -d _new branch_`

## Useful Git commands  

* `git rebase _master_` // updates the active branch with missing commits from the tragetted _branch_, this case _master_
* `git log` // lists the commits (q to exit list in terminal)
* `git log --oneline` // lists the commits in just a single line
* `git commit --amend` // adds the staged changes into the last commit and give you the option to change your commit message
* `git status` // views what files have been changed in your repo
* `git rebase -i HEAD~#` // # being the number of commits you want to be listed in your rebase, you can than [squash commits](http://`gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html) together
* `git branch` // lists all the branches
* `git branch -a` // lists all the branches including the remote ones
* `git remote -v` // lists all the remotes and their URIs
* `git reset [commit]` // Undoes all commits afer [commit], preserving changes locally
* `git reset --hard [commit]` // Discards all history and changes back to the specified commit

[Github Git Cheat Sheet (PDF)](https://github.com/github/training-materials/blob/master/downloads/github-git-cheat-sheet.pdf?raw=true")
