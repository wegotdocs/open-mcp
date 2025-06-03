# @open-mcp/vision_example

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "vision_example": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/vision_example@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/vision_example@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add vision_example \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add vision_example \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add vision_example \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "vision_example": {
      "command": "npx",
      "args": ["-y", "@open-mcp/vision_example"],
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

### get_v3_0_workbench_alerts_alertid_notes

**Environment variables**

- `API_KEY`

**Input schema**

- `alertId` (string)
- `startDateTime` (string)
- `endDateTime` (string)
- `dateTimeTarget` (string)
- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### post_v3_0_workbench_alerts_alertid_notes

**Environment variables**

- `API_KEY`

**Input schema**

- `alertId` (string)
- `content` (string)

### get_v3_0_workbench_alerts_alertid_notes_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `alertId` (string)
- `id` (integer)

### patch_v3_0_workbench_alerts_alertid_notes_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `alertId` (string)
- `id` (integer)
- `content` (string)
- `If-Match` (string)

### post_v3_0_workbench_alerts_alertid_notes_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `alertId` (string)

### get_v3_0_workbench_alerts

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `dateTimeTarget` (string)
- `orderBy` (string)
- `TMV1-Filter` (string)

### get_v3_0_workbench_alerts_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### patch_v3_0_workbench_alerts_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `status` (string)
- `investigationResult` (string)
- `If-Match` (string)

### get_v3_0_search_endpointactivities

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `top` (integer)
- `mode` (string)
- `select` (string)
- `TMV1-Query` (string)

### get_v3_0_search_detections

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `top` (integer)
- `mode` (string)
- `select` (string)
- `TMV1-Query` (string)

### get_v3_0_search_cloudactivities

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `top` (integer)
- `mode` (string)
- `select` (string)
- `TMV1-Query` (string)

### get_v3_0_search_emailactivities

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `startDateTime` (string)
- `endDateTime` (string)
- `mode` (string)
- `select` (string)
- `TMV1-Query` (string)

### get_v3_0_search_networkactivities

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `top` (integer)
- `mode` (string)
- `select` (string)
- `TMV1-Query` (string)

### get_v3_0_search_mobileactivities

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `top` (integer)
- `mode` (string)
- `select` (string)
- `TMV1-Query` (string)

### get_v3_0_search_containeractivities

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `top` (integer)
- `mode` (string)
- `select` (string)
- `TMV1-Query` (string)

### get_v3_0_search_activitystatistics

**Environment variables**

- `API_KEY`

**Input schema**

- `period` (string)

### get_v3_0_search_sensorstatistics

**Environment variables**

- `API_KEY`

**Input schema**

- `period` (string)

### get_v3_0_search_identityactivities

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `startDateTime` (string)
- `endDateTime` (string)
- `mode` (string)
- `select` (string)
- `TMV1-Query` (string)

### get_v3_0_oat_detections

**Environment variables**

- `API_KEY`

**Input schema**

- `detectedStartDateTime` (string)
- `detectedEndDateTime` (string)
- `ingestedStartDateTime` (string)
- `ingestedEndDateTime` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### post_v3_0_oat_datapipelines

**Environment variables**

- `API_KEY`

**Input schema**

- `riskLevels` (array)
- `hasDetail` (boolean)
- `description` (string)

### get_v3_0_oat_datapipelines

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### patch_v3_0_oat_datapipelines_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `riskLevels` (array)
- `hasDetail` (boolean)
- `description` (string)
- `If-Match` (string)

### get_v3_0_oat_datapipelines_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### post_v3_0_oat_datapipelines_delete

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_oat_datapipelines_id_packages

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `startDateTime` (string)
- `endDateTime` (string)
- `top` (integer)

### get_v3_0_oat_datapipelines_id_packages_packageid_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `packageId` (string)

### post_v3_0_datalake_datapipelines

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_datalake_datapipelines

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_datalake_datapipelines_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### patch_v3_0_datalake_datapipelines_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `type` (string)
- `subType` (array)
- `description` (string)

### post_v3_0_datalake_datapipelines_delete

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_datalake_datapipelines_id_packages

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `startDateTime` (string)
- `endDateTime` (string)
- `top` (integer)

### get_v3_0_datalake_datapipelines_id_packages_packageid_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `packageId` (string)

### get_v3_0_dmm_customfilters

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_dmm_custommodels

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_dmm_models

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `orderBy` (string)
- `filter` (string)
- `top` (integer)

### patch_v3_0_dmm_models_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `enabled` (boolean)

### post_v3_0_dmm_exceptions

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_dmm_exceptions

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### patch_v3_0_dmm_exceptions_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `targetEntities` (object)
- `event` (other)
- `criteria` (array)

### get_v3_0_dmm_exceptions_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### post_v3_0_dmm_exceptions_delete

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_response_tasks

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `dateTimeTarget` (string)
- `filter` (string)
- `top` (integer)

### get_v3_0_response_tasks_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### post_v3_0_response_containers_isolate

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_containers_restore

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_containers_terminate

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_endpoints_isolate

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_endpoints_restore

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_endpoints_collectfile

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_endpoints_terminateprocess

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_endpoints_startmalwarescan

**Environment variables**

- `API_KEY`

**Input schema**

- `endpoints` (array)

### post_v3_0_response_tasks_cancel

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_emails_delete

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_emails_quarantine

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_emails_restore

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_suspiciousobjects

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_suspiciousobjects_delete

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_response_customscripts

**Environment variables**

- `API_KEY`

**Input schema**

- `filter` (string)

### post_v3_0_response_customscripts

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_customscripts_id_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_v3_0_response_customscripts_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### delete_v3_0_response_customscripts_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### post_v3_0_response_endpoints_runscript

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_domainaccounts_disable

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_domainaccounts_enable

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_domainaccounts_signout

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_domainaccounts_resetpassword

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_endpointactionexceptions_register

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_response_endpointactionexceptions

**Environment variables**

- `API_KEY`

**Input schema**

- `TMV1-Filter` (string)

### patch_v3_0_response_settingstatus

**Environment variables**

- `API_KEY`

**Input schema**

- `endpointActionException` (string)
- `isolatedTrafficException` (string)

### get_v3_0_response_settingstatus

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_response_isolatedtrafficexceptions_register

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_response_isolatedtrafficexceptions

**Environment variables**

- `API_KEY`

**Input schema**

- `TMV1-Filter` (string)

### get_v3_0_threatintel_suspiciousobjects

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `startDateTime` (other)
- `endDateTime` (other)
- `top` (integer)
- `TMV1-Filter` (string)

### post_v3_0_threatintel_suspiciousobjects

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_threatintel_suspiciousobjects_delete

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_threatintel_suspiciousobjectexceptions

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `startDateTime` (other)
- `endDateTime` (other)
- `top` (integer)
- `TMV1-Filter` (string)

### post_v3_0_threatintel_suspiciousobjectexceptions

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_threatintel_suspiciousobjectexceptions_delete

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_threatintel_intelligencereports

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `filter` (string)
- `startDateTime` (other)
- `endDateTime` (other)
- `top` (integer)

### post_v3_0_threatintel_intelligencereports

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_threatintel_intelligencereports_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### post_v3_0_threatintel_intelligencereports_delete

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_threatintel_intelligencereports_sweep

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_threatintel_tasks

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `filter` (string)
- `startDateTime` (other)
- `endDateTime` (other)
- `top` (integer)

### get_v3_0_threatintel_tasks_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_v3_0_threatintel_feedindicators

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (other)
- `endDateTime` (other)
- `top` (integer)
- `indicatorObjectFormat` (string)

### get_v3_0_threatintel_feeds

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (other)
- `endDateTime` (other)
- `topReport` (integer)
- `responseObjectFormat` (string)
- `TMV1-Contextual-Filter` (string)

### get_v3_0_threatintel_feeds_filterdefinition

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_eiqs_endpoints

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `TMV1-Query` (string)

### get_v3_0_healthcheck_connectivity

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_audit_logs

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `dateTimeTarget` (string)
- `orderBy` (string)
- `top` (integer)
- `labels` (string)
- `Accept` (string)
- `TMV1-Filter` (string)

### get_v3_0_sandbox_submissionusage

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_sandbox_urls_analyze

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_sandbox_files_analyze

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_sandbox_tasks

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `dateTimeTarget` (string)
- `orderBy` (string)
- `filter` (string)
- `top` (integer)

### get_v3_0_sandbox_tasks_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_v3_0_sandbox_analysisresults

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `orderBy` (string)
- `filter` (string)
- `top` (integer)

### get_v3_0_sandbox_analysisresults_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_v3_0_sandbox_analysisresults_id_report

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_v3_0_sandbox_analysisresults_id_investigationpackage

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_v3_0_sandbox_analysisresults_id_suspiciousobjects

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_v3_0_asrm_vulnerabledevices

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_asrm_internalassetvulnerabilities

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_asrm_internetfacingassetvulnerabilities

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_asrm_containervulnerabilities

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_asrm_cloudvmvulnerabilities

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_asrm_serverlessfunctionvulnerabilities

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_asrm_highriskdevices

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_asrm_highriskdevices_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `riskyEventScore` (integer)

### get_v3_0_asrm_highriskusers

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_asrm_highriskusers_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_v3_0_asrm_attacksurfacedevices

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `lastDetectedStartDateTime` (string)
- `lastDetectedEndDateTime` (string)
- `firstSeenStartDateTime` (string)
- `firstSeenEndDateTime` (string)
- `TMV1-Filter` (string)

### get_v3_0_asrm_attacksurfacedomainaccounts

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_asrm_attacksurfaceserviceaccounts

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_asrm_attacksurfaceglobalfqdns

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_asrm_attacksurfacepublicipaddresses

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_asrm_attacksurfacecloudassets

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `lastDetectedStartDateTime` (string)
- `lastDetectedEndDateTime` (string)
- `firstSeenStartDateTime` (string)
- `firstSeenEndDateTime` (string)
- `TMV1-Filter` (string)

### get_v3_0_asrm_attacksurfacecloudassets_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_v3_0_asrm_attacksurfacecloudassets_id_riskindicatorevents

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `top` (integer)
- `orderBy` (string)
- `TMV1-Filter` (string)

### get_v3_0_asrm_attacksurfacelocalapps

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_asrm_attacksurfacelocalapps_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_v3_0_asrm_attacksurfacelocalapps_id_riskindicatorevents

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `top` (integer)
- `orderBy` (string)
- `TMV1-Filter` (string)

### get_v3_0_asrm_attacksurfacelocalapps_id_devices

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `top` (integer)
- `orderBy` (string)
- `TMV1-Filter` (string)

### get_v3_0_asrm_attacksurfacelocalapps_id_executablefiles

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `top` (integer)
- `orderBy` (string)
- `TMV1-Filter` (string)

### get_v3_0_asrm_accountcompromiseindicators

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `orderBy` (string)
- `TMV1-Filter` (string)

### get_v3_0_asrm_accountcompromiseeventdefinitions

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_endpointsecurity_endpoints_applysensorpolicy

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_endpointsecurity_endpoints

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `select` (string)
- `TMV1-Filter` (string)

### get_v3_0_endpointsecurity_endpoints_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_v3_0_asrm_securityposture

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_endpointsecurity_endpoints_export

**Environment variables**

- `API_KEY`

**Input schema**

- `filter` (string)
- `orderBy` (string)

### get_v3_0_endpointsecurity_tasks

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `dateTimeTarget` (string)
- `top` (integer)
- `orderBy` (string)
- `TMV1-Filter` (string)

### get_v3_0_endpointsecurity_tasks_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### post_v3_0_endpointsecurity_endpoints_delete

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_endpointsecurity_endpoints_removeoverriddensensorpolic

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_asrm_attacksurfacecustomtags

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `orderBy` (string)
- `TMV1-Filter` (string)

### post_v3_0_asrm_attacksurfacedevices_update

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_asrm_attacksurfacecloudassets_update

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_endpointsecurity_versioncontrolpolicies

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)

