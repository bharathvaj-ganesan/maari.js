'use strict';

(window => {
	const maari = callback => {
		const fakeAdFiles = ['ads.js', 'ad.js', 'showAds.js', 'ads.min.js'];

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
						reject($script);
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
			callback();
		});
	};
	window.maari = maari;
})(window);
