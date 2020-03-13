**Since HTML5 allows so much diversity for designers it is important to follow the HTML5 requirements to ensure maximum performance.**

### HTML5 requirements

- HTML5 ad file bundles must be packaged together for delivery into a compressed file format
- Max number of host-initiated file requests must not exceed 10 files during initial file load. Any additional file weight may occur during subload after the load event has been dispatched by the window object
- Ensure all files, including JS libraries that might be cached or assets hosted on a CDN, are included as part of the maximum file weight calculation
- User initiated file size: up to 10mb is allowed after user-initiated interaction
- Webfonts should be supplied in all three formats for compatibility with all browsers (WOFF 2.0, WOFF 1.0 & EOT)
- HTML5 ads must include a fallback font substitute to avoid flash of unstyled text effect
- A backup static image of the ad in either GIF or JPEG format must be included in the file package in case of browser incompatibility
- Must support Google Ad Manager <a href="https://support.google.com/admanager/answer/7046799?hl=en" target="_blank">clickTag guidelines</a>
- Please see the IAB HTML5 guidelines for detailed guidelines on HTML5 ad design
- CPU usage should not exceed 30%
- Please supply a .zip file with no single asset exceeding 1MB, so it complies with Google Ad Manager policy

### Animation requirements

- Length of animations must not exceed 15 seconds and must not loop beyond 15 seconds
- Animation should be part of subload
- Any JavaScript must be executed as asynchronous load and CSS must be inline
- Animation must start when the ad is in view
- Flashing, high contrast or fast moving animations are not recommended

<h3 id="video-specs">Video</h3>

- Host initiated video auto-play
  - Max duration: 15 seconds
  - Max polite load file size: 1.5mb
  - File quality: Recommended 24fps min. For lower bandwidth (less than 2 mbps) 18 fps maybe be used
- User initiated video play
  - Max duration: unlimited
  - File quality: File quality: Recommended 24fps min. For lower bandwidth (less than 2 mbps) 18 fps maybe be used
- All video ads with 100% share of screen must provide Close button from the start of the ad for user to exit the ad experience
- Video ads which do not have 100% share of screen must provide user controls to pause/stop the video play or close button
- Video file download to user device must start as part of subload
- Video ad placements that need the ad container to expand must follow LEAN expansion guidelines, e.g. no auto expand or overlay on parts of content
- Ads that appear or expand as user scrolls must not auto collapse after the video play. This causes the content to be displaced and fall out of user’s view
- Pre-caching or preloading is a popular practice to resolve latency issues in displaying ads. It is recommended that lighter weight non-video assets like images within LEAN file weight limits be pre-loaded and video assets downloaded only when ad is displayed to the user
- Video only autoplays if 50% or more of it is in view (can be 33% inview on creatives where the height is greater than width, e.g. 300x600 halfpages). When it’s not in view the video is hidden.

**_Please note: this guidance does not apply to in-stream video; pre-roll, mid-roll or post-roll_**

### Audio

- Ads containing audio must always start in a muted state
- A control may be included for user initiation
