# @open-mcp/syncprojects-app

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/syncprojects-app add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/syncprojects-app add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/syncprojects-app add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "syncprojects-app": {
      "command": "npx",
      "args": ["-y", "@open-mcp/syncprojects-app"],
      "env": {"API_KEY":"...","AUTHORIZATION":"...","SESSIONID":"...","USERNAME_PASSWORD_BASE64":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/syncprojects-app
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/syncprojects-app`
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

### albums_list

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "page": z.number().int().describe("A page number within the paginated result set.").optional()
}
```

### albums_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().readonly(),
  "name": z.string().max(100),
  "cover": z.string().url().nullable().optional(),
  "released": z.boolean().optional(),
  "release_date": z.string().date().nullable().describe("If the album is not released yet, this can be used to specify the estimated release date. YYYY-MM-DD").optional(),
  "project": z.number().int()
}
```

### albums_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string()
}
```

### albums_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().readonly(),
  "name": z.string().max(100),
  "cover": z.string().url().nullable().optional(),
  "released": z.boolean().optional(),
  "release_date": z.string().date().nullable().describe("If the album is not released yet, this can be used to specify the estimated release date. YYYY-MM-DD").optional(),
  "project": z.number().int()
}
```

### albums_partial_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().readonly().optional(),
  "name": z.string().max(100).optional(),
  "cover": z.string().url().nullable().optional(),
  "released": z.boolean().optional(),
  "release_date": z.string().date().nullable().describe("If the album is not released yet, this can be used to specify the estimated release date. YYYY-MM-DD").optional(),
  "project": z.number().int().optional()
}
```

### albums_destroy

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string()
}
```

### backend_creds_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### comments_list

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "page": z.number().int().describe("A page number within the paginated result set.").optional()
}
```

### comments_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().readonly(),
  "text": z.string(),
  "song_time": z.string().nullable().optional(),
  "song_time_seconds": z.string().readonly(),
  "assignee": z.number().int().nullable().optional(),
  "edited": z.boolean().readonly(),
  "project": z.number().int().nullable().optional(),
  "song": z.number().int().nullable().optional(),
  "posted_date": z.string().datetime({ offset: true }).readonly(),
  "requires_resolution": z.boolean().optional(),
  "resolved": z.boolean().optional(),
  "parent": z.number().int().nullable().optional()
}
```

### comments_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string()
}
```

### comments_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().readonly(),
  "text": z.string(),
  "song_time": z.string().nullable().optional(),
  "song_time_seconds": z.string().readonly(),
  "assignee": z.number().int().nullable().optional(),
  "edited": z.boolean().readonly(),
  "project": z.number().int().nullable().optional(),
  "song": z.number().int().nullable().optional(),
  "posted_date": z.string().datetime({ offset: true }).readonly(),
  "requires_resolution": z.boolean().optional(),
  "resolved": z.boolean().optional(),
  "parent": z.number().int().nullable().optional()
}
```

### comments_partial_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().readonly().optional(),
  "text": z.string().optional(),
  "song_time": z.string().nullable().optional(),
  "song_time_seconds": z.string().readonly().optional(),
  "assignee": z.number().int().nullable().optional(),
  "edited": z.boolean().readonly().optional(),
  "project": z.number().int().nullable().optional(),
  "song": z.number().int().nullable().optional(),
  "posted_date": z.string().datetime({ offset: true }).readonly().optional(),
  "requires_resolution": z.boolean().optional(),
  "resolved": z.boolean().optional(),
  "parent": z.number().int().nullable().optional()
}
```

### comments_destroy

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string()
}
```

### comments_like_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().readonly(),
  "text": z.string(),
  "song_time": z.string().nullable().optional(),
  "song_time_seconds": z.string().readonly(),
  "assignee": z.number().int().nullable().optional(),
  "edited": z.boolean().readonly(),
  "project": z.number().int().nullable().optional(),
  "song": z.number().int().nullable().optional(),
  "posted_date": z.string().datetime({ offset: true }).readonly(),
  "requires_resolution": z.boolean().optional(),
  "resolved": z.boolean().optional(),
  "parent": z.number().int().nullable().optional()
}
```

