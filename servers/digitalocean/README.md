# @open-mcp/digitalocean

## Installing

### With helper

Use the `add-to-client` helper to add the server to your MCP client:

```bash
npx @open-mcp/digitalocean add-to-client /path/to/client/config.json
```

For example:

```bash
# Claude desktop:
npx @open-mcp/digitalocean add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json

# Cursor project (run from the project dir):
npx @open-mcp/digitalocean add-to-client .cursor/mcp.json

# Cursor global (applies to all projects):
npx @open-mcp/digitalocean add-to-client ~/.cursor/mcp.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "digitalocean": {
      "command": "npx",
      "args": ["-y", "@open-mcp/digitalocean"],
      "env": {"API_KEY":"..."}
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

### databases_create_kafka_topic

### databases_get_kafka_topic

### databases_update_kafka_topic

### databases_delete_kafka_topic

### databases_list_logsink

### databases_create_logsink

### databases_get_logsink

### databases_update_logsink

### databases_delete_logsink

### databases_get_cluster_metrics_credentials

### databases_update_cluster_metrics_credentials

### databases_list_opeasearch_indexes

### databases_delete_opensearch_index

### domains_list

### domains_create

### domains_get

### domains_delete

### domains_list_records

### domains_create_record

### domains_get_record

### domains_patch_record

### domains_update_record

### domains_delete_record

### droplets_list

### droplets_create

### droplets_destroy_bytag

### droplets_get

### droplets_destroy

### droplets_list_backups

### droplets_get_backup_policy

### droplets_list_backup_policies

### droplets_list_supported_backup_policies

### droplets_list_snapshots

### dropletactions_list

### dropletactions_post

### dropletactions_post_bytag

### dropletactions_get

### droplets_list_kernels

### droplets_list_firewalls

### droplets_list_neighbors

### droplets_list_associatedresources

### droplets_destroy_withassociatedresourcesselective

### droplets_destroy_withassociatedresourcesdangerous

### droplets_get_destroyassociatedresourcesstatus

### droplets_destroy_retrywithassociatedresources

### autoscalepools_list

### autoscalepools_create

### autoscalepools_get

### autoscalepools_update

### autoscalepools_delete

### autoscalepools_delete_dangerous

### autoscalepools_list_members

### autoscalepools_list_history

### firewalls_list

### firewalls_create

### firewalls_get

### firewalls_update

### firewalls_delete

### firewalls_assign_droplets

### firewalls_delete_droplets

### firewalls_add_tags

### firewalls_delete_tags

### firewalls_add_rules

### firewalls_delete_rules

### floatingips_list

### floatingips_create

### floatingips_get

### floatingips_delete

### floatingipsaction_list

### floatingipsaction_post

### floatingipsaction_get

### functions_list_namespaces

### functions_create_namespace

### functions_get_namespace

### functions_delete_namespace

### functions_list_triggers

### functions_create_trigger

### functions_get_trigger

### functions_update_trigger

### functions_delete_trigger

### images_list

### images_create_custom

### images_get

### images_update

### images_delete

### imageactions_list

### imageactions_post

### imageactions_get

### kubernetes_list_clusters

### kubernetes_create_cluster

### kubernetes_get_cluster

### kubernetes_update_cluster

### kubernetes_delete_cluster

### kubernetes_list_associatedresources

### kubernetes_destroy_associatedresourcesselective

### kubernetes_destroy_associatedresourcesdangerous

### kubernetes_get_kubeconfig

### kubernetes_get_credentials

### kubernetes_get_availableupgrades

### kubernetes_upgrade_cluster

### kubernetes_list_nodepools

### kubernetes_add_nodepool

### kubernetes_get_nodepool

### kubernetes_update_nodepool

### kubernetes_delete_nodepool

### kubernetes_delete_node

### kubernetes_recycle_node_pool

### kubernetes_get_clusteruser

### kubernetes_list_options

### kubernetes_run_clusterlint

### kubernetes_get_clusterlintresults

### kubernetes_add_registry

### kubernetes_remove_registry

### loadbalancers_create

### loadbalancers_list

### loadbalancers_get

### loadbalancers_update

### loadbalancers_delete

### loadbalancers_delete_cache

### loadbalancers_add_droplets

### loadbalancers_remove_droplets

### loadbalancers_add_forwardingrules

### loadbalancers_remove_forwardingrules

### monitoring_list_alertpolicy

### monitoring_create_alertpolicy

### monitoring_get_alertpolicy

### monitoring_update_alertpolicy

### monitoring_delete_alertpolicy

### monitoring_get_dropletbandwidthmetrics

### monitoring_get_dropletcpumetrics

### monitoring_get_dropletfilesystemfreemetrics

### monitoring_get_dropletfilesystemsizemetrics

### monitoring_get_dropletload1metrics

### monitoring_get_dropletload5metrics

### monitoring_get_dropletload15metrics

### monitoring_get_dropletmemorycachedmetrics

### monitoring_get_dropletmemoryfreemetrics

### monitoring_get_dropletmemorytotalmetrics

### monitoring_get_dropletmemoryavailablemetrics

### monitoring_get_appmemorypercentagemetrics

### monitoring_get_appcpupercentagemetrics

### monitoring_get_apprestartcountmetrics_yml

### monitoring_get_lb_frontend_connections_current

### monitoring_get_lb_frontend_connections_limit

### monitoring_get_lb_frontend_cpu_utilization

### monitoring_get_lb_frontend_firewall_dropped_bytes

### monitoring_get_lb_frontend_firewall_dropped_packets

### monitoring_get_lb_frontend_http_responses

### monitoring_get_lb_frontend_http_requests_per_second

### monitoring_get_lb_frontend_network_throughput_http

### monitoring_get_lb_frontend_network_throughput_udp

### monitoring_get_lb_frontend_network_throughput_tcp

### monitoring_get_lb_frontend_nlb_tcp_network_throughput

### monitoring_get_lb_frontend_nlb_udp_network_throughput

### monitoring_get_lb_frontend_tls_connections_current

### monitoring_get_lb_frontend_tls_connections_limit

### monitoring_get_lb_frontend_tls_connections_exceeding_rate_limit

### monitoring_get_lb_droplets_http_session_duration_avg

### monitoring_get_lb_droplets_http_session_duration_50p

### monitoring_get_lb_droplets_http_session_duration_95p

### monitoring_get_lb_droplets_http_response_time_avg

### monitoring_get_lb_droplets_http_response_time_50p

### monitoring_get_lb_droplets_http_response_time_95p

### monitoring_get_lb_droplets_http_response_time_99p

### monitoring_get_lb_droplets_queue_size

### monitoring_get_lb_droplets_http_responses

### monitoring_get_lb_droplets_connections

### monitoring_get_lb_droplets_health_checks

### monitoring_get_lb_droplets_downtime

### monitoring_get_droplet_autoscale_current_instances

### monitoring_get_droplet_autoscale_target_instances

### monitoring_get_droplet_autoscale_current_cpu_utilization_yml

### monitoring_get_droplet_autoscale_target_cpu_utilization

### monitoring_get_droplet_autoscale_current_memory_utilization

### monitoring_get_droplet_autoscale_target_memory_utilization

### monitoring_create_destination

### monitoring_list_destinations

### monitoring_get_destination

### monitoring_update_destination

### monitoring_delete_destination

### monitoring_create_sink

### monitoring_list_sinks

### monitoring_get_sink

### monitoring_delete_sink

### attachments_list

### attachments_create

### attachments_get

### attachments_patch

### attachments_delete

### attachments_get_bgp_auth_key

### attachments_list_remote_routes

### attachments_update_remote_routes

### attachments_get_service_key

### attachments_create_service_key

### projects_list

### projects_create

### projects_get_default

### projects_update_default

### projects_patch_default

### projects_get

### projects_update

### projects_patch

### projects_delete

### projects_list_resources

### projects_assign_resources

### projects_list_resources_default

### projects_assign_resources_default

### regions_list

### registry_get

### registry_create

### registry_delete

### registry_get_subscription

### registry_update_subscription

### registry_get_dockercredentials

### registry_validate_name

### registry_list_repositories

### registry_list_repositoriesv2

### registry_list_repositorytags

### registry_delete_repositorytag

### registry_list_repositorymanifests

### registry_delete_repositorymanifest

### registry_run_garbagecollection

### registry_get_garbagecollection

### registry_list_garbagecollections

### registry_update_garbagecollection

### registry_get_options

### droplets_list_neighborsids

### reservedips_list

### reservedips_create

### reservedips_get

### reservedips_delete

### reservedipsactions_list

### reservedipsactions_post

### reservedipsactions_get

### reservedipv6_list

### reservedipv6_create

### reservedipv6_get

### reservedipv6_delete

### reservedipv6actions_post

### sizes_list

### snapshots_list

### snapshots_get

### snapshots_delete

### spaceskey_list

### spaceskey_create

### spaceskey_get

### spaceskey_delete

### spaceskey_update

### spaceskey_patch

### tags_list

### tags_create

### tags_get

### tags_delete

### tags_assign_resources

### tags_unassign_resources

### volumes_list

### volumes_create

### volumes_delete_byname

### volumeactions_post

### volumesnapshots_get_byid

### volumesnapshots_delete_byid

### volumes_get

### volumes_delete

### volumeactions_list

### volumeactions_post_byid

### volumeactions_get

### volumesnapshots_list

### volumesnapshots_create

### vpcs_list

### vpcs_create

### vpcs_get

### vpcs_update

### vpcs_patch

### vpcs_delete

### vpcs_list_members

### vpcs_list_peerings

### vpcs_create_peerings

### vpcs_patch_peerings

### vpcpeerings_list

### vpcpeerings_create

### vpcpeerings_get

### vpcpeerings_patch

### vpcpeerings_delete

### uptime_list_checks

### uptime_create_check

### uptime_get_check

### uptime_update_check

### uptime_delete_check

### uptime_get_checkstate

### uptime_list_alerts

### uptime_create_alert

### uptime_get_alert

### uptime_update_alert

### uptime_delete_alert

### genai_create_agent

### genai_list_agents

### genai_list_agent_api_keys

### genai_create_agent_api_key

### genai_delete_agent_api_key

### genai_update_agent_api_key

### genai_regenerate_agent_api_key

### genai_attach_agent_function

### genai_update_agent_function

### genai_detach_agent_function

### genai_detach_knowledge_base

### genai_attach_knowledge_base

### genai_detach_agent

### genai_attach_agent

### genai_update_attached_agent

### genai_delete_agent

### genai_get_agent

### genai_update_agent

### genai_get_agent_children

### genai_update_agent_deployment_visibility

### genai_list_anthropic_api_keys

### genai_create_anthropic_api_key

### genai_delete_anthropic_api_key

### genai_get_anthropic_api_key

### genai_update_anthropic_api_key

### genai_list_agents_by_anthropic_key

### genai_list_indexing_jobs

### genai_create_indexing_job

### genai_list_indexing_job_data_sources

### genai_get_indexing_job

### genai_cancel_indexing_job

### genai_list_knowledge_bases

### genai_create_knowledge_base

### genai_list_knowledge_base_data_sources

### genai_create_knowledge_base_data_source

### genai_delete_knowledge_base_data_source

### genai_update_knowledge_base

### genai_delete_knowledge_base

### genai_get_knowledge_base

### genai_list_models

### genai_list_datacenter_regions

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/digitalocean
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/digitalocean`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
