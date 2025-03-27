# @open-mcp/climate_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "climate_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/climate_com"],
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

### uploadboundary

### fetchboundaries

### fetchboundarybyid

### postexport

### fetchexportcontentsbyid

### fetchexportstatusbyid

### fetchfarmorganizationbytypeandid

### fetchfields

### fetchallfields

### fetchfieldbyid

### get_v4_layers_asapplied

### get_v4_layers_asapplied_activityid_contents

### get_v4_layers_asharvested

### get_v4_layers_asharvested_activityid_contents

### get_v4_layers_asplanted

### get_v4_layers_asplanted_activityid_contents

### get_v4_layers_scoutingobservations

### get_v4_layers_scoutingobservations_scoutingobservationid_

### get_v4_layers_scoutingobservations_scoutingobservationid_attachm

### get_v4_layers_scoutingobservations_scoutingobservationid_attachm

### fetchoperations

### getresourceowner

### postupload

### fetchuploadstatuses

### chunkedupload

### fetchuploadstatusbyid

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/climate_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/climate_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
