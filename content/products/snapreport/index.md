---
title:  Snap Report
date: "2019-06-05T00:00:00.000Z"
description: A dashboard of key metrics from all the apps you use, create unlimited free reports in seconds!
week: 2
icon: ./snap-report-icon.png
# website: reporter.xyz
# github: https://github.com/1productaweek/reporter
status: Day 3 - in progress!
toc: Plan,Day 1,Day 2,Day 3
---

## Plan

#### Problem

Existing dashboard and reporting tools are overly expensive, difficult to setup and use and no-one really ever checks them (possibly because they're hard to share/find)!? Plus - people often create reports without any idea of why or how they will use them - e.g. what's the aim of the report. People often have multiple side-projects or teams that want to have their own report.

Difficult to setup -> People don't have the data they need -> So they don't look at the reports??

Everyone in the team should be able to create a dashboard that's useful to them (or their team).


#### User

Teams in a start-up. And entrepreneurs with multiple different products to track.


#### Marketing (after PH launch)

  * Viral - Sharing will be built into the product - allow people to share their reports AND embed charts in their website OR share a particular chart
  * Encourage bloggers / entrepreneurs to share their charts
  * Marketplace for charts - people can create their own sources and charts


#### Pricing / Revenue

 * Free if your chart / dashboard is public

 * Paid for:
   * Private reports
   * Premium integrations
   * Private integrations
   * Frequency of update - 1 min, 1 hr, 1 day


#### Competition

Number only dashboards:

 * [Sunrise KPI](https://sunrisekpi.com) - limited free tier, limited integrations, no charts - only numbers
 * [Dashful](https://dashful.co) - dashboard with numbers only - fairly limited free tier


More complete dashbards (BI tools):

 * [Databox](https://databox.com/pricing) - 3 dashboards and 3 sources for free - slightly longer to create the dashboards - personally I don't like the style
 * [Grow](https://www.grow.com/) - Enterprise only - you have to request pricing!
 * [Klipfolio](https://www.klipfolio.com/) - hard to setup - not an nice UI interface
 * [Mode](https://mode.com/) - Enterprise onl - very expensive!
 * [Google Data Studio](https://datastudio.google.com) - A good tool, if over complicated and difficult to setup


#### Risks / Assumptions

 * There is a lot of competition in this market!
 * The development could be challenging - as integrating lots of apps is hard


#### MVP / Keep it simple

 * Limited the number of graph types - pie chart, line chart, table, number
 * Scheduled pulls only (no webhooks)
 * Instantly shareable (both page and individual chart)
 * One-click to add reports / integrations
 * Custom chart builder
 * Invite team members to the board

If there's time:

 * Post specific charts to Slack
 * A daily e-mail with the report
 * Marketplace for custom charts / integrations
 * Chrome integration so you can see the report


#### Basic Plan

 * Day 1 - Plan and Design
 * Day 2 - Initial build for the dashboard - charts but no data
 * Day 3 - First integration
 * Day 4 - Create more integrations and charts
 * Day 5 - User based stuff - sign-up, sharing and accounts
 * Day 6 - Buffer
 * Day 7 - Launch day!



## Daily Log

### Day 1
🏃 + ⛅️ 19° - Sunny intervals and a gentle breeze

Feeling pretty good today. It's always exciting to start a new challenge. I've tried to do an idea like this before and massively over-complicated it, so I need to make sure I don't make that mistake this time!

  - [x] Created the plan
  - [x] Initial design completed

### Day 2

🏃 + ⛅️ 16° - Partly cloudy with a gentle breeze

Ok, feeling a bit tired - but ready to go.

  - [x] Designed the add product page
  - [x] Created initial web-app setup
  - [x] Reviewed architecture approach
  - [ ] Basic web view complete

Argh! It's day 2 and I'm already behind 😅. I've been a bit distracted by trying to promote existing stuff. It's really hard to context switch between promotion and product development - but I need to get better at it if this is going to work. To try and fix this, I'm going to avoid all emails/comms/marketing and turn off all notifications before 5pm. If you try to speak to me before then, hold on tight, you'll get the response when I come back online 😊.


### Day 3

⛅️ 17° - Light rain showers and a moderate breeze

I woke up at 10.30am this morning (because I didn't get to bed until 3am last night - I was trying to finish off my blog article). I then spent some time booking in my something for my girlfriend's birthday. So it's now 12.00pm and I'm just getting started 😅.

Today's focus is on creating the first integrated flow for an app - Stripe. If I can get this mega-list on activities done, then we should be roughly back on track!

  - [x] Create routes for settings, list view and report view
  - [x] Add icon setup to React App
  - [x] Add authentication - signup/login page
  - [x] Force users to login to access settings
  - [x] Add new report (using a modal view)
  - [ ] Add profile to settings page
  - [ ] Deploy to domain (and add URL to blog)
  - [ ] Add source view to settings page

  - [ ] Create flow source authentication (OAuth) flow - Stripe
  - [ ] Initiate regular interval check (depending on the users settings) 
  - [ ] Request data source on check (and add the data to elasticsearch) - Stripe
  - [ ] Create the modal view (that enables creating a card)
  - [ ] Create a card module for display a line graph

Not a bad day, especially considering I started at 12.00pm. I got the main bulk of the front-end done, but still need to do the integrrations. I will be back on Monday!

Next update - Monday 10 June, 9.00am BST

