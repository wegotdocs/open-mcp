# @open-mcp/canada_holidays_ca

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "canada_holidays_ca": {
      "command": "npx",
      "args": ["-y", "@open-mcp/canada_holidays_ca"],
      "env": {
        "API_KEY": "..."
      }
    }
  }
}
```

## Environment variables

- `API_KEY`

## Tools

### root

### holidays

### holiday

### parameters_api_v1_holidays_holidayid_

### provinces

### province

### parameters_api_v1_provinces_provinceid_

### spec

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/canada_holidays_ca
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/canada_holidays_ca`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
