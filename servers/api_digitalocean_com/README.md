# @open-mcp/api_digitalocean_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "api_digitalocean_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_digitalocean_com"],
      "env": {
        "API_KEY": "..."
      }
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

## Tools

### oneclicks_list

### oneclicks_install_kubernetes

### account_get

### sshkeys_list

### sshkeys_create

### sshkeys_get

### sshkeys_update

### sshkeys_delete

### actions_list

### actions_get

### apps_list

### apps_create

### apps_delete

### apps_get

### apps_update

### apps_restart

### apps_get_logs_active_deployment

### apps_get_exec_active_deployment

### apps_list_deployments

### apps_create_deployment

### apps_get_deployment

### apps_cancel_deployment

### apps_get_logs

### apps_get_logs_aggregate

### apps_get_exec

### apps_get_logs_active_deployment_aggregate

### apps_list_instancesizes

### apps_get_instancesize

### apps_list_regions

### apps_validate_appspec

### apps_list_alerts

### apps_assign_alertdestinations

### apps_create_rollback

### apps_validate_rollback

### apps_commit_rollback

### apps_revert_rollback

### apps_get_metrics_bandwidth_daily

### apps_list_metrics_bandwidth_daily

### cdn_list_endpoints

### cdn_create_endpoint

### cdn_get_endpoint

### cdn_update_endpoints

### cdn_delete_endpoint

### cdn_purge_cache

### certificates_list

### certificates_create

### certificates_get

### certificates_delete

### balance_get

### billinghistory_list

### invoices_list

### invoices_get_byuuid

### invoices_get_csvbyuuid

### invoices_get_pdfbyuuid

### invoices_get_summarybyuuid

### databases_list_options

### databases_list_clusters

### databases_create_cluster

### databases_get_cluster

### databases_destroy_cluster

### databases_get_config

### databases_patch_config

### databases_get_ca

### databases_get_migrationstatus

### databases_update_onlinemigration

### databases_delete_onlinemigration

### databases_update_region

### databases_update_clustersize

### databases_list_firewall_rules

### databases_update_firewall_rules

### databases_update_maintenancewindow

### databases_install_update

### databases_list_backups

### databases_list_replicas

### databases_create_replica

### databases_list_events_logs

### databases_get_replica

### databases_destroy_replica

### databases_promote_replica

### databases_list_users

### databases_add_user

### databases_get_user

### databases_delete_user

### databases_update_user

### databases_reset_auth

### databases_list

### databases_add

### databases_get

### databases_delete

### databases_list_connectionpools

### databases_add_connectionpool

### databases_get_connectionpool

### databases_update_connectionpool

### databases_delete_connectionpool

### databases_get_evictionpolicy

### databases_update_evictionpolicy

### databases_get_sql_mode

### databases_update_sql_mode

### databases_update_major_version

### databases_list_kafka_topics

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_digitalocean_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_digitalocean_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
