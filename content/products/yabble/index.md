---
title:  Yabble
date: "2020-11-26T00:00:00.000Z"
description: Better meetings for your team.
week: 4
status: Day 11
website: yabble.io
toc: Plan,Day 1,Day 2,Day 3,Day 4,Day 5,Day 6,Day 7,Day 8,Day 9,Day 10,Day 11
icon: ./yabble-logo.png
image: ./screenshot.png
---

![Yabble Screenshot](./screenshot.png "Yabble Screenshot")


The mission is to create better meetings for teams - a big part of this will be through the async meetings, but I don’t want to narrow the focus to a single feature. 

Whatever “better meetings for teams” means, is the road we will follow.


## Plan

#### Problem

We all attend way to many meetings, and now many of us have gone remote - it's more exhausting than ever. Meetings tend to be a massive distraction and productivity drain, but they serve a useful function.


#### User

Remote teams (right now that’s most office workers - and while expect that not everyone will stay remote, office workers will demand a more hybrid approach to working, ensuring continued demand for virtual meetings).

This is designed to be the perfect companion to Slack / Microsoft Teams, not to replace it.

#### Benefits of async meetings
There’s actually a lot more benefits than you might think!

* Less interruptions - a single interruption can be devastating to productivity, as meetings can be viewed during breaks or at the start/end of the day - you no longer get continual distractions throughout the day
  
* Less time in meetings - with sync calls, you wait around for everyone to join, you have to watch at speed x1, you can’t skip parts that are not relevant, and you often hang around to see if something else comes up. Leading to video call fatigue.
  
* Loudest opinion in the room, is not the only opinion that matters. As an introvert - this is something I’m really passionate about. Let’s make sure everyone has a voice - so we make the best decisions.  
  
* Contributions are more thoughtful - if you have time to think about what you’re going to say, people can form more insightful responses.

#### Downsides of async meetings
These are some obvious downsides for async - I’m listing them here, so I can try to mitigate them as I build the product. It’s interesting that some of these downsides are a direct result of the upside…

* Lack of contribution - if you already at a meeting, you’re more likely to contribute - all you have to do is open your mouth…
  
* People are more obliged to attend a face to face meeting whereas messages can be more easily ignored.
  
* People can overthink video messages - and actually spend more time re-recording themselves than if they just attended a meeting.
  
* Some people don’t like recording video of the themselves.
  
* Async meetings with short back and forth responses may end up being less efficient than being in a meeting together.


#### Initial ideas for combating the downsides
So here are my initial thoughts on how to combat some of these problems - I’ll need to continually revisit this - but it’s a good starting point:

* Async -> sync - he app will be designed to graduate calls from async to sync seamlessly. This has two benefits:
	* Ensures everyone is prepared for the sync meeting, so it can be run more efficiently
	* Encourages people to respond async, so they can avoid the meeting (if everything is resolved, it self destructs!)
  
* Ask to respond - users will be able to ask people to respond to their message/meeting - this will then have to be actively dismissed by the user - “I don’t want to respond”, which brings back some of the social enforcement.
  
* Hold to record - this is designed to prevent people from overthinking things - the user will hold (spacebar) to record the message, so as soon as they remove the hold, the message is stopped/sent. The exact UX experience of this needs to be thought through - but I think something like this might help.


#### Key to success
* Getting people to actively engage with the product. It needs to be something that people default to - the app should be always open.
	* Slack messages - to remind people about meetings / stand ups
	* Weekly e-mails - on time saved?
	* Menu bar - so people can access really easily start a meeting
* Providing some solid initial use cases which are obvious
* Not requiring the whole company to use it for it be effective


#### Marketing (after PH launch)

  * Target remote companies > 5 employees
  * Content 
  * Podcasts


#### Pricing / Revenue

 * $10 a month for pro plan (which gives you unlimited everything)


#### Competition

* Zoom, Google Meet, etc - not a direct comparison, but major players in the field
  
* Slack - seems like their launching a stories feature, but I'm not sure that will directly compete

* SodaSync, Comeet - varying degrees of success on PH


## Daily Log

### Pre-Start

<iframe width="560" height="315" src="https://www.youtube.com/embed/KBHQ-g9TJyI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I spent the beginning part of the week exploring different ideas - and checking some product / technical assumptions.

As part of the validation, I wanted to get some proof of concepts done on the dev side, nothing worse than building out the app, only to realise the core technology doesn’t work as you expect!

