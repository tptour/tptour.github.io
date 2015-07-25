# Firefox Tracking Protection tour example

## Testing instructions
1. Add "https://tptour.github.io" to the comma-delimited preference `browser.uitour.testingOrigins`. It won't exist by default.
2. Enable UITour logging in the Browser Console to file better UITour bugs: `browser.uitour.loglevel` = "All".
3. Enable tracking protection: `privacy.trackingprotection.enabled` and/or `privacy.trackingprotection.pbmode.enabled`.
4. (Optional) Set `privacy.trackingprotection.introURL` to "https://tptour.github.io" and `privacy.trackingprotection.ui.enabled` to True to test about:privatebrowsing.
5. Load https://tptour.github.io in a window with tracking protection enabled.
