'use strict';

function test(callback) {
	const fakeAdFiles = ['ads.js', 'ad.js', 'showAds.js', 'ads.min.js'];
	let adBlockPresent = false;

	const ScriptLoader = function() {
		const promises = [];

		const _add = _url => {
			const promise = new Promise((resolve, reject) => {
				const $script = document.createElement('script');
				$script.src = _url;

				$script.addEventListener('load', () => {
					resolve($script);
				});

				$script.addEventListener('error', () => {
					resolve($script);
				});
			});
			promises.push(promise);
		};
		const _loaded = cb => {
			Promise.all(promises).then(null, cb());
		};
		return {
			add: _add,
			loaded: _loaded
		};
	};
	const scriptLoader = new ScriptLoader();
	fakeAdFiles.forEach(fakeFile => {
		scriptLoader.add(fakeFile);
	});
	scriptLoader.loaded(() => {
		adBlockPresent = true;
		callback();
	});
}
