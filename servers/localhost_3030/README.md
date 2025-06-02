# @open-mcp/localhost_3030

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "localhost_3030": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/localhost_3030@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/localhost_3030@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add localhost_3030 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add localhost_3030 \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add localhost_3030 \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "localhost_3030": {
      "command": "npx",
      "args": ["-y", "@open-mcp/localhost_3030"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### healthcheck

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getmetrics

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### snshealthcheck

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### reprocessbycorrelation

**Environment variables**

- `API_KEY`

**Input schema**

- `correlations` (array)
- `reprocessing_description` (string)

### reprocessbyapplication

**Environment variables**

- `API_KEY`

**Input schema**

- `reprocessing_date` (string)
- `application_id` (string)
- `reprocessing_description` (string)

### reprocessbypayment

**Environment variables**

- `API_KEY`

**Input schema**

- `payments` (array)
- `reprocessing_description` (string)

### createadjustmentrecord

**Environment variables**

- `API_KEY`

**Input schema**

- `chargeback` (boolean)
- `company_id` (string)
- `workspace_id` (string)
- `application_id` (string)
- `correlation_id` (string)
- `nsu` (string)
- `authorization_code` (string)
- `tid` (string)
- `brand` (string)
- `acquirer` (string)
- `payment_method` (string)
- `installments` (integer)
- `current_installment` (integer)
- `paid_amount` (number)
- `total_invoice_amount` (number)
- `interest_rate` (number)
- `transaction_date` (string)
- `original_date` (string)
- `transaction_type` (string)
- `reference_id` (string)
- `receita_tarifa_servico_b2c` (number)
- `receita_taxa_parcelamento` (number)
- `receita_b2b` (number)
- `receita_aluguel_pos` (number)
- `mdr` (number)
- `anticipation_expenses` (number)
- `tax_expenses` (number)
- `transfer_date` (string)
- `liquid_final_amount` (number)
- `adjustment_origin` (string)
- `adjustment_detail` (string)
- `export_date` (string)
- `nseq_pedido` (string)
- `entity_document` (string)
- `tipo_client_b2c` (string)
- `invoice_count` (integer)
- `capture_date` (string)

### getholidays

**Environment variables**

- `API_KEY`

**Input schema**

- `country` (string)
- `year` (string)

### getforecast

**Environment variables**

- `API_KEY`

**Input schema**

- `payment_id` (string)

### compensatearrangements

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters
