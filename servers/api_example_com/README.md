# @open-mcp/api_example_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_example_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
AUTHORIZATION='...'
SESSIONID='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --AUTHORIZATION=$AUTHORIZATION \
  --SESSIONID=$SESSIONID
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json \
  --AUTHORIZATION=$AUTHORIZATION \
  --SESSIONID=$SESSIONID
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json \
  --AUTHORIZATION=$AUTHORIZATION \
  --SESSIONID=$SESSIONID
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
      "env": {"AUTHORIZATION":"...","SESSIONID":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `AUTHORIZATION` - gets sent to the API provider
- `SESSIONID` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### circuits_circuit_group_assignments_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `circuit` (array)
- `circuit_id` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `group` (array)
- `group__n` (array)
- `group_id` (array)
- `group_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `member_id` (array)
- `member_id__empty` (boolean)
- `member_id__gt` (array)
- `member_id__gte` (array)
- `member_id__lt` (array)
- `member_id__lte` (array)
- `member_id__n` (array)
- `member_type` (string)
- `member_type__n` (string)
- `modified_by_request` (string)
- `offset` (integer)
- `ordering` (string)
- `priority` (string)
- `provider` (array)
- `provider_id` (array)
- `q` (string)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)
- `virtual_circuit` (array)
- `virtual_circuit_id` (array)

### circuits_circuit_group_assignments_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `group` (other)
- `member_type` (string)
- `member_id` (integer)
- `priority` (string)
- `tags` (array)

### circuits_circuit_group_assignments_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_circuit_group_assignments_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_circuit_group_assignments_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_circuit_group_assignments_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_circuit_group_assignments_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `group` (other)
- `member_type` (string)
- `member_id` (integer)
- `priority` (string)
- `tags` (array)

### circuits_circuit_group_assignments_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `group` (other)
- `member_type` (string)
- `member_id` (integer)
- `priority` (string)
- `tags` (array)

### circuits_circuit_group_assignments_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_circuit_groups_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `updated_by_request` (string)

### circuits_circuit_groups_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `description` (string)
- `tenant` (other)
- `tags` (array)
- `custom_fields` (object)

### circuits_circuit_groups_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_circuit_groups_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_circuit_groups_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_circuit_groups_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_circuit_groups_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)
- `tenant` (other)
- `tags` (array)
- `custom_fields` (object)

### circuits_circuit_groups_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)
- `tenant` (other)
- `tags` (array)
- `custom_fields` (object)

### circuits_circuit_groups_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_circuit_terminations_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `cable_end` (string)
- `cable_id` (array)
- `cable_id__n` (array)
- `cabled` (boolean)
- `circuit_id` (array)
- `circuit_id__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `mark_connected` (boolean)
- `modified_by_request` (string)
- `occupied` (boolean)
- `offset` (integer)
- `ordering` (string)
- `port_speed` (array)
- `port_speed__empty` (boolean)
- `port_speed__gt` (array)
- `port_speed__gte` (array)
- `port_speed__lt` (array)
- `port_speed__lte` (array)
- `port_speed__n` (array)
- `pp_info` (array)
- `pp_info__empty` (boolean)
- `pp_info__ic` (array)
- `pp_info__ie` (array)
- `pp_info__iew` (array)
- `pp_info__isw` (array)
- `pp_info__n` (array)
- `pp_info__nic` (array)
- `pp_info__nie` (array)
- `pp_info__niew` (array)
- `pp_info__nisw` (array)
- `provider` (array)
- `provider__n` (array)
- `provider_id` (array)
- `provider_id__n` (array)
- `provider_network_id` (array)
- `provider_network_id__n` (array)
- `q` (string)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `term_side` (string)
- `termination_id` (array)
- `termination_id__empty` (boolean)
- `termination_id__gt` (array)
- `termination_id__gte` (array)
- `termination_id__lt` (array)
- `termination_id__lte` (array)
- `termination_id__n` (array)
- `termination_type` (string)
- `termination_type__n` (string)
- `updated_by_request` (string)
- `upstream_speed` (array)
- `upstream_speed__empty` (boolean)
- `upstream_speed__gt` (array)
- `upstream_speed__gte` (array)
- `upstream_speed__lt` (array)
- `upstream_speed__lte` (array)
- `upstream_speed__n` (array)
- `xconnect_id` (array)
- `xconnect_id__empty` (boolean)
- `xconnect_id__ic` (array)
- `xconnect_id__ie` (array)
- `xconnect_id__iew` (array)
- `xconnect_id__isw` (array)
- `xconnect_id__n` (array)
- `xconnect_id__nic` (array)
- `xconnect_id__nie` (array)
- `xconnect_id__niew` (array)
- `xconnect_id__nisw` (array)

### circuits_circuit_terminations_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `circuit` (other)
- `term_side` (string)
- `termination_type` (string)
- `termination_id` (integer)
- `port_speed` (integer)
- `upstream_speed` (integer)
- `xconnect_id` (string)
- `pp_info` (string)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### circuits_circuit_terminations_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_circuit_terminations_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_circuit_terminations_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_circuit_terminations_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_circuit_terminations_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `circuit` (other)
- `term_side` (string)
- `termination_type` (string)
- `termination_id` (integer)
- `port_speed` (integer)
- `upstream_speed` (integer)
- `xconnect_id` (string)
- `pp_info` (string)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### circuits_circuit_terminations_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `circuit` (other)
- `term_side` (string)
- `termination_type` (string)
- `termination_id` (integer)
- `port_speed` (integer)
- `upstream_speed` (integer)
- `xconnect_id` (string)
- `pp_info` (string)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### circuits_circuit_terminations_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_circuit_terminations_paths_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_circuit_types_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `color` (array)
- `color__empty` (boolean)
- `color__ic` (array)
- `color__ie` (array)
- `color__iew` (array)
- `color__isw` (array)
- `color__n` (array)
- `color__nic` (array)
- `color__nie` (array)
- `color__niew` (array)
- `color__nisw` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### circuits_circuit_types_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `color` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_circuit_types_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_circuit_types_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_circuit_types_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_circuit_types_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_circuit_types_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `color` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_circuit_types_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `color` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_circuit_types_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_circuits_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `cid` (array)
- `cid__empty` (boolean)
- `cid__ic` (array)
- `cid__ie` (array)
- `cid__iew` (array)
- `cid__isw` (array)
- `cid__n` (array)
- `cid__nic` (array)
- `cid__nie` (array)
- `cid__niew` (array)
- `cid__nisw` (array)
- `commit_rate` (array)
- `commit_rate__empty` (boolean)
- `commit_rate__gt` (array)
- `commit_rate__gte` (array)
- `commit_rate__lt` (array)
- `commit_rate__lte` (array)
- `commit_rate__n` (array)
- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `distance` (array)
- `distance__empty` (boolean)
- `distance__gt` (array)
- `distance__gte` (array)
- `distance__lt` (array)
- `distance__lte` (array)
- `distance__n` (array)
- `distance_unit` (string)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `install_date` (array)
- `install_date__empty` (boolean)
- `install_date__gt` (array)
- `install_date__gte` (array)
- `install_date__lt` (array)
- `install_date__lte` (array)
- `install_date__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location_id` (array)
- `location_id__n` (array)
- `modified_by_request` (string)
- `offset` (integer)
- `ordering` (string)
- `provider` (array)
- `provider__n` (array)
- `provider_account` (array)
- `provider_account__n` (array)
- `provider_account_id` (array)
- `provider_account_id__n` (array)
- `provider_id` (array)
- `provider_id__n` (array)
- `provider_network_id` (array)
- `provider_network_id__n` (array)
- `q` (string)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `termination_a_id` (array)
- `termination_a_id__n` (array)
- `termination_date` (array)
- `termination_date__empty` (boolean)
- `termination_date__gt` (array)
- `termination_date__gte` (array)
- `termination_date__lt` (array)
- `termination_date__lte` (array)
- `termination_date__n` (array)
- `termination_z_id` (array)
- `termination_z_id__n` (array)
- `type` (array)
- `type__n` (array)
- `type_id` (array)
- `type_id__n` (array)
- `updated_by_request` (string)

### circuits_circuits_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `cid` (string)
- `provider` (other)
- `provider_account` (other)
- `type` (other)
- `status` (string)
- `tenant` (other)
- `install_date` (string)
- `termination_date` (string)
- `commit_rate` (integer)
- `description` (string)
- `distance` (number)
- `distance_unit` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)
- `assignments` (array)

### circuits_circuits_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_circuits_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_circuits_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_circuits_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_circuits_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `cid` (string)
- `provider` (other)
- `provider_account` (other)
- `type` (other)
- `status` (string)
- `tenant` (other)
- `install_date` (string)
- `termination_date` (string)
- `commit_rate` (integer)
- `description` (string)
- `distance` (number)
- `distance_unit` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)
- `assignments` (array)

### circuits_circuits_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `cid` (string)
- `provider` (other)
- `provider_account` (other)
- `type` (other)
- `status` (string)
- `tenant` (other)
- `install_date` (string)
- `termination_date` (string)
- `commit_rate` (integer)
- `description` (string)
- `distance` (number)
- `distance_unit` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)
- `assignments` (array)

### circuits_circuits_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_provider_accounts_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `account` (array)
- `account__empty` (boolean)
- `account__ic` (array)
- `account__ie` (array)
- `account__iew` (array)
- `account__isw` (array)
- `account__n` (array)
- `account__nic` (array)
- `account__nie` (array)
- `account__niew` (array)
- `account__nisw` (array)
- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `provider` (array)
- `provider__n` (array)
- `provider_id` (array)
- `provider_id__n` (array)
- `q` (string)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### circuits_provider_accounts_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `provider` (other)
- `name` (string)
- `account` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_provider_accounts_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_provider_accounts_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_provider_accounts_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_provider_accounts_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_provider_accounts_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `provider` (other)
- `name` (string)
- `account` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_provider_accounts_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `provider` (other)
- `name` (string)
- `account` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_provider_accounts_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_provider_networks_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `provider` (array)
- `provider__n` (array)
- `provider_id` (array)
- `provider_id__n` (array)
- `q` (string)
- `service_id` (array)
- `service_id__empty` (boolean)
- `service_id__ic` (array)
- `service_id__ie` (array)
- `service_id__iew` (array)
- `service_id__isw` (array)
- `service_id__n` (array)
- `service_id__nic` (array)
- `service_id__nie` (array)
- `service_id__niew` (array)
- `service_id__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### circuits_provider_networks_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `provider` (other)
- `name` (string)
- `service_id` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_provider_networks_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_provider_networks_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_provider_networks_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_provider_networks_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_provider_networks_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `provider` (other)
- `name` (string)
- `service_id` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_provider_networks_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `provider` (other)
- `name` (string)
- `service_id` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_provider_networks_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_providers_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `asn` (array)
- `asn__n` (array)
- `asn_id` (array)
- `asn_id__n` (array)
- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### circuits_providers_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `accounts` (array)
- `description` (string)
- `comments` (string)
- `asns` (array)
- `tags` (array)
- `custom_fields` (object)

### circuits_providers_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_providers_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_providers_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_providers_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_providers_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `accounts` (array)
- `description` (string)
- `comments` (string)
- `asns` (array)
- `tags` (array)
- `custom_fields` (object)

### circuits_providers_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `accounts` (array)
- `description` (string)
- `comments` (string)
- `asns` (array)
- `tags` (array)
- `custom_fields` (object)

### circuits_providers_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_virtual_circuit_terminations_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `interface_id` (array)
- `interface_id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `offset` (integer)
- `ordering` (string)
- `provider` (array)
- `provider__n` (array)
- `provider_account` (array)
- `provider_account__n` (array)
- `provider_account_id` (array)
- `provider_account_id__n` (array)
- `provider_id` (array)
- `provider_id__n` (array)
- `provider_network_id` (array)
- `provider_network_id__n` (array)
- `q` (string)
- `role` (array)
- `role__empty` (boolean)
- `role__ic` (array)
- `role__ie` (array)
- `role__iew` (array)
- `role__isw` (array)
- `role__n` (array)
- `role__nic` (array)
- `role__nie` (array)
- `role__niew` (array)
- `role__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)
- `virtual_circuit_id` (array)
- `virtual_circuit_id__n` (array)

### circuits_virtual_circuit_terminations_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `virtual_circuit` (other)
- `role` (string)
- `interface` (other)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_virtual_circuit_terminations_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_virtual_circuit_terminations_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_virtual_circuit_terminations_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_virtual_circuit_terminations_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_virtual_circuit_terminations_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `virtual_circuit` (other)
- `role` (string)
- `interface` (other)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_virtual_circuit_terminations_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `virtual_circuit` (other)
- `role` (string)
- `interface` (other)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_virtual_circuit_terminations_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_virtual_circuit_terminations_paths_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_virtual_circuit_types_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `color` (array)
- `color__empty` (boolean)
- `color__ic` (array)
- `color__ie` (array)
- `color__iew` (array)
- `color__isw` (array)
- `color__n` (array)
- `color__nic` (array)
- `color__nie` (array)
- `color__niew` (array)
- `color__nisw` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### circuits_virtual_circuit_types_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `color` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_virtual_circuit_types_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_virtual_circuit_types_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_virtual_circuit_types_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_virtual_circuit_types_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_virtual_circuit_types_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `color` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_virtual_circuit_types_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `color` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_virtual_circuit_types_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_virtual_circuits_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `cid` (array)
- `cid__empty` (boolean)
- `cid__ic` (array)
- `cid__ie` (array)
- `cid__iew` (array)
- `cid__isw` (array)
- `cid__n` (array)
- `cid__nic` (array)
- `cid__nie` (array)
- `cid__niew` (array)
- `cid__nisw` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `offset` (integer)
- `ordering` (string)
- `provider` (array)
- `provider__n` (array)
- `provider_account` (array)
- `provider_account__n` (array)
- `provider_account_id` (array)
- `provider_account_id__n` (array)
- `provider_id` (array)
- `provider_id__n` (array)
- `provider_network_id` (array)
- `provider_network_id__n` (array)
- `q` (string)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `type` (array)
- `type__n` (array)
- `type_id` (array)
- `type_id__n` (array)
- `updated_by_request` (string)

### circuits_virtual_circuits_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `cid` (string)
- `provider_network` (other)
- `provider_account` (other)
- `type` (other)
- `status` (string)
- `tenant` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_virtual_circuits_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_virtual_circuits_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_virtual_circuits_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### circuits_virtual_circuits_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### circuits_virtual_circuits_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `cid` (string)
- `provider_network` (other)
- `provider_account` (other)
- `type` (other)
- `status` (string)
- `tenant` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_virtual_circuits_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `cid` (string)
- `provider_network` (other)
- `provider_account` (other)
- `type` (other)
- `status` (string)
- `tenant` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### circuits_virtual_circuits_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### core_background_queues_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### core_background_queues_retrieve_2

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)

### core_background_tasks_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### core_background_tasks_retrieve_2

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (string)

### core_background_tasks_delete_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (string)

### core_background_tasks_enqueue_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (string)

### core_background_tasks_requeue_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (string)

### core_background_tasks_stop_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (string)

### core_background_workers_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### core_background_workers_retrieve_2

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)

### core_data_files_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `hash` (array)
- `hash__empty` (boolean)
- `hash__ic` (array)
- `hash__ie` (array)
- `hash__iew` (array)
- `hash__isw` (array)
- `hash__n` (array)
- `hash__nic` (array)
- `hash__nie` (array)
- `hash__niew` (array)
- `hash__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `offset` (integer)
- `ordering` (string)
- `path` (array)
- `path__empty` (boolean)
- `path__ic` (array)
- `path__ie` (array)
- `path__iew` (array)
- `path__isw` (array)
- `path__n` (array)
- `path__nic` (array)
- `path__nie` (array)
- `path__niew` (array)
- `path__nisw` (array)
- `q` (string)
- `size` (array)
- `size__empty` (boolean)
- `size__gt` (array)
- `size__gte` (array)
- `size__lt` (array)
- `size__lte` (array)
- `size__n` (array)
- `source` (array)
- `source__n` (array)
- `source_id` (array)
- `source_id__n` (array)
- `updated_by_request` (string)

### core_data_files_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### core_data_sources_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `enabled` (boolean)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_synced` (array)
- `last_synced__empty` (boolean)
- `last_synced__gt` (array)
- `last_synced__gte` (array)
- `last_synced__lt` (array)
- `last_synced__lte` (array)
- `last_synced__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `source_url` (array)
- `source_url__empty` (boolean)
- `source_url__ic` (array)
- `source_url__ie` (array)
- `source_url__iew` (array)
- `source_url__isw` (array)
- `source_url__n` (array)
- `source_url__nic` (array)
- `source_url__nie` (array)
- `source_url__niew` (array)
- `source_url__nisw` (array)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `sync_interval` (array)
- `sync_interval__ic` (array)
- `sync_interval__ie` (array)
- `sync_interval__iew` (array)
- `sync_interval__isw` (array)
- `sync_interval__n` (array)
- `sync_interval__nic` (array)
- `sync_interval__nie` (array)
- `sync_interval__niew` (array)
- `sync_interval__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `type` (array)
- `type__empty` (boolean)
- `type__ic` (array)
- `type__ie` (array)
- `type__iew` (array)
- `type__isw` (array)
- `type__n` (array)
- `type__nic` (array)
- `type__nie` (array)
- `type__niew` (array)
- `type__nisw` (array)
- `updated_by_request` (string)

### core_data_sources_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `type` (string)
- `source_url` (string)
- `enabled` (boolean)
- `description` (string)
- `sync_interval` (integer)
- `parameters` (other)
- `ignore_rules` (string)
- `comments` (string)
- `custom_fields` (object)

### core_data_sources_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### core_data_sources_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### core_data_sources_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### core_data_sources_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### core_data_sources_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `type` (string)
- `source_url` (string)
- `enabled` (boolean)
- `description` (string)
- `sync_interval` (integer)
- `parameters` (other)
- `ignore_rules` (string)
- `comments` (string)
- `custom_fields` (object)

### core_data_sources_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `type` (string)
- `source_url` (string)
- `enabled` (boolean)
- `description` (string)
- `sync_interval` (integer)
- `parameters` (other)
- `ignore_rules` (string)
- `comments` (string)
- `custom_fields` (object)

### core_data_sources_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### core_data_sources_sync_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `type` (string)
- `source_url` (string)
- `enabled` (boolean)
- `description` (string)
- `sync_interval` (integer)
- `parameters` (other)
- `ignore_rules` (string)
- `comments` (string)
- `custom_fields` (object)

### core_jobs_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `completed` (string)
- `completed__after` (string)
- `completed__before` (string)
- `created` (string)
- `created__after` (string)
- `created__before` (string)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `interval` (array)
- `interval__empty` (boolean)
- `interval__gt` (array)
- `interval__gte` (array)
- `interval__lt` (array)
- `interval__lte` (array)
- `interval__n` (array)
- `job_id` (string)
- `limit` (integer)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `object_id` (array)
- `object_id__empty` (boolean)
- `object_id__gt` (array)
- `object_id__gte` (array)
- `object_id__lt` (array)
- `object_id__lte` (array)
- `object_id__n` (array)
- `object_type` (integer)
- `object_type__n` (integer)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `scheduled` (string)
- `scheduled__after` (string)
- `scheduled__before` (string)
- `started` (string)
- `started__after` (string)
- `started__before` (string)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `user` (integer)
- `user__n` (integer)

### core_jobs_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### core_object_changes_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `action` (string)
- `changed_object_id` (array)
- `changed_object_id__empty` (boolean)
- `changed_object_id__gt` (array)
- `changed_object_id__gte` (array)
- `changed_object_id__lt` (array)
- `changed_object_id__lte` (array)
- `changed_object_id__n` (array)
- `changed_object_type` (string)
- `changed_object_type__n` (string)
- `changed_object_type_id` (array)
- `changed_object_type_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `limit` (integer)
- `object_repr` (array)
- `object_repr__empty` (boolean)
- `object_repr__ic` (array)
- `object_repr__ie` (array)
- `object_repr__iew` (array)
- `object_repr__isw` (array)
- `object_repr__n` (array)
- `object_repr__nic` (array)
- `object_repr__nie` (array)
- `object_repr__niew` (array)
- `object_repr__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `related_object_id` (array)
- `related_object_id__empty` (boolean)
- `related_object_id__gt` (array)
- `related_object_id__gte` (array)
- `related_object_id__lt` (array)
- `related_object_id__lte` (array)
- `related_object_id__n` (array)
- `related_object_type` (integer)
- `related_object_type__n` (integer)
- `request_id` (string)
- `time_after` (string)
- `time_before` (string)
- `user` (array)
- `user__n` (array)
- `user_id` (array)
- `user_id__n` (array)
- `user_name` (array)
- `user_name__empty` (boolean)
- `user_name__ic` (array)
- `user_name__ie` (array)
- `user_name__iew` (array)
- `user_name__isw` (array)
- `user_name__n` (array)
- `user_name__nic` (array)
- `user_name__nie` (array)
- `user_name__niew` (array)
- `user_name__nisw` (array)

### core_object_changes_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_cable_terminations_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `cable` (integer)
- `cable__n` (integer)
- `cable_end` (string)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `offset` (integer)
- `ordering` (string)
- `termination_id` (array)
- `termination_id__empty` (boolean)
- `termination_id__gt` (array)
- `termination_id__gte` (array)
- `termination_id__lt` (array)
- `termination_id__lte` (array)
- `termination_id__n` (array)
- `termination_type` (string)
- `termination_type__n` (string)
- `updated_by_request` (string)

### dcim_cable_terminations_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `cable` (integer)
- `cable_end` (string)
- `termination_type` (string)
- `termination_id` (integer)

### dcim_cable_terminations_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_cable_terminations_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_cable_terminations_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_cable_terminations_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_cable_terminations_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `cable` (integer)
- `cable_end` (string)
- `termination_type` (string)
- `termination_id` (integer)

### dcim_cable_terminations_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `cable` (integer)
- `cable_end` (string)
- `termination_type` (string)
- `termination_id` (integer)

### dcim_cable_terminations_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_cables_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `circuittermination_id` (array)
- `color` (array)
- `color__empty` (boolean)
- `color__ic` (array)
- `color__ie` (array)
- `color__iew` (array)
- `color__isw` (array)
- `color__n` (array)
- `color__nic` (array)
- `color__nie` (array)
- `color__niew` (array)
- `color__nisw` (array)
- `consoleport_id` (array)
- `consoleserverport_id` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device` (array)
- `device_id` (array)
- `frontport_id` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `interface_id` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `length` (array)
- `length__empty` (boolean)
- `length__gt` (array)
- `length__gte` (array)
- `length__lt` (array)
- `length__lte` (array)
- `length__n` (array)
- `length_unit` (string)
- `limit` (integer)
- `location` (array)
- `location_id` (array)
- `modified_by_request` (string)
- `offset` (integer)
- `ordering` (string)
- `powerfeed_id` (array)
- `poweroutlet_id` (array)
- `powerport_id` (array)
- `q` (string)
- `rack` (array)
- `rack_id` (array)
- `rearport_id` (array)
- `site` (array)
- `site_id` (array)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `termination_a_id` (array)
- `termination_a_type` (string)
- `termination_a_type__n` (string)
- `termination_b_id` (array)
- `termination_b_type` (string)
- `termination_b_type__n` (string)
- `type` (array)
- `type__empty` (boolean)
- `type__ic` (array)
- `type__ie` (array)
- `type__iew` (array)
- `type__isw` (array)
- `type__n` (array)
- `type__nic` (array)
- `type__nie` (array)
- `type__niew` (array)
- `type__nisw` (array)
- `unterminated` (boolean)
- `updated_by_request` (string)

### dcim_cables_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `type` (string)
- `a_terminations` (array)
- `b_terminations` (array)
- `status` (string)
- `tenant` (other)
- `label` (string)
- `color` (string)
- `length` (number)
- `length_unit` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_cables_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_cables_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_cables_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_cables_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_cables_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `type` (string)
- `a_terminations` (array)
- `b_terminations` (array)
- `status` (string)
- `tenant` (other)
- `label` (string)
- `color` (string)
- `length` (number)
- `length_unit` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_cables_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `type` (string)
- `a_terminations` (array)
- `b_terminations` (array)
- `status` (string)
- `tenant` (other)
- `label` (string)
- `color` (string)
- `length` (number)
- `length_unit` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_cables_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_connected_device_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `peer_device` (string)
- `peer_interface` (string)

### dcim_console_port_templates_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `module_type_id` (array)
- `module_type_id__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `type` (string)
- `updated_by_request` (string)