### get_v3_0_endpointsecurity_versioncontrolpolicypriorities

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `TMV1-Filter` (string)

### patch_v3_0_endpointsecurity_versioncontrolpolicypriorities_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `agentUpdateStatus` (string)
- `agentUpdatePolicy` (string)
- `componentUpdatePolicy` (string)

### delete_v3_0_endpointsecurity_versioncontrolpolicies_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_v3_0_endpointsecurity_versioncontrolpolicies_agentupdatepoli

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_casemanagement_cases_id_riskindicatorevents_close

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `status` (string)

### get_v3_0_casemanagement_cases_id_riskindicatorevents

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `top` (integer)
- `orderBy` (string)
- `TMV1-Filter` (string)

### post_v3_0_iam_accounts

**Environment variables**

- `API_KEY`

**Input schema**

- `email` (string)
- `role` (string)
- `authType` (string)
- `description` (string)

### get_v3_0_iam_accounts

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `TMV1-Filter` (string)

### patch_v3_0_iam_accounts_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `role` (string)
- `status` (string)
- `description` (string)
- `If-Match` (string)

### delete_v3_0_iam_accounts_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_v3_0_iam_accounts_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### post_v3_0_iam_apikeys

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_iam_apikeys

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### patch_v3_0_iam_apikeys_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `role` (string)
- `name` (string)
- `status` (string)
- `description` (string)
- `If-Match` (string)

