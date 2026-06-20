# Japanese TV Channels :jp:

> A curated guide to Japanese TV channels streaming on YouTube, part of [Awesome Japanese](./readme.md). Each channel links to its YouTube channel and homepage, with live streams noted.

**Want to watch?** Use the interactive player at [`tv/`](./tv/index.html) — pick a channel to play its latest uploads continuously in the page, or use the **▶ Live** link to open that channel's current live stream on YouTube. Once GitHub Pages is enabled it lives at a URL like `https://<owner>.github.io/Awesome-Japanese/tv/`.

> Maintainers: enabling the interactive player is a one-time step. In the repo, go to **Settings → Pages → Source: Deploy from a branch → `master` / `/ (root)`**.

## Public

- [NHK (Japanese)](https://www.youtube.com/channel/UCip8ve30-AoX2y2OtAAmqFA) ([homepage](https://www.nhk.or.jp/)) - Official Japanese-language NHK channel; upload-only on YouTube (main broadcast not live due to rights). (latest uploads) :jp: :warning:

## News

- [ANN News (TV Asahi)](https://www.youtube.com/channel/UCGCZAYq5Xxojl_tSXcVJhiQ) ([homepage](https://news.tv-asahi.co.jp/)) - 24/7 live news stream (ANNnewsCH). (live & latest) :jp:
- [TBS NEWS DIG (TBS)](https://www.youtube.com/channel/UC6AG81pAkf6Lbi_1VC5NmPA) ([homepage](https://newsdig.tbs.co.jp/)) - TBS NEWS DIG Powered by JNN; runs 24/7 live news. (live & latest) :jp:
- [日テレNEWS (Nippon TV)](https://www.youtube.com/channel/UCuTAXTexrhetbOe3zgskJBQ) ([homepage](https://news.ntv.co.jp/)) - Nippon News Network; runs 24/7 live news. (live & latest) :jp:
- [FNNプライムオンライン (Fuji TV)](https://www.youtube.com/channel/UCoQBJMzcwmXrRSHBFAlTsIw) ([homepage](https://www.fnn.jp/)) - FNN Prime Online; runs 24/7 live news. (live & latest) :jp:
- [テレ東BIZ ダイジェスト (TV Tokyo)](https://www.youtube.com/channel/UCkKVQ_GNjd8FbAuT6xDcWgg) ([homepage](https://txbiz.tv-tokyo.co.jp/)) - TV Tokyo business/economic news digest; upload-focused. (latest uploads) :jp:
- [ウェザーニュース / Weathernews](https://www.youtube.com/channel/UCNsidkYpIAQ4QaufptQBPHQ) ([homepage](https://weathernews.jp/)) - Weathernews LiVE; 24/7 live weather and news. (live & latest) :jp:

## Contributing

Channels live in [`tv/channels.json`](./tv/channels.json) — the interactive player reads that file directly. To add a channel, add a JSON entry there (with `name`, `group`, `youtubeChannelId`, `hasLive`, `homepage`, and `note`) plus a matching bullet in this file under the right heading. Recognized `group` values are `Public`, `News`, and `Networks` (any other value renders under its own heading after these).
