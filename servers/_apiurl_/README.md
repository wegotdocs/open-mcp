# @open-mcp/_apiurl_

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "_apiurl_": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/_apiurl_@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/_apiurl_@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
JWT_CREDENTIALS='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add _apiurl_ \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --JWT_CREDENTIALS=$JWT_CREDENTIALS
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add _apiurl_ \
  .cursor/mcp.json \
  --JWT_CREDENTIALS=$JWT_CREDENTIALS
```

### Other

```bash
npx @open-mcp/config add _apiurl_ \
  /path/to/client/config.json \
  --JWT_CREDENTIALS=$JWT_CREDENTIALS
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "_apiurl_": {
      "command": "npx",
      "args": ["-y", "@open-mcp/_apiurl_"],
      "env": {"JWT_CREDENTIALS":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `JWT_CREDENTIALS` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_api_v1_cellular_profiling_basic

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (integer)

### get_api_v1_personal_name

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `page` (integer)
- `search` (string)
- `limit` (integer)

### get_api_v1_personal_nik

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)

### get_api_v1_personal_nokk

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (integer)

### get_api_v1_vrn

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)

### get_api_v1_vrn_v2

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)

### get_api_v1_vrn_name

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)
- `limit` (integer)

### get_api_v1_vrn_nik

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (integer)

### get_api_v1_simcard_name

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)

### get_api_v1_simcard

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (integer)

### get_api_v1_simcard_registration

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (integer)

### get_api_v1_company_name

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)

### get_api_v1_company_detail_37efacb14800d25380aed1864216d921

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

No input parameters

### get_api_v1_dukcapil_name

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)

### get_api_v1_dukcapil_nik

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (integer)

### get_api_v1_dukcapil_nokk

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (integer)

### get_api_v1_dukcapil_photo

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)

### get_api_v1_dukcapil_nik_v2

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)

### get_api_v1_dukcapil_nokk_v2

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)

### get_api_v1_passport_name

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)

### get_api_v1_passport_detail_x860827

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

No input parameters

### get_api_v1_boarding_name

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)
- `limit` (integer)

### get_api_v1_boarding_detail_x860827

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

No input parameters

### get_api_v1_flight_name

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)
- `limit` (integer)

### get_api_v1_flight_domestic

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `category` (string)
- `limit` (integer)
- `flight_date` (string)

### get_api_v1_flight_detail_eyjpdii6indycgftowp1rwhjmuleegswrxbvmwc

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

No input parameters

### get_api_v1_leaks_search

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)

### post_api_v1_leaks_search

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

No input parameters

### get_api_v1_business_nib

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (integer)

### get_api_v1_business_npwp

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (integer)

### get_api_v1_inet_subscription

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (integer)

### get_api_v1_inet_subdomain

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)

### get_api_v1_inet_whois

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)

### get_api_v1_inet_firewall

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)

### get_api_v1_inet_scanport

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (number)

### get_api_v1_inet_ip

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (number)

### get_api_v1_inet_isdown

**Environment variables**

- `JWT_CREDENTIALS`

**Input schema**

- `search` (string)
