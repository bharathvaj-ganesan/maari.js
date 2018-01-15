[![Build Status](https://travis-ci.org/bharathvaj1995/maari.js.svg?branch=master)](https://travis-ci.org/bharathvaj1995/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Built with Gulp](https://img.shields.io/badge/built%20with-gulp-red.svg)](https://gulpjs.com/)
[![Served with jsdelivr](https://img.shields.io/badge/cdn-jsdelivr-brightgreen.svg)](https://www.jsdelivr.com/)

# MAARI JS

> A tiny and simple browser library for detecting ad blocker presence. If any of viewers use adblockers just say the swag "senjiruven"

![](media/maari.gif)

Note: It's famous mass dialogue from South Indian film.

## Features

* Simple and Tiny library (Less than 1KB in size)
* Zero Dependency
* Currenty Supports all modern browsers except IE
* CDN support

### Getting started

```html
<script src="https://cdn.jsdelivr.net/npm/maari/dist/maari.min.js"></script>
```

### Usuage

```js
const alertUser = () => {
	alert('Please turn off the ad blocker');
};

maari(alertUser);
```

Callback will be executed if adblock is detected.

## FAQ

### Why yet another adblock detector library?

There are many adblock detector modules on npm, unfortunately, I couldn't find any that fit my needs:

* Comprehensive test suite
* Covers all browsers atleast except IE
* Unsurprising behavior
* Well-maintained
* Modern logic

The most common problems I noticed in these modules was they are having unncessary logic, following some big list of rules. But the adblockers have become more smart and effective in blocking ads.

## License

MIT © [Bharathvaj Ganesan](https://github.com/bharathvaj1995)