### comments_resolve_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().readonly(),
  "text": z.string(),
  "song_time": z.string().nullable().optional(),
  "song_time_seconds": z.string().readonly(),
  "assignee": z.number().int().nullable().optional(),
  "edited": z.boolean().readonly(),
  "project": z.number().int().nullable().optional(),
  "song": z.number().int().nullable().optional(),
  "posted_date": z.string().datetime({ offset: true }).readonly(),
  "requires_resolution": z.boolean().optional(),
  "resolved": z.boolean().optional(),
  "parent": z.number().int().nullable().optional()
}
```

### comments_unresolve_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().readonly(),
  "text": z.string(),
  "song_time": z.string().nullable().optional(),
  "song_time_seconds": z.string().readonly(),
  "assignee": z.number().int().nullable().optional(),
  "edited": z.boolean().readonly(),
  "project": z.number().int().nullable().optional(),
  "song": z.number().int().nullable().optional(),
  "posted_date": z.string().datetime({ offset: true }).readonly(),
  "requires_resolution": z.boolean().optional(),
  "resolved": z.boolean().optional(),
  "parent": z.number().int().nullable().optional()
}
```

### daw_templates_list

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "page": z.number().int().describe("A page number within the paginated result set.").optional()
}
```

### daw_templates_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "project": z.number().int(),
  "name": z.string(),
  "upload_url": z.string().readonly(),
  "id": z.number().int().readonly()
}
```

### daw_templates_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string()
}
```

### daw_templates_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "project": z.number().int(),
  "name": z.string(),
  "upload_url": z.string().readonly(),
  "b_id": z.number().int().readonly()
}
```

### daw_templates_partial_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "project": z.number().int().optional(),
  "name": z.string().optional(),
  "upload_url": z.string().readonly().optional(),
  "b_id": z.number().int().readonly().optional()
}
```

### daw_templates_destroy

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string()
}
```

### logs_list

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "page": z.number().int().describe("A page number within the paginated result set.").optional()
}
```

### logs_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().readonly(),
  "user": z.number().int().readonly(),
  "date": z.string().datetime({ offset: true }).optional(),
  "log_compressed": z.string().readonly()
}
```

### logs_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this client log.")
}
```

### logs_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this client log."),
  "b_id": z.number().int().readonly(),
  "user": z.number().int().readonly(),
  "date": z.string().datetime({ offset: true }).optional(),
  "log_compressed": z.string().readonly()
}
```

### logs_partial_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this client log."),
  "b_id": z.number().int().readonly().optional(),
  "user": z.number().int().readonly().optional(),
  "date": z.string().datetime({ offset: true }).optional(),
  "log_compressed": z.string().readonly().optional()
}
```

### logs_destroy

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this client log.")
}
```

### peaks_create

**Environment variables**



**Input schema**

```ts
{}
```

### player_party_user_devices_retrieve_2

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "user_id": z.string()
}
```

### player_party_user_devices_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### player_party_user_uri_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### player_regions_list

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "page": z.number().int().describe("A page number within the paginated result set.").optional()
}
```

### player_regions_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().readonly(),
  "start": z.number().gte(0),
  "end": z.number().gte(0),
  "name": z.string().max(50),
  "color": z.string().max(6),
  "song": z.number().int()
}
```

### player_regions_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this song region.")
}
```

### player_regions_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this song region."),
  "b_id": z.number().int().readonly(),
  "start": z.number().gte(0),
  "end": z.number().gte(0),
  "name": z.string().max(50),
  "color": z.string().max(6),
  "song": z.number().int()
}
```

### player_regions_partial_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this song region."),
  "b_id": z.number().int().readonly().optional(),
  "start": z.number().gte(0).optional(),
  "end": z.number().gte(0).optional(),
  "name": z.string().max(50).optional(),
  "color": z.string().max(6).optional(),
  "song": z.number().int().optional()
}
```

