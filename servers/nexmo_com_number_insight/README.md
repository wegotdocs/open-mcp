# @open-mcp/nexmo_com_number_insight

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "nexmo_com_number_insight": {
      "command": "npx",
      "args": ["-y", "@open-mcp/nexmo_com_number_insight"],
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

### getnumberinsightasync

### parameters_advanced_async_format_

### getnumberinsightadvanced

### parameters_advanced_format_

### getnumberinsightbasic

### parameters_basic_format_

### getnumberinsightstandard

### parameters_standard_format_

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/nexmo_com_number_insight
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/nexmo_com_number_insight`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
