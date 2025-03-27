# @open-mcp/amadeus_com_amadeus_location_score

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "amadeus_com_amadeus_location_score": {
      "command": "npx",
      "args": ["-y", "@open-mcp/amadeus_com_amadeus_location_score"],
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

### get_category_rated_areas

### parameters_location_analytics_category_rated_areas

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/amadeus_com_amadeus_location_score
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/amadeus_com_amadeus_location_score`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