### get_v3_0_iam_apikeys_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### post_v3_0_iam_apikeys_delete

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_cam_awsaccounts

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_cam_awsaccounts

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `TMV1-Filter` (string)

### patch_v3_0_cam_awsaccounts_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `If-Match` (string)

### delete_v3_0_cam_awsaccounts_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_v3_0_cam_awsaccounts_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### post_v3_0_cam_awsaccounts_generatecfntemplatelinks

**Environment variables**

- `API_KEY`

**Input schema**

- `awsRegion` (string)
- `features` (array)
- `templateAccountType` (string)
- `awsAccountName` (string)
- `awsAccountDescription` (string)
- `connectedSecurityServices` (array)
- `customTags` (array)

### post_v3_0_cam_awsaccounts_generateterraformpackage

**Environment variables**

- `API_KEY`

**Input schema**

- `awsRegion` (string)
- `features` (array)
- `awsAccountName` (string)
- `awsAccountDescription` (string)
- `connectedSecurityServices` (array)

### get_v3_0_cam_awsaccounts_features

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_cam_gcpprojects

**Environment variables**

- `API_KEY`

**Input schema**

- `workloadIdentityPoolId` (string)
- `oidcProviderId` (string)
- `serviceAccountId` (string)
- `projectNumber` (string)
- `name` (string)
- `description` (string)
- `gcpRegion` (string)
- `features` (array)

