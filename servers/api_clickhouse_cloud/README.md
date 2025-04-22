# @open-mcp/api_clickhouse_cloud

## Installing

First set the environment variables as shell variables:

```bash
# No environment variables required for this server
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_clickhouse_cloud \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_clickhouse_cloud \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add api_clickhouse_cloud \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_clickhouse_cloud": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_clickhouse_cloud"],
      "env": {}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

No environment variables required

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_clickhouse_cloud
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_clickhouse_cloud`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### get_v1_organizations

**Environment variables**



**Input schema**

```ts
{}
```

### get_v1_organizations_organizationid_

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization.")
}
```

### patch_v1_organizations_organizationid_

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization to update."),
  "name": z.string().describe("Name of the organization.").optional(),
  "privateEndpoints": z.any().optional()
}
```

### get_v1_organizations_organizationid_prometheus

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "filtered_metrics": z.string().describe("Return a filtered list of Prometheus metrics.").optional()
}
```

### get_v1_organizations_organizationid_services

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization.")
}
```

### post_v1_organizations_organizationid_services

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that will own the service."),
  "name": z.string().describe("Name of the service. Alphanumerical string with whitespaces up to 50 characters.").optional(),
  "provider": z.enum(["aws","gcp","azure"]).describe("Cloud provider").optional(),
  "region": z.enum(["ap-south-1","ap-southeast-1","eu-central-1","eu-west-1","eu-west-2","us-east-1","us-east-2","us-west-2","ap-southeast-2","ap-northeast-1","me-central-1","us-east1","us-central1","europe-west4","asia-southeast1","eastus","eastus2","westus3","germanywestcentral"]).describe("Service region.").optional(),
  "ipAccessList": z.array(z.any()).describe("List of IP addresses allowed to access the service").optional(),
  "minReplicaMemoryGb": z.number().multipleOf(4).gte(8).lte(236).describe("Minimum total memory of each replica during auto-scaling in Gb. Must be a multiple of 4 and greater than or equal to 8.").optional(),
  "maxReplicaMemoryGb": z.number().multipleOf(4).gte(8).lte(236).describe("Maximum total memory of each replica during auto-scaling in Gb.  Must be a multiple of 4 and lower than or equal to 120* for non paid services or 236* for paid services.* - maximum replica size subject to cloud provider hardware availability in your selected region. ").optional(),
  "numReplicas": z.number().gte(1).lte(20).describe("Number of replicas for the service. The number of replicas must be between 2 and 20 for the first service in a warehouse. Services that are created in an existing warehouse can have a number of replicas as low as 1. Further restrictions may apply based on your organization's tier. It defaults to 1 for the BASIC tier and 3 for the SCALE and ENTERPRISE tiers.").optional(),
  "idleScaling": z.boolean().describe("When set to true the service is allowed to scale down to zero when idle. True by default.").optional(),
  "idleTimeoutMinutes": z.number().describe("Set minimum idling timeout (in minutes). Must be >= 5 minutes.").optional(),
  "isReadonly": z.boolean().describe("True if this service is read-only. It can only be read-only if a dataWarehouseId is provided.").optional(),
  "dataWarehouseId": z.string().describe("Data warehouse containing this service").optional(),
  "backupId": z.string().uuid().describe("Optional backup ID used as an initial state for the new service. When used the region and the tier of the new instance must be the same as the values of the original instance.").optional(),
  "encryptionKey": z.string().describe("Optional customer provided disk encryption key").optional(),
  "encryptionAssumedRoleIdentifier": z.string().describe("Optional role to use for disk encryption").optional(),
  "privatePreviewTermsChecked": z.boolean().describe("Accept the private preview terms and conditions. It is only needed when creating the first service in the organization in case of a private preview").optional(),
  "releaseChannel": z.enum(["default","fast"]).describe("Select fast if you want to get new ClickHouse releases as soon as they are available. You'll get new features faster, but with a higher risk of bugs. This feature is only available for production services.").optional(),
  "byocId": z.string().describe("This is the ID returned after setting up a region for Bring Your Own Cloud (BYOC). When the byocId parameter is specified, the minReplicaMemoryGb and the maxReplicaGb parameters are required too, with values included among the following sizes: 28, 60, 124, 188, 252, 380.").optional(),
  "hasTransparentDataEncryption": z.boolean().describe("True if the service should have the Transparent Data Encryption (TDE) enabled. TDE is only available for ENTERPRISE organizations tiers and can only be enabled at service creation.").optional(),
  "endpoints": z.array(z.any()).describe("List of service endpoints to enable or disable").optional()
}
```

### get_v1_organizations_organizationid_services_serviceid_

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the requested service.")
}
```

