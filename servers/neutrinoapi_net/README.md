# @open-mcp/neutrinoapi_net

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "neutrinoapi_net": {
      "command": "npx",
      "args": ["-y", "@open-mcp/neutrinoapi_net"],
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

### badwordfilter

### binlistdownload

### binlookup

### browserbot

### convert

### emailvalidate

### emailverify

### geocodeaddress

### geocodereverse

### hlrlookup

### hostreputation

### htmlclean

### htmlrender

### imageresize

### imagewatermark

### ipblocklist

### ipblocklistdownload

### ipinfo

### ipprobe

### phoneplayback

### phonevalidate

### phoneverify

### qrcode

### smsverify

### ualookup

### urlinfo

### verifysecuritycode

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/neutrinoapi_net
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/neutrinoapi_net`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
