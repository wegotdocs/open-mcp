# @open-mcp/spotify

## Installing

First set the environment variables as shell variables:

```bash
OAUTH2_TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add spotify \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add spotify \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Other

```bash
npx @open-mcp/config add spotify \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "spotify": {
      "command": "npx",
      "args": ["-y", "@open-mcp/spotify"],
      "env": {"OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `OAUTH2_TOKEN`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/spotify
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/spotify`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### get_an_album

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the album.\n"),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional()
}
```

### get_multiple_albums

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.\n"),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional()
}
```

### get_an_albums_tracks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the album.\n"),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional()
}
```

### get_an_artist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.\n")
}
```

### get_multiple_artists

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the artists. Maximum: 50 IDs.\n")
}
```

### get_an_artists_albums

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.\n"),
  "include_groups": z.string().describe("A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned. <br/>\nValid values are:<br/>- \`album\`<br/>- \`single\`<br/>- \`appears_on\`<br/>- \`compilation\`<br/>For example: \`include_groups=album,single\`.\n").optional(),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional()
}
```

### get_an_artists_top_tracks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.\n"),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional()
}
```

### get_an_artists_related_artists

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.\n")
}
```

### get_a_show

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the show.\n"),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional()
}
```

### get_multiple_shows

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional(),
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs.\n")
}
```

### get_a_shows_episodes

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the show.\n"),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional()
}
```

### get_an_episode

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode."),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional()
}
```

### get_multiple_episodes

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs.\n"),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional()
}
```

### get_an_audiobook

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the audiobook.\n"),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional()
}
```

### get_multiple_audiobooks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: \`ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ\`. Maximum: 50 IDs.\n"),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional()
}
```

### get_audiobook_chapters

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the audiobook.\n"),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional()
}
```

### get_users_saved_audiobooks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional()
}
```

### save_audiobooks_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: \`ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ\`. Maximum: 50 IDs.\n")
}
```

### remove_audiobooks_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: \`ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ\`. Maximum: 50 IDs.\n")
}
```

### check_users_saved_audiobooks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: \`ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ\`. Maximum: 50 IDs.\n")
}
```

### get_a_chapter

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the chapter.\n"),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional()
}
```

### get_several_chapters

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: \`ids=0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU\`. Maximum: 50 IDs.\n"),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional()
}
```

### get_track

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the track.\n"),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional()
}
```

### get_several_tracks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional(),
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: \`ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M\`. Maximum: 50 IDs.\n")
}
```

### search

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "q": z.string().describe("Your search query.\n\nYou can narrow down your search using field filters. The available filters are \`album\`, \`artist\`, \`track\`, \`year\`, \`upc\`, \`tag:hipster\`, \`tag:new\`, \`isrc\`, and \`genre\`. Each field filter only applies to certain result types.\n\nThe \`artist\` and \`year\` filters can be used while searching albums, artists and tracks. You can filter on a single \`year\` or a range (e.g. 1955-1960).<br />\nThe \`album\` filter can be used while searching albums and tracks.<br />\nThe \`genre\` filter can be used while searching artists and tracks.<br />\nThe \`isrc\` and \`track\` filters can be used while searching tracks.<br />\nThe \`upc\`, \`tag:new\` and \`tag:hipster\` filters can only be used while searching albums. The \`tag:new\` filter will return albums released in the past two weeks and \`tag:hipster\` can be used to return only albums with the lowest 10% popularity.<br />\n"),
  "type": z.array(z.enum(["album","artist","playlist","track","show","episode","audiobook"])).describe("A comma-separated list of item types to search across. Search results include hits\nfrom all the specified item types. For example: \`q=abacab&type=album,track\` returns\nboth albums and tracks matching \"abacab\".\n"),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of results to return in each item type.\n").optional(),
  "offset": z.number().int().gte(0).lte(1000).describe("The index of the first result to return. Use\nwith limit to get the next page of search results.\n").optional(),
  "include_external": z.literal("audio").describe("If \`include_external=audio\` is specified it signals that the client can play externally hosted audio content, and marks\nthe content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.\n").optional()
}
```

### get_current_users_profile

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_playlist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n"),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional(),
  "fields": z.string().describe("Filters for the query: a comma-separated list of the\nfields to return. If omitted, all fields are returned. For example, to get\njust the playlist''s description and URI: \`fields=description,uri\`. A dot\nseparator can be used to specify non-reoccurring fields, while parentheses\ncan be used to specify reoccurring fields within objects. For example, to\nget just the added date and user ID of the adder: \`fields=tracks.items(added_at,added_by.id)\`.\nUse multiple parentheses to drill down into nested objects, for example: \`fields=tracks.items(track(name,href,album(name,href)))\`.\nFields can be excluded by prefixing them with an exclamation mark, for example:\n\`fields=tracks.items(track(name,href,album(!name,href)))\`\n").optional(),
  "additional_types": z.string().describe("A comma-separated list of item types that your client supports besides the default \`track\` type. Valid types are: \`track\` and \`episode\`.<br/>\n_**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/>\nIn addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the \`type\` field of each object.\n").optional()
}
```