### patch_v1_organizations_organizationid_services_serviceid_

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service to update."),
  "name": z.string().describe("Name of the service. Alphanumerical string with whitespaces up to 50 characters.").optional(),
  "ipAccessList": z.any().optional(),
  "privateEndpointIds": z.any().optional(),
  "releaseChannel": z.enum(["default","fast"]).describe("Select fast if you want to get new ClickHouse releases as soon as they are available. You'll get new features faster, but with a higher risk of bugs. This feature is only available for production services.").optional(),
  "endpoints": z.array(z.any()).describe("List of service endpoints to change").optional(),
  "transparentDataEncryptionKeyId": z.string().describe("The id of the key to rotate").optional()
}
```

### delete_v1_organizations_organizationid_services_serviceid_

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service to delete.")
}
```

### get_v1_organizations_organizationid_services_serviceid_privateen

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "serviceId": z.string().uuid().describe("ID of the requested service.")
}
```

### get_v1_organizations_organizationid_services_serviceid_servicequ

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "serviceId": z.string().uuid().describe("ID of the requested service.")
}
```

### delete_v1_organizations_organizationid_services_serviceid_servic

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "serviceId": z.string().uuid().describe("ID of the requested service.")
}
```

### post_v1_organizations_organizationid_services_serviceid_serviceq

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "serviceId": z.string().uuid().describe("ID of the requested service."),
  "roles": z.array(z.enum(["sql_console_read_only","sql_console_admin"])).describe("The roles").optional(),
  "openApiKeys": z.array(z.string()).describe("The version of the service query endpoint").optional(),
  "allowedOrigins": z.string().describe("The allowed origins as comma separated list of domains").optional()
}
```

### patch_v1_organizations_organizationid_services_serviceid_state

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service to update state."),
  "command": z.enum(["start","stop"]).describe("Command to change the state: 'start', 'stop'.").optional()
}
```

### patch_v1_organizations_organizationid_services_serviceid_scaling

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service to update scaling parameters."),
  "numReplicas": z.number().gte(1).lte(20).describe("Number of replicas for the service. The number of replicas must be between 2 and 20 for the first service in a warehouse. Services that are created in an existing warehouse can have a number of replicas as low as 1. Further restrictions may apply based on your organization's tier. It defaults to 1 for the BASIC tier and 3 for the SCALE and ENTERPRISE tiers.").optional(),
  "idleScaling": z.boolean().describe("When set to true the service is allowed to scale down to zero when idle. True by default.").optional(),
  "idleTimeoutMinutes": z.number().describe("Set minimum idling timeout (in minutes). Must be >= 5 minutes.").optional()
}
```

### patch_v1_organizations_organizationid_services_serviceid_replica

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service to update scaling parameters."),
  "minReplicaMemoryGb": z.number().multipleOf(4).gte(8).lte(236).describe("Minimum auto-scaling memory in Gb for a single replica. Available only for 'production' services. Must be a multiple of 4 and greater than or equal to 8.").optional(),
  "maxReplicaMemoryGb": z.number().multipleOf(4).gte(8).lte(236).describe("Maximum auto-scaling memory in Gb for a single replica . Available only for 'production' services. Must be a multiple of 4 and lower than or equal to 120 for non paid services or 236 for paid services.").optional(),
  "numReplicas": z.number().gte(1).lte(20).describe("Number of replicas for the service. The number of replicas must be between 2 and 20 for the first service in a warehouse. Services that are created in an existing warehouse can have a number of replicas as low as 1. Further restrictions may apply based on your organization's tier. It defaults to 1 for the BASIC tier and 3 for the SCALE and ENTERPRISE tiers.").optional(),
  "idleScaling": z.boolean().describe("When set to true the service is allowed to scale down to zero when idle. True by default.").optional(),
  "idleTimeoutMinutes": z.number().describe("Set minimum idling timeout (in minutes). Must be >= 5 minutes.").optional()
}
```

### patch_v1_organizations_organizationid_services_serviceid_passwor

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service to update password."),
  "newPasswordHash": z.string().describe("Optional password hash. Used to avoid password transmission over network. If not provided a new password is generated and is provided in the response. Otherwise this hash is used. Algorithm: echo -n \"yourpassword\" | sha256sum | tr -d '-' | xxd -r -p | base64").optional(),
  "newDoubleSha1Hash": z.string().describe("Optional double SHA1 password hash for MySQL protocol. If newPasswordHash is not provided this key will be ignored and the generated password will be used. Algorithm: echo -n \"yourpassword\" | sha1sum | tr -d '-' | xxd -r -p | sha1sum | tr -d '-'").optional()
}
```

