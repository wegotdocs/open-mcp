# @open-mcp/crm

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "crm": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/crm@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/crm@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add crm \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --TOKEN=$TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add crm \
  .cursor/mcp.json \
  --TOKEN=$TOKEN
```

### Other

```bash
npx @open-mcp/config add crm \
  /path/to/client/config.json \
  --TOKEN=$TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "crm": {
      "command": "npx",
      "args": ["-y", "@open-mcp/crm"],
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

### crm_v1_token_check

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### crm_v1_list_tasks

**Environment variables**

- `TOKEN`

**Input schema**

- `page` (string)
- `limit` (string)
- `deal_id` (string)
- `done` (string)
- `type` (string)
- `user_id` (string)
- `date_start` (string)
- `date_end` (string)
- `done_date_start` (string)
- `done_date_end` (string)

### crm_v1_create_task

**Environment variables**

- `TOKEN`

**Input schema**

- `task` (object)

### crm_v1_get_task

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### crm_v1_update_task

**Environment variables**

- `TOKEN`

**Input schema**

- `task` (object)

### parameters_tasks_task_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_list_activities

**Environment variables**

- `TOKEN`

**Input schema**

- `deal_id` (string)
- `page` (string)
- `limit` (string)
- `start_date` (string)
- `end_date` (string)

### crm_v1_create_activity

**Environment variables**

- `TOKEN`

**Input schema**

- `activity` (object)

### crm_v1_list_deals

**Environment variables**

- `TOKEN`

**Input schema**

- `page` (string)
- `limit` (string)
- `order` (string)
- `direction` (string)
- `name` (string)
- `win` (string)
- `user_id` (string)
- `closed_at` (string)
- `closed_at_period` (string)
- `created_at_period` (string)
- `prediction_date_period` (string)
- `start_date` (string)
- `end_date` (string)
- `campaign_id` (string)
- `deal_stage_id` (string)
- `deal_lost_reason_id` (string)
- `deal_pipeline_id` (string)
- `organization` (string)
- `hold` (string)
- `product_presence` (string)
- `next_page` (string)

### crm_v1_create_deal

**Environment variables**

- `TOKEN`

**Input schema**

- `campaign` (object)
- `contacts` (array)
- `deal` (object)
- `deal_products` (array)
- `deal_source` (object)
- `distribution_settings` (object)
- `organization` (object)

### crm_v1_get_deal

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### crm_v1_update_deal

**Environment variables**

- `TOKEN`

**Input schema**

- `campaign` (object)
- `deal` (object)
- `deal_source` (object)
- `deal_stage_id` (string)

### parameters_deals_deal_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_list_contacts_from_deal

**Environment variables**

- `TOKEN`

**Input schema**

- `page` (string)
- `limit` (string)

### parameters_deals_deal_id_contacts

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_list_products_from_deal

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### crm_v1_create_product_to_deal

**Environment variables**

- `TOKEN`

**Input schema**

- `amount` (number)
- `discount` (number)
- `discount_type` (string)
- `price` (number)
- `product_id` (string)
- `recurrence` (string)

### parameters_deals_deal_id_deal_products

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_create_products_to_deal

**Environment variables**

- `TOKEN`

**Input schema**

- `deal_products` (array)

### parameters_deals_deal_id_deal_products_batch

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_update_product_from_deal

**Environment variables**

- `TOKEN`

**Input schema**

- `amount` (number)
- `discount` (number)
- `discount_type` (string)
- `price` (number)
- `product_id` (string)
- `recurrence` (string)

### crm_v1_delete_product_from_deal

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### parameters_deals_deal_id_deal_products_deal_product_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_update_products_from_deal

**Environment variables**

- `TOKEN`

**Input schema**

- `deal_products` (array)

### parameters_deals_deal_id_deal_products_batch_update

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_delete_products_from_deal

**Environment variables**

- `TOKEN`

**Input schema**

- `deal_products` (array)

### parameters_deals_deal_id_deal_products_batch_destroy

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_list_users

**Environment variables**

- `TOKEN`

**Input schema**

- `active` (string)

### crm_v1_get_user

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### parameters_users_user_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_list_teams

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### crm_v1_get_team

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### parameters_teams_team_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_list_organizations

**Environment variables**

- `TOKEN`

**Input schema**

- `page` (string)
- `limit` (string)
- `order` (string)
- `direction` (string)
- `organization_segment` (string)
- `user_id` (string)
- `q` (string)

### crm_v1_create_organization

**Environment variables**

- `TOKEN`

**Input schema**

- `organization` (object)

### crm_v1_get_organization

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### crm_v1_update_organization

**Environment variables**

- `TOKEN`

**Input schema**

- `organization` (object)

### parameters_organizations_organization_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_list_contacts_from_organization

**Environment variables**

- `TOKEN`

**Input schema**

- `page` (string)
- `limit` (string)

### parameters_organizations_organization_id_contacts

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_list_contacts

**Environment variables**

- `TOKEN`

**Input schema**

- `page` (string)
- `limit` (string)
- `order` (string)
- `direction` (string)
- `email` (string)
- `q` (string)
- `phone` (string)
- `title` (string)

### crm_v1_create_contact

**Environment variables**

- `TOKEN`

**Input schema**

- `contact` (object)

### crm_v1_get_contact

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### crm_v1_update_contact

**Environment variables**

- `TOKEN`

**Input schema**

- `contact` (object)

### parameters_contacts_contact_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_list_products

**Environment variables**

- `TOKEN`

**Input schema**

- `page` (string)
- `limit` (string)

### crm_v1_create_product

**Environment variables**

- `TOKEN`

**Input schema**

- `product` (object)

### crm_v1_get_product

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### crm_v1_update_product

**Environment variables**

- `TOKEN`

**Input schema**

- `product` (object)

### parameters_products_product_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_list_custom_fields

**Environment variables**

- `TOKEN`

**Input schema**

- `for` (string)

### crm_v1_create_custom_field

**Environment variables**

- `TOKEN`

**Input schema**

- `custom_field` (object)

### crm_v1_get_custom_field

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### crm_v1_update_custom_field

**Environment variables**

- `TOKEN`

**Input schema**

- `custom_field` (object)

### crm_v1_delete_custom_field

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### parameters_custom_fields_custom_field_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_list_pipelines

**Environment variables**

- `TOKEN`

**Input schema**

- `limit` (string)
- `page` (string)

### crm_v1_create_pipeline

**Environment variables**

- `TOKEN`

**Input schema**

- `deal_pipeline` (object)

### crm_v1_get_pipeline

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### crm_v1_update_pipeline

**Environment variables**

- `TOKEN`

**Input schema**

- `deal_pipeline` (object)

### parameters_deal_pipelines_deal_pipeline_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_list_stages

**Environment variables**

- `TOKEN`

**Input schema**

- `deal_pipeline_id` (string)
- `limit` (string)
- `page` (string)

### crm_v1_create_stage

**Environment variables**

- `TOKEN`

**Input schema**

- `deal_pipeline_id` (string)
- `description` (string)
- `name` (string)
- `objective` (string)
- `order` (number)

### crm_v1_get_stage

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### crm_v1_update_stage

**Environment variables**

- `TOKEN`

**Input schema**

- `deal_pipeline_id` (string)
- `description` (string)
- `name` (string)
- `objective` (string)
- `order` (number)

### parameters_deal_stages_deal_stage_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_list_campaigns

**Environment variables**

- `TOKEN`

**Input schema**

- `limit` (string)
- `page` (string)
- `q` (string)

### crm_v1_create_campaign

**Environment variables**

- `TOKEN`

**Input schema**

- `campaign` (object)

### crm_v1_get_campaign

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### crm_v1_update_campaign

**Environment variables**

- `TOKEN`

**Input schema**

- `campaign` (object)

### parameters_campaigns_campaign_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_list_sources

**Environment variables**

- `TOKEN`

**Input schema**

- `limit` (string)
- `page` (string)
- `q` (string)

### crm_v1_create_source

**Environment variables**

- `TOKEN`

**Input schema**

- `deal_source` (object)

### crm_v1_get_source

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### crm_v1_update_source

**Environment variables**

- `TOKEN`

**Input schema**

- `deal_source` (object)

### parameters_deal_sources_deal_source_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_list_lost_reasons

**Environment variables**

- `TOKEN`

**Input schema**

- `limit` (string)
- `page` (string)
- `q` (string)
- `order` (string)

### crm_v1_create_lost_reason

**Environment variables**

- `TOKEN`

**Input schema**

- `name` (string)

### crm_v1_get_lost_reason

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### crm_v1_update_lost_reason

**Environment variables**

- `TOKEN`

**Input schema**

- `name` (string)

### parameters_deal_lost_reasons_deal_lost_reason_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crm_v1_list_webhooks

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### crm_v1_create_webhook

**Environment variables**

- `TOKEN`

**Input schema**

- `event_type` (string)
- `http_method` (string)
- `url` (string)

### crm_v1_get_webhook

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### crm_v1_update_webhook

**Environment variables**

- `TOKEN`

**Input schema**

- `event_type` (string)
- `http_method` (string)
- `url` (string)

### crm_v1_delete_webhook

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### parameters_webhooks_uuid_

**Environment variables**

No environment variables required

**Input schema**

No input parameters
