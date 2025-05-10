# @open-mcp/_protocol_hostpath_

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add _protocol_hostpath_ \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --APIKEY=... \
  --X_API_KEY=...
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add _protocol_hostpath_ \
  .cursor/mcp.json \
  --APIKEY=... \
  --X_API_KEY=...
```

### Other

```bash
npx @open-mcp/config add _protocol_hostpath_ \
  /path/to/client/config.json \
  --APIKEY=... \
  --X_API_KEY=...
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "_protocol_hostpath_": {
      "command": "npx",
      "args": ["-y", "@open-mcp/_protocol_hostpath_"],
      "env": {"APIKEY":"...","X_API_KEY":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `APIKEY`
- `X_API_KEY`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/_protocol_hostpath_
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/_protocol_hostpath_`
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

### get_api_v3_alttitle

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "movieId": z.number().int().optional(),
  "movieMetadataId": z.number().int().optional()
}
```

### get_api_v3_alttitle_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_login

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "returnUrl": z.string().optional()
}
```

### get_login

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_logout

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_autotagging

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "removeTagsAutomatically": z.boolean().optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "specifications": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional() }).strict()).nullable().optional()
}
```

### get_api_v3_autotagging

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### put_api_v3_autotagging_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "removeTagsAutomatically": z.boolean().optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "specifications": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional() }).strict()).nullable().optional()
}
```

### delete_api_v3_autotagging_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_autotagging_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_autotagging_schema

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_system_backup

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### delete_api_v3_system_backup_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### post_api_v3_system_backup_restore_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### post_api_v3_system_backup_restore_upload

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_blocklist

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "page": z.number().int().optional(),
  "pageSize": z.number().int().optional(),
  "sortKey": z.string().optional(),
  "sortDirection": z.enum(["default","ascending","descending"]).optional(),
  "movieIds": z.array(z.number().int()).optional(),
  "protocols": z.array(z.enum(["unknown","usenet","torrent"])).optional()
}
```

### get_api_v3_blocklist_movie

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "movieId": z.number().int().optional()
}
```

### delete_api_v3_blocklist_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### delete_api_v3_blocklist_bulk

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "ids": z.array(z.number().int()).nullable().optional()
}
```

### get_api_v3_calendar

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "start": z.string().datetime({ offset: true }).optional(),
  "end": z.string().datetime({ offset: true }).optional(),
  "unmonitored": z.boolean().optional(),
  "tags": z.string().optional()
}
```

### get_feed_v3_calendar_radarr_ics

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "pastDays": z.number().int().optional(),
  "futureDays": z.number().int().optional(),
  "tags": z.string().optional(),
  "unmonitored": z.boolean().optional()
}
```

### get_api_v3_collection

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "tmdbId": z.number().int().optional()
}
```

### put_api_v3_collection

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "collectionIds": z.array(z.number().int()).nullable().optional(),
  "monitored": z.boolean().nullable().optional(),
  "monitorMovies": z.boolean().nullable().optional(),
  "searchOnAdd": z.boolean().nullable().optional(),
  "qualityProfileId": z.number().int().nullable().optional(),
  "rootFolderPath": z.string().nullable().optional(),
  "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional()
}
```

### put_api_v3_collection_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "title": z.string().nullable().optional(),
  "sortTitle": z.string().nullable().optional(),
  "tmdbId": z.number().int().optional(),
  "images": z.array(z.object({ "coverType": z.enum(["unknown","poster","banner","fanart","screenshot","headshot","clearlogo"]).optional(), "url": z.string().nullable().optional(), "remoteUrl": z.string().nullable().optional() }).strict()).nullable().optional(),
  "overview": z.string().nullable().optional(),
  "monitored": z.boolean().optional(),
  "rootFolderPath": z.string().nullable().optional(),
  "qualityProfileId": z.number().int().optional(),
  "searchOnAdd": z.boolean().optional(),
  "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(),
  "movies": z.array(z.object({ "tmdbId": z.number().int().optional(), "imdbId": z.string().nullable().optional(), "title": z.string().nullable().optional(), "cleanTitle": z.string().nullable().optional(), "sortTitle": z.string().nullable().optional(), "status": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "overview": z.string().nullable().optional(), "runtime": z.number().int().optional(), "images": z.array(z.object({ "coverType": z.enum(["unknown","poster","banner","fanart","screenshot","headshot","clearlogo"]).optional(), "url": z.string().nullable().optional(), "remoteUrl": z.string().nullable().optional() }).strict()).nullable().optional(), "year": z.number().int().optional(), "ratings": z.object({ "imdb": z.object({ "votes": z.number().int().optional(), "value": z.number().optional(), "type": z.enum(["user","critic"]).optional() }).strict().optional(), "tmdb": z.object({ "votes": z.number().int().optional(), "value": z.number().optional(), "type": z.enum(["user","critic"]).optional() }).strict().optional(), "metacritic": z.object({ "votes": z.number().int().optional(), "value": z.number().optional(), "type": z.enum(["user","critic"]).optional() }).strict().optional(), "rottenTomatoes": z.object({ "votes": z.number().int().optional(), "value": z.number().optional(), "type": z.enum(["user","critic"]).optional() }).strict().optional(), "trakt": z.object({ "votes": z.number().int().optional(), "value": z.number().optional(), "type": z.enum(["user","critic"]).optional() }).strict().optional() }).strict().optional(), "genres": z.array(z.string()).nullable().optional(), "folder": z.string().nullable().optional(), "isExisting": z.boolean().optional(), "isExcluded": z.boolean().optional() }).strict()).nullable().optional(),
  "missingMovies": z.number().int().optional(),
  "tags": z.array(z.number().int()).nullable().optional()
}
```

### get_api_v3_collection_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### post_api_v3_command

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "commandName": z.string().nullable().optional(),
  "message": z.string().nullable().optional(),
  "body": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "priority": z.enum(["normal","high","low"]).optional(),
  "status": z.enum(["queued","started","completed","failed","aborted","cancelled","orphaned"]).optional(),
  "result": z.enum(["unknown","successful","unsuccessful"]).optional(),
  "queued": z.string().datetime({ offset: true }).optional(),
  "started": z.string().datetime({ offset: true }).nullable().optional(),
  "ended": z.string().datetime({ offset: true }).nullable().optional(),
  "duration": z.string().nullable().optional(),
  "exception": z.string().nullable().optional(),
  "trigger": z.enum(["unspecified","manual","scheduled"]).optional(),
  "clientUserAgent": z.string().nullable().optional(),
  "stateChangeTime": z.string().datetime({ offset: true }).nullable().optional(),
  "sendUpdatesToClient": z.boolean().optional(),
  "updateScheduledTask": z.boolean().optional(),
  "lastExecutionTime": z.string().datetime({ offset: true }).nullable().optional()
}
```

### get_api_v3_command

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### delete_api_v3_command_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_command_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_credit

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "movieId": z.number().int().optional(),
  "movieMetadataId": z.number().int().optional()
}
```

### get_api_v3_credit_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_customfilter

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_customfilter

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "type": z.string().nullable().optional(),
  "label": z.string().nullable().optional(),
  "filters": z.array(z.record(z.any())).nullable().optional()
}
```

### put_api_v3_customfilter_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "type": z.string().nullable().optional(),
  "label": z.string().nullable().optional(),
  "filters": z.array(z.record(z.any())).nullable().optional()
}
```

### delete_api_v3_customfilter_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_customfilter_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_customformat

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_customformat

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "includeCustomFormatWhenRenaming": z.boolean().nullable().optional(),
  "specifications": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "implementation": z.string().optional(), "implementationName": z.string().optional(), "infoLink": z.string().optional(), "negate": z.string().optional(), "required": z.string().optional(), "fields": z.string().optional(), "presets": z.string().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional()
}
```

### put_api_v3_customformat_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "includeCustomFormatWhenRenaming": z.boolean().nullable().optional(),
  "specifications": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "implementation": z.string().optional(), "implementationName": z.string().optional(), "infoLink": z.string().optional(), "negate": z.string().optional(), "required": z.string().optional(), "fields": z.string().optional(), "presets": z.string().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional()
}
```

### delete_api_v3_customformat_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_customformat_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### put_api_v3_customformat_bulk

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "ids": z.array(z.number().int()).nullable().optional(),
  "includeCustomFormatWhenRenaming": z.boolean().nullable().optional()
}
```

### delete_api_v3_customformat_bulk

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "ids": z.array(z.number().int()).nullable().optional(),
  "includeCustomFormatWhenRenaming": z.boolean().nullable().optional()
}
```

### get_api_v3_customformat_schema

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_wanted_cutoff

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "page": z.number().int().optional(),
  "pageSize": z.number().int().optional(),
  "sortKey": z.string().optional(),
  "sortDirection": z.enum(["default","ascending","descending"]).optional(),
  "monitored": z.boolean().optional()
}
```

### post_api_v3_delayprofile

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "enableUsenet": z.boolean().optional(),
  "enableTorrent": z.boolean().optional(),
  "preferredProtocol": z.enum(["unknown","usenet","torrent"]).optional(),
  "usenetDelay": z.number().int().optional(),
  "torrentDelay": z.number().int().optional(),
  "bypassIfHighestQuality": z.boolean().optional(),
  "bypassIfAboveCustomFormatScore": z.boolean().optional(),
  "minimumCustomFormatScore": z.number().int().optional(),
  "order": z.number().int().optional(),
  "tags": z.array(z.number().int()).nullable().optional()
}
```

### get_api_v3_delayprofile

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### delete_api_v3_delayprofile_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### put_api_v3_delayprofile_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "enableUsenet": z.boolean().optional(),
  "enableTorrent": z.boolean().optional(),
  "preferredProtocol": z.enum(["unknown","usenet","torrent"]).optional(),
  "usenetDelay": z.number().int().optional(),
  "torrentDelay": z.number().int().optional(),
  "bypassIfHighestQuality": z.boolean().optional(),
  "bypassIfAboveCustomFormatScore": z.boolean().optional(),
  "minimumCustomFormatScore": z.number().int().optional(),
  "order": z.number().int().optional(),
  "tags": z.array(z.number().int()).nullable().optional()
}
```

### get_api_v3_delayprofile_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### put_api_v3_delayprofile_reorder_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int(),
  "after": z.number().int().optional()
}
```

### get_api_v3_diskspace

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_downloadclient

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_downloadclient

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "forceSave": z.boolean().optional(),
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "enable": z.string().optional(), "protocol": z.string().optional(), "priority": z.string().optional(), "removeCompletedDownloads": z.string().optional(), "removeFailedDownloads": z.string().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(),
  "enable": z.boolean().optional(),
  "protocol": z.enum(["unknown","usenet","torrent"]).optional(),
  "priority": z.number().int().optional(),
  "removeCompletedDownloads": z.boolean().optional(),
  "removeFailedDownloads": z.boolean().optional()
}
```

### put_api_v3_downloadclient_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int(),
  "forceSave": z.boolean().optional(),
  "b_id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "enable": z.string().optional(), "protocol": z.string().optional(), "priority": z.string().optional(), "removeCompletedDownloads": z.string().optional(), "removeFailedDownloads": z.string().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(),
  "enable": z.boolean().optional(),
  "protocol": z.enum(["unknown","usenet","torrent"]).optional(),
  "priority": z.number().int().optional(),
  "removeCompletedDownloads": z.boolean().optional(),
  "removeFailedDownloads": z.boolean().optional()
}
```

### delete_api_v3_downloadclient_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_downloadclient_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### put_api_v3_downloadclient_bulk

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "ids": z.array(z.number().int()).nullable().optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "applyTags": z.enum(["add","remove","replace"]).optional(),
  "enable": z.boolean().nullable().optional(),
  "priority": z.number().int().nullable().optional(),
  "removeCompletedDownloads": z.boolean().nullable().optional(),
  "removeFailedDownloads": z.boolean().nullable().optional()
}
```

### delete_api_v3_downloadclient_bulk

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "ids": z.array(z.number().int()).nullable().optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "applyTags": z.enum(["add","remove","replace"]).optional(),
  "enable": z.boolean().nullable().optional(),
  "priority": z.number().int().nullable().optional(),
  "removeCompletedDownloads": z.boolean().nullable().optional(),
  "removeFailedDownloads": z.boolean().nullable().optional()
}
```

### get_api_v3_downloadclient_schema

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_downloadclient_test

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "forceTest": z.boolean().optional(),
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "enable": z.string().optional(), "protocol": z.string().optional(), "priority": z.string().optional(), "removeCompletedDownloads": z.string().optional(), "removeFailedDownloads": z.string().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(),
  "enable": z.boolean().optional(),
  "protocol": z.enum(["unknown","usenet","torrent"]).optional(),
  "priority": z.number().int().optional(),
  "removeCompletedDownloads": z.boolean().optional(),
  "removeFailedDownloads": z.boolean().optional()
}
```

### post_api_v3_downloadclient_testall

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_downloadclient_action_name_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "name": z.string(),
  "id": z.number().int().optional(),
  "b_name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "enable": z.string().optional(), "protocol": z.string().optional(), "priority": z.string().optional(), "removeCompletedDownloads": z.string().optional(), "removeFailedDownloads": z.string().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "removeCompletedDownloads": z.boolean().optional(), "removeFailedDownloads": z.boolean().optional() }).strict()).nullable().optional(),
  "enable": z.boolean().optional(),
  "protocol": z.enum(["unknown","usenet","torrent"]).optional(),
  "priority": z.number().int().optional(),
  "removeCompletedDownloads": z.boolean().optional(),
  "removeFailedDownloads": z.boolean().optional()
}
```

### get_api_v3_config_downloadclient

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### put_api_v3_config_downloadclient_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "downloadClientWorkingFolders": z.string().nullable().optional(),
  "enableCompletedDownloadHandling": z.boolean().optional(),
  "checkForFinishedDownloadInterval": z.number().int().optional(),
  "autoRedownloadFailed": z.boolean().optional(),
  "autoRedownloadFailedFromInteractiveSearch": z.boolean().optional()
}
```

### get_api_v3_config_downloadclient_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_extrafile

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "movieId": z.number().int().optional()
}
```

### get_api_v3_filesystem

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "path": z.string().optional(),
  "includeFiles": z.boolean().optional(),
  "allowFoldersWithoutTrailingSlashes": z.boolean().optional()
}
```

### get_api_v3_filesystem_type

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "path": z.string().optional()
}
```

### get_api_v3_filesystem_mediafiles

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "path": z.string().optional()
}
```

### get_api_v3_health

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_history

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "page": z.number().int().optional(),
  "pageSize": z.number().int().optional(),
  "sortKey": z.string().optional(),
  "sortDirection": z.enum(["default","ascending","descending"]).optional(),
  "includeMovie": z.boolean().optional(),
  "eventType": z.array(z.number().int()).optional(),
  "downloadId": z.string().optional(),
  "movieIds": z.array(z.number().int()).optional(),
  "languages": z.array(z.number().int()).optional(),
  "quality": z.array(z.number().int()).optional()
}
```

### get_api_v3_history_since

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "date": z.string().datetime({ offset: true }).optional(),
  "eventType": z.enum(["unknown","grabbed","downloadFolderImported","downloadFailed","movieFileDeleted","movieFolderImported","movieFileRenamed","downloadIgnored"]).optional(),
  "includeMovie": z.boolean().optional()
}
```

### get_api_v3_history_movie

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "movieId": z.number().int().optional(),
  "eventType": z.enum(["unknown","grabbed","downloadFolderImported","downloadFailed","movieFileDeleted","movieFolderImported","movieFileRenamed","downloadIgnored"]).optional(),
  "includeMovie": z.boolean().optional()
}
```

### post_api_v3_history_failed_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_config_host

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### put_api_v3_config_host_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "bindAddress": z.string().nullable().optional(),
  "port": z.number().int().optional(),
  "sslPort": z.number().int().optional(),
  "enableSsl": z.boolean().optional(),
  "launchBrowser": z.boolean().optional(),
  "authenticationMethod": z.enum(["none","basic","forms","external"]).optional(),
  "authenticationRequired": z.enum(["enabled","disabledForLocalAddresses"]).optional(),
  "analyticsEnabled": z.boolean().optional(),
  "username": z.string().nullable().optional(),
  "password": z.string().nullable().optional(),
  "passwordConfirmation": z.string().nullable().optional(),
  "logLevel": z.string().nullable().optional(),
  "logSizeLimit": z.number().int().optional(),
  "consoleLogLevel": z.string().nullable().optional(),
  "branch": z.string().nullable().optional(),
  "apiKey": z.string().nullable().optional(),
  "sslCertPath": z.string().nullable().optional(),
  "sslCertPassword": z.string().nullable().optional(),
  "urlBase": z.string().nullable().optional(),
  "instanceName": z.string().nullable().optional(),
  "applicationUrl": z.string().nullable().optional(),
  "updateAutomatically": z.boolean().optional(),
  "updateMechanism": z.enum(["builtIn","script","external","apt","docker"]).optional(),
  "updateScriptPath": z.string().nullable().optional(),
  "proxyEnabled": z.boolean().optional(),
  "proxyType": z.enum(["http","socks4","socks5"]).optional(),
  "proxyHostname": z.string().nullable().optional(),
  "proxyPort": z.number().int().optional(),
  "proxyUsername": z.string().nullable().optional(),
  "proxyPassword": z.string().nullable().optional(),
  "proxyBypassFilter": z.string().nullable().optional(),
  "proxyBypassLocalAddresses": z.boolean().optional(),
  "certificateValidation": z.enum(["enabled","disabledForLocalAddresses","disabled"]).optional(),
  "backupFolder": z.string().nullable().optional(),
  "backupInterval": z.number().int().optional(),
  "backupRetention": z.number().int().optional(),
  "trustCgnatIpAddresses": z.boolean().optional()
}
```

