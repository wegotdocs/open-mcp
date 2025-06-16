# @open-mcp/api_hetzner_cloud_v1

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_hetzner_cloud_v1": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_hetzner_cloud_v1@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_hetzner_cloud_v1@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add api_hetzner_cloud_v1 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_hetzner_cloud_v1 \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add api_hetzner_cloud_v1 \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_hetzner_cloud_v1": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_hetzner_cloud_v1"],
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

### list_actions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_action

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### list_certificates

**Environment variables**

- `API_KEY`

**Input schema**

- `sort` (string)
- `name` (string)
- `label_selector` (string)
- `type` (string)
- `page` (integer)
- `per_page` (integer)

### create_certificate

**Environment variables**

- `API_KEY`

**Input schema**

- `certificate` (string)
- `domain_names` (array)
- `labels` (object)
- `name` (string)
- `private_key` (string)
- `type` (string)

### delete_certificate

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### get_certificate

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### replace_certificate

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `labels` (object)
- `name` (string)

### list_actions_for_certificate

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_action_for_certificate

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `action_id` (integer)

### retry_issuance_or_renewal

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### list_certificate_actions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_certificate_action

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### list_datacenters

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `sort` (string)
- `page` (integer)
- `per_page` (integer)

### get_datacenter

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### list_firewalls

**Environment variables**

- `API_KEY`

**Input schema**

- `sort` (string)
- `name` (string)
- `label_selector` (string)
- `page` (integer)
- `per_page` (integer)

### create_firewall

**Environment variables**

- `API_KEY`

**Input schema**

- `apply_to` (array)
- `labels` (object)
- `name` (string)
- `rules` (array)

### delete_firewall

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### get_firewall

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### replace_firewall

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `labels` (object)
- `name` (string)

### list_actions_for_firewall

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_action_for_firewall

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `action_id` (integer)

### apply_to_resources

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `apply_to` (array)

### remove_from_resources

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `remove_from` (array)

### set_rules

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `rules` (array)

### list_firewall_actions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_firewall_action

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### list_floating_ips

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `label_selector` (string)
- `sort` (string)
- `page` (integer)
- `per_page` (integer)

### create_floating_ip

**Environment variables**

- `API_KEY`

**Input schema**

- `description` (string)
- `home_location` (string)
- `labels` (object)
- `name` (string)
- `server` (integer)
- `type` (string)

### delete_floating_ip

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### get_floating_ip

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### replace_floating_ip

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `description` (string)
- `labels` (object)
- `name` (string)

### list_actions_for_floating_ip

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_action_for_floating_ip

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `action_id` (integer)

### assign_floating_ip_to_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `server` (integer)

### change_reverse_dns_records_for_floating_ip

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `dns_ptr` (string)
- `ip` (string)

### change_floating_ip_protection

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `delete` (boolean)

### unassign_floating_ip

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### list_floating_ip_actions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_floating_ip_action

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### list_images

**Environment variables**

- `API_KEY`

**Input schema**

- `sort` (string)
- `type` (string)
- `status` (string)
- `bound_to` (string)
- `include_deprecated` (boolean)
- `name` (string)
- `label_selector` (string)
- `architecture` (string)
- `page` (integer)
- `per_page` (integer)

### delete_image

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### get_image

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### replace_image

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `description` (string)
- `labels` (object)
- `type` (string)

### list_actions_for_image

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_action_for_image

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `action_id` (integer)

### change_image_protection

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `delete` (boolean)

### list_image_actions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_image_action

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### list_isos

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `architecture` (string)
- `include_architecture_wildcard` (boolean)
- `page` (integer)
- `per_page` (integer)

### get_iso

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### list_load_balancer_types

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `page` (integer)
- `per_page` (integer)

### get_load_balancer_type

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### list_load_balancers

**Environment variables**

- `API_KEY`

**Input schema**

- `sort` (string)
- `name` (string)
- `label_selector` (string)
- `page` (integer)
- `per_page` (integer)