### player_regions_destroy

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this song region.")
}
```

### projects_list

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "page": z.number().int().describe("A page number within the paginated result set.").optional()
}
```

### projects_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().readonly(),
  "name": z.string().max(100),
  "bio": z.string().nullable().optional(),
  "created_at": z.string().datetime({ offset: true }).optional(),
  "image": z.string().url().nullable().optional(),
  "sync_enabled": z.boolean().optional(),
  "sharing": z.enum(["public","unlisted","invite"]).describe("* \`public\` - Public\n* \`unlisted\` - Unlisted\n* \`invite\` - Invite Only").optional(),
  "is_locked": z.boolean().readonly(),
  "website": z.string().url().max(200).nullable().optional(),
  "songs": z.string().readonly()
}
```

### projects_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string()
}
```

### projects_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().readonly(),
  "name": z.string().max(100),
  "bio": z.string().nullable().optional(),
  "created_at": z.string().datetime({ offset: true }).optional(),
  "image": z.string().url().nullable().optional(),
  "sync_enabled": z.boolean().optional(),
  "sharing": z.enum(["public","unlisted","invite"]).describe("* \`public\` - Public\n* \`unlisted\` - Unlisted\n* \`invite\` - Invite Only").optional(),
  "is_locked": z.boolean().readonly(),
  "website": z.string().url().max(200).nullable().optional(),
  "songs": z.string().readonly()
}
```

### projects_partial_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().readonly().optional(),
  "name": z.string().max(100).optional(),
  "bio": z.string().nullable().optional(),
  "created_at": z.string().datetime({ offset: true }).optional(),
  "image": z.string().url().nullable().optional(),
  "sync_enabled": z.boolean().optional(),
  "sharing": z.enum(["public","unlisted","invite"]).describe("* \`public\` - Public\n* \`unlisted\` - Unlisted\n* \`invite\` - Invite Only").optional(),
  "is_locked": z.boolean().readonly().optional(),
  "website": z.string().url().max(200).nullable().optional(),
  "songs": z.string().readonly().optional()
}
```

### projects_destroy

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string()
}
```

### projects_lock_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().readonly(),
  "name": z.string().max(100),
  "bio": z.string().nullable().optional(),
  "created_at": z.string().datetime({ offset: true }).optional(),
  "image": z.string().url().nullable().optional(),
  "sync_enabled": z.boolean().optional(),
  "sharing": z.enum(["public","unlisted","invite"]).describe("* \`public\` - Public\n* \`unlisted\` - Unlisted\n* \`invite\` - Invite Only").optional(),
  "is_locked": z.boolean().readonly(),
  "website": z.string().url().max(200).nullable().optional(),
  "songs": z.string().readonly()
}
```

### projects_lock_destroy

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string()
}
```

### regions_list

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "page": z.number().int().describe("A page number within the paginated result set.").optional()
}
```

### regions_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().readonly(),
  "start": z.number().gte(0),
  "end": z.number().gte(0),
  "name": z.string().max(50),
  "color": z.string().max(6),
  "song": z.number().int()
}
```

### regions_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this song region.")
}
```

### regions_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this song region."),
  "b_id": z.number().int().readonly(),
  "start": z.number().gte(0),
  "end": z.number().gte(0),
  "name": z.string().max(50),
  "color": z.string().max(6),
  "song": z.number().int()
}
```

### regions_partial_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this song region."),
  "b_id": z.number().int().readonly().optional(),
  "start": z.number().gte(0).optional(),
  "end": z.number().gte(0).optional(),
  "name": z.string().max(50).optional(),
  "color": z.string().max(6).optional(),
  "song": z.number().int().optional()
}
```

### regions_destroy

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this song region.")
}
```

### sign_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### snippets_list

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "page": z.number().int().describe("A page number within the paginated result set.").optional()
}
```

### snippets_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "project": z.number().int(),
  "name": z.string(),
  "upload_url": z.string().readonly(),
  "id": z.number().int().readonly()
}
```

### snippets_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string()
}
```

### snippets_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "project": z.number().int(),
  "name": z.string(),
  "upload_url": z.string().readonly(),
  "b_id": z.number().int().readonly()
}
```

### snippets_partial_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "project": z.number().int().optional(),
  "name": z.string().optional(),
  "upload_url": z.string().readonly().optional(),
  "b_id": z.number().int().readonly().optional()
}
```

### snippets_destroy

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string()
}
```

### songs_list

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "page": z.number().int().describe("A page number within the paginated result set.").optional()
}
```

### songs_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().readonly(),
  "name": z.string().max(100).describe("Note that changing the song name may affect the ability to sync DAW projects or retrieve exported audio files. Please ensure you rename the song elsewhere as needed."),
  "created_at": z.string().datetime({ offset: true }).optional(),
  "updated_at": z.string().datetime({ offset: true }).optional(),
  "sync_enabled": z.boolean().optional(),
  "directory_name": z.string().max(200).nullable().describe("Specify a different folder name for Syncprojects-client to use (optional)").optional(),
  "last_mtime": z.string().datetime({ offset: true }).nullable().optional(),
  "project": z.number().int(),
  "is_locked": z.boolean().readonly(),
  "revision": z.number().int().readonly(),
  "url": z.string().max(300).nullable().optional(),
  "archived": z.boolean().describe("Prevent further syncs to this song. It can be downloaded, but no new changes made.").optional(),
  "project_file": z.string().max(200).nullable().describe("By default, the most recently edited .cpr file is opened. Usethis to supply a custom filename.").optional(),
  "album": z.number().int().nullable().optional(),
  "album_order": z.number().int().nullable().optional(),
  "duration": z.string().readonly()
}
```

### songs_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string()
}
```

### songs_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().readonly(),
  "name": z.string().max(100).describe("Note that changing the song name may affect the ability to sync DAW projects or retrieve exported audio files. Please ensure you rename the song elsewhere as needed."),
  "created_at": z.string().datetime({ offset: true }).optional(),
  "updated_at": z.string().datetime({ offset: true }).optional(),
  "sync_enabled": z.boolean().optional(),
  "directory_name": z.string().max(200).nullable().describe("Specify a different folder name for Syncprojects-client to use (optional)").optional(),
  "last_mtime": z.string().datetime({ offset: true }).nullable().optional(),
  "project": z.number().int(),
  "is_locked": z.boolean().readonly(),
  "revision": z.number().int().readonly(),
  "url": z.string().max(300).nullable().optional(),
  "archived": z.boolean().describe("Prevent further syncs to this song. It can be downloaded, but no new changes made.").optional(),
  "project_file": z.string().max(200).nullable().describe("By default, the most recently edited .cpr file is opened. Usethis to supply a custom filename.").optional(),
  "album": z.number().int().nullable().optional(),
  "album_order": z.number().int().nullable().optional(),
  "duration": z.string().readonly()
}
```

### songs_partial_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().readonly().optional(),
  "name": z.string().max(100).describe("Note that changing the song name may affect the ability to sync DAW projects or retrieve exported audio files. Please ensure you rename the song elsewhere as needed.").optional(),
  "created_at": z.string().datetime({ offset: true }).optional(),
  "updated_at": z.string().datetime({ offset: true }).optional(),
  "sync_enabled": z.boolean().optional(),
  "directory_name": z.string().max(200).nullable().describe("Specify a different folder name for Syncprojects-client to use (optional)").optional(),
  "last_mtime": z.string().datetime({ offset: true }).nullable().optional(),
  "project": z.number().int().optional(),
  "is_locked": z.boolean().readonly().optional(),
  "revision": z.number().int().readonly().optional(),
  "url": z.string().max(300).nullable().optional(),
  "archived": z.boolean().describe("Prevent further syncs to this song. It can be downloaded, but no new changes made.").optional(),
  "project_file": z.string().max(200).nullable().describe("By default, the most recently edited .cpr file is opened. Usethis to supply a custom filename.").optional(),
  "album": z.number().int().nullable().optional(),
  "album_order": z.number().int().nullable().optional(),
  "duration": z.string().readonly().optional()
}
```

### songs_destroy

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string()
}
```

### songs_changelog_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().readonly(),
  "name": z.string().max(100).describe("Note that changing the song name may affect the ability to sync DAW projects or retrieve exported audio files. Please ensure you rename the song elsewhere as needed."),
  "created_at": z.string().datetime({ offset: true }).optional(),
  "updated_at": z.string().datetime({ offset: true }).optional(),
  "sync_enabled": z.boolean().optional(),
  "directory_name": z.string().max(200).nullable().describe("Specify a different folder name for Syncprojects-client to use (optional)").optional(),
  "last_mtime": z.string().datetime({ offset: true }).nullable().optional(),
  "project": z.number().int(),
  "is_locked": z.boolean().readonly(),
  "revision": z.number().int().readonly(),
  "url": z.string().max(300).nullable().optional(),
  "archived": z.boolean().describe("Prevent further syncs to this song. It can be downloaded, but no new changes made.").optional(),
  "project_file": z.string().max(200).nullable().describe("By default, the most recently edited .cpr file is opened. Usethis to supply a custom filename.").optional(),
  "album": z.number().int().nullable().optional(),
  "album_order": z.number().int().nullable().optional(),
  "duration": z.string().readonly()
}
```

### songs_share_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.number().int().readonly(),
  "name": z.string().max(100).describe("Note that changing the song name may affect the ability to sync DAW projects or retrieve exported audio files. Please ensure you rename the song elsewhere as needed."),
  "created_at": z.string().datetime({ offset: true }).optional(),
  "updated_at": z.string().datetime({ offset: true }).optional(),
  "sync_enabled": z.boolean().optional(),
  "directory_name": z.string().max(200).nullable().describe("Specify a different folder name for Syncprojects-client to use (optional)").optional(),
  "last_mtime": z.string().datetime({ offset: true }).nullable().optional(),
  "project": z.number().int(),
  "is_locked": z.boolean().readonly(),
  "revision": z.number().int().readonly(),
  "url": z.string().max(300).nullable().optional(),
  "archived": z.boolean().describe("Prevent further syncs to this song. It can be downloaded, but no new changes made.").optional(),
  "project_file": z.string().max(200).nullable().describe("By default, the most recently edited .cpr file is opened. Usethis to supply a custom filename.").optional(),
  "album": z.number().int().nullable().optional(),
  "album_order": z.number().int().nullable().optional(),
  "duration": z.string().readonly()
}
```

### songs_url_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string()
}
```

### sync_audio_sync_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### sync_checkouts_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### sync_logs_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### sync_logs_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### sync_logs_destroy

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### sync_plugins_update_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "plugin": z.string()
}
```

### sync_plugins_updates_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "plugin": z.string()
}
```

### sync_plugins_upload_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "plugin": z.string()
}
```

### sync_pubkey_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### syncs_list

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "page": z.number().int().describe("A page number within the paginated result set.").optional()
}
```

### syncs_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "user": z.number().int().readonly(),
  "sync_time": z.string().datetime({ offset: true }).readonly(),
  "changelog": z.array(z.object({ "id": z.number().int().readonly(), "text": z.string(), "song": z.number().int(), "date_created": z.string().datetime({ offset: true }).optional(), "user": z.string().readonly() })).readonly(),
  "project": z.number().int(),
  "songs": z.array(z.number().int())
}
```

### syncs_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this sync.")
}
```

### syncs_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this sync."),
  "user": z.number().int().readonly(),
  "sync_time": z.string().datetime({ offset: true }).readonly(),
  "changelog": z.array(z.object({ "id": z.number().int().readonly(), "text": z.string(), "song": z.number().int(), "date_created": z.string().datetime({ offset: true }).optional(), "user": z.string().readonly() })).readonly(),
  "project": z.number().int(),
  "songs": z.array(z.number().int())
}
```

### syncs_partial_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this sync."),
  "user": z.number().int().readonly().optional(),
  "sync_time": z.string().datetime({ offset: true }).readonly().optional(),
  "changelog": z.array(z.object({ "id": z.number().int().readonly(), "text": z.string(), "song": z.number().int(), "date_created": z.string().datetime({ offset: true }).optional(), "user": z.string().readonly() })).readonly().optional(),
  "project": z.number().int().optional(),
  "songs": z.array(z.number().int()).optional()
}
```