### get_api_v3_config_host_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_importlist

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_importlist

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "forceSave": z.boolean().optional(),
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "enabled": z.string().optional(), "enableAuto": z.string().optional(), "monitor": z.string().optional(), "rootFolderPath": z.string().optional(), "qualityProfileId": z.string().optional(), "searchOnAdd": z.string().optional(), "minimumAvailability": z.string().optional(), "listType": z.string().optional(), "listOrder": z.string().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(),
  "enabled": z.boolean().optional(),
  "enableAuto": z.boolean().optional(),
  "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(),
  "rootFolderPath": z.string().nullable().optional(),
  "qualityProfileId": z.number().int().optional(),
  "searchOnAdd": z.boolean().optional(),
  "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(),
  "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(),
  "listOrder": z.number().int().optional(),
  "minRefreshInterval": z.string().optional()
}
```

### put_api_v3_importlist_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int(),
  "forceSave": z.boolean().optional(),
  "b_id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "enabled": z.string().optional(), "enableAuto": z.string().optional(), "monitor": z.string().optional(), "rootFolderPath": z.string().optional(), "qualityProfileId": z.string().optional(), "searchOnAdd": z.string().optional(), "minimumAvailability": z.string().optional(), "listType": z.string().optional(), "listOrder": z.string().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(),
  "enabled": z.boolean().optional(),
  "enableAuto": z.boolean().optional(),
  "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(),
  "rootFolderPath": z.string().nullable().optional(),
  "qualityProfileId": z.number().int().optional(),
  "searchOnAdd": z.boolean().optional(),
  "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(),
  "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(),
  "listOrder": z.number().int().optional(),
  "minRefreshInterval": z.string().optional()
}
```

### delete_api_v3_importlist_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_importlist_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### put_api_v3_importlist_bulk

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "ids": z.array(z.number().int()).nullable().optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "applyTags": z.enum(["add","remove","replace"]).optional(),
  "enabled": z.boolean().nullable().optional(),
  "enableAuto": z.boolean().nullable().optional(),
  "rootFolderPath": z.string().nullable().optional(),
  "qualityProfileId": z.number().int().nullable().optional(),
  "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional()
}
```

### delete_api_v3_importlist_bulk

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "ids": z.array(z.number().int()).nullable().optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "applyTags": z.enum(["add","remove","replace"]).optional(),
  "enabled": z.boolean().nullable().optional(),
  "enableAuto": z.boolean().nullable().optional(),
  "rootFolderPath": z.string().nullable().optional(),
  "qualityProfileId": z.number().int().nullable().optional(),
  "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional()
}
```

### get_api_v3_importlist_schema

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_importlist_test

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "forceTest": z.boolean().optional(),
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "enabled": z.string().optional(), "enableAuto": z.string().optional(), "monitor": z.string().optional(), "rootFolderPath": z.string().optional(), "qualityProfileId": z.string().optional(), "searchOnAdd": z.string().optional(), "minimumAvailability": z.string().optional(), "listType": z.string().optional(), "listOrder": z.string().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(),
  "enabled": z.boolean().optional(),
  "enableAuto": z.boolean().optional(),
  "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(),
  "rootFolderPath": z.string().nullable().optional(),
  "qualityProfileId": z.number().int().optional(),
  "searchOnAdd": z.boolean().optional(),
  "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(),
  "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(),
  "listOrder": z.number().int().optional(),
  "minRefreshInterval": z.string().optional()
}
```

### post_api_v3_importlist_testall

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_importlist_action_name_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "name": z.string(),
  "id": z.number().int().optional(),
  "b_name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "enabled": z.string().optional(), "enableAuto": z.string().optional(), "monitor": z.string().optional(), "rootFolderPath": z.string().optional(), "qualityProfileId": z.string().optional(), "searchOnAdd": z.string().optional(), "minimumAvailability": z.string().optional(), "listType": z.string().optional(), "listOrder": z.string().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(), "enabled": z.boolean().optional(), "enableAuto": z.boolean().optional(), "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(), "rootFolderPath": z.string().nullable().optional(), "qualityProfileId": z.number().int().optional(), "searchOnAdd": z.boolean().optional(), "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(), "listOrder": z.number().int().optional(), "minRefreshInterval": z.string().optional() }).strict()).nullable().optional(),
  "enabled": z.boolean().optional(),
  "enableAuto": z.boolean().optional(),
  "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(),
  "rootFolderPath": z.string().nullable().optional(),
  "qualityProfileId": z.number().int().optional(),
  "searchOnAdd": z.boolean().optional(),
  "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(),
  "listType": z.enum(["program","tmdb","trakt","plex","simkl","other","advanced"]).optional(),
  "listOrder": z.number().int().optional(),
  "minRefreshInterval": z.string().optional()
}
```

### get_api_v3_config_importlist

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### put_api_v3_config_importlist_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "listSyncLevel": z.string().nullable().optional()
}
```

### get_api_v3_config_importlist_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_exclusions

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_exclusions

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "tmdbId": z.string().optional(), "movieTitle": z.string().optional(), "movieYear": z.string().optional() }).strict()).nullable().optional(), "tmdbId": z.number().int().optional(), "movieTitle": z.string().nullable().optional(), "movieYear": z.number().int().optional() }).strict()).nullable().optional(), "tmdbId": z.number().int().optional(), "movieTitle": z.string().nullable().optional(), "movieYear": z.number().int().optional() }).strict()).nullable().optional(), "tmdbId": z.number().int().optional(), "movieTitle": z.string().nullable().optional(), "movieYear": z.number().int().optional() }).strict()).nullable().optional(), "tmdbId": z.number().int().optional(), "movieTitle": z.string().nullable().optional(), "movieYear": z.number().int().optional() }).strict()).nullable().optional(), "tmdbId": z.number().int().optional(), "movieTitle": z.string().nullable().optional(), "movieYear": z.number().int().optional() }).strict()).nullable().optional(), "tmdbId": z.number().int().optional(), "movieTitle": z.string().nullable().optional(), "movieYear": z.number().int().optional() }).strict()).nullable().optional(), "tmdbId": z.number().int().optional(), "movieTitle": z.string().nullable().optional(), "movieYear": z.number().int().optional() }).strict()).nullable().optional(), "tmdbId": z.number().int().optional(), "movieTitle": z.string().nullable().optional(), "movieYear": z.number().int().optional() }).strict()).nullable().optional(),
  "tmdbId": z.number().int().optional(),
  "movieTitle": z.string().nullable().optional(),
  "movieYear": z.number().int().optional()
}
```

### get_api_v3_exclusions_paged

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "page": z.number().int().optional(),
  "pageSize": z.number().int().optional(),
  "sortKey": z.string().optional(),
  "sortDirection": z.enum(["default","ascending","descending"]).optional()
}
```

### put_api_v3_exclusions_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "tmdbId": z.string().optional(), "movieTitle": z.string().optional(), "movieYear": z.string().optional() }).strict()).nullable().optional(), "tmdbId": z.number().int().optional(), "movieTitle": z.string().nullable().optional(), "movieYear": z.number().int().optional() }).strict()).nullable().optional(), "tmdbId": z.number().int().optional(), "movieTitle": z.string().nullable().optional(), "movieYear": z.number().int().optional() }).strict()).nullable().optional(), "tmdbId": z.number().int().optional(), "movieTitle": z.string().nullable().optional(), "movieYear": z.number().int().optional() }).strict()).nullable().optional(), "tmdbId": z.number().int().optional(), "movieTitle": z.string().nullable().optional(), "movieYear": z.number().int().optional() }).strict()).nullable().optional(), "tmdbId": z.number().int().optional(), "movieTitle": z.string().nullable().optional(), "movieYear": z.number().int().optional() }).strict()).nullable().optional(), "tmdbId": z.number().int().optional(), "movieTitle": z.string().nullable().optional(), "movieYear": z.number().int().optional() }).strict()).nullable().optional(), "tmdbId": z.number().int().optional(), "movieTitle": z.string().nullable().optional(), "movieYear": z.number().int().optional() }).strict()).nullable().optional(), "tmdbId": z.number().int().optional(), "movieTitle": z.string().nullable().optional(), "movieYear": z.number().int().optional() }).strict()).nullable().optional(),
  "tmdbId": z.number().int().optional(),
  "movieTitle": z.string().nullable().optional(),
  "movieYear": z.number().int().optional()
}
```

### delete_api_v3_exclusions_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_exclusions_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### post_api_v3_exclusions_bulk

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### delete_api_v3_exclusions_bulk

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "ids": z.array(z.number().int()).nullable().optional()
}
```

### get_api_v3_importlist_movie

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "includeRecommendations": z.boolean().optional(),
  "includeTrending": z.boolean().optional(),
  "includePopular": z.boolean().optional()
}
```

### post_api_v3_importlist_movie

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_indexer

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_indexer

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "forceSave": z.boolean().optional(),
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "enableRss": z.string().optional(), "enableAutomaticSearch": z.string().optional(), "enableInteractiveSearch": z.string().optional(), "supportsRss": z.string().optional(), "supportsSearch": z.string().optional(), "protocol": z.string().optional(), "priority": z.string().optional(), "downloadClientId": z.string().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(),
  "enableRss": z.boolean().optional(),
  "enableAutomaticSearch": z.boolean().optional(),
  "enableInteractiveSearch": z.boolean().optional(),
  "supportsRss": z.boolean().optional(),
  "supportsSearch": z.boolean().optional(),
  "protocol": z.enum(["unknown","usenet","torrent"]).optional(),
  "priority": z.number().int().optional(),
  "downloadClientId": z.number().int().optional()
}
```

### put_api_v3_indexer_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int(),
  "forceSave": z.boolean().optional(),
  "b_id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "enableRss": z.string().optional(), "enableAutomaticSearch": z.string().optional(), "enableInteractiveSearch": z.string().optional(), "supportsRss": z.string().optional(), "supportsSearch": z.string().optional(), "protocol": z.string().optional(), "priority": z.string().optional(), "downloadClientId": z.string().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(),
  "enableRss": z.boolean().optional(),
  "enableAutomaticSearch": z.boolean().optional(),
  "enableInteractiveSearch": z.boolean().optional(),
  "supportsRss": z.boolean().optional(),
  "supportsSearch": z.boolean().optional(),
  "protocol": z.enum(["unknown","usenet","torrent"]).optional(),
  "priority": z.number().int().optional(),
  "downloadClientId": z.number().int().optional()
}
```