### get_v3_0_cam_gcpprojects

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `TMV1-Filter` (string)

### patch_v3_0_cam_gcpprojects_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `If-Match` (string)

### delete_v3_0_cam_gcpprojects_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_v3_0_cam_gcpprojects_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### post_v3_0_cam_gcpprojects_generateterraformpackage

**Environment variables**

- `API_KEY`

**Input schema**

- `gcpProjectName` (string)
- `gcpProjectDescription` (string)
- `gcpRegion` (string)
- `features` (array)

### post_v3_0_cam_alibabaaccounts

**Environment variables**

- `API_KEY`

**Input schema**

- `alibabaRegion` (string)
- `roleArn` (string)
- `oidcProviderId` (string)
- `name` (string)
- `description` (string)
- `connectedSecurityServices` (array)

### get_v3_0_cam_alibabaaccounts

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `TMV1-Filter` (string)

### patch_v3_0_cam_alibabaaccounts_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `If-Match` (string)

### delete_v3_0_cam_alibabaaccounts_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_v3_0_cam_alibabaaccounts_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### post_v3_0_cam_alibabaaccounts_generateterraformpackage

**Environment variables**

- `API_KEY`

**Input schema**

- `cloudAccountName` (string)
- `cloudAccountDescription` (string)
- `alibabaRegion` (string)
- `connectedSecurityServices` (array)

### get_v3_0_iam_roles

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `orderBy` (string)
- `TMV1-Filter` (string)

### get_v3_0_iam_roles_id_permissions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### post_v3_0_containersecurity_kubernetesclusters

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `groupId` (string)
- `description` (string)
- `policyId` (string)
- `resourceId` (string)

### get_v3_0_containersecurity_kubernetesclusters

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `orderBy` (string)
- `TMV1-Filter` (string)

### patch_v3_0_containersecurity_kubernetesclusters_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `description` (string)
- `policyId` (string)
- `resourceId` (string)
- `groupId` (string)
- `customizableTagIds` (array)

### get_v3_0_containersecurity_kubernetesclusters_id_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### delete_v3_0_containersecurity_kubernetesclusters_id_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_containersecurity_kubernetesclustergroups

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `orderBy` (string)
- `TMV1-Filter` (string)

### get_v3_0_containersecurity_amazonecsclusters

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### patch_v3_0_containersecurity_amazonecsclusters_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `description` (string)
- `policyId` (string)
- `vulnerabilityScanEnabled` (boolean)
- `runtimeSecurityEnabled` (boolean)
- `customizableTagIds` (array)

### get_v3_0_containersecurity_amazonecsclusters_id_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_containersecurity_policies

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `orderBy` (string)
- `TMV1-Filter` (string)

### post_v3_0_containersecurity_policies

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `description` (string)
- `default` (object)
- `namespaced` (array)
- `runtime` (object)
- `xdrEnabled` (boolean)
- `malwareScan` (object)
- `secretScan` (object)

### get_v3_0_containersecurity_policies_id_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### patch_v3_0_containersecurity_policies_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `description` (string)
- `default` (object)
- `namespaced` (array)
- `runtime` (object)
- `xdrEnabled` (boolean)
- `malwareScan` (object)
- `secretScan` (object)

### delete_v3_0_containersecurity_policies_id_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_containersecurity_managedrules

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_containersecurity_managedrules_id_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_containersecurity_rulesets

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_containersecurity_rulesets

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `orderBy` (string)
- `TMV1-Filter` (string)

