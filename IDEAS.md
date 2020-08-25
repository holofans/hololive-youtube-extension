Readings for design:

- [How to make a Chrome Extension](https://thoughtbot.com/blog/how-to-make-a-chrome-extension) (Quick and Dirty Overview)
- [Chrome Dev Doc: Message Passing](https://developer.chrome.com/extensions/messaging) (emitting events to/from the **background** (associated with the extension button and anything UI it draws) to the **content_script** (running on page))

Similar Extensions for ideas:

- https://github.com/ParticleCore/Iridium Formerly YoutubePlus / Youtube+, this is a firefox extension that supports hotkeys, 
  - features:
    - Play videos automatically
    - Force max thumbnail resolution
    - Dark theme control
    - Turn 60fps off
  - analysis:
    - CON: single-file JS and html concatenation within js code not a great example of maintaining youtube stability
    - CON: bad permission management lead to it being removed from AMO store
    - CON: does not inject massive amounts of UI into Youtube
    - PRO: can be used as reference on what Youtube elements are parseable, but:
    - CON: does not have open source, please avoid copy pasting code directly.

- https://github.com/mustafakalash/royt Reddit On Youtube (RoYT) embeds Reddit Webpage obtained from Reddit API onto Youtube while watching.
  - features:
    - adds Reddit Data to the DOM
  - analysis:
    - PRO: Clean coding, although it's in one js file it's compartmentalized and very functionally written. Very easy to borrow its support functions (and even extend on them!).
    - PRO: Has localization support.
    - CON: It's not using VueJS or anything, but rather native Javascript to render. I don't think this is a deal breaker given how compartmentalized it is at doing its job - after all we aren't rendering reddit videos.
    - PRO: MIT-like with Attribution License
  - mozilla addons page: https://addons.mozilla.org/en-US/firefox/addon/reddit-on-youtube/?src=search
  
- some technical questions:
  - can youtube iframe youtube?
  - can youtube iframes superchat youtube?
  - can webextensions affect the content of youtube inside an iframe?
  - can pop outs superchat?
  - can chat pop-out superchat?

