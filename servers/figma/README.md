# @open-mcp/figma

## Installing

First set the environment variables as shell variables:

```bash
OAUTH2_TOKEN='...'
X_FIGMA_TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add figma \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN \
  --X_FIGMA_TOKEN=$X_FIGMA_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add figma \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN \
  --X_FIGMA_TOKEN=$X_FIGMA_TOKEN
```

### Other

```bash
npx @open-mcp/config add figma \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN \
  --X_FIGMA_TOKEN=$X_FIGMA_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@open-mcp/figma"],
      "env": {"OAUTH2_TOKEN":"...","X_FIGMA_TOKEN":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/figma
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/figma`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### getfile

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `version` (string)
- `ids` (string)
- `depth` (number)
- `geometry` (string)
- `plugin_data` (string)
- `branch_data` (boolean)

### getfilenodes

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `ids` (string)
- `version` (string)
- `depth` (number)
- `geometry` (string)
- `plugin_data` (string)

### getimages

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `ids` (string)
- `version` (string)
- `scale` (number)
- `format` (string)
- `svg_outline_text` (boolean)
- `svg_include_id` (boolean)
- `svg_include_node_id` (boolean)
- `svg_simplify_stroke` (boolean)
- `contents_only` (boolean)
- `use_absolute_bounds` (boolean)

### getimagefills

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)

### getteamprojects

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `team_id` (string)

### getprojectfiles

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `project_id` (string)
- `branch_data` (boolean)

### getfileversions

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `page_size` (number)
- `before` (number)
- `after` (number)

### getcomments

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `as_md` (boolean)

### postcomment

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `message` (string)
- `comment_id` (string)
- `client_meta` (other)

### deletecomment

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `comment_id` (string)

### getcommentreactions

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `comment_id` (string)
- `cursor` (string)

### postcommentreaction

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `comment_id` (string)
- `emoji` (string)

### deletecommentreaction

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `comment_id` (string)
- `emoji` (string)

### getme

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

No input parameters

### getteamcomponents

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `team_id` (string)
- `page_size` (number)
- `after` (number)
- `before` (number)

### getfilecomponents

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)

### getcomponent

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `key` (string)

### getteamcomponentsets

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `team_id` (string)
- `page_size` (number)
- `after` (number)
- `before` (number)

### getfilecomponentsets

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)

### getcomponentset

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `key` (string)

### getteamstyles

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `team_id` (string)
- `page_size` (number)
- `after` (number)
- `before` (number)

### getfilestyles

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)

### getstyle

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `key` (string)

### postwebhook

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `event_type` (string)
- `team_id` (string)
- `endpoint` (string)
- `passcode` (string)
- `status` (string)
- `description` (string)

### getwebhook

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `webhook_id` (string)

### putwebhook

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `webhook_id` (string)
- `event_type` (string)
- `endpoint` (string)
- `passcode` (string)
- `status` (string)
- `description` (string)

### deletewebhook

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `webhook_id` (string)

### getteamwebhooks

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `team_id` (string)

### getwebhookrequests

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `webhook_id` (string)

### getactivitylogs

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `events` (string)
- `start_time` (number)
- `end_time` (number)
- `limit` (number)
- `order` (string)

### getpayments

**Environment variables**

- `X_FIGMA_TOKEN`

**Input schema**

- `plugin_payment_token` (string)
- `user_id` (string)
- `community_file_id` (string)
- `plugin_id` (string)
- `widget_id` (string)

### getlocalvariables

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)

### getpublishedvariables

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)

### postvariables

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `variableCollections` (array)
- `variableModes` (array)
- `variables` (array)
- `variableModeValues` (array)

### getdevresources

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `node_ids` (string)

### postdevresources

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `dev_resources` (array)

### putdevresources

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `dev_resources` (array)

### deletedevresource

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `dev_resource_id` (string)

### getlibraryanalyticscomponentactions

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `cursor` (string)
- `group_by` (string)
- `start_date` (string)
- `end_date` (string)

### getlibraryanalyticscomponentusages

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `cursor` (string)
- `group_by` (string)

### getlibraryanalyticsstyleactions

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `cursor` (string)
- `group_by` (string)
- `start_date` (string)
- `end_date` (string)

### getlibraryanalyticsstyleusages

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `cursor` (string)
- `group_by` (string)

### getlibraryanalyticsvariableactions

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `cursor` (string)
- `group_by` (string)
- `start_date` (string)
- `end_date` (string)

### getlibraryanalyticsvariableusages

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

- `file_key` (string)
- `cursor` (string)
- `group_by` (string)