### delete_api_v3_indexer_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_indexer_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### put_api_v3_indexer_bulk

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "ids": z.array(z.number().int()).nullable().optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "applyTags": z.enum(["add","remove","replace"]).optional(),
  "enableRss": z.boolean().nullable().optional(),
  "enableAutomaticSearch": z.boolean().nullable().optional(),
  "enableInteractiveSearch": z.boolean().nullable().optional(),
  "priority": z.number().int().nullable().optional()
}
```

### delete_api_v3_indexer_bulk

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "ids": z.array(z.number().int()).nullable().optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "applyTags": z.enum(["add","remove","replace"]).optional(),
  "enableRss": z.boolean().nullable().optional(),
  "enableAutomaticSearch": z.boolean().nullable().optional(),
  "enableInteractiveSearch": z.boolean().nullable().optional(),
  "priority": z.number().int().nullable().optional()
}
```

### get_api_v3_indexer_schema

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_indexer_test

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "forceTest": z.boolean().optional(),
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "enableRss": z.string().optional(), "enableAutomaticSearch": z.string().optional(), "enableInteractiveSearch": z.string().optional(), "supportsRss": z.string().optional(), "supportsSearch": z.string().optional(), "protocol": z.string().optional(), "priority": z.string().optional(), "downloadClientId": z.string().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(),
  "enableRss": z.boolean().optional(),
  "enableAutomaticSearch": z.boolean().optional(),
  "enableInteractiveSearch": z.boolean().optional(),
  "supportsRss": z.boolean().optional(),
  "supportsSearch": z.boolean().optional(),
  "protocol": z.enum(["unknown","usenet","torrent"]).optional(),
  "priority": z.number().int().optional(),
  "downloadClientId": z.number().int().optional()
}
```

### post_api_v3_indexer_testall

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_indexer_action_name_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "name": z.string(),
  "id": z.number().int().optional(),
  "b_name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "enableRss": z.string().optional(), "enableAutomaticSearch": z.string().optional(), "enableInteractiveSearch": z.string().optional(), "supportsRss": z.string().optional(), "supportsSearch": z.string().optional(), "protocol": z.string().optional(), "priority": z.string().optional(), "downloadClientId": z.string().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(),
  "enableRss": z.boolean().optional(),
  "enableAutomaticSearch": z.boolean().optional(),
  "enableInteractiveSearch": z.boolean().optional(),
  "supportsRss": z.boolean().optional(),
  "supportsSearch": z.boolean().optional(),
  "protocol": z.enum(["unknown","usenet","torrent"]).optional(),
  "priority": z.number().int().optional(),
  "downloadClientId": z.number().int().optional()
}
```

### get_api_v3_config_indexer

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### put_api_v3_config_indexer_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "minimumAge": z.number().int().optional(),
  "maximumSize": z.number().int().optional(),
  "retention": z.number().int().optional(),
  "rssSyncInterval": z.number().int().optional(),
  "preferIndexerFlags": z.boolean().optional(),
  "availabilityDelay": z.number().int().optional(),
  "allowHardcodedSubs": z.boolean().optional(),
  "whitelistedHardcodedSubs": z.string().nullable().optional()
}
```

### get_api_v3_config_indexer_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_indexerflag

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_language

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_language_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_localization

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_localization_language

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_log

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "page": z.number().int().optional(),
  "pageSize": z.number().int().optional(),
  "sortKey": z.string().optional(),
  "sortDirection": z.enum(["default","ascending","descending"]).optional(),
  "level": z.string().optional()
}
```

### get_api_v3_log_file

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_log_file_filename_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "filename": z.string().regex(new RegExp("[-.a-zA-Z0-9]+?\\.txt"))
}
```

### get_api_v3_manualimport

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "folder": z.string().optional(),
  "downloadId": z.string().optional(),
  "movieId": z.number().int().optional(),
  "filterExistingFiles": z.boolean().optional()
}
```

### post_api_v3_manualimport

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_mediacover_movieid_filename_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "movieId": z.number().int(),
  "filename": z.string().regex(new RegExp("(.+)\\.(jpg|png|gif)"))
}
```

### get_api_v3_config_mediamanagement

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### put_api_v3_config_mediamanagement_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "autoUnmonitorPreviouslyDownloadedMovies": z.boolean().optional(),
  "recycleBin": z.string().nullable().optional(),
  "recycleBinCleanupDays": z.number().int().optional(),
  "downloadPropersAndRepacks": z.enum(["preferAndUpgrade","doNotUpgrade","doNotPrefer"]).optional(),
  "createEmptyMovieFolders": z.boolean().optional(),
  "deleteEmptyFolders": z.boolean().optional(),
  "fileDate": z.enum(["none","cinemas","release"]).optional(),
  "rescanAfterRefresh": z.enum(["always","afterManual","never"]).optional(),
  "autoRenameFolders": z.boolean().optional(),
  "pathsDefaultStatic": z.boolean().optional(),
  "setPermissionsLinux": z.boolean().optional(),
  "chmodFolder": z.string().nullable().optional(),
  "chownGroup": z.string().nullable().optional(),
  "skipFreeSpaceCheckWhenImporting": z.boolean().optional(),
  "minimumFreeSpaceWhenImporting": z.number().int().optional(),
  "copyUsingHardlinks": z.boolean().optional(),
  "useScriptImport": z.boolean().optional(),
  "scriptImportPath": z.string().nullable().optional(),
  "importExtraFiles": z.boolean().optional(),
  "extraFileExtensions": z.string().nullable().optional(),
  "enableMediaInfo": z.boolean().optional()
}
```

### get_api_v3_config_mediamanagement_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_metadata

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_metadata

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "forceSave": z.boolean().optional(),
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "enable": z.string().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(),
  "enable": z.boolean().optional()
}
```

### put_api_v3_metadata_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int(),
  "forceSave": z.boolean().optional(),
  "b_id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "enable": z.string().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(),
  "enable": z.boolean().optional()
}
```

### delete_api_v3_metadata_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_metadata_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_metadata_schema

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_metadata_test

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "forceTest": z.boolean().optional(),
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "enable": z.string().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(),
  "enable": z.boolean().optional()
}
```

### post_api_v3_metadata_testall

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_metadata_action_name_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "name": z.string(),
  "id": z.number().int().optional(),
  "b_name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "enable": z.string().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(), "enable": z.boolean().optional() }).strict()).nullable().optional(),
  "enable": z.boolean().optional()
}
```

### get_api_v3_config_metadata

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### put_api_v3_config_metadata_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "certificationCountry": z.enum(["au","br","ca","fr","de","gb","in","ie","it","nz","ro","es","us"]).optional()
}
```

### get_api_v3_config_metadata_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_wanted_missing

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "page": z.number().int().optional(),
  "pageSize": z.number().int().optional(),
  "sortKey": z.string().optional(),
  "sortDirection": z.enum(["default","ascending","descending"]).optional(),
  "monitored": z.boolean().optional()
}
```

