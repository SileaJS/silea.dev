const f = "modulepreload",
	h = function (o) {
		return "/" + o;
	},
	l = {},
	b = function (d, a, E) {
		let i = Promise.resolve();
		if (a && a.length > 0) {
			document.getElementsByTagName("link");
			const r = document.querySelector("meta[property=csp-nonce]"),
				e = r?.nonce || r?.getAttribute("nonce");
			i = Promise.allSettled(
				a.map((t) => {
					if (((t = h(t)), t in l)) return;
					l[t] = !0;
					const s = t.endsWith(".css"),
						u = s ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${t}"]${u}`)) return;
					const n = document.createElement("link");
					if (
						((n.rel = s ? "stylesheet" : f),
						s || (n.as = "script"),
						(n.crossOrigin = ""),
						(n.href = t),
						e && n.setAttribute("nonce", e),
						document.head.appendChild(n),
						s)
					)
						return new Promise((m, p) => {
							n.addEventListener("load", m),
								n.addEventListener("error", () =>
									p(
										new Error(
											`Unable to preload CSS for ${t}`,
										),
									),
								);
						});
				}),
			);
		}
		function c(r) {
			const e = new Event("vite:preloadError", { cancelable: !0 });
			if (((e.payload = r), window.dispatchEvent(e), !e.defaultPrevented))
				throw r;
		}
		return i.then((r) => {
			for (const e of r || []) e.status === "rejected" && c(e.reason);
			return d().catch(c);
		});
	};
(
	await b(async () => {
		const { initializeApp: o } = await import("./index.esm.Cu7LdMsX.js");
		return { initializeApp: o };
	}, [])
).initializeApp({
	apiKey: "AIzaSyBb9d0h1NOUqhPcJKkomUpwvdXa7C6bO28",
	authDomain: "sileajs.firebaseapp.com",
	databaseURL: "https://sileajs.firebaseio.com",
	projectId: "sileajs",
	storageBucket: "sileajs.appspot.com",
	messagingSenderId: "427173895301",
	appId: "1:427173895301:web:7850aa63dccb907e17ddec",
	measurementId: "G-1SDRRZYV8C",
});
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.Dqp3qSG2.js.map