### post_v1_organizations_organizationid_services_serviceid_privatee

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "serviceId": z.string().uuid().describe("ID of the requested service."),
  "id": z.string().describe("Private endpoint identifier").optional(),
  "description": z.string().describe("Description of private endpoint").optional()
}
```

### get_v1_organizations_organizationid_services_serviceid_prometheu

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the requested service."),
  "filtered_metrics": z.string().describe("Return a filtered list of Prometheus metrics.").optional()
}
```

### get_v1_organizations_organizationid_services_serviceid_backups

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the backup."),
  "serviceId": z.string().uuid().describe("ID of the service the backup was created from.")
}
```

### get_v1_organizations_organizationid_services_serviceid_backups_b

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the backup."),
  "serviceId": z.string().uuid().describe("ID of the service the backup was created from."),
  "backupId": z.string().uuid().describe("ID of the requested backup.")
}
```

### get_v1_organizations_organizationid_services_serviceid_backupcon

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service.")
}
```

### patch_v1_organizations_organizationid_services_serviceid_backupc

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service."),
  "backupPeriodInHours": z.number().describe("The interval in hours between each backup.").optional(),
  "backupRetentionPeriodInHours": z.number().describe("The minimum duration in hours for which the backups are available.").optional(),
  "backupStartTime": z.string().describe("The time in HH:MM format for the backups to be performed (evaluated in UTC timezone). When defined the backup period resets to every 24 hours.").optional()
}
```

### get_v1_organizations_organizationid_keys

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization.")
}
```

### post_v1_organizations_organizationid_keys

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that will own the key."),
  "name": z.string().describe("Name of the key.").optional(),
  "expireAt": z.string().datetime({ offset: true }).describe("Timestamp the key expires. If not present or is empty the key never expires. ISO-8601.").optional(),
  "state": z.enum(["enabled","disabled"]).describe("Initial state of the key: 'enabled', 'disabled'. If not provided the new key will be 'enabled'.").optional(),
  "hashData": z.any().optional(),
  "roles": z.array(z.enum(["admin","developer","query_endpoints"])).describe("List of roles assigned to the key. Contains at least 1 element.").optional(),
  "ipAccessList": z.array(z.any()).describe("List of IP addresses allowed to access the API using this key").optional()
}
```

### get_v1_organizations_organizationid_keys_keyid_

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "keyId": z.string().uuid().describe("ID of the requested key.")
}
```

### patch_v1_organizations_organizationid_keys_keyid_

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the key."),
  "keyId": z.string().uuid().describe("ID of the key to update."),
  "name": z.string().describe("Name of the key").optional(),
  "roles": z.array(z.enum(["admin","developer","query_endpoints"])).describe("List of roles assigned to the key. Contains at least 1 element.").optional(),
  "expireAt": z.string().datetime({ offset: true }).describe("Timestamp the key expires. If not present or is empty the key never expires. ISO-8601.").optional(),
  "state": z.enum(["enabled","disabled"]).describe("State of the key: 'enabled', 'disabled'.").optional(),
  "ipAccessList": z.array(z.any()).describe("List of IP addresses allowed to access the API using this key").optional()
}
```

### delete_v1_organizations_organizationid_keys_keyid_

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the key."),
  "keyId": z.string().uuid().describe("ID of the key to delete.")
}
```

### get_v1_organizations_organizationid_members

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization.")
}
```

### get_v1_organizations_organizationid_members_userid_

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization the member is part of."),
  "userId": z.string().uuid().describe("ID of the requested user.")
}
```

### patch_v1_organizations_organizationid_members_userid_

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization the member is part of."),
  "userId": z.string().uuid().describe("ID of the user to patch"),
  "role": z.enum(["admin","developer"]).describe("Role of the member in the organization.").optional()
}
```

### delete_v1_organizations_organizationid_members_userid_

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "userId": z.string().uuid().describe("ID of the requested user.")
}
```

### get_v1_organizations_organizationid_invitations

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization.")
}
```

### post_v1_organizations_organizationid_invitations

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization to invite a user to."),
  "email": z.string().email().describe("Email of the invited user. Only a user with this email can join using the invitation. The email is stored in a lowercase form.").optional(),
  "role": z.enum(["admin","developer"]).describe("Role of the member in the organization.").optional()
}
```

### get_v1_organizations_organizationid_invitations_invitationid_

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "invitationId": z.string().uuid().describe("ID of the requested organization.")
}
```

### delete_v1_organizations_organizationid_invitations_invitationid_

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that has the invitation."),
  "invitationId": z.string().uuid().describe("ID of the requested organization.")
}
```

### get_v1_organizations_organizationid_activities

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "from_date": z.string().datetime({ offset: true }).describe("A starting date for a search").optional(),
  "to_date": z.string().datetime({ offset: true }).describe("An ending date for a search").optional()
}
```

