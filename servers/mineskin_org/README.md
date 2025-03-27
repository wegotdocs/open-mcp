# @open-mcp/mineskin_org

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "mineskin_org": {
      "command": "npx",
      "args": ["-y", "@open-mcp/mineskin_org"],
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

### post_generate_upload

### post_generate_url

### post_generate_user

### get_get_delay

### get_get_id_id_

### get_get_list_page_

### get_get_uuid_uuid_

### get_validate_name_name_

### get_validate_uuid_uuid_

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/mineskin_org
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/mineskin_org`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