### change_playlist_details

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n"),
  "name": z.string().describe("The new name for the playlist, for example \`\"My New Playlist Title\"\`\n").optional(),
  "public": z.boolean().describe("The playlist's public/private status (if it should be added to the user's profile or not): \`true\` the playlist will be public, \`false\` the playlist will be private, \`null\` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)\n").optional(),
  "collaborative": z.boolean().describe("If \`true\`, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. <br/>\n_**Note**: You can only set \`collaborative\` to \`true\` on non-public playlists._\n").optional(),
  "description": z.string().describe("Value for playlist description as displayed in Spotify Clients and in the Web API.\n").optional()
}
```

### get_playlists_tracks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n"),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional(),
  "fields": z.string().describe("Filters for the query: a comma-separated list of the\nfields to return. If omitted, all fields are returned. For example, to get\njust the total number of items and the request limit:<br/>\`fields=total,limit\`<br/>A\ndot separator can be used to specify non-reoccurring fields, while parentheses\ncan be used to specify reoccurring fields within objects. For example, to\nget just the added date and user ID of the adder:<br/>\`fields=items(added_at,added_by.id)\`<br/>Use\nmultiple parentheses to drill down into nested objects, for example:<br/>\`fields=items(track(name,href,album(name,href)))\`<br/>Fields\ncan be excluded by prefixing them with an exclamation mark, for example:<br/>\`fields=items.track.album(!external_urls,images)\`\n").optional(),
  "limit": z.number().int().gte(1).lte(100).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 100.\n").optional(),
  "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional(),
  "additional_types": z.string().describe("A comma-separated list of item types that your client supports besides the default \`track\` type. Valid types are: \`track\` and \`episode\`.<br/>\n_**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/>\nIn addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the \`type\` field of each object.\n").optional()
}
```

### add_tracks_to_playlist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n"),
  "position": z.number().int().describe("The position to insert the items, a zero-based index. For example, to insert the items in the first position: \`position=0\`; to insert the items in the third position: \`position=2\`. If omitted, the items will be appended to the playlist. Items are added in the order they are listed in the query string or request body.\n").optional(),
  "uris": z.string().describe("A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add, can be track or episode URIs. For example:<br/>\`uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:track:1301WleyT98MSxVHPZCA6M, spotify:episode:512ojhOuo1ktJprKbVcKyQ\`<br/>A maximum of 100 items can be added in one request. <br/>\n_**Note**: it is likely that passing a large number of item URIs as a query parameter will exceed the maximum length of the request URI. When adding a large number of items, it is recommended to pass them in the request body, see below._\n").optional(),
  "b_uris": z.array(z.string()).describe("A JSON array of the [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add. For example: \`{\"uris\": [\"spotify:track:4iV5W9uYEdYUVa79Axb7Rh\",\"spotify:track:1301WleyT98MSxVHPZCA6M\", \"spotify:episode:512ojhOuo1ktJprKbVcKyQ\"]}\`<br/>A maximum of 100 items can be added in one request. _**Note**: if the \`uris\` parameter is present in the query string, any URIs listed here in the body will be ignored._\n").optional(),
  "b_position": z.number().int().describe("The position to insert the items, a zero-based index. For example, to insert the items in the first position: \`position=0\` ; to insert the items in the third position: \`position=2\`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: \`{\"uris\": [\"spotify:track:4iV5W9uYEdYUVa79Axb7Rh\",\"spotify:track:1301WleyT98MSxVHPZCA6M\"], \"position\": 3}\`\n").optional()
}
```

### reorder_or_replace_playlists_tracks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n"),
  "uris": z.string().describe("A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to set, can be track or episode URIs. For example: \`uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQ\`<br/>A maximum of 100 items can be set in one request.\n").optional(),
  "b_uris": z.array(z.string()).optional(),
  "range_start": z.number().int().describe("The position of the first item to be reordered.\n").optional(),
  "insert_before": z.number().int().describe("The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.\n").optional(),
  "range_length": z.number().int().describe("The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2.\n").optional(),
  "snapshot_id": z.string().describe("The playlist's snapshot ID against which you want to make the changes.\n").optional()
}
```

