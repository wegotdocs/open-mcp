# @open-mcp/_metatx

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "_metatx": {
      "command": "npx",
      "args": ["-y", "@open-mcp/_metatx"],
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

### blockchains_route_blockchains_get

### list_registered_contracts_route_contracts_get

### register_contract_route_contracts_post

### get_registered_contract_route_contracts_contract_id_get

### update_contract_route_contracts_contract_id_put

### delete_contract_route_contracts_contract_id_delete

### list_metatx_requesters_route_requesters_get

### list_metatx_requester_holders_route_contracts_contract_id_holder

### add_metatx_requester_holder_route_contracts_contract_id_holders_

### delete_metatx_requester_holder_route_contracts_contract_id_holde

### call_request_types_route_requests_types_get

### call_request_types_route_contracts_types_get

### list_requests_route_requests_get

### create_requests_requests_post

### delete_requests_requests_delete

### check_requests_route_requests_check_get

### get_request_requests_request_id_get

### complete_call_request_route_requests_request_id_complete_post

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/_metatx
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/_metatx`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
