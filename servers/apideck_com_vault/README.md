# @open-mcp/apideck_com_vault

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "apideck_com_vault": {
      "command": "npx",
      "args": ["-y", "@open-mcp/apideck_com_vault"],
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

### connectionsauthorize

### connectionscallback

### connectionsall

### connectionsdelete

### connectionsone

### connectionsupdate

### connectionsadd

### connectionsimport

### connectionstoken

### connectionsettingsall

### connectionsettingsupdate

### consumersall

### consumersadd

### consumersdelete

### consumersone

### consumersupdate

### consumerrequestcountsall

### logsall

### connectionsrevoke

### sessionscreate

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/apideck_com_vault
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/apideck_com_vault`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