### remove_tracks_playlist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n"),
  "tracks": z.array(z.object({ "uri": z.string().describe("Spotify URI").optional() })).describe("An array of objects containing [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) of the tracks or episodes to remove.\nFor example: \`{ \"tracks\": [{ \"uri\": \"spotify:track:4iV5W9uYEdYUVa79Axb7Rh\" },{ \"uri\": \"spotify:track:1301WleyT98MSxVHPZCA6M\" }] }\`. A maximum of 100 objects can be sent at once.\n"),
  "snapshot_id": z.string().describe("The playlist's snapshot ID against which you want to make the changes.\nThe API will validate that the specified items exist and in the specified positions and make the changes,\neven if more recent changes have been made to the playlist.\n").optional()
}
```

### get_a_list_of_current_users_playlists

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "offset": z.number().int().describe("'The index of the first playlist to return. Default:\n0 (the first object). Maximum offset: 100.000\\. Use with \`limit\` to get the\nnext set of playlists.'\n").optional()
}
```

### get_users_saved_albums

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional(),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional()
}
```

### save_albums_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.\n"),
  "b_ids": z.array(z.string()).describe("A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: \`[\"4iV5W9uYEdYUVa79Axb7Rh\", \"1301WleyT98MSxVHPZCA6M\"]\`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the \`ids\` parameter is present in the query string, any IDs listed here in the body will be ignored._\n").optional()
}
```

### remove_albums_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.\n"),
  "b_ids": z.array(z.string()).describe("A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: \`[\"4iV5W9uYEdYUVa79Axb7Rh\", \"1301WleyT98MSxVHPZCA6M\"]\`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the \`ids\` parameter is present in the query string, any IDs listed here in the body will be ignored._\n").optional()
}
```

### check_users_saved_albums

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.\n")
}
```

### get_users_saved_tracks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional()
}
```

### save_tracks_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: \`ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M\`. Maximum: 50 IDs.\n"),
  "b_ids": z.array(z.string()).describe("A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: \`[\"4iV5W9uYEdYUVa79Axb7Rh\", \"1301WleyT98MSxVHPZCA6M\"]\`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the \`ids\` parameter is present in the query string, any IDs listed here in the body will be ignored._\n")
}
```

### remove_tracks_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: \`ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M\`. Maximum: 50 IDs.\n"),
  "b_ids": z.array(z.string()).describe("A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: \`[\"4iV5W9uYEdYUVa79Axb7Rh\", \"1301WleyT98MSxVHPZCA6M\"]\`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the \`ids\` parameter is present in the query string, any IDs listed here in the body will be ignored._\n").optional()
}
```

### check_users_saved_tracks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: \`ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M\`. Maximum: 50 IDs.\n")
}
```

### get_users_saved_episodes

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional()
}
```

### save_episodes_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 50 IDs.\n"),
  "b_ids": z.array(z.string()).describe("A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the \`ids\` parameter is present in the query string, any IDs listed here in the body will be ignored._\n")
}
```

### remove_episodes_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: \`ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M\`. Maximum: 50 IDs.\n"),
  "b_ids": z.array(z.string()).describe("A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the \`ids\` parameter is present in the query string, any IDs listed here in the body will be ignored._\n").optional()
}
```

### check_users_saved_episodes

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs.\n")
}
```

### get_users_saved_shows

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional()
}
```

### save_shows_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs.\n"),
  "b_ids": z.array(z.string()).describe("A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).  \nA maximum of 50 items can be specified in one request. *Note: if the \`ids\` parameter is present in the query string, any IDs listed here in the body will be ignored.*").optional()
}
```

### remove_shows_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs.\n"),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional(),
  "b_ids": z.array(z.string()).describe("A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).  \nA maximum of 50 items can be specified in one request. *Note: if the \`ids\` parameter is present in the query string, any IDs listed here in the body will be ignored.*").optional()
}
```

### check_users_saved_shows

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs.\n")
}
```

