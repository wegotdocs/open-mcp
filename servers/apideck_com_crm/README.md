# @open-mcp/apideck_com_crm

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "apideck_com_crm": {
      "command": "npx",
      "args": ["-y", "@open-mcp/apideck_com_crm"],
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

### activitiesall

### activitiesadd

### activitiesdelete

### activitiesone

### activitiesupdate

### companiesall

### companiesadd

### companiesdelete

### companiesone

### companiesupdate

### contactsall

### contactsadd

### contactsdelete

### contactsone

### contactsupdate

### leadsall

### leadsadd

### leadsdelete

### leadsone

### leadsupdate

### notesall

### notesadd

### notesdelete

### notesone

### notesupdate

### opportunitiesall

### opportunitiesadd

### opportunitiesdelete

### opportunitiesone

### opportunitiesupdate

### pipelinesall

### pipelinesadd

### pipelinesdelete

### pipelinesone

### pipelinesupdate

### usersall

### usersadd

### usersdelete

### usersone

### usersupdate

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/apideck_com_crm
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/apideck_com_crm`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
