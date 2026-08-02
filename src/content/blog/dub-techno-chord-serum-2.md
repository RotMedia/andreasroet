\---

title: "Building a Dub Techno Chord in Serum 2, From Scratch"
description: "One saw oscillator, two delay buses and a light touch of compression — how to build a dub techno chord patch in Serum 2 that works as both a stab and a slow swell."
date: 2025-10-26
category: tutorial
topic: Sound Design
tags: \["dub-techno", "sound-design", "software"]
youtube: "vVNZ4VsDb\_s"
duration: "16:30"
---

## TL;DR

* **Starting simple: one oscillator and a filter envelope** — a basic saw wave, shaped, is all you need to begin
* **Serum 2 buses: what they are and why they matter** — containers for effects that let you build parallel processing chains
* **Bus one: delay as a send effect** — the setup details that actually make a send bus work
* **Reverb, mono width, and a slow-moving filter** — building density and a subtle phaser-like movement
* **Bus two: a second delay, deliberately different** — why matching your two delays' timing kills the effect
* **Compression: gluing it all together** — a light touch, not a crush
* **Shaping the envelope: from stab to swell** — one patch, two completely different roles in a track
* **The full signal chain, recapped**

## Starting Simple: One Oscillator and a Filter Envelope

Start with one of the analog wavetables — Model D for example — and use the "saw" wave from the wavetable.

Serum is polyphonic, so you can play a simple minor chord right away.

Hit the E-G-B for E minor or program a pattern that keeps playing.



Doesn't have to be complex, just a few hits to keep running in the Background as you tweak the patch.



Next, add some filtering. Drag ENV2 over the filter cut-off to shape it, make it snappy - but not too much!

Drop it an octave for some low-end weight, and layer in a touch of basic noise underneath.

At this stage it's not spectacular, and it shouldn't be — this is the foundation, not the finished sound.

## Serum 2 Buses: What They Are and Why They Matter

Here's the thing that makes Serum 2 worth digging into for this kind of patch: buses. A bus is a container for a set of effects — not a single insert slot, but a whole processing chain you can route oscillators into. You get two of them, and both route back into the main effects channel. That means you can build one processing chain in bus one, a completely different one in bus two, and glue both together at the main.

That's exactly the structure this patch uses: two different delay chains, each with its own character, recombining at the end.

## Bus One: Delay as a Send Effect

Set up a delay on bus one — and immediately hit the classic send-bus problem: nothing's audible. That's because you need to actually route your filtered signal into the bus for anything to reach it.

Once that's routed, there's one setting that matters more than anything else: set the bus's mix knob to 100% wet. A bus works like a send effect, which means your main dry signal is already playing on its own — you don't want the bus mixing dry and wet together, or you'll end up doubling the source. 100% wet keeps the bus purely as a repeats-and-texture layer sitting underneath the dry signal.

A delay on its own can get boring fast, so pair it with a chorus to soften and widen the repeats rather than leaving them hard and dry.

## Reverb, Mono Width, and a Slow-Moving Filter

Reverb goes on the main channel, and it's worth calling out: the mono reverb option in Serum 2's reverb is genuinely good — it gets dense fast without smearing the stereo field. Keep the width narrow so the reverb fills the center, and leave the sides open for your delays to do their spreading.

For movement, add a filter with an LFO — but set the LFO rate to free-running rather than tempo-synced, so it drifts constantly back and forth instead of locking to a rhythm. That slow, unsynced motion is what gives the patch its subtle phaser-like character.

## Bus Two: A Second Delay, Deliberately Different

Bus two gets its own delay, but this one's paired with distortion instead of chorus — some overdrive to crunch it up a bit — and set to ping pong instead of a straight stereo delay.

The important decision here: the second delay's timing should not match the first. If both delays run the same subdivision, they just reinforce each other and the effect flattens out. Set bus two's delay to a dotted subdivision instead of the straight timing on bus one. That mismatch between the two is what actually creates movement and complexity when they're both playing together.

## Compression: Gluing It All Together

Once both delay buses are recombining at the main channel, add compression — but keep it light. The goal isn't to crush the dynamics, it's to make everything sound like it belongs together as one cohesive sound rather than several separate layers stacked on top of each other.

If you want to tame the low end further before the compressor, an additional filter set to high-pass at 18dB does the job — cutting the bottom out of the effects returns specifically, which makes life easier once you're mixing this into a full track later.

## Shaping the Envelope: From Stab to Swell

One patch, two completely different uses in a track, controlled entirely by envelope attack time. Route envelope two into the filter, and a short attack turns the whole chord into a percussive stab. Elongate that same attack, and the exact same patch becomes a slow swell instead.

That's one automatable parameter giving you a stab for the groove and a pad-like swell for a breakdown, without needing two separate patches.

## The Full Signal Chain, Recapped

Start to finish: a simple saw oscillator, shaped with a filter envelope that creates either a transient stab or, with a longer attack, a swell. That signal feeds two buses — bus one runs delay with chorus, bus two runs delay with distortion in ping pong mode, deliberately set to a different rhythmic timing than bus one. Both buses return to the main channel, where a slowly-drifting, free-running filter LFO adds a phaser-style movement across the combined signal. From there it hits reverb — narrow width, kept centered, low end tamed with an optional high-pass filter — and finally light compression to glue the whole thing into one sound.

This patch — "Dub Techno Kids, Basic Chords #5" — along with the rest of the process behind it, is part of the bonus content in [Dub Techno Kits Vol. 01](/shop), which also includes the accompanying MIDI files if you want to load it up and pull it apart yourself.

