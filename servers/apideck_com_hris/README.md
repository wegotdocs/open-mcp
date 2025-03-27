# @open-mcp/apideck_com_hris

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "apideck_com_hris": {
      "command": "npx",
      "args": ["-y", "@open-mcp/apideck_com_hris"],
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

### companiesall

### companiesadd

### companiesdelete

### companiesone

### companiesupdate

### departmentsall

### departmentsadd

### departmentsdelete

### departmentsone

### departmentsupdate

### employeesall

### employeesadd

### employeesdelete

### employeesone

### employeesupdate

### jobsall

### jobsone

### payrollsall

### employeepayrollsall

### employeepayrollsone

### payrollsone

### employeeschedulesall

### timeoffrequestsall

### timeoffrequestsadd

### timeoffrequestsdelete

### timeoffrequestsone

### timeoffrequestsupdate

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/apideck_com_hris
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/apideck_com_hris`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