### get_api_v3_movie

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "tmdbId": z.number().int().optional(),
  "excludeLocalCovers": z.boolean().optional(),
  "languageId": z.number().int().optional()
}
```

### post_api_v3_movie

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "title": z.string().nullable().optional(),
  "originalTitle": z.string().nullable().optional(),
  "originalLanguage": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "alternateTitles": z.array(z.object({ "id": z.number().int().optional(), "sourceType": z.enum(["tmdb","mappings","user","indexer"]).optional(), "movieMetadataId": z.number().int().optional(), "title": z.string().nullable().optional(), "cleanTitle": z.string().nullable().optional() }).strict()).nullable().optional(),
  "secondaryYear": z.number().int().nullable().optional(),
  "secondaryYearSourceId": z.number().int().optional(),
  "sortTitle": z.string().nullable().optional(),
  "sizeOnDisk": z.number().int().nullable().optional(),
  "status": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(),
  "overview": z.string().nullable().optional(),
  "inCinemas": z.string().datetime({ offset: true }).nullable().optional(),
  "physicalRelease": z.string().datetime({ offset: true }).nullable().optional(),
  "digitalRelease": z.string().datetime({ offset: true }).nullable().optional(),
  "releaseDate": z.string().datetime({ offset: true }).nullable().optional(),
  "physicalReleaseNote": z.string().nullable().optional(),
  "images": z.array(z.object({ "coverType": z.enum(["unknown","poster","banner","fanart","screenshot","headshot","clearlogo"]).optional(), "url": z.string().nullable().optional(), "remoteUrl": z.string().nullable().optional() }).strict()).nullable().optional(),
  "website": z.string().nullable().optional(),
  "remotePoster": z.string().nullable().optional(),
  "year": z.number().int().optional(),
  "youTubeTrailerId": z.string().nullable().optional(),
  "studio": z.string().nullable().optional(),
  "path": z.string().nullable().optional(),
  "qualityProfileId": z.number().int().optional(),
  "hasFile": z.boolean().nullable().optional(),
  "movieFileId": z.number().int().optional(),
  "monitored": z.boolean().optional(),
  "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(),
  "isAvailable": z.boolean().optional(),
  "folderName": z.string().nullable().optional(),
  "runtime": z.number().int().optional(),
  "cleanTitle": z.string().nullable().optional(),
  "imdbId": z.string().nullable().optional(),
  "tmdbId": z.number().int().optional(),
  "titleSlug": z.string().nullable().optional(),
  "rootFolderPath": z.string().nullable().optional(),
  "folder": z.string().nullable().optional(),
  "certification": z.string().nullable().optional(),
  "genres": z.array(z.string()).nullable().optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "added": z.string().datetime({ offset: true }).optional(),
  "addOptions": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "ratings": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "movieFile": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "collection": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "popularity": z.number().optional(),
  "lastSearchTime": z.string().datetime({ offset: true }).nullable().optional(),
  "statistics": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### put_api_v3_movie_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "moveFiles": z.boolean().optional(),
  "b_id": z.number().int().optional(),
  "title": z.string().nullable().optional(),
  "originalTitle": z.string().nullable().optional(),
  "originalLanguage": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "alternateTitles": z.array(z.object({ "id": z.number().int().optional(), "sourceType": z.enum(["tmdb","mappings","user","indexer"]).optional(), "movieMetadataId": z.number().int().optional(), "title": z.string().nullable().optional(), "cleanTitle": z.string().nullable().optional() }).strict()).nullable().optional(),
  "secondaryYear": z.number().int().nullable().optional(),
  "secondaryYearSourceId": z.number().int().optional(),
  "sortTitle": z.string().nullable().optional(),
  "sizeOnDisk": z.number().int().nullable().optional(),
  "status": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(),
  "overview": z.string().nullable().optional(),
  "inCinemas": z.string().datetime({ offset: true }).nullable().optional(),
  "physicalRelease": z.string().datetime({ offset: true }).nullable().optional(),
  "digitalRelease": z.string().datetime({ offset: true }).nullable().optional(),
  "releaseDate": z.string().datetime({ offset: true }).nullable().optional(),
  "physicalReleaseNote": z.string().nullable().optional(),
  "images": z.array(z.object({ "coverType": z.enum(["unknown","poster","banner","fanart","screenshot","headshot","clearlogo"]).optional(), "url": z.string().nullable().optional(), "remoteUrl": z.string().nullable().optional() }).strict()).nullable().optional(),
  "website": z.string().nullable().optional(),
  "remotePoster": z.string().nullable().optional(),
  "year": z.number().int().optional(),
  "youTubeTrailerId": z.string().nullable().optional(),
  "studio": z.string().nullable().optional(),
  "path": z.string().nullable().optional(),
  "qualityProfileId": z.number().int().optional(),
  "hasFile": z.boolean().nullable().optional(),
  "movieFileId": z.number().int().optional(),
  "monitored": z.boolean().optional(),
  "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(),
  "isAvailable": z.boolean().optional(),
  "folderName": z.string().nullable().optional(),
  "runtime": z.number().int().optional(),
  "cleanTitle": z.string().nullable().optional(),
  "imdbId": z.string().nullable().optional(),
  "tmdbId": z.number().int().optional(),
  "titleSlug": z.string().nullable().optional(),
  "rootFolderPath": z.string().nullable().optional(),
  "folder": z.string().nullable().optional(),
  "certification": z.string().nullable().optional(),
  "genres": z.array(z.string()).nullable().optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "added": z.string().datetime({ offset: true }).optional(),
  "addOptions": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "ratings": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "movieFile": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "collection": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "popularity": z.number().optional(),
  "lastSearchTime": z.string().datetime({ offset: true }).nullable().optional(),
  "statistics": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### delete_api_v3_movie_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int(),
  "deleteFiles": z.boolean().optional(),
  "addImportExclusion": z.boolean().optional()
}
```

### get_api_v3_movie_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### put_api_v3_movie_editor

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "movieIds": z.array(z.number().int()).nullable().optional(),
  "monitored": z.boolean().nullable().optional(),
  "qualityProfileId": z.number().int().nullable().optional(),
  "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(),
  "rootFolderPath": z.string().nullable().optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "applyTags": z.enum(["add","remove","replace"]).optional(),
  "moveFiles": z.boolean().optional(),
  "deleteFiles": z.boolean().optional(),
  "addImportExclusion": z.boolean().optional()
}
```

### delete_api_v3_movie_editor

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "movieIds": z.array(z.number().int()).nullable().optional(),
  "monitored": z.boolean().nullable().optional(),
  "qualityProfileId": z.number().int().nullable().optional(),
  "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(),
  "rootFolderPath": z.string().nullable().optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "applyTags": z.enum(["add","remove","replace"]).optional(),
  "moveFiles": z.boolean().optional(),
  "deleteFiles": z.boolean().optional(),
  "addImportExclusion": z.boolean().optional()
}
```

### get_api_v3_moviefile

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "movieId": z.array(z.number().int()).optional(),
  "movieFileIds": z.array(z.number().int()).optional()
}
```

### put_api_v3_moviefile_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "movieId": z.number().int().optional(),
  "relativePath": z.string().nullable().optional(),
  "path": z.string().nullable().optional(),
  "size": z.number().int().optional(),
  "dateAdded": z.string().datetime({ offset: true }).optional(),
  "sceneName": z.string().nullable().optional(),
  "releaseGroup": z.string().nullable().optional(),
  "edition": z.string().nullable().optional(),
  "languages": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional() }).strict()).nullable().optional(),
  "quality": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "customFormats": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "includeCustomFormatWhenRenaming": z.boolean().nullable().optional(), "specifications": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "implementation": z.string().optional(), "implementationName": z.string().optional(), "infoLink": z.string().optional(), "negate": z.string().optional(), "required": z.string().optional(), "fields": z.string().optional(), "presets": z.string().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional(),
  "customFormatScore": z.number().int().optional(),
  "indexerFlags": z.number().int().nullable().optional(),
  "mediaInfo": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "originalFilePath": z.string().nullable().optional(),
  "qualityCutoffNotMet": z.boolean().optional()
}
```

### delete_api_v3_moviefile_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_moviefile_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### put_api_v3_moviefile_editor

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "movieFileIds": z.array(z.number().int()).nullable().optional(),
  "languages": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional() }).strict()).nullable().optional(),
  "quality": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "edition": z.string().nullable().optional(),
  "releaseGroup": z.string().nullable().optional(),
  "sceneName": z.string().nullable().optional(),
  "indexerFlags": z.number().int().nullable().optional()
}
```

### delete_api_v3_moviefile_bulk

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "movieFileIds": z.array(z.number().int()).nullable().optional(),
  "languages": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional() }).strict()).nullable().optional(),
  "quality": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "edition": z.string().nullable().optional(),
  "releaseGroup": z.string().nullable().optional(),
  "sceneName": z.string().nullable().optional(),
  "indexerFlags": z.number().int().nullable().optional()
}
```

### put_api_v3_moviefile_bulk

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_movie_id_folder

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### post_api_v3_movie_import

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_movie_lookup_tmdb

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "tmdbId": z.number().int().optional()
}
```

### get_api_v3_movie_lookup_imdb

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "imdbId": z.string().optional()
}
```

### get_api_v3_movie_lookup

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "term": z.string().optional()
}
```

### get_api_v3_config_naming

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### put_api_v3_config_naming_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "renameMovies": z.boolean().optional(),
  "replaceIllegalCharacters": z.boolean().optional(),
  "colonReplacementFormat": z.enum(["delete","dash","spaceDash","spaceDashSpace","smart"]).optional(),
  "standardMovieFormat": z.string().nullable().optional(),
  "movieFolderFormat": z.string().nullable().optional()
}
```

### get_api_v3_config_naming_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_config_naming_examples

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "renameMovies": z.boolean().optional(),
  "replaceIllegalCharacters": z.boolean().optional(),
  "colonReplacementFormat": z.enum(["delete","dash","spaceDash","spaceDashSpace","smart"]).optional(),
  "standardMovieFormat": z.string().optional(),
  "movieFolderFormat": z.string().optional(),
  "id": z.number().int().optional(),
  "resourceName": z.string().optional()
}
```

### get_api_v3_notification

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_notification

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "forceSave": z.boolean().optional(),
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "link": z.string().optional(), "onGrab": z.string().optional(), "onDownload": z.string().optional(), "onUpgrade": z.string().optional(), "onRename": z.string().optional(), "onMovieAdded": z.string().optional(), "onMovieDelete": z.string().optional(), "onMovieFileDelete": z.string().optional(), "onMovieFileDeleteForUpgrade": z.string().optional(), "onHealthIssue": z.string().optional(), "includeHealthWarnings": z.string().optional(), "onHealthRestored": z.string().optional(), "onApplicationUpdate": z.string().optional(), "onManualInteractionRequired": z.string().optional(), "supportsOnGrab": z.string().optional(), "supportsOnDownload": z.string().optional(), "supportsOnUpgrade": z.string().optional(), "supportsOnRename": z.string().optional(), "supportsOnMovieAdded": z.string().optional(), "supportsOnMovieDelete": z.string().optional(), "supportsOnMovieFileDelete": z.string().optional(), "supportsOnMovieFileDeleteForUpgrade": z.string().optional(), "supportsOnHealthIssue": z.string().optional(), "supportsOnHealthRestored": z.string().optional(), "supportsOnApplicationUpdate": z.string().optional(), "supportsOnManualInteractionRequired": z.string().optional(), "testCommand": z.string().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(),
  "link": z.string().nullable().optional(),
  "onGrab": z.boolean().optional(),
  "onDownload": z.boolean().optional(),
  "onUpgrade": z.boolean().optional(),
  "onRename": z.boolean().optional(),
  "onMovieAdded": z.boolean().optional(),
  "onMovieDelete": z.boolean().optional(),
  "onMovieFileDelete": z.boolean().optional(),
  "onMovieFileDeleteForUpgrade": z.boolean().optional(),
  "onHealthIssue": z.boolean().optional(),
  "includeHealthWarnings": z.boolean().optional(),
  "onHealthRestored": z.boolean().optional(),
  "onApplicationUpdate": z.boolean().optional(),
  "onManualInteractionRequired": z.boolean().optional(),
  "supportsOnGrab": z.boolean().optional(),
  "supportsOnDownload": z.boolean().optional(),
  "supportsOnUpgrade": z.boolean().optional(),
  "supportsOnRename": z.boolean().optional(),
  "supportsOnMovieAdded": z.boolean().optional(),
  "supportsOnMovieDelete": z.boolean().optional(),
  "supportsOnMovieFileDelete": z.boolean().optional(),
  "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(),
  "supportsOnHealthIssue": z.boolean().optional(),
  "supportsOnHealthRestored": z.boolean().optional(),
  "supportsOnApplicationUpdate": z.boolean().optional(),
  "supportsOnManualInteractionRequired": z.boolean().optional(),
  "testCommand": z.string().nullable().optional()
}
```

