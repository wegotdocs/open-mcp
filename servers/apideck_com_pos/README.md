# @open-mcp/apideck_com_pos

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "apideck_com_pos": {
      "command": "npx",
      "args": ["-y", "@open-mcp/apideck_com_pos"],
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

### itemsall

### itemsadd

### itemsdelete

### itemsone

### itemsupdate

### locationsall

### locationsadd

### locationsdelete

### locationsone

### locationsupdate

### merchantsall

### merchantsadd

### merchantsdelete

### merchantsone

### merchantsupdate

### modifiergroupsall

### modifiergroupsadd

### modifiergroupsdelete

### modifiergroupsone

### modifiergroupsupdate

### modifiersall

### modifiersadd

### modifiersdelete

### modifiersone

### modifiersupdate

### ordertypesall

### ordertypesadd

### ordertypesdelete

### ordertypesone

### ordertypesupdate

### ordersall

### ordersadd

### ordersdelete

### ordersone

### ordersupdate

### orderspay

### paymentsall

### paymentsadd

### paymentsdelete

### paymentsone

### paymentsupdate

### tendersall

### tendersadd

### tendersdelete

### tendersone

### tendersupdate

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/apideck_com_pos
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/apideck_com_pos`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