The key things were:
 * Build desktop / screen capture code in electron
 * Hide main window while recoding and overlay video controls (for screen recording)
 * Recording a stream
 * Basic UX experience

I wasn’t sure on the best approach for recording the video - these were the options I thought about:

 1. Store the entire video buffer into memory, and then upload at the end - the easiest option, but the user would have to wait for the upload after the meeting is finished (and if they exited the browser midway through it might be lost!). There was also a risk that the browser would run out of memory if the video was too long.

 2. Send chunks of data manually from the browser to the server using HTTPS - this solved some of the problems with option 1, but 

 3. Use WebRTC protocol to send video to server (and record the stream) - this offered the most future flexibility, but there was quite a bit of added complexity.

I was reluctant to go for option 3, as it seemed like over engineering the solution, but I found very little 

I spoke to a friend (Sabba over at [VEED](https://veed.io) about the idea - he told me that his main concerns where: 
* Remote stand ups (this has been done quite a bit, but I think the UX of this could be improved)
* Calendly for his team - a lot of them struggled to work out the best time to schedule a meeting with someone (especially across timezones and different working patterns).
* Zoom feels a bit clunky, and takes time to load and setup the call (they currently use Hangouts or Slack for meetings)
* Would like to be able to record/trascribe meetings they have
* Directory for the team - what's their timezone, role, etc

Another friend (David of [ToDesktop](https://www.todesktop.com/)) also mentioned that there might be an issue with people overthinking their recordings - something I've considered, but clearly something that needs solving.

I also spoke a friend (Melissa at [Cadence](https://www.producthunt.com/posts/cadence-2)) that had been working on something similar, and she talked about her experiences working in this area. The key problem she raised was that it was difficult to get by in from the whole team at once, and if not everyone was using it, it became much less useful. I've added this to my keys to success - we need to be able to find a way to make this useful, even if only part of a team/company are using the app!

**I'd love to get your feedback**, if you have any of your own thoughts ping me a mail at [calum@1productaweek.com](mailto:calum@1productaweek.com).


### Day 1
Thursday, 26 Nov 2020

Bit of a frustrating start to the day, as I had problems copying the boilerplate over from Snapboard to the new Yabble repo. It seems like new versions of both Typescript and CRA have been released, and this caused a lot of dependency conflicts. In the end, I had to spend the time to update everything (which resulted in quite a few breaking changes that needed to be fixed).

But alas, I now have a basic homepage, login, etc up and running (mostly copied from Snapboard) and I’ve deployed it here - https://yabble.io. Feel free to sign up and explore as I build, but I can't guarantee anything will work or data will stick around until it’s officially launched next week!

Setup infrastructure and boilerplate for the app - Google Cloud, Sentry, FullStory, Google Analytics, Email, Netlify, Stripe



### Day 2
Friday, 27 Nov 2020

Today, I want to get some basic functionality working:

 * Create a new async meeting
 * Start and record a meeting 
 * Play back recording a message
 * Add a response to an existing meeting

Okay, didn't manage to do any of that. Had some issues with typescript. Not really sure what happened with the day, it sort of just disappeared!


### Day 3
Monday 30 Nov 2020

So I've now got the basic functionality working - 

 * Start a video
 * Record a video
 * Play back recorded message

We don't yet have an option to reply to a message, so that will be the next key step for the MVP.

I spent quite a bit of time understanding the different video formats (wars) and what it all means. It turns out the OpenVidu video server records the meetings as webm, but webm is not supported by IE or Apple (supposedly for hardware and/or licensing reasons, [depending on who you speak to](https://www.reddit.com/r/apple/comments/40b3y3/this_is_how_you_can_play_webm_in_safari/cysutuq?utm_source=share&utm_medium=web2x&context=3)). MP4 (with H.264 encoding) is supported by all browsers, but there doesn't seem to be a way to transcode from webm to MP4 on the fly, which means that anyone on those browsers would have to wait for the conversion of the entire video before being able to view any of it. If the video is long, this could take a long time (e.g. many minutes)!

To add to the complication, Chrome and FF will only allow seeking behavior if your [server responds to partial data requests](https://stackoverflow.com/questions/8088364/html5-video-will-not-loop). This makes on the fly transcoding even harder, because the browser will request a specific chunk in the final format (e.g. MP4), and we'll some how find the corresponding part inside the pre-converted webm format - honestly I don't think that is possible.

An avenue for investigation is HLS, which basically splits up a stream into multiple MP4 chunks and then plays them consecutively. HLS is not well supported natively, but there are libraries that provide wide platform support (after all it is just MP4). Given the chunks are small, it may be easier to encode an entire chunk on the fly, and then select the requested part for seeking support - although I'm not even sure if seeking would work the same way with HLS.

Alternatively, I could look at either modifying OpenVidu or going with another MediaServer platform so that I can export videos in MP4, however I have read that this can lead to very large MP4 files as they are not optimized for streaming. 

Finally, one further bit of complication/annoyance is that OpenVidu (for some unknown reason) decides to spend extra CPU cycles zipping all of the webm videos when the session ends. This makes it more tricky as we have to wait for the zip to complete, only to unzip again to decode. We can handle it, it's just more annoying than anything else.


### Day 4
Tuesday 1 Dec 2020

Today, I want to get the following done:

 - [x] Quick look to see if I can get HLS to work on the fly
 - [x] Reply to a video
 - [x] Update the video player to show multiple videos as a playlist
 - [x] Deploy latest to staging
 - [ ] Allow threads to be renamed

Not a bad day at all, I spent a bit too long on the first task - but I do feel like I have a better understanding of all the different video options available. Honestly, video is still a bit of a mess on the web. 😅

I basically have two options available for Safari/IE users (i.e. people who can't use webm) - 

 1. HLS after video ends - after the video ends, we'll quickly spin up a job to transcode the video into HLS chunks. Because we're using HLS, the user will be able to stream something very quickly (after a few seconds), and as more is transcoded more will be available.

 2. HLS during OpenVidu output - it may be possible to tweak some options in OpenVidu's core to enable a dual output of both webm and MP4 HLS (or in this case we might just opt for MP4). We'll probably still use HLS because streaming into a large MP4 ends up creating a very bloated file.

I'm going to park this for now, as I need to get on with rest of the UI and process - but we have a way forward when we need it.


### Day 5
Wednesday 2 Dec 2020

 - [x] Deploy latest to prod
 - [x] Improve the UX for watching video streams
 - [ ] Improve the reply to video experience (new UX)
 - [ ] Improve the new meeting screen

Felt like good progress today. I implemented a different UX for the video streams (watching a set of images), which I think both improves the experience and is much easier to code. I still there is a LOT of improvements wee can make to the UX - but its a good start.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/00bd89e7057f4be1bb9319ec8e78245f" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

I spent a bit more time working on types again, I've spent a significant amount of time on them so far - but this is time well spent. Everything from the DB > Prisma > API server > web frontend is now typed - and I've already discovered a bunch of bugs as a result. Having everything type safe will actually let me work faster, as I can quickly make changes knowing that types have my back!


### Day 6
Thursday 3 Dec 2020

 - [x] Replace REST API with GraphQL
 - [x] Remove REST API from front-end
 - [x] Implement a rate-limiter for GraphQL (in particular for auth based queries)
 - [x] Add settings for workspace and user
 - [ ] Test the billing flow (copied from a previous project, but I think it's broken!)
 - [ ] Improve the UX for recording a reply (this will be done inline)
 - [ ] Improve the UX for creating a new meeting 

Not a bad day again today, but still didn't get to the key UX improvements.


### Day 7
Friday 4 Dec 2020

I totally messed up the login system yesterday and didn't notice, so I'll need to fix that today. I really need to make sure we have some basic E2E tests (using Cypress) before we go live.

 - [x] Improve the UX for recording a reply (this will be done inline)
 - [x] Improve the UX for creating a new meeting 
 - [x] Fix video recording delay
 - [x] Fix login issue (whoops)


Wow, what a productive day! For sure, it's very basic right now, but it feels like the main parts are in. It's totally usable for the basic use case! This puts us on track for a launch on Wednesday or Thursday next week - which if it happens would be the closest thing to a week I've ever done 🎉😅


There's been two key things I've been thinking about over the last couple of days:

 1. The intercept - in order for a productivity tool to be successful, you have to intercept an existing process or flow that people are already doing - and ideally that process needs to be a painful one, so they have an incentive to change. Once an app becomes part of peoples workflow, you no longer need the intercept - but it's critical at the beginning. For Yabble, this will be meetings. Everyone hates having too many meetings, so we can use that pain point to drive intercepts. For example, maybe we can have a calender integration where we create a thread for every calender event - and then the team has to try and resolve the issue before the meeting - beat the meeting! If it gets resolved before the meeting, no one has to attend the meeting!

 2. Active v. passive - there are two types of communication - active and passive. Active (e.g. email, whatsapp, etc) forces the user to respond (even if that response is to dismiss), is usually shorter. Passive (e.g. Slack channels, instagram, etc) is optional, and is browsed through to find relevant information. I think active makes more sense for the use cases we're trying to cover, but I love the open transparency of Slack channels. I'm trying to find something in between, but that may be a fools errand. We'll see.

Catch you on Monday! Have a great weekend all!



### Weekend
Monday 5-6 Dec 2020

I found a few hours over the weekend to do some minor tweaks. I try to focus on really smaller UX improvements on weekends, so I don't get stuck into anything big, and I can pick up and drop it as I need to.

 - [x] Prevent controls from being draggable
 - [x] Auto play videos (and reset on slide into view)
 - [x] Pause all other videos when not in view
 - [x] Keep track of what's been watched by a user (and start from last unwatched)



### Day 8
Tuesday 7 Dec 2020

I spent most of today thinking about how the thread/channels/etc system should work - basically how does a user manage their video messages. I wanted to think this through before implementing the permissions (which is next on the list), in case it had a big impact on it. It was definitely one of those days where you think, what on earth did I do today?! But, it ended up really clarifying my thinking which is really useful.

Following on from the thoughts on [Friday](#day-7), there are two key ways to consume communications - passive and active. Slack uses a more passive type of communication for messages, and allows the use of `@channel` to make a message more active. This makes sense for a text based system, it's fairly easy to skim messages (although one can still feel quite overloaded in Slack) and pick out what's important. That means you're more likely to browse less important messages, and it's less important that you read or respond to every single message.

However, video is different. Firstly, it's much harder to skim videos. We're relying on people creating useful video titles (and eventually transcribing the videos using AI), but even then it's not as skimmable as pure text. In addition, we're trying to replicate IRL human conversations. It would be pretty rude to blank someone in the office if they ask you a question, and you'd only ask someone a question if it needed a response. 

All in all, it seemed like a more active approach to video messages makes sense, and that could be achieved by something similar to an e-mail inbox. Everyone who is sent a message receives it in their inbox and can then watch or dismiss it. However, there were still a couple of "passive" use cases that made me keep thinking:

  * Default open - one of the great things about Slack is that it's default open, you don't need to get permission or be invited to dip in and see what's happening in a channel. It's great for managers who want an overview of what's happening and for anyone else who needs a temporary look.
  
  * Automated videos - a few different use cases for this, but one could be that you use Yabble for onboarding new customers, so you create a new conversation for each new customer (i.e. a lot of videos)

So what would happen to these use cases if we only went for the inbox approach? Everyone's inbox would end up filling up with these passive videos, and it would be hard to then pick out the important messages. So the problem question is actually - how to we stop peoples inboxes getting overfilled with passive videos - whilst still allowing people to browse passive videos if required?

The solution I'm playing around with is to have channels, but all channel messages appear in your inbox (which is where you're expected to spend most of your time). Too avoid overload, the user could then specify that specific channels don't appear in their inbox. I still think this needs a bit more thought. 

 * How can a user easily see which channels are in the inbox
 * Would it be confusing to see some channels "duplicated" in the inbox, while others are not


### Day 9
Wednesday 8 Dec 2020

Today, I got stuck back into the video problem from [Day 3](#day-3) and [Day 4](#day-4). I was starting to feel like maybe WebRTC recording wasn't the right technology choice for Yabble, and instead I should go for recording in the browser and uploading chunks manually using HTTPS. The reasoning behind this is as follows:

 1. It takes a while for the WebRTC connection to load  - and you can't start recording until the session is up and running. There is not much you can do to improve this, it takes multiple steps to setup the direct connection.
  
 2. It requires move devop and is much more complex - because it's a direct connection, you have to install each WebRTC media node on a single server and scaling up and down can be a challenge. With a direct upload we can use Google Cloud Run, which is much easier to manage, debug and scale.
  
 3. I decided that sync live calls are out of scope for the forseeable future - at the beginning I was playing around with the idea that users could switch seamlessly between async and sync meetings. I think this is actually not a great idea though as I don't want everyone to default back to sync, and it's fairly easy to link off to another video app. Plus, it would take a lot of work to maintain this functionality and it would end up not being "best in class".

 4. It will work everywhere - no firewall issues as it's just plain old HTTPS

 5. I have to post-process regardless of approach - whether I use WebRTC direct connection or I record in the browser and upload the chunks, I will still need to convert to MP4 for Safari. And that means there isn't as much advantage.

 6. It won't work offline

So the change is now complete. It took quite a bit of work to get the chunk uploading to be reliable (and there is probably more that I can do on that front) - but it works for now. There was an unexpected hiccup, as the video recording produced in the browser is not seekable (it looks like a live broadcast). That meant I had to run the `webm` file through ffmpeg in order to fix it, but ffmpeg doesn't allow both input and output to be streams 😭. That means I need to output the file to disk, and then separately upload it to GCP storage - which means the video won't be ready immediately 😞. It's farily quick as no encoding needs to be done, but it's not instant. That's a trade off (compared to recorded WebRTC), but I would prefer faster time to record, than faster playback. Besides, I would have to use ffmpeg for Safari anyway, and there are some optimizations I can look at in the future to reduce this time. Overall, I'm happy this is the right direction going forward.


#### Launch Update

An update on the launch - I've decided to hold back from launching on ProductHunt as the primary launch target. It was a difficult decision, I do love the forcing factor of launching somewhere as public and important as ProductHunt, however I feel like this is something that needs a little use to refine - and that a refined version would do significantly better on ProductHunt.

I still plan to launch it / have everything ready for tomorrow COP, but instead I will launch it on a number of friends and smaller platforms and ask for feedback. Hopefully, I can get some startups using it heavily and really start to learn from them.

### Day 10

Thursday 9 Dec 2020

So the video saga continues, in turns out that `record-rtc`  library does not actually support Safari (even though it says it does on their repo readme).  So I now have 3 options:

1. Exclude Safari (et al) support entirely - it’s about 25% of web traffic, so not negligible
2. Hybrid - use WebRTC recording (previous approach) for unsupported browsers - load on the media server should be much reduced, as it’s only for unsupported browsers
3. WebRTC recording - go back to WebRTC recording for all browsers

I’m going to go with option 2, with the primary focus on the browser recording - and a less good experience (but still working) for other browsers. Our desktop and mobile apps will use local recording too, so that should reduce the usage further. Hopefully over time, as browser support improves, we can remove WebRTC entirely. 

However, today was supposed to be about enabling sharing - so I moved on an managed to get a basic invite to thread function working - based on #2 thread approach below.

I'm still having some problems with turning off the camera for WebRTC mode, when the user goes to another screen, but otherwise the dual approach is working well.

#### Threads and Channels

There’s actually two common types of interface for the direct method of communication:

 1. Membership based (WhatsApp/Slack) - groups are based around membership or broad topic - usually less groups which are re-used more frequently - conversation frequently moves between topics
  
 2. Subject based (Email) - each subject matter gets its own threads, threads are created often, and less often re-used - conversation sticks to a specific topic

The difference is subtle, and there is overlap between these, but they actually garner a significantly difference experience.



### Holiday in Geilo, Norway

Friday 10 Dec 2020 - Wednesday 15 Dec 2020

So I haven't mentioned yet - but I'm actually working out of Norway! And we've travelled up with some friends to their hytta (cabin). It's been great to have a break and enjoy some skiing!

![Skiing](./ski.jpg)


### Day 11 - Soft Launch

Thursday 16 Dec 2020

A bit of a late start to the day, just catching up on e-mails and a few things from our trip - but I'm not ready to go. The key thing for today is to enable public threads (so you can share a thread with anyone). I want this primarily for my own use case of getting people to try out the tool. 

There are a few things needed for this:

 - [ ] Add option in the `to` view to make it public
 - [ ] Allow public threads to be viewed anonymously 
 - [ ] Ask the user to sign up when responding to a video 

Plus a few other things if there is time:

 - [ ] Update the website
 - [ ] Test billing flow
 - [ ] Send e-mail notifications for thread updates
 - [ ] Create a new thread without the modal view
 - [ ] Create a ToDesktop version of the app
 - [ ] Fix the WebRTC camera always on mode

**SOFT LAUNCH** - the launch goal is send out 10 messages for people to try out Yabble!