### put_api_v3_notification_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int(),
  "forceSave": z.boolean().optional(),
  "b_id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "link": z.string().optional(), "onGrab": z.string().optional(), "onDownload": z.string().optional(), "onUpgrade": z.string().optional(), "onRename": z.string().optional(), "onMovieAdded": z.string().optional(), "onMovieDelete": z.string().optional(), "onMovieFileDelete": z.string().optional(), "onMovieFileDeleteForUpgrade": z.string().optional(), "onHealthIssue": z.string().optional(), "includeHealthWarnings": z.string().optional(), "onHealthRestored": z.string().optional(), "onApplicationUpdate": z.string().optional(), "onManualInteractionRequired": z.string().optional(), "supportsOnGrab": z.string().optional(), "supportsOnDownload": z.string().optional(), "supportsOnUpgrade": z.string().optional(), "supportsOnRename": z.string().optional(), "supportsOnMovieAdded": z.string().optional(), "supportsOnMovieDelete": z.string().optional(), "supportsOnMovieFileDelete": z.string().optional(), "supportsOnMovieFileDeleteForUpgrade": z.string().optional(), "supportsOnHealthIssue": z.string().optional(), "supportsOnHealthRestored": z.string().optional(), "supportsOnApplicationUpdate": z.string().optional(), "supportsOnManualInteractionRequired": z.string().optional(), "testCommand": z.string().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(),
  "link": z.string().nullable().optional(),
  "onGrab": z.boolean().optional(),
  "onDownload": z.boolean().optional(),
  "onUpgrade": z.boolean().optional(),
  "onRename": z.boolean().optional(),
  "onMovieAdded": z.boolean().optional(),
  "onMovieDelete": z.boolean().optional(),
  "onMovieFileDelete": z.boolean().optional(),
  "onMovieFileDeleteForUpgrade": z.boolean().optional(),
  "onHealthIssue": z.boolean().optional(),
  "includeHealthWarnings": z.boolean().optional(),
  "onHealthRestored": z.boolean().optional(),
  "onApplicationUpdate": z.boolean().optional(),
  "onManualInteractionRequired": z.boolean().optional(),
  "supportsOnGrab": z.boolean().optional(),
  "supportsOnDownload": z.boolean().optional(),
  "supportsOnUpgrade": z.boolean().optional(),
  "supportsOnRename": z.boolean().optional(),
  "supportsOnMovieAdded": z.boolean().optional(),
  "supportsOnMovieDelete": z.boolean().optional(),
  "supportsOnMovieFileDelete": z.boolean().optional(),
  "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(),
  "supportsOnHealthIssue": z.boolean().optional(),
  "supportsOnHealthRestored": z.boolean().optional(),
  "supportsOnApplicationUpdate": z.boolean().optional(),
  "supportsOnManualInteractionRequired": z.boolean().optional(),
  "testCommand": z.string().nullable().optional()
}
```

### delete_api_v3_notification_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_notification_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_notification_schema

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_notification_test

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "forceTest": z.boolean().optional(),
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "link": z.string().optional(), "onGrab": z.string().optional(), "onDownload": z.string().optional(), "onUpgrade": z.string().optional(), "onRename": z.string().optional(), "onMovieAdded": z.string().optional(), "onMovieDelete": z.string().optional(), "onMovieFileDelete": z.string().optional(), "onMovieFileDeleteForUpgrade": z.string().optional(), "onHealthIssue": z.string().optional(), "includeHealthWarnings": z.string().optional(), "onHealthRestored": z.string().optional(), "onApplicationUpdate": z.string().optional(), "onManualInteractionRequired": z.string().optional(), "supportsOnGrab": z.string().optional(), "supportsOnDownload": z.string().optional(), "supportsOnUpgrade": z.string().optional(), "supportsOnRename": z.string().optional(), "supportsOnMovieAdded": z.string().optional(), "supportsOnMovieDelete": z.string().optional(), "supportsOnMovieFileDelete": z.string().optional(), "supportsOnMovieFileDeleteForUpgrade": z.string().optional(), "supportsOnHealthIssue": z.string().optional(), "supportsOnHealthRestored": z.string().optional(), "supportsOnApplicationUpdate": z.string().optional(), "supportsOnManualInteractionRequired": z.string().optional(), "testCommand": z.string().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(),
  "link": z.string().nullable().optional(),
  "onGrab": z.boolean().optional(),
  "onDownload": z.boolean().optional(),
  "onUpgrade": z.boolean().optional(),
  "onRename": z.boolean().optional(),
  "onMovieAdded": z.boolean().optional(),
  "onMovieDelete": z.boolean().optional(),
  "onMovieFileDelete": z.boolean().optional(),
  "onMovieFileDeleteForUpgrade": z.boolean().optional(),
  "onHealthIssue": z.boolean().optional(),
  "includeHealthWarnings": z.boolean().optional(),
  "onHealthRestored": z.boolean().optional(),
  "onApplicationUpdate": z.boolean().optional(),
  "onManualInteractionRequired": z.boolean().optional(),
  "supportsOnGrab": z.boolean().optional(),
  "supportsOnDownload": z.boolean().optional(),
  "supportsOnUpgrade": z.boolean().optional(),
  "supportsOnRename": z.boolean().optional(),
  "supportsOnMovieAdded": z.boolean().optional(),
  "supportsOnMovieDelete": z.boolean().optional(),
  "supportsOnMovieFileDelete": z.boolean().optional(),
  "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(),
  "supportsOnHealthIssue": z.boolean().optional(),
  "supportsOnHealthRestored": z.boolean().optional(),
  "supportsOnApplicationUpdate": z.boolean().optional(),
  "supportsOnManualInteractionRequired": z.boolean().optional(),
  "testCommand": z.string().nullable().optional()
}
```

### post_api_v3_notification_testall

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_notification_action_name_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "name": z.string(),
  "id": z.number().int().optional(),
  "b_name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "link": z.string().optional(), "onGrab": z.string().optional(), "onDownload": z.string().optional(), "onUpgrade": z.string().optional(), "onRename": z.string().optional(), "onMovieAdded": z.string().optional(), "onMovieDelete": z.string().optional(), "onMovieFileDelete": z.string().optional(), "onMovieFileDeleteForUpgrade": z.string().optional(), "onHealthIssue": z.string().optional(), "includeHealthWarnings": z.string().optional(), "onHealthRestored": z.string().optional(), "onApplicationUpdate": z.string().optional(), "onManualInteractionRequired": z.string().optional(), "supportsOnGrab": z.string().optional(), "supportsOnDownload": z.string().optional(), "supportsOnUpgrade": z.string().optional(), "supportsOnRename": z.string().optional(), "supportsOnMovieAdded": z.string().optional(), "supportsOnMovieDelete": z.string().optional(), "supportsOnMovieFileDelete": z.string().optional(), "supportsOnMovieFileDeleteForUpgrade": z.string().optional(), "supportsOnHealthIssue": z.string().optional(), "supportsOnHealthRestored": z.string().optional(), "supportsOnApplicationUpdate": z.string().optional(), "supportsOnManualInteractionRequired": z.string().optional(), "testCommand": z.string().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(),
  "link": z.string().nullable().optional(),
  "onGrab": z.boolean().optional(),
  "onDownload": z.boolean().optional(),
  "onUpgrade": z.boolean().optional(),
  "onRename": z.boolean().optional(),
  "onMovieAdded": z.boolean().optional(),
  "onMovieDelete": z.boolean().optional(),
  "onMovieFileDelete": z.boolean().optional(),
  "onMovieFileDeleteForUpgrade": z.boolean().optional(),
  "onHealthIssue": z.boolean().optional(),
  "includeHealthWarnings": z.boolean().optional(),
  "onHealthRestored": z.boolean().optional(),
  "onApplicationUpdate": z.boolean().optional(),
  "onManualInteractionRequired": z.boolean().optional(),
  "supportsOnGrab": z.boolean().optional(),
  "supportsOnDownload": z.boolean().optional(),
  "supportsOnUpgrade": z.boolean().optional(),
  "supportsOnRename": z.boolean().optional(),
  "supportsOnMovieAdded": z.boolean().optional(),
  "supportsOnMovieDelete": z.boolean().optional(),
  "supportsOnMovieFileDelete": z.boolean().optional(),
  "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(),
  "supportsOnHealthIssue": z.boolean().optional(),
  "supportsOnHealthRestored": z.boolean().optional(),
  "supportsOnApplicationUpdate": z.boolean().optional(),
  "supportsOnManualInteractionRequired": z.boolean().optional(),
  "testCommand": z.string().nullable().optional()
}
```

### get_api_v3_parse

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "title": z.string().optional()
}
```

