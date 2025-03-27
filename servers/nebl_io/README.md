# @open-mcp/nebl_io

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "nebl_io": {
      "command": "npx",
      "args": ["-y", "@open-mcp/nebl_io"],
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

### json_rpc

### getaddress

### getaddressbalance

### getaddresstotalreceived

### getaddresstotalsent

### getaddressunconfirmedbalance

### getaddressutxos

### getblockindex

### getblock

### getrawtx

### getstatus

### getsync

### sendtx

### gettx

### gettxs

### getaddressinfo

### broadcasttx

### burntoken

### issuetoken

### sendtoken

### gettokenholders

### gettokenid

### gettokenmetadata

### gettokenmetadataofutxo

### gettransactioninfo

### testnet_getfaucet

### testnet_getaddress

### testnet_getaddressbalance

### testnet_getaddresstotalreceived

### testnet_getaddresstotalsent

### testnet_getaddressunconfirmedbalance

### testnet_getaddressutxos

### testnet_getblockindex

### testnet_getblock

### testnet_getrawtx

### testnet_getstatus

### testnet_getsync

### testnet_sendtx

### testnet_gettx

### testnet_gettxs

### testnet_getaddressinfo

### testnet_broadcasttx

### testnet_burntoken

### testnet_issuetoken

### testnet_sendtoken

### testnet_gettokenholders

### testnet_gettokenid

### testnet_gettokenmetadata

### testnet_gettokenmetadataofutxo

### testnet_gettransactioninfo

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/nebl_io
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/nebl_io`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
