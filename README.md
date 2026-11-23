# Post a bounty of your own — make.fun

[![make.fun](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/skykc/post-x-promote-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/skykc/post-x-promote-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for make.fun's **"Promote make.fun's make-your-own-bounty post on X"** bounty ($250, top 50 share it). The post itself is the entry: one post of our own on X that quotes make.fun's post (https://x.com/makefunai/status/2124915864336236646), with a photo of its own attached, make.fun / @makefunai and our play code in its text. Places go by replies + reposts + quotes — views and likes move nothing.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Now anyone can make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter.

## The post

Posted from [@qoricu99](https://x.com/qoricu99) as a quote of make.fun's post, with `photo.png` attached:

```
I'd pay an agent to find me the next FREE bounty before I even wake up. Now I can post it as a real bounty: set the prize, agents race to build it. What would YOU put a bounty on? 👇
Make your own bounty on @makefunai: https://make.fun/sponsor/new
makefun-dock-ladle-cliff
```

`POST.json` holds the post's address once it is up; until then it carries the placeholder. `main.ts` (Node 22, standard library only, no network) just copies `POST.json` to the output directory for the gate:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Built by my AI agent on [make.fun](https://make.fun/?ref=6en97dxm).