### get_ping

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### head_ping

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### put_api_v3_qualitydefinition_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "quality": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "title": z.string().nullable().optional(),
  "weight": z.number().int().optional(),
  "minSize": z.number().nullable().optional(),
  "maxSize": z.number().nullable().optional(),
  "preferredSize": z.number().nullable().optional()
}
```

### get_api_v3_qualitydefinition_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_qualitydefinition

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### put_api_v3_qualitydefinition_update

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_qualityprofile

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "upgradeAllowed": z.boolean().optional(),
  "cutoff": z.number().int().optional(),
  "items": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "quality": z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "source": z.enum(["unknown","cam","telesync","telecine","workprint","dvd","tv","webdl","webrip","bluray"]).optional(), "resolution": z.number().int().optional(), "modifier": z.enum(["none","regional","screener","rawhd","brdisk","remux"]).optional() }).strict().optional(), "items": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "quality": z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "source": z.enum(["unknown","cam","telesync","telecine","workprint","dvd","tv","webdl","webrip","bluray"]).optional(), "resolution": z.number().int().optional(), "modifier": z.enum(["none","regional","screener","rawhd","brdisk","remux"]).optional() }).strict().optional(), "items": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "quality": z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "source": z.enum(["unknown","cam","telesync","telecine","workprint","dvd","tv","webdl","webrip","bluray"]).optional(), "resolution": z.number().int().optional(), "modifier": z.enum(["none","regional","screener","rawhd","brdisk","remux"]).optional() }).strict().optional(), "items": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "quality": z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "source": z.enum(["unknown","cam","telesync","telecine","workprint","dvd","tv","webdl","webrip","bluray"]).optional(), "resolution": z.number().int().optional(), "modifier": z.enum(["none","regional","screener","rawhd","brdisk","remux"]).optional() }).strict().optional(), "items": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "quality": z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "source": z.enum(["unknown","cam","telesync","telecine","workprint","dvd","tv","webdl","webrip","bluray"]).optional(), "resolution": z.number().int().optional(), "modifier": z.enum(["none","regional","screener","rawhd","brdisk","remux"]).optional() }).strict().optional(), "items": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "quality": z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "source": z.enum(["unknown","cam","telesync","telecine","workprint","dvd","tv","webdl","webrip","bluray"]).optional(), "resolution": z.number().int().optional(), "modifier": z.enum(["none","regional","screener","rawhd","brdisk","remux"]).optional() }).strict().optional(), "items": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "quality": z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "source": z.enum(["unknown","cam","telesync","telecine","workprint","dvd","tv","webdl","webrip","bluray"]).optional(), "resolution": z.number().int().optional(), "modifier": z.enum(["none","regional","screener","rawhd","brdisk","remux"]).optional() }).strict().optional(), "items": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "quality": z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "source": z.enum(["unknown","cam","telesync","telecine","workprint","dvd","tv","webdl","webrip","bluray"]).optional(), "resolution": z.number().int().optional(), "modifier": z.enum(["none","regional","screener","rawhd","brdisk","remux"]).optional() }).strict().optional(), "items": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "quality": z.string().optional(), "items": z.string().optional(), "allowed": z.string().optional() }).strict()).nullable().optional(), "allowed": z.boolean().optional() }).strict()).nullable().optional(), "allowed": z.boolean().optional() }).strict()).nullable().optional(), "allowed": z.boolean().optional() }).strict()).nullable().optional(), "allowed": z.boolean().optional() }).strict()).nullable().optional(), "allowed": z.boolean().optional() }).strict()).nullable().optional(), "allowed": z.boolean().optional() }).strict()).nullable().optional(), "allowed": z.boolean().optional() }).strict()).nullable().optional(), "allowed": z.boolean().optional() }).strict()).nullable().optional(),
  "minFormatScore": z.number().int().optional(),
  "cutoffFormatScore": z.number().int().optional(),
  "minUpgradeFormatScore": z.number().int().optional(),
  "formatItems": z.array(z.object({ "id": z.number().int().optional(), "format": z.number().int().optional(), "name": z.string().nullable().optional(), "score": z.number().int().optional() }).strict()).nullable().optional(),
  "language": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### get_api_v3_qualityprofile

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### delete_api_v3_qualityprofile_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### put_api_v3_qualityprofile_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "upgradeAllowed": z.boolean().optional(),
  "cutoff": z.number().int().optional(),
  "items": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "quality": z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "source": z.enum(["unknown","cam","telesync","telecine","workprint","dvd","tv","webdl","webrip","bluray"]).optional(), "resolution": z.number().int().optional(), "modifier": z.enum(["none","regional","screener","rawhd","brdisk","remux"]).optional() }).strict().optional(), "items": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "quality": z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "source": z.enum(["unknown","cam","telesync","telecine","workprint","dvd","tv","webdl","webrip","bluray"]).optional(), "resolution": z.number().int().optional(), "modifier": z.enum(["none","regional","screener","rawhd","brdisk","remux"]).optional() }).strict().optional(), "items": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "quality": z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "source": z.enum(["unknown","cam","telesync","telecine","workprint","dvd","tv","webdl","webrip","bluray"]).optional(), "resolution": z.number().int().optional(), "modifier": z.enum(["none","regional","screener","rawhd","brdisk","remux"]).optional() }).strict().optional(), "items": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "quality": z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "source": z.enum(["unknown","cam","telesync","telecine","workprint","dvd","tv","webdl","webrip","bluray"]).optional(), "resolution": z.number().int().optional(), "modifier": z.enum(["none","regional","screener","rawhd","brdisk","remux"]).optional() }).strict().optional(), "items": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "quality": z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "source": z.enum(["unknown","cam","telesync","telecine","workprint","dvd","tv","webdl","webrip","bluray"]).optional(), "resolution": z.number().int().optional(), "modifier": z.enum(["none","regional","screener","rawhd","brdisk","remux"]).optional() }).strict().optional(), "items": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "quality": z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "source": z.enum(["unknown","cam","telesync","telecine","workprint","dvd","tv","webdl","webrip","bluray"]).optional(), "resolution": z.number().int().optional(), "modifier": z.enum(["none","regional","screener","rawhd","brdisk","remux"]).optional() }).strict().optional(), "items": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "quality": z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "source": z.enum(["unknown","cam","telesync","telecine","workprint","dvd","tv","webdl","webrip","bluray"]).optional(), "resolution": z.number().int().optional(), "modifier": z.enum(["none","regional","screener","rawhd","brdisk","remux"]).optional() }).strict().optional(), "items": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "quality": z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "source": z.enum(["unknown","cam","telesync","telecine","workprint","dvd","tv","webdl","webrip","bluray"]).optional(), "resolution": z.number().int().optional(), "modifier": z.enum(["none","regional","screener","rawhd","brdisk","remux"]).optional() }).strict().optional(), "items": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "quality": z.string().optional(), "items": z.string().optional(), "allowed": z.string().optional() }).strict()).nullable().optional(), "allowed": z.boolean().optional() }).strict()).nullable().optional(), "allowed": z.boolean().optional() }).strict()).nullable().optional(), "allowed": z.boolean().optional() }).strict()).nullable().optional(), "allowed": z.boolean().optional() }).strict()).nullable().optional(), "allowed": z.boolean().optional() }).strict()).nullable().optional(), "allowed": z.boolean().optional() }).strict()).nullable().optional(), "allowed": z.boolean().optional() }).strict()).nullable().optional(), "allowed": z.boolean().optional() }).strict()).nullable().optional(),
  "minFormatScore": z.number().int().optional(),
  "cutoffFormatScore": z.number().int().optional(),
  "minUpgradeFormatScore": z.number().int().optional(),
  "formatItems": z.array(z.object({ "id": z.number().int().optional(), "format": z.number().int().optional(), "name": z.string().nullable().optional(), "score": z.number().int().optional() }).strict()).nullable().optional(),
  "language": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### get_api_v3_qualityprofile_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_qualityprofile_schema

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### delete_api_v3_queue_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int(),
  "removeFromClient": z.boolean().optional(),
  "blocklist": z.boolean().optional(),
  "skipRedownload": z.boolean().optional(),
  "changeCategory": z.boolean().optional()
}
```

