# @open-mcp/hetzner_cloud

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "hetzner_cloud": {
      "command": "npx",
      "args": ["-y", "@open-mcp/hetzner_cloud"],
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

### get_actions

### get_actions_id_

### get_certificates

### post_certificates

### delete_certificates_id_

### get_certificates_id_

### put_certificates_id_

### get_certificates_id_actions

### post_certificates_id_actions_retry

### get_certificates_id_actions_action_id_

### get_datacenters

### get_datacenters_id_

### get_firewalls

### post_firewalls

### delete_firewalls_id_

### get_firewalls_id_

### put_firewalls_id_

### get_firewalls_id_actions

### post_firewalls_id_actions_apply_to_resources

### post_firewalls_id_actions_remove_from_resources

### post_firewalls_id_actions_set_rules

### get_firewalls_id_actions_action_id_

### get_floating_ips

### post_floating_ips

### delete_floating_ips_id_

### get_floating_ips_id_

### put_floating_ips_id_

### get_floating_ips_id_actions

### post_floating_ips_id_actions_assign

### post_floating_ips_id_actions_change_dns_ptr

### post_floating_ips_id_actions_change_protection

### post_floating_ips_id_actions_unassign

### get_floating_ips_id_actions_action_id_

### get_images

### delete_images_id_

### get_images_id_

### put_images_id_

### get_images_id_actions

### post_images_id_actions_change_protection

### get_images_id_actions_action_id_

### get_isos

### get_isos_id_

### get_load_balancer_types

### get_load_balancer_types_id_

### get_load_balancers

### post_load_balancers

### delete_load_balancers_id_

### get_load_balancers_id_

### put_load_balancers_id_

### get_load_balancers_id_actions

### post_load_balancers_id_actions_add_service

### post_load_balancers_id_actions_add_target

### post_load_balancers_id_actions_attach_to_network

### post_load_balancers_id_actions_change_algorithm

### post_load_balancers_id_actions_change_dns_ptr

### post_load_balancers_id_actions_change_protection

### post_load_balancers_id_actions_change_type

### post_load_balancers_id_actions_delete_service

### post_load_balancers_id_actions_detach_from_network

### post_load_balancers_id_actions_disable_public_interface

### post_load_balancers_id_actions_enable_public_interface

### post_load_balancers_id_actions_remove_target

### post_load_balancers_id_actions_update_service

### get_load_balancers_id_actions_action_id_

### get_load_balancers_id_metrics

### get_locations

### get_locations_id_

### get_networks

### post_networks

### delete_networks_id_

### get_networks_id_

### put_networks_id_

### get_networks_id_actions

### post_networks_id_actions_add_route

### post_networks_id_actions_add_subnet

### post_networks_id_actions_change_ip_range

### post_networks_id_actions_change_protection

### post_networks_id_actions_delete_route

### post_networks_id_actions_delete_subnet

### get_networks_id_actions_action_id_

### get_placement_groups

### post_placement_groups

### delete_placement_groups_id_

### get_placement_groups_id_

### put_placement_groups_id_

### get_pricing

### get_primary_ips

### post_primary_ips

### delete_primary_ips_id_

### get_primary_ips_id_

### put_primary_ips_id_

### post_primary_ips_id_actions_assign

### post_primary_ips_id_actions_change_dns_ptr

### post_primary_ips_id_actions_change_protection

### post_primary_ips_id_actions_unassign

### get_server_types

### get_server_types_id_

### get_servers

### post_servers

### delete_servers_id_

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/hetzner_cloud
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/hetzner_cloud`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
