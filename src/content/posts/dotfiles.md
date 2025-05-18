---
title: "dotfiles"
description: ""
date: "2025-05-18"
tags: ["linux"]
---

Finally got around to setting up my dotfiles properly. After trying a custom written bash script with symlinks, stow, and looking up home-manager, I've settled on a bare git repository. It's simple, has no dependencies besides git, and just works. For a guide to set it up, use the [Atlassian Dotfiles Tutorial - Bare Git Repository](https://www.atlassian.com/git/tutorials/dotfiles).

## Workflow

I use neovim as my primary editor with tmux as a terminal multiplexer to manage my workspaces. The Primagen's [tmux-sessionizer](https://github.com/ThePrimeagen/.dotfiles) is the best tool I've found for my tmux workflow. Make sure to add double quotes around the variables that store folder names to make the script work for folders with spaces. See [my dotfiles](https://github.com/up-the-hill/dotfiles) for the fixed script.

I've also started to use KDE'S virtual desktops for quickly switching between workspaces, and I'm enjoying flitting between windows.

In the end, though, I don't think any of this is for any productivity boosts. Instead I'm just simplifying things that have annoyed me when I'm working on my projects. And it's fun.

## Links

- [My dotfiles](https://github.com/up-the-hill/dotfiles)
- [The Primagen's Dotfiles](https://github.com/ThePrimeagen/.dotfiles)
- [Atlassian Dotfiles Tutorial - Bare Git Repository](https://www.atlassian.com/git/tutorials/dotfiles)
