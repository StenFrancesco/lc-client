![LOGO](https://github.com/StenFrancesco/lc-client/blob/master/docs/logo.png)

// This project is still in progress //

## Table of contents:

- **[Overview](#overview)**
- **[User stories](#user-stories)**
- **[Data model](#data-model)**
- **[Technologies used](#technologies-used)**
- **[Server](#server)**

## Overview

In World of Warcraft Classic, there is no in-game loot system catered to automatically handing out certain gear/items that drop from bosses in raids/dungeons. In order to tackle this issue, guilds or premade groups use different systems:

- Rolling: every person who wants it rolls a random 1-100, highest wins
- DKP, Dragon Kill Points: People get to bid with the attendance points accumulated over multiple events
- Loot Council: A fixed group of leadership assigns the dropped item to a specific person. This is decided using several parameters:
  -- person wants the item and has already stated this to leadership
  -- person can have the item and use it for their current talent specialization
  -- person has not received any item for x amount of time

The Lootcouncil app will help the leadership of a guild or an organized pick up group (PUG) handing out items, in order for this to go faster during an event, and for clarity amongst the people attending.

## User stories

- Admin can assign characters to subadmins
- User can search for item in database
- Admin and subadmin can assign items to characters using Drag and Drop
- User can make wishlist for character
- Admin and subadmin can see wishlist of character
- User can see in character sheet what they have already received
- User can see in character sheet what they will receive
- Admin and subadmin can accept invites to guild/group
- User can search for guild/group to apply to

## Data model

![DATAMODEL_LC](https://github.com/StenFrancesco/lc-client/blob/master/docs/datamodel_lc.png)

## Technologies used

- ReactJS
- Redux
- React Drag and Drop
- React Search Autocomplete
- React Bootstrap
- Axios
- Express
- REST API
- Sequelize
- PostgreSQL
- NodeJS

## Server

Link to backend:

[lc-server](https://github.com/StenFrancesco/lc-server)
