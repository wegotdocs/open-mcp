# @open-mcp/token_api_thegraph_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "token_api_thegraph_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/token_api_thegraph_com"],
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

### getbalancesevmbyaddress

### gettransfersevmbyaddress

### getholdersevmbycontract

### gettokensevmbycontract

### getohlcpricesevmbycontract

### gethealth

### getversion

### getnetworks

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/token_api_thegraph_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/token_api_thegraph_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
