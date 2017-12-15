[![Built with Gulp](https://img.shields.io/badge/built%20with-gulp-red.svg)](https://gulpjs.com/)
[![Served with jsdelivr](https://img.shields.io/badge/cdn-jsdelivr-brightgreen.svg)](https://www.jsdelivr.com/)

## MAARI JS

A tiny and simple browser library for detecting ad blocker presence.

![](media/maari.gif)

## Features

* Simple and Tiny library (Size in Bytes)
* Zero Dependency
* Supports all modern browsers except IE
* Simple vanilla JavaScript
* No CDN support

## Usage

```js
const alertUser = () => {
	alert('Please turn off the ad blocker');
};

maari(alertUser);
```

If any adblocker is detected then only the callback will be executed;

## FAQ

### Why yet another type adblock detector library?

There are many adblock detector modules on npm, unfortunately, I couldn't find any that fit my needs:

* Comprehensive test suite
* Covers all browsers atleast except IE
* Unsurprising behavior
* Well-maintained
* Modern logic

The most common problems I noticed in these modules was they are having unncessary logic, following some big list of rules. But the adblockers have become more smart and effective in blocking ads.

## License

MIT © [Bharathvaj Ganesan](https://github.com/bharathvaj1995)