### create_load_balancer

**Environment variables**

- `API_KEY`

**Input schema**

- `algorithm` (object)
- `labels` (object)
- `load_balancer_type` (string)
- `location` (string)
- `name` (string)
- `network` (integer)
- `network_zone` (string)
- `public_interface` (boolean)
- `services` (array)
- `targets` (array)

### delete_load_balancer

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### get_load_balancer

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### replace_load_balancer

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `labels` (object)
- `name` (string)

### list_actions_for_load_balancer

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_action_for_load_balancer

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `action_id` (integer)

### add_service

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `destination_port` (integer)
- `health_check` (object)
- `http` (object)
- `listen_port` (integer)
- `protocol` (string)
- `proxyprotocol` (boolean)

### add_target

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `ip` (object)
- `label_selector` (object)
- `server` (object)
- `type` (string)
- `use_private_ip` (boolean)

### attach_load_balancer_to_network

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `ip` (string)
- `network` (integer)

### change_algorithm

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `type` (string)

### change_reverse_dns_entry_for_this_load_balancer

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `dns_ptr` (string)
- `ip` (string)

### change_load_balancer_protection

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `delete` (boolean)

### change_type_of_load_balancer

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `load_balancer_type` (string)

### delete_service

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `listen_port` (integer)

### detach_load_balancer_from_network

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `network` (integer)

### disable_public_interface_of_load_balancer

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### enable_public_interface_of_load_balancer

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### remove_target

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `ip` (object)
- `label_selector` (object)
- `server` (object)
- `type` (string)

### update_service

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `destination_port` (integer)
- `health_check` (object)
- `http` (object)
- `listen_port` (integer)
- `protocol` (string)
- `proxyprotocol` (boolean)

### get_metrics_for_loadbalancer

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `type` (string)
- `start` (string)
- `end` (string)
- `step` (string)

### list_load_balancer_actions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_load_balancer_action

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### list_locations

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `sort` (string)
- `page` (integer)
- `per_page` (integer)

### get_location

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### list_networks

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `label_selector` (string)
- `page` (integer)
- `per_page` (integer)

### create_network

**Environment variables**

- `API_KEY`

**Input schema**

- `expose_routes_to_vswitch` (boolean)
- `ip_range` (string)
- `labels` (object)
- `name` (string)
- `routes` (array)
- `subnets` (array)

### delete_network

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### get_network

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### replace_network

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `expose_routes_to_vswitch` (boolean)
- `labels` (object)
- `name` (string)

### list_actions_for_network

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_action_for_network

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `action_id` (integer)

### add_route_to_network

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `destination` (string)
- `gateway` (string)

### add_subnet_to_network

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `ip_range` (string)
- `network_zone` (string)
- `type` (string)
- `vswitch_id` (integer)

### change_ip_range_of_network

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `ip_range` (string)

### change_network_protection

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `delete` (boolean)

### delete_route_from_network

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `destination` (string)
- `gateway` (string)

### delete_subnet_from_network

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `ip_range` (string)

### list_network_actions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_network_action

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### list_placementgroups

**Environment variables**

- `API_KEY`

**Input schema**

- `sort` (string)
- `name` (string)
- `label_selector` (string)
- `type` (string)
- `page` (integer)
- `per_page` (integer)

### create_placementgroup

**Environment variables**

- `API_KEY`

**Input schema**

- `labels` (object)
- `name` (string)
- `type` (string)

### delete_placementgroup

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### get_placementgroup

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### replace_placementgroup

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `labels` (object)
- `name` (string)

### list_prices

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### list_primary_ips

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `label_selector` (string)
- `ip` (string)
- `page` (integer)
- `per_page` (integer)
- `sort` (string)

### create_primary_ip

**Environment variables**

- `API_KEY`

**Input schema**

- `assignee_id` (integer)
- `assignee_type` (string)
- `auto_delete` (boolean)
- `datacenter` (string)
- `labels` (object)
- `name` (string)
- `type` (string)