### dcim_console_port_templates_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `description` (string)

### dcim_console_port_templates_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_console_port_templates_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_console_port_templates_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_console_port_templates_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_console_port_templates_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `description` (string)

### dcim_console_port_templates_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `description` (string)

### dcim_console_port_templates_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_console_ports_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `cable_end` (string)
- `cable_id` (array)
- `cable_id__n` (array)
- `cabled` (boolean)
- `connected` (boolean)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device` (array)
- `device__n` (array)
- `device_id` (array)
- `device_id__n` (array)
- `device_role` (array)
- `device_role__n` (array)
- `device_role_id` (array)
- `device_role_id__n` (array)
- `device_status` (array)
- `device_status__empty` (boolean)
- `device_status__ic` (array)
- `device_status__ie` (array)
- `device_status__iew` (array)
- `device_status__isw` (array)
- `device_status__n` (array)
- `device_status__nic` (array)
- `device_status__nie` (array)
- `device_status__niew` (array)
- `device_status__nisw` (array)
- `device_type` (array)
- `device_type__n` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `mark_connected` (boolean)
- `modified_by_request` (string)
- `module_id` (array)
- `module_id__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `occupied` (boolean)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `rack` (array)
- `rack__n` (array)
- `rack_id` (array)
- `rack_id__n` (array)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `speed` (integer)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `type` (array)
- `type__empty` (boolean)
- `type__ic` (array)
- `type__ie` (array)
- `type__iew` (array)
- `type__isw` (array)
- `type__n` (array)
- `type__nic` (array)
- `type__nie` (array)
- `type__niew` (array)
- `type__nisw` (array)
- `updated_by_request` (string)
- `virtual_chassis` (array)
- `virtual_chassis__n` (array)
- `virtual_chassis_id` (array)
- `virtual_chassis_id__n` (array)

### dcim_console_ports_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `speed` (integer)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_console_ports_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_console_ports_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_console_ports_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_console_ports_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_console_ports_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `speed` (integer)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_console_ports_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `speed` (integer)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_console_ports_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_console_ports_trace_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_console_server_port_templates_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `module_type_id` (array)
- `module_type_id__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `type` (string)
- `updated_by_request` (string)

### dcim_console_server_port_templates_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `description` (string)

### dcim_console_server_port_templates_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_console_server_port_templates_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_console_server_port_templates_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_console_server_port_templates_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_console_server_port_templates_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `description` (string)

### dcim_console_server_port_templates_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `description` (string)

### dcim_console_server_port_templates_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_console_server_ports_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `cable_end` (string)
- `cable_id` (array)
- `cable_id__n` (array)
- `cabled` (boolean)
- `connected` (boolean)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device` (array)
- `device__n` (array)
- `device_id` (array)
- `device_id__n` (array)
- `device_role` (array)
- `device_role__n` (array)
- `device_role_id` (array)
- `device_role_id__n` (array)
- `device_status` (array)
- `device_status__empty` (boolean)
- `device_status__ic` (array)
- `device_status__ie` (array)
- `device_status__iew` (array)
- `device_status__isw` (array)
- `device_status__n` (array)
- `device_status__nic` (array)
- `device_status__nie` (array)
- `device_status__niew` (array)
- `device_status__nisw` (array)
- `device_type` (array)
- `device_type__n` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `mark_connected` (boolean)
- `modified_by_request` (string)
- `module_id` (array)
- `module_id__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `occupied` (boolean)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `rack` (array)
- `rack__n` (array)
- `rack_id` (array)
- `rack_id__n` (array)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `speed` (integer)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `type` (array)
- `type__empty` (boolean)
- `type__ic` (array)
- `type__ie` (array)
- `type__iew` (array)
- `type__isw` (array)
- `type__n` (array)
- `type__nic` (array)
- `type__nie` (array)
- `type__niew` (array)
- `type__nisw` (array)
- `updated_by_request` (string)
- `virtual_chassis` (array)
- `virtual_chassis__n` (array)
- `virtual_chassis_id` (array)
- `virtual_chassis_id__n` (array)

### dcim_console_server_ports_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `speed` (integer)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_console_server_ports_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_console_server_ports_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_console_server_ports_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_console_server_ports_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_console_server_ports_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `speed` (integer)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_console_server_ports_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `speed` (integer)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_console_server_ports_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_console_server_ports_trace_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_device_bay_templates_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `updated_by_request` (string)

### dcim_device_bay_templates_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device_type` (other)
- `name` (string)
- `label` (string)
- `description` (string)

### dcim_device_bay_templates_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_device_bay_templates_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_device_bay_templates_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_device_bay_templates_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_device_bay_templates_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `name` (string)
- `label` (string)
- `description` (string)

### dcim_device_bay_templates_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `name` (string)
- `label` (string)
- `description` (string)

### dcim_device_bay_templates_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_device_bays_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device` (array)
- `device__n` (array)
- `device_id` (array)
- `device_id__n` (array)
- `device_role` (array)
- `device_role__n` (array)
- `device_role_id` (array)
- `device_role_id__n` (array)
- `device_status` (array)
- `device_status__empty` (boolean)
- `device_status__ic` (array)
- `device_status__ie` (array)
- `device_status__iew` (array)
- `device_status__isw` (array)
- `device_status__n` (array)
- `device_status__nic` (array)
- `device_status__nie` (array)
- `device_status__niew` (array)
- `device_status__nisw` (array)
- `device_type` (array)
- `device_type__n` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `installed_device` (array)
- `installed_device__n` (array)
- `installed_device_id` (array)
- `installed_device_id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `rack` (array)
- `rack__n` (array)
- `rack_id` (array)
- `rack_id__n` (array)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)
- `virtual_chassis` (array)
- `virtual_chassis__n` (array)
- `virtual_chassis_id` (array)
- `virtual_chassis_id__n` (array)

### dcim_device_bays_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device` (other)
- `name` (string)
- `label` (string)
- `description` (string)
- `installed_device` (other)
- `tags` (array)
- `custom_fields` (object)

### dcim_device_bays_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_device_bays_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_device_bays_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_device_bays_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_device_bays_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `name` (string)
- `label` (string)
- `description` (string)
- `installed_device` (other)
- `tags` (array)
- `custom_fields` (object)

### dcim_device_bays_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `name` (string)
- `label` (string)
- `description` (string)
- `installed_device` (other)
- `tags` (array)
- `custom_fields` (object)

### dcim_device_bays_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_device_roles_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `ancestor` (array)
- `ancestor__n` (array)
- `ancestor_id` (array)
- `ancestor_id__n` (array)
- `color` (array)
- `color__empty` (boolean)
- `color__ic` (array)
- `color__ie` (array)
- `color__iew` (array)
- `color__isw` (array)
- `color__n` (array)
- `color__nic` (array)
- `color__nie` (array)
- `color__niew` (array)
- `color__nisw` (array)
- `config_template_id` (array)
- `config_template_id__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `parent` (array)
- `parent__n` (array)
- `parent_id` (array)
- `parent_id__n` (array)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)
- `vm_role` (boolean)

### dcim_device_roles_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `color` (string)
- `vm_role` (boolean)
- `config_template` (other)
- `parent` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### dcim_device_roles_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_device_roles_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_device_roles_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_device_roles_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_device_roles_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `color` (string)
- `vm_role` (boolean)
- `config_template` (other)
- `parent` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### dcim_device_roles_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `color` (string)
- `vm_role` (boolean)
- `config_template` (other)
- `parent` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### dcim_device_roles_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_device_types_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `airflow` (string)
- `console_port_template_count` (array)
- `console_port_template_count__empty` (boolean)
- `console_port_template_count__gt` (array)
- `console_port_template_count__gte` (array)
- `console_port_template_count__lt` (array)
- `console_port_template_count__lte` (array)
- `console_port_template_count__n` (array)
- `console_ports` (boolean)
- `console_server_port_template_count` (array)
- `console_server_port_template_count__empty` (boolean)
- `console_server_port_template_count__gt` (array)
- `console_server_port_template_count__gte` (array)
- `console_server_port_template_count__lt` (array)
- `console_server_port_template_count__lte` (array)
- `console_server_port_template_count__n` (array)
- `console_server_ports` (boolean)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `default_platform` (array)
- `default_platform__n` (array)
- `default_platform_id` (array)
- `default_platform_id__n` (array)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device_bay_template_count` (array)
- `device_bay_template_count__empty` (boolean)
- `device_bay_template_count__gt` (array)
- `device_bay_template_count__gte` (array)
- `device_bay_template_count__lt` (array)
- `device_bay_template_count__lte` (array)
- `device_bay_template_count__n` (array)
- `device_bays` (boolean)
- `exclude_from_utilization` (boolean)
- `front_port_template_count` (array)
- `front_port_template_count__empty` (boolean)
- `front_port_template_count__gt` (array)
- `front_port_template_count__gte` (array)
- `front_port_template_count__lt` (array)
- `front_port_template_count__lte` (array)
- `front_port_template_count__n` (array)
- `has_front_image` (boolean)
- `has_rear_image` (boolean)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `interface_template_count` (array)
- `interface_template_count__empty` (boolean)
- `interface_template_count__gt` (array)
- `interface_template_count__gte` (array)
- `interface_template_count__lt` (array)
- `interface_template_count__lte` (array)
- `interface_template_count__n` (array)
- `interfaces` (boolean)
- `inventory_item_template_count` (array)
- `inventory_item_template_count__empty` (boolean)
- `inventory_item_template_count__gt` (array)
- `inventory_item_template_count__gte` (array)
- `inventory_item_template_count__lt` (array)
- `inventory_item_template_count__lte` (array)
- `inventory_item_template_count__n` (array)
- `inventory_items` (boolean)
- `is_full_depth` (boolean)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `manufacturer` (array)
- `manufacturer__n` (array)
- `manufacturer_id` (array)
- `manufacturer_id__n` (array)
- `model` (array)
- `model__empty` (boolean)
- `model__ic` (array)
- `model__ie` (array)
- `model__iew` (array)
- `model__isw` (array)
- `model__n` (array)
- `model__nic` (array)
- `model__nie` (array)
- `model__niew` (array)
- `model__nisw` (array)
- `modified_by_request` (string)
- `module_bay_template_count` (array)
- `module_bay_template_count__empty` (boolean)
- `module_bay_template_count__gt` (array)
- `module_bay_template_count__gte` (array)
- `module_bay_template_count__lt` (array)
- `module_bay_template_count__lte` (array)
- `module_bay_template_count__n` (array)
- `module_bays` (boolean)
- `offset` (integer)
- `ordering` (string)
- `part_number` (array)
- `part_number__empty` (boolean)
- `part_number__ic` (array)
- `part_number__ie` (array)
- `part_number__iew` (array)
- `part_number__isw` (array)
- `part_number__n` (array)
- `part_number__nic` (array)
- `part_number__nie` (array)
- `part_number__niew` (array)
- `part_number__nisw` (array)
- `pass_through_ports` (boolean)
- `power_outlet_template_count` (array)
- `power_outlet_template_count__empty` (boolean)
- `power_outlet_template_count__gt` (array)
- `power_outlet_template_count__gte` (array)
- `power_outlet_template_count__lt` (array)
- `power_outlet_template_count__lte` (array)
- `power_outlet_template_count__n` (array)
- `power_outlets` (boolean)
- `power_port_template_count` (array)
- `power_port_template_count__empty` (boolean)
- `power_port_template_count__gt` (array)
- `power_port_template_count__gte` (array)
- `power_port_template_count__lt` (array)
- `power_port_template_count__lte` (array)
- `power_port_template_count__n` (array)
- `power_ports` (boolean)
- `q` (string)
- `rear_port_template_count` (array)
- `rear_port_template_count__empty` (boolean)
- `rear_port_template_count__gt` (array)
- `rear_port_template_count__gte` (array)
- `rear_port_template_count__lt` (array)
- `rear_port_template_count__lte` (array)
- `rear_port_template_count__n` (array)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `subdevice_role` (string)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `u_height` (array)
- `u_height__empty` (boolean)
- `u_height__gt` (array)
- `u_height__gte` (array)
- `u_height__lt` (array)
- `u_height__lte` (array)
- `u_height__n` (array)
- `updated_by_request` (string)
- `weight` (array)
- `weight__empty` (boolean)
- `weight__gt` (array)
- `weight__gte` (array)
- `weight__lt` (array)
- `weight__lte` (array)
- `weight__n` (array)
- `weight_unit` (string)

### dcim_device_types_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `manufacturer` (other)
- `default_platform` (other)
- `model` (string)
- `slug` (string)
- `part_number` (string)
- `u_height` (number)
- `exclude_from_utilization` (boolean)
- `is_full_depth` (boolean)
- `subdevice_role` (string)
- `airflow` (string)
- `weight` (number)
- `weight_unit` (string)
- `front_image` (string)
- `rear_image` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_device_types_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_device_types_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_device_types_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_device_types_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_device_types_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `manufacturer` (other)
- `default_platform` (other)
- `model` (string)
- `slug` (string)
- `part_number` (string)
- `u_height` (number)
- `exclude_from_utilization` (boolean)
- `is_full_depth` (boolean)
- `subdevice_role` (string)
- `airflow` (string)
- `weight` (number)
- `weight_unit` (string)
- `front_image` (string)
- `rear_image` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_device_types_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `manufacturer` (other)
- `default_platform` (other)
- `model` (string)
- `slug` (string)
- `part_number` (string)
- `u_height` (number)
- `exclude_from_utilization` (boolean)
- `is_full_depth` (boolean)
- `subdevice_role` (string)
- `airflow` (string)
- `weight` (number)
- `weight_unit` (string)
- `front_image` (string)
- `rear_image` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_device_types_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_devices_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `airflow` (string)
- `asset_tag` (array)
- `asset_tag__empty` (boolean)
- `asset_tag__ic` (array)
- `asset_tag__ie` (array)
- `asset_tag__iew` (array)
- `asset_tag__isw` (array)
- `asset_tag__n` (array)
- `asset_tag__nic` (array)
- `asset_tag__nie` (array)
- `asset_tag__niew` (array)
- `asset_tag__nisw` (array)
- `cluster_group` (array)
- `cluster_group__n` (array)
- `cluster_group_id` (array)
- `cluster_group_id__n` (array)
- `cluster_id` (array)
- `cluster_id__n` (array)
- `config_template_id` (array)
- `config_template_id__n` (array)
- `console_port_count` (array)
- `console_port_count__empty` (boolean)
- `console_port_count__gt` (array)
- `console_port_count__gte` (array)
- `console_port_count__lt` (array)
- `console_port_count__lte` (array)
- `console_port_count__n` (array)
- `console_ports` (boolean)
- `console_server_port_count` (array)
- `console_server_port_count__empty` (boolean)
- `console_server_port_count__gt` (array)
- `console_server_port_count__gte` (array)
- `console_server_port_count__lt` (array)
- `console_server_port_count__lte` (array)
- `console_server_port_count__n` (array)
- `console_server_ports` (boolean)
- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device_bay_count` (array)
- `device_bay_count__empty` (boolean)
- `device_bay_count__gt` (array)
- `device_bay_count__gte` (array)
- `device_bay_count__lt` (array)
- `device_bay_count__lte` (array)
- `device_bay_count__n` (array)
- `device_bays` (boolean)
- `device_type` (array)
- `device_type__n` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `face` (string)
- `front_port_count` (array)
- `front_port_count__empty` (boolean)
- `front_port_count__gt` (array)
- `front_port_count__gte` (array)
- `front_port_count__lt` (array)
- `front_port_count__lte` (array)
- `front_port_count__n` (array)
- `has_oob_ip` (boolean)
- `has_primary_ip` (boolean)
- `has_virtual_device_context` (boolean)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `interface_count` (array)
- `interface_count__empty` (boolean)
- `interface_count__gt` (array)
- `interface_count__gte` (array)
- `interface_count__lt` (array)
- `interface_count__lte` (array)
- `interface_count__n` (array)
- `interfaces` (boolean)
- `inventory_item_count` (array)
- `inventory_item_count__empty` (boolean)
- `inventory_item_count__gt` (array)
- `inventory_item_count__gte` (array)
- `inventory_item_count__lt` (array)
- `inventory_item_count__lte` (array)
- `inventory_item_count__n` (array)
- `is_full_depth` (boolean)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `latitude` (array)
- `latitude__empty` (boolean)
- `latitude__gt` (array)
- `latitude__gte` (array)
- `latitude__lt` (array)
- `latitude__lte` (array)
- `latitude__n` (array)
- `limit` (integer)
- `local_context_data` (boolean)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `longitude` (array)
- `longitude__empty` (boolean)
- `longitude__gt` (array)
- `longitude__gte` (array)
- `longitude__lt` (array)
- `longitude__lte` (array)
- `longitude__n` (array)
- `mac_address` (array)
- `mac_address__ic` (array)
- `mac_address__ie` (array)
- `mac_address__iew` (array)
- `mac_address__isw` (array)
- `mac_address__n` (array)
- `mac_address__nic` (array)
- `mac_address__nie` (array)
- `mac_address__niew` (array)
- `mac_address__nisw` (array)
- `manufacturer` (array)
- `manufacturer__n` (array)
- `manufacturer_id` (array)
- `manufacturer_id__n` (array)
- `model` (array)
- `model__n` (array)
- `modified_by_request` (string)
- `module_bay_count` (array)
- `module_bay_count__empty` (boolean)
- `module_bay_count__gt` (array)
- `module_bay_count__gte` (array)
- `module_bay_count__lt` (array)
- `module_bay_count__lte` (array)
- `module_bay_count__n` (array)
- `module_bays` (boolean)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `oob_ip_id` (array)
- `oob_ip_id__n` (array)
- `ordering` (string)
- `parent_bay_id` (array)
- `parent_bay_id__n` (array)
- `parent_device_id` (array)
- `parent_device_id__n` (array)
- `pass_through_ports` (boolean)
- `platform` (array)
- `platform__n` (array)
- `platform_id` (array)
- `platform_id__n` (array)
- `position` (array)
- `position__empty` (boolean)
- `position__gt` (array)
- `position__gte` (array)
- `position__lt` (array)
- `position__lte` (array)
- `position__n` (array)
- `power_outlet_count` (array)
- `power_outlet_count__empty` (boolean)
- `power_outlet_count__gt` (array)
- `power_outlet_count__gte` (array)
- `power_outlet_count__lt` (array)
- `power_outlet_count__lte` (array)
- `power_outlet_count__n` (array)
- `power_outlets` (boolean)
- `power_port_count` (array)
- `power_port_count__empty` (boolean)
- `power_port_count__gt` (array)
- `power_port_count__gte` (array)
- `power_port_count__lt` (array)
- `power_port_count__lte` (array)
- `power_port_count__n` (array)
- `power_ports` (boolean)
- `primary_ip4` (array)
- `primary_ip4__n` (array)
- `primary_ip4_id` (array)
- `primary_ip4_id__n` (array)
- `primary_ip6` (array)
- `primary_ip6__n` (array)
- `primary_ip6_id` (array)
- `primary_ip6_id__n` (array)
- `q` (string)
- `rack_id` (array)
- `rack_id__n` (array)
- `rear_port_count` (array)
- `rear_port_count__empty` (boolean)
- `rear_port_count__gt` (array)
- `rear_port_count__gte` (array)
- `rear_port_count__lt` (array)
- `rear_port_count__lte` (array)
- `rear_port_count__n` (array)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `role` (array)
- `role__n` (array)
- `role_id` (array)
- `role_id__n` (array)
- `serial` (array)
- `serial__empty` (boolean)
- `serial__ic` (array)
- `serial__ie` (array)
- `serial__iew` (array)
- `serial__isw` (array)
- `serial__n` (array)
- `serial__nic` (array)
- `serial__nie` (array)
- `serial__niew` (array)
- `serial__nisw` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `updated_by_request` (string)
- `vc_position` (array)
- `vc_position__empty` (boolean)
- `vc_position__gt` (array)
- `vc_position__gte` (array)
- `vc_position__lt` (array)
- `vc_position__lte` (array)
- `vc_position__n` (array)
- `vc_priority` (array)
- `vc_priority__empty` (boolean)
- `vc_priority__gt` (array)
- `vc_priority__gte` (array)
- `vc_priority__lt` (array)
- `vc_priority__lte` (array)
- `vc_priority__n` (array)
- `virtual_chassis_id` (array)
- `virtual_chassis_id__n` (array)
- `virtual_chassis_member` (boolean)

### dcim_devices_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `device_type` (other)
- `role` (other)
- `tenant` (other)
- `platform` (other)
- `serial` (string)
- `asset_tag` (string)
- `site` (other)
- `location` (other)
- `rack` (other)
- `position` (number)
- `face` (string)
- `latitude` (number)
- `longitude` (number)
- `status` (string)
- `airflow` (string)
- `primary_ip4` (other)
- `primary_ip6` (other)
- `oob_ip` (other)
- `cluster` (other)
- `virtual_chassis` (other)
- `vc_position` (integer)
- `vc_priority` (integer)
- `description` (string)
- `comments` (string)
- `config_template` (other)
- `local_context_data` (other)
- `tags` (array)
- `custom_fields` (object)

### dcim_devices_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_devices_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_devices_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_devices_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_devices_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `device_type` (other)
- `role` (other)
- `tenant` (other)
- `platform` (other)
- `serial` (string)
- `asset_tag` (string)
- `site` (other)
- `location` (other)
- `rack` (other)
- `position` (number)
- `face` (string)
- `latitude` (number)
- `longitude` (number)
- `status` (string)
- `airflow` (string)
- `primary_ip4` (other)
- `primary_ip6` (other)
- `oob_ip` (other)
- `cluster` (other)
- `virtual_chassis` (other)
- `vc_position` (integer)
- `vc_priority` (integer)
- `description` (string)
- `comments` (string)
- `config_template` (other)
- `local_context_data` (other)
- `tags` (array)
- `custom_fields` (object)

### dcim_devices_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `device_type` (other)
- `role` (other)
- `tenant` (other)
- `platform` (other)
- `serial` (string)
- `asset_tag` (string)
- `site` (other)
- `location` (other)
- `rack` (other)
- `position` (number)
- `face` (string)
- `latitude` (number)
- `longitude` (number)
- `status` (string)
- `airflow` (string)
- `primary_ip4` (other)
- `primary_ip6` (other)
- `oob_ip` (other)
- `cluster` (other)
- `virtual_chassis` (other)
- `vc_position` (integer)
- `vc_priority` (integer)
- `description` (string)
- `comments` (string)
- `config_template` (other)
- `local_context_data` (other)
- `tags` (array)
- `custom_fields` (object)

### dcim_devices_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_devices_render_config_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `format` (string)
- `name` (string)
- `device_type` (other)
- `role` (other)
- `tenant` (other)
- `platform` (other)
- `serial` (string)
- `asset_tag` (string)
- `site` (other)
- `location` (other)
- `rack` (other)
- `position` (number)
- `face` (string)
- `latitude` (number)
- `longitude` (number)
- `status` (string)
- `airflow` (string)
- `primary_ip4` (other)
- `primary_ip6` (other)
- `oob_ip` (other)
- `cluster` (other)
- `virtual_chassis` (other)
- `vc_position` (integer)
- `vc_priority` (integer)
- `description` (string)
- `comments` (string)
- `config_template` (other)
- `local_context_data` (other)
- `tags` (array)
- `custom_fields` (object)

### dcim_front_port_templates_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `color` (array)
- `color__empty` (boolean)
- `color__ic` (array)
- `color__ie` (array)
- `color__iew` (array)
- `color__isw` (array)
- `color__n` (array)
- `color__nic` (array)
- `color__nie` (array)
- `color__niew` (array)
- `color__nisw` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `module_type_id` (array)
- `module_type_id__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `rear_port_id` (array)
- `rear_port_id__n` (array)
- `rear_port_position` (array)
- `rear_port_position__empty` (boolean)
- `rear_port_position__gt` (array)
- `rear_port_position__gte` (array)
- `rear_port_position__lt` (array)
- `rear_port_position__lte` (array)
- `rear_port_position__n` (array)
- `type` (array)
- `type__empty` (boolean)
- `type__ic` (array)
- `type__ie` (array)
- `type__iew` (array)
- `type__isw` (array)
- `type__n` (array)
- `type__nic` (array)
- `type__nie` (array)
- `type__niew` (array)
- `type__nisw` (array)
- `updated_by_request` (string)

