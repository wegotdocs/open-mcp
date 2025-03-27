# @open-mcp/docker_com_dvp

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "docker_com_dvp": {
      "command": "npx",
      "args": ["-y", "@open-mcp/docker_com_dvp"],
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

### getnamespaces

### getnamespace

### getnamespaceyears

### getnamespacetimespans

### getnamespacetimespanmetadata

### getnamespacedatabytimespan

### postusers2falogin

### servers_v2_users_2fa_login

### postuserslogin

### servers_v2_users_login

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/docker_com_dvp
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/docker_com_dvp`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
