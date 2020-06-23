---
title:  Relay
date: "2020-03-31T00:00:00.000Z"
description: Instant queues, powered by HTTPS
week: 3
website: TBC
status: Day 1
toc: Plan,Day 1
---

Relay is a modern managed queue (queue as a service), which requires not setup at all!

Relay works like any other queue, but instead of pushing jobs, you push requests - meaning no setup is required!

Simply prefix a request with `relay.to/` and we'll queue and forward the request with the exact same body/headers/parameters. 

You can use Relay to:

 * **retry** requests that error automatically or manually

 * **schedule/cron** schedule requests at regular interval
 
 * **delay** requests for a given time (e.g. send a request after 30 mins)

 * **throttle** requests so no more than x requests are allowed in a 30 min period

It works great in combination with Zeit.


## Plan

#### Problem

It's actually quite hard to run delayed (send an email after 30 mins) and scheduled tasks (run a DB clean-up every day) - and this is especially so for serverless. Traditional queues are a pain to setup and often provide little visibility into the status of the jobs.


#### User

Developer - especially if they are using serverless (Zeit, AWS Lambda).


#### Marketing (after PH launch)

  * Communities - target specific communitites
  * Sponsor Github repos


#### Pricing / Revenue

 * First 1000 jobs are free
 * $10 per 1M after that
 * Pricing features:
   * Additional log retention
   * Multiple user accounts 3+
   * Error notifications


#### Competition

[EasyCRON](https://www.easycron.com/) - Only does CRON. Requires setup.

[GCP CRON/PubSub scheduler](https://cloud.google.com/pubsub/docs) - there is no way to view or reprocess jobs. Requires setup.



#### Risks / Assumptions

 * Services need to be exposed for us to call them - so it won't work with "internal" services. Obviously people can expose them and add a simple token auth - but this may put some people off.
 * How big of a need is this? Only one way to find out though!


#### MVP / Keep it simple

 * Queue a request using the prefix `ralley.to/`
 * Build a 2-page admin app that  
 * Tags - allows the user to tag the queued request


#### Basic Plan

 * Day 1 - Plan and Design
 * Day 2 - Initial queue system working (incl API) and deployed
 * Day 3 - Build app - list view, settings
 * Day 4 - Build app - detail view, billing
 * Day 5 - Build homepage and docs
 * Day 6 - Buffer
 * Day 7 - Launch day!


### Out of scope (future ideas)!

 * Globally distribute Redis for even lower latency
 * On-prem - allow people to install it as a Docker image / CLI
 * Cli library


## Daily Log

### Day 1
Tuesday, 31 March 2020: 🏠 + ⛅️ 19° - Sunny intervals and a gentle breeze

It's actually my birthday today! So I can't think of anything more fun, than starting a new side project.

  - [ ] Created the plan
  - [ ] Initial design completed


