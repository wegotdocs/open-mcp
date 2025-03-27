# @open-mcp/collegefootballdata_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "collegefootballdata_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/collegefootballdata_com"],
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

### getcalendar

### getcoaches

### getconferences

### getdraftpicks

### getnflpositions

### getnflteams

### getdrives

### getadvancedboxscore

### getgames

### getgamemedia

### getplayergamestats

### getteamgamestats

### getgameweather

### getlines

### getliveplays

### getwinprobabilitydata

### getpregamewinprobabilities

### getplaystattypes

### getplaystats

### getplaytypes

### gettransferportal

### getreturningproduction

### playersearch

### getplayerusage

### getplays

### getgameppa

### getplayergameppa

### getplayerseasonppa

### getpredictedpoints

### getteamppa

### getrankings

### geteloratings

### getspratings

### getconferencespratings

### getsrsratings

### getteamrecords

### getrecruitinggroups

### getrecruitingplayers

### getrecruitingteams

### getroster

### getscoreboard

### getstatcategories

### getadvancedteamgamestats

### getplayerseasonstats

### getteamseasonstats

### getadvancedteamseasonstats

### gettalent

### getteams

### getfbsteams

### getteammatchup

### getvenues

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/collegefootballdata_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/collegefootballdata_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
