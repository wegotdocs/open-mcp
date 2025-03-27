# @open-mcp/braze_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "braze_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/braze_com"],
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

### campaignanalytics

### campaigndetails

### campaignlist

### canvasdataseriesanalytics

### canvasdataanalyticssummary

### canvasdetails

### canvaslist

### scheduleapitriggeredcanvases

### seecontentblockinformation

### listavailablecontentblocks

### queryhardbouncedemails

### querylistofunsubscribedemailaddresses

### customeventsanalytics

### customeventslist

### newsfeedcardanalytics

### newsfeedcardsdetails

### newsfeedcardslist

### dailyactiveusersbydate

### monthlyactiveusersforlast30days

### dailynewusersbydate

### kpisfordailyappuninstallsbydate

### getupcomingscheduledcampaignsandcanvases

### segmentanalytics

### segmentdetails

### segmentlist

### sendanalytics

### appsessionsbytime

### listuser_ssubscriptiongroupstatussms

### listuser_ssubscriptiongroupsms

### seeemailtemplateinformation

### listavailableemailtemplates

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/braze_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/braze_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
