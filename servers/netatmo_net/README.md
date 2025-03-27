# @open-mcp/netatmo_net

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "netatmo_net": {
      "command": "npx",
      "args": ["-y", "@open-mcp/netatmo_net"],
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

### addwebhook

### createnewschedule

### devicelist

### dropwebhook

### getcamerapicture

### geteventsuntil

### gethomecoachsdata

### gethomedata

### getlasteventof

### getmeasure

### getnextevents

### getpublicdata

### getstationsdata

### getthermostatsdata

### getthermstate

### getuser

### partnerdevices

### setpersonsaway

### setpersonshome

### setthermpoint

### switchschedule

### syncschedule

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/netatmo_net
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/netatmo_net`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