### dcim_front_port_templates_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `color` (string)
- `rear_port` (other)
- `rear_port_position` (integer)
- `description` (string)

### dcim_front_port_templates_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_front_port_templates_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_front_port_templates_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_front_port_templates_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_front_port_templates_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `color` (string)
- `rear_port` (other)
- `rear_port_position` (integer)
- `description` (string)

### dcim_front_port_templates_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `color` (string)
- `rear_port` (other)
- `rear_port_position` (integer)
- `description` (string)

### dcim_front_port_templates_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_front_ports_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `cable_end` (string)
- `cable_id` (array)
- `cable_id__n` (array)
- `cabled` (boolean)
- `color` (array)
- `color__empty` (boolean)
- `color__ic` (array)
- `color__ie` (array)
- `color__iew` (array)
- `color__isw` (array)
- `color__n` (array)
- `color__nic` (array)
- `color__nie` (array)
- `color__niew` (array)
- `color__nisw` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device` (array)
- `device__n` (array)
- `device_id` (array)
- `device_id__n` (array)
- `device_role` (array)
- `device_role__n` (array)
- `device_role_id` (array)
- `device_role_id__n` (array)
- `device_status` (array)
- `device_status__empty` (boolean)
- `device_status__ic` (array)
- `device_status__ie` (array)
- `device_status__iew` (array)
- `device_status__isw` (array)
- `device_status__n` (array)
- `device_status__nic` (array)
- `device_status__nie` (array)
- `device_status__niew` (array)
- `device_status__nisw` (array)
- `device_type` (array)
- `device_type__n` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `mark_connected` (boolean)
- `modified_by_request` (string)
- `module_id` (array)
- `module_id__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `occupied` (boolean)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `rack` (array)
- `rack__n` (array)
- `rack_id` (array)
- `rack_id__n` (array)
- `rear_port_id` (array)
- `rear_port_id__n` (array)
- `rear_port_position` (array)
- `rear_port_position__empty` (boolean)
- `rear_port_position__gt` (array)
- `rear_port_position__gte` (array)
- `rear_port_position__lt` (array)
- `rear_port_position__lte` (array)
- `rear_port_position__n` (array)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `type` (array)
- `type__empty` (boolean)
- `type__ic` (array)
- `type__ie` (array)
- `type__iew` (array)
- `type__isw` (array)
- `type__n` (array)
- `type__nic` (array)
- `type__nie` (array)
- `type__niew` (array)
- `type__nisw` (array)
- `updated_by_request` (string)
- `virtual_chassis` (array)
- `virtual_chassis__n` (array)
- `virtual_chassis_id` (array)
- `virtual_chassis_id__n` (array)

### dcim_front_ports_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `color` (string)
- `rear_port` (integer)
- `rear_port_position` (integer)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_front_ports_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_front_ports_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_front_ports_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_front_ports_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_front_ports_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `color` (string)
- `rear_port` (integer)
- `rear_port_position` (integer)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_front_ports_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `color` (string)
- `rear_port` (integer)
- `rear_port_position` (integer)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_front_ports_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_front_ports_paths_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_interface_templates_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `bridge_id` (array)
- `bridge_id__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `enabled` (boolean)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `mgmt_only` (boolean)
- `modified_by_request` (string)
- `module_type_id` (array)
- `module_type_id__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `poe_mode` (array)
- `poe_mode__empty` (boolean)
- `poe_mode__ic` (array)
- `poe_mode__ie` (array)
- `poe_mode__iew` (array)
- `poe_mode__isw` (array)
- `poe_mode__n` (array)
- `poe_mode__nic` (array)
- `poe_mode__nie` (array)
- `poe_mode__niew` (array)
- `poe_mode__nisw` (array)
- `poe_type` (array)
- `poe_type__empty` (boolean)
- `poe_type__ic` (array)
- `poe_type__ie` (array)
- `poe_type__iew` (array)
- `poe_type__isw` (array)
- `poe_type__n` (array)
- `poe_type__nic` (array)
- `poe_type__nie` (array)
- `poe_type__niew` (array)
- `poe_type__nisw` (array)
- `q` (string)
- `rf_role` (array)
- `rf_role__empty` (boolean)
- `rf_role__ic` (array)
- `rf_role__ie` (array)
- `rf_role__iew` (array)
- `rf_role__isw` (array)
- `rf_role__n` (array)
- `rf_role__nic` (array)
- `rf_role__nie` (array)
- `rf_role__niew` (array)
- `rf_role__nisw` (array)
- `type` (array)
- `type__empty` (boolean)
- `type__ic` (array)
- `type__ie` (array)
- `type__iew` (array)
- `type__isw` (array)
- `type__n` (array)
- `type__nic` (array)
- `type__nie` (array)
- `type__niew` (array)
- `type__nisw` (array)
- `updated_by_request` (string)

### dcim_interface_templates_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `enabled` (boolean)
- `mgmt_only` (boolean)
- `description` (string)
- `bridge` (integer)
- `poe_mode` (string)
- `poe_type` (string)
- `rf_role` (string)

### dcim_interface_templates_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_interface_templates_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_interface_templates_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_interface_templates_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_interface_templates_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `enabled` (boolean)
- `mgmt_only` (boolean)
- `description` (string)
- `bridge` (integer)
- `poe_mode` (string)
- `poe_type` (string)
- `rf_role` (string)

### dcim_interface_templates_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `enabled` (boolean)
- `mgmt_only` (boolean)
- `description` (string)
- `bridge` (integer)
- `poe_mode` (string)
- `poe_type` (string)
- `rf_role` (string)

### dcim_interface_templates_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_interfaces_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `bridge_id` (array)
- `bridge_id__n` (array)
- `cable_end` (string)
- `cable_id` (array)
- `cable_id__n` (array)
- `cabled` (boolean)
- `connected` (boolean)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device` (array)
- `device__n` (array)
- `device_id` (array)
- `device_id__n` (array)
- `device_role` (array)
- `device_role__n` (array)
- `device_role_id` (array)
- `device_role_id__n` (array)
- `device_status` (array)
- `device_status__empty` (boolean)
- `device_status__ic` (array)
- `device_status__ie` (array)
- `device_status__iew` (array)
- `device_status__isw` (array)
- `device_status__n` (array)
- `device_status__nic` (array)
- `device_status__nie` (array)
- `device_status__niew` (array)
- `device_status__nisw` (array)
- `device_type` (array)
- `device_type__n` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `duplex` (array)
- `duplex__empty` (boolean)
- `duplex__ic` (array)
- `duplex__ie` (array)
- `duplex__iew` (array)
- `duplex__isw` (array)
- `duplex__n` (array)
- `duplex__nic` (array)
- `duplex__nie` (array)
- `duplex__niew` (array)
- `duplex__nisw` (array)
- `enabled` (boolean)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `kind` (string)
- `l2vpn` (array)
- `l2vpn__n` (array)
- `l2vpn_id` (array)
- `l2vpn_id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `lag_id` (array)
- `lag_id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `mac_address` (array)
- `mac_address__ic` (array)
- `mac_address__ie` (array)
- `mac_address__iew` (array)
- `mac_address__isw` (array)
- `mac_address__n` (array)
- `mac_address__nic` (array)
- `mac_address__nie` (array)
- `mac_address__niew` (array)
- `mac_address__nisw` (array)
- `mark_connected` (boolean)
- `mgmt_only` (boolean)
- `mode` (array)
- `mode__empty` (boolean)
- `mode__ic` (array)
- `mode__ie` (array)
- `mode__iew` (array)
- `mode__isw` (array)
- `mode__n` (array)
- `mode__nic` (array)
- `mode__nie` (array)
- `mode__niew` (array)
- `mode__nisw` (array)
- `modified_by_request` (string)
- `module_id` (array)
- `module_id__n` (array)
- `mtu` (array)
- `mtu__empty` (boolean)
- `mtu__gt` (array)
- `mtu__gte` (array)
- `mtu__lt` (array)
- `mtu__lte` (array)
- `mtu__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `occupied` (boolean)
- `offset` (integer)
- `ordering` (string)
- `parent_id` (array)
- `parent_id__n` (array)
- `poe_mode` (array)
- `poe_mode__empty` (boolean)
- `poe_mode__ic` (array)
- `poe_mode__ie` (array)
- `poe_mode__iew` (array)
- `poe_mode__isw` (array)
- `poe_mode__n` (array)
- `poe_mode__nic` (array)
- `poe_mode__nie` (array)
- `poe_mode__niew` (array)
- `poe_mode__nisw` (array)
- `poe_type` (array)
- `poe_type__empty` (boolean)
- `poe_type__ic` (array)
- `poe_type__ie` (array)
- `poe_type__iew` (array)
- `poe_type__isw` (array)
- `poe_type__n` (array)
- `poe_type__nic` (array)
- `poe_type__nie` (array)
- `poe_type__niew` (array)
- `poe_type__nisw` (array)
- `primary_mac_address` (array)
- `primary_mac_address__n` (array)
- `primary_mac_address_id` (array)
- `primary_mac_address_id__n` (array)
- `q` (string)
- `rack` (array)
- `rack__n` (array)
- `rack_id` (array)
- `rack_id__n` (array)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `rf_channel` (array)
- `rf_channel__empty` (boolean)
- `rf_channel__ic` (array)
- `rf_channel__ie` (array)
- `rf_channel__iew` (array)
- `rf_channel__isw` (array)
- `rf_channel__n` (array)
- `rf_channel__nic` (array)
- `rf_channel__nie` (array)
- `rf_channel__niew` (array)
- `rf_channel__nisw` (array)
- `rf_channel_frequency` (array)
- `rf_channel_frequency__empty` (boolean)
- `rf_channel_frequency__gt` (array)
- `rf_channel_frequency__gte` (array)
- `rf_channel_frequency__lt` (array)
- `rf_channel_frequency__lte` (array)
- `rf_channel_frequency__n` (array)
- `rf_channel_width` (array)
- `rf_channel_width__empty` (boolean)
- `rf_channel_width__gt` (array)
- `rf_channel_width__gte` (array)
- `rf_channel_width__lt` (array)
- `rf_channel_width__lte` (array)
- `rf_channel_width__n` (array)
- `rf_role` (array)
- `rf_role__empty` (boolean)
- `rf_role__ic` (array)
- `rf_role__ie` (array)
- `rf_role__iew` (array)
- `rf_role__isw` (array)
- `rf_role__n` (array)
- `rf_role__nic` (array)
- `rf_role__nie` (array)
- `rf_role__niew` (array)
- `rf_role__nisw` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `speed` (array)
- `speed__empty` (array)
- `speed__gt` (array)
- `speed__gte` (array)
- `speed__lt` (array)
- `speed__lte` (array)
- `speed__n` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tx_power` (array)
- `tx_power__empty` (boolean)
- `tx_power__gt` (array)
- `tx_power__gte` (array)
- `tx_power__lt` (array)
- `tx_power__lte` (array)
- `tx_power__n` (array)
- `type` (array)
- `type__empty` (boolean)
- `type__ic` (array)
- `type__ie` (array)
- `type__iew` (array)
- `type__isw` (array)
- `type__n` (array)
- `type__nic` (array)
- `type__nie` (array)
- `type__niew` (array)
- `type__nisw` (array)
- `updated_by_request` (string)
- `vdc` (array)
- `vdc__n` (array)
- `vdc_id` (array)
- `vdc_id__n` (array)
- `vdc_identifier` (array)
- `vdc_identifier__n` (array)
- `virtual_chassis` (array)
- `virtual_chassis__n` (array)
- `virtual_chassis_id` (array)
- `virtual_chassis_id__n` (array)
- `virtual_chassis_member` (array)
- `virtual_chassis_member_id` (array)
- `virtual_circuit_id` (array)
- `virtual_circuit_id__n` (array)
- `virtual_circuit_termination_id` (array)
- `virtual_circuit_termination_id__n` (array)
- `vlan` (string)
- `vlan_id` (string)
- `vlan_translation_policy` (array)
- `vlan_translation_policy__n` (array)
- `vlan_translation_policy_id` (array)
- `vlan_translation_policy_id__n` (array)
- `vrf` (array)
- `vrf__n` (array)
- `vrf_id` (array)
- `vrf_id__n` (array)
- `wireless_lan_id` (array)
- `wireless_lan_id__n` (array)
- `wireless_link_id` (array)
- `wireless_link_id__n` (array)
- `wwn` (array)
- `wwn__ic` (array)
- `wwn__ie` (array)
- `wwn__iew` (array)
- `wwn__isw` (array)
- `wwn__n` (array)
- `wwn__nic` (array)
- `wwn__nie` (array)
- `wwn__niew` (array)
- `wwn__nisw` (array)

### dcim_interfaces_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device` (other)
- `vdcs` (array)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `enabled` (boolean)
- `parent` (integer)
- `bridge` (integer)
- `lag` (integer)
- `mtu` (integer)
- `primary_mac_address` (other)
- `speed` (integer)
- `duplex` (string)
- `wwn` (string)
- `mgmt_only` (boolean)
- `description` (string)
- `mode` (string)
- `rf_role` (string)
- `rf_channel` (string)
- `poe_mode` (string)
- `poe_type` (string)
- `rf_channel_frequency` (number)
- `rf_channel_width` (number)
- `tx_power` (integer)
- `untagged_vlan` (other)
- `tagged_vlans` (array)
- `qinq_svlan` (other)
- `vlan_translation_policy` (other)
- `mark_connected` (boolean)
- `wireless_lans` (array)
- `vrf` (other)
- `tags` (array)
- `custom_fields` (object)

### dcim_interfaces_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_interfaces_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_interfaces_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_interfaces_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_interfaces_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `vdcs` (array)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `enabled` (boolean)
- `parent` (integer)
- `bridge` (integer)
- `lag` (integer)
- `mtu` (integer)
- `primary_mac_address` (other)
- `speed` (integer)
- `duplex` (string)
- `wwn` (string)
- `mgmt_only` (boolean)
- `description` (string)
- `mode` (string)
- `rf_role` (string)
- `rf_channel` (string)
- `poe_mode` (string)
- `poe_type` (string)
- `rf_channel_frequency` (number)
- `rf_channel_width` (number)
- `tx_power` (integer)
- `untagged_vlan` (other)
- `tagged_vlans` (array)
- `qinq_svlan` (other)
- `vlan_translation_policy` (other)
- `mark_connected` (boolean)
- `wireless_lans` (array)
- `vrf` (other)
- `tags` (array)
- `custom_fields` (object)

### dcim_interfaces_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `vdcs` (array)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `enabled` (boolean)
- `parent` (integer)
- `bridge` (integer)
- `lag` (integer)
- `mtu` (integer)
- `primary_mac_address` (other)
- `speed` (integer)
- `duplex` (string)
- `wwn` (string)
- `mgmt_only` (boolean)
- `description` (string)
- `mode` (string)
- `rf_role` (string)
- `rf_channel` (string)
- `poe_mode` (string)
- `poe_type` (string)
- `rf_channel_frequency` (number)
- `rf_channel_width` (number)
- `tx_power` (integer)
- `untagged_vlan` (other)
- `tagged_vlans` (array)
- `qinq_svlan` (other)
- `vlan_translation_policy` (other)
- `mark_connected` (boolean)
- `wireless_lans` (array)
- `vrf` (other)
- `tags` (array)
- `custom_fields` (object)

### dcim_interfaces_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_interfaces_trace_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_inventory_item_roles_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `color` (array)
- `color__empty` (boolean)
- `color__ic` (array)
- `color__ie` (array)
- `color__iew` (array)
- `color__isw` (array)
- `color__n` (array)
- `color__nic` (array)
- `color__nie` (array)
- `color__niew` (array)
- `color__nisw` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### dcim_inventory_item_roles_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `color` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_inventory_item_roles_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_inventory_item_roles_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_inventory_item_roles_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_inventory_item_roles_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_inventory_item_roles_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `color` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_inventory_item_roles_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `color` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_inventory_item_roles_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_inventory_item_templates_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `component_id` (array)
- `component_id__empty` (array)
- `component_id__gt` (array)
- `component_id__gte` (array)
- `component_id__lt` (array)
- `component_id__lte` (array)
- `component_id__n` (array)
- `component_type` (string)
- `component_type__n` (string)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `manufacturer` (array)
- `manufacturer__n` (array)
- `manufacturer_id` (array)
- `manufacturer_id__n` (array)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `parent_id` (array)
- `parent_id__n` (array)
- `part_id` (array)
- `part_id__empty` (boolean)
- `part_id__ic` (array)
- `part_id__ie` (array)
- `part_id__iew` (array)
- `part_id__isw` (array)
- `part_id__n` (array)
- `part_id__nic` (array)
- `part_id__nie` (array)
- `part_id__niew` (array)
- `part_id__nisw` (array)
- `q` (string)
- `role` (array)
- `role__n` (array)
- `role_id` (array)
- `role_id__n` (array)
- `updated_by_request` (string)

### dcim_inventory_item_templates_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device_type` (other)
- `parent` (integer)
- `name` (string)
- `label` (string)
- `role` (other)
- `manufacturer` (other)
- `part_id` (string)
- `description` (string)
- `component_type` (string)
- `component_id` (integer)

### dcim_inventory_item_templates_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_inventory_item_templates_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_inventory_item_templates_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_inventory_item_templates_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_inventory_item_templates_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `parent` (integer)
- `name` (string)
- `label` (string)
- `role` (other)
- `manufacturer` (other)
- `part_id` (string)
- `description` (string)
- `component_type` (string)
- `component_id` (integer)

### dcim_inventory_item_templates_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `parent` (integer)
- `name` (string)
- `label` (string)
- `role` (other)
- `manufacturer` (other)
- `part_id` (string)
- `description` (string)
- `component_type` (string)
- `component_id` (integer)

### dcim_inventory_item_templates_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_inventory_items_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `asset_tag` (array)
- `asset_tag__empty` (boolean)
- `asset_tag__ic` (array)
- `asset_tag__ie` (array)
- `asset_tag__iew` (array)
- `asset_tag__isw` (array)
- `asset_tag__n` (array)
- `asset_tag__nic` (array)
- `asset_tag__nie` (array)
- `asset_tag__niew` (array)
- `asset_tag__nisw` (array)
- `component_id` (array)
- `component_id__empty` (array)
- `component_id__gt` (array)
- `component_id__gte` (array)
- `component_id__lt` (array)
- `component_id__lte` (array)
- `component_id__n` (array)
- `component_type` (string)
- `component_type__n` (string)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device` (array)
- `device__n` (array)
- `device_id` (array)
- `device_id__n` (array)
- `device_role` (array)
- `device_role__n` (array)
- `device_role_id` (array)
- `device_role_id__n` (array)
- `device_status` (array)
- `device_status__empty` (boolean)
- `device_status__ic` (array)
- `device_status__ie` (array)
- `device_status__iew` (array)
- `device_status__isw` (array)
- `device_status__n` (array)
- `device_status__nic` (array)
- `device_status__nie` (array)
- `device_status__niew` (array)
- `device_status__nisw` (array)
- `device_type` (array)
- `device_type__n` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `discovered` (boolean)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `manufacturer` (array)
- `manufacturer__n` (array)
- `manufacturer_id` (array)
- `manufacturer_id__n` (array)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `parent_id` (array)
- `parent_id__n` (array)
- `part_id` (array)
- `part_id__empty` (boolean)
- `part_id__ic` (array)
- `part_id__ie` (array)
- `part_id__iew` (array)
- `part_id__isw` (array)
- `part_id__n` (array)
- `part_id__nic` (array)
- `part_id__nie` (array)
- `part_id__niew` (array)
- `part_id__nisw` (array)
- `q` (string)
- `rack` (array)
- `rack__n` (array)
- `rack_id` (array)
- `rack_id__n` (array)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `role` (array)
- `role__n` (array)
- `role_id` (array)
- `role_id__n` (array)
- `serial` (array)
- `serial__empty` (boolean)
- `serial__ic` (array)
- `serial__ie` (array)
- `serial__iew` (array)
- `serial__isw` (array)
- `serial__n` (array)
- `serial__nic` (array)
- `serial__nie` (array)
- `serial__niew` (array)
- `serial__nisw` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)
- `virtual_chassis` (array)
- `virtual_chassis__n` (array)
- `virtual_chassis_id` (array)
- `virtual_chassis_id__n` (array)

### dcim_inventory_items_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device` (other)
- `parent` (integer)
- `name` (string)
- `label` (string)
- `status` (string)
- `role` (other)
- `manufacturer` (other)
- `part_id` (string)
- `serial` (string)
- `asset_tag` (string)
- `discovered` (boolean)
- `description` (string)
- `component_type` (string)
- `component_id` (integer)
- `tags` (array)
- `custom_fields` (object)

### dcim_inventory_items_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_inventory_items_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_inventory_items_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_inventory_items_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_inventory_items_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `parent` (integer)
- `name` (string)
- `label` (string)
- `status` (string)
- `role` (other)
- `manufacturer` (other)
- `part_id` (string)
- `serial` (string)
- `asset_tag` (string)
- `discovered` (boolean)
- `description` (string)
- `component_type` (string)
- `component_id` (integer)
- `tags` (array)
- `custom_fields` (object)

