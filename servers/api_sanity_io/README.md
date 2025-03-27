# @open-mcp/api_sanity_io

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "api_sanity_io": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_sanity_io"],
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

### getpermissions

### createpermission

### getpermission

### updatepermission

### deletepermission

### getmypermissions

### getuserpermissions

### getusers

### adddefaultroletousers

### getuser

### removeuser

### addroletouser

### removerolefromuser

### getuserpermissions

### getroles

### createrole

### getrole

### updaterole

### deleterole

### getrequests

### createrequest

### acceptrequest

### declinerequest

### getmyrequests

### getinvites

### createinvite

### revokeinvite

### getinvitebytoken

### acceptinvite

### getrobots

### createrobot

### getrobot

### deleterobot

### checkuserpermissions

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_sanity_io
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_sanity_io`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