### get_users_profile

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "user_id": z.string().describe("The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).\n")
}
```

### get_list_users_playlists

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "user_id": z.string().describe("The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).\n"),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "offset": z.number().int().describe("The index of the first playlist to return. Default:\n0 (the first object). Maximum offset: 100.000\\. Use with \`limit\` to get the\nnext set of playlists.\n").optional()
}
```

### create_playlist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "user_id": z.string().describe("The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).\n"),
  "name": z.string().describe("The name for the new playlist, for example \`\"Your Coolest Playlist\"\`. This name does not need to be unique; a user may have several playlists with the same name.\n"),
  "public": z.boolean().describe("Defaults to \`true\`. The playlist's public/private status (if it should be added to the user's profile or not): \`true\` the playlist will be public, \`false\` the playlist will be private. To be able to create private playlists, the user must have granted the \`playlist-modify-private\` [scope](/documentation/web-api/concepts/scopes/#list-of-scopes). For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)\n").optional(),
  "collaborative": z.boolean().describe("Defaults to \`false\`. If \`true\` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set \`public\` to \`false\`. To create collaborative playlists you must have granted \`playlist-modify-private\` and \`playlist-modify-public\` [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._\n").optional(),
  "description": z.string().describe("value for playlist description as displayed in Spotify Clients and in the Web API.\n").optional()
}
```

### follow_playlist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n"),
  "public": z.boolean().describe("Defaults to \`true\`. If \`true\` the playlist will be included in user's public playlists (added to profile), if \`false\` it will remain private. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)\n").optional()
}
```

### unfollow_playlist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n")
}
```

### get_featured_playlists

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "locale": z.string().describe("The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: \`es_MX\`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language.<br/> _**Note**: if \`locale\` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._\n").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional()
}
```

### get_categories

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "locale": z.string().describe("The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: \`es_MX\`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language.<br/> _**Note**: if \`locale\` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._\n").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional()
}
```

### get_a_category

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "category_id": z.string().describe("The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.\n"),
  "locale": z.string().describe("The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: \`es_MX\`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language.<br/> _**Note**: if \`locale\` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._\n").optional()
}
```

### get_a_categories_playlists

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "category_id": z.string().describe("The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.\n"),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional()
}
```

### get_playlist_cover

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n")
}
```

### upload_custom_playlist_cover

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n")
}
```

### get_new_releases

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional()
}
```

### get_followed

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "type": z.literal("artist").describe("The ID type: currently only \`artist\` is supported.\n"),
  "after": z.string().describe("The last artist ID retrieved from the previous request.\n").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional()
}
```

### follow_artists_users

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "type": z.enum(["artist","user"]).describe("The ID type.\n"),
  "ids": z.string().describe("A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids).\nA maximum of 50 IDs can be sent in one request.\n"),
  "b_ids": z.array(z.string()).describe("A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids).\nFor example: \`{ids:[\"74ASZWbe4lXaubB36ztrGX\", \"08td7MxkoHQkXnWAYD8d6Q\"]}\`. A maximum of 50 IDs can be sent in one request. _**Note**: if the \`ids\` parameter is present in the query string, any IDs listed here in the body will be ignored._\n")
}
```

### unfollow_artists_users

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "type": z.enum(["artist","user"]).describe("The ID type: either \`artist\` or \`user\`.\n"),
  "ids": z.string().describe("A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: \`ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q\`. A maximum of 50 IDs can be sent in one request.\n"),
  "b_ids": z.array(z.string()).describe("A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: \`{ids:[\"74ASZWbe4lXaubB36ztrGX\", \"08td7MxkoHQkXnWAYD8d6Q\"]}\`. A maximum of 50 IDs can be sent in one request. _**Note**: if the \`ids\` parameter is present in the query string, any IDs listed here in the body will be ignored._\n").optional()
}
```

### check_current_user_follows

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "type": z.enum(["artist","user"]).describe("The ID type: either \`artist\` or \`user\`.\n"),
  "ids": z.string().describe("A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) to check. For example: \`ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q\`. A maximum of 50 IDs can be sent in one request.\n")
}
```

