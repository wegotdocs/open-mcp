# @open-mcp/forgeapi_puppet_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "forgeapi_puppet_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/forgeapi_puppet_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/forgeapi_puppet_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
AUTHORIZATION_BEARER_API_KEY_='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add forgeapi_puppet_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --AUTHORIZATION_BEARER_API_KEY_=$AUTHORIZATION_BEARER_API_KEY_
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add forgeapi_puppet_com \
  .cursor/mcp.json \
  --AUTHORIZATION_BEARER_API_KEY_=$AUTHORIZATION_BEARER_API_KEY_
```

### Other

```bash
npx @open-mcp/config add forgeapi_puppet_com \
  /path/to/client/config.json \
  --AUTHORIZATION_BEARER_API_KEY_=$AUTHORIZATION_BEARER_API_KEY_
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "forgeapi_puppet_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/forgeapi_puppet_com"],
      "env": {"AUTHORIZATION_BEARER_API_KEY_":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `AUTHORIZATION_BEARER_API_KEY_` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### getfile

**Environment variables**

No environment variables required

**Input schema**

- `filename` (string)

### getmodules

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `sort_by` (string)
- `query` (string)
- `tag` (string)
- `owner` (string)
- `with_tasks` (boolean)
- `with_plans` (boolean)
- `with_pdk` (boolean)
- `premium` (boolean)
- `exclude_premium` (boolean)
- `endorsements` (array)
- `operatingsystem` (string)
- `operatingsystemrelease` (string)
- `pe_requirement` (string)
- `puppet_requirement` (string)
- `with_minimum_score` (integer)
- `module_groups` (array)
- `show_deleted` (boolean)
- `hide_deprecated` (boolean)
- `hide_contribution` (boolean)
- `only_latest` (boolean)
- `slugs` (array)
- `with_html` (boolean)
- `include_fields` (array)
- `exclude_fields` (array)
- `starts_with` (string)
- `supported` (boolean)
- `with_release_since` (string)
- `If-Modified-Since` (string)

### addsearchfilter

**Environment variables**

No environment variables required

**Input schema**

- `search_filter_slug` (string)
- `with_html` (boolean)
- `include_fields` (array)
- `exclude_fields` (array)
- `If-Modified-Since` (string)

### getusersearchfilters

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### deleteusersearchfilter

**Environment variables**

- `AUTHORIZATION_BEARER_API_KEY_`

**Input schema**

- `id` (integer)

### getmodule

**Environment variables**

No environment variables required

**Input schema**

- `module_slug` (string)
- `with_html` (boolean)
- `include_fields` (array)
- `exclude_fields` (array)
- `If-Modified-Since` (string)

### deprecatemodule

**Environment variables**

- `AUTHORIZATION_BEARER_API_KEY_`

**Input schema**

- `module_slug` (string)
- `action` (string)
- `params` (object)

### deletemodule

**Environment variables**

- `AUTHORIZATION_BEARER_API_KEY_`

**Input schema**

- `module_slug` (string)
- `reason` (string)

### getreleases

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `sort_by` (string)
- `module` (string)
- `owner` (string)
- `with_pdk` (boolean)
- `operatingsystem` (string)
- `operatingsystemrelease` (string)
- `pe_requirement` (string)
- `puppet_requirement` (string)
- `module_groups` (array)
- `show_deleted` (boolean)
- `hide_deprecated` (boolean)
- `hide_contribution` (boolean)
- `with_html` (boolean)
- `include_fields` (array)
- `exclude_fields` (array)
- `supported` (boolean)
- `If-Modified-Since` (string)

### addrelease

**Environment variables**

- `AUTHORIZATION_BEARER_API_KEY_`

**Input schema**

- `file` (string)

### getrelease

**Environment variables**

No environment variables required

**Input schema**

- `release_slug` (string)
- `with_html` (boolean)
- `include_fields` (array)
- `exclude_fields` (array)
- `If-Modified-Since` (string)

### deleterelease

**Environment variables**

- `AUTHORIZATION_BEARER_API_KEY_`

**Input schema**

- `release_slug` (string)
- `reason` (string)

### getreleaseplans

**Environment variables**

No environment variables required

**Input schema**

- `release_slug` (string)

### getreleaseplan

**Environment variables**

No environment variables required

**Input schema**

- `release_slug` (string)
- `plan_name` (string)

### getusers

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `sort_by` (string)
- `with_html` (boolean)
- `include_fields` (array)
- `exclude_fields` (array)
- `If-Modified-Since` (string)

### getuser

**Environment variables**

No environment variables required

**Input schema**

- `user_slug` (string)
- `with_html` (boolean)
- `include_fields` (array)
- `exclude_fields` (array)
- `If-Modified-Since` (string)