### delete_primary_ip

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### get_primary_ip

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### replace_primary_ip

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `auto_delete` (boolean)
- `labels` (object)
- `name` (string)

### assign_primary_ip_to_resource

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `assignee_id` (integer)
- `assignee_type` (string)

### change_reverse_dns_records_for_primary_ip

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `dns_ptr` (string)
- `ip` (string)

### change_primary_ip_protection

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `delete` (boolean)

### unassign_primary_ip_from_resource

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### list_primary_ip_actions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_primary_ip_action

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### list_server_types

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `page` (integer)
- `per_page` (integer)

### get_server_type

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### list_servers

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `label_selector` (string)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### create_server

**Environment variables**

- `API_KEY`

**Input schema**

- `automount` (boolean)
- `datacenter` (string)
- `firewalls` (array)
- `image` (string)
- `labels` (object)
- `location` (string)
- `name` (string)
- `networks` (array)
- `placement_group` (integer)
- `public_net` (object)
- `server_type` (string)
- `ssh_keys` (array)
- `start_after_create` (boolean)
- `user_data` (string)
- `volumes` (array)

### delete_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### get_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### replace_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `labels` (object)
- `name` (string)

### list_actions_for_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_action_for_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `action_id` (integer)

### add_server_to_placement_group

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `placement_group` (integer)

### attach_iso_to_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `iso` (string)

### attach_server_to_network

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `alias_ips` (array)
- `ip` (string)
- `network` (integer)

### change_alias_ips_of_network

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `alias_ips` (array)
- `network` (integer)

### change_reverse_dns_entry_for_this_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `dns_ptr` (string)
- `ip` (string)

### change_server_protection

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `delete` (boolean)
- `rebuild` (boolean)

### change_type_of_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `server_type` (string)
- `upgrade_disk` (boolean)

### create_image_from_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `description` (string)
- `labels` (object)
- `type` (string)

### detach_server_from_network

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `network` (integer)

### detach_iso_from_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### disable_backups_for_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### disable_rescue_mode_for_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### enable_and_configure_backups_for_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### enable_rescue_mode_for_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `ssh_keys` (array)
- `type` (string)

### power_off_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### power_on_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### soft_reboot_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### rebuild_server_from_image

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `image` (string)

### remove_from_placement_group

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### request_console_for_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### reset_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### reset_root_password_of_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### shutdown_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### get_metrics_for_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `type` (string)
- `start` (string)
- `end` (string)
- `step` (string)

### list_server_actions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_server_action

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### list_ssh_keys

**Environment variables**

- `API_KEY`

**Input schema**

- `sort` (string)
- `name` (string)
- `fingerprint` (string)
- `label_selector` (string)
- `page` (integer)
- `per_page` (integer)

### create_ssh_key

**Environment variables**

- `API_KEY`

**Input schema**

- `labels` (object)
- `name` (string)
- `public_key` (string)

### delete_ssh_key

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### get_ssh_key

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### replace_ssh_key

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `labels` (object)
- `name` (string)

### list_volumes

**Environment variables**

- `API_KEY`

**Input schema**

- `status` (string)
- `sort` (string)
- `name` (string)
- `label_selector` (string)
- `page` (integer)
- `per_page` (integer)

### create_volume

**Environment variables**

- `API_KEY`

**Input schema**

- `automount` (boolean)
- `format` (string)
- `labels` (object)
- `location` (string)
- `name` (string)
- `server` (integer)
- `size` (integer)

### delete_volume

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### get_volume

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### replace_volume

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `labels` (object)
- `name` (string)

### list_actions_for_volume

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_action_for_volume

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `action_id` (integer)

### attach_volume_to_server

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `automount` (boolean)
- `server` (integer)

### change_volume_protection

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `delete` (boolean)

### detach_volume

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### resize_volume

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `size` (number)

### list_volume_actions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `sort` (string)
- `status` (string)
- `page` (integer)
- `per_page` (integer)

### get_volume_action

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