### check_if_user_follows_playlist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n"),
  "ids": z.string().describe("**Deprecated** A single item list containing current user's [Spotify Username](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 1 id.\n").optional()
}
```

### get_several_audio_features

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids)\nfor the tracks. Maximum: 100 IDs.\n")
}
```

### get_audio_features

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.\n")
}
```

### get_audio_analysis

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the track.\n")
}
```

### get_recommendations

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(100).describe("The target size of the list of recommended tracks. For seeds with unusually small pools or when highly restrictive filtering is applied, it may be impossible to generate the requested number of recommended tracks. Debugging information for such cases is available in the response. Default: 20\\. Minimum: 1\\. Maximum: 100.\n").optional(),
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional(),
  "seed_artists": z.string().describe("A comma separated list of [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for seed artists.  Up to 5 seed values may be provided in any combination of \`seed_artists\`, \`seed_tracks\` and \`seed_genres\`.<br/> _**Note**: only required if \`seed_genres\` and \`seed_tracks\` are not set_.\n").optional(),
  "seed_genres": z.string().describe("A comma separated list of any genres in the set of [available genre seeds](/documentation/web-api/reference/get-recommendation-genres). Up to 5 seed values may be provided in any combination of \`seed_artists\`, \`seed_tracks\` and \`seed_genres\`.<br/> _**Note**: only required if \`seed_artists\` and \`seed_tracks\` are not set_.\n").optional(),
  "seed_tracks": z.string().describe("A comma separated list of [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for a seed track.  Up to 5 seed values may be provided in any combination of \`seed_artists\`, \`seed_tracks\` and \`seed_genres\`.<br/> _**Note**: only required if \`seed_artists\` and \`seed_genres\` are not set_.\n").optional(),
  "min_acousticness": z.number().gte(0).lte(1).describe("For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`min_tempo=140\` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n").optional(),
  "max_acousticness": z.number().gte(0).lte(1).describe("For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`max_instrumentalness=0.35\` would filter out most tracks that are likely to be instrumental.\n").optional(),
  "target_acousticness": z.number().gte(0).lte(1).describe("For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request \`target_energy=0.6\` and \`target_danceability=0.8\`. All target values will be weighed equally in ranking results.\n").optional(),
  "min_danceability": z.number().gte(0).lte(1).describe("For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`min_tempo=140\` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n").optional(),
  "max_danceability": z.number().gte(0).lte(1).describe("For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`max_instrumentalness=0.35\` would filter out most tracks that are likely to be instrumental.\n").optional(),
  "target_danceability": z.number().gte(0).lte(1).describe("For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request \`target_energy=0.6\` and \`target_danceability=0.8\`. All target values will be weighed equally in ranking results.\n").optional(),
  "min_duration_ms": z.number().int().describe("For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`min_tempo=140\` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n").optional(),
  "max_duration_ms": z.number().int().describe("For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`max_instrumentalness=0.35\` would filter out most tracks that are likely to be instrumental.\n").optional(),
  "target_duration_ms": z.number().int().describe("Target duration of the track (ms)").optional(),
  "min_energy": z.number().gte(0).lte(1).describe("For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`min_tempo=140\` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n").optional(),
  "max_energy": z.number().gte(0).lte(1).describe("For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`max_instrumentalness=0.35\` would filter out most tracks that are likely to be instrumental.\n").optional(),
  "target_energy": z.number().gte(0).lte(1).describe("For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request \`target_energy=0.6\` and \`target_danceability=0.8\`. All target values will be weighed equally in ranking results.\n").optional(),
  "min_instrumentalness": z.number().gte(0).lte(1).describe("For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`min_tempo=140\` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n").optional(),
  "max_instrumentalness": z.number().gte(0).lte(1).describe("For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`max_instrumentalness=0.35\` would filter out most tracks that are likely to be instrumental.\n").optional(),
  "target_instrumentalness": z.number().gte(0).lte(1).describe("For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request \`target_energy=0.6\` and \`target_danceability=0.8\`. All target values will be weighed equally in ranking results.\n").optional(),
  "min_key": z.number().int().gte(0).lte(11).describe("For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`min_tempo=140\` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n").optional(),
  "max_key": z.number().int().gte(0).lte(11).describe("For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`max_instrumentalness=0.35\` would filter out most tracks that are likely to be instrumental.\n").optional(),
  "target_key": z.number().int().gte(0).lte(11).describe("For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request \`target_energy=0.6\` and \`target_danceability=0.8\`. All target values will be weighed equally in ranking results.\n").optional(),
  "min_liveness": z.number().gte(0).lte(1).describe("For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`min_tempo=140\` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n").optional(),
  "max_liveness": z.number().gte(0).lte(1).describe("For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`max_instrumentalness=0.35\` would filter out most tracks that are likely to be instrumental.\n").optional(),
  "target_liveness": z.number().gte(0).lte(1).describe("For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request \`target_energy=0.6\` and \`target_danceability=0.8\`. All target values will be weighed equally in ranking results.\n").optional(),
  "min_loudness": z.number().describe("For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`min_tempo=140\` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n").optional(),
  "max_loudness": z.number().describe("For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`max_instrumentalness=0.35\` would filter out most tracks that are likely to be instrumental.\n").optional(),
  "target_loudness": z.number().describe("For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request \`target_energy=0.6\` and \`target_danceability=0.8\`. All target values will be weighed equally in ranking results.\n").optional(),
  "min_mode": z.number().int().gte(0).lte(1).describe("For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`min_tempo=140\` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n").optional(),
  "max_mode": z.number().int().gte(0).lte(1).describe("For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`max_instrumentalness=0.35\` would filter out most tracks that are likely to be instrumental.\n").optional(),
  "target_mode": z.number().int().gte(0).lte(1).describe("For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request \`target_energy=0.6\` and \`target_danceability=0.8\`. All target values will be weighed equally in ranking results.\n").optional(),
  "min_popularity": z.number().int().gte(0).lte(100).describe("For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`min_tempo=140\` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n").optional(),
  "max_popularity": z.number().int().gte(0).lte(100).describe("For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`max_instrumentalness=0.35\` would filter out most tracks that are likely to be instrumental.\n").optional(),
  "target_popularity": z.number().int().gte(0).lte(100).describe("For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request \`target_energy=0.6\` and \`target_danceability=0.8\`. All target values will be weighed equally in ranking results.\n").optional(),
  "min_speechiness": z.number().gte(0).lte(1).describe("For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`min_tempo=140\` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n").optional(),
  "max_speechiness": z.number().gte(0).lte(1).describe("For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`max_instrumentalness=0.35\` would filter out most tracks that are likely to be instrumental.\n").optional(),
  "target_speechiness": z.number().gte(0).lte(1).describe("For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request \`target_energy=0.6\` and \`target_danceability=0.8\`. All target values will be weighed equally in ranking results.\n").optional(),
  "min_tempo": z.number().describe("For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`min_tempo=140\` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n").optional(),
  "max_tempo": z.number().describe("For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`max_instrumentalness=0.35\` would filter out most tracks that are likely to be instrumental.\n").optional(),
  "target_tempo": z.number().describe("Target tempo (BPM)").optional(),
  "min_time_signature": z.number().int().lte(11).describe("For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`min_tempo=140\` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n").optional(),
  "max_time_signature": z.number().int().describe("For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`max_instrumentalness=0.35\` would filter out most tracks that are likely to be instrumental.\n").optional(),
  "target_time_signature": z.number().int().describe("For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request \`target_energy=0.6\` and \`target_danceability=0.8\`. All target values will be weighed equally in ranking results.\n").optional(),
  "min_valence": z.number().gte(0).lte(1).describe("For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`min_tempo=140\` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n").optional(),
  "max_valence": z.number().gte(0).lte(1).describe("For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, \`max_instrumentalness=0.35\` would filter out most tracks that are likely to be instrumental.\n").optional(),
  "target_valence": z.number().gte(0).lte(1).describe("For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request \`target_energy=0.6\` and \`target_danceability=0.8\`. All target values will be weighed equally in ranking results.\n").optional()
}
```

### get_recommendation_genres

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_information_about_the_users_current_playback

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional(),
  "additional_types": z.string().describe("A comma-separated list of item types that your client supports besides the default \`track\` type. Valid types are: \`track\` and \`episode\`.<br/>\n_**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/>\nIn addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the \`type\` field of each object.\n").optional()
}
```

