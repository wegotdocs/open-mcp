# @open-mcp/amadeus_com_amadeus_travel_recommendations

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "amadeus_com_amadeus_travel_recommendations": {
      "command": "npx",
      "args": ["-y", "@open-mcp/amadeus_com_amadeus_travel_recommendations"],
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

### getrecommendedlocation

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/amadeus_com_amadeus_travel_recommendations
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/amadeus_com_amadeus_travel_recommendations`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
