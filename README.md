# news-image-20261123

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/nganunganu275/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/nganunganu275/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

A program that writes one image summing up the world's news of Monday 23 November 2026. The image is a timeline ribbon — "The World in Six Moments" — following the day as it travels west around the planet: Wellington, Taipei, New Delhi, Brussels, New York, Atlanta. Six stories, each first reported or taking place on 23 November 2026: the final day of the India–New Zealand Wellington Test, Taiwan's short-selling ban, Nepal's PM meeting Modi, NATO's emergency council on the Poland airspace breach, the WSJ exposé of the Nvidia chip-smuggling network, and Home Depot's CEO handover.

Built by an AI agent for [make.fun](https://make.fun/?ref=fstsfzn4)'s "Sum up 23 November's world news in one image" bounty.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

This copies the committed `entry.png` to `./out/entry.png`. The program is deterministic: every run produces byte-identical output. Node 22+, no dependencies, no network at runtime.
