---
title: "Old-school Web Apps using CGI"
description: ""
date: "2025-05-19"
tags: ["linux", "webdev"]
---

I know I'm late to the party, but I've been exploring the old web movement and loving it lately. While going through endless [wiki links](https://tilde.club/wiki/cgi.html), I discovered a little thing called CGI scripting for building websites. And as an avid shitty website-builder myself, of course I had to try it out.

This project is built and hosted on [tilde.club](https://tilde.club). I will not touch on the server-side configuration for building CGI websites as it is managed fully by the website admins, which I am thankful for.

## Picking a language

After years of programming and getting stuck on deciding frameworks and languages, I've grown to hate the whole process of deciding on every single minute detail before I even start. So I chose Perl for the sole reason that the wiki says that "Perl was the main language of choice back in the heyday of CGI programming.", despite never having used Perl before. And being an xkcd fan, I've always felt left out on the Perl jokes.

## Basics

```perl
  #!/usr/bin/perl
  print "Status: 200";
  print "Content-Type: text/plain";
  print "";
  print "Hello World!";
```

Just look at it. It looks almost stupidly simple, but after copying it to my `public_html` folder, it works _flawlessly_. Well, after forgetting to and then changing the executable permissions, it works _flawlessly_.

## Silly features

The first thing I made was the quintessential counter.

```perl
# functions to read and update the counter file
sub read_counter {
    if (-e $counter_file) {
        open(my $fh, "<", $counter_file) or die "Cannot open file $counter_file: $!";
        my $visits = <$fh>;
        close($fh);
        return $visits;
    } else {
        return 0;
    }
}
sub update_counter {
    my ($visits) = @_;
    open(my $fh, ">", $counter_file) or die "Cannot open file $counter_file: $!";
    print $fh $visits;
    close($fh);
}
```

Calling these functions on page load every time, I save the counter values to `$counter_file`
As of 2025-07-02, the website's been loaded 6414 times!

## Etc

There's also a bunch of other features I added, including a message board and a like system. Feel free to look at my mess of a codebase to see how they work.
Have fun making your own CGI app!

## Links

- [CGI webpage - tilde.club/troubadour](https://tilde.club/~troubadour/)
- [Github repo](https://github.com/BadLoaf/tilde_cgi)
- [CGI - Making web applications like it’s 90s](https://tilde.club/wiki/cgi.html)
