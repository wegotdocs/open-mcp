# @open-mcp/youtube-v3

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "youtube-v3": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/youtube-v3@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/youtube-v3@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
OAUTH2_TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add youtube-v3 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add youtube-v3 \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Other

```bash
npx @open-mcp/config add youtube-v3 \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "youtube-v3": {
      "command": "npx",
      "args": ["-y", "@open-mcp/youtube-v3"],
      "env": {"OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `OAUTH2_TOKEN` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### parameters_youtube_v3_abusereports

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_abusereports_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `abuseTypes` (array)
- `description` (string)
- `relatedEntities` (array)
- `subject` (object)

### youtube_activities_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `channelId` (string)
- `home` (boolean)
- `maxResults` (integer)
- `mine` (boolean)
- `pageToken` (string)
- `publishedAfter` (string)
- `publishedBefore` (string)
- `regionCode` (string)

### parameters_youtube_v3_activities

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_captions_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `onBehalfOf` (string)
- `onBehalfOfContentOwner` (string)

### youtube_captions_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `videoId` (string)
- `id` (array)
- `onBehalfOf` (string)
- `onBehalfOfContentOwner` (string)

### parameters_youtube_v3_captions

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_captions_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `onBehalfOf` (string)
- `onBehalfOfContentOwner` (string)
- `sync` (boolean)

### youtube_captions_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `onBehalfOf` (string)
- `onBehalfOfContentOwner` (string)
- `sync` (boolean)

### youtube_captions_download

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `onBehalfOf` (string)
- `onBehalfOfContentOwner` (string)
- `tfmt` (string)
- `tlang` (string)

### parameters_youtube_v3_captions_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_youtube_v3_channelbanners_insert

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_channelbanners_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `channelId` (string)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)

### youtube_channelsections_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `onBehalfOfContentOwner` (string)

### youtube_channelsections_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `channelId` (string)
- `hl` (string)
- `id` (array)
- `mine` (boolean)
- `onBehalfOfContentOwner` (string)

### parameters_youtube_v3_channelsections

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_channelsections_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)
- `contentDetails` (object)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `snippet` (object)

### youtube_channelsections_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `onBehalfOfContentOwner` (string)
- `contentDetails` (object)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `snippet` (object)

### youtube_channels_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `categoryId` (string)
- `forHandle` (string)
- `forUsername` (string)
- `hl` (string)
- `id` (array)
- `managedByMe` (boolean)
- `maxResults` (integer)
- `mine` (boolean)
- `mySubscribers` (boolean)
- `onBehalfOfContentOwner` (string)
- `pageToken` (string)

### parameters_youtube_v3_channels

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_channels_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `onBehalfOfContentOwner` (string)
- `auditDetails` (object)
- `brandingSettings` (object)
- `contentDetails` (object)
- `contentOwnerDetails` (object)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `localizations` (object)
- `snippet` (object)
- `statistics` (object)
- `status` (object)
- `topicDetails` (object)

### youtube_commentthreads_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `allThreadsRelatedToChannelId` (string)
- `channelId` (string)
- `id` (array)
- `maxResults` (integer)
- `moderationStatus` (string)
- `order` (string)
- `pageToken` (string)
- `searchTerms` (string)
- `textFormat` (string)
- `videoId` (string)

### parameters_youtube_v3_commentthreads

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_commentthreads_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `replies` (object)
- `snippet` (object)

### youtube_youtube_v3_updatecommentthreads

**Environment variables**

No environment variables required

**Input schema**

- `part` (array)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `replies` (object)
- `snippet` (object)

### youtube_comments_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### youtube_comments_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `id` (array)
- `maxResults` (integer)
- `pageToken` (string)
- `parentId` (string)
- `textFormat` (string)

### parameters_youtube_v3_comments

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_comments_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `snippet` (object)

### youtube_comments_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `snippet` (object)

### parameters_youtube_v3_comments_markasspam

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_comments_markasspam

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (array)

### parameters_youtube_v3_comments_setmoderationstatus

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_comments_setmoderationstatus

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (array)
- `moderationStatus` (string)
- `banAuthor` (boolean)

### youtube_i18nlanguages_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `hl` (string)

### parameters_youtube_v3_i18nlanguages

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_i18nregions_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `hl` (string)

### parameters_youtube_v3_i18nregions

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_livebroadcasts_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)

### youtube_livebroadcasts_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `broadcastStatus` (string)
- `broadcastType` (string)
- `id` (array)
- `maxResults` (integer)
- `mine` (boolean)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)
- `pageToken` (string)

### parameters_youtube_v3_livebroadcasts

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_livebroadcasts_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)
- `contentDetails` (object)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `monetizationDetails` (object)
- `snippet` (object)
- `statistics` (object)
- `status` (object)

### youtube_livebroadcasts_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)
- `contentDetails` (object)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `monetizationDetails` (object)
- `snippet` (object)
- `statistics` (object)
- `status` (object)

### parameters_youtube_v3_livebroadcasts_bind

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_livebroadcasts_bind

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `part` (array)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)
- `streamId` (string)

### parameters_youtube_v3_livebroadcasts_cuepoint

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_livebroadcasts_insertcuepoint

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)
- `part` (array)
- `cueType` (string)
- `durationSecs` (integer)
- `etag` (string)
- `b_id` (string)
- `insertionOffsetTimeMs` (string)
- `walltimeMs` (string)

### parameters_youtube_v3_livebroadcasts_transition

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_livebroadcasts_transition

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `broadcastStatus` (string)
- `id` (string)
- `part` (array)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)

### youtube_livechatbans_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### parameters_youtube_v3_livechat_bans

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_livechatbans_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `snippet` (object)

### youtube_livechatmessages_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### youtube_livechatmessages_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `liveChatId` (string)
- `part` (array)
- `hl` (string)
- `maxResults` (integer)
- `pageToken` (string)
- `profileImageSize` (integer)

### parameters_youtube_v3_livechat_messages

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_livechatmessages_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `authorDetails` (object)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `snippet` (object)

### youtube_livechatmoderators_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### youtube_livechatmoderators_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `liveChatId` (string)
- `part` (array)
- `maxResults` (integer)
- `pageToken` (string)

### parameters_youtube_v3_livechat_moderators

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_livechatmoderators_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `snippet` (object)

### youtube_livestreams_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)

### youtube_livestreams_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `id` (array)
- `maxResults` (integer)
- `mine` (boolean)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)
- `pageToken` (string)

### parameters_youtube_v3_livestreams

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_livestreams_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)
- `cdn` (object)
- `contentDetails` (object)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `snippet` (object)
- `status` (object)

### youtube_livestreams_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)
- `cdn` (object)
- `contentDetails` (object)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `snippet` (object)
- `status` (object)

### youtube_members_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `filterByMemberChannelId` (string)
- `hasAccessToLevel` (string)
- `maxResults` (integer)
- `mode` (string)
- `pageToken` (string)

### parameters_youtube_v3_members

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_membershipslevels_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)

### parameters_youtube_v3_membershipslevels

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_playlistimages_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `onBehalfOfContentOwner` (string)

### youtube_playlistimages_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `maxResults` (integer)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)
- `pageToken` (string)
- `parent` (string)
- `part` (array)

### parameters_youtube_v3_playlistimages

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_playlistimages_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)
- `part` (array)

### youtube_playlistimages_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `onBehalfOfContentOwner` (string)
- `part` (array)
- `id` (string)
- `kind` (string)
- `snippet` (object)

### youtube_playlistitems_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `onBehalfOfContentOwner` (string)

### youtube_playlistitems_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `id` (array)
- `maxResults` (integer)
- `onBehalfOfContentOwner` (string)
- `pageToken` (string)
- `playlistId` (string)
- `videoId` (string)

### parameters_youtube_v3_playlistitems

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_playlistitems_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `onBehalfOfContentOwner` (string)
- `contentDetails` (object)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `snippet` (object)
- `status` (object)

### youtube_playlistitems_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `onBehalfOfContentOwner` (string)
- `contentDetails` (object)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `snippet` (object)
- `status` (object)

### youtube_playlists_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `onBehalfOfContentOwner` (string)

### youtube_playlists_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `channelId` (string)
- `hl` (string)
- `id` (array)
- `maxResults` (integer)
- `mine` (boolean)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)
- `pageToken` (string)

### parameters_youtube_v3_playlists

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_playlists_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)
- `contentDetails` (object)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `localizations` (object)
- `player` (object)
- `snippet` (object)
- `status` (object)

### youtube_playlists_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `onBehalfOfContentOwner` (string)
- `contentDetails` (object)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `localizations` (object)
- `player` (object)
- `snippet` (object)
- `status` (object)

### youtube_search_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `channelId` (string)
- `channelType` (string)
- `eventType` (string)
- `forContentOwner` (boolean)
- `forDeveloper` (boolean)
- `forMine` (boolean)
- `location` (string)
- `locationRadius` (string)
- `maxResults` (integer)
- `onBehalfOfContentOwner` (string)
- `order` (string)
- `pageToken` (string)
- `publishedAfter` (string)
- `publishedBefore` (string)
- `q` (string)
- `regionCode` (string)
- `relevanceLanguage` (string)
- `safeSearch` (string)
- `topicId` (string)
- `type` (array)
- `videoCaption` (string)
- `videoCategoryId` (string)
- `videoDefinition` (string)
- `videoDimension` (string)
- `videoDuration` (string)
- `videoEmbeddable` (string)
- `videoLicense` (string)
- `videoPaidProductPlacement` (string)
- `videoSyndicated` (string)
- `videoType` (string)

### parameters_youtube_v3_search

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_subscriptions_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### youtube_subscriptions_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `channelId` (string)
- `forChannelId` (string)
- `id` (array)
- `maxResults` (integer)
- `mine` (boolean)
- `myRecentSubscribers` (boolean)
- `mySubscribers` (boolean)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)
- `order` (string)
- `pageToken` (string)

### parameters_youtube_v3_subscriptions

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_subscriptions_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `contentDetails` (object)
- `etag` (string)
- `id` (string)
- `kind` (string)
- `snippet` (object)
- `subscriberSnippet` (object)

### youtube_superchatevents_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `hl` (string)
- `maxResults` (integer)
- `pageToken` (string)

### parameters_youtube_v3_superchatevents

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_youtube_v3_tests

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_tests_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `externalChannelId` (string)
- `featuredPart` (boolean)
- `gaia` (string)
- `id` (string)
- `snippet` (object)

### youtube_thirdpartylinks_delete

**Environment variables**

No environment variables required

**Input schema**

- `linkingToken` (string)
- `type` (string)
- `externalChannelId` (string)
- `part` (array)

### youtube_thirdpartylinks_list

**Environment variables**

No environment variables required

**Input schema**

- `part` (array)
- `externalChannelId` (string)
- `linkingToken` (string)
- `type` (string)

### parameters_youtube_v3_thirdpartylinks

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_thirdpartylinks_insert

**Environment variables**

No environment variables required

**Input schema**

- `part` (array)
- `externalChannelId` (string)
- `etag` (string)
- `kind` (string)
- `linkingToken` (string)
- `snippet` (object)
- `status` (object)

### youtube_thirdpartylinks_update

**Environment variables**

No environment variables required

**Input schema**

- `part` (array)
- `externalChannelId` (string)
- `etag` (string)
- `kind` (string)
- `linkingToken` (string)
- `snippet` (object)
- `status` (object)

### parameters_youtube_v3_thumbnails_set

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_thumbnails_set

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `videoId` (string)
- `onBehalfOfContentOwner` (string)

### youtube_videoabusereportreasons_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `hl` (string)

### parameters_youtube_v3_videoabusereportreasons

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_videocategories_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `hl` (string)
- `id` (array)
- `regionCode` (string)

### parameters_youtube_v3_videocategories

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_videos_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `onBehalfOfContentOwner` (string)

### youtube_videos_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `chart` (string)
- `hl` (string)
- `id` (array)
- `locale` (string)
- `maxHeight` (integer)
- `maxResults` (integer)
- `maxWidth` (integer)
- `myRating` (string)
- `onBehalfOfContentOwner` (string)
- `pageToken` (string)
- `regionCode` (string)
- `videoCategoryId` (string)

### parameters_youtube_v3_videos

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_videos_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `autoLevels` (boolean)
- `notifySubscribers` (boolean)
- `onBehalfOfContentOwner` (string)
- `onBehalfOfContentOwnerChannel` (string)
- `stabilize` (boolean)

### youtube_videos_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `part` (array)
- `onBehalfOfContentOwner` (string)
- `ageGating` (object)
- `contentDetails` (object)
- `etag` (string)
- `fileDetails` (object)
- `id` (string)
- `kind` (string)
- `liveStreamingDetails` (object)
- `localizations` (object)
- `monetizationDetails` (object)
- `player` (object)
- `processingDetails` (object)
- `recordingDetails` (object)
- `snippet` (object)
- `statistics` (object)
- `status` (object)
- `suggestions` (object)
- `topicDetails` (object)

### youtube_videos_getrating

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (array)
- `onBehalfOfContentOwner` (string)

### parameters_youtube_v3_videos_getrating

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_youtube_v3_videos_rate

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_videos_rate

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `rating` (string)

### parameters_youtube_v3_videos_reportabuse

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_videos_reportabuse

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `onBehalfOfContentOwner` (string)
- `comments` (string)
- `language` (string)
- `reasonId` (string)
- `secondaryReasonId` (string)
- `videoId` (string)

### parameters_youtube_v3_watermarks_set

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_watermarks_set

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `channelId` (string)
- `onBehalfOfContentOwner` (string)

### parameters_youtube_v3_watermarks_unset

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### youtube_watermarks_unset

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `channelId` (string)
- `onBehalfOfContentOwner` (string)
