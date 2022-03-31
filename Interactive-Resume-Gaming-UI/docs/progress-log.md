### Day 1

At first, I thought jInvertScroll would work. It does work as intended, meaning it does scroll horizontally when you move the track pad vertically. However, I wasn't able to figure out how to transition back to vertical again within a reasonable amount of time.

After some digging around and a google search looking up 'scroll path,' I found a jQuery plugin by Joel Besada that might accomplish what I'm wanting to do. I also found a generic code done in jQuery that could possibly accomplish the same goal, but I haven't sat down to parse the code (http://jsfiddle.net/ARTsinn/EaUeF/). Things to note about the plain jQuery version, I would have to make it compatible with arrow keys. The first solution, the scrollpath plugin, could work, but the cons for his plugin is that it requires jQuery 1.7+. This means that if I wanted to migrate my interactive resume onto my jQuery lite, this solution isn't plausible, which makes the second solution ideal, but I'd have to parse through the code.

At the present moment, Joel Besada's plugin seems to be the most straight forward, so in the interest of time, I'll give that a go first.

Also, in my scrolling research, I may have found a good plugin for animating based on scroll position: (http://scrollmagic.io/)

Result of scrollpath:
![ScrollPath][scrollpath]

### Day 2

Next step is to determine how I can record the scroll position everytime I scroll so that at any point, I can specify an animation to take place. As soon as I can confirm this, I'll start implementing a first "panel" of the story. A couple jQuery methods I'm looking into include `.offSet()`, `.scroll()` and `.scrollTop()`.

I've kind of hit a road block in trying to record the scroll position. So far, I'm under the impression that ScrollPath doesn't work well with the `.scroll()` event, but after a bit of research, I'm starting to believe otherwise. I actually think it has to do with some css attributes that have been set, and that I'm not binding that scroll event to the correct element within the DOM. I've been playing around with combinations of css attributes and binding it on various elements that could be the parent container for the scrollable area, but no luck so far. I'm trying to understand what is going on with the `.scroll()` in relation with it's bound element, but I haven't been able to make a break through just yet. I'm still doing research! But I'll definitely let you know when I find something.

So after some more digging around, I think I've hit a dead end with this route. As it turns out, when I take the ScrollPath route, it doesn't really have a legitimate scroll position along the path that was drawn. I managed to somehow get the `.scroll()` event to fire, but it only fires when I use the arrow-keys, or spacebar. It doesn't actually fire for two finger scrolling on my macbook. Even for the event that fires, it only fires when down/up arrow keys are pressed and the window moves vertically. When it transitions to horizontal, no event is fired unless you press the left/right arrow keys, which really defeats the purpose.

I've elected to just spend a day to dive into Robby's source code to see how he did it, and then apply the concepts he used. I'm starting to get a bit nervous however, that for this particular project, I bit off a bit more than I can chew.


[scrollpath]: ./images/scroll-path.gif
