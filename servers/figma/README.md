# @open-mcp/figma

## Installing

### With helper

Use the `add-to-client` helper to add the server to your MCP client:

```bash
npx @open-mcp/figma add-to-client /path/to/client/config.json
```

For example:

```bash
# Claude desktop:
npx @open-mcp/figma add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json

# Cursor project (run from the project dir):
npx @open-mcp/figma add-to-client .cursor/mcp.json

# Cursor global (applies to all projects):
npx @open-mcp/figma add-to-client ~/.cursor/mcp.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@open-mcp/figma"],
      "env": {"X_FIGMA_TOKEN":"...","OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `X_FIGMA_TOKEN`
- `OAUTH2_TOKEN`

## Tools

### getfile

### getfilenodes

### getimages

### getimagefills

### getteamprojects

### getprojectfiles

### getfileversions

### getcomments

### postcomment

### deletecomment

### getcommentreactions

### postcommentreaction

### deletecommentreaction

### getme

### getteamcomponents

### getfilecomponents

### getcomponent

### getteamcomponentsets

### getfilecomponentsets

### getcomponentset

### getteamstyles

### getfilestyles

### getstyle

### postwebhook

### getwebhook

### putwebhook

### deletewebhook

### getteamwebhooks

### getwebhookrequests

### getactivitylogs

### getpayments

### getlocalvariables

### getpublishedvariables

### postvariables

### getdevresources

### postdevresources

### putdevresources

### deletedevresource

### getlibraryanalyticscomponentactions

### getlibraryanalyticscomponentusages

### getlibraryanalyticsstyleactions

### getlibraryanalyticsstyleusages

### getlibraryanalyticsvariableactions

### getlibraryanalyticsvariableusages

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
