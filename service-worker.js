self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("budget-tracker-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/income.html",
        "/expenses.html",
        "/budgets.html",
        "/reports.html",
        "/calendar.html",
        "/insights.html",
        "/style.css",
        "/script.js",
        "/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});