### patch_v3_0_containersecurity_rulesets_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `description` (string)
- `labels` (array)
- `rules` (array)

### get_v3_0_containersecurity_rulesets_id_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### delete_v3_0_containersecurity_rulesets_id_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_containersecurity_kubernetesimages

**Environment variables**

- `API_KEY`

**Input schema**

- `orderBy` (string)
- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_containersecurity_kubernetesimageoccurrences

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_containersecurity_amazonecsimageoccurrences

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_containersecurity_kubernetesevaluationeventlogs

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `TMV1-Filter` (string)

### get_v3_0_containersecurity_kubernetesauditeventlogs

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `TMV1-Filter` (string)

### get_v3_0_containersecurity_kubernetessensoreventlogs

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `TMV1-Filter` (string)

### get_v3_0_containersecurity_amazonecssensoreventlogs

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `TMV1-Filter` (string)

### get_v3_0_containersecurity_vulnerabilities

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `orderBy` (string)
- `firstDetectedStartDateTime` (string)
- `firstDetectedEndDateTime` (string)
- `lastDetectedStartDateTime` (string)
- `lastDetectedEndDateTime` (string)
- `TMV1-Filter` (string)

### get_v3_0_containersecurity_compliancescanconfiguration

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### patch_v3_0_containersecurity_compliancescanconfiguration

**Environment variables**

- `API_KEY`

**Input schema**

- `scheduleScanEnabled` (boolean)
- `exceptions` (array)
- `benchmarkVersions` (array)
- `frameworks` (array)

### get_v3_0_containersecurity_compliancescansummary

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_v3_0_containersecurity_startcompliancescan

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_containersecurity_compliancescanversions

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_casemanagement_cases

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `startDateTime` (string)
- `endDateTime` (string)
- `dateTimeTarget` (string)
- `orderBy` (string)
- `TMV1-Filter` (string)

### post_v3_0_casemanagement_cases

**Environment variables**

- `API_KEY`

**Input schema**

- `associatedItemIds` (array)
- `description` (string)
- `externalTicketAlias` (string)
- `externalTicketId` (string)
- `findings` (string)
- `name` (string)
- `priority` (string)
- `relatedCaseIds` (array)
- `status` (string)
- `holder` (string)
- `externalTicketCreatedDateTime` (string)

### get_v3_0_casemanagement_cases_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### patch_v3_0_casemanagement_cases_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `associatedItemIds` (array)
- `description` (string)
- `findings` (string)
- `name` (string)
- `priority` (string)
- `relatedCaseIds` (array)
- `status` (string)
- `holder` (string)
- `externalTicketId` (string)
- `externalTicketUpdatedDateTime` (string)
- `If-Match` (string)

### post_v3_0_casemanagement_cases_id_attachments

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### delete_v3_0_casemanagement_cases_id_attachments_attachmentid_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `attachmentId` (string)

### get_v3_0_casemanagement_cases_id_attachments_attachmentid_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `attachmentId` (string)

### get_v3_0_casemanagement_cases_id_contents

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `top` (integer)
- `startDateTime` (string)
- `endDateTime` (string)
- `dateTimeTarget` (string)
- `orderBy` (string)
- `TMV1-Filter` (string)

### post_v3_0_casemanagement_cases_id_contents

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `attachmentIds` (array)
- `comment` (string)

### delete_v3_0_casemanagement_cases_id_contents_contentid_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `contentId` (string)

### get_v3_0_casemanagement_cases_id_contents_contentid_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `contentId` (string)

### patch_v3_0_casemanagement_cases_id_contents_contentid_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `contentId` (string)
- `attachmentIds` (array)
- `comment` (string)
- `If-Match` (string)

### get_v3_0_securityplaybooks_playbooks

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `orderBy` (string)
- `TMV1-Filter` (string)

### post_v3_0_securityplaybooks_playbooks_run

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_v3_0_securityplaybooks_tasks_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_v3_0_securityplaybooks_tasks_id_actions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `top` (integer)
- `orderBy` (string)
- `TMV1-Filter` (string)

### get_v3_0_securityplaybooks_tasks

**Environment variables**

- `API_KEY`

**Input schema**

- `startDateTime` (string)
- `endDateTime` (string)
- `dateTimeTarget` (string)
- `top` (integer)
- `orderBy` (string)
- `TMV1-Filter` (string)

### get_v3_0_emailassetinventory_emailaccounts

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_emailassetinventory_emaildomains

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `TMV1-Filter` (string)

### get_v3_0_emailassetinventory_emailservers

**Environment variables**

- `API_KEY`

**Input schema**

- `top` (integer)
- `TMV1-Filter` (string)
