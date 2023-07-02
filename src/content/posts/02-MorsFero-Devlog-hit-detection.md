---
title: "Mors'Fero Devlog - Hit Detection"
layout: "../../layouts/BlogLayout.astro"
publishedAt: 2023-07-02
description: "MorsFero Devlog - Hit detection."
slug: "Morsfeo-hit-collision"
isPublish: true
---

## Introduction

This devlog focuses on improving the hit detection system in Mors'Fero. Currently, the game utilizes multiple line traces to sweep an area based on the weapon's movement (refer to Figure 1). However, this approach has several flaws that need to be addressed.
![Figure 1](https://cdn.discordapp.com/attachments/762713597745823825/1125045381261164645/image.png)

## Current Flaws

The existing hit detection system suffers from the following issues:

1. Rear Enemy Hits: Enemies located behind the initially hit enemy can also be hit.
2. Spin Abuse: Players can rapidly spin around during an attack to hit all surrounding enemies without significant drawbacks.
3. Inefficiency: The code responsible for hit detection utilizes approximately four loops, which is inefficient.
4. Weakpoint Inaccuracy: Each enemy has weakpoints that are sometimes surrounded by other body parts. If the line trace hits any part of the enemy before the weakpoint, normal damage is dealt instead of hitting the weakpoint.

## Research

To address these flaws, I researched how other games handle melee hit detection. During my investigation, I came across a useful guide from the L4D2 Steam community (link: [https://steamcommunity.com/sharedfiles/filedetails/?id=412007318](https://steamcommunity.com/sharedfiles/filedetails/?id=412007318)). The guide explains the melee hit detection system used in Left 4 Dead 2 (L4D2).

## The L4D2 Hit Detection System

The L4D2 system employs tracers that are fired from the player's camera and extend to the outer range of the weapon (refer to Figure 2). Each individual trace can only hit one target at a time, and only a set number of tracers are fired. Key advantages of the L4D2 system over my current implementation include:

1. Rear Enemy Hits: Due to the limitation of individual traces hitting one target at a time, enemies directly behind the initially hit enemy are not affected.
2. Efficiency: The L4D2 system achieves a similar effect with fewer traces compared to my current system, which employs significantly more.
3. Spin Abuse: By firing a fixed number of tracers, the L4D2 system discourages spinning rapidly to increase the weapon arc. The larger gaps between tracers make it more challenging to hit all enemies accurately.
![Figure 2](https://cdn.discordapp.com/attachments/762713597745823825/1125043920733208686/steamworkshop_webupload_previewfile_412007318_preview.gif)

## Addressing Weakpoint Inaccuracy

While the L4D2 hit detection system solves most of the flaws, weakpoint inaccuracy remains a concern. In L4D2, weakpoints surrounded by other body parts are less likely to be hit. For example, the Charger's arm occupies a significant space on the right side of its head. If a player swings in that direction, they are more likely to hit the arm instead of the head, resulting in normal damage. However, in Mors'Fero, I aim to create a game accessible to anyone, without an excessively high skill ceiling.

## Solving the Weakpoint Inaccuracy Issue

To address weakpoint inaccuracy, I considered a system that prioritizes hitting weakpoints. However, this approach introduces the flaw of potentially hitting unintended weakpoints accidentally. Balancing this with different swing arcs for weapons would be challenging, as accidentally hitting weakpoints too often can disrupt gameplay balance.

To ensure consistency, I devised an alternative solution. The idea is to introduce a few override tracers fired at the apex of the weapon swing/when the swing overlaps the crosshair. These override tracers will only register a hit if they hit a weakpoint, then ingoring any previous hit and applying the weakpoint damage instead. One issue with this is that there will be a potential delay between the first trace and the override trace, and weapons with large swing arcs will have a larger delay.

After a few more iterations of similar ideas I decided to use a version of the override tracer iteration. In this version the normal hit tracers will work on a first hit basis, and at the apex of the swing override tracers will be fired alongside the normal tracer, if these override tracers hit a weakpoint they will deal damage to it, unlike the previous version if an override tracer hits the weakpoint it will not ignore the previous hit essentially creating 2 instances of damage, while this could have potential balancing issues, like dealing more damage than you should, in a lot of cases the addtional hit can just be seen as bonus damage for hitting the weakpoint.

## Conclusion

While the system I devised isnt perfect it works for what im trying to acheive in my game. I want the game to feel fluid and this trace system should help acheive that, the system doesnt have a delay like previous versions. While it does create 2 instances of damage in certain scenarios, this can just be balanced around, it is aldo work nothing that not all enemies' weakpoints are made to speafically deal damage, the Dreadforge Juggernox is an example of this, it's weakpoint is a lock on its back, that when struck will cause its armor to fall off, striking the lock wont deal damage directly to the enemy.
