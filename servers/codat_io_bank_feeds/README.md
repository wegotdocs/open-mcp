# @open-mcp/codat_io_bank_feeds

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "codat_io_bank_feeds": {
      "command": "npx",
      "args": ["-y", "@open-mcp/codat_io_bank_feeds"],
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

### get_bank_feeds

### create_bank_feed

### update_bank_feed

### list_bank_account_transactions

### get_create_bank_account_model

### create_bank_transactions

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/codat_io_bank_feeds
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/codat_io_bank_feeds`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
