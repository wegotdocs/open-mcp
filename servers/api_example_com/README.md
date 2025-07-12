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
API_KEY='...'
X_API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY \
  --X_API_KEY=$X_API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json \
  --API_KEY=$API_KEY \
  --X_API_KEY=$X_API_KEY
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json \
  --API_KEY=$API_KEY \
  --X_API_KEY=$X_API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
      "env": {"API_KEY":"...","X_API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider
- `X_API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### create_sshkey_sshkey_create_post

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `name` (string)
- `ssh_key` (string)

### view_user_sshkeys_sshkey_user_sshkeys_get

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

No input parameters

### delete_sshkey_sshkey_key_id_delete

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `key_id` (integer)

### get_floating_ips_by_user_organization_floating_ips_organization_

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

No input parameters

### configure_reverse_dns_floating_ips_reverse_dns_configure_post

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `ip` (string)
- `reverse_dns` (string)

### configure_ddos_protection_floating_ips_ddos_protection_post

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `ip_address` (string)
- `prefix` (integer)
- `tcp_validation_level` (integer)
- `tcp_validation_sym_level` (integer)
- `udp_validation_level` (integer)
- `fivem_protection_level` (integer)
- `mc_java_protection_level` (integer)
- `tls_validation_level` (integer)
- `rdp_protection_level` (integer)

### create_network_networks_create_network_post

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `name` (string)
- `label` (other)
- `location_name` (string)
- `ip_range` (string)
- `prefix` (integer)
- `project_id` (integer)

### update_network_networks_network_id_put

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `network_id` (integer)
- `name` (other)
- `label` (other)

### delete_network_networks_network_id_delete

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `network_id` (integer)

### create_vps_vps_create_project_id_post

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `project_id` (integer)
- `label` (string)
- `template_name` (string)
- `plan_name` (string)
- `location_name` (string)
- `name` (string)
- `ssh_key_name` (other)
- `network_id` (other)
- `user` (other)
- `password` (other)

### destroy_vps_vps_destroy_vps_id_post

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `vps_id` (integer)

### power_vps_vps_vps_id_power_power_type_post

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `vps_id` (integer)
- `power_type` (string)

### resize_vps_vps_resize_vps_id_vps_id_resize_plan_resize_plan_post

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `vps_id` (integer)
- `resize_plan` (string)

### get_vnc_url_vps_vps_id_vnc_url_get

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `vps_id` (integer)

### reinstall_vps_vps_reinstall_vps_id_post

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `vps_id` (integer)
- `template_name` (string)

### change_vps_password_vps_vps_id_change_password_post

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `vps_id` (integer)
- `password` (string)

### update_vps_vps_update_vps_id_patch

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `vps_id` (integer)
- `label` (other)
- `name` (other)

### get_vps_metrics_vps_vps_id_metrics_get

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `vps_id` (integer)
- `metrics` (other)
- `time_range` (other)

### list_countries_edge_acls_countries_get

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

No input parameters

### list_prefix_lists_edge_acls_prefix_lists_get

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

No input parameters

### create_prefix_list_edge_acls_prefix_lists_post

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `list_name` (string)

### list_edge_acls_edge_acls_get

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

No input parameters

### create_edge_acl_rule_edge_acls_post

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `src_ip` (string)
- `src_prefixlen` (integer)
- `src_prefix_uuid` (string)
- `ip_proto` (integer)
- `dest_ip` (string)
- `dest_prefixlen` (integer)
- `dst_port_start` (integer)
- `dst_port_end` (integer)
- `src_port_start` (integer)
- `src_port_end` (integer)
- `pkt_len_start` (integer)
- `pkt_len_end` (integer)
- `tcp_flags` (integer)
- `action` (integer)
- `rate_limit` (integer)
- `comments` (string)

### delete_prefix_list_edge_acls_prefix_lists_prefix_list_uuid_delet

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `prefix_list_uuid` (string)

### add_ip_to_prefix_list_edge_acls_prefix_lists_add_ip_post

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `prefix_list_uuid` (string)
- `cidr` (string)

### delete_ip_from_prefix_list_edge_acls_prefix_lists_prefix_list_uu

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `prefix_list_uuid` (string)
- `cidr` (string)

### delete_edge_acl_rule_edge_acls_rule_id_delete

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `rule_id` (integer)

### get_attacks_ddos_attacks_attacks_get

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

No input parameters

### get_attack_details_ddos_attacks_attacks_attack_id_details_get

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `attack_id` (integer)

### get_attack_traffic_graph_ddos_attacks_attacks_attack_id_traffic_

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

- `attack_id` (integer)

### list_tunnels_tunnels_get

**Environment variables**

- `API_KEY`
- `X_API_KEY`

**Input schema**

No input parameters
