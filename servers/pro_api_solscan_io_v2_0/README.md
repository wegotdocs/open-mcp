# @open-mcp/pro_api_solscan_io_v2_0

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "pro_api_solscan_io_v2_0": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/pro_api_solscan_io_v2_0@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/pro_api_solscan_io_v2_0@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add pro_api_solscan_io_v2_0 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --TOKEN=$TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add pro_api_solscan_io_v2_0 \
  .cursor/mcp.json \
  --TOKEN=$TOKEN
```

### Other

```bash
npx @open-mcp/config add pro_api_solscan_io_v2_0 \
  /path/to/client/config.json \
  --TOKEN=$TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "pro_api_solscan_io_v2_0": {
      "command": "npx",
      "args": ["-y", "@open-mcp/pro_api_solscan_io_v2_0"],
      "env": {"TOKEN":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `TOKEN` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_account_detail

**Environment variables**

- `TOKEN`

**Input schema**

- `address` (string)

### get_account_transactions

**Environment variables**

- `TOKEN`

**Input schema**

- `account` (string)
- `before` (string)
- `limit` (integer)

### get_account_token_accounts

**Environment variables**

- `TOKEN`

**Input schema**

- `account` (string)
- `limit` (integer)
- `offset` (integer)

### get_account_transfer

**Environment variables**

- `TOKEN`

**Input schema**

- `account` (string)
- `limit` (integer)
- `offset` (integer)

### get_account_defi_activities

**Environment variables**

- `TOKEN`

**Input schema**

- `account` (string)
- `limit` (integer)
- `offset` (integer)

### get_account_balance_change

**Environment variables**

- `TOKEN`

**Input schema**

- `account` (string)
- `limit` (integer)
- `offset` (integer)

### get_account_stake

**Environment variables**

- `TOKEN`

**Input schema**

- `account` (string)

### get_account_exporttransactions

**Environment variables**

- `TOKEN`

**Input schema**

- `account` (string)

### get_account_reward_export

**Environment variables**

- `TOKEN`

**Input schema**

- `account` (string)

### get_token_meta

**Environment variables**

- `TOKEN`

**Input schema**

- `token` (string)

### get_token_holders

**Environment variables**

- `TOKEN`

**Input schema**

- `token` (string)
- `limit` (integer)
- `offset` (integer)

### get_token_price

**Environment variables**

- `TOKEN`

**Input schema**

- `token` (string)

### get_token_trending

**Environment variables**

- `TOKEN`

**Input schema**

- `limit` (integer)

### get_token_list

**Environment variables**

- `TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### get_token_markets

**Environment variables**

- `TOKEN`

**Input schema**

- `token` (string)

### get_token_transfer

**Environment variables**

- `TOKEN`

**Input schema**

- `token` (string)
- `limit` (integer)
- `offset` (integer)

### get_token_defi_activities

**Environment variables**

- `TOKEN`

**Input schema**

- `token` (string)
- `limit` (integer)
- `offset` (integer)

### get_transaction_last

**Environment variables**

- `TOKEN`

**Input schema**

- `limit` (integer)

### get_transaction_actions

**Environment variables**

- `TOKEN`

**Input schema**

- `tx` (string)

### get_transaction_details

**Environment variables**

- `TOKEN`

**Input schema**

- `tx` (string)

### get_block_last

**Environment variables**

- `TOKEN`

**Input schema**

- `limit` (integer)

### get_block_transactions

**Environment variables**

- `TOKEN`

**Input schema**

- `block` (integer)
- `limit` (integer)
- `offset` (integer)

### get_block_detail

**Environment variables**

- `TOKEN`

**Input schema**

- `block` (integer)

### get_nft_news

**Environment variables**

- `TOKEN`

**Input schema**

- `limit` (integer)

### get_nft_activities

**Environment variables**

- `TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### get_nft_collection_lists

**Environment variables**

- `TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### get_nft_collection_items

**Environment variables**

- `TOKEN`

**Input schema**

- `collection` (string)
- `limit` (integer)
- `offset` (integer)

### get_monitor_usage

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters
