# @open-mcp/here_com_tracking

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "here_com_tracking": {
      "command": "npx",
      "args": ["-y", "@open-mcp/here_com_tracking"],
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

### get_aliases_v2

### parameters_aliases_v2

### get_aliases_v2_health

### get_aliases_v2_trackingid

### parameters_aliases_v2_trackingid

### get_aliases_v2_version

### delete_aliases_v2_trackingid_

### get_aliases_v2_trackingid_

### parameters_aliases_v2_trackingid_

### parameters_aliases_v2_trackingid_batch

### put_aliases_v2_trackingid_batch

### delete_aliases_v2_trackingid_type_

### get_aliases_v2_trackingid_type_

### parameters_aliases_v2_trackingid_type_

### delete_aliases_v2_trackingid_type_externalid_

### parameters_aliases_v2_trackingid_type_externalid_

### put_aliases_v2_trackingid_type_externalid_

### parameters_associations_v3_devices_batchupdate

### put_associations_v3_devices_batchupdate

### parameters_associations_v3_devices_trackingid_batchcreate

### post_associations_v3_devices_trackingid_batchcreate

### parameters_associations_v3_devices_trackingid_batchdelete

### post_associations_v3_devices_trackingid_batchdelete

### get_associations_v3_geofences_geofenceid_

### parameters_associations_v3_geofences_geofenceid_

### get_associations_v3_health

### get_associations_v3_rules_ruleid_

### parameters_associations_v3_rules_ruleid_

### get_associations_v3_sensors_sensorruleid_

### parameters_associations_v3_sensors_sensorruleid_

### get_associations_v3_version

### get_associations_v3_trackingid_geofences

### parameters_associations_v3_trackingid_geofences

### delete_associations_v3_trackingid_geofences_geofenceid_

### parameters_associations_v3_trackingid_geofences_geofenceid_

### put_associations_v3_trackingid_geofences_geofenceid_

### get_associations_v3_trackingid_rules

### parameters_associations_v3_trackingid_rules

### delete_associations_v3_trackingid_rules_ruleid_

### parameters_associations_v3_trackingid_rules_ruleid_

### put_associations_v3_trackingid_rules_ruleid_

### get_associations_v3_trackingid_sensors

### parameters_associations_v3_trackingid_sensors

### delete_associations_v3_trackingid_sensors_sensorruleid_

### parameters_associations_v3_trackingid_sensors_sensorruleid_

### put_associations_v3_trackingid_sensors_sensorruleid_

### get_bulkjobs_v4_deviceuploads

### parameters_bulkjobs_v4_deviceuploads

### post_bulkjobs_v4_deviceuploads

### parameters_bulkjobs_v4_deviceuploads_jobid_

### patch_bulkjobs_v4_deviceuploads_jobid_

### get_bulkjobs_v4_deviceuploads_jobid_results

### parameters_bulkjobs_v4_deviceuploads_jobid_results

### get_bulkjobs_v4_deviceuploads_jobid_status

### parameters_bulkjobs_v4_deviceuploads_jobid_status

### get_bulkjobs_v4_health

### get_bulkjobs_v4_version

### post_c2c_v4_callback

### get_c2c_v4_connectors

### parameters_c2c_v4_connectors

### post_c2c_v4_connectors

### get_c2c_v4_connectors_ext_devices_externaldeviceid_

### delete_c2c_v4_connectors_connectorid_

### get_c2c_v4_connectors_connectorid_

### put_c2c_v4_connectors_connectorid_

### get_c2c_v4_connectors_connectorid_ext_devices

### post_c2c_v4_connectors_connectorid_ext_devices

### delete_c2c_v4_connectors_connectorid_ext_devices_batch

### delete_c2c_v4_connectors_connectorid_ext_devices_externaldevicei

### get_c2c_v4_drivers

### parameters_c2c_v4_drivers

### post_c2c_v4_drivers_driverid_verify

### get_c2c_v4_health

### get_c2c_v4_version

### get_device_associations_v2_health

### get_device_associations_v2_version

### get_device_associations_v2_trackingid_geofences

### get_events_v3

### parameters_events_v3

### get_events_v3_health

### get_events_v3_statuses

### parameters_events_v3_statuses

### get_events_v3_statuses_devicecounts

### parameters_events_v3_statuses_devicecounts

### get_events_v3_version

### get_events_v3_trackingid_

### parameters_events_v3_trackingid_

### get_geofence_associations_v2_health

### get_geofence_associations_v2_version

### get_geofence_associations_v2_geofenceid_devices

### delete_geofence_associations_v2_geofenceid_trackingid_

### parameters_geofence_associations_v2_geofenceid_trackingid_

### put_geofence_associations_v2_geofenceid_trackingid_

### delete_geofences_v2

### get_geofences_v2

### parameters_geofences_v2

### post_geofences_v2

### get_geofences_v2_health

### parameters_geofences_v2_trainingtest

### post_geofences_v2_trainingtest

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/here_com_tracking
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/here_com_tracking`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
