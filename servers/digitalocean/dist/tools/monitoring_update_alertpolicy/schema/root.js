import { z } from "zod";
export const inputParams = {
    "alert_uuid": z.string().describe("A unique identifier for an alert policy."),
    "alerts": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `alerts` to the tool, first call the tool `expandSchema` with \"/properties/alerts\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
    "compare": z.enum(["GreaterThan", "LessThan"]),
    "description": z.string(),
    "enabled": z.boolean(),
    "entities": z.array(z.string()),
    "tags": z.array(z.string()),
    "type": z.enum(["v1/insights/droplet/load_1", "v1/insights/droplet/load_5", "v1/insights/droplet/load_15", "v1/insights/droplet/memory_utilization_percent", "v1/insights/droplet/disk_utilization_percent", "v1/insights/droplet/cpu", "v1/insights/droplet/disk_read", "v1/insights/droplet/disk_write", "v1/insights/droplet/public_outbound_bandwidth", "v1/insights/droplet/public_inbound_bandwidth", "v1/insights/droplet/private_outbound_bandwidth", "v1/insights/droplet/private_inbound_bandwidth", "v1/insights/lbaas/avg_cpu_utilization_percent", "v1/insights/lbaas/connection_utilization_percent", "v1/insights/lbaas/droplet_health", "v1/insights/lbaas/tls_connections_per_second_utilization_percent", "v1/insights/lbaas/increase_in_http_error_rate_percentage_5xx", "v1/insights/lbaas/increase_in_http_error_rate_percentage_4xx", "v1/insights/lbaas/increase_in_http_error_rate_count_5xx", "v1/insights/lbaas/increase_in_http_error_rate_count_4xx", "v1/insights/lbaas/high_http_request_response_time", "v1/insights/lbaas/high_http_request_response_time_50p", "v1/insights/lbaas/high_http_request_response_time_95p", "v1/insights/lbaas/high_http_request_response_time_99p", "v1/dbaas/alerts/load_15_alerts", "v1/dbaas/alerts/memory_utilization_alerts", "v1/dbaas/alerts/disk_utilization_alerts", "v1/dbaas/alerts/cpu_alerts", "v1/droplet/autoscale_alerts/current_instances", "v1/droplet/autoscale_alerts/target_instances", "v1/droplet/autoscale_alerts/current_cpu_utilization", "v1/droplet/autoscale_alerts/target_cpu_utilization", "v1/droplet/autoscale_alerts/current_memory_utilization", "v1/droplet/autoscale_alerts/target_memory_utilization", "v1/droplet/autoscale_alerts/scale_up", "v1/droplet/autoscale_alerts/scale_down"]),
    "value": z.number(),
    "window": z.enum(["5m", "10m", "30m", "1h"])
};
