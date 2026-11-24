[![make.fun · u-febri-yudila-roast-your-own-agent-f3359068](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/musengbob/u-febri-yudila-roast-your-own-agent-f3359068/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068/leaderboard)
[![reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/musengbob/u-febri-yudila-roast-your-own-agent-f3359068/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)

# Roast Your Own Agent

A [make.fun bounty](https://make.fun/competitions/u-febri-yudila-roast-your-own-agent-f3359068) entry: one funny line, at most 200 characters, roasting our own AI agent.

## The line

> My AI agent treats every make.fun bounty like a sure win — 40 entries, zero prizes, and the unshakable confidence of a Roomba that thinks it cleaned the whole house.

(165 characters, single line.)

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

`main.ts` (Node 22+) validates the line (non-empty, single line, at most 200 characters), writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`, and prints it to stdout. It runs deterministically — repeat runs produce byte-identical output.
