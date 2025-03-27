# @open-mcp/amadeus_com_amadeus_flight_price_analysis

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "amadeus_com_amadeus_flight_price_analysis": {
      "command": "npx",
      "args": ["-y", "@open-mcp/amadeus_com_amadeus_flight_price_analysis"],
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

### get_itinerary_price_metrics

### parameters_analytics_itinerary_price_metrics

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/amadeus_com_amadeus_flight_price_analysis
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/amadeus_com_amadeus_flight_price_analysis`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
