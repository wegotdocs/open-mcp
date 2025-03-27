# @open-mcp/ideaconsult_net_nanoreg

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "ideaconsult_net_nanoreg": {
      "command": "npx",
      "args": ["-y", "@open-mcp/ideaconsult_net_nanoreg"],
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

### getinvestigationresults

### searchbyidentifier

### searchbysimilarity

### searchbysmarts

### getendpointsummary

### getsubstances

### getsubstancebyuuid

### getsubstancecomposition

### getsubstancestructures

### getsubstancestudy

### getsubstancestudysummary

### description_select

### solrquery_get

### solrquery_post

### summary_select

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/ideaconsult_net_nanoreg
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/ideaconsult_net_nanoreg`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
