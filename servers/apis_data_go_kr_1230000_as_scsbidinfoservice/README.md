# @open-mcp/apis_data_go_kr_1230000_as_scsbidinfoservice

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "apis_data_go_kr_1230000_as_scsbidinfoservice": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/apis_data_go_kr_1230000_as_scsbidinfoservice@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/apis_data_go_kr_1230000_as_scsbidinfoservice@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
SERVICEKEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add apis_data_go_kr_1230000_as_scsbidinfoservice \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --SERVICEKEY=$SERVICEKEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add apis_data_go_kr_1230000_as_scsbidinfoservice \
  .cursor/mcp.json \
  --SERVICEKEY=$SERVICEKEY
```

### Other

```bash
npx @open-mcp/config add apis_data_go_kr_1230000_as_scsbidinfoservice \
  /path/to/client/config.json \
  --SERVICEKEY=$SERVICEKEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "apis_data_go_kr_1230000_as_scsbidinfoservice": {
      "command": "npx",
      "args": ["-y", "@open-mcp/apis_data_go_kr_1230000_as_scsbidinfoservice"],
      "env": {"SERVICEKEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `SERVICEKEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_getscsbidliststtusthng

**Environment variables**

- `SERVICEKEY`

**Input schema**

- `inqryDiv` (string)
- `inqryBgnDt` (string)
- `inqryEndDt` (string)
- `pageNo` (integer)
- `numOfRows` (integer)

### get_getscsbidliststtusthngppssrch

**Environment variables**

- `SERVICEKEY`

**Input schema**

- `inqryDiv` (string)
- `inqryBgnDt` (string)
- `inqryEndDt` (string)
- `pageNo` (integer)
- `numOfRows` (integer)
- `bidNtceNm` (string)
- `ntceInsttNm` (string)
- `dminsttNm` (string)
- `indstrytyNm` (string)
- `refNo` (string)

### get_getopengresultlistinfothng

**Environment variables**

- `SERVICEKEY`

**Input schema**

- `bidNtceNo` (string)
- `bidNtceOrd` (string)
- `bidClsfcNo` (string)
- `rbidNo` (string)
- `pageNo` (integer)
- `numOfRows` (integer)

### get_getopengresultlistinfothngpreparpcdetail

**Environment variables**

- `SERVICEKEY`

**Input schema**

- `bidNtceNo` (string)
- `bidNtceOrd` (string)
- `bidClsfcNo` (string)
- `rbidNo` (string)
- `pageNo` (integer)
- `numOfRows` (integer)

### get_getopengresultlistinfofailing

**Environment variables**

- `SERVICEKEY`

**Input schema**

- `bidNtceNo` (string)
- `bidNtceOrd` (string)
- `bidClsfcNo` (string)
- `rbidNo` (string)
- `pageNo` (integer)
- `numOfRows` (integer)

### get_getopengresultlistinforebid

**Environment variables**

- `SERVICEKEY`

**Input schema**

- `bidNtceNo` (string)
- `bidNtceOrd` (string)
- `bidClsfcNo` (string)
- `rbidNo` (string)
- `pageNo` (integer)
- `numOfRows` (integer)