### transfer_a_users_playback

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "device_ids": z.array(z.string()).describe("A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:\`{device_ids:[\"74ASZWbe4lXaubB36ztrGX\"]}\`<br/>_**Note**: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return \`400 Bad Request\`_\n"),
  "play": z.boolean().describe("**true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state.\n").optional()
}
```

### get_a_users_available_devices

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_the_users_currently_playing_track

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional(),
  "additional_types": z.string().describe("A comma-separated list of item types that your client supports besides the default \`track\` type. Valid types are: \`track\` and \`episode\`.<br/>\n_**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/>\nIn addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the \`type\` field of each object.\n").optional()
}
```

### start_a_users_playback

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "device_id": z.string().describe("The id of the device this command is targeting. If not supplied, the user's currently active device is the target.").optional(),
  "context_uri": z.string().describe("Optional. Spotify URI of the context to play.\nValid contexts are albums, artists & playlists.\n\`{context_uri:\"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT\"}\`\n").optional(),
  "uris": z.array(z.string()).describe("Optional. A JSON array of the Spotify track URIs to play.\nFor example: \`{\"uris\": [\"spotify:track:4iV5W9uYEdYUVa79Axb7Rh\", \"spotify:track:1301WleyT98MSxVHPZCA6M\"]}\`\n").optional(),
  "offset": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOptional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object\n\"position\" is zero based and can’t be negative. Example: \`\"offset\": {\"position\": 5}\`\n\"uri\" is a string representing the uri of the item to start at. Example: \`\"offset\": {\"uri\": \"spotify:track:1301WleyT98MSxVHPZCA6M\"}\`\n").optional(),
  "position_ms": z.number().int().describe("Indicates from what position to start playback. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song.\n").optional()
}
```

### pause_a_users_playback

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "device_id": z.string().describe("The id of the device this command is targeting. If not supplied, the user's currently active device is the target.\n").optional()
}
```