### dcim_inventory_items_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `parent` (integer)
- `name` (string)
- `label` (string)
- `status` (string)
- `role` (other)
- `manufacturer` (other)
- `part_id` (string)
- `serial` (string)
- `asset_tag` (string)
- `discovered` (boolean)
- `description` (string)
- `component_type` (string)
- `component_id` (integer)
- `tags` (array)
- `custom_fields` (object)

### dcim_inventory_items_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_locations_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `ancestor` (array)
- `ancestor__n` (array)
- `ancestor_id` (array)
- `ancestor_id__n` (array)
- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `facility` (array)
- `facility__empty` (boolean)
- `facility__ic` (array)
- `facility__ie` (array)
- `facility__iew` (array)
- `facility__isw` (array)
- `facility__n` (array)
- `facility__nic` (array)
- `facility__nie` (array)
- `facility__niew` (array)
- `facility__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `parent` (array)
- `parent__n` (array)
- `parent_id` (array)
- `parent_id__n` (array)
- `q` (string)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `updated_by_request` (string)

### dcim_locations_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `site` (other)
- `parent` (integer)
- `status` (string)
- `tenant` (other)
- `facility` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### dcim_locations_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_locations_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_locations_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_locations_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_locations_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `site` (other)
- `parent` (integer)
- `status` (string)
- `tenant` (other)
- `facility` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### dcim_locations_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `site` (other)
- `parent` (integer)
- `status` (string)
- `tenant` (other)
- `facility` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### dcim_locations_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_mac_addresses_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `assigned_object_id` (array)
- `assigned_object_id__empty` (boolean)
- `assigned_object_id__gt` (array)
- `assigned_object_id__gte` (array)
- `assigned_object_id__lt` (array)
- `assigned_object_id__lte` (array)
- `assigned_object_id__n` (array)
- `assigned_object_type` (integer)
- `assigned_object_type__n` (integer)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device` (array)
- `device_id` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `interface` (array)
- `interface__n` (array)
- `interface_id` (array)
- `interface_id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `mac_address` (array)
- `mac_address__ic` (array)
- `mac_address__ie` (array)
- `mac_address__iew` (array)
- `mac_address__isw` (array)
- `mac_address__n` (array)
- `mac_address__nic` (array)
- `mac_address__nie` (array)
- `mac_address__niew` (array)
- `mac_address__nisw` (array)
- `modified_by_request` (string)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)
- `virtual_machine` (array)
- `virtual_machine_id` (array)
- `vminterface` (array)
- `vminterface__n` (array)
- `vminterface_id` (array)
- `vminterface_id__n` (array)

### dcim_mac_addresses_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `mac_address` (string)
- `assigned_object_type` (string)
- `assigned_object_id` (integer)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_mac_addresses_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_mac_addresses_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_mac_addresses_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_mac_addresses_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_mac_addresses_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `mac_address` (string)
- `assigned_object_type` (string)
- `assigned_object_id` (integer)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_mac_addresses_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `mac_address` (string)
- `assigned_object_type` (string)
- `assigned_object_id` (integer)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_mac_addresses_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_manufacturers_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### dcim_manufacturers_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_manufacturers_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_manufacturers_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_manufacturers_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_manufacturers_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_manufacturers_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_manufacturers_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_manufacturers_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_module_bay_templates_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `module_type_id` (array)
- `module_type_id__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `position` (array)
- `position__empty` (boolean)
- `position__ic` (array)
- `position__ie` (array)
- `position__iew` (array)
- `position__isw` (array)
- `position__n` (array)
- `position__nic` (array)
- `position__nie` (array)
- `position__niew` (array)
- `position__nisw` (array)
- `q` (string)
- `updated_by_request` (string)

### dcim_module_bay_templates_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `position` (string)
- `description` (string)

### dcim_module_bay_templates_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_module_bay_templates_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_module_bay_templates_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_module_bay_templates_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_module_bay_templates_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `position` (string)
- `description` (string)

### dcim_module_bay_templates_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `position` (string)
- `description` (string)

### dcim_module_bay_templates_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_module_bays_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device` (array)
- `device__n` (array)
- `device_id` (array)
- `device_id__n` (array)
- `device_role` (array)
- `device_role__n` (array)
- `device_role_id` (array)
- `device_role_id__n` (array)
- `device_status` (array)
- `device_status__empty` (boolean)
- `device_status__ic` (array)
- `device_status__ie` (array)
- `device_status__iew` (array)
- `device_status__isw` (array)
- `device_status__n` (array)
- `device_status__nic` (array)
- `device_status__nie` (array)
- `device_status__niew` (array)
- `device_status__nisw` (array)
- `device_type` (array)
- `device_type__n` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `installed_module_id` (array)
- `installed_module_id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `modified_by_request` (string)
- `module_id` (array)
- `module_id__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `parent_id` (array)
- `parent_id__n` (array)
- `position` (array)
- `position__empty` (boolean)
- `position__ic` (array)
- `position__ie` (array)
- `position__iew` (array)
- `position__isw` (array)
- `position__n` (array)
- `position__nic` (array)
- `position__nie` (array)
- `position__niew` (array)
- `position__nisw` (array)
- `q` (string)
- `rack` (array)
- `rack__n` (array)
- `rack_id` (array)
- `rack_id__n` (array)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)
- `virtual_chassis` (array)
- `virtual_chassis__n` (array)
- `virtual_chassis_id` (array)
- `virtual_chassis_id__n` (array)

### dcim_module_bays_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device` (other)
- `module` (other)
- `name` (string)
- `installed_module` (other)
- `label` (string)
- `position` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_module_bays_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_module_bays_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_module_bays_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_module_bays_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_module_bays_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `module` (other)
- `name` (string)
- `installed_module` (other)
- `label` (string)
- `position` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_module_bays_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `module` (other)
- `name` (string)
- `installed_module` (other)
- `label` (string)
- `position` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_module_bays_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_module_type_profiles_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### dcim_module_type_profiles_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `description` (string)
- `schema` (other)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_module_type_profiles_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_module_type_profiles_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_module_type_profiles_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_module_type_profiles_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_module_type_profiles_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `schema` (other)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_module_type_profiles_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `schema` (other)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_module_type_profiles_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_module_types_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `airflow` (string)
- `console_ports` (boolean)
- `console_server_ports` (boolean)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `interfaces` (boolean)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `manufacturer` (array)
- `manufacturer__n` (array)
- `manufacturer_id` (array)
- `manufacturer_id__n` (array)
- `model` (array)
- `model__empty` (boolean)
- `model__ic` (array)
- `model__ie` (array)
- `model__iew` (array)
- `model__isw` (array)
- `model__n` (array)
- `model__nic` (array)
- `model__nie` (array)
- `model__niew` (array)
- `model__nisw` (array)
- `modified_by_request` (string)
- `offset` (integer)
- `ordering` (string)
- `part_number` (array)
- `part_number__empty` (boolean)
- `part_number__ic` (array)
- `part_number__ie` (array)
- `part_number__iew` (array)
- `part_number__isw` (array)
- `part_number__n` (array)
- `part_number__nic` (array)
- `part_number__nie` (array)
- `part_number__niew` (array)
- `part_number__nisw` (array)
- `pass_through_ports` (boolean)
- `power_outlets` (boolean)
- `power_ports` (boolean)
- `profile` (array)
- `profile__n` (array)
- `profile_id` (array)
- `profile_id__n` (array)
- `q` (string)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)
- `weight` (array)
- `weight__empty` (boolean)
- `weight__gt` (array)
- `weight__gte` (array)
- `weight__lt` (array)
- `weight__lte` (array)
- `weight__n` (array)
- `weight_unit` (string)

### dcim_module_types_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `profile` (other)
- `manufacturer` (other)
- `model` (string)
- `part_number` (string)
- `airflow` (string)
- `weight` (number)
- `weight_unit` (string)
- `description` (string)
- `attributes` (other)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_module_types_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_module_types_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_module_types_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_module_types_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_module_types_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `profile` (other)
- `manufacturer` (other)
- `model` (string)
- `part_number` (string)
- `airflow` (string)
- `weight` (number)
- `weight_unit` (string)
- `description` (string)
- `attributes` (other)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_module_types_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `profile` (other)
- `manufacturer` (other)
- `model` (string)
- `part_number` (string)
- `airflow` (string)
- `weight` (number)
- `weight_unit` (string)
- `description` (string)
- `attributes` (other)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_module_types_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_modules_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `asset_tag` (array)
- `asset_tag__empty` (boolean)
- `asset_tag__ic` (array)
- `asset_tag__ie` (array)
- `asset_tag__iew` (array)
- `asset_tag__isw` (array)
- `asset_tag__n` (array)
- `asset_tag__nic` (array)
- `asset_tag__nie` (array)
- `asset_tag__niew` (array)
- `asset_tag__nisw` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device` (array)
- `device__n` (array)
- `device_id` (array)
- `device_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `manufacturer` (array)
- `manufacturer__n` (array)
- `manufacturer_id` (array)
- `manufacturer_id__n` (array)
- `modified_by_request` (string)
- `module_bay_id` (array)
- `module_bay_id__n` (array)
- `module_type` (array)
- `module_type__n` (array)
- `module_type_id` (array)
- `module_type_id__n` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `rack` (array)
- `rack__n` (array)
- `rack_id` (array)
- `rack_id__n` (array)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `serial` (array)
- `serial__empty` (boolean)
- `serial__ic` (array)
- `serial__ie` (array)
- `serial__iew` (array)
- `serial__isw` (array)
- `serial__n` (array)
- `serial__nic` (array)
- `serial__nie` (array)
- `serial__niew` (array)
- `serial__nisw` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### dcim_modules_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device` (other)
- `module_bay` (integer)
- `module_type` (other)
- `status` (string)
- `serial` (string)
- `asset_tag` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_modules_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_modules_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_modules_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_modules_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_modules_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `module_bay` (integer)
- `module_type` (other)
- `status` (string)
- `serial` (string)
- `asset_tag` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_modules_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `module_bay` (integer)
- `module_type` (other)
- `status` (string)
- `serial` (string)
- `asset_tag` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_modules_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_platforms_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `available_for_device_type` (string)
- `config_template_id` (array)
- `config_template_id__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `manufacturer` (array)
- `manufacturer__n` (array)
- `manufacturer_id` (array)
- `manufacturer_id__n` (array)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### dcim_platforms_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `manufacturer` (other)
- `config_template` (other)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_platforms_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_platforms_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_platforms_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_platforms_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_platforms_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `manufacturer` (other)
- `config_template` (other)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_platforms_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `manufacturer` (other)
- `config_template` (other)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_platforms_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_power_feeds_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `amperage` (array)
- `amperage__empty` (boolean)
- `amperage__gt` (array)
- `amperage__gte` (array)
- `amperage__lt` (array)
- `amperage__lte` (array)
- `amperage__n` (array)
- `available_power` (array)
- `available_power__empty` (boolean)
- `available_power__gt` (array)
- `available_power__gte` (array)
- `available_power__lt` (array)
- `available_power__lte` (array)
- `available_power__n` (array)
- `cable_end` (string)
- `cable_id` (array)
- `cable_id__n` (array)
- `cabled` (boolean)
- `connected` (boolean)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `mark_connected` (boolean)
- `max_utilization` (array)
- `max_utilization__empty` (boolean)
- `max_utilization__gt` (array)
- `max_utilization__gte` (array)
- `max_utilization__lt` (array)
- `max_utilization__lte` (array)
- `max_utilization__n` (array)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `occupied` (boolean)
- `offset` (integer)
- `ordering` (string)
- `phase` (string)
- `power_panel_id` (array)
- `power_panel_id__n` (array)
- `q` (string)
- `rack_id` (array)
- `rack_id__n` (array)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `supply` (string)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `type` (string)
- `updated_by_request` (string)
- `voltage` (array)
- `voltage__empty` (boolean)
- `voltage__gt` (array)
- `voltage__gte` (array)
- `voltage__lt` (array)
- `voltage__lte` (array)
- `voltage__n` (array)

### dcim_power_feeds_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `power_panel` (other)
- `rack` (other)
- `name` (string)
- `status` (string)
- `type` (string)
- `supply` (string)
- `phase` (string)
- `voltage` (integer)
- `amperage` (integer)
- `max_utilization` (integer)
- `mark_connected` (boolean)
- `description` (string)
- `tenant` (other)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_power_feeds_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_feeds_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_feeds_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_feeds_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_power_feeds_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `power_panel` (other)
- `rack` (other)
- `name` (string)
- `status` (string)
- `type` (string)
- `supply` (string)
- `phase` (string)
- `voltage` (integer)
- `amperage` (integer)
- `max_utilization` (integer)
- `mark_connected` (boolean)
- `description` (string)
- `tenant` (other)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_power_feeds_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `power_panel` (other)
- `rack` (other)
- `name` (string)
- `status` (string)
- `type` (string)
- `supply` (string)
- `phase` (string)
- `voltage` (integer)
- `amperage` (integer)
- `max_utilization` (integer)
- `mark_connected` (boolean)
- `description` (string)
- `tenant` (other)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_power_feeds_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_power_feeds_trace_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_power_outlet_templates_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `feed_leg` (array)
- `feed_leg__empty` (boolean)
- `feed_leg__ic` (array)
- `feed_leg__ie` (array)
- `feed_leg__iew` (array)
- `feed_leg__isw` (array)
- `feed_leg__n` (array)
- `feed_leg__nic` (array)
- `feed_leg__nie` (array)
- `feed_leg__niew` (array)
- `feed_leg__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `module_type_id` (array)
- `module_type_id__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `power_port_id` (array)
- `power_port_id__n` (array)
- `q` (string)
- `type` (string)
- `updated_by_request` (string)

### dcim_power_outlet_templates_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `power_port` (other)
- `feed_leg` (string)
- `description` (string)

### dcim_power_outlet_templates_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_outlet_templates_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_outlet_templates_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_outlet_templates_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_power_outlet_templates_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `power_port` (other)
- `feed_leg` (string)
- `description` (string)

### dcim_power_outlet_templates_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `power_port` (other)
- `feed_leg` (string)
- `description` (string)

### dcim_power_outlet_templates_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_power_outlets_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `cable_end` (string)
- `cable_id` (array)
- `cable_id__n` (array)
- `cabled` (boolean)
- `color` (array)
- `color__empty` (boolean)
- `color__ic` (array)
- `color__ie` (array)
- `color__iew` (array)
- `color__isw` (array)
- `color__n` (array)
- `color__nic` (array)
- `color__nie` (array)
- `color__niew` (array)
- `color__nisw` (array)
- `connected` (boolean)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device` (array)
- `device__n` (array)
- `device_id` (array)
- `device_id__n` (array)
- `device_role` (array)
- `device_role__n` (array)
- `device_role_id` (array)
- `device_role_id__n` (array)
- `device_status` (array)
- `device_status__empty` (boolean)
- `device_status__ic` (array)
- `device_status__ie` (array)
- `device_status__iew` (array)
- `device_status__isw` (array)
- `device_status__n` (array)
- `device_status__nic` (array)
- `device_status__nie` (array)
- `device_status__niew` (array)
- `device_status__nisw` (array)
- `device_type` (array)
- `device_type__n` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `feed_leg` (array)
- `feed_leg__empty` (boolean)
- `feed_leg__ic` (array)
- `feed_leg__ie` (array)
- `feed_leg__iew` (array)
- `feed_leg__isw` (array)
- `feed_leg__n` (array)
- `feed_leg__nic` (array)
- `feed_leg__nie` (array)
- `feed_leg__niew` (array)
- `feed_leg__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `mark_connected` (boolean)
- `modified_by_request` (string)
- `module_id` (array)
- `module_id__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `occupied` (boolean)
- `offset` (integer)
- `ordering` (string)
- `power_port_id` (array)
- `power_port_id__n` (array)
- `q` (string)
- `rack` (array)
- `rack__n` (array)
- `rack_id` (array)
- `rack_id__n` (array)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `type` (array)
- `type__empty` (boolean)
- `type__ic` (array)
- `type__ie` (array)
- `type__iew` (array)
- `type__isw` (array)
- `type__n` (array)
- `type__nic` (array)
- `type__nie` (array)
- `type__niew` (array)
- `type__nisw` (array)
- `updated_by_request` (string)
- `virtual_chassis` (array)
- `virtual_chassis__n` (array)
- `virtual_chassis_id` (array)
- `virtual_chassis_id__n` (array)

### dcim_power_outlets_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `status` (string)
- `color` (string)
- `power_port` (other)
- `feed_leg` (string)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_power_outlets_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_outlets_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_outlets_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_outlets_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_power_outlets_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `status` (string)
- `color` (string)
- `power_port` (other)
- `feed_leg` (string)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_power_outlets_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `status` (string)
- `color` (string)
- `power_port` (other)
- `feed_leg` (string)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_power_outlets_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_power_outlets_trace_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_power_panels_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location_id` (array)
- `location_id__n` (array)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### dcim_power_panels_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `site` (other)
- `location` (other)
- `name` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_power_panels_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_panels_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_panels_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_panels_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_power_panels_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `site` (other)
- `location` (other)
- `name` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_power_panels_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `site` (other)
- `location` (other)
- `name` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_power_panels_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_power_port_templates_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `allocated_draw` (array)
- `allocated_draw__empty` (boolean)
- `allocated_draw__gt` (array)
- `allocated_draw__gte` (array)
- `allocated_draw__lt` (array)
- `allocated_draw__lte` (array)
- `allocated_draw__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `maximum_draw` (array)
- `maximum_draw__empty` (boolean)
- `maximum_draw__gt` (array)
- `maximum_draw__gte` (array)
- `maximum_draw__lt` (array)
- `maximum_draw__lte` (array)
- `maximum_draw__n` (array)
- `modified_by_request` (string)
- `module_type_id` (array)
- `module_type_id__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `type` (string)
- `updated_by_request` (string)

### dcim_power_port_templates_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `maximum_draw` (integer)
- `allocated_draw` (integer)
- `description` (string)

### dcim_power_port_templates_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_port_templates_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_port_templates_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_port_templates_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_power_port_templates_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `maximum_draw` (integer)
- `allocated_draw` (integer)
- `description` (string)

### dcim_power_port_templates_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `maximum_draw` (integer)
- `allocated_draw` (integer)
- `description` (string)

### dcim_power_port_templates_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_power_ports_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `allocated_draw` (array)
- `allocated_draw__empty` (boolean)
- `allocated_draw__gt` (array)
- `allocated_draw__gte` (array)
- `allocated_draw__lt` (array)
- `allocated_draw__lte` (array)
- `allocated_draw__n` (array)
- `cable_end` (string)
- `cable_id` (array)
- `cable_id__n` (array)
- `cabled` (boolean)
- `connected` (boolean)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device` (array)
- `device__n` (array)
- `device_id` (array)
- `device_id__n` (array)
- `device_role` (array)
- `device_role__n` (array)
- `device_role_id` (array)
- `device_role_id__n` (array)
- `device_status` (array)
- `device_status__empty` (boolean)
- `device_status__ic` (array)
- `device_status__ie` (array)
- `device_status__iew` (array)
- `device_status__isw` (array)
- `device_status__n` (array)
- `device_status__nic` (array)
- `device_status__nie` (array)
- `device_status__niew` (array)
- `device_status__nisw` (array)
- `device_type` (array)
- `device_type__n` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `mark_connected` (boolean)
- `maximum_draw` (array)
- `maximum_draw__empty` (boolean)
- `maximum_draw__gt` (array)
- `maximum_draw__gte` (array)
- `maximum_draw__lt` (array)
- `maximum_draw__lte` (array)
- `maximum_draw__n` (array)
- `modified_by_request` (string)
- `module_id` (array)
- `module_id__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `occupied` (boolean)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `rack` (array)
- `rack__n` (array)
- `rack_id` (array)
- `rack_id__n` (array)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `type` (array)
- `type__empty` (boolean)
- `type__ic` (array)
- `type__ie` (array)
- `type__iew` (array)
- `type__isw` (array)
- `type__n` (array)
- `type__nic` (array)
- `type__nie` (array)
- `type__niew` (array)
- `type__nisw` (array)
- `updated_by_request` (string)
- `virtual_chassis` (array)
- `virtual_chassis__n` (array)
- `virtual_chassis_id` (array)
- `virtual_chassis_id__n` (array)

### dcim_power_ports_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `maximum_draw` (integer)
- `allocated_draw` (integer)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_power_ports_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_ports_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_ports_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_power_ports_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_power_ports_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `maximum_draw` (integer)
- `allocated_draw` (integer)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_power_ports_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `maximum_draw` (integer)
- `allocated_draw` (integer)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_power_ports_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_power_ports_trace_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_rack_reservations_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `modified_by_request` (string)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `rack_id` (array)
- `rack_id__n` (array)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `unit` (number)
- `updated_by_request` (string)
- `user` (array)
- `user__n` (array)
- `user_id` (array)
- `user_id__n` (array)

### dcim_rack_reservations_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `rack` (other)
- `units` (array)
- `user` (other)
- `tenant` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_rack_reservations_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_rack_reservations_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_rack_reservations_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_rack_reservations_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_rack_reservations_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `rack` (other)
- `units` (array)
- `user` (other)
- `tenant` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_rack_reservations_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `rack` (other)
- `units` (array)
- `user` (other)
- `tenant` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_rack_reservations_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_rack_roles_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `color` (array)
- `color__empty` (boolean)
- `color__ic` (array)
- `color__ie` (array)
- `color__iew` (array)
- `color__isw` (array)
- `color__n` (array)
- `color__nic` (array)
- `color__nie` (array)
- `color__niew` (array)
- `color__nisw` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### dcim_rack_roles_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `color` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_rack_roles_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_rack_roles_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_rack_roles_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_rack_roles_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_rack_roles_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `color` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_rack_roles_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `color` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_rack_roles_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_rack_types_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `desc_units` (boolean)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `form_factor` (array)
- `form_factor__empty` (boolean)
- `form_factor__ic` (array)
- `form_factor__ie` (array)
- `form_factor__iew` (array)
- `form_factor__isw` (array)
- `form_factor__n` (array)
- `form_factor__nic` (array)
- `form_factor__nie` (array)
- `form_factor__niew` (array)
- `form_factor__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `manufacturer` (array)
- `manufacturer__n` (array)
- `manufacturer_id` (array)
- `manufacturer_id__n` (array)
- `max_weight` (array)
- `max_weight__empty` (boolean)
- `max_weight__gt` (array)
- `max_weight__gte` (array)
- `max_weight__lt` (array)
- `max_weight__lte` (array)
- `max_weight__n` (array)
- `model` (array)
- `model__empty` (boolean)
- `model__ic` (array)
- `model__ie` (array)
- `model__iew` (array)
- `model__isw` (array)
- `model__n` (array)
- `model__nic` (array)
- `model__nie` (array)
- `model__niew` (array)
- `model__nisw` (array)
- `modified_by_request` (string)
- `mounting_depth` (array)
- `mounting_depth__empty` (boolean)
- `mounting_depth__gt` (array)
- `mounting_depth__gte` (array)
- `mounting_depth__lt` (array)
- `mounting_depth__lte` (array)
- `mounting_depth__n` (array)
- `offset` (integer)
- `ordering` (string)
- `outer_depth` (array)
- `outer_depth__empty` (boolean)
- `outer_depth__gt` (array)
- `outer_depth__gte` (array)
- `outer_depth__lt` (array)
- `outer_depth__lte` (array)
- `outer_depth__n` (array)
- `outer_height` (array)
- `outer_height__empty` (boolean)
- `outer_height__gt` (array)
- `outer_height__gte` (array)
- `outer_height__lt` (array)
- `outer_height__lte` (array)
- `outer_height__n` (array)
- `outer_unit` (string)
- `outer_width` (array)
- `outer_width__empty` (boolean)
- `outer_width__gt` (array)
- `outer_width__gte` (array)
- `outer_width__lt` (array)
- `outer_width__lte` (array)
- `outer_width__n` (array)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `starting_unit` (array)
- `starting_unit__empty` (boolean)
- `starting_unit__gt` (array)
- `starting_unit__gte` (array)
- `starting_unit__lt` (array)
- `starting_unit__lte` (array)
- `starting_unit__n` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `u_height` (array)
- `u_height__empty` (boolean)
- `u_height__gt` (array)
- `u_height__gte` (array)
- `u_height__lt` (array)
- `u_height__lte` (array)
- `u_height__n` (array)
- `updated_by_request` (string)
- `weight` (array)
- `weight__empty` (boolean)
- `weight__gt` (array)
- `weight__gte` (array)
- `weight__lt` (array)
- `weight__lte` (array)
- `weight__n` (array)
- `weight_unit` (string)
- `width` (array)
- `width__ic` (array)
- `width__ie` (array)
- `width__iew` (array)
- `width__isw` (array)
- `width__n` (array)
- `width__nic` (array)
- `width__nie` (array)
- `width__niew` (array)
- `width__nisw` (array)

