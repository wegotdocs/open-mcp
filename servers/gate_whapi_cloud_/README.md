# @open-mcp/gate_whapi_cloud_

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "gate_whapi_cloud_": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/gate_whapi_cloud_@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/gate_whapi_cloud_@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add gate_whapi_cloud_ \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY \
  --TOKEN=$TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add gate_whapi_cloud_ \
  .cursor/mcp.json \
  --API_KEY=$API_KEY \
  --TOKEN=$TOKEN
```

### Other

```bash
npx @open-mcp/config add gate_whapi_cloud_ \
  /path/to/client/config.json \
  --API_KEY=$API_KEY \
  --TOKEN=$TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "gate_whapi_cloud_": {
      "command": "npx",
      "args": ["-y", "@open-mcp/gate_whapi_cloud_"],
      "env": {"API_KEY":"...","TOKEN":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider
- `TOKEN` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### checkhealth

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `wakeup` (boolean)
- `platform` (string)
- `channel_type` (string)

### getchannelsettings

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### resetchannelsettings

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### updatechannelsettings

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `callback_backoff_delay_ms` (number)
- `max_callback_backoff_delay_ms` (number)
- `callback_persist` (boolean)
- `media` (object)
- `webhooks` (array)
- `proxy` (string)
- `mobile_proxy` (string)
- `offline_mode` (boolean)
- `full_history` (boolean)

### getallowedevents

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### webhooktest

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### loginuser

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `wakeup` (boolean)
- `size` (number)
- `width` (number)
- `height` (number)
- `color_light` (string)
- `color_dark` (string)

### loginuserimage

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `wakeup` (boolean)
- `size` (number)
- `width` (number)
- `height` (number)
- `color_light` (string)
- `color_dark` (string)

### loginuserrowdata

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `wakeup` (boolean)

### loginuserviaauthcode

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `PhoneNumber` (string)

### logoutuser

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### getuserprofile

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### updateuserprofile

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `name` (string)
- `about` (string)
- `icon` (string)

### getmessages

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `count` (number)
- `offset` (number)
- `time_from` (number)
- `time_to` (number)
- `normal_types` (boolean)
- `author` (string)
- `from_me` (boolean)
- `sort` (string)

### getmessagesbychatid

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `ChatID` (string)
- `count` (number)
- `offset` (number)
- `time_from` (number)
- `time_to` (number)
- `normal_types` (boolean)
- `author` (string)
- `from_me` (boolean)
- `sort` (string)

### sendmessagetext

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessageimage

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessagevideo

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessageshort

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessagegif

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessageaudio

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessagevoice

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessagedocument

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessagelinkpreview

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessagelocation

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessagelivelocation

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessagecontact

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessagecontactlist

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessagepoll

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessageinteractive

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessagesticker

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessagestory

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessagestoryaudio

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessagestorymedia

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### sendmessagestorytext

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `contacts` (array)
- `exclude_contacts` (array)
- `caption` (string)
- `background_color` (string)
- `caption_color` (string)
- `font_type` (string)

### sendmediamessage

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `MediaMessageType` (string)
- `SendParams` (object)
- `no_encode` (boolean)
- `media` (other)

### getmessage

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `MessageID` (string)

### forwardmessage

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `MessageID` (string)
- `to` (string)
- `force` (boolean)

### markmessageasread

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `MessageID` (string)

### deletemessage

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `MessageID` (string)

### reacttomessage

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `MessageID` (string)
- `emoji` (string)

### starmessage

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `MessageID` (string)
- `starred` (boolean)

### pinmessage

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `MessageID` (string)
- `time` (string)

### unpinmessage

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `MessageID` (string)

### getchats

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `count` (number)
- `offset` (number)

### getchat

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `ChatID` (string)

### deletechat

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `ChatID` (string)

### archivechat

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `ChatID` (string)
- `archive` (boolean)

### patchchat

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `ChatID` (string)
- `pin` (boolean)
- `mute_until` (integer)
- `mark_unread` (boolean)
- `ephemeral` (string)

### getcontacts

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `count` (number)
- `offset` (number)

### checkphones

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `blocking` (string)
- `contacts` (array)
- `force_check` (boolean)

### getcontact

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `ContactID` (string)

### sendcontact

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `ContactID` (string)

### checkexist

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `ContactID` (string)

### getcontactprofile

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `ContactID` (string)

### sendmepresence

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `presence` (string)

### getpresence

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `EntryID` (other)

### subscribepresence

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `EntryID` (other)

### sendpresence

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `EntryID` (other)
- `presence` (string)
- `delay` (number)

### getgroups

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `count` (number)
- `offset` (number)

### creategroup

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### acceptgroupinvite

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `invite_code` (string)

### getgroup

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `GroupID` (string)

### updategroupinfo

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `GroupID` (string)
- `subject` (string)
- `description` (string)

### leavegroup

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `GroupID` (string)

### updategroupsetting

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `GroupID` (string)
- `setting` (string)
- `policy` (string)

### getgroupinvite

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `GroupID` (string)

### revokegroupinvite

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `GroupID` (string)

### addgroupparticipant

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `GroupID` (string)

### removegroupparticipant

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `GroupID` (string)

### getgroupicon

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `GroupID` (string)

### setgroupicon

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `GroupID` (string)
- `media` (other)
- `mime_type` (string)

### deletegroupicon

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `GroupID` (string)

### demotegroupadmin

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `GroupID` (string)

### promotetogroupadmin

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `GroupID` (string)

### sendgroupinvite

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `InviteCode` (string)

### getgroupmetadatabyinvitecode

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `InviteCode` (string)

### getgroupapplicationslist

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `GroupID` (string)
- `count` (number)
- `offset` (number)

### approvegroupapplicationslist

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `GroupID` (string)
- `application` (string)

### rejectgroupapplicationslist

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `GroupID` (string)
- `application` (string)

### getstories

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `count` (number)
- `offset` (number)
- `time_from` (number)
- `time_to` (number)
- `normal_types` (boolean)
- `author` (string)
- `from_me` (boolean)

### createstory

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### createstorytext

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `contacts` (array)
- `exclude_contacts` (array)
- `caption` (string)
- `background_color` (string)
- `caption_color` (string)
- `font_type` (string)

### createstorymedia

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### createstoryaudio

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### getstory

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `MessageID` (string)

### copystory

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `MessageID` (string)
- `contacts` (array)
- `exclude_contacts` (array)

### getmessageviewstatuses

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `MessageID` (string)

### getnewsletters

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `count` (number)
- `offset` (number)

### createnewsletter

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `name` (string)
- `description` (string)
- `newsletter_pic` (string)

### findnewsletter

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `country_code` (string)
- `search` (string)
- `newsletter_field` (string)
- `cursor` (string)
- `count` (number)
- `sort` (string)

### recommendednewsletter

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `country_code` (string)
- `cursor` (string)
- `count` (number)

### getnewsletter

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `NewsletterID` (string)
- `user role` (string)

### deletenewsletter

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `NewsletterID` (string)

### editnewsletter

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `NewsletterID` (string)
- `name` (string)
- `description` (string)
- `newsletter_pic` (string)
- `reactions` (string)

### subscribenewsletter

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `NewsletterID` (string)

### unsubscribenewsletter

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `NewsletterID` (string)

### subscribenewsletterinvite

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `NewsletterInviteCode` (string)

### unsubscribenewsletterinvite

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `NewsletterInviteCode` (string)

### trackingnewsletter

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `NewsletterID` (string)

### getmessagesnewsletter

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `NewsletterID` (string)
- `count` (number)
- `before` (number)
- `after` (number)

### createnewsletteradmininvite

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `NewsletterID` (string)
- `ContactID` (string)
- `message` (string)

### revokenewsletteradmininvite

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `NewsletterID` (string)
- `ContactID` (string)

### acceptnewsletteradminrequest

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `NewsletterID` (string)
- `ContactID` (string)

### demotenewsletteradmin

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `NewsletterID` (string)
- `ContactID` (string)

### sendnewsletterinvite

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `NewsletterInviteCode` (string)

### getnewsletterbyinvitecode

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `NewsletterInviteCode` (string)

### uploadmedia

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `no_encode` (boolean)
- `media` (other)

### getmediafiles

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `count` (number)
- `offset` (number)
- `time_from` (number)
- `time_to` (number)
- `sort` (string)

### getmedia

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `MediaID` (string)

### deletemedia

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `MediaID` (string)

### blacklistadd

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `ContactID` (string)

### blacklistremove

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `ContactID` (string)

### getblacklist

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### getbusinessprofile

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### editbusinessprofile

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `address` (string)
- `description` (string)
- `email` (string)
- `hours` (object)
- `websites` (array)

### getproducts

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `count` (number)
- `offset` (number)

### createproduct

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### getcontactproducts

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `ContactID` (string)
- `count` (number)
- `offset` (number)

### getproduct

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `ProductID` (string)

### sendproduct

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `ProductID` (string)

### updateproduct

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `ProductID` (string)
- `product_retailer_id` (string)
- `currency` (string)
- `images` (array)
- `availability` (string)
- `name` (string)
- `url` (string)
- `description` (string)
- `price` (number)
- `is_hidden` (boolean)

### deleteproduct

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `ProductID` (string)

### getorderitems

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `OrderID` (string)
- `order_token` (string)

### sendcatalog

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `ContactID` (string)

### createcollection

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `name` (string)
- `products` (array)

### getcollectionslist

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `count` (number)
- `offset` (number)

### getcollection

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `CollectionID` (string)

### editcollection

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `CollectionID` (string)
- `name` (string)
- `remove_products` (array)
- `add_products` (array)

### deletecollection

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `CollectionID` (string)

### getlabels

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### createlabel

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `id` (string)
- `name` (string)
- `color` (string)

### getlabelassociations

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `LabelID` (string)

### addlabelassociation

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `LabelID` (string)
- `AssociationID` (other)

### deletelabelassociation

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `LabelID` (string)
- `AssociationID` (other)

### getlimits

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### getcommunities

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `count` (number)
- `offset` (number)

### createcommunity

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `subject` (string)
- `description` (string)

### getcommunity

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `CommunityID` (string)

### deactivatecommunity

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `CommunityID` (string)

### revokecommunityinvite

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `CommunityID` (string)

### unlinkgroupfromcommunity

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `CommunityID` (string)
- `GroupID` (string)

### linkgrouptocommunity

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `CommunityID` (string)
- `GroupID` (string)

### joinincommunitygroup

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `CommunityID` (string)
- `GroupID` (string)

### creategroupincommunity

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `CommunityID` (string)

### changecommunitysettings

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `CommunityID` (string)
- `setting` (string)
- `policy` (string)

### addcommunityparticipant

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `CommunityID` (string)

### removecommunityparticipant

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `CommunityID` (string)

### promotecommunityparticipant

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `CommunityID` (string)

### demotecommunityparticipant

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `CommunityID` (string)

### getcommunitysubgroups

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `CommunityID` (string)

### createevent

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

No input parameters

### createcallevent

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `start_time` (string)

### rejectcall

**Environment variables**

- `API_KEY`
- `TOKEN`

**Input schema**

- `CallID` (string)
- `callFrom` (string)
