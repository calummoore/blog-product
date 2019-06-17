---
title:  Snap Report
date: "2019-06-05T00:00:00.000Z"
description: A dashboard of key metrics from all the apps you use, create unlimited free reports in seconds!
week: 2
icon: ./snap-report-icon.png
# website: reporter.xyz
# github: https://github.com/1productaweek/reporter
status: Day 3 - in progress!
toc: Plan,Day 1,Day 2,Day 3,Day 4,Day 5,Day 6, Day 7
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
Thursday, 05 June 2019: 🏃 + ⛅️ 19° - Sunny intervals and a gentle breeze

Feeling pretty good today. It's always exciting to start a new challenge. I've tried to do an idea like this before and massively over-complicated it, so I need to make sure I don't make that mistake this time!

  - [x] Created the plan
  - [x] Initial design completed

### Day 2

Thursday, 06 June 2019: 🏃 + ⛅️ 16° - Partly cloudy with a gentle breeze

Ok, feeling a bit tired - but ready to go.

  - [x] Designed the add product page
  - [x] Created initial web-app setup
  - [x] Reviewed architecture approach
  - [ ] Basic web view complete

Argh! It's day 2 and I'm already behind 😅. I've been a bit distracted by trying to promote existing stuff. It's really hard to context switch between promotion and product development - but I need to get better at it if this is going to work. To try and fix this, I'm going to avoid all emails/comms/marketing and turn off all notifications before 5pm. If you try to speak to me before then, hold on tight, you'll get the response when I come back online 😊.


### Day 3

Friday, 07 June 2019: ⛅️ 17° - Light rain showers and a moderate breeze

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

If there's time:

  - [ ] Create flow source authentication (OAuth) flow - Stripe
  - [ ] Initiate regular interval check (depending on the users settings) 
  - [ ] Request data source on check (and add the data to elasticsearch) - Stripe
  - [ ] Create the modal view (that enables creating a card)
  - [ ] Create a card module for display a line graph

Not a bad day, especially considering I started at 12.00pm. I got the main bulk of the front-end done, but still need to do the integrations. I will be back on Monday!


### Day 4

Monday, 10 June 2019: 🌦 14° - Heavy rain showers and a gentle breeze

Today is going to be a bit of a long shot. I've been thinking and reflecting over the weekend, and I'm starting to feel like the integrations should take a higher priority. If you’re a user, and your integration is not available, the app is not going to be useful to you. To make this possible (without spending the rest of my life creating integrations), I'm going to allow user generated integrations from (LAUNCH) DAY 1. This is a big task 😬. I'm giving myself today only to try and gauge just how big it is. Let's see!

  - [x] Layout the architecture of integrations
  - [x] Test deploying code to Zeit
  - [x] Create initial GUI for integrations - name, icon, code
  - [x] Create a deployment based on user code
  - [ ] Create basic / OAUTH2 authentication types
  - [ ] Create a base library that will import user modules and create routes (e.g. /code1, /code2) and proxy request

It's been a good day, I think I have achieved enough to validate that the user integrations can be done over the next couple of days - therefore we will be focussing on that approach. Tomorrow, we need to focus on finalising the integrations - versions, authentication, base library.


### Day 5

Tuesday, 11 June 2019: 🌨 14° - Drizzle and a gentle breeze

I'm starting a little bit late today (10.00am), as I was up late working on the new intro for the daily vlog that I will be launching soon. Going to focus on finalising the integrations, in particular versions, authentication, base library.

  - [ ] Versions for integrations - update to app and firebase data structure
  - [ ] Authentication - add basic auth authentication
  - [ ] Authentication - add OAuth authentication
  - [ ] Base library

If there's time!
  - [ ] Display a datatable with timeseries records
  - [ ] Add a link to the integration maker 
  - [ ] Add the component library page

So I didn't do any of the above today 😂! Aware of how little time I had left, I re-thought through the process of how to get data into the components. Originally, I had planned to  

That's the power of forcing yourself to launch - you find ways to simplify - which end up improving the end user experience!


### Day 6

Wednesday 12 June 2019: 🌦 16° -  Light rain showers and light winds

Now I have a new optimized way to get data into components, I'm going to focus on getting the component editor complete today. The component editor is now the only thing required for user generated components - and so if I can complete that, I will be very close to a finished product!

This is the full list of things I need to do over the next 2 days - but adding here so I have visbility as to what is left!

  - [x] Re-design the component editor with new appraoch
  - [ ] Build the component editor (UI and Firebase)
  - [ ] Create the DATA wrapper service (that will be used to deploy)
  - [ ] Create the COMPONENT bundler service
  - [ ] Allow component to be embedded (we will actually embed into all reports)
  - [ ] Create OAUTH authenticator service (and deploy with serverless)!
  - [ ] Create component selector (to enable adding components to the report)
  - [ ] Add workspaces to the dashboard page
  - [ ] Add billing/team to the settings page
  - [ ] Create a landing page (with report demo)
  - [ ] Create a pricing page (need to figure out what to charge for!)
  - [ ] Create a docs page that will describe how to use the component editor

If there's time

  - [ ] Add a component library for the component editor to use
  - [ ] Create template cards to get people started
  - [ ] Add social sharing tools to the reports
  - [ ] Create a chrome extension to allow reports to be added


Wow, that's a lot still to do! Wish me luck!


### Day 7

Thursday 13 June 2019: 🌦 14° -  Light rain showers and a moderate breeze

Not surprisingly, I didn't get even close to everything done. In fact, I'm still working my way through the 2nd task! I remain positive, as that 2nd task is a monster (and should really have been split out into seperate tasks) - it's going to be a late night tonight!

  - [x] Re-design the component editor with new appraoch
  - [ ] Build the component editor (UI and Firebase)

I'm going to need to split this 2nd taks into more sub-items!


### Day 8

Friday 14 June 2019: 🌥 19° -  Sunny intervals and a gentle breeze 

Yes, I'm aware this is now more than a week 😢. It's a much bigger task than I anticipated, and shouldn't have taken it on for week 2 - but I feel like I'm almost there! I'm setting a new deadline of launching on Wednesday 19th 2019. Wish me luck!

  - [x] Create code deployment via AWS Lambda (had to switch from using Zeit Now due to usage limits)
  - [x] Added debug section to code editor


### Day 9

Monday 17 June 2019:  21° ☁️ -  Light cloud and a moderate breeze

Lot's to do today, and feeling the pressure of being behind. This is an important day - no distractions!

  - [ ] Publish and invoke server code via API call (using Firebase)
  - [ ] Add styles section to the component editor
  - [ ] Build user app and publish script to GCP Storage bucket
  - [ ] Create the embed service (the controller for the inner embed)
  - [ ] Add publish button that creates a new version of the card
  - [ ] Add CRON job that updates unused cards
  - [ ] Add OAuth provider service (with icon app upload)
  - [ ] Create card instance modal - to enable creation of new 
  - [ ] Setup Firebase Firestore structure to include workspaces
  - [ ] Setup new Firestore rules for workspaces
  - [ ] Add billing/team to the settings page
