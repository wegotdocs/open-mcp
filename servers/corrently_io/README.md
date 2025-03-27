# @open-mcp/corrently_io

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "corrently_io": {
      "command": "npx",
      "args": ["-y", "@open-mcp/corrently_io"],
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

### easeesessions

### ocppsessions

### omactivities

### ommeters

### omreadings

### gsibesthour

### gsidispatch

### gsimarketdata

### gsiprediction

### meteringget

### meteringpost

### quittungcomit

### quittungcreate

### quittungprepare

### quittungtse

### quittungtsedata

### quittungtsesignature

### quittungzugferd

### stromkontobalances

### stromkontochoices

### stromkontologin

### preparetransaction

### stromkontoregister

### tariffcomponents

### tariffslph0

### wimstatus

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/corrently_io
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/corrently_io`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