### get_v1_organizations_organizationid_activities_activityid_

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "activityId": z.string().describe("ID of the requested activity.")
}
```

### get_v1_organizations_organizationid_usagecost

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "from_date": z.string().datetime({ offset: true }).describe("Start date for the report, e.g. 2024-12-19."),
  "to_date": z.string().datetime({ offset: true }).describe("End date (inclusive) for the report, e.g. 2024-12-20. This date cannot be more than 30 days after from_date (for a maximum queried period of 31 days).")
}
```

### get_v1_organizations_organizationid_privateendpointconfig

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "Cloud provider identifier": z.string().describe("Cloud provider identifier. One of aws, gcp, or azure."),
  "Cloud provider region": z.string().describe("Region identifier within specific cloud providers.")
}
```

### get_v1_organizations_organizationid_services_serviceid_clickpipe

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service that owns the Reverse Private Endpoint.")
}
```

### post_v1_organizations_organizationid_services_serviceid_clickpip

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service that owns the Reverse Private Endpoint."),
  "description": z.string().describe("Reverse private endpoint description. Maximum length is 255 characters.").optional(),
  "type": z.enum(["VPC_ENDPOINT_SERVICE","VPC_RESOURCE","MSK_MULTI_VPC"]).describe("Reverse private endpoint type.").optional(),
  "vpcEndpointServiceName": z.string().nullable().describe("VPC endpoint service name.").optional(),
  "vpcResourceConfigurationId": z.string().nullable().describe("VPC resource configuration ID. Required for VPC_RESOURCE type.").optional(),
  "vpcResourceShareArn": z.string().nullable().describe("VPC resource share ARN. Required for VPC_RESOURCE type.").optional(),
  "mskClusterArn": z.string().nullable().describe("MSK cluster ARN. Required for MSK_MULTI_VPC type.").optional(),
  "mskAuthentication": z.enum(["SASL_IAM","SASL_SCRAM"]).nullable().describe("MSK cluster authentication type. Required for MSK_MULTI_VPC type.").optional()
}
```

### get_v1_organizations_organizationid_services_serviceid_clickpipe

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service that owns the Reverse Private Endpoint."),
  "reversePrivateEndpointId": z.string().uuid().describe("ID of the reverse private endpoint to get.")
}
```

### delete_v1_organizations_organizationid_services_serviceid_clickp

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service that owns the Reverse Private Endpoint."),
  "reversePrivateEndpointId": z.string().uuid().describe("ID of the reverse private endpoint to delete.")
}
```

### get_v1_organizations_organizationid_services_serviceid_clickpipe

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service that owns the ClickPipe.")
}
```

### post_v1_organizations_organizationid_services_serviceid_clickpip

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service to create the ClickPipe for."),
  "name": z.string().describe("Name of the ClickPipe.").optional(),
  "description": z.string().describe("Description of the ClickPipe.").optional(),
  "source": z.any().optional(),
  "destination": z.any().optional(),
  "fieldMappings": z.array(z.any()).describe("Field mappings of the ClickPipe.").optional()
}
```

### get_v1_organizations_organizationid_services_serviceid_clickpipe

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service that owns the ClickPipe."),
  "clickPipeId": z.string().uuid().describe("ID of the requested ClickPipe.")
}
```

### patch_v1_organizations_organizationid_services_serviceid_clickpi

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service to create the ClickPipe for."),
  "clickPipeId": z.string().uuid().describe("ID of the requested ClickPipe."),
  "name": z.string().nullable().describe("Name of the ClickPipe.").optional(),
  "description": z.string().nullable().describe("Description of the ClickPipe.").optional(),
  "source": z.any().nullable().optional(),
  "destination": z.any().nullable().optional(),
  "fieldMappings": z.array(z.any()).describe("Field mappings of the ClickPipe. This will not update the table schema, only the ClickPipe configuration.").optional()
}
```

### delete_v1_organizations_organizationid_services_serviceid_clickp

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service that owns the ClickPipe."),
  "clickPipeId": z.string().uuid().describe("ID of the ClickPipe to delete.")
}
```

### patch_v1_organizations_organizationid_services_serviceid_clickpi

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service that owns the ClickPipe."),
  "clickPipeId": z.string().uuid().describe("ID of the ClickPipe to update scaling settings."),
  "replicas": z.number().int().gte(1).lte(10).nullable().describe("Number of replicas to scale to. Use to scale Kafka pipes.").optional()
}
```

### patch_v1_organizations_organizationid_services_serviceid_clickpi

**Environment variables**



**Input schema**

```ts
{
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service that owns the ClickPipe."),
  "clickPipeId": z.string().uuid().describe("ID of the ClickPipe to update state.."),
  "command": z.enum(["start","stop","resync"]).describe("Command to change the state: 'start', 'stop', 'resync'.").optional()
}
```
