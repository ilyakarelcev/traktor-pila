ROMASHKOVO — DIALOGUE CAST

grandpa = Дед Фёдор; mila = Мила; mayor = Мэр Пузырёв;
junk = Хламыч; rocky = Рокки.

90 clean sprites, each available as transparent PNG and lossless WebP.
Mila has 22 parts; the other characters have 17 parts each.
Every character has torso, arm-rest, arm-wave and arm-signature.
The neutral arm is mirrored for the other side. Both arms render in front
of the torso and use ONE shared anatomical scale across all poses.
Framing includes the full gestures; never shrink a raised arm to fit a card.

Faces: one head plate without baked eyes/brows/mouth, two independent eyes
with open/half/closed attachments, two brows, and one mouth attachment.
Mouth and eyelid changes are atomic swaps, with no crossfade duplicates.
Neck remains on the torso while the head moves at its own pivot.
Mila retains the approved face, separate ponytail and two loose hair locks.

Runtime registration and shoulder pivots: web/src/ui/castRig.ts.
Mila face registration: web/src/ui/milaPuppet.ts.
Renderer: web/src/ui/castPortrait.ts and castBody.ts.
Actual game integration: ui/characters.ts exports Face, used by ui/hud.ts.
The HUD calls presentLine() to choose moods and gestures from RU/EN text.

Preview: /?faces (or /?faces=mila, grandpa, mayor, junk, rocky).
Game: / . Mila's detailed layer inspector remains at /?mila.

Generated with the built-in image_gen tool. Masters, transparent component
atlases and complete prompts are saved in web/art-source/cast-v1.
Approved Mila source art remains in web/art-source/mila-v3.
Re-export: from web/, run node scripts/prepare-cast.mjs.
sprites.json in each character folder records source crops and dimensions.
