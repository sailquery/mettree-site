(function () {
  window.MetAnalytics = window.MetAnalytics || {
    track: function () {},
  };

  /*
    Cloudflare Web Analytics:
    1. Create a site in Cloudflare Web Analytics
    2. Replace YOUR_TOKEN below
    3. Uncomment the loader

    var script = document.createElement("script");
    script.defer = true;
    script.src = "https://static.cloudflareinsights.com/beacon.min.js";
    script.setAttribute("data-cf-beacon", '{"token":"YOUR_TOKEN"}');
    document.head.appendChild(script);
  */
})();
