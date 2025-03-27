# @open-mcp/billingo_hu

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "billingo_hu": {
      "command": "npx",
      "args": ["-y", "@open-mcp/billingo_hu"],
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

### listbankaccount

### createbankaccount

### deletebankaccount

### getbankaccount

### updatebankaccount

### getconversionrate

### listdocumentblock

### listdocument

### createdocument

### getdocument

### canceldocument

### createdocumentfromproforma

### downloaddocument

### getonlineszamlastatus

### deletepayment

### getpayment

### updatepayment

### getpublicurl

### senddocument

### getorganizationdata

### listpartner

### createpartner

### deletepartner

### getpartner

### updatepartner

### listproduct

### createproduct

### deleteproduct

### getproduct

### updateproduct

### getid

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/billingo_hu
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/billingo_hu`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