### dcim_rack_types_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `manufacturer` (other)
- `model` (string)
- `slug` (string)
- `description` (string)
- `form_factor` (string)
- `width` (integer)
- `u_height` (integer)
- `starting_unit` (integer)
- `desc_units` (boolean)
- `outer_width` (integer)
- `outer_height` (integer)
- `outer_depth` (integer)
- `outer_unit` (string)
- `weight` (number)
- `max_weight` (integer)
- `weight_unit` (string)
- `mounting_depth` (integer)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_rack_types_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_rack_types_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_rack_types_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_rack_types_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_rack_types_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `manufacturer` (other)
- `model` (string)
- `slug` (string)
- `description` (string)
- `form_factor` (string)
- `width` (integer)
- `u_height` (integer)
- `starting_unit` (integer)
- `desc_units` (boolean)
- `outer_width` (integer)
- `outer_height` (integer)
- `outer_depth` (integer)
- `outer_unit` (string)
- `weight` (number)
- `max_weight` (integer)
- `weight_unit` (string)
- `mounting_depth` (integer)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_rack_types_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `manufacturer` (other)
- `model` (string)
- `slug` (string)
- `description` (string)
- `form_factor` (string)
- `width` (integer)
- `u_height` (integer)
- `starting_unit` (integer)
- `desc_units` (boolean)
- `outer_width` (integer)
- `outer_height` (integer)
- `outer_depth` (integer)
- `outer_unit` (string)
- `weight` (number)
- `max_weight` (integer)
- `weight_unit` (string)
- `mounting_depth` (integer)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_rack_types_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_racks_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `airflow` (string)
- `asset_tag` (array)
- `asset_tag__empty` (boolean)
- `asset_tag__ic` (array)
- `asset_tag__ie` (array)
- `asset_tag__iew` (array)
- `asset_tag__isw` (array)
- `asset_tag__n` (array)
- `asset_tag__nic` (array)
- `asset_tag__nie` (array)
- `asset_tag__niew` (array)
- `asset_tag__nisw` (array)
- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `desc_units` (boolean)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `facility_id` (array)
- `facility_id__empty` (boolean)
- `facility_id__ic` (array)
- `facility_id__ie` (array)
- `facility_id__iew` (array)
- `facility_id__isw` (array)
- `facility_id__n` (array)
- `facility_id__nic` (array)
- `facility_id__nie` (array)
- `facility_id__niew` (array)
- `facility_id__nisw` (array)
- `form_factor` (array)
- `form_factor__empty` (boolean)
- `form_factor__ic` (array)
- `form_factor__ie` (array)
- `form_factor__iew` (array)
- `form_factor__isw` (array)
- `form_factor__n` (array)
- `form_factor__nic` (array)
- `form_factor__nie` (array)
- `form_factor__niew` (array)
- `form_factor__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `manufacturer` (array)
- `manufacturer__n` (array)
- `manufacturer_id` (array)
- `manufacturer_id__n` (array)
- `max_weight` (array)
- `max_weight__empty` (boolean)
- `max_weight__gt` (array)
- `max_weight__gte` (array)
- `max_weight__lt` (array)
- `max_weight__lte` (array)
- `max_weight__n` (array)
- `modified_by_request` (string)
- `mounting_depth` (array)
- `mounting_depth__empty` (boolean)
- `mounting_depth__gt` (array)
- `mounting_depth__gte` (array)
- `mounting_depth__lt` (array)
- `mounting_depth__lte` (array)
- `mounting_depth__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `outer_depth` (array)
- `outer_depth__empty` (boolean)
- `outer_depth__gt` (array)
- `outer_depth__gte` (array)
- `outer_depth__lt` (array)
- `outer_depth__lte` (array)
- `outer_depth__n` (array)
- `outer_height` (array)
- `outer_height__empty` (boolean)
- `outer_height__gt` (array)
- `outer_height__gte` (array)
- `outer_height__lt` (array)
- `outer_height__lte` (array)
- `outer_height__n` (array)
- `outer_unit` (string)
- `outer_width` (array)
- `outer_width__empty` (boolean)
- `outer_width__gt` (array)
- `outer_width__gte` (array)
- `outer_width__lt` (array)
- `outer_width__lte` (array)
- `outer_width__n` (array)
- `q` (string)
- `rack_type` (array)
- `rack_type__n` (array)
- `rack_type_id` (array)
- `rack_type_id__n` (array)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `role` (array)
- `role__n` (array)
- `role_id` (array)
- `role_id__n` (array)
- `serial` (array)
- `serial__empty` (boolean)
- `serial__ic` (array)
- `serial__ie` (array)
- `serial__iew` (array)
- `serial__isw` (array)
- `serial__n` (array)
- `serial__nic` (array)
- `serial__nie` (array)
- `serial__niew` (array)
- `serial__nisw` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `starting_unit` (array)
- `starting_unit__empty` (boolean)
- `starting_unit__gt` (array)
- `starting_unit__gte` (array)
- `starting_unit__lt` (array)
- `starting_unit__lte` (array)
- `starting_unit__n` (array)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `u_height` (array)
- `u_height__empty` (boolean)
- `u_height__gt` (array)
- `u_height__gte` (array)
- `u_height__lt` (array)
- `u_height__lte` (array)
- `u_height__n` (array)
- `updated_by_request` (string)
- `weight` (array)
- `weight__empty` (boolean)
- `weight__gt` (array)
- `weight__gte` (array)
- `weight__lt` (array)
- `weight__lte` (array)
- `weight__n` (array)
- `weight_unit` (string)
- `width` (array)
- `width__ic` (array)
- `width__ie` (array)
- `width__iew` (array)
- `width__isw` (array)
- `width__n` (array)
- `width__nic` (array)
- `width__nie` (array)
- `width__niew` (array)
- `width__nisw` (array)

### dcim_racks_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `facility_id` (string)
- `site` (other)
- `location` (other)
- `tenant` (other)
- `status` (string)
- `role` (other)
- `serial` (string)
- `asset_tag` (string)
- `rack_type` (other)
- `form_factor` (string)
- `width` (integer)
- `u_height` (integer)
- `starting_unit` (integer)
- `weight` (number)
- `max_weight` (integer)
- `weight_unit` (string)
- `desc_units` (boolean)
- `outer_width` (integer)
- `outer_height` (integer)
- `outer_depth` (integer)
- `outer_unit` (string)
- `mounting_depth` (integer)
- `airflow` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_racks_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_racks_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_racks_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_racks_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_racks_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `facility_id` (string)
- `site` (other)
- `location` (other)
- `tenant` (other)
- `status` (string)
- `role` (other)
- `serial` (string)
- `asset_tag` (string)
- `rack_type` (other)
- `form_factor` (string)
- `width` (integer)
- `u_height` (integer)
- `starting_unit` (integer)
- `weight` (number)
- `max_weight` (integer)
- `weight_unit` (string)
- `desc_units` (boolean)
- `outer_width` (integer)
- `outer_height` (integer)
- `outer_depth` (integer)
- `outer_unit` (string)
- `mounting_depth` (integer)
- `airflow` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_racks_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `facility_id` (string)
- `site` (other)
- `location` (other)
- `tenant` (other)
- `status` (string)
- `role` (other)
- `serial` (string)
- `asset_tag` (string)
- `rack_type` (other)
- `form_factor` (string)
- `width` (integer)
- `u_height` (integer)
- `starting_unit` (integer)
- `weight` (number)
- `max_weight` (integer)
- `weight_unit` (string)
- `desc_units` (boolean)
- `outer_width` (integer)
- `outer_height` (integer)
- `outer_depth` (integer)
- `outer_unit` (string)
- `mounting_depth` (integer)
- `airflow` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_racks_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_racks_elevation_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `exclude` (integer)
- `expand_devices` (boolean)
- `face` (string)
- `include_images` (boolean)
- `legend_width` (integer)
- `limit` (integer)
- `margin_width` (integer)
- `offset` (integer)
- `q` (string)
- `render` (string)
- `unit_height` (integer)
- `unit_width` (integer)

### dcim_rear_port_templates_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `color` (array)
- `color__empty` (boolean)
- `color__ic` (array)
- `color__ie` (array)
- `color__iew` (array)
- `color__isw` (array)
- `color__n` (array)
- `color__nic` (array)
- `color__nie` (array)
- `color__niew` (array)
- `color__nisw` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `module_type_id` (array)
- `module_type_id__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `positions` (array)
- `positions__empty` (boolean)
- `positions__gt` (array)
- `positions__gte` (array)
- `positions__lt` (array)
- `positions__lte` (array)
- `positions__n` (array)
- `q` (string)
- `type` (array)
- `type__empty` (boolean)
- `type__ic` (array)
- `type__ie` (array)
- `type__iew` (array)
- `type__isw` (array)
- `type__n` (array)
- `type__nic` (array)
- `type__nie` (array)
- `type__niew` (array)
- `type__nisw` (array)
- `updated_by_request` (string)

### dcim_rear_port_templates_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `color` (string)
- `positions` (integer)
- `description` (string)

### dcim_rear_port_templates_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_rear_port_templates_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_rear_port_templates_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_rear_port_templates_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_rear_port_templates_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `color` (string)
- `positions` (integer)
- `description` (string)

### dcim_rear_port_templates_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device_type` (other)
- `module_type` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `color` (string)
- `positions` (integer)
- `description` (string)

### dcim_rear_port_templates_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_rear_ports_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `cable_end` (string)
- `cable_id` (array)
- `cable_id__n` (array)
- `cabled` (boolean)
- `color` (array)
- `color__empty` (boolean)
- `color__ic` (array)
- `color__ie` (array)
- `color__iew` (array)
- `color__isw` (array)
- `color__n` (array)
- `color__nic` (array)
- `color__nie` (array)
- `color__niew` (array)
- `color__nisw` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device` (array)
- `device__n` (array)
- `device_id` (array)
- `device_id__n` (array)
- `device_role` (array)
- `device_role__n` (array)
- `device_role_id` (array)
- `device_role_id__n` (array)
- `device_status` (array)
- `device_status__empty` (boolean)
- `device_status__ic` (array)
- `device_status__ie` (array)
- `device_status__iew` (array)
- `device_status__isw` (array)
- `device_status__n` (array)
- `device_status__nic` (array)
- `device_status__nie` (array)
- `device_status__niew` (array)
- `device_status__nisw` (array)
- `device_type` (array)
- `device_type__n` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `mark_connected` (boolean)
- `modified_by_request` (string)
- `module_id` (array)
- `module_id__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `occupied` (boolean)
- `offset` (integer)
- `ordering` (string)
- `positions` (array)
- `positions__empty` (boolean)
- `positions__gt` (array)
- `positions__gte` (array)
- `positions__lt` (array)
- `positions__lte` (array)
- `positions__n` (array)
- `q` (string)
- `rack` (array)
- `rack__n` (array)
- `rack_id` (array)
- `rack_id__n` (array)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `type` (array)
- `type__empty` (boolean)
- `type__ic` (array)
- `type__ie` (array)
- `type__iew` (array)
- `type__isw` (array)
- `type__n` (array)
- `type__nic` (array)
- `type__nie` (array)
- `type__niew` (array)
- `type__nisw` (array)
- `updated_by_request` (string)
- `virtual_chassis` (array)
- `virtual_chassis__n` (array)
- `virtual_chassis_id` (array)
- `virtual_chassis_id__n` (array)

### dcim_rear_ports_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `color` (string)
- `positions` (integer)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_rear_ports_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_rear_ports_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_rear_ports_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_rear_ports_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_rear_ports_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `color` (string)
- `positions` (integer)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_rear_ports_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `device` (other)
- `module` (other)
- `name` (string)
- `label` (string)
- `type` (string)
- `color` (string)
- `positions` (integer)
- `description` (string)
- `mark_connected` (boolean)
- `tags` (array)
- `custom_fields` (object)

### dcim_rear_ports_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_rear_ports_paths_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_regions_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `ancestor` (array)
- `ancestor__n` (array)
- `ancestor_id` (array)
- `ancestor_id__n` (array)
- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `parent` (array)
- `parent__n` (array)
- `parent_id` (array)
- `parent_id__n` (array)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### dcim_regions_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `parent` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### dcim_regions_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_regions_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_regions_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_regions_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_regions_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `parent` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### dcim_regions_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `parent` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### dcim_regions_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_site_groups_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `ancestor` (array)
- `ancestor__n` (array)
- `ancestor_id` (array)
- `ancestor_id__n` (array)
- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `parent` (array)
- `parent__n` (array)
- `parent_id` (array)
- `parent_id__n` (array)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### dcim_site_groups_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `parent` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### dcim_site_groups_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_site_groups_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_site_groups_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_site_groups_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_site_groups_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `parent` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### dcim_site_groups_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `parent` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### dcim_site_groups_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_sites_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `asn` (array)
- `asn__n` (array)
- `asn_id` (array)
- `asn_id__n` (array)
- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `facility` (array)
- `facility__empty` (boolean)
- `facility__ic` (array)
- `facility__ie` (array)
- `facility__iew` (array)
- `facility__isw` (array)
- `facility__n` (array)
- `facility__nic` (array)
- `facility__nie` (array)
- `facility__niew` (array)
- `facility__nisw` (array)
- `group` (array)
- `group__n` (array)
- `group_id` (array)
- `group_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `latitude` (array)
- `latitude__empty` (boolean)
- `latitude__gt` (array)
- `latitude__gte` (array)
- `latitude__lt` (array)
- `latitude__lte` (array)
- `latitude__n` (array)
- `limit` (integer)
- `longitude` (array)
- `longitude__empty` (boolean)
- `longitude__gt` (array)
- `longitude__gte` (array)
- `longitude__lt` (array)
- `longitude__lte` (array)
- `longitude__n` (array)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `time_zone` (array)
- `time_zone__ic` (array)
- `time_zone__ie` (array)
- `time_zone__iew` (array)
- `time_zone__isw` (array)
- `time_zone__n` (array)
- `time_zone__nic` (array)
- `time_zone__nie` (array)
- `time_zone__niew` (array)
- `time_zone__nisw` (array)
- `updated_by_request` (string)

### dcim_sites_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `status` (string)
- `region` (other)
- `group` (other)
- `tenant` (other)
- `facility` (string)
- `time_zone` (string)
- `description` (string)
- `physical_address` (string)
- `shipping_address` (string)
- `latitude` (number)
- `longitude` (number)
- `comments` (string)
- `asns` (array)
- `tags` (array)
- `custom_fields` (object)

### dcim_sites_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_sites_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_sites_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_sites_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_sites_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `status` (string)
- `region` (other)
- `group` (other)
- `tenant` (other)
- `facility` (string)
- `time_zone` (string)
- `description` (string)
- `physical_address` (string)
- `shipping_address` (string)
- `latitude` (number)
- `longitude` (number)
- `comments` (string)
- `asns` (array)
- `tags` (array)
- `custom_fields` (object)

### dcim_sites_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `status` (string)
- `region` (other)
- `group` (other)
- `tenant` (other)
- `facility` (string)
- `time_zone` (string)
- `description` (string)
- `physical_address` (string)
- `shipping_address` (string)
- `latitude` (number)
- `longitude` (number)
- `comments` (string)
- `asns` (array)
- `tags` (array)
- `custom_fields` (object)

### dcim_sites_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_virtual_chassis_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `domain` (array)
- `domain__empty` (boolean)
- `domain__ic` (array)
- `domain__ie` (array)
- `domain__iew` (array)
- `domain__isw` (array)
- `domain__n` (array)
- `domain__nic` (array)
- `domain__nie` (array)
- `domain__niew` (array)
- `domain__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `master` (array)
- `master__n` (array)
- `master_id` (array)
- `master_id__n` (array)
- `member_count` (array)
- `member_count__empty` (boolean)
- `member_count__gt` (array)
- `member_count__gte` (array)
- `member_count__lt` (array)
- `member_count__lte` (array)
- `member_count__n` (array)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `updated_by_request` (string)

### dcim_virtual_chassis_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `domain` (string)
- `master` (integer)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_virtual_chassis_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_virtual_chassis_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_virtual_chassis_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_virtual_chassis_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_virtual_chassis_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `domain` (string)
- `master` (integer)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_virtual_chassis_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `domain` (string)
- `master` (integer)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_virtual_chassis_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_virtual_device_contexts_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device` (array)
- `device__n` (array)
- `device_id` (array)
- `device_id__n` (array)
- `has_primary_ip` (boolean)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `identifier` (array)
- `identifier__empty` (boolean)
- `identifier__gt` (array)
- `identifier__gte` (array)
- `identifier__lt` (array)
- `identifier__lte` (array)
- `identifier__n` (array)
- `interface_id` (array)
- `interface_id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `primary_ip4` (array)
- `primary_ip4__n` (array)
- `primary_ip4_id` (array)
- `primary_ip4_id__n` (array)
- `primary_ip6` (array)
- `primary_ip6__n` (array)
- `primary_ip6_id` (array)
- `primary_ip6_id__n` (array)
- `q` (string)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `updated_by_request` (string)

### dcim_virtual_device_contexts_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `device` (other)
- `identifier` (integer)
- `tenant` (other)
- `primary_ip4` (other)
- `primary_ip6` (other)
- `status` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_virtual_device_contexts_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_virtual_device_contexts_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_virtual_device_contexts_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### dcim_virtual_device_contexts_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### dcim_virtual_device_contexts_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `device` (other)
- `identifier` (integer)
- `tenant` (other)
- `primary_ip4` (other)
- `primary_ip6` (other)
- `status` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_virtual_device_contexts_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `device` (other)
- `identifier` (integer)
- `tenant` (other)
- `primary_ip4` (other)
- `primary_ip6` (other)
- `status` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### dcim_virtual_device_contexts_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_bookmarks_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (string)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `limit` (integer)
- `object_id` (array)
- `object_id__empty` (boolean)
- `object_id__gt` (array)
- `object_id__gte` (array)
- `object_id__lt` (array)
- `object_id__lte` (array)
- `object_id__n` (array)
- `object_type` (string)
- `object_type__n` (string)
- `object_type_id` (array)
- `object_type_id__empty` (array)
- `object_type_id__gt` (array)
- `object_type_id__gte` (array)
- `object_type_id__lt` (array)
- `object_type_id__lte` (array)
- `object_type_id__n` (array)
- `offset` (integer)
- `ordering` (string)
- `user` (array)
- `user__n` (array)
- `user_id` (array)
- `user_id__n` (array)

### extras_bookmarks_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `object_type` (string)
- `object_id` (integer)
- `user` (other)

### extras_bookmarks_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_bookmarks_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_bookmarks_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_bookmarks_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_bookmarks_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_type` (string)
- `object_id` (integer)
- `user` (other)

### extras_bookmarks_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_type` (string)
- `object_id` (integer)
- `user` (other)

### extras_bookmarks_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_config_contexts_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `auto_sync_enabled` (boolean)
- `cluster_group` (array)
- `cluster_group__n` (array)
- `cluster_group_id` (array)
- `cluster_group_id__n` (array)
- `cluster_id` (array)
- `cluster_id__n` (array)
- `cluster_type` (array)
- `cluster_type__n` (array)
- `cluster_type_id` (array)
- `cluster_type_id__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `data_file_id` (array)
- `data_file_id__n` (array)
- `data_source_id` (array)
- `data_source_id__n` (array)
- `data_synced` (array)
- `data_synced__empty` (boolean)
- `data_synced__gt` (array)
- `data_synced__gte` (array)
- `data_synced__lt` (array)
- `data_synced__lte` (array)
- `data_synced__n` (array)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device_role` (array)
- `device_role__n` (array)
- `device_role_id` (array)
- `device_role_id__n` (array)
- `device_type_id` (array)
- `device_type_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `is_active` (boolean)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `platform` (array)
- `platform__n` (array)
- `platform_id` (array)
- `platform_id__n` (array)
- `q` (string)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `updated_by_request` (string)
- `weight` (array)
- `weight__empty` (boolean)
- `weight__gt` (array)
- `weight__gte` (array)
- `weight__lt` (array)
- `weight__lte` (array)
- `weight__n` (array)

### extras_config_contexts_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `weight` (integer)
- `description` (string)
- `is_active` (boolean)
- `regions` (array)
- `site_groups` (array)
- `sites` (array)
- `locations` (array)
- `device_types` (array)
- `roles` (array)
- `platforms` (array)
- `cluster_types` (array)
- `cluster_groups` (array)
- `clusters` (array)
- `tenant_groups` (array)
- `tenants` (array)
- `tags` (array)
- `data_source` (other)
- `data` (other)

### extras_config_contexts_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_config_contexts_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_config_contexts_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_config_contexts_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_config_contexts_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `weight` (integer)
- `description` (string)
- `is_active` (boolean)
- `regions` (array)
- `site_groups` (array)
- `sites` (array)
- `locations` (array)
- `device_types` (array)
- `roles` (array)
- `platforms` (array)
- `cluster_types` (array)
- `cluster_groups` (array)
- `clusters` (array)
- `tenant_groups` (array)
- `tenants` (array)
- `tags` (array)
- `data_source` (other)
- `data` (other)

### extras_config_contexts_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `weight` (integer)
- `description` (string)
- `is_active` (boolean)
- `regions` (array)
- `site_groups` (array)
- `sites` (array)
- `locations` (array)
- `device_types` (array)
- `roles` (array)
- `platforms` (array)
- `cluster_types` (array)
- `cluster_groups` (array)
- `clusters` (array)
- `tenant_groups` (array)
- `tenants` (array)
- `tags` (array)
- `data_source` (other)
- `data` (other)

### extras_config_contexts_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_config_contexts_sync_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `weight` (integer)
- `description` (string)
- `is_active` (boolean)
- `regions` (array)
- `site_groups` (array)
- `sites` (array)
- `locations` (array)
- `device_types` (array)
- `roles` (array)
- `platforms` (array)
- `cluster_types` (array)
- `cluster_groups` (array)
- `clusters` (array)
- `tenant_groups` (array)
- `tenants` (array)
- `tags` (array)
- `data_source` (other)
- `data` (other)

### extras_config_templates_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `as_attachment` (boolean)
- `auto_sync_enabled` (boolean)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `data_file_id` (array)
- `data_file_id__n` (array)
- `data_source_id` (array)
- `data_source_id__n` (array)
- `data_synced` (array)
- `data_synced__empty` (boolean)
- `data_synced__gt` (array)
- `data_synced__gte` (array)
- `data_synced__lt` (array)
- `data_synced__lte` (array)
- `data_synced__n` (array)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `file_extension` (array)
- `file_extension__empty` (boolean)
- `file_extension__ic` (array)
- `file_extension__ie` (array)
- `file_extension__iew` (array)
- `file_extension__isw` (array)
- `file_extension__n` (array)
- `file_extension__nic` (array)
- `file_extension__nie` (array)
- `file_extension__niew` (array)
- `file_extension__nisw` (array)
- `file_name` (array)
- `file_name__empty` (boolean)
- `file_name__ic` (array)
- `file_name__ie` (array)
- `file_name__iew` (array)
- `file_name__isw` (array)
- `file_name__n` (array)
- `file_name__nic` (array)
- `file_name__nie` (array)
- `file_name__niew` (array)
- `file_name__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `mime_type` (array)
- `mime_type__empty` (boolean)
- `mime_type__ic` (array)
- `mime_type__ie` (array)
- `mime_type__iew` (array)
- `mime_type__isw` (array)
- `mime_type__n` (array)
- `mime_type__nic` (array)
- `mime_type__nie` (array)
- `mime_type__niew` (array)
- `mime_type__nisw` (array)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### extras_config_templates_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `description` (string)
- `environment_params` (other)
- `template_code` (string)
- `mime_type` (string)
- `file_name` (string)
- `file_extension` (string)
- `as_attachment` (boolean)
- `data_source` (other)
- `tags` (array)

