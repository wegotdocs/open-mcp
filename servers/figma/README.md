# @open-mcp/figma

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "figma": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/figma@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/figma@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

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

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `OAUTH2_TOKEN` - gets sent to the API provider
- `X_FIGMA_TOKEN` - gets sent to the API provider

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