### delete_api_v3_queue_bulk

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "removeFromClient": z.boolean().optional(),
  "blocklist": z.boolean().optional(),
  "skipRedownload": z.boolean().optional(),
  "changeCategory": z.boolean().optional(),
  "ids": z.array(z.number().int()).nullable().optional()
}
```

### get_api_v3_queue

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "page": z.number().int().optional(),
  "pageSize": z.number().int().optional(),
  "sortKey": z.string().optional(),
  "sortDirection": z.enum(["default","ascending","descending"]).optional(),
  "includeUnknownMovieItems": z.boolean().optional(),
  "includeMovie": z.boolean().optional(),
  "movieIds": z.array(z.number().int()).optional(),
  "protocol": z.enum(["unknown","usenet","torrent"]).optional(),
  "languages": z.array(z.number().int()).optional(),
  "quality": z.array(z.number().int()).optional(),
  "status": z.array(z.enum(["unknown","queued","paused","downloading","completed","failed","warning","delay","downloadClientUnavailable","fallback"])).optional()
}
```

### post_api_v3_queue_grab_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### post_api_v3_queue_grab_bulk

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "ids": z.array(z.number().int()).nullable().optional()
}
```

### get_api_v3_queue_details

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "movieId": z.number().int().optional(),
  "includeMovie": z.boolean().optional()
}
```

### get_api_v3_queue_status

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_release

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "guid": z.string().nullable().optional(),
  "quality": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "customFormats": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "includeCustomFormatWhenRenaming": z.boolean().nullable().optional(), "specifications": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "implementation": z.string().optional(), "implementationName": z.string().optional(), "infoLink": z.string().optional(), "negate": z.string().optional(), "required": z.string().optional(), "fields": z.string().optional(), "presets": z.string().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional(),
  "customFormatScore": z.number().int().optional(),
  "qualityWeight": z.number().int().optional(),
  "age": z.number().int().optional(),
  "ageHours": z.number().optional(),
  "ageMinutes": z.number().optional(),
  "size": z.number().int().optional(),
  "indexerId": z.number().int().optional(),
  "indexer": z.string().nullable().optional(),
  "releaseGroup": z.string().nullable().optional(),
  "subGroup": z.string().nullable().optional(),
  "releaseHash": z.string().nullable().optional(),
  "title": z.string().nullable().optional(),
  "sceneSource": z.boolean().optional(),
  "movieTitles": z.array(z.string()).nullable().optional(),
  "languages": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional() }).strict()).nullable().optional(),
  "mappedMovieId": z.number().int().nullable().optional(),
  "approved": z.boolean().optional(),
  "temporarilyRejected": z.boolean().optional(),
  "rejected": z.boolean().optional(),
  "tmdbId": z.number().int().optional(),
  "imdbId": z.number().int().optional(),
  "rejections": z.array(z.string()).nullable().optional(),
  "publishDate": z.string().datetime({ offset: true }).optional(),
  "commentUrl": z.string().nullable().optional(),
  "downloadUrl": z.string().nullable().optional(),
  "infoUrl": z.string().nullable().optional(),
  "movieRequested": z.boolean().optional(),
  "downloadAllowed": z.boolean().optional(),
  "releaseWeight": z.number().int().optional(),
  "edition": z.string().nullable().optional(),
  "magnetUrl": z.string().nullable().optional(),
  "infoHash": z.string().nullable().optional(),
  "seeders": z.number().int().nullable().optional(),
  "leechers": z.number().int().nullable().optional(),
  "protocol": z.enum(["unknown","usenet","torrent"]).optional(),
  "indexerFlags": z.any().nullable().optional(),
  "movieId": z.number().int().nullable().optional(),
  "downloadClientId": z.number().int().nullable().optional(),
  "downloadClient": z.string().nullable().optional(),
  "shouldOverride": z.boolean().nullable().optional()
}
```

### get_api_v3_release

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "movieId": z.number().int().optional()
}
```

### post_api_v3_releaseprofile

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "enabled": z.boolean().optional(),
  "required": z.any().nullable().optional(),
  "ignored": z.any().nullable().optional(),
  "indexerId": z.number().int().optional(),
  "tags": z.array(z.number().int()).nullable().optional()
}
```

### get_api_v3_releaseprofile

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### delete_api_v3_releaseprofile_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### put_api_v3_releaseprofile_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "enabled": z.boolean().optional(),
  "required": z.any().nullable().optional(),
  "ignored": z.any().nullable().optional(),
  "indexerId": z.number().int().optional(),
  "tags": z.array(z.number().int()).nullable().optional()
}
```

### get_api_v3_releaseprofile_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### post_api_v3_release_push

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "guid": z.string().nullable().optional(),
  "quality": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "customFormats": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "includeCustomFormatWhenRenaming": z.boolean().nullable().optional(), "specifications": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "implementation": z.string().optional(), "implementationName": z.string().optional(), "infoLink": z.string().optional(), "negate": z.string().optional(), "required": z.string().optional(), "fields": z.string().optional(), "presets": z.string().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional() }).strict()).nullable().optional(),
  "customFormatScore": z.number().int().optional(),
  "qualityWeight": z.number().int().optional(),
  "age": z.number().int().optional(),
  "ageHours": z.number().optional(),
  "ageMinutes": z.number().optional(),
  "size": z.number().int().optional(),
  "indexerId": z.number().int().optional(),
  "indexer": z.string().nullable().optional(),
  "releaseGroup": z.string().nullable().optional(),
  "subGroup": z.string().nullable().optional(),
  "releaseHash": z.string().nullable().optional(),
  "title": z.string().nullable().optional(),
  "sceneSource": z.boolean().optional(),
  "movieTitles": z.array(z.string()).nullable().optional(),
  "languages": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional() }).strict()).nullable().optional(),
  "mappedMovieId": z.number().int().nullable().optional(),
  "approved": z.boolean().optional(),
  "temporarilyRejected": z.boolean().optional(),
  "rejected": z.boolean().optional(),
  "tmdbId": z.number().int().optional(),
  "imdbId": z.number().int().optional(),
  "rejections": z.array(z.string()).nullable().optional(),
  "publishDate": z.string().datetime({ offset: true }).optional(),
  "commentUrl": z.string().nullable().optional(),
  "downloadUrl": z.string().nullable().optional(),
  "infoUrl": z.string().nullable().optional(),
  "movieRequested": z.boolean().optional(),
  "downloadAllowed": z.boolean().optional(),
  "releaseWeight": z.number().int().optional(),
  "edition": z.string().nullable().optional(),
  "magnetUrl": z.string().nullable().optional(),
  "infoHash": z.string().nullable().optional(),
  "seeders": z.number().int().nullable().optional(),
  "leechers": z.number().int().nullable().optional(),
  "protocol": z.enum(["unknown","usenet","torrent"]).optional(),
  "indexerFlags": z.any().nullable().optional(),
  "movieId": z.number().int().nullable().optional(),
  "downloadClientId": z.number().int().nullable().optional(),
  "downloadClient": z.string().nullable().optional(),
  "shouldOverride": z.boolean().nullable().optional()
}
```

### post_api_v3_remotepathmapping

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "host": z.string().nullable().optional(),
  "remotePath": z.string().nullable().optional(),
  "localPath": z.string().nullable().optional()
}
```

### get_api_v3_remotepathmapping

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### delete_api_v3_remotepathmapping_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### put_api_v3_remotepathmapping_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "host": z.string().nullable().optional(),
  "remotePath": z.string().nullable().optional(),
  "localPath": z.string().nullable().optional()
}
```

### get_api_v3_remotepathmapping_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_rename

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "movieId": z.number().int().optional()
}
```

### post_api_v3_rootfolder

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "path": z.string().nullable().optional(),
  "accessible": z.boolean().optional(),
  "freeSpace": z.number().int().nullable().optional(),
  "unmappedFolders": z.array(z.object({ "name": z.string().nullable().optional(), "path": z.string().nullable().optional(), "relativePath": z.string().nullable().optional() }).strict()).nullable().optional()
}
```

### get_api_v3_rootfolder

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### delete_api_v3_rootfolder_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_rootfolder_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_content_path_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "path": z.string().regex(new RegExp("^(?!api/).*"))
}
```

### get_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "path": z.string()
}
```

### get_path_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "path": z.string().regex(new RegExp("^(?!(api|feed)/).*"))
}
```

### get_api_v3_system_status

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_system_routes

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_system_routes_duplicate

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_system_shutdown

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_system_restart

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_tag

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### post_api_v3_tag

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "label": z.string().nullable().optional()
}
```

### put_api_v3_tag_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "label": z.string().nullable().optional()
}
```

### delete_api_v3_tag_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_tag_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_tag_detail

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_tag_detail_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_system_task

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_system_task_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### put_api_v3_config_ui_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "firstDayOfWeek": z.number().int().optional(),
  "calendarWeekColumnHeader": z.string().nullable().optional(),
  "movieRuntimeFormat": z.enum(["hoursMinutes","minutes"]).optional(),
  "shortDateFormat": z.string().nullable().optional(),
  "longDateFormat": z.string().nullable().optional(),
  "timeFormat": z.string().nullable().optional(),
  "showRelativeDates": z.boolean().optional(),
  "enableColorImpairedMode": z.boolean().optional(),
  "movieInfoLanguage": z.number().int().optional(),
  "uiLanguage": z.number().int().optional(),
  "theme": z.string().nullable().optional()
}
```

### get_api_v3_config_ui_id_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "id": z.number().int()
}
```

### get_api_v3_config_ui

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_update

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_log_file_update

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{}
```

### get_api_v3_log_file_update_filename_

**Environment variables**

- `APIKEY`
- `X_API_KEY`

**Input schema**

```ts
{
  "filename": z.string().regex(new RegExp("[-.a-zA-Z0-9]+?\\.txt"))
}
```
