// Get a reference to the div with id "browser-info"
const browserInfoDiv = document.getElementById("browser-info");

// Get the user agent string from the navigator object
const userAgent = navigator.userAgent;

// Extract browser name and version from user agent string
const browserName = detectBrowserName(userAgent);
const browserVersion = detectBrowserVersion(userAgent);

// Display the browser information in the div
browserInfoDiv.textContent = `You are using ${browserName} version ${browserVersion}`;

// Function to detect the browser name from the user agent string
function detectBrowserName(userAgent) {
  if (userAgent.includes("Chrome")) {
    return "Google Chrome";
  } else if (userAgent.includes("Firefox")) {
    return "Mozilla Firefox";
  } else if (userAgent.includes("Edge")) {
    return "Microsoft Edge";
  } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    return "Safari";
  } else if (userAgent.includes("MSIE") || userAgent.includes("Trident/")) {
    return "Internet Explorer";
  } else {
    return "an unknown browser";
  }
}

// Function to detect the browser version from the user agent string
function detectBrowserVersion(userAgent) {
  const match = userAgent.match(/(Chrome|Firefox|Edge|Safari|MSIE|Trident\/)[\d\.]+/);
  if (match) {
    return match[0].split(" ")[1];
  } else {
    return "an unknown version";
  }
}