### skip_users_playback_to_next_track

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "device_id": z.string().describe("The id of the device this command is targeting. If not supplied, the user's currently active device is the target.").optional()
}
```

### skip_users_playback_to_previous_track

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "device_id": z.string().describe("The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n").optional()
}
```

### seek_to_position_in_currently_playing_track

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "position_ms": z.number().int().describe("The position in milliseconds to seek to. Must be a\npositive number. Passing in a position that is greater than the length of\nthe track will cause the player to start playing the next song.\n"),
  "device_id": z.string().describe("The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n").optional()
}
```

### set_repeat_mode_on_users_playback

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "state": z.string().describe("**track**, **context** or **off**.<br/>\n**track** will repeat the current track.<br/>\n**context** will repeat the current context.<br/>\n**off** will turn repeat off.\n"),
  "device_id": z.string().describe("The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n").optional()
}
```

### set_volume_for_users_playback

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "volume_percent": z.number().int().describe("The volume to set. Must be a value from 0 to 100 inclusive.\n"),
  "device_id": z.string().describe("The id of the device this command is targeting. If not supplied, the user's currently active device is the target.\n").optional()
}
```

### toggle_shuffle_for_users_playback

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "state": z.boolean().describe("**true** : Shuffle user's playback.<br/>\n**false** : Do not shuffle user's playback.\n"),
  "device_id": z.string().describe("The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n").optional()
}
```

### get_recently_played

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "after": z.number().int().describe("A Unix timestamp in milliseconds. Returns all items\nafter (but not including) this cursor position. If \`after\` is specified, \`before\`\nmust not be specified.\n").optional(),
  "before": z.number().int().describe("A Unix timestamp in milliseconds. Returns all items\nbefore (but not including) this cursor position. If \`before\` is specified,\n\`after\` must not be specified.\n").optional()
}
```

### get_queue

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### add_to_queue

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "uri": z.string().describe("The uri of the item to add to the queue. Must be a track or an episode uri.\n"),
  "device_id": z.string().describe("The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n").optional()
}
```

### get_available_markets

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_users_top_artists

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "time_range": z.string().describe("Over what time frame the affinities are computed. Valid values: \`long_term\` (calculated from ~1 year of data and including all new data as it becomes available), \`medium_term\` (approximately last 6 months), \`short_term\` (approximately last 4 weeks). Default: \`medium_term\`\n").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional()
}
```

### get_users_top_tracks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "time_range": z.string().describe("Over what time frame the affinities are computed. Valid values: \`long_term\` (calculated from ~1 year of data and including all new data as it becomes available), \`medium_term\` (approximately last 6 months), \`short_term\` (approximately last 4 weeks). Default: \`medium_term\`\n").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
  "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional()
}
```