### syncs_destroy

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this sync.")
}
```

### syncs_changelog_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this sync."),
  "user": z.number().int().readonly(),
  "sync_time": z.string().datetime({ offset: true }).readonly(),
  "changelog": z.array(z.object({ "id": z.number().int().readonly(), "text": z.string(), "song": z.number().int(), "date_created": z.string().datetime({ offset: true }).optional(), "user": z.string().readonly() })).readonly(),
  "project": z.number().int(),
  "songs": z.array(z.number().int())
}
```

### syncs_download_revisions_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this sync.")
}
```

### syncs_get_changelogs_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this sync.")
}
```

### syncs_reverse_revisions_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this sync."),
  "user": z.number().int().readonly(),
  "sync_time": z.string().datetime({ offset: true }).readonly(),
  "changelog": z.array(z.object({ "id": z.number().int().readonly(), "text": z.string(), "song": z.number().int(), "date_created": z.string().datetime({ offset: true }).optional(), "user": z.string().readonly() })).readonly(),
  "project": z.number().int(),
  "songs": z.array(z.number().int())
}
```

### syncs_start_upload_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this sync."),
  "user": z.number().int().readonly(),
  "sync_time": z.string().datetime({ offset: true }).readonly(),
  "changelog": z.array(z.object({ "id": z.number().int().readonly(), "text": z.string(), "song": z.number().int(), "date_created": z.string().datetime({ offset: true }).optional(), "user": z.string().readonly() })).readonly(),
  "project": z.number().int(),
  "songs": z.array(z.number().int())
}
```

### todo_check_create

**Environment variables**



**Input schema**

```ts
{}
```

### token_create

**Environment variables**



**Input schema**

```ts
{
  "email": z.string(),
  "password": z.string(),
  "access": z.string().readonly(),
  "refresh": z.string().readonly()
}
```

### token_client_create

**Environment variables**



**Input schema**

```ts
{}
```

### token_fetch_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### token_refresh_create

**Environment variables**



**Input schema**

```ts
{
  "access": z.string().readonly(),
  "refresh": z.string()
}
```

### token_verify_create

**Environment variables**



**Input schema**

```ts
{
  "token": z.string()
}
```

### updates_list

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "page": z.number().int().describe("A page number within the paginated result set.").optional()
}
```

### updates_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "version": z.string().max(30),
  "updater": z.string().readonly(),
  "package": z.string().url(),
  "target": z.string(),
  "package_hash": z.string().max(68).nullable().optional(),
  "id": z.number().int().readonly(),
  "signature": z.string().max(300).nullable().optional()
}
```

### updates_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this client update.")
}
```

### updates_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this client update."),
  "version": z.string().max(30),
  "updater": z.string().readonly(),
  "package": z.string().url(),
  "target": z.string(),
  "package_hash": z.string().max(68).nullable().optional(),
  "b_id": z.number().int().readonly(),
  "signature": z.string().max(300).nullable().optional()
}
```

### updates_partial_update

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this client update."),
  "version": z.string().max(30).optional(),
  "updater": z.string().readonly().optional(),
  "package": z.string().url().optional(),
  "target": z.string().optional(),
  "package_hash": z.string().max(68).nullable().optional(),
  "b_id": z.number().int().readonly().optional(),
  "signature": z.string().max(300).nullable().optional()
}
```

### updates_destroy

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this client update.")
}
```

### updates_signed_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### users_list

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "page": z.number().int().describe("A page number within the paginated result set.").optional()
}
```

### users_retrieve

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this user.")
}
```

### webhook_update_create

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```