### extras_config_templates_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_config_templates_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_config_templates_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_config_templates_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_config_templates_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `environment_params` (other)
- `template_code` (string)
- `mime_type` (string)
- `file_name` (string)
- `file_extension` (string)
- `as_attachment` (boolean)
- `data_source` (other)
- `tags` (array)

### extras_config_templates_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `environment_params` (other)
- `template_code` (string)
- `mime_type` (string)
- `file_name` (string)
- `file_extension` (string)
- `as_attachment` (boolean)
- `data_source` (other)
- `tags` (array)

### extras_config_templates_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_config_templates_render_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `format` (string)
- `name` (string)
- `description` (string)
- `environment_params` (other)
- `template_code` (string)
- `mime_type` (string)
- `file_name` (string)
- `file_extension` (string)
- `as_attachment` (boolean)
- `data_source` (other)
- `tags` (array)

### extras_config_templates_sync_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `environment_params` (other)
- `template_code` (string)
- `mime_type` (string)
- `file_name` (string)
- `file_extension` (string)
- `as_attachment` (boolean)
- `data_source` (other)
- `tags` (array)

### extras_custom_field_choice_sets_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `base_choices` (string)
- `choice` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `order_alphabetically` (boolean)
- `ordering` (string)
- `q` (string)
- `updated_by_request` (string)

### extras_custom_field_choice_sets_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `description` (string)
- `base_choices` (string)
- `extra_choices` (array)
- `order_alphabetically` (boolean)

### extras_custom_field_choice_sets_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_custom_field_choice_sets_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_custom_field_choice_sets_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_custom_field_choice_sets_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_custom_field_choice_sets_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `base_choices` (string)
- `extra_choices` (array)
- `order_alphabetically` (boolean)

### extras_custom_field_choice_sets_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `base_choices` (string)
- `extra_choices` (array)
- `order_alphabetically` (boolean)

### extras_custom_field_choice_sets_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_custom_field_choice_sets_choices_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_custom_fields_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `choice_set` (array)
- `choice_set__n` (array)
- `choice_set_id` (array)
- `choice_set_id__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `filter_logic` (string)
- `group_name` (array)
- `group_name__empty` (boolean)
- `group_name__ic` (array)
- `group_name__ie` (array)
- `group_name__iew` (array)
- `group_name__isw` (array)
- `group_name__n` (array)
- `group_name__nic` (array)
- `group_name__nie` (array)
- `group_name__niew` (array)
- `group_name__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `is_cloneable` (boolean)
- `label` (array)
- `label__empty` (boolean)
- `label__ic` (array)
- `label__ie` (array)
- `label__iew` (array)
- `label__isw` (array)
- `label__n` (array)
- `label__nic` (array)
- `label__nie` (array)
- `label__niew` (array)
- `label__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `object_type` (string)
- `object_type__ic` (string)
- `object_type__ie` (string)
- `object_type__iew` (string)
- `object_type__isw` (string)
- `object_type__n` (string)
- `object_type__nic` (string)
- `object_type__nie` (string)
- `object_type__niew` (string)
- `object_type__nisw` (string)
- `object_type_id` (array)
- `object_type_id__n` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `related_object_type` (string)
- `related_object_type__n` (string)
- `related_object_type_id` (array)
- `related_object_type_id__n` (array)
- `required` (boolean)
- `search_weight` (array)
- `search_weight__empty` (boolean)
- `search_weight__gt` (array)
- `search_weight__gte` (array)
- `search_weight__lt` (array)
- `search_weight__lte` (array)
- `search_weight__n` (array)
- `type` (array)
- `type__empty` (boolean)
- `type__ic` (array)
- `type__ie` (array)
- `type__iew` (array)
- `type__isw` (array)
- `type__n` (array)
- `type__nic` (array)
- `type__nie` (array)
- `type__niew` (array)
- `type__nisw` (array)
- `ui_editable` (string)
- `ui_visible` (string)
- `unique` (boolean)
- `updated_by_request` (string)
- `validation_maximum` (array)
- `validation_maximum__empty` (boolean)
- `validation_maximum__gt` (array)
- `validation_maximum__gte` (array)
- `validation_maximum__lt` (array)
- `validation_maximum__lte` (array)
- `validation_maximum__n` (array)
- `validation_minimum` (array)
- `validation_minimum__empty` (boolean)
- `validation_minimum__gt` (array)
- `validation_minimum__gte` (array)
- `validation_minimum__lt` (array)
- `validation_minimum__lte` (array)
- `validation_minimum__n` (array)
- `validation_regex` (array)
- `validation_regex__empty` (boolean)
- `validation_regex__ic` (array)
- `validation_regex__ie` (array)
- `validation_regex__iew` (array)
- `validation_regex__isw` (array)
- `validation_regex__n` (array)
- `validation_regex__nic` (array)
- `validation_regex__nie` (array)
- `validation_regex__niew` (array)
- `validation_regex__nisw` (array)
- `weight` (array)
- `weight__empty` (boolean)
- `weight__gt` (array)
- `weight__gte` (array)
- `weight__lt` (array)
- `weight__lte` (array)
- `weight__n` (array)

### extras_custom_fields_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `object_types` (array)
- `type` (string)
- `related_object_type` (string)
- `name` (string)
- `label` (string)
- `group_name` (string)
- `description` (string)
- `required` (boolean)
- `unique` (boolean)
- `search_weight` (integer)
- `filter_logic` (string)
- `ui_visible` (string)
- `ui_editable` (string)
- `is_cloneable` (boolean)
- `default` (other)
- `related_object_filter` (other)
- `weight` (integer)
- `validation_minimum` (integer)
- `validation_maximum` (integer)
- `validation_regex` (string)
- `choice_set` (other)
- `comments` (string)

### extras_custom_fields_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_custom_fields_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_custom_fields_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_custom_fields_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_custom_fields_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_types` (array)
- `type` (string)
- `related_object_type` (string)
- `name` (string)
- `label` (string)
- `group_name` (string)
- `description` (string)
- `required` (boolean)
- `unique` (boolean)
- `search_weight` (integer)
- `filter_logic` (string)
- `ui_visible` (string)
- `ui_editable` (string)
- `is_cloneable` (boolean)
- `default` (other)
- `related_object_filter` (other)
- `weight` (integer)
- `validation_minimum` (integer)
- `validation_maximum` (integer)
- `validation_regex` (string)
- `choice_set` (other)
- `comments` (string)

### extras_custom_fields_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_types` (array)
- `type` (string)
- `related_object_type` (string)
- `name` (string)
- `label` (string)
- `group_name` (string)
- `description` (string)
- `required` (boolean)
- `unique` (boolean)
- `search_weight` (integer)
- `filter_logic` (string)
- `ui_visible` (string)
- `ui_editable` (string)
- `is_cloneable` (boolean)
- `default` (other)
- `related_object_filter` (other)
- `weight` (integer)
- `validation_minimum` (integer)
- `validation_maximum` (integer)
- `validation_regex` (string)
- `choice_set` (other)
- `comments` (string)

### extras_custom_fields_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_custom_links_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `button_class` (string)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `enabled` (boolean)
- `group_name` (array)
- `group_name__empty` (boolean)
- `group_name__ic` (array)
- `group_name__ie` (array)
- `group_name__iew` (array)
- `group_name__isw` (array)
- `group_name__n` (array)
- `group_name__nic` (array)
- `group_name__nie` (array)
- `group_name__niew` (array)
- `group_name__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `link_text` (string)
- `link_text__ic` (string)
- `link_text__ie` (string)
- `link_text__iew` (string)
- `link_text__isw` (string)
- `link_text__n` (string)
- `link_text__nic` (string)
- `link_text__nie` (string)
- `link_text__niew` (string)
- `link_text__nisw` (string)
- `link_url` (string)
- `link_url__ic` (string)
- `link_url__ie` (string)
- `link_url__iew` (string)
- `link_url__isw` (string)
- `link_url__n` (string)
- `link_url__nic` (string)
- `link_url__nie` (string)
- `link_url__niew` (string)
- `link_url__nisw` (string)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `new_window` (boolean)
- `object_type` (string)
- `object_type__ic` (string)
- `object_type__ie` (string)
- `object_type__iew` (string)
- `object_type__isw` (string)
- `object_type__n` (string)
- `object_type__nic` (string)
- `object_type__nie` (string)
- `object_type__niew` (string)
- `object_type__nisw` (string)
- `object_type_id` (array)
- `object_type_id__n` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `updated_by_request` (string)
- `weight` (array)
- `weight__empty` (boolean)
- `weight__gt` (array)
- `weight__gte` (array)
- `weight__lt` (array)
- `weight__lte` (array)
- `weight__n` (array)

### extras_custom_links_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `object_types` (array)
- `name` (string)
- `enabled` (boolean)
- `link_text` (string)
- `link_url` (string)
- `weight` (integer)
- `group_name` (string)
- `button_class` (string)
- `new_window` (boolean)

### extras_custom_links_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_custom_links_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_custom_links_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_custom_links_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_custom_links_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_types` (array)
- `name` (string)
- `enabled` (boolean)
- `link_text` (string)
- `link_url` (string)
- `weight` (integer)
- `group_name` (string)
- `button_class` (string)
- `new_window` (boolean)

### extras_custom_links_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_types` (array)
- `name` (string)
- `enabled` (boolean)
- `link_text` (string)
- `link_url` (string)
- `weight` (integer)
- `group_name` (string)
- `button_class` (string)
- `new_window` (boolean)

### extras_custom_links_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_dashboard_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_dashboard_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `layout` (other)
- `config` (other)

### extras_dashboard_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `layout` (other)
- `config` (other)

### extras_dashboard_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_event_rules_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `action_object_id` (array)
- `action_object_id__empty` (array)
- `action_object_id__gt` (array)
- `action_object_id__gte` (array)
- `action_object_id__lt` (array)
- `action_object_id__lte` (array)
- `action_object_id__n` (array)
- `action_object_type` (string)
- `action_object_type__n` (string)
- `action_type` (array)
- `action_type__empty` (boolean)
- `action_type__ic` (array)
- `action_type__ie` (array)
- `action_type__iew` (array)
- `action_type__isw` (array)
- `action_type__n` (array)
- `action_type__nic` (array)
- `action_type__nie` (array)
- `action_type__niew` (array)
- `action_type__nisw` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `enabled` (boolean)
- `event_type` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `object_type` (string)
- `object_type__ic` (string)
- `object_type__ie` (string)
- `object_type__iew` (string)
- `object_type__isw` (string)
- `object_type__n` (string)
- `object_type__nic` (string)
- `object_type__nie` (string)
- `object_type__niew` (string)
- `object_type__nisw` (string)
- `object_type_id` (array)
- `object_type_id__n` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### extras_event_rules_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `object_types` (array)
- `name` (string)
- `enabled` (boolean)
- `event_types` (array)
- `conditions` (other)
- `action_type` (string)
- `action_object_type` (string)
- `action_object_id` (integer)
- `description` (string)
- `custom_fields` (object)
- `tags` (array)

### extras_event_rules_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_event_rules_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_event_rules_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_event_rules_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_event_rules_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_types` (array)
- `name` (string)
- `enabled` (boolean)
- `event_types` (array)
- `conditions` (other)
- `action_type` (string)
- `action_object_type` (string)
- `action_object_id` (integer)
- `description` (string)
- `custom_fields` (object)
- `tags` (array)

### extras_event_rules_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_types` (array)
- `name` (string)
- `enabled` (boolean)
- `event_types` (array)
- `conditions` (other)
- `action_type` (string)
- `action_object_type` (string)
- `action_object_id` (integer)
- `description` (string)
- `custom_fields` (object)
- `tags` (array)

### extras_event_rules_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_export_templates_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `as_attachment` (boolean)
- `auto_sync_enabled` (boolean)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `data_file_id` (array)
- `data_file_id__n` (array)
- `data_source_id` (array)
- `data_source_id__n` (array)
- `data_synced` (array)
- `data_synced__empty` (boolean)
- `data_synced__gt` (array)
- `data_synced__gte` (array)
- `data_synced__lt` (array)
- `data_synced__lte` (array)
- `data_synced__n` (array)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `file_extension` (array)
- `file_extension__empty` (boolean)
- `file_extension__ic` (array)
- `file_extension__ie` (array)
- `file_extension__iew` (array)
- `file_extension__isw` (array)
- `file_extension__n` (array)
- `file_extension__nic` (array)
- `file_extension__nie` (array)
- `file_extension__niew` (array)
- `file_extension__nisw` (array)
- `file_name` (array)
- `file_name__empty` (boolean)
- `file_name__ic` (array)
- `file_name__ie` (array)
- `file_name__iew` (array)
- `file_name__isw` (array)
- `file_name__n` (array)
- `file_name__nic` (array)
- `file_name__nie` (array)
- `file_name__niew` (array)
- `file_name__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `mime_type` (array)
- `mime_type__empty` (boolean)
- `mime_type__ic` (array)
- `mime_type__ie` (array)
- `mime_type__iew` (array)
- `mime_type__isw` (array)
- `mime_type__n` (array)
- `mime_type__nic` (array)
- `mime_type__nie` (array)
- `mime_type__niew` (array)
- `mime_type__nisw` (array)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `object_type` (string)
- `object_type__ic` (string)
- `object_type__ie` (string)
- `object_type__iew` (string)
- `object_type__isw` (string)
- `object_type__n` (string)
- `object_type__nic` (string)
- `object_type__nie` (string)
- `object_type__niew` (string)
- `object_type__nisw` (string)
- `object_type_id` (array)
- `object_type_id__n` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `updated_by_request` (string)

### extras_export_templates_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `object_types` (array)
- `name` (string)
- `description` (string)
- `environment_params` (other)
- `template_code` (string)
- `mime_type` (string)
- `file_name` (string)
- `file_extension` (string)
- `as_attachment` (boolean)
- `data_source` (other)

### extras_export_templates_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_export_templates_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_export_templates_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_export_templates_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_export_templates_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_types` (array)
- `name` (string)
- `description` (string)
- `environment_params` (other)
- `template_code` (string)
- `mime_type` (string)
- `file_name` (string)
- `file_extension` (string)
- `as_attachment` (boolean)
- `data_source` (other)

### extras_export_templates_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_types` (array)
- `name` (string)
- `description` (string)
- `environment_params` (other)
- `template_code` (string)
- `mime_type` (string)
- `file_name` (string)
- `file_extension` (string)
- `as_attachment` (boolean)
- `data_source` (other)

### extras_export_templates_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_export_templates_sync_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_types` (array)
- `name` (string)
- `description` (string)
- `environment_params` (other)
- `template_code` (string)
- `mime_type` (string)
- `file_name` (string)
- `file_extension` (string)
- `as_attachment` (boolean)
- `data_source` (other)

### extras_image_attachments_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `image_height` (array)
- `image_height__empty` (boolean)
- `image_height__gt` (array)
- `image_height__gte` (array)
- `image_height__lt` (array)
- `image_height__lte` (array)
- `image_height__n` (array)
- `image_width` (array)
- `image_width__empty` (boolean)
- `image_width__gt` (array)
- `image_width__gte` (array)
- `image_width__lt` (array)
- `image_width__lte` (array)
- `image_width__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `object_id` (array)
- `object_id__empty` (boolean)
- `object_id__gt` (array)
- `object_id__gte` (array)
- `object_id__lt` (array)
- `object_id__lte` (array)
- `object_id__n` (array)
- `object_type` (string)
- `object_type__n` (string)
- `object_type_id` (integer)
- `object_type_id__n` (integer)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `updated_by_request` (string)

### extras_image_attachments_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `object_type` (string)
- `object_id` (integer)
- `name` (string)
- `image` (string)

### extras_image_attachments_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_image_attachments_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_image_attachments_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_image_attachments_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_image_attachments_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_type` (string)
- `object_id` (integer)
- `name` (string)
- `image` (string)

### extras_image_attachments_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_type` (string)
- `object_id` (integer)
- `name` (string)
- `image` (string)

### extras_image_attachments_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_journal_entries_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `assigned_object_id` (array)
- `assigned_object_id__empty` (boolean)
- `assigned_object_id__gt` (array)
- `assigned_object_id__gte` (array)
- `assigned_object_id__lt` (array)
- `assigned_object_id__lte` (array)
- `assigned_object_id__n` (array)
- `assigned_object_type` (string)
- `assigned_object_type__n` (string)
- `assigned_object_type_id` (array)
- `assigned_object_type_id__n` (array)
- `created_after` (string)
- `created_before` (string)
- `created_by` (array)
- `created_by__n` (array)
- `created_by_id` (array)
- `created_by_id__n` (array)
- `created_by_request` (string)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `kind` (array)
- `kind__empty` (boolean)
- `kind__ic` (array)
- `kind__ie` (array)
- `kind__iew` (array)
- `kind__isw` (array)
- `kind__n` (array)
- `kind__nic` (array)
- `kind__nie` (array)
- `kind__niew` (array)
- `kind__nisw` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### extras_journal_entries_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `assigned_object_type` (string)
- `assigned_object_id` (integer)
- `created_by` (integer)
- `kind` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### extras_journal_entries_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_journal_entries_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_journal_entries_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_journal_entries_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_journal_entries_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `assigned_object_type` (string)
- `assigned_object_id` (integer)
- `created_by` (integer)
- `kind` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### extras_journal_entries_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `assigned_object_type` (string)
- `assigned_object_id` (integer)
- `created_by` (integer)
- `kind` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### extras_journal_entries_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_notification_groups_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `ordering` (string)

### extras_notification_groups_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `description` (string)
- `groups` (array)
- `users` (array)

### extras_notification_groups_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_notification_groups_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_notification_groups_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_notification_groups_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_notification_groups_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `groups` (array)
- `users` (array)

### extras_notification_groups_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `groups` (array)
- `users` (array)

### extras_notification_groups_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_notifications_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `ordering` (string)

### extras_notifications_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `object_type` (string)
- `object_id` (integer)
- `user` (other)
- `read` (string)
- `event_type` (string)

### extras_notifications_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_notifications_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_notifications_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_notifications_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_notifications_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_type` (string)
- `object_id` (integer)
- `user` (other)
- `read` (string)
- `event_type` (string)

### extras_notifications_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_type` (string)
- `object_id` (integer)
- `user` (other)
- `read` (string)
- `event_type` (string)

### extras_notifications_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_object_types_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `app_label` (string)
- `id` (integer)
- `limit` (integer)
- `model` (string)
- `offset` (integer)
- `ordering` (string)
- `q` (string)

### extras_object_types_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_saved_filters_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `enabled` (boolean)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `object_type` (string)
- `object_type__ic` (string)
- `object_type__ie` (string)
- `object_type__iew` (string)
- `object_type__isw` (string)
- `object_type__n` (string)
- `object_type__nic` (string)
- `object_type__nie` (string)
- `object_type__niew` (string)
- `object_type__nisw` (string)
- `object_type_id` (array)
- `object_type_id__n` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `shared` (boolean)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `updated_by_request` (string)
- `usable` (boolean)
- `user` (array)
- `user__n` (array)
- `user_id` (array)
- `user_id__n` (array)
- `weight` (array)
- `weight__empty` (boolean)
- `weight__gt` (array)
- `weight__gte` (array)
- `weight__lt` (array)
- `weight__lte` (array)
- `weight__n` (array)

### extras_saved_filters_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `object_types` (array)
- `name` (string)
- `slug` (string)
- `description` (string)
- `user` (integer)
- `weight` (integer)
- `enabled` (boolean)
- `shared` (boolean)
- `parameters` (other)

### extras_saved_filters_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_saved_filters_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_saved_filters_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_saved_filters_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_saved_filters_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_types` (array)
- `name` (string)
- `slug` (string)
- `description` (string)
- `user` (integer)
- `weight` (integer)
- `enabled` (boolean)
- `shared` (boolean)
- `parameters` (other)

### extras_saved_filters_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_types` (array)
- `name` (string)
- `slug` (string)
- `description` (string)
- `user` (integer)
- `weight` (integer)
- `enabled` (boolean)
- `shared` (boolean)
- `parameters` (other)

### extras_saved_filters_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_scripts_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `is_executable` (boolean)
- `limit` (integer)
- `module_id` (array)
- `module_id__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)

### extras_scripts_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_scripts_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (string)

### extras_scripts_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (string)
- `data` (other)
- `commit` (boolean)
- `schedule_at` (string)
- `interval` (integer)

### extras_scripts_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (string)
- `data` (other)
- `commit` (boolean)
- `schedule_at` (string)
- `interval` (integer)

### extras_scripts_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (string)

### extras_subscriptions_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `ordering` (string)

### extras_subscriptions_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `object_type` (string)
- `object_id` (integer)
- `user` (other)

### extras_subscriptions_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_subscriptions_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_subscriptions_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_subscriptions_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_subscriptions_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_type` (string)
- `object_id` (integer)
- `user` (other)

### extras_subscriptions_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_type` (string)
- `object_id` (integer)
- `user` (other)

### extras_subscriptions_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_table_configs_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `enabled` (boolean)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `object_type` (string)
- `object_type__n` (string)
- `object_type_id` (array)
- `object_type_id__n` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `shared` (boolean)
- `table` (array)
- `table__empty` (boolean)
- `table__ic` (array)
- `table__ie` (array)
- `table__iew` (array)
- `table__isw` (array)
- `table__n` (array)
- `table__nic` (array)
- `table__nie` (array)
- `table__niew` (array)
- `table__nisw` (array)
- `updated_by_request` (string)
- `usable` (boolean)
- `user` (array)
- `user__n` (array)
- `user_id` (array)
- `user_id__n` (array)
- `weight` (array)
- `weight__empty` (boolean)
- `weight__gt` (array)
- `weight__gte` (array)
- `weight__lt` (array)
- `weight__lte` (array)
- `weight__n` (array)

