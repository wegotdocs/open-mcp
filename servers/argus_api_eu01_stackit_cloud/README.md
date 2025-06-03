# @open-mcp/argus_api_eu01_stackit_cloud

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "argus_api_eu01_stackit_cloud": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/argus_api_eu01_stackit_cloud@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/argus_api_eu01_stackit_cloud@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add argus_api_eu01_stackit_cloud \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add argus_api_eu01_stackit_cloud \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add argus_api_eu01_stackit_cloud \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "argus_api_eu01_stackit_cloud": {
      "command": "npx",
      "args": ["-y", "@open-mcp/argus_api_eu01_stackit_cloud"],
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

### v1_projects_instances_list

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_create

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `name` (string)
- `parameter` (object)
- `planId` (string)
- `Authorization` (string)

### v1_projects_instances_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_read

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_update

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `name` (string)
- `parameter` (object)
- `planId` (string)
- `Authorization` (string)

### v1_projects_instances_acl_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_acl_update

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `acl` (array)
- `Authorization` (string)

### v1_projects_instances_alertconfigs_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_alertconfigs_update

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `global` (object)
- `inhibitRules` (object)
- `receivers` (array)
- `route` (object)
- `Authorization` (string)

### v1_projects_instances_alertconfigs_receivers_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_alertconfigs_receivers_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `emailConfigs` (array)
- `name` (string)
- `opsgenieConfigs` (array)
- `webHookConfigs` (array)
- `Authorization` (string)

### v1_projects_instances_alertconfigs_receivers_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `receiver` (string)
- `Authorization` (string)

### v1_projects_instances_alertconfigs_receivers_read

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `receiver` (string)
- `Authorization` (string)

### v1_projects_instances_alertconfigs_receivers_update

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `receiver` (string)
- `emailConfigs` (array)
- `name` (string)
- `opsgenieConfigs` (array)
- `webHookConfigs` (array)
- `Authorization` (string)

### v1_projects_instances_alertconfigs_routes_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_alertconfigs_routes_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `continue` (boolean)
- `groupBy` (array)
- `groupInterval` (string)
- `groupWait` (string)
- `matchers` (array)
- `receiver` (string)
- `repeatInterval` (string)
- `routes` (array)
- `Authorization` (string)

### v1_projects_instances_alertconfigs_routes_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `receiver` (string)
- `Authorization` (string)

### v1_projects_instances_alertconfigs_routes_read

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `receiver` (string)
- `Authorization` (string)

### v1_projects_instances_alertconfigs_routes_update

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `receiver` (string)
- `continue` (boolean)
- `groupBy` (array)
- `groupInterval` (string)
- `groupWait` (string)
- `matchers` (array)
- `b_receiver` (string)
- `repeatInterval` (string)
- `routes` (array)
- `Authorization` (string)

### v1_projects_instances_alertgroups_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `groupName` (array)
- `Authorization` (string)

### v1_projects_instances_alertgroups_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_alertgroups_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_alertgroups_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `interval` (string)
- `name` (string)
- `rules` (array)
- `Authorization` (string)

### v1_projects_instances_alertgroups_update_all

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_alertgroups_delete_groups

**Environment variables**

- `API_KEY`

**Input schema**

- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_alertgroups_read

**Environment variables**

- `API_KEY`

**Input schema**

- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_alertgroups_update

**Environment variables**

- `API_KEY`

**Input schema**

- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `interval` (string)
- `rules` (array)
- `Authorization` (string)

### v1_projects_instances_alertgroups_alertrules_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `alertName` (array)
- `Authorization` (string)

### v1_projects_instances_alertgroups_alertrules_list

**Environment variables**

- `API_KEY`

**Input schema**

- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_alertgroups_alertrules_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_alertgroups_alertrules_create

**Environment variables**

- `API_KEY`

**Input schema**

- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `alert` (string)
- `annotations` (object)
- `expr` (string)
- `for` (string)
- `labels` (object)
- `Authorization` (string)

### v1_projects_instances_alertgroups_alertrules_delete_rules

**Environment variables**

- `API_KEY`

**Input schema**

- `alertName` (string)
- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_alertgroups_alertrules_read

**Environment variables**

- `API_KEY`

**Input schema**

- `alertName` (string)
- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_alertgroups_alertrules_update

**Environment variables**

- `API_KEY`

**Input schema**

- `alertName` (string)
- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `annotations` (object)
- `expr` (string)
- `for` (string)
- `labels` (object)
- `Authorization` (string)

### v1_projects_instances_alertgroups_records_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `alertRecord` (array)
- `Authorization` (string)

### v1_projects_instances_alertgroups_records_list

**Environment variables**

- `API_KEY`

**Input schema**

- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_alertgroups_records_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_alertgroups_records_create

**Environment variables**

- `API_KEY`

**Input schema**

- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `expr` (string)
- `labels` (object)
- `record` (string)
- `Authorization` (string)

### v1_projects_instances_alertgroups_records_delete_recods

**Environment variables**

- `API_KEY`

**Input schema**

- `alertRecord` (string)
- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_alertgroups_records_read

**Environment variables**

- `API_KEY`

**Input schema**

- `alertRecord` (string)
- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_alertgroups_records_update

**Environment variables**

- `API_KEY`

**Input schema**

- `alertRecord` (string)
- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `expr` (string)
- `labels` (object)
- `Authorization` (string)

### v1_projects_instances_backup_restores_create

**Environment variables**

- `API_KEY`

**Input schema**

- `backupDate` (string)
- `instanceId` (string)
- `projectId` (string)
- `restoreTarget` (string)
- `Authorization` (string)

### v1_projects_instances_backup_retentions_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_backup_schedules_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `backupTarget` (array)
- `Authorization` (string)

### v1_projects_instances_backup_schedules_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `backupTarget` (array)
- `schedule` (string)
- `Authorization` (string)

### v1_projects_instances_backups_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `backupTarget` (array)
- `Authorization` (string)

### v1_projects_instances_backups_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `backupTarget` (array)
- `Authorization` (string)

### v1_projects_instances_cert_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_cert_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `source` (string)
- `Authorization` (string)

### v1_projects_instances_cert_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `id` (string)
- `Authorization` (string)

### v1_projects_instances_credentials_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_credentials_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_credentials_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `username` (string)
- `Authorization` (string)

### v1_projects_instances_credentials_read

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `username` (string)
- `Authorization` (string)

### v1_projects_instances_credentials_remote_write_limits_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `username` (string)
- `Authorization` (string)

### v1_projects_instances_credentials_remote_write_limits_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `username` (string)
- `Authorization` (string)

### v1_projects_instances_credentials_remote_write_limits_update

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `username` (string)
- `maxLimit` (number)
- `Authorization` (string)

### v1_projects_instances_elasticsearch_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_elasticsearch_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `password` (string)
- `server` (string)
- `username` (string)
- `Authorization` (string)

### v1_projects_instances_elasticsearch_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_grafana_configs_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_grafana_configs_update

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `genericOauth` (object)
- `publicReadAccess` (boolean)
- `useStackitSso` (boolean)
- `Authorization` (string)

### v1_projects_instances_http_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_http_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `url` (string)
- `Authorization` (string)

### v1_projects_instances_http_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `id` (string)
- `Authorization` (string)

### v1_projects_instances_logs_alertgroups_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_logs_alertgroups_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `interval` (string)
- `name` (string)
- `rules` (array)
- `Authorization` (string)

### v1_projects_instances_logs_alertgroups_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_logs_alertgroups_read

**Environment variables**

- `API_KEY`

**Input schema**

- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_logs_alertgroups_update

**Environment variables**

- `API_KEY`

**Input schema**

- `groupName` (string)
- `instanceId` (string)
- `projectId` (string)
- `interval` (string)
- `rules` (array)
- `Authorization` (string)

### v1_projects_instances_logs_configs_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_logs_configs_update

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `retention` (string)
- `Authorization` (string)

### v1_projects_instances_metrics_storage_retentions_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_metrics_storage_retentions_update

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `metricsRetentionTime1h` (string)
- `metricsRetentionTime5m` (string)
- `metricsRetentionTimeRaw` (string)
- `Authorization` (string)

### v1_projects_instances_mongodb_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_mongodb_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `server` (string)
- `Authorization` (string)

### v1_projects_instances_mongodb_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_mysql_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_mysql_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `server` (string)
- `Authorization` (string)

### v1_projects_instances_mysql_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_network_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_network_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `address` (string)
- `Authorization` (string)

### v1_projects_instances_network_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_ping_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_ping_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `url` (string)
- `Authorization` (string)

### v1_projects_instances_ping_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_postgresql_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_postgresql_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `address` (string)
- `Authorization` (string)

### v1_projects_instances_postgresql_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_rabbitmq_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_rabbitmq_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `password` (string)
- `url` (string)
- `username` (string)
- `Authorization` (string)

### v1_projects_instances_rabbitmq_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_redis_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_redis_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `password` (string)
- `server` (string)
- `username` (string)
- `Authorization` (string)

### v1_projects_instances_redis_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_scrapeconfigs_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `jobName` (array)
- `Authorization` (string)

### v1_projects_instances_scrapeconfigs_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_scrapeconfigs_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_scrapeconfigs_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `basicAuth` (object)
- `bearerToken` (string)
- `honorLabels` (boolean)
- `honorTimeStamps` (boolean)
- `httpSdConfigs` (array)
- `jobName` (string)
- `metricsPath` (string)
- `metricsRelabelConfigs` (array)
- `oauth2` (object)
- `params` (object)
- `sampleLimit` (number)
- `scheme` (string)
- `scrapeInterval` (string)
- `scrapeTimeout` (string)
- `staticConfigs` (array)
- `tlsConfig` (object)
- `Authorization` (string)

### v1_projects_instances_scrapeconfigs_delete_configs

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `jobName` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_scrapeconfigs_read

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `jobName` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_scrapeconfigs_update

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `jobName` (string)
- `projectId` (string)
- `basicAuth` (object)
- `bearerToken` (string)
- `honorLabels` (boolean)
- `honorTimeStamps` (boolean)
- `metricsPath` (string)
- `metricsRelabelConfigs` (array)
- `params` (object)
- `sampleLimit` (number)
- `scheme` (string)
- `scrapeInterval` (string)
- `scrapeTimeout` (string)
- `staticConfigs` (array)
- `tlsConfig` (object)
- `Authorization` (string)

### v1_projects_instances_traces_configs_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_projects_instances_traces_configs_update

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `retention` (string)
- `Authorization` (string)

### v1_projects_offerings_list

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `Authorization` (string)

### v1_projects_plans_list

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_list

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_read

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_cert_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_cert_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `source` (string)
- `Authorization` (string)

### v1_systems_projects_instances_cert_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_credentials_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `remoteWriteMaxLimit` (number)
- `Authorization` (string)

### v1_systems_projects_instances_credentials_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `username` (string)
- `Authorization` (string)

### v1_systems_projects_instances_elasticsearch_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_elasticsearch_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `password` (string)
- `server` (string)
- `username` (string)
- `Authorization` (string)

### v1_systems_projects_instances_elasticsearch_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_http_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_http_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `url` (string)
- `Authorization` (string)

### v1_systems_projects_instances_http_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_mongodb_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_mongodb_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `server` (string)
- `Authorization` (string)

### v1_systems_projects_instances_mongodb_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_mysql_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_mysql_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `server` (string)
- `Authorization` (string)

### v1_systems_projects_instances_mysql_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_network_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_network_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `address` (string)
- `Authorization` (string)

### v1_systems_projects_instances_network_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_ping_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_ping_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `url` (string)
- `Authorization` (string)

### v1_systems_projects_instances_ping_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_postgresql_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_postgresql_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `address` (string)
- `Authorization` (string)

### v1_systems_projects_instances_postgresql_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_rabbitmq_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_rabbitmq_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `password` (string)
- `url` (string)
- `username` (string)
- `Authorization` (string)

### v1_systems_projects_instances_rabbitmq_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_redis_checks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)

### v1_systems_projects_instances_redis_checks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `instanceId` (string)
- `projectId` (string)
- `password` (string)
- `server` (string)
- `username` (string)
- `Authorization` (string)

### v1_systems_projects_instances_redis_checks_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `instanceId` (string)
- `projectId` (string)
- `Authorization` (string)
