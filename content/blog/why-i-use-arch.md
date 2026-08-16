---
title: "Why I Use Arch, btw"
date: 2026-06-24
author: "Hari Chalise"
authorLink: "https://x.com/harilvfs"
tags: ["linux", "arch", "bash"]
categories: ["linux"]
---

**I've been using [Arch Linux](https://archlinux.org) for 3 years now I guess, and here's why i love it and just works for me.**

*Also this is my linux journey.*

It's been 4 years since I started daily driving Linux. I started using Linux with Debian-based distros like [Zorin](https://zorin.com/os/) and [Debian](https://www.debian.org) itself. But after going back and forth and not understanding much, I started to distro hop.

First I tried [Garuda Linux](https://garudalinux.org/), an Arch-based distro. And I can still say that it was the best Arch-based distro for me at that time. This is personal though, there were other options too like [EndeavourOS](https://endeavouros.com/), [Archcraft](https://archcraft.io/), [Artix](https://artixlinux.org/), [Arco](https://arcolinux.com/) and so on. [CachyOS](https://cachyos.org/) was not there when I started using Linux.

But they did not really go with my choice, so I stuck with [Garuda Linux](https://garudalinux.org/) for around a year I guess. Not one full year of only using that distro though, because I was still distro hopping and trying many Linux distributions like [Debian](https://www.debian.org), [openSUSE](https://www.opensuse.org/), [Fedora](https://fedoraproject.org/), [Void Linux](https://voidlinux.org/) and so on.

But still, I used them for some time and they didn't satisfy me as per my needs or work. But I can say [Fedora](https://fedoraproject.org/) is a very good distro in terms of stability and use case.

I do not prefer [Debian](https://www.debian.org) because it has fucking decades old packages, and a lot of packages that I use daily are either not available or I need to compile them from source or use Flatpak. [openSUSE](https://www.opensuse.org/) is kind of nah. [Void](https://voidlinux.org/) is a non-systemd distro, kinda nice, but it didn't work for me at all.

And after all this shenanigan, I went back to [Garuda Linux](https://garudalinux.org/) again.

## Why I didn't use Arch directly at first

If you are thinking why I hadn't used [Arch Linux](https://archlinux.org) itself at that time and was only using an Arch-based distro, well, it was because that was the beginning of my Linux journey and I was still learning things. And at that time Arch was super hard to install according to all the sources. Yeah, I tried several times to install it, but failed badly.

But I stayed on [Garuda Linux](https://garudalinux.org/) and learned most of the Linux stuff there. I started coding, writing Bash scripts, automating things, breaking stuff, and fixing things along the way. After doing this for some months, I kind of had the confidence that I could use any Linux distro at that time.

And then I went to the [Arch Linux](https://archlinux.org) website, downloaded the ISO, flashed it, and plugged it into my 10 year old laptop.

Annndd, again, it sucked. I always missed something and broke the install each time. Sometimes the partitioning, sometimes GRUB not installing correctly, keyring issues, and other stuff in the ways.

But still, I didn't give up there because I had that courage at that time that "I can". Most of the time I gave up, but I always came back after some time and kept trying for weeks to install Arch, watching videos, reading the web and all. I guess at that time the AI thing was still kinda new, so it also didn't help much.

If you are thinking why I didn't use the `archinstall` tool, it's because I just didn't want to. It wouldn't help me learn anything anyway.

If I used that, it would feel like cheating to me. So I never went that route and instead finally started reading the `Arch Wiki`.

## Finally installing Arch

And at that time, when I started reading the [Arch Wiki](https://wiki.archlinux.org/) line by line, I started understanding where I was making mistakes. My old laptop uses BIOS boot, not UEFI, and I was messing up the partitioning. Also, the GRUB install process is totally different for legacy BIOS. The pacstrap install too, and then the main keyring issue. Now I finally knew how to solve and set things up properly.

So I sat on my chair, plugged in the pendrive, selected the [Arch Linux](https://archlinux.org) ISO, and first of all fixed the keyring issue. Boom, package installation worked now. One issue down. Then the partition part went perfectly, using the proper BIOS boot setup for legacy BIOS. `Timezone`, `NetworkManager`, `pacstrap`, `GRUB`, all went well.

And then again boom, I could see GRUB on boot and the [Arch Linux](https://archlinux.org) TTY. Oh boy, finally, after a year, I was able to install [Arch Linux](https://archlinux.org) manually. That happiness was next level at that time.

That's how my [Arch Linux](https://archlinux.org) journey started. Then I started doing everything manually, installing my WM (DWM), packages, configuring, customization, system services, and all the things that someday I never knew.

Now after 4 years of using Linux, I am on [Arch Linux](https://archlinux.org) and I can say I never distro hopped after that. I never looked at any other distro again. I just got the pleasure and working environment that I wanted, because the thing here is that everything is made by myself, starting from the WM to the coding environment, Neovim, terminal and so on.

After using [Arch Linux](https://archlinux.org), my love for Linux grew a lot>. I love Linux, the open source community, and the people around it. They are just awesome. I got to learn many things from open source. From there I started to contribute, learn on the way, make mistakes, and fix them myself. That is what the Linux journey is for me. I code, I break, I fix, I learn, and that is the happiness I get from it.

## Why [Arch Linux](https://archlinux.org) is better for me

I also wanna mention the key points for why [Arch Linux](https://archlinux.org) is better for me, and maybe for you too.

### Rolling release

This can be a downside sometimes because you get very new package updates, and sometimes that can cause issues or breakage. But if you want to use the latest packages and the latest kernel, then having a rolling release is a very good thing. I just prefer having up-to-date packages rather than using years old ones.

### Minimal by default

[Arch Linux](https://archlinux.org) itself is very minimal. On a fresh install, you get almost nothing except a TTY environment with the basic packages installed (300 packages i guess). That is not much at all. One of the main reasons [Arch](https://archlinux.org) is so good for me is that there is no bloat. I hate bloatware, and I just want a clean environment with nothing extra where I can install only the things I actually want.

### The Arch Wiki

The [Arch Wiki](https://wiki.archlinux.org/) is legendary. It is not only useful for Arch, it also helps on many other distros too. You can find almost everything you need to debug, fix or learn something. That doesn't mean every single issue you face will be there, but most things are. The [Arch Wiki](https://wiki.archlinux.org/) has always been one of the best places for me whenever I run into an issue or want to understand something. I think even new Linux users can get answers to many of their problem's there.

### The AUR  ([Arch User Repository](https://aur.archlinux.org/))

The [AUR](https://aur.archlinux.org/) is a user-maintained repository where anyone can upload packages. And it is also one of the main reasons why people prefer [Arch Linux](https://archlinux.org). On other distros, you may need to use Flatpak, Snap(ewww) or compile from source, which is not for everyone. But on Arch, with AUR, you can usually find the package you want maintained by someone from some corner of the world.

Every time I thought a package was missing, I checked the [AUR](https://aur.archlinux.org/) and there was a good chance someone was already maintaining it.

But since anyone can upload packages, that is also one of the downsides of the [AUR](https://aur.archlinux.org/). If a bad actor uploads something malicious thing, it can stay there because it is a user-maintained repository. Recent cases like the 1500+ malware package incident are exactly why the [AUR](https://aur.archlinux.org/) cannot be blindly treated as the best option. And maybe this is also why some users may switch to another distro in the future if things keep going that way.

[Arch Linux](https://archlinux.org) itself does not officially treat/support the [AUR](https://aur.archlinux.org/) as part of the official repositories, and Arch does not encourage people to use it blindly. It is more of a "use at your own risk" thing, because these are user-maintained packages, not packages maintained by Arch Linux maintainers.

The official [Arch](https://archlinux.org) repositories through pacman are safe and maintained by Arch Linux maintainers, not random user. So using the official repositories is fine. The [AUR](https://aur.archlinux.org/) is completely optional, and you need to take responsibility for what you install from it. You should check the `PKGBUILD`, `reviews`, `comments`, and only install it if it looks safe and clean.

So yeah, the [AUR](https://aur.archlinux.org/) has both advantages and disadvantages, but it is still one of the main highlights of [Arch Linux](https://archlinux.org).

## How I use it

Mostly I use the official repo packages, and only 3 or 4 [AUR](https://aur.archlinux.org/) packages that are from known maintainers and have no issues. So I also recommend people use the official repo as much as possible. But if you want a package that is not available there, then use the [AUR](https://aur.archlinux.org/), just don't be lazy. Review the PKGBUILD, read the package page, and search around if needed. It is totally your;s responsibility and it is your own risk.

That is one of the key points for why I use [Arch](https://archlinux.org). Most of the time I stay in the terminal and have a browser open, that's it. I don't really need anything else. All my work gets done in those two places, so the system stays clean, workable, and stable because I only use the things I actually want. Even though [Arch](https://archlinux.org) is rolling release, I update my system once a week or once a month, so I don't rush to update my system every next day. I also use fewer packages, so I don't get into much trouble.

## Final Thoughts

[Arch](https://archlinux.org) isn't for everyone, and that's fine. But if you like control, minimalism, and learning how your system actually works, [Arch](https://archlinux.org) is a distro you should try at least once. Install it manually, set everything up yourself, and I bet you will love that experience.

That's it from my side. Thanks for reading. If you got anything from this post, you can leave a comment :)