### extras_table_configs_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `object_type` (string)
- `table` (string)
- `name` (string)
- `description` (string)
- `user` (integer)
- `weight` (integer)
- `enabled` (boolean)
- `shared` (boolean)
- `columns` (array)
- `ordering` (array)

### extras_table_configs_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_table_configs_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_table_configs_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_table_configs_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_table_configs_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_type` (string)
- `table` (string)
- `name` (string)
- `description` (string)
- `user` (integer)
- `weight` (integer)
- `enabled` (boolean)
- `shared` (boolean)
- `columns` (array)
- `ordering` (array)

### extras_table_configs_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_type` (string)
- `table` (string)
- `name` (string)
- `description` (string)
- `user` (integer)
- `weight` (integer)
- `enabled` (boolean)
- `shared` (boolean)
- `columns` (array)
- `ordering` (array)

### extras_table_configs_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_tagged_objects_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `limit` (integer)
- `object_id` (array)
- `object_id__empty` (boolean)
- `object_id__gt` (array)
- `object_id__gte` (array)
- `object_id__lt` (array)
- `object_id__lte` (array)
- `object_id__n` (array)
- `object_type` (string)
- `object_type__n` (string)
- `object_type_id` (array)
- `object_type_id__n` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)

### extras_tagged_objects_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_tags_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `color` (array)
- `color__empty` (boolean)
- `color__ic` (array)
- `color__ie` (array)
- `color__iew` (array)
- `color__isw` (array)
- `color__n` (array)
- `color__nic` (array)
- `color__nie` (array)
- `color__niew` (array)
- `color__nisw` (array)
- `content_type` (array)
- `content_type_id` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `for_object_type_id` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `object_types` (array)
- `object_types__n` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `updated_by_request` (string)
- `weight` (array)
- `weight__empty` (boolean)
- `weight__gt` (array)
- `weight__gte` (array)
- `weight__lt` (array)
- `weight__lte` (array)
- `weight__n` (array)

### extras_tags_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `color` (string)
- `description` (string)
- `weight` (integer)
- `object_types` (array)

### extras_tags_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_tags_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_tags_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_tags_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_tags_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `color` (string)
- `description` (string)
- `weight` (integer)
- `object_types` (array)

### extras_tags_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `color` (string)
- `description` (string)
- `weight` (integer)
- `object_types` (array)

### extras_tags_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_webhooks_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `ca_file_path` (array)
- `ca_file_path__empty` (boolean)
- `ca_file_path__ic` (array)
- `ca_file_path__ie` (array)
- `ca_file_path__iew` (array)
- `ca_file_path__isw` (array)
- `ca_file_path__n` (array)
- `ca_file_path__nic` (array)
- `ca_file_path__nie` (array)
- `ca_file_path__niew` (array)
- `ca_file_path__nisw` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `http_content_type` (array)
- `http_content_type__empty` (boolean)
- `http_content_type__ic` (array)
- `http_content_type__ie` (array)
- `http_content_type__iew` (array)
- `http_content_type__isw` (array)
- `http_content_type__n` (array)
- `http_content_type__nic` (array)
- `http_content_type__nie` (array)
- `http_content_type__niew` (array)
- `http_content_type__nisw` (array)
- `http_method` (array)
- `http_method__empty` (boolean)
- `http_method__ic` (array)
- `http_method__ie` (array)
- `http_method__iew` (array)
- `http_method__isw` (array)
- `http_method__n` (array)
- `http_method__nic` (array)
- `http_method__nie` (array)
- `http_method__niew` (array)
- `http_method__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `payload_url` (array)
- `q` (string)
- `secret` (array)
- `secret__empty` (boolean)
- `secret__ic` (array)
- `secret__ie` (array)
- `secret__iew` (array)
- `secret__isw` (array)
- `secret__n` (array)
- `secret__nic` (array)
- `secret__nie` (array)
- `secret__niew` (array)
- `secret__nisw` (array)
- `ssl_verification` (boolean)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### extras_webhooks_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `description` (string)
- `payload_url` (string)
- `http_method` (string)
- `http_content_type` (string)
- `additional_headers` (string)
- `body_template` (string)
- `secret` (string)
- `ssl_verification` (boolean)
- `ca_file_path` (string)
- `custom_fields` (object)
- `tags` (array)

### extras_webhooks_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_webhooks_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_webhooks_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### extras_webhooks_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### extras_webhooks_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `payload_url` (string)
- `http_method` (string)
- `http_content_type` (string)
- `additional_headers` (string)
- `body_template` (string)
- `secret` (string)
- `ssl_verification` (boolean)
- `ca_file_path` (string)
- `custom_fields` (object)
- `tags` (array)

### extras_webhooks_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `payload_url` (string)
- `http_method` (string)
- `http_content_type` (string)
- `additional_headers` (string)
- `body_template` (string)
- `secret` (string)
- `ssl_verification` (boolean)
- `ca_file_path` (string)
- `custom_fields` (object)
- `tags` (array)

### extras_webhooks_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_aggregates_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `date_added` (array)
- `date_added__empty` (boolean)
- `date_added__gt` (array)
- `date_added__gte` (array)
- `date_added__lt` (array)
- `date_added__lte` (array)
- `date_added__n` (array)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `family` (number)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `offset` (integer)
- `ordering` (string)
- `prefix` (string)
- `q` (string)
- `rir` (array)
- `rir__n` (array)
- `rir_id` (array)
- `rir_id__n` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `updated_by_request` (string)

### ipam_aggregates_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `prefix` (string)
- `rir` (other)
- `tenant` (other)
- `date_added` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_aggregates_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_aggregates_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_aggregates_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_aggregates_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_aggregates_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `prefix` (string)
- `rir` (other)
- `tenant` (other)
- `date_added` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_aggregates_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `prefix` (string)
- `rir` (other)
- `tenant` (other)
- `date_added` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_aggregates_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_asn_ranges_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `end` (array)
- `end__empty` (boolean)
- `end__gt` (array)
- `end__gte` (array)
- `end__lt` (array)
- `end__lte` (array)
- `end__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `rir` (array)
- `rir__n` (array)
- `rir_id` (array)
- `rir_id__n` (array)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `start` (array)
- `start__empty` (boolean)
- `start__gt` (array)
- `start__gte` (array)
- `start__lt` (array)
- `start__lte` (array)
- `start__n` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `updated_by_request` (string)

### ipam_asn_ranges_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `rir` (other)
- `start` (integer)
- `end` (integer)
- `tenant` (other)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_asn_ranges_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_asn_ranges_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_asn_ranges_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_asn_ranges_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_asn_ranges_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `rir` (other)
- `start` (integer)
- `end` (integer)
- `tenant` (other)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_asn_ranges_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `rir` (other)
- `start` (integer)
- `end` (integer)
- `tenant` (other)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_asn_ranges_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_asn_ranges_available_asns_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_asn_ranges_available_asns_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_asns_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `asn` (array)
- `asn__empty` (boolean)
- `asn__gt` (array)
- `asn__gte` (array)
- `asn__lt` (array)
- `asn__lte` (array)
- `asn__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `offset` (integer)
- `ordering` (string)
- `provider` (array)
- `provider__n` (array)
- `provider_id` (array)
- `provider_id__n` (array)
- `q` (string)
- `rir` (array)
- `rir__n` (array)
- `rir_id` (array)
- `rir_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `updated_by_request` (string)

### ipam_asns_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `asn` (integer)
- `rir` (other)
- `tenant` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_asns_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_asns_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_asns_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_asns_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_asns_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `asn` (integer)
- `rir` (other)
- `tenant` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_asns_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `asn` (integer)
- `rir` (other)
- `tenant` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_asns_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_fhrp_group_assignments_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `device` (array)
- `device_id` (array)
- `group_id` (array)
- `group_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `interface_id` (array)
- `interface_id__empty` (boolean)
- `interface_id__gt` (array)
- `interface_id__gte` (array)
- `interface_id__lt` (array)
- `interface_id__lte` (array)
- `interface_id__n` (array)
- `interface_type` (string)
- `interface_type__n` (string)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `offset` (integer)
- `ordering` (string)
- `priority` (array)
- `priority__empty` (boolean)
- `priority__gt` (array)
- `priority__gte` (array)
- `priority__lt` (array)
- `priority__lte` (array)
- `priority__n` (array)
- `updated_by_request` (string)
- `virtual_machine` (array)
- `virtual_machine_id` (array)

### ipam_fhrp_group_assignments_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `group` (other)
- `interface_type` (string)
- `interface_id` (integer)
- `priority` (integer)

### ipam_fhrp_group_assignments_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_fhrp_group_assignments_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_fhrp_group_assignments_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_fhrp_group_assignments_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_fhrp_group_assignments_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `group` (other)
- `interface_type` (string)
- `interface_id` (integer)
- `priority` (integer)

### ipam_fhrp_group_assignments_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `group` (other)
- `interface_type` (string)
- `interface_id` (integer)
- `priority` (integer)

### ipam_fhrp_group_assignments_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_fhrp_groups_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `auth_key` (array)
- `auth_key__empty` (boolean)
- `auth_key__ic` (array)
- `auth_key__ie` (array)
- `auth_key__iew` (array)
- `auth_key__isw` (array)
- `auth_key__n` (array)
- `auth_key__nic` (array)
- `auth_key__nie` (array)
- `auth_key__niew` (array)
- `auth_key__nisw` (array)
- `auth_type` (array)
- `auth_type__empty` (boolean)
- `auth_type__ic` (array)
- `auth_type__ie` (array)
- `auth_type__iew` (array)
- `auth_type__isw` (array)
- `auth_type__n` (array)
- `auth_type__nic` (array)
- `auth_type__nie` (array)
- `auth_type__niew` (array)
- `auth_type__nisw` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `group_id` (array)
- `group_id__empty` (boolean)
- `group_id__gt` (array)
- `group_id__gte` (array)
- `group_id__lt` (array)
- `group_id__lte` (array)
- `group_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `protocol` (array)
- `protocol__empty` (boolean)
- `protocol__ic` (array)
- `protocol__ie` (array)
- `protocol__iew` (array)
- `protocol__isw` (array)
- `protocol__n` (array)
- `protocol__nic` (array)
- `protocol__nie` (array)
- `protocol__niew` (array)
- `protocol__nisw` (array)
- `q` (string)
- `related_ip` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### ipam_fhrp_groups_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `protocol` (string)
- `group_id` (integer)
- `auth_type` (string)
- `auth_key` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_fhrp_groups_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_fhrp_groups_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_fhrp_groups_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_fhrp_groups_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_fhrp_groups_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `protocol` (string)
- `group_id` (integer)
- `auth_type` (string)
- `auth_key` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_fhrp_groups_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `protocol` (string)
- `group_id` (integer)
- `auth_type` (string)
- `auth_key` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_fhrp_groups_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_ip_addresses_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `address` (array)
- `assigned` (boolean)
- `assigned_object_id` (array)
- `assigned_object_id__empty` (boolean)
- `assigned_object_id__gt` (array)
- `assigned_object_id__gte` (array)
- `assigned_object_id__lt` (array)
- `assigned_object_id__lte` (array)
- `assigned_object_id__n` (array)
- `assigned_object_type` (integer)
- `assigned_object_type__n` (integer)
- `assigned_to_interface` (boolean)
- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device` (array)
- `device_id` (array)
- `dns_name` (array)
- `dns_name__empty` (boolean)
- `dns_name__ic` (array)
- `dns_name__ie` (array)
- `dns_name__iew` (array)
- `dns_name__isw` (array)
- `dns_name__n` (array)
- `dns_name__nic` (array)
- `dns_name__nie` (array)
- `dns_name__niew` (array)
- `dns_name__nisw` (array)
- `family` (number)
- `fhrpgroup_id` (array)
- `fhrpgroup_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `interface` (array)
- `interface__n` (array)
- `interface_id` (array)
- `interface_id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `mask_length` (array)
- `mask_length__gte` (number)
- `mask_length__lte` (number)
- `modified_by_request` (string)
- `nat_inside_id` (array)
- `nat_inside_id__n` (array)
- `offset` (integer)
- `ordering` (string)
- `parent` (array)
- `present_in_vrf` (string)
- `present_in_vrf_id` (string)
- `q` (string)
- `role` (array)
- `role__empty` (boolean)
- `role__ic` (array)
- `role__ie` (array)
- `role__iew` (array)
- `role__isw` (array)
- `role__n` (array)
- `role__nic` (array)
- `role__nie` (array)
- `role__niew` (array)
- `role__nisw` (array)
- `service_id` (array)
- `service_id__n` (array)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `updated_by_request` (string)
- `virtual_machine` (array)
- `virtual_machine_id` (array)
- `vminterface` (array)
- `vminterface__n` (array)
- `vminterface_id` (array)
- `vminterface_id__n` (array)
- `vrf` (array)
- `vrf__n` (array)
- `vrf_id` (array)
- `vrf_id__n` (array)

### ipam_ip_addresses_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `address` (string)
- `vrf` (other)
- `tenant` (other)
- `status` (string)
- `role` (string)
- `assigned_object_type` (string)
- `assigned_object_id` (integer)
- `nat_inside` (integer)
- `dns_name` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_ip_addresses_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_ip_addresses_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_ip_addresses_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_ip_addresses_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_ip_addresses_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `address` (string)
- `vrf` (other)
- `tenant` (other)
- `status` (string)
- `role` (string)
- `assigned_object_type` (string)
- `assigned_object_id` (integer)
- `nat_inside` (integer)
- `dns_name` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_ip_addresses_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `address` (string)
- `vrf` (other)
- `tenant` (other)
- `status` (string)
- `role` (string)
- `assigned_object_type` (string)
- `assigned_object_id` (integer)
- `nat_inside` (integer)
- `dns_name` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_ip_addresses_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_ip_ranges_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `contains` (string)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `end_address` (array)
- `family` (number)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `mark_populated` (boolean)
- `mark_utilized` (boolean)
- `modified_by_request` (string)
- `offset` (integer)
- `ordering` (string)
- `parent` (array)
- `q` (string)
- `role` (array)
- `role__n` (array)
- `role_id` (array)
- `role_id__n` (array)
- `size` (array)
- `size__empty` (boolean)
- `size__gt` (array)
- `size__gte` (array)
- `size__lt` (array)
- `size__lte` (array)
- `size__n` (array)
- `start_address` (array)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `updated_by_request` (string)
- `vrf` (array)
- `vrf__n` (array)
- `vrf_id` (array)
- `vrf_id__n` (array)

### ipam_ip_ranges_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `start_address` (string)
- `end_address` (string)
- `vrf` (other)
- `tenant` (other)
- `status` (string)
- `role` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)
- `mark_populated` (boolean)
- `mark_utilized` (boolean)

### ipam_ip_ranges_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_ip_ranges_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_ip_ranges_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_ip_ranges_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_ip_ranges_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `start_address` (string)
- `end_address` (string)
- `vrf` (other)
- `tenant` (other)
- `status` (string)
- `role` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)
- `mark_populated` (boolean)
- `mark_utilized` (boolean)

### ipam_ip_ranges_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `start_address` (string)
- `end_address` (string)
- `vrf` (other)
- `tenant` (other)
- `status` (string)
- `role` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)
- `mark_populated` (boolean)
- `mark_utilized` (boolean)

### ipam_ip_ranges_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_ip_ranges_available_ips_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_ip_ranges_available_ips_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_prefixes_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `children` (array)
- `children__empty` (array)
- `children__gt` (array)
- `children__gte` (array)
- `children__lt` (array)
- `children__lte` (array)
- `children__n` (array)
- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `contains` (string)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `depth` (array)
- `depth__empty` (array)
- `depth__gt` (array)
- `depth__gte` (array)
- `depth__lt` (array)
- `depth__lte` (array)
- `depth__n` (array)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `family` (number)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `is_pool` (boolean)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `mark_utilized` (boolean)
- `mask_length` (array)
- `mask_length__gte` (number)
- `mask_length__lte` (number)
- `modified_by_request` (string)
- `offset` (integer)
- `ordering` (string)
- `prefix` (array)
- `present_in_vrf` (string)
- `present_in_vrf_id` (string)
- `q` (string)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `role` (array)
- `role__n` (array)
- `role_id` (array)
- `role_id__n` (array)
- `scope_id` (array)
- `scope_id__empty` (boolean)
- `scope_id__gt` (array)
- `scope_id__gte` (array)
- `scope_id__lt` (array)
- `scope_id__lte` (array)
- `scope_id__n` (array)
- `scope_type` (string)
- `scope_type__n` (string)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `updated_by_request` (string)
- `vlan_group` (array)
- `vlan_group__n` (array)
- `vlan_group_id` (array)
- `vlan_group_id__n` (array)
- `vlan_id` (array)
- `vlan_id__n` (array)
- `vlan_vid` (integer)
- `vlan_vid__empty` (integer)
- `vlan_vid__gt` (integer)
- `vlan_vid__gte` (integer)
- `vlan_vid__lt` (integer)
- `vlan_vid__lte` (integer)
- `vlan_vid__n` (integer)
- `vrf` (array)
- `vrf__n` (array)
- `vrf_id` (array)
- `vrf_id__n` (array)
- `within` (string)
- `within_include` (string)

### ipam_prefixes_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `prefix` (string)
- `vrf` (other)
- `scope_type` (string)
- `scope_id` (integer)
- `tenant` (other)
- `vlan` (other)
- `status` (string)
- `role` (other)
- `is_pool` (boolean)
- `mark_utilized` (boolean)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_prefixes_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_prefixes_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_prefixes_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_prefixes_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_prefixes_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `prefix` (string)
- `vrf` (other)
- `scope_type` (string)
- `scope_id` (integer)
- `tenant` (other)
- `vlan` (other)
- `status` (string)
- `role` (other)
- `is_pool` (boolean)
- `mark_utilized` (boolean)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_prefixes_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `prefix` (string)
- `vrf` (other)
- `scope_type` (string)
- `scope_id` (integer)
- `tenant` (other)
- `vlan` (other)
- `status` (string)
- `role` (other)
- `is_pool` (boolean)
- `mark_utilized` (boolean)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_prefixes_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_prefixes_available_ips_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_prefixes_available_ips_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_prefixes_available_prefixes_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_prefixes_available_prefixes_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_rirs_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `is_private` (boolean)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### ipam_rirs_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `is_private` (boolean)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_rirs_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_rirs_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_rirs_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_rirs_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_rirs_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `is_private` (boolean)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_rirs_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `is_private` (boolean)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_rirs_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_roles_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)
- `weight` (array)
- `weight__empty` (boolean)
- `weight__gt` (array)
- `weight__gte` (array)
- `weight__lt` (array)
- `weight__lte` (array)
- `weight__n` (array)

### ipam_roles_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `weight` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_roles_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_roles_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_roles_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_roles_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_roles_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `weight` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_roles_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `weight` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_roles_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_route_targets_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `exporting_l2vpn` (array)
- `exporting_l2vpn__n` (array)
- `exporting_l2vpn_id` (array)
- `exporting_l2vpn_id__n` (array)
- `exporting_vrf` (array)
- `exporting_vrf__n` (array)
- `exporting_vrf_id` (array)
- `exporting_vrf_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `importing_l2vpn` (array)
- `importing_l2vpn__n` (array)
- `importing_l2vpn_id` (array)
- `importing_l2vpn_id__n` (array)
- `importing_vrf` (array)
- `importing_vrf__n` (array)
- `importing_vrf_id` (array)
- `importing_vrf_id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `updated_by_request` (string)

### ipam_route_targets_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `tenant` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_route_targets_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_route_targets_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_route_targets_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_route_targets_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_route_targets_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `tenant` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_route_targets_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `tenant` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_route_targets_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_service_templates_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `port` (number)
- `protocol` (string)
- `q` (string)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### ipam_service_templates_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `protocol` (string)
- `ports` (array)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_service_templates_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_service_templates_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_service_templates_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_service_templates_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_service_templates_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `protocol` (string)
- `ports` (array)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_service_templates_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `protocol` (string)
- `ports` (array)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_service_templates_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_services_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `device` (array)
- `device_id` (array)
- `fhrpgroup` (array)
- `fhrpgroup_id` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `ip_address` (array)
- `ip_address__n` (array)
- `ip_address_id` (array)
- `ip_address_id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `parent_object_id` (array)
- `parent_object_id__empty` (boolean)
- `parent_object_id__gt` (array)
- `parent_object_id__gte` (array)
- `parent_object_id__lt` (array)
- `parent_object_id__lte` (array)
- `parent_object_id__n` (array)
- `parent_object_type` (integer)
- `parent_object_type__n` (integer)
- `port` (number)
- `protocol` (string)
- `q` (string)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)
- `virtual_machine` (array)
- `virtual_machine_id` (array)

### ipam_services_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `parent_object_type` (string)
- `parent_object_id` (integer)
- `name` (string)
- `protocol` (string)
- `ports` (array)
- `ipaddresses` (array)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_services_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_services_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_services_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_services_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_services_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `parent_object_type` (string)
- `parent_object_id` (integer)
- `name` (string)
- `protocol` (string)
- `ports` (array)
- `ipaddresses` (array)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_services_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `parent_object_type` (string)
- `parent_object_id` (integer)
- `name` (string)
- `protocol` (string)
- `ports` (array)
- `ipaddresses` (array)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_services_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_vlan_groups_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `cluster` (integer)
- `cluster_group` (integer)
- `contains_vid` (number)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `rack` (integer)
- `region` (integer)
- `scope_id` (array)
- `scope_id__empty` (boolean)
- `scope_id__gt` (array)
- `scope_id__gte` (array)
- `scope_id__lt` (array)
- `scope_id__lte` (array)
- `scope_id__n` (array)
- `scope_type` (string)
- `scope_type__n` (string)
- `site` (integer)
- `site_group` (integer)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `updated_by_request` (string)

### ipam_vlan_groups_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `scope_type` (string)
- `scope_id` (integer)
- `vid_ranges` (array)
- `tenant` (other)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_vlan_groups_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_vlan_groups_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_vlan_groups_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_vlan_groups_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_vlan_groups_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `scope_type` (string)
- `scope_id` (integer)
- `vid_ranges` (array)
- `tenant` (other)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_vlan_groups_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `scope_type` (string)
- `scope_id` (integer)
- `vid_ranges` (array)
- `tenant` (other)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_vlan_groups_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_vlan_groups_available_vlans_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_vlan_groups_available_vlans_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_vlan_translation_policies_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### ipam_vlan_translation_policies_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `description` (string)

### ipam_vlan_translation_policies_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_vlan_translation_policies_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_vlan_translation_policies_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_vlan_translation_policies_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_vlan_translation_policies_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)

### ipam_vlan_translation_policies_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)

### ipam_vlan_translation_policies_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_vlan_translation_rules_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `local_vid` (array)
- `local_vid__empty` (boolean)
- `local_vid__gt` (array)
- `local_vid__gte` (array)
- `local_vid__lt` (array)
- `local_vid__lte` (array)
- `local_vid__n` (array)
- `modified_by_request` (string)
- `offset` (integer)
- `ordering` (string)
- `policy` (array)
- `policy__n` (array)
- `policy_id` (array)
- `policy_id__n` (array)
- `q` (string)
- `remote_vid` (array)
- `remote_vid__empty` (boolean)
- `remote_vid__gt` (array)
- `remote_vid__gte` (array)
- `remote_vid__lt` (array)
- `remote_vid__lte` (array)
- `remote_vid__n` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### ipam_vlan_translation_rules_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `policy` (integer)
- `local_vid` (integer)
- `remote_vid` (integer)
- `description` (string)

