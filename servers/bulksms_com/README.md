# @open-mcp/bulksms_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "bulksms_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/bulksms_com"],
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

### get_blocked_numbers

### post_blocked_numbers

### post_credit_transfer

### get_messages

### post_messages

### get_messages_send

### get_messages_id_

### get_messages_id_relatedreceivedmessages

### get_profile

### post_rmm_pre_sign_attachment

### get_webhooks

### post_webhooks

### delete_webhooks_id_

### get_webhooks_id_

### parameters_webhooks_id_

### post_webhooks_id_

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/bulksms_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/bulksms_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
