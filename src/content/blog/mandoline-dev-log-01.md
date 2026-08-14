---
title: "Elektron Syntakt Firmware 1.4: A Dub Techno Producer's First Look"
description: "Twin Shot, track relations, selective Control All and choke groups — the Syntakt 1.4 update from a dub techno angle, with the real limits and the features that actually change how you build patterns."
date: 2026-03-05
category: tutorial
topic: Hardware
tags: ["dub-techno", "hardware", "sound-design"]
youtube: "L5daPhp3ooI"
duration: "24:10"
---

## TL;DR

- **Twin Shot: the new sample machine** — what it actually is, and the real limits (64 slots total, 5 seconds max, slower reboot)
- **Track relations: turning three tracks into one synth voice** — trigger multiple tracks together from a single master
- **Building minor chords from layered tracks** — tuning individual tracks to stack a chord from completely different sound sources
- **Selective Control All: the real game changer** — finally editing a handful of tracks at once without wrecking everything else
- **Custom synths and the tone engine noise trick** — stacking machines into one voice, plus a feedback trick for new noise flavors
- **Filter panning and the two-notch stereo trick** — splitting one filter into two across the stereo field
- **Choke groups: ducking one track from another** — built-in sidechain-style ducking without extra automation
- **Twin Shot in practice** — chord stabs, layering two slots, decay shaping, looping, and reverse playback
- **Final thoughts** — where this update actually lands for dub techno

## What's New in 1.4

Got about 50 minutes with the update yesterday, and I wanted to go through it specifically from a dub techno angle rather than doing a full feature dump. The headline is obviously Twin Shot, the new sample machine — but the update also reworks choke groups, track triggers, and generally how tracks interact with each other in a pretty significant way. Let's get into it.

## Twin Shot: The New Sample Machine

Twin Shot is the new sample machine, and it's worth being precise about what it actually gives you. You'll need the updated Transfer app — the old one only lets you browse sounds and projects, the new one is what actually lets you load samples onto the machine.

The numbers to know: 64 sample slots **total**, and that's for the whole machine, not per project. Each sample can run up to 5 seconds, which is plenty of room — long enough for textures, chord stabs, not just one-shots and transients. The trade-off is boot time: load in a lot of long samples and a reboot can take up to two minutes. And yes, 64 slots for the entire machine sounds like a limitation on paper. In practice, I'm not going to complain about it.

## Track Relations: Turning Multiple Tracks into One Synth

This is where things get genuinely interesting. Under Settings → Pattern → Track Relations, you can designate one track as the master (marked with a star) and have other tracks follow along with whatever you play on it.

I set this up with three tracks running the same basic synth patch, made track one the trigger, and set tracks two and three to follow. Hit a note on track one, and all three fire together — you can see it happening on the LEDs. At this point they're all just doing the same thing, but that's about to change.

## Building Minor Chords from Layered Tracks

Once the tracks are linked, you tune each one individually — and this is the part that trips people up: you can't do this from the Trig page, because the note played there is inherited from the master track. You have to go to the Tuning page instead.

Tune track two up 3 semitones and track three up 7, and suddenly you've got a minor chord — built from three separate tracks, potentially three completely different sound sources or machines. Before this update, getting there meant going into every single track individually and matching up filter, amp, and every other parameter by hand, or using the old Control All and accepting that it touched everything, whether you wanted it to or not.

## Selective Control All (the Real Game Changer)

This is the feature I've genuinely been wishing for. With the old Control All, any tweak hit every track — no way to isolate a group. Now you can select exactly which tracks respond to Control All and leave the rest untouched.

Group your three chord tracks, deselect everything else, and you can sweep the filter across all three as if they were one synth — while your kick or noise layer sits completely unaffected. Build out a pattern, shuffle through the individual tracks, and you can confirm the same settings landed on all three. That alone changes how you'd approach building layered voices on this machine.

## Custom Synths and the Tone Engine Noise Trick

Because track relations let you mix and match machines freely, you can build what's essentially a custom synth out of completely different engines — an analog machine on one track, something more FM-flavored on another, stacked into a single chord voice.

While I was in there, found a nice side trick: on the Tone machine, push the send engine's feedback and mod all the way up and you get a genuinely different flavor of noise — good as a texture layer on top of a chord. One thing worth flagging: track relations only affects triggering and sequencing, not Control All grouping. Those are two separate settings, so a noise layer won't accidentally get pulled into your chord tweaks unless you also add it to your Selective Control All group.

## Filter Panning and the Two-Notch Stereo Trick

New filter panning splits what used to be one mono filter into two, spread across the stereo field — higher frequencies pan one direction, lower frequencies the other, and you can flip which way. Route your delay into the effects track, reset stereo width to zero first so you're starting from center, and let the delay do the spreading — the result gets big fast. Headphones recommended for actually hearing what's going on here.

The two-notch filter shows this off especially well — genuinely surprising how stereo one sound can become. Small but nice UX touches came along with it too: dot indicators to page between the two per-track pages, and a cleaner-looking mod/LFO selection screen.

One limitation worth knowing: parameter locks don't work on a Control All selection. You can automate individual tracks, but not the grouped selection itself — good to know before you go looking for that option.

## Choke Groups: Ducking One Track From Another

Also under Track Relations, you can now set choke groups using up/down. Pick a master track — I used a 909 hi-hat — and designate another track, in this case a noise layer, to be choked by it. Every time the hi-hat fires, the noise gets ducked, giving you a sidechain-style pump without setting up any actual sidechain or automation.

Two things worth knowing before you build around this: the ducked track drops but doesn't come back up on its own, so if you want continuous ducking you need the choked track filled with sustained sound the whole way through. And the ducking behavior is tied to the trigger length of the master track's trig — not the length of the sample or sound actually playing on it.

## Twin Shot in Practice: Chords, Layering, and Reverse Playback

This is where Twin Shot earns its name — you get two sample slots per track, which means real layering, not just picking one sound. Loaded in some dub techno chord stabs and started mixing and matching between the two slots.

Each slot gets its own low-pass/high-pass filtering and tuning, plus a decay control on slot one — handy if, say, you want a sharp transient click on slot one layered over a beefy sustained kick body on slot two. You can modulate the mix between the two slots with an LFO for movement, then throw delay on top for more.

A short trigger length on a choke source gives a genuinely nice rhythmic ducking effect worth experimenting with. Samples can also loop infinitely if they're short enough, and reverse playback is built in — negative sample slot numbers play the same sample backwards. Good for the weirder, more organic textures — the kind of thing that works well for creature or texture sounds you wouldn't get any other way.

## Final Thoughts

Worth being clear about what this isn't: Twin Shot doesn't turn the Syntakt into a full-blown sampler or rhythm machine. What it does do is give you a genuinely different way to bring samples into the box, and it does it well.

The update is free, which — always worth saying out loud. If you're sitting on Syntakt project files from before 1.4, it's worth going back through them with these new tools in mind: track relations, selective Control All, and choke groups all open up ways to rebuild patterns you already know.