### ipam_vlan_translation_rules_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_vlan_translation_rules_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_vlan_translation_rules_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_vlan_translation_rules_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_vlan_translation_rules_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `policy` (integer)
- `local_vid` (integer)
- `remote_vid` (integer)
- `description` (string)

### ipam_vlan_translation_rules_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `policy` (integer)
- `local_vid` (integer)
- `remote_vid` (integer)
- `description` (string)

### ipam_vlan_translation_rules_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_vlans_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `available_at_site` (string)
- `available_on_device` (string)
- `available_on_virtualmachine` (string)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `group` (array)
- `group__n` (array)
- `group_id` (array)
- `group_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `interface_id` (string)
- `l2vpn` (array)
- `l2vpn__n` (array)
- `l2vpn_id` (array)
- `l2vpn_id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `qinq_role` (array)
- `qinq_role__empty` (boolean)
- `qinq_role__ic` (array)
- `qinq_role__ie` (array)
- `qinq_role__iew` (array)
- `qinq_role__isw` (array)
- `qinq_role__n` (array)
- `qinq_role__nic` (array)
- `qinq_role__nie` (array)
- `qinq_role__niew` (array)
- `qinq_role__nisw` (array)
- `qinq_svlan_id` (array)
- `qinq_svlan_id__n` (array)
- `qinq_svlan_vid` (array)
- `qinq_svlan_vid__empty` (array)
- `qinq_svlan_vid__gt` (array)
- `qinq_svlan_vid__gte` (array)
- `qinq_svlan_vid__lt` (array)
- `qinq_svlan_vid__lte` (array)
- `qinq_svlan_vid__n` (array)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `role` (array)
- `role__n` (array)
- `role_id` (array)
- `role_id__n` (array)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `updated_by_request` (string)
- `vid` (array)
- `vid__empty` (boolean)
- `vid__gt` (array)
- `vid__gte` (array)
- `vid__lt` (array)
- `vid__lte` (array)
- `vid__n` (array)
- `vminterface_id` (string)

### ipam_vlans_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `site` (other)
- `group` (other)
- `vid` (integer)
- `name` (string)
- `tenant` (other)
- `status` (string)
- `role` (other)
- `description` (string)
- `qinq_role` (string)
- `qinq_svlan` (integer)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_vlans_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_vlans_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_vlans_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_vlans_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_vlans_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `site` (other)
- `group` (other)
- `vid` (integer)
- `name` (string)
- `tenant` (other)
- `status` (string)
- `role` (other)
- `description` (string)
- `qinq_role` (string)
- `qinq_svlan` (integer)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_vlans_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `site` (other)
- `group` (other)
- `vid` (integer)
- `name` (string)
- `tenant` (other)
- `status` (string)
- `role` (other)
- `description` (string)
- `qinq_role` (string)
- `qinq_svlan` (integer)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### ipam_vlans_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_vrfs_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `enforce_unique` (boolean)
- `export_target` (array)
- `export_target__n` (array)
- `export_target_id` (array)
- `export_target_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `import_target` (array)
- `import_target__n` (array)
- `import_target_id` (array)
- `import_target_id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `rd` (array)
- `rd__empty` (boolean)
- `rd__ic` (array)
- `rd__ie` (array)
- `rd__iew` (array)
- `rd__isw` (array)
- `rd__n` (array)
- `rd__nic` (array)
- `rd__nie` (array)
- `rd__niew` (array)
- `rd__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `updated_by_request` (string)

### ipam_vrfs_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `rd` (string)
- `tenant` (other)
- `enforce_unique` (boolean)
- `description` (string)
- `comments` (string)
- `import_targets` (array)
- `export_targets` (array)
- `tags` (array)
- `custom_fields` (object)

### ipam_vrfs_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_vrfs_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_vrfs_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### ipam_vrfs_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### ipam_vrfs_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `rd` (string)
- `tenant` (other)
- `enforce_unique` (boolean)
- `description` (string)
- `comments` (string)
- `import_targets` (array)
- `export_targets` (array)
- `tags` (array)
- `custom_fields` (object)

### ipam_vrfs_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `rd` (string)
- `tenant` (other)
- `enforce_unique` (boolean)
- `description` (string)
- `comments` (string)
- `import_targets` (array)
- `export_targets` (array)
- `tags` (array)
- `custom_fields` (object)

### ipam_vrfs_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### schema_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `format` (string)
- `lang` (string)

### status_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_contact_assignments_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `contact_id` (array)
- `contact_id__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `group` (array)
- `group__n` (array)
- `group_id` (array)
- `group_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `object_id` (array)
- `object_id__empty` (boolean)
- `object_id__gt` (array)
- `object_id__gte` (array)
- `object_id__lt` (array)
- `object_id__lte` (array)
- `object_id__n` (array)
- `object_type` (string)
- `object_type__n` (string)
- `object_type_id` (integer)
- `object_type_id__n` (integer)
- `offset` (integer)
- `ordering` (string)
- `priority` (string)
- `q` (string)
- `role` (array)
- `role__n` (array)
- `role_id` (array)
- `role_id__n` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### tenancy_contact_assignments_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `object_type` (string)
- `object_id` (integer)
- `contact` (other)
- `role` (other)
- `priority` (string)
- `tags` (array)
- `custom_fields` (object)

### tenancy_contact_assignments_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_contact_assignments_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_contact_assignments_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_contact_assignments_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### tenancy_contact_assignments_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_type` (string)
- `object_id` (integer)
- `contact` (other)
- `role` (other)
- `priority` (string)
- `tags` (array)
- `custom_fields` (object)

### tenancy_contact_assignments_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `object_type` (string)
- `object_id` (integer)
- `contact` (other)
- `role` (other)
- `priority` (string)
- `tags` (array)
- `custom_fields` (object)

### tenancy_contact_assignments_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### tenancy_contact_groups_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `ancestor` (array)
- `ancestor__n` (array)
- `ancestor_id` (array)
- `ancestor_id__n` (array)
- `contact_id` (array)
- `contact_id__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `parent` (array)
- `parent__n` (array)
- `parent_id` (array)
- `parent_id__n` (array)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### tenancy_contact_groups_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `parent` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### tenancy_contact_groups_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_contact_groups_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_contact_groups_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_contact_groups_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### tenancy_contact_groups_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `parent` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### tenancy_contact_groups_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `parent` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### tenancy_contact_groups_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### tenancy_contact_roles_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### tenancy_contact_roles_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### tenancy_contact_roles_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_contact_roles_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_contact_roles_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_contact_roles_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### tenancy_contact_roles_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### tenancy_contact_roles_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### tenancy_contact_roles_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### tenancy_contacts_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `address` (array)
- `address__empty` (boolean)
- `address__ic` (array)
- `address__ie` (array)
- `address__iew` (array)
- `address__isw` (array)
- `address__n` (array)
- `address__nic` (array)
- `address__nie` (array)
- `address__niew` (array)
- `address__nisw` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `email` (array)
- `email__empty` (boolean)
- `email__ic` (array)
- `email__ie` (array)
- `email__iew` (array)
- `email__isw` (array)
- `email__n` (array)
- `email__nic` (array)
- `email__nie` (array)
- `email__niew` (array)
- `email__nisw` (array)
- `group` (array)
- `group__n` (array)
- `group_id` (array)
- `group_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `link` (array)
- `link__empty` (boolean)
- `link__ic` (array)
- `link__ie` (array)
- `link__iew` (array)
- `link__isw` (array)
- `link__n` (array)
- `link__nic` (array)
- `link__nie` (array)
- `link__niew` (array)
- `link__nisw` (array)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `phone` (array)
- `phone__empty` (boolean)
- `phone__ic` (array)
- `phone__ie` (array)
- `phone__iew` (array)
- `phone__isw` (array)
- `phone__n` (array)
- `phone__nic` (array)
- `phone__nie` (array)
- `phone__niew` (array)
- `phone__nisw` (array)
- `q` (string)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `title` (array)
- `title__empty` (boolean)
- `title__ic` (array)
- `title__ie` (array)
- `title__iew` (array)
- `title__isw` (array)
- `title__n` (array)
- `title__nic` (array)
- `title__nie` (array)
- `title__niew` (array)
- `title__nisw` (array)
- `updated_by_request` (string)

### tenancy_contacts_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `groups` (array)
- `name` (string)
- `title` (string)
- `phone` (string)
- `email` (string)
- `address` (string)
- `link` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### tenancy_contacts_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_contacts_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_contacts_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_contacts_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### tenancy_contacts_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `groups` (array)
- `name` (string)
- `title` (string)
- `phone` (string)
- `email` (string)
- `address` (string)
- `link` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### tenancy_contacts_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `groups` (array)
- `name` (string)
- `title` (string)
- `phone` (string)
- `email` (string)
- `address` (string)
- `link` (string)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### tenancy_contacts_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### tenancy_tenant_groups_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `ancestor` (array)
- `ancestor__n` (array)
- `ancestor_id` (array)
- `ancestor_id__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `parent` (array)
- `parent__n` (array)
- `parent_id` (array)
- `parent_id__n` (array)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### tenancy_tenant_groups_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `parent` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### tenancy_tenant_groups_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_tenant_groups_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_tenant_groups_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_tenant_groups_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### tenancy_tenant_groups_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `parent` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### tenancy_tenant_groups_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `parent` (integer)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)
- `comments` (string)

### tenancy_tenant_groups_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### tenancy_tenants_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `group` (array)
- `group__n` (array)
- `group_id` (array)
- `group_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### tenancy_tenants_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `group` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### tenancy_tenants_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_tenants_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_tenants_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### tenancy_tenants_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### tenancy_tenants_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `group` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### tenancy_tenants_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `group` (other)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### tenancy_tenants_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### users_config_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### users_groups_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `limit` (integer)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `notification_group_id` (array)
- `notification_group_id__n` (array)
- `offset` (integer)
- `ordering` (string)
- `permission_id` (array)
- `permission_id__n` (array)
- `q` (string)
- `user_id` (array)
- `user_id__n` (array)

### users_groups_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `description` (string)
- `permissions` (array)

### users_groups_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### users_groups_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### users_groups_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### users_groups_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### users_groups_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `permissions` (array)

### users_groups_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `permissions` (array)

### users_groups_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### users_permissions_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `can_add` (boolean)
- `can_change` (boolean)
- `can_delete` (boolean)
- `can_view` (boolean)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `enabled` (boolean)
- `group` (array)
- `group__n` (array)
- `group_id` (array)
- `group_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `limit` (integer)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `object_type` (string)
- `object_type__ic` (string)
- `object_type__ie` (string)
- `object_type__iew` (string)
- `object_type__isw` (string)
- `object_type__n` (string)
- `object_type__nic` (string)
- `object_type__nie` (string)
- `object_type__niew` (string)
- `object_type__nisw` (string)
- `object_type_id` (array)
- `object_type_id__n` (array)
- `object_types` (array)
- `object_types__n` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `user` (array)
- `user__n` (array)
- `user_id` (array)
- `user_id__n` (array)

### users_permissions_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `description` (string)
- `enabled` (boolean)
- `object_types` (array)
- `actions` (array)
- `constraints` (other)
- `groups` (array)
- `users` (array)

### users_permissions_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### users_permissions_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### users_permissions_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### users_permissions_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### users_permissions_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `enabled` (boolean)
- `object_types` (array)
- `actions` (array)
- `constraints` (other)
- `groups` (array)
- `users` (array)

### users_permissions_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `enabled` (boolean)
- `object_types` (array)
- `actions` (array)
- `constraints` (other)
- `groups` (array)
- `users` (array)

### users_permissions_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### users_tokens_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (string)
- `created__gte` (string)
- `created__lte` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `expires` (string)
- `expires__gte` (string)
- `expires__lte` (string)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `key` (array)
- `key__empty` (boolean)
- `key__ic` (array)
- `key__ie` (array)
- `key__iew` (array)
- `key__isw` (array)
- `key__n` (array)
- `key__nic` (array)
- `key__nie` (array)
- `key__niew` (array)
- `key__nisw` (array)
- `last_used` (array)
- `last_used__empty` (boolean)
- `last_used__gt` (array)
- `last_used__gte` (array)
- `last_used__lt` (array)
- `last_used__lte` (array)
- `last_used__n` (array)
- `limit` (integer)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `user` (array)
- `user__n` (array)
- `user_id` (array)
- `user_id__n` (array)
- `write_enabled` (boolean)

### users_tokens_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `user` (other)
- `expires` (string)
- `last_used` (string)
- `key` (string)
- `write_enabled` (boolean)
- `description` (string)

### users_tokens_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### users_tokens_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### users_tokens_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### users_tokens_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### users_tokens_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `user` (other)
- `expires` (string)
- `last_used` (string)
- `key` (string)
- `write_enabled` (boolean)
- `description` (string)

### users_tokens_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `user` (other)
- `expires` (string)
- `last_used` (string)
- `key` (string)
- `write_enabled` (boolean)
- `description` (string)

### users_tokens_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### users_tokens_provision_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `expires` (string)
- `write_enabled` (boolean)
- `description` (string)
- `username` (string)
- `password` (string)

### users_users_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `date_joined` (array)
- `date_joined__empty` (boolean)
- `date_joined__gt` (array)
- `date_joined__gte` (array)
- `date_joined__lt` (array)
- `date_joined__lte` (array)
- `date_joined__n` (array)
- `email` (array)
- `email__empty` (boolean)
- `email__ic` (array)
- `email__ie` (array)
- `email__iew` (array)
- `email__isw` (array)
- `email__n` (array)
- `email__nic` (array)
- `email__nie` (array)
- `email__niew` (array)
- `email__nisw` (array)
- `first_name` (array)
- `first_name__empty` (boolean)
- `first_name__ic` (array)
- `first_name__ie` (array)
- `first_name__iew` (array)
- `first_name__isw` (array)
- `first_name__n` (array)
- `first_name__nic` (array)
- `first_name__nie` (array)
- `first_name__niew` (array)
- `first_name__nisw` (array)
- `group` (array)
- `group__n` (array)
- `group_id` (array)
- `group_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `is_active` (boolean)
- `is_staff` (boolean)
- `is_superuser` (boolean)
- `last_login` (array)
- `last_login__empty` (boolean)
- `last_login__gt` (array)
- `last_login__gte` (array)
- `last_login__lt` (array)
- `last_login__lte` (array)
- `last_login__n` (array)
- `last_name` (array)
- `last_name__empty` (boolean)
- `last_name__ic` (array)
- `last_name__ie` (array)
- `last_name__iew` (array)
- `last_name__isw` (array)
- `last_name__n` (array)
- `last_name__nic` (array)
- `last_name__nie` (array)
- `last_name__niew` (array)
- `last_name__nisw` (array)
- `limit` (integer)
- `notification_group_id` (array)
- `notification_group_id__n` (array)
- `offset` (integer)
- `ordering` (string)
- `permission_id` (array)
- `permission_id__n` (array)
- `q` (string)
- `username` (array)
- `username__empty` (boolean)
- `username__ic` (array)
- `username__ie` (array)
- `username__iew` (array)
- `username__isw` (array)
- `username__n` (array)
- `username__nic` (array)
- `username__nie` (array)
- `username__niew` (array)
- `username__nisw` (array)

### users_users_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `username` (string)
- `password` (string)
- `first_name` (string)
- `last_name` (string)
- `email` (string)
- `is_staff` (boolean)
- `is_active` (boolean)
- `date_joined` (string)
- `last_login` (string)
- `groups` (array)
- `permissions` (array)

### users_users_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### users_users_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### users_users_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### users_users_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### users_users_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `username` (string)
- `password` (string)
- `first_name` (string)
- `last_name` (string)
- `email` (string)
- `is_staff` (boolean)
- `is_active` (boolean)
- `date_joined` (string)
- `last_login` (string)
- `groups` (array)
- `permissions` (array)

### users_users_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `username` (string)
- `password` (string)
- `first_name` (string)
- `last_name` (string)
- `email` (string)
- `is_staff` (boolean)
- `is_active` (boolean)
- `date_joined` (string)
- `last_login` (string)
- `groups` (array)
- `permissions` (array)

### users_users_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### virtualization_cluster_groups_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### virtualization_cluster_groups_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### virtualization_cluster_groups_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### virtualization_cluster_groups_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### virtualization_cluster_groups_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### virtualization_cluster_groups_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### virtualization_cluster_groups_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### virtualization_cluster_groups_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### virtualization_cluster_groups_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### virtualization_cluster_types_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `slug` (array)
- `slug__empty` (boolean)
- `slug__ic` (array)
- `slug__ie` (array)
- `slug__iew` (array)
- `slug__isw` (array)
- `slug__n` (array)
- `slug__nic` (array)
- `slug__nie` (array)
- `slug__niew` (array)
- `slug__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)

### virtualization_cluster_types_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `slug` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### virtualization_cluster_types_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### virtualization_cluster_types_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### virtualization_cluster_types_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### virtualization_cluster_types_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### virtualization_cluster_types_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### virtualization_cluster_types_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)
- `tags` (array)
- `custom_fields` (object)

### virtualization_cluster_types_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### virtualization_clusters_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `contact` (array)
- `contact__n` (array)
- `contact_group` (array)
- `contact_group__n` (array)
- `contact_role` (array)
- `contact_role__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `group` (array)
- `group__n` (array)
- `group_id` (array)
- `group_id__n` (array)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `location` (array)
- `location__n` (array)
- `location_id` (array)
- `location_id__n` (array)
- `modified_by_request` (string)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `q` (string)
- `region` (array)
- `region__n` (array)
- `region_id` (array)
- `region_id__n` (array)
- `scope_id` (array)
- `scope_id__empty` (boolean)
- `scope_id__gt` (array)
- `scope_id__gte` (array)
- `scope_id__lt` (array)
- `scope_id__lte` (array)
- `scope_id__n` (array)
- `scope_type` (string)
- `scope_type__n` (string)
- `site` (array)
- `site__n` (array)
- `site_group` (array)
- `site_group__n` (array)
- `site_group_id` (array)
- `site_group_id__n` (array)
- `site_id` (array)
- `site_id__n` (array)
- `status` (array)
- `status__empty` (boolean)
- `status__ic` (array)
- `status__ie` (array)
- `status__iew` (array)
- `status__isw` (array)
- `status__n` (array)
- `status__nic` (array)
- `status__nie` (array)
- `status__niew` (array)
- `status__nisw` (array)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `tenant` (array)
- `tenant__n` (array)
- `tenant_group` (array)
- `tenant_group__n` (array)
- `tenant_group_id` (array)
- `tenant_group_id__n` (array)
- `tenant_id` (array)
- `tenant_id__n` (array)
- `type` (array)
- `type__n` (array)
- `type_id` (array)
- `type_id__n` (array)
- `updated_by_request` (string)

### virtualization_clusters_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `name` (string)
- `type` (other)
- `group` (other)
- `status` (string)
- `tenant` (other)
- `scope_type` (string)
- `scope_id` (integer)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### virtualization_clusters_bulk_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### virtualization_clusters_bulk_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### virtualization_clusters_bulk_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

No input parameters

### virtualization_clusters_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### virtualization_clusters_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `type` (other)
- `group` (other)
- `status` (string)
- `tenant` (other)
- `scope_type` (string)
- `scope_id` (integer)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### virtualization_clusters_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)
- `name` (string)
- `type` (other)
- `group` (other)
- `status` (string)
- `tenant` (other)
- `scope_type` (string)
- `scope_id` (integer)
- `description` (string)
- `comments` (string)
- `tags` (array)
- `custom_fields` (object)

### virtualization_clusters_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `id` (integer)

### virtualization_interfaces_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`

**Input schema**

- `bridge_id` (array)
- `bridge_id__n` (array)
- `cluster` (array)
- `cluster__n` (array)
- `cluster_id` (array)
- `cluster_id__n` (array)
- `created` (array)
- `created__empty` (array)
- `created__gt` (array)
- `created__gte` (array)
- `created__lt` (array)
- `created__lte` (array)
- `created__n` (array)
- `created_by_request` (string)
- `description` (array)
- `description__empty` (boolean)
- `description__ic` (array)
- `description__ie` (array)
- `description__iew` (array)
- `description__isw` (array)
- `description__n` (array)
- `description__nic` (array)
- `description__nie` (array)
- `description__niew` (array)
- `description__nisw` (array)
- `enabled` (boolean)
- `id` (array)
- `id__empty` (boolean)
- `id__gt` (array)
- `id__gte` (array)
- `id__lt` (array)
- `id__lte` (array)
- `id__n` (array)
- `l2vpn` (array)
- `l2vpn__n` (array)
- `l2vpn_id` (array)
- `l2vpn_id__n` (array)
- `last_updated` (array)
- `last_updated__empty` (array)
- `last_updated__gt` (array)
- `last_updated__gte` (array)
- `last_updated__lt` (array)
- `last_updated__lte` (array)
- `last_updated__n` (array)
- `limit` (integer)
- `mac_address` (array)
- `mac_address__ic` (array)
- `mac_address__ie` (array)
- `mac_address__iew` (array)
- `mac_address__isw` (array)
- `mac_address__n` (array)
- `mac_address__nic` (array)
- `mac_address__nie` (array)
- `mac_address__niew` (array)
- `mac_address__nisw` (array)
- `mode` (array)
- `mode__empty` (boolean)
- `mode__ic` (array)
- `mode__ie` (array)
- `mode__iew` (array)
- `mode__isw` (array)
- `mode__n` (array)
- `mode__nic` (array)
- `mode__nie` (array)
- `mode__niew` (array)
- `mode__nisw` (array)
- `modified_by_request` (string)
- `mtu` (array)
- `mtu__empty` (boolean)
- `mtu__gt` (array)
- `mtu__gte` (array)
- `mtu__lt` (array)
- `mtu__lte` (array)
- `mtu__n` (array)
- `name` (array)
- `name__empty` (boolean)
- `name__ic` (array)
- `name__ie` (array)
- `name__iew` (array)
- `name__isw` (array)
- `name__n` (array)
- `name__nic` (array)
- `name__nie` (array)
- `name__niew` (array)
- `name__nisw` (array)
- `offset` (integer)
- `ordering` (string)
- `parent_id` (array)
- `parent_id__n` (array)
- `primary_mac_address` (array)
- `primary_mac_address__n` (array)
- `primary_mac_address_id` (array)
- `primary_mac_address_id__n` (array)
- `q` (string)
- `tag` (array)
- `tag__n` (array)
- `tag_id` (array)
- `tag_id__n` (array)
- `updated_by_request` (string)
- `virtual_machine` (array)
- `virtual_machine__n` (array)
- `virtual_machine_id` (array)
- `virtual_machine_id__n` (array)
- `vlan` (string)
- `vlan_id` (string)
- `vlan_translation_policy` (array)
- `vlan_translation_policy__n` (array)
- `vlan_translation_policy_id` (array)
- `vlan_translation_policy_id__n` (array)
- `vrf` (array)
- `vrf__n` (array)
- `vrf_id` (array)
- `vrf_id__n` (array)
