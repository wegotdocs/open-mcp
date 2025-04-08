# @open-mcp/apigee

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/apigee add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/apigee add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/apigee add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "apigee": {
      "command": "npx",
      "args": ["-y", "@open-mcp/apigee"],
      "env": {"OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `OAUTH2_TOKEN`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/apigee
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/apigee`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### parameters_v1_projects_projectsid_provisionorganization

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_projects_provisionorganization

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "projectsId": z.string(),
  "analyticsRegion": z.string().describe("Primary Cloud Platform region for analytics data storage. For valid values, see [Create an organization](https://cloud.google.com/apigee/docs/hybrid/latest/precog-provision). Defaults to \`us-west1\`.").optional(),
  "authorizedNetwork": z.string().describe("Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: \`projects/{host-project-id}/{region}/networks/{network-name}\`. For example: \`projects/my-sharedvpc-host/global/networks/mynetwork\`").optional(),
  "runtimeLocation": z.string().describe("Cloud Platform location for the runtime instance. Defaults to zone \`us-west1-a\`. If a region is provided, \`EVAL\` organizations will use the region for automatically selecting a zone for the runtime instance.").optional(),
  "disableVpcPeering": z.boolean().describe("Optional. Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. Required if an authorizedNetwork on the consumer project is not provided, in which case the flag should be set to true. The value must be set before the creation of any Apigee runtime instance and can be updated only when there are no runtime instances. **Note:** Apigee will be deprecating the vpc peering model that requires you to provide 'authorizedNetwork', by making the non-peering model as the default way of provisioning Apigee organization in future. So, this will be a temporary flag to enable the transition. Not supported for Apigee hybrid.").optional()
}
```

### parameters_v1_organizations_organizationsid_deployedingressconfi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_getdeployedingressconfig

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "view": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "retention": z.string().optional()
}
```

### apigee_organizations_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string()
}
```

### apigee_organizations_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "description": z.string().describe("Description of the Apigee organization.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the organization. Values other than ACTIVE means the resource is not ready to use.").readonly().optional(),
  "lastModifiedAt": z.string().describe("Output only. Time that the Apigee organization was last modified in milliseconds since epoch.").readonly().optional(),
  "projectId": z.string().describe("Output only. Project ID associated with the Apigee organization.").readonly().optional(),
  "displayName": z.string().describe("Display name for the Apigee organization. Unused, but reserved for future use.").optional(),
  "customerName": z.string().describe("Not used by Apigee.").optional(),
  "subscriptionPlan": z.enum(["SUBSCRIPTION_PLAN_UNSPECIFIED","SUBSCRIPTION_2021","SUBSCRIPTION_2024"]).describe("Output only. Subscription plan that the customer has purchased. Output only.").readonly().optional(),
  "name": z.string().describe("Output only. Name of the Apigee organization.").readonly().optional(),
  "caCertificate": z.string().describe("Output only. Base64-encoded public certificate for the root CA of the Apigee organization. Valid only when [RuntimeType](#RuntimeType) is \`CLOUD\`.").readonly().optional(),
  "portalDisabled": z.boolean().describe("Configuration for the Portals settings.").optional(),
  "apigeeProjectId": z.string().describe("Output only. Apigee Project ID associated with the organization. Use this project to allowlist Apigee in the Service Attachment when using private service connect with Apigee.").readonly().optional(),
  "properties": z.object({ "property": z.array(z.object({ "value": z.string().describe("The property value").optional(), "name": z.string().describe("The property key").optional() }).describe("A single property entry in the Properties message.")).describe("List of all properties in the object").optional() }).describe("Properties defined in the Apigee organization profile.").optional(),
  "attributes": z.array(z.string()).describe("Not used by Apigee.").optional(),
  "type": z.enum(["TYPE_UNSPECIFIED","TYPE_TRIAL","TYPE_PAID","TYPE_INTERNAL"]).describe("Not used by Apigee.").optional(),
  "authorizedNetwork": z.string().describe("Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Valid only when [RuntimeType](#RuntimeType) is set to \`CLOUD\`. The value must be set before the creation of a runtime instance and can be updated only when there are no runtime instances. For example: \`default\`. Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: \`projects/{host-project-id}/{region}/networks/{network-name}\`. For example: \`projects/my-sharedvpc-host/global/networks/mynetwork\` **Note:** Not supported for Apigee hybrid.").optional(),
  "addonsConfig": z.object({ "advancedApiOpsConfig": z.object({ "enabled": z.boolean().describe("Flag that specifies whether the Advanced API Ops add-on is enabled.").optional() }).describe("Configuration for the Advanced API Ops add-on.").optional(), "connectorsPlatformConfig": z.object({ "expiresAt": z.string().describe("Output only. Time at which the Connectors Platform add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire.").readonly().optional(), "enabled": z.boolean().describe("Flag that specifies whether the Connectors Platform add-on is enabled.").optional() }).describe("Configuration for the Connectors Platform add-on.").optional(), "monetizationConfig": z.object({ "enabled": z.boolean().describe("Flag that specifies whether the Monetization add-on is enabled.").optional() }).describe("Configuration for the Monetization add-on.").optional(), "analyticsConfig": z.object({ "updateTime": z.string().describe("Output only. The latest update time.").readonly().optional(), "state": z.enum(["ADDON_STATE_UNSPECIFIED","ENABLING","ENABLED","DISABLING","DISABLED"]).describe("Output only. The state of the Analytics add-on.").readonly().optional(), "expireTimeMillis": z.string().describe("Output only. Time at which the Analytics add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire.").readonly().optional(), "enabled": z.boolean().describe("Whether the Analytics add-on is enabled.").optional() }).describe("Configuration for the Analytics add-on. Only used in organizations.environments.addonsConfig.").optional(), "integrationConfig": z.object({ "enabled": z.boolean().describe("Flag that specifies whether the Integration add-on is enabled.").optional() }).describe("Configuration for the Integration add-on.").optional(), "apiSecurityConfig": z.object({ "expiresAt": z.string().describe("Output only. Time at which the API Security add-on expires in in milliseconds since epoch. If unspecified, the add-on will never expire.").readonly().optional(), "enabled": z.boolean().describe("Flag that specifies whether the API security add-on is enabled.").optional() }).describe("Configuration for the API Security add-on.").optional() }).describe("Addon configurations of the Apigee organization.").optional(),
  "controlPlaneEncryptionKeyName": z.string().describe("Cloud KMS key name used for encrypting control plane data that is stored in a multi region. Only used for the data residency region \"US\" or \"EU\". If not specified or [BillingType](#BillingType) is \`EVALUATION\`, a Google-Managed encryption key will be used. Format: \`projects/*/locations/*/keyRings/*/cryptoKeys/*\`").optional(),
  "runtimeDatabaseEncryptionKeyName": z.string().describe("Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. If not specified or [RuntimeType](#RuntimeType) is \`TRIAL\`, a Google-Managed encryption key will be used. For example: \"projects/foo/locations/us/keyRings/bar/cryptoKeys/baz\". **Note:** Not supported for Apigee hybrid.").optional(),
  "environments": z.array(z.string()).describe("Output only. List of environments in the Apigee organization.").readonly().optional(),
  "disableVpcPeering": z.boolean().describe("Optional. Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. Valid only when RuntimeType is set to CLOUD. Required if an authorizedNetwork on the consumer project is not provided, in which case the flag should be set to true. The value must be set before the creation of any Apigee runtime instance and can be updated only when there are no runtime instances. **Note:** Apigee will be deprecating the vpc peering model that requires you to provide 'authorizedNetwork', by making the non-peering model as the default way of provisioning Apigee organization in future. So, this will be a temporary flag to enable the transition. Not supported for Apigee hybrid.").optional(),
  "expiresAt": z.string().describe("Output only. Time that the Apigee organization is scheduled for deletion.").readonly().optional(),
  "runtimeType": z.enum(["RUNTIME_TYPE_UNSPECIFIED","CLOUD","HYBRID"]).describe("Required. Runtime type of the Apigee organization based on the Apigee subscription purchased.").optional(),
  "apiConsumerDataEncryptionKeyName": z.string().describe("Cloud KMS key name used for encrypting API consumer data. If not specified or [BillingType](#BillingType) is \`EVALUATION\`, a Google-Managed encryption key will be used. Format: \`projects/*/locations/*/keyRings/*/cryptoKeys/*\`").optional(),
  "createdAt": z.string().describe("Output only. Time that the Apigee organization was created in milliseconds since epoch.").readonly().optional(),
  "apiConsumerDataLocation": z.string().describe("This field is needed only for customers using non-default data residency regions. Apigee stores some control plane data only in single region. This field determines which single region Apigee should use. For example: \"us-west1\" when control plane is in US or \"europe-west2\" when control plane is in EU.").optional(),
  "billingType": z.enum(["BILLING_TYPE_UNSPECIFIED","SUBSCRIPTION","EVALUATION","PAYG"]).describe("Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).").optional()
}
```

### parameters_v1_organizations_organizationsid_runtimeconfig

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_getruntimeconfig

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_securitysettings

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_updatesecuritysettings

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "updateMask": z.string().optional(),
  "name": z.string().describe("Identifier. Full resource name is always \`organizations/{org}/securitySettings\`.").optional(),
  "mlRetrainingFeedbackEnabled": z.boolean().describe("Optional. If true the user consents to the use of ML models for Abuse detection.").optional()
}
```

### apigee_organizations_getsecuritysettings

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_controlplaneaccess

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_updatecontrolplaneaccess

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "updateMask": z.string().optional(),
  "analyticsPublisherIdentities": z.array(z.string()).describe("Optional. Array of service accounts authorized to publish analytics data to the control plane (for the Message Processor component).").optional(),
  "name": z.string().describe("Identifier. The resource name of the ControlPlaneAccess. Format: \"organizations/{org}/controlPlaneAccess\"").optional(),
  "synchronizerIdentities": z.array(z.string()).describe("Optional. Array of service accounts to grant access to control plane resources (for the Synchronizer component). The service accounts must have **Apigee Synchronizer Manager** role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/latest/sa-about#create-the-service-accounts).").optional()
}
```

### apigee_organizations_getcontrolplaneaccess

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string()
}
```

### parameters_v1_organizations

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "parent": z.string().optional(),
  "description": z.string().describe("Description of the Apigee organization.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the organization. Values other than ACTIVE means the resource is not ready to use.").readonly().optional(),
  "lastModifiedAt": z.string().describe("Output only. Time that the Apigee organization was last modified in milliseconds since epoch.").readonly().optional(),
  "projectId": z.string().describe("Output only. Project ID associated with the Apigee organization.").readonly().optional(),
  "displayName": z.string().describe("Display name for the Apigee organization. Unused, but reserved for future use.").optional(),
  "customerName": z.string().describe("Not used by Apigee.").optional(),
  "subscriptionPlan": z.enum(["SUBSCRIPTION_PLAN_UNSPECIFIED","SUBSCRIPTION_2021","SUBSCRIPTION_2024"]).describe("Output only. Subscription plan that the customer has purchased. Output only.").readonly().optional(),
  "name": z.string().describe("Output only. Name of the Apigee organization.").readonly().optional(),
  "caCertificate": z.string().describe("Output only. Base64-encoded public certificate for the root CA of the Apigee organization. Valid only when [RuntimeType](#RuntimeType) is \`CLOUD\`.").readonly().optional(),
  "portalDisabled": z.boolean().describe("Configuration for the Portals settings.").optional(),
  "apigeeProjectId": z.string().describe("Output only. Apigee Project ID associated with the organization. Use this project to allowlist Apigee in the Service Attachment when using private service connect with Apigee.").readonly().optional(),
  "properties": z.object({ "property": z.array(z.object({ "value": z.string().describe("The property value").optional(), "name": z.string().describe("The property key").optional() }).describe("A single property entry in the Properties message.")).describe("List of all properties in the object").optional() }).describe("Properties defined in the Apigee organization profile.").optional(),
  "attributes": z.array(z.string()).describe("Not used by Apigee.").optional(),
  "type": z.enum(["TYPE_UNSPECIFIED","TYPE_TRIAL","TYPE_PAID","TYPE_INTERNAL"]).describe("Not used by Apigee.").optional(),
  "authorizedNetwork": z.string().describe("Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Valid only when [RuntimeType](#RuntimeType) is set to \`CLOUD\`. The value must be set before the creation of a runtime instance and can be updated only when there are no runtime instances. For example: \`default\`. Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: \`projects/{host-project-id}/{region}/networks/{network-name}\`. For example: \`projects/my-sharedvpc-host/global/networks/mynetwork\` **Note:** Not supported for Apigee hybrid.").optional(),
  "addonsConfig": z.object({ "advancedApiOpsConfig": z.object({ "enabled": z.boolean().describe("Flag that specifies whether the Advanced API Ops add-on is enabled.").optional() }).describe("Configuration for the Advanced API Ops add-on.").optional(), "connectorsPlatformConfig": z.object({ "expiresAt": z.string().describe("Output only. Time at which the Connectors Platform add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire.").readonly().optional(), "enabled": z.boolean().describe("Flag that specifies whether the Connectors Platform add-on is enabled.").optional() }).describe("Configuration for the Connectors Platform add-on.").optional(), "monetizationConfig": z.object({ "enabled": z.boolean().describe("Flag that specifies whether the Monetization add-on is enabled.").optional() }).describe("Configuration for the Monetization add-on.").optional(), "analyticsConfig": z.object({ "updateTime": z.string().describe("Output only. The latest update time.").readonly().optional(), "state": z.enum(["ADDON_STATE_UNSPECIFIED","ENABLING","ENABLED","DISABLING","DISABLED"]).describe("Output only. The state of the Analytics add-on.").readonly().optional(), "expireTimeMillis": z.string().describe("Output only. Time at which the Analytics add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire.").readonly().optional(), "enabled": z.boolean().describe("Whether the Analytics add-on is enabled.").optional() }).describe("Configuration for the Analytics add-on. Only used in organizations.environments.addonsConfig.").optional(), "integrationConfig": z.object({ "enabled": z.boolean().describe("Flag that specifies whether the Integration add-on is enabled.").optional() }).describe("Configuration for the Integration add-on.").optional(), "apiSecurityConfig": z.object({ "expiresAt": z.string().describe("Output only. Time at which the API Security add-on expires in in milliseconds since epoch. If unspecified, the add-on will never expire.").readonly().optional(), "enabled": z.boolean().describe("Flag that specifies whether the API security add-on is enabled.").optional() }).describe("Configuration for the API Security add-on.").optional() }).describe("Addon configurations of the Apigee organization.").optional(),
  "controlPlaneEncryptionKeyName": z.string().describe("Cloud KMS key name used for encrypting control plane data that is stored in a multi region. Only used for the data residency region \"US\" or \"EU\". If not specified or [BillingType](#BillingType) is \`EVALUATION\`, a Google-Managed encryption key will be used. Format: \`projects/*/locations/*/keyRings/*/cryptoKeys/*\`").optional(),
  "runtimeDatabaseEncryptionKeyName": z.string().describe("Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. If not specified or [RuntimeType](#RuntimeType) is \`TRIAL\`, a Google-Managed encryption key will be used. For example: \"projects/foo/locations/us/keyRings/bar/cryptoKeys/baz\". **Note:** Not supported for Apigee hybrid.").optional(),
  "environments": z.array(z.string()).describe("Output only. List of environments in the Apigee organization.").readonly().optional(),
  "disableVpcPeering": z.boolean().describe("Optional. Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. Valid only when RuntimeType is set to CLOUD. Required if an authorizedNetwork on the consumer project is not provided, in which case the flag should be set to true. The value must be set before the creation of any Apigee runtime instance and can be updated only when there are no runtime instances. **Note:** Apigee will be deprecating the vpc peering model that requires you to provide 'authorizedNetwork', by making the non-peering model as the default way of provisioning Apigee organization in future. So, this will be a temporary flag to enable the transition. Not supported for Apigee hybrid.").optional(),
  "expiresAt": z.string().describe("Output only. Time that the Apigee organization is scheduled for deletion.").readonly().optional(),
  "runtimeType": z.enum(["RUNTIME_TYPE_UNSPECIFIED","CLOUD","HYBRID"]).describe("Required. Runtime type of the Apigee organization based on the Apigee subscription purchased.").optional(),
  "apiConsumerDataEncryptionKeyName": z.string().describe("Cloud KMS key name used for encrypting API consumer data. If not specified or [BillingType](#BillingType) is \`EVALUATION\`, a Google-Managed encryption key will be used. Format: \`projects/*/locations/*/keyRings/*/cryptoKeys/*\`").optional(),
  "createdAt": z.string().describe("Output only. Time that the Apigee organization was created in milliseconds since epoch.").readonly().optional(),
  "apiConsumerDataLocation": z.string().describe("This field is needed only for customers using non-default data residency regions. Apigee stores some control plane data only in single region. This field determines which single region Apigee should use. For example: \"us-west1\" when control plane is in US or \"europe-west2\" when control plane is in EU.").optional(),
  "billingType": z.enum(["BILLING_TYPE_UNSPECIFIED","SUBSCRIPTION","EVALUATION","PAYG"]).describe("Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).").optional()
}
```

### apigee_organizations_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_v1_organizations_organizationsid_setaddons

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_setaddons

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "addonsConfig": z.object({ "advancedApiOpsConfig": z.object({ "enabled": z.boolean().describe("Flag that specifies whether the Advanced API Ops add-on is enabled.").optional() }).describe("Configuration for the Advanced API Ops add-on.").optional(), "connectorsPlatformConfig": z.object({ "expiresAt": z.string().describe("Output only. Time at which the Connectors Platform add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire.").readonly().optional(), "enabled": z.boolean().describe("Flag that specifies whether the Connectors Platform add-on is enabled.").optional() }).describe("Configuration for the Connectors Platform add-on.").optional(), "monetizationConfig": z.object({ "enabled": z.boolean().describe("Flag that specifies whether the Monetization add-on is enabled.").optional() }).describe("Configuration for the Monetization add-on.").optional(), "analyticsConfig": z.object({ "updateTime": z.string().describe("Output only. The latest update time.").readonly().optional(), "state": z.enum(["ADDON_STATE_UNSPECIFIED","ENABLING","ENABLED","DISABLING","DISABLED"]).describe("Output only. The state of the Analytics add-on.").readonly().optional(), "expireTimeMillis": z.string().describe("Output only. Time at which the Analytics add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire.").readonly().optional(), "enabled": z.boolean().describe("Whether the Analytics add-on is enabled.").optional() }).describe("Configuration for the Analytics add-on. Only used in organizations.environments.addonsConfig.").optional(), "integrationConfig": z.object({ "enabled": z.boolean().describe("Flag that specifies whether the Integration add-on is enabled.").optional() }).describe("Configuration for the Integration add-on.").optional(), "apiSecurityConfig": z.object({ "expiresAt": z.string().describe("Output only. Time at which the API Security add-on expires in in milliseconds since epoch. If unspecified, the add-on will never expire.").readonly().optional(), "enabled": z.boolean().describe("Flag that specifies whether the API security add-on is enabled.").optional() }).describe("Configuration for the API Security add-on.").optional() }).describe("Required. Add-on configurations.").optional()
}
```

### parameters_v1_organizations_organizationsid_getprojectmapping

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_getprojectmapping

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_getsyncauthorization

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_getsyncauthorization

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_setsyncauthorization

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_setsyncauthorization

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "identities": z.array(z.string()).describe("Required. Array of service accounts to grant access to control plane resources, each specified using the following format: \`serviceAccount:\` service-account-name. The service-account-name is formatted like an email address. For example: \`my-synchronizer-manager-service_account@my_project_id.iam.gserviceaccount.com\` You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one. The service accounts must have **Apigee Synchronizer Manager** role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/latest/sa-about#create-the-service-accounts).").optional(),
  "etag": z.string().describe("Entity tag (ETag) used for optimistic concurrency control as a way to help prevent simultaneous updates from overwriting each other. For example, when you call [getSyncAuthorization](organizations/getSyncAuthorization) an ETag is returned in the response. Pass that ETag when calling the [setSyncAuthorization](organizations/setSyncAuthorization) to ensure that you are updating the correct version. If you don't pass the ETag in the call to \`setSyncAuthorization\`, then the existing authorization is overwritten indiscriminately. **Note**: We strongly recommend that you use the ETag in the read-modify-write cycle to avoid race conditions.").optional()
}
```

### parameters_v1_organizations_organizationsid_sharedflows_sharedfl

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_sharedflows_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sharedflowsId": z.string()
}
```

### apigee_organizations_sharedflows_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sharedflowsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_sharedflows

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_sharedflows_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "name": z.string().optional(),
  "action": z.string().optional(),
  "contentType": z.string().describe("The HTTP Content-Type header value specifying the content type of the body.").optional(),
  "extensions": z.array(z.record(z.any().describe("Properties of the object. Contains field @type with type URL."))).describe("Application specific response metadata. Must be set in the first response for streaming APIs.").optional(),
  "data": z.string().describe("The HTTP request/response body as raw binary.").optional()
}
```

### apigee_organizations_sharedflows_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "includeMetaData": z.boolean().optional(),
  "includeRevisions": z.boolean().optional()
}
```

### parameters_v1_organizations_organizationsid_sharedflows_sharedfl

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_sharedflows_revisions_updatesharedflowrevis

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sharedflowsId": z.string(),
  "revisionsId": z.string(),
  "validate": z.boolean().optional(),
  "contentType": z.string().describe("The HTTP Content-Type header value specifying the content type of the body.").optional(),
  "extensions": z.array(z.record(z.any().describe("Properties of the object. Contains field @type with type URL."))).describe("Application specific response metadata. Must be set in the first response for streaming APIs.").optional(),
  "data": z.string().describe("The HTTP request/response body as raw binary.").optional()
}
```

### apigee_organizations_sharedflows_revisions_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sharedflowsId": z.string(),
  "revisionsId": z.string(),
  "format": z.string().optional()
}
```

### apigee_organizations_sharedflows_revisions_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sharedflowsId": z.string(),
  "revisionsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_sharedflows_sharedfl

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_sharedflows_revisions_deployments_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sharedflowsId": z.string(),
  "revisionsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_sharedflows_sharedfl

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_sharedflows_deployments_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sharedflowsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_datacollectors

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_datacollectors_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional()
}
```

### apigee_organizations_datacollectors_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "dataCollectorId": z.string().optional(),
  "lastModifiedAt": z.string().describe("Output only. The time at which the Data Collector was last updated in milliseconds since the epoch.").readonly().optional(),
  "description": z.string().describe("A description of the data collector.").optional(),
  "name": z.string().describe("ID of the data collector. Must begin with \`dc_\`.").optional(),
  "createdAt": z.string().describe("Output only. The time at which the data collector was created in milliseconds since the epoch.").readonly().optional(),
  "type": z.enum(["TYPE_UNSPECIFIED","INTEGER","FLOAT","STRING","BOOLEAN","DATETIME"]).describe("Immutable. The type of data this data collector will collect.").optional()
}
```

### parameters_v1_organizations_organizationsid_datacollectors_datac

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_datacollectors_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "datacollectorsId": z.string()
}
```

### apigee_organizations_datacollectors_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "datacollectorsId": z.string()
}
```

### apigee_organizations_datacollectors_patch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "datacollectorsId": z.string(),
  "updateMask": z.string().optional(),
  "lastModifiedAt": z.string().describe("Output only. The time at which the Data Collector was last updated in milliseconds since the epoch.").readonly().optional(),
  "description": z.string().describe("A description of the data collector.").optional(),
  "name": z.string().describe("ID of the data collector. Must begin with \`dc_\`.").optional(),
  "createdAt": z.string().describe("Output only. The time at which the data collector was created in milliseconds since the epoch.").readonly().optional(),
  "type": z.enum(["TYPE_UNSPECIFIED","INTEGER","FLOAT","STRING","BOOLEAN","DATETIME"]).describe("Immutable. The type of data this data collector will collect.").optional()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_balance_credit

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "transactionId": z.string().describe("Each transaction_id uniquely identifies a credit balance request. If multiple requests are received with the same transaction_id, only one of them will be considered.").optional(),
  "transactionAmount": z.object({ "currencyCode": z.string().describe("The three-letter currency code defined in ISO 4217.").optional(), "nanos": z.number().int().describe("Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If \`units\` is positive, \`nanos\` must be positive or zero. If \`units\` is zero, \`nanos\` can be positive, zero, or negative. If \`units\` is negative, \`nanos\` must be negative or zero. For example $-1.75 is represented as \`units\`=-1 and \`nanos\`=-750,000,000.").optional(), "units": z.string().describe("The whole units of the amount. For example if \`currencyCode\` is \`\"USD\"\`, then 1 unit is one US dollar.").optional() }).describe("The amount of money to be credited. The wallet corresponding to the currency specified within \`transaction_amount\` will be updated. For example, if you specified \`currency_code\` within \`transaction_amount\` as \"USD\", then the amount would be added to the wallet which has the \"USD\" currency or if no such wallet exists, a new wallet will be created with the \"USD\" currency.").optional()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_balance_adjust

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "adjustment": z.object({ "currencyCode": z.string().describe("The three-letter currency code defined in ISO 4217.").optional(), "nanos": z.number().int().describe("Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If \`units\` is positive, \`nanos\` must be positive or zero. If \`units\` is zero, \`nanos\` can be positive, zero, or negative. If \`units\` is negative, \`nanos\` must be negative or zero. For example $-1.75 is represented as \`units\`=-1 and \`nanos\`=-750,000,000.").optional(), "units": z.string().describe("The whole units of the amount. For example if \`currencyCode\` is \`\"USD\"\`, then 1 unit is one US dollar.").optional() }).describe("* A positive value of \`adjustment\` means that that the API provider wants to adjust the balance for an under-charged developer i.e. the balance of the developer will decrease. * A negative value of \`adjustment\` means that that the API provider wants to adjust the balance for an over-charged developer i.e. the balance of the developer will increase.").optional()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_attributes_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "attributesId": z.string()
}
```

### apigee_organizations_developers_attributes_updatedeveloperattrib

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "attributesId": z.string(),
  "name": z.string().describe("API key of the attribute.").optional(),
  "value": z.string().describe("Value of the attribute.").optional()
}
```

### apigee_organizations_developers_attributes_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "attributesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_attributes_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string()
}
```

### apigee_organizations_developers_attributes

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "attribute": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes.").optional()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_subscriptions_expire

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "subscriptionsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_subscriptions_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "subscriptionsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_subscriptions_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "apiproduct": z.string().describe("Name of the API product for which the developer is purchasing a subscription.").optional(),
  "endTime": z.string().describe("Time when the API product subscription ends in milliseconds since epoch.").optional(),
  "createdAt": z.string().describe("Output only. Time when the API product subscription was created in milliseconds since epoch.").readonly().optional(),
  "startTime": z.string().describe("Time when the API product subscription starts in milliseconds since epoch.").optional(),
  "lastModifiedAt": z.string().describe("Output only. Time when the API product subscription was last modified in milliseconds since epoch.").readonly().optional(),
  "name": z.string().describe("Output only. Name of the API product subscription.").readonly().optional()
}
```

### apigee_organizations_developers_subscriptions_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "startKey": z.string().optional(),
  "count": z.number().int().optional()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_apps_keys_create_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "consumerSecret": z.string().describe("Secret key.").optional(),
  "scopes": z.array(z.string()).describe("Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.").optional(),
  "status": z.string().describe("Status of the credential. Valid values include \`approved\` or \`revoked\`.").optional(),
  "apiProducts": z.array(z.any()).describe("List of API products for which the credential can be used. **Note**: Do not specify the list of API products when creating a consumer key and secret for a developer app. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created.").optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes associated with the credential.").optional(),
  "issuedAt": z.string().describe("Time the developer app was created in milliseconds since epoch.").optional(),
  "consumerKey": z.string().describe("Consumer key.").optional(),
  "expiresAt": z.string().describe("Time the developer app expires in milliseconds since epoch.").optional(),
  "expiresInSeconds": z.string().describe("Input only. Expiration time, in seconds, for the consumer key. If not set or left to the default value of \`-1\`, the API key never expires. The expiration time can't be updated after it is set.").optional()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_apps_keys_apiproducts_updatedeve

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "keysId": z.string(),
  "apiproductsId": z.string(),
  "action": z.string().optional()
}
```

### apigee_organizations_developers_apps_keys_apiproducts_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "keysId": z.string(),
  "apiproductsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_apps_keys_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "consumerSecret": z.string().describe("Secret key.").optional(),
  "scopes": z.array(z.string()).describe("Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.").optional(),
  "status": z.string().describe("Status of the credential. Valid values include \`approved\` or \`revoked\`.").optional(),
  "apiProducts": z.array(z.any()).describe("List of API products for which the credential can be used. **Note**: Do not specify the list of API products when creating a consumer key and secret for a developer app. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created.").optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes associated with the credential.").optional(),
  "issuedAt": z.string().describe("Time the developer app was created in milliseconds since epoch.").optional(),
  "consumerKey": z.string().describe("Consumer key.").optional(),
  "expiresAt": z.string().describe("Time the developer app expires in milliseconds since epoch.").optional(),
  "expiresInSeconds": z.string().describe("Input only. Expiration time, in seconds, for the consumer key. If not set or left to the default value of \`-1\`, the API key never expires. The expiration time can't be updated after it is set.").optional()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_apps_keys_replacedeveloperappkey

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "keysId": z.string(),
  "consumerSecret": z.string().describe("Secret key.").optional(),
  "scopes": z.array(z.string()).describe("Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.").optional(),
  "status": z.string().describe("Status of the credential. Valid values include \`approved\` or \`revoked\`.").optional(),
  "apiProducts": z.array(z.any()).describe("List of API products for which the credential can be used. **Note**: Do not specify the list of API products when creating a consumer key and secret for a developer app. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created.").optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes associated with the credential.").optional(),
  "issuedAt": z.string().describe("Time the developer app was created in milliseconds since epoch.").optional(),
  "consumerKey": z.string().describe("Consumer key.").optional(),
  "expiresAt": z.string().describe("Time the developer app expires in milliseconds since epoch.").optional(),
  "expiresInSeconds": z.string().describe("Input only. Expiration time, in seconds, for the consumer key. If not set or left to the default value of \`-1\`, the API key never expires. The expiration time can't be updated after it is set.").optional()
}
```

### apigee_organizations_developers_apps_keys_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "keysId": z.string()
}
```

### apigee_organizations_developers_apps_keys_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "keysId": z.string()
}
```

### apigee_organizations_developers_apps_keys_updatedeveloperappkey

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "keysId": z.string(),
  "action": z.string().optional(),
  "consumerSecret": z.string().describe("Secret key.").optional(),
  "scopes": z.array(z.string()).describe("Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.").optional(),
  "status": z.string().describe("Status of the credential. Valid values include \`approved\` or \`revoked\`.").optional(),
  "apiProducts": z.array(z.any()).describe("List of API products for which the credential can be used. **Note**: Do not specify the list of API products when creating a consumer key and secret for a developer app. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created.").optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes associated with the credential.").optional(),
  "issuedAt": z.string().describe("Time the developer app was created in milliseconds since epoch.").optional(),
  "consumerKey": z.string().describe("Consumer key.").optional(),
  "expiresAt": z.string().describe("Time the developer app expires in milliseconds since epoch.").optional(),
  "expiresInSeconds": z.string().describe("Input only. Expiration time, in seconds, for the consumer key. If not set or left to the default value of \`-1\`, the API key never expires. The expiration time can't be updated after it is set.").optional()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_apps_attributes_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "attributesId": z.string()
}
```

### apigee_organizations_developers_apps_attributes_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "attributesId": z.string()
}
```

### apigee_organizations_developers_apps_attributes_updatedevelopera

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "attributesId": z.string(),
  "name": z.string().describe("API key of the attribute.").optional(),
  "value": z.string().describe("Value of the attribute.").optional()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_apps_attributes_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string()
}
```

### apigee_organizations_developers_apps_attributes

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "attribute": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes.").optional()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_apps_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string()
}
```

### apigee_organizations_developers_apps_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "apiProducts": z.array(z.string()).describe("List of API products associated with the developer app.").optional(),
  "name": z.string().describe("Name of the developer app.").optional(),
  "scopes": z.array(z.string()).describe("Scopes to apply to the developer app. The specified scopes must already exist for the API product that you associate with the developer app.").optional(),
  "createdAt": z.string().describe("Output only. Time the developer app was created in milliseconds since epoch.").readonly().optional(),
  "appFamily": z.string().describe("Developer app family.").optional(),
  "keyExpiresIn": z.string().describe("Expiration time, in milliseconds, for the consumer key that is generated for the developer app. If not set or left to the default value of \`-1\`, the API key never expires. The expiration time can't be updated after it is set.").optional(),
  "callbackUrl": z.string().describe("Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.").optional(),
  "credentials": z.array(z.object({ "expiresAt": z.string().describe("Time the credential will expire in milliseconds since epoch.").optional(), "apiProducts": z.array(z.object({ "status": z.string().describe("Status of the API product. Valid values are \`approved\` or \`revoked\`.").optional(), "apiproduct": z.string().describe("Name of the API product.").optional() })).describe("List of API products this credential can be used for.").optional(), "issuedAt": z.string().describe("Time the credential was issued in milliseconds since epoch.").optional(), "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes associated with this credential.").optional(), "consumerSecret": z.string().describe("Secret key.").optional(), "status": z.string().describe("Status of the credential. Valid values include \`approved\` or \`revoked\`.").optional(), "scopes": z.array(z.string()).describe("List of scopes to apply to the app. Specified scopes must already exist on the API product that you associate with the app.").optional(), "consumerKey": z.string().describe("Consumer key.").optional() })).describe("Output only. Set of credentials for the developer app consisting of the consumer key/secret pairs associated with the API products.").readonly().optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes for the developer app.").optional(),
  "appId": z.string().describe("ID of the developer app.").optional(),
  "developerId": z.string().describe("ID of the developer.").optional(),
  "lastModifiedAt": z.string().describe("Output only. Time the developer app was modified in milliseconds since epoch.").readonly().optional(),
  "status": z.string().describe("Status of the credential. Valid values include \`approved\` or \`revoked\`.").optional()
}
```

### apigee_organizations_developers_apps_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "entity": z.string().optional(),
  "query": z.string().optional()
}
```

### apigee_organizations_developers_apps_generatekeypairorupdatedeve

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "action": z.string().optional(),
  "apiProducts": z.array(z.string()).describe("List of API products associated with the developer app.").optional(),
  "name": z.string().describe("Name of the developer app.").optional(),
  "scopes": z.array(z.string()).describe("Scopes to apply to the developer app. The specified scopes must already exist for the API product that you associate with the developer app.").optional(),
  "createdAt": z.string().describe("Output only. Time the developer app was created in milliseconds since epoch.").readonly().optional(),
  "appFamily": z.string().describe("Developer app family.").optional(),
  "keyExpiresIn": z.string().describe("Expiration time, in milliseconds, for the consumer key that is generated for the developer app. If not set or left to the default value of \`-1\`, the API key never expires. The expiration time can't be updated after it is set.").optional(),
  "callbackUrl": z.string().describe("Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.").optional(),
  "credentials": z.array(z.object({ "expiresAt": z.string().describe("Time the credential will expire in milliseconds since epoch.").optional(), "apiProducts": z.array(z.object({ "status": z.string().describe("Status of the API product. Valid values are \`approved\` or \`revoked\`.").optional(), "apiproduct": z.string().describe("Name of the API product.").optional() })).describe("List of API products this credential can be used for.").optional(), "issuedAt": z.string().describe("Time the credential was issued in milliseconds since epoch.").optional(), "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes associated with this credential.").optional(), "consumerSecret": z.string().describe("Secret key.").optional(), "status": z.string().describe("Status of the credential. Valid values include \`approved\` or \`revoked\`.").optional(), "scopes": z.array(z.string()).describe("List of scopes to apply to the app. Specified scopes must already exist on the API product that you associate with the app.").optional(), "consumerKey": z.string().describe("Consumer key.").optional() })).describe("Output only. Set of credentials for the developer app consisting of the consumer key/secret pairs associated with the API products.").readonly().optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes for the developer app.").optional(),
  "appId": z.string().describe("ID of the developer app.").optional(),
  "developerId": z.string().describe("ID of the developer.").optional(),
  "lastModifiedAt": z.string().describe("Output only. Time the developer app was modified in milliseconds since epoch.").readonly().optional(),
  "status": z.string().describe("Status of the credential. Valid values include \`approved\` or \`revoked\`.").optional()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_apps_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "apiProducts": z.array(z.string()).describe("List of API products associated with the developer app.").optional(),
  "name": z.string().describe("Name of the developer app.").optional(),
  "scopes": z.array(z.string()).describe("Scopes to apply to the developer app. The specified scopes must already exist for the API product that you associate with the developer app.").optional(),
  "createdAt": z.string().describe("Output only. Time the developer app was created in milliseconds since epoch.").readonly().optional(),
  "appFamily": z.string().describe("Developer app family.").optional(),
  "keyExpiresIn": z.string().describe("Expiration time, in milliseconds, for the consumer key that is generated for the developer app. If not set or left to the default value of \`-1\`, the API key never expires. The expiration time can't be updated after it is set.").optional(),
  "callbackUrl": z.string().describe("Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.").optional(),
  "credentials": z.array(z.object({ "expiresAt": z.string().describe("Time the credential will expire in milliseconds since epoch.").optional(), "apiProducts": z.array(z.object({ "status": z.string().describe("Status of the API product. Valid values are \`approved\` or \`revoked\`.").optional(), "apiproduct": z.string().describe("Name of the API product.").optional() })).describe("List of API products this credential can be used for.").optional(), "issuedAt": z.string().describe("Time the credential was issued in milliseconds since epoch.").optional(), "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes associated with this credential.").optional(), "consumerSecret": z.string().describe("Secret key.").optional(), "status": z.string().describe("Status of the credential. Valid values include \`approved\` or \`revoked\`.").optional(), "scopes": z.array(z.string()).describe("List of scopes to apply to the app. Specified scopes must already exist on the API product that you associate with the app.").optional(), "consumerKey": z.string().describe("Consumer key.").optional() })).describe("Output only. Set of credentials for the developer app consisting of the consumer key/secret pairs associated with the API products.").readonly().optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes for the developer app.").optional(),
  "appId": z.string().describe("ID of the developer app.").optional(),
  "developerId": z.string().describe("ID of the developer.").optional(),
  "lastModifiedAt": z.string().describe("Output only. Time the developer app was modified in milliseconds since epoch.").readonly().optional(),
  "status": z.string().describe("Status of the credential. Valid values include \`approved\` or \`revoked\`.").optional()
}
```

### apigee_organizations_developers_apps_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "startKey": z.string().optional(),
  "count": z.string().optional(),
  "expand": z.boolean().optional(),
  "shallowExpand": z.boolean().optional()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_getbalance

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string()
}
```

### parameters_v1_organizations_organizationsid_developers

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "expand": z.boolean().optional(),
  "ids": z.string().optional(),
  "count": z.string().optional(),
  "app": z.string().optional(),
  "includeCompany": z.boolean().optional(),
  "startKey": z.string().optional()
}
```

### apigee_organizations_developers_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("Optional. Developer attributes (name/value pairs). The custom attribute limit is 18.").optional(),
  "developerId": z.string().describe("ID of the developer. **Note**: IDs are generated internally by Apigee and are not guaranteed to stay the same over time.").optional(),
  "companies": z.array(z.string()).describe("List of companies associated with the developer.").optional(),
  "status": z.string().describe("Output only. Status of the developer. Valid values are \`active\` and \`inactive\`.").readonly().optional(),
  "organizationName": z.string().describe("Output only. Name of the Apigee organization in which the developer resides.").readonly().optional(),
  "apps": z.array(z.string()).describe("List of apps associated with the developer.").optional(),
  "lastModifiedAt": z.string().describe("Output only. Time at which the developer was last modified in milliseconds since epoch.").readonly().optional(),
  "firstName": z.string().describe("Required. First name of the developer.").optional(),
  "appFamily": z.string().describe("Developer app family.").optional(),
  "userName": z.string().describe("Required. User name of the developer. Not used by Apigee hybrid.").optional(),
  "email": z.string().describe("Required. Email address of the developer. This value is used to uniquely identify the developer in Apigee hybrid. Note that the email address has to be in lowercase only.").optional(),
  "accessType": z.string().describe("Access type.").optional(),
  "createdAt": z.string().describe("Output only. Time at which the developer was created in milliseconds since epoch.").readonly().optional(),
  "lastName": z.string().describe("Required. Last name of the developer.").optional()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "action": z.string().optional()
}
```

### apigee_organizations_developers_setdeveloperstatus

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "action": z.string().optional()
}
```

### apigee_organizations_developers_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string()
}
```

### apigee_organizations_developers_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("Optional. Developer attributes (name/value pairs). The custom attribute limit is 18.").optional(),
  "developerId": z.string().describe("ID of the developer. **Note**: IDs are generated internally by Apigee and are not guaranteed to stay the same over time.").optional(),
  "companies": z.array(z.string()).describe("List of companies associated with the developer.").optional(),
  "status": z.string().describe("Output only. Status of the developer. Valid values are \`active\` and \`inactive\`.").readonly().optional(),
  "organizationName": z.string().describe("Output only. Name of the Apigee organization in which the developer resides.").readonly().optional(),
  "apps": z.array(z.string()).describe("List of apps associated with the developer.").optional(),
  "lastModifiedAt": z.string().describe("Output only. Time at which the developer was last modified in milliseconds since epoch.").readonly().optional(),
  "firstName": z.string().describe("Required. First name of the developer.").optional(),
  "appFamily": z.string().describe("Developer app family.").optional(),
  "userName": z.string().describe("Required. User name of the developer. Not used by Apigee hybrid.").optional(),
  "email": z.string().describe("Required. Email address of the developer. This value is used to uniquely identify the developer in Apigee hybrid. Note that the email address has to be in lowercase only.").optional(),
  "accessType": z.string().describe("Access type.").optional(),
  "createdAt": z.string().describe("Output only. Time at which the developer was created in milliseconds since epoch.").readonly().optional(),
  "lastName": z.string().describe("Required. Last name of the developer.").optional()
}
```

### parameters_v1_organizations_organizationsid_developers_developer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_developers_updatemonetizationconfig

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string(),
  "billingType": z.enum(["BILLING_TYPE_UNSPECIFIED","PREPAID","POSTPAID"]).describe("Billing type.").optional()
}
```

### apigee_organizations_developers_getmonetizationconfig

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "developersId": z.string()
}
```

### parameters_v1_organizations_organizationsid_hostsecurityreports_

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_hostsecurityreports_getresult

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "hostSecurityReportsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_hostsecurityreports_

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_hostsecurityreports_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "hostSecurityReportsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_hostsecurityreports

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_hostsecurityreports_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "metrics": z.array(z.object({ "name": z.string().describe("Required. Metric name.").optional(), "alias": z.string().describe("Alias for the metric. Alias will be used to replace metric name in query results.").optional(), "value": z.string().describe("Operand value should be provided when operator is set.").optional(), "aggregationFunction": z.string().describe("Aggregation function: avg, min, max, or sum.").optional(), "operator": z.string().describe("One of \`+\`, \`-\`, \`/\`, \`%\`, \`*\`.").optional() }).describe("Metric of the Query")).describe("A list of Metrics.").optional(),
  "dimensions": z.array(z.string()).describe("A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions").optional(),
  "reportDefinitionId": z.string().describe("Report Definition ID.").optional(),
  "csvDelimiter": z.string().describe("Delimiter used in the CSV file, if \`outputFormat\` is set to \`csv\`. Defaults to the \`,\` (comma) character. Supported delimiter characters include comma (\`,\`), pipe (\`|\`), and tab (\`\\t\`).").optional(),
  "timeRange": z.any().describe("Required. Time range for the query. Can use the following predefined strings to specify the time range: \`last60minutes\` \`last24hours\` \`last7days\` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: \"timeRange\": { \"start\": \"2018-07-29T00:13:00Z\", \"end\": \"2018-08-01T00:18:00Z\" }").optional(),
  "filter": z.string().describe("Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax").optional(),
  "groupByTimeUnit": z.string().describe("Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision.").optional(),
  "envgroupHostname": z.string().describe("Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostSecurityReport where analytics data will be grouped by organization and hostname.").optional(),
  "mimeType": z.string().describe("Valid values include: \`csv\` or \`json\`. Defaults to \`json\`. Note: Configure the delimiter for CSV output using the csvDelimiter property.").optional(),
  "limit": z.number().int().describe("Maximum number of rows that can be returned in the result.").optional(),
  "displayName": z.string().describe("Security Report display name which users can specify.").optional()
}
```

### apigee_organizations_hostsecurityreports_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "status": z.string().optional(),
  "envgroupHostname": z.string().optional(),
  "submittedBy": z.string().optional(),
  "dataset": z.string().optional(),
  "pageToken": z.string().optional(),
  "pageSize": z.number().int().optional(),
  "from": z.string().optional(),
  "to": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_hostsecurityreports_

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_hostsecurityreports_getresultview

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "hostSecurityReportsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_optimizedhoststats_o

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_optimizedhoststats_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "optimizedHostStatsId": z.string(),
  "topk": z.string().optional(),
  "envgroupHostname": z.string().optional(),
  "tsAscending": z.boolean().optional(),
  "offset": z.string().optional(),
  "accuracy": z.string().optional(),
  "limit": z.string().optional(),
  "sortby": z.string().optional(),
  "tzo": z.string().optional(),
  "realtime": z.boolean().optional(),
  "filter": z.string().optional(),
  "select": z.string().optional(),
  "timeUnit": z.string().optional(),
  "sort": z.string().optional(),
  "timeRange": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_hoststats_hoststatsi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_hoststats_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "hostStatsId": z.string(),
  "timeUnit": z.string().optional(),
  "offset": z.string().optional(),
  "tzo": z.string().optional(),
  "tsAscending": z.boolean().optional(),
  "envgroupHostname": z.string().optional(),
  "select": z.string().optional(),
  "timeRange": z.string().optional(),
  "limit": z.string().optional(),
  "realtime": z.boolean().optional(),
  "accuracy": z.string().optional(),
  "topk": z.string().optional(),
  "sort": z.string().optional(),
  "filter": z.string().optional(),
  "sortby": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_reports_reportsid_

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_reports_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "reportsId": z.string()
}
```

### apigee_organizations_reports_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "reportsId": z.string(),
  "organization": z.string().describe("Output only. Organization name").readonly().optional(),
  "limit": z.string().describe("Legacy field: not used This field contains the limit for the result retrieved").optional(),
  "fromTime": z.string().describe("Legacy field: not used. Contains the from time for the report").optional(),
  "properties": z.array(z.object({ "value": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("property values").optional(), "property": z.string().describe("name of the property").optional() })).describe("This field contains report properties such as ui metadata etc.").optional(),
  "comments": z.array(z.string()).describe("Legacy field: not used. This field contains a list of comments associated with custom report").optional(),
  "filter": z.string().describe("This field contains the filter expression").optional(),
  "dimensions": z.array(z.string()).describe("This contains the list of dimensions for the report").optional(),
  "createdAt": z.string().describe("Output only. Unix time when the app was created json key: createdAt").readonly().optional(),
  "topk": z.string().describe("Legacy field: not used. This field contains the top k parameter value for restricting the result").optional(),
  "displayName": z.string().describe("This is the display name for the report").optional(),
  "sortOrder": z.string().describe("Legacy field: not used much. Contains the sort order for the sort columns").optional(),
  "lastModifiedAt": z.string().describe("Output only. Modified time of this entity as milliseconds since epoch. json key: lastModifiedAt").readonly().optional(),
  "environment": z.string().describe("Output only. Environment name").readonly().optional(),
  "toTime": z.string().describe("Legacy field: not used. Contains the end time for the report").optional(),
  "timeUnit": z.string().describe("This field contains the time unit of aggregation for the report").optional(),
  "name": z.string().describe("Required. Unique identifier for the report T his is a legacy field used to encode custom report unique id").optional(),
  "chartType": z.string().describe("This field contains the chart type for the report").optional(),
  "metrics": z.array(z.object({ "function": z.string().describe("aggregate function").optional(), "name": z.string().describe("name of the metric").optional() }).describe("This encapsulates a metric property of the form sum(message_count) where name is message_count and function is sum")).describe("Required. This contains the list of metrics").optional(),
  "sortByCols": z.array(z.string()).describe("Legacy field: not used much. Contains the list of sort by columns").optional(),
  "lastViewedAt": z.string().describe("Output only. Last viewed time of this entity as milliseconds since epoch").readonly().optional(),
  "offset": z.string().describe("Legacy field: not used. This field contains the offset for the data").optional(),
  "tags": z.array(z.string()).describe("Legacy field: not used. This field contains a list of tags associated with custom report").optional()
}
```

### apigee_organizations_reports_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "reportsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_reports

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_reports_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "expand": z.boolean().optional()
}
```

### apigee_organizations_reports_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "organization": z.string().describe("Output only. Organization name").readonly().optional(),
  "limit": z.string().describe("Legacy field: not used This field contains the limit for the result retrieved").optional(),
  "fromTime": z.string().describe("Legacy field: not used. Contains the from time for the report").optional(),
  "properties": z.array(z.object({ "value": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("property values").optional(), "property": z.string().describe("name of the property").optional() })).describe("This field contains report properties such as ui metadata etc.").optional(),
  "comments": z.array(z.string()).describe("Legacy field: not used. This field contains a list of comments associated with custom report").optional(),
  "filter": z.string().describe("This field contains the filter expression").optional(),
  "dimensions": z.array(z.string()).describe("This contains the list of dimensions for the report").optional(),
  "createdAt": z.string().describe("Output only. Unix time when the app was created json key: createdAt").readonly().optional(),
  "topk": z.string().describe("Legacy field: not used. This field contains the top k parameter value for restricting the result").optional(),
  "displayName": z.string().describe("This is the display name for the report").optional(),
  "sortOrder": z.string().describe("Legacy field: not used much. Contains the sort order for the sort columns").optional(),
  "lastModifiedAt": z.string().describe("Output only. Modified time of this entity as milliseconds since epoch. json key: lastModifiedAt").readonly().optional(),
  "environment": z.string().describe("Output only. Environment name").readonly().optional(),
  "toTime": z.string().describe("Legacy field: not used. Contains the end time for the report").optional(),
  "timeUnit": z.string().describe("This field contains the time unit of aggregation for the report").optional(),
  "name": z.string().describe("Required. Unique identifier for the report T his is a legacy field used to encode custom report unique id").optional(),
  "chartType": z.string().describe("This field contains the chart type for the report").optional(),
  "metrics": z.array(z.object({ "function": z.string().describe("aggregate function").optional(), "name": z.string().describe("name of the metric").optional() }).describe("This encapsulates a metric property of the form sum(message_count) where name is message_count and function is sum")).describe("Required. This contains the list of metrics").optional(),
  "sortByCols": z.array(z.string()).describe("Legacy field: not used much. Contains the list of sort by columns").optional(),
  "lastViewedAt": z.string().describe("Output only. Last viewed time of this entity as milliseconds since epoch").readonly().optional(),
  "offset": z.string().describe("Legacy field: not used. This field contains the offset for the data").optional(),
  "tags": z.array(z.string()).describe("Legacy field: not used. This field contains a list of tags associated with custom report").optional()
}
```

### parameters_v1_organizations_organizationsid_appgroups_appgroupsi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_appgroups_apps_keys_apiproducts_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "appgroupsId": z.string(),
  "appsId": z.string(),
  "keysId": z.string(),
  "apiproductsId": z.string()
}
```

### apigee_organizations_appgroups_apps_keys_apiproducts_updateappgr

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "appgroupsId": z.string(),
  "appsId": z.string(),
  "keysId": z.string(),
  "apiproductsId": z.string(),
  "action": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_appgroups_appgroupsi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_appgroups_apps_keys_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "appgroupsId": z.string(),
  "appsId": z.string(),
  "keysId": z.string()
}
```

### apigee_organizations_appgroups_apps_keys_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "appgroupsId": z.string(),
  "appsId": z.string(),
  "keysId": z.string()
}
```

### apigee_organizations_appgroups_apps_keys_updateappgroupappkey

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "appgroupsId": z.string(),
  "appsId": z.string(),
  "keysId": z.string(),
  "appGroupAppKey": z.object({ "consumerKey": z.string().describe("Immutable. Consumer key.").optional(), "issuedAt": z.string().describe("Output only. Time the AppGroup app was created in milliseconds since epoch.").readonly().optional(), "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes associated with the credential.").optional(), "apiProducts": z.array(z.object({ "status": z.string().describe("The API product credential associated status. Valid values are \`approved\` or \`revoked\`.").optional(), "apiproduct": z.string().describe("API product to be associated with the credential.").optional() }).describe("APIProductAssociation has the API product and its administrative state association.")).describe("Output only. List of API products and its status for which the credential can be used. **Note**: Use UpdateAppGroupAppKeyApiProductRequest API to make the association after the consumer key and secret are created.").readonly().optional(), "expiresInSeconds": z.string().describe("Immutable. Expiration time, in seconds, for the consumer key. If not set or left to the default value of \`-1\`, the API key never expires. The expiration time can't be updated after it is set.").optional(), "scopes": z.array(z.string()).describe("Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.").optional(), "status": z.string().describe("Status of the credential. Valid values include \`approved\` or \`revoked\`.").optional(), "consumerSecret": z.string().describe("Secret key.").optional(), "expiresAt": z.string().describe("Output only. Time the AppGroup app expires in milliseconds since epoch.").readonly().optional() }).describe("The new AppGroupKey to be amended. Note that the status can be updated only via action.").optional(),
  "action": z.string().describe("Approve or revoke the consumer key by setting this value to \`approve\` or \`revoke\` respectively. The \`Content-Type\` header, if set, must be set to \`application/octet-stream\`, with empty body.").optional(),
  "apiProducts": z.array(z.string()).describe("The list of API products that will be associated with the credential. This list will be appended to the existing list of associated API Products for this App Key. Duplicates will be ignored.").optional()
}
```

### parameters_v1_organizations_organizationsid_appgroups_appgroupsi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_appgroups_apps_keys_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "appgroupsId": z.string(),
  "appsId": z.string(),
  "consumerKey": z.string().describe("Immutable. Consumer key.").optional(),
  "issuedAt": z.string().describe("Output only. Time the AppGroup app was created in milliseconds since epoch.").readonly().optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes associated with the credential.").optional(),
  "apiProducts": z.array(z.object({ "status": z.string().describe("The API product credential associated status. Valid values are \`approved\` or \`revoked\`.").optional(), "apiproduct": z.string().describe("API product to be associated with the credential.").optional() }).describe("APIProductAssociation has the API product and its administrative state association.")).describe("Output only. List of API products and its status for which the credential can be used. **Note**: Use UpdateAppGroupAppKeyApiProductRequest API to make the association after the consumer key and secret are created.").readonly().optional(),
  "expiresInSeconds": z.string().describe("Immutable. Expiration time, in seconds, for the consumer key. If not set or left to the default value of \`-1\`, the API key never expires. The expiration time can't be updated after it is set.").optional(),
  "scopes": z.array(z.string()).describe("Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.").optional(),
  "status": z.string().describe("Status of the credential. Valid values include \`approved\` or \`revoked\`.").optional(),
  "consumerSecret": z.string().describe("Secret key.").optional(),
  "expiresAt": z.string().describe("Output only. Time the AppGroup app expires in milliseconds since epoch.").readonly().optional()
}
```

### parameters_v1_organizations_organizationsid_appgroups_appgroupsi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_appgroups_apps_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "appgroupsId": z.string(),
  "appsId": z.string(),
  "action": z.string().optional(),
  "appGroup": z.string().describe("Immutable. Name of the parent AppGroup whose resource name format is of syntax (organizations/*/appgroups/*).").optional(),
  "createdAt": z.string().describe("Output only. Time the AppGroup app was created in milliseconds since epoch.").readonly().optional(),
  "lastModifiedAt": z.string().describe("Output only. Time the AppGroup app was modified in milliseconds since epoch.").readonly().optional(),
  "appId": z.string().describe("Immutable. ID of the AppGroup app.").optional(),
  "callbackUrl": z.string().describe("Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to AppGroup apps.").optional(),
  "name": z.string().describe("Immutable. Name of the AppGroup app whose resource name format is of syntax (organizations/*/appgroups/*/apps/*).").optional(),
  "status": z.string().describe("Status of the App. Valid values include \`approved\` or \`revoked\`.").optional(),
  "scopes": z.array(z.string()).describe("Scopes to apply to the AppGroup app. The specified scopes must already exist for the API product that you associate with the AppGroup app.").optional(),
  "apiProducts": z.array(z.string()).describe("List of API products associated with the AppGroup app.").optional(),
  "keyExpiresIn": z.string().describe("Immutable. Expiration time, in seconds, for the consumer key that is generated for the AppGroup app. If not set or left to the default value of \`-1\`, the API key never expires. The expiration time can't be updated after it is set.").optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes for the AppGroup app.").optional(),
  "credentials": z.array(z.object({ "expiresAt": z.string().describe("Time the credential will expire in milliseconds since epoch.").optional(), "apiProducts": z.array(z.object({ "status": z.string().describe("Status of the API product. Valid values are \`approved\` or \`revoked\`.").optional(), "apiproduct": z.string().describe("Name of the API product.").optional() })).describe("List of API products this credential can be used for.").optional(), "issuedAt": z.string().describe("Time the credential was issued in milliseconds since epoch.").optional(), "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes associated with this credential.").optional(), "consumerSecret": z.string().describe("Secret key.").optional(), "status": z.string().describe("Status of the credential. Valid values include \`approved\` or \`revoked\`.").optional(), "scopes": z.array(z.string()).describe("List of scopes to apply to the app. Specified scopes must already exist on the API product that you associate with the app.").optional(), "consumerKey": z.string().describe("Consumer key.").optional() })).describe("Output only. Set of credentials for the AppGroup app consisting of the consumer key/secret pairs associated with the API products.").readonly().optional()
}
```

### apigee_organizations_appgroups_apps_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "appgroupsId": z.string(),
  "appsId": z.string()
}
```

### apigee_organizations_appgroups_apps_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "appgroupsId": z.string(),
  "appsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_appgroups_appgroupsi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_appgroups_apps_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "appgroupsId": z.string(),
  "pageToken": z.string().optional(),
  "pageSize": z.number().int().optional()
}
```

### apigee_organizations_appgroups_apps_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "appgroupsId": z.string(),
  "appGroup": z.string().describe("Immutable. Name of the parent AppGroup whose resource name format is of syntax (organizations/*/appgroups/*).").optional(),
  "createdAt": z.string().describe("Output only. Time the AppGroup app was created in milliseconds since epoch.").readonly().optional(),
  "lastModifiedAt": z.string().describe("Output only. Time the AppGroup app was modified in milliseconds since epoch.").readonly().optional(),
  "appId": z.string().describe("Immutable. ID of the AppGroup app.").optional(),
  "callbackUrl": z.string().describe("Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to AppGroup apps.").optional(),
  "name": z.string().describe("Immutable. Name of the AppGroup app whose resource name format is of syntax (organizations/*/appgroups/*/apps/*).").optional(),
  "status": z.string().describe("Status of the App. Valid values include \`approved\` or \`revoked\`.").optional(),
  "scopes": z.array(z.string()).describe("Scopes to apply to the AppGroup app. The specified scopes must already exist for the API product that you associate with the AppGroup app.").optional(),
  "apiProducts": z.array(z.string()).describe("List of API products associated with the AppGroup app.").optional(),
  "keyExpiresIn": z.string().describe("Immutable. Expiration time, in seconds, for the consumer key that is generated for the AppGroup app. If not set or left to the default value of \`-1\`, the API key never expires. The expiration time can't be updated after it is set.").optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes for the AppGroup app.").optional(),
  "credentials": z.array(z.object({ "expiresAt": z.string().describe("Time the credential will expire in milliseconds since epoch.").optional(), "apiProducts": z.array(z.object({ "status": z.string().describe("Status of the API product. Valid values are \`approved\` or \`revoked\`.").optional(), "apiproduct": z.string().describe("Name of the API product.").optional() })).describe("List of API products this credential can be used for.").optional(), "issuedAt": z.string().describe("Time the credential was issued in milliseconds since epoch.").optional(), "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes associated with this credential.").optional(), "consumerSecret": z.string().describe("Secret key.").optional(), "status": z.string().describe("Status of the credential. Valid values include \`approved\` or \`revoked\`.").optional(), "scopes": z.array(z.string()).describe("List of scopes to apply to the app. Specified scopes must already exist on the API product that you associate with the app.").optional(), "consumerKey": z.string().describe("Consumer key.").optional() })).describe("Output only. Set of credentials for the AppGroup app consisting of the consumer key/secret pairs associated with the API products.").readonly().optional()
}
```

### parameters_v1_organizations_organizationsid_appgroups_appgroupsi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_appgroups_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "appgroupsId": z.string()
}
```

### apigee_organizations_appgroups_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "appgroupsId": z.string()
}
```

### apigee_organizations_appgroups_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "appgroupsId": z.string(),
  "action": z.string().optional(),
  "name": z.string().describe("Immutable. Name of the AppGroup. Characters you can use in the name are restricted to: A-Z0-9._\\-$ %.").optional(),
  "channelId": z.string().describe("channel identifier identifies the owner maintaing this grouping.").optional(),
  "organization": z.string().describe("Immutable. the org the app group is created").optional(),
  "appGroupId": z.string().describe("Output only. Internal identifier that cannot be edited").readonly().optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("A list of attributes").optional(),
  "lastModifiedAt": z.string().describe("Output only. Modified time as milliseconds since epoch.").readonly().optional(),
  "channelUri": z.string().describe("A reference to the associated storefront/marketplace.").optional(),
  "status": z.string().describe("Valid values are \`active\` or \`inactive\`. Note that the status of the AppGroup should be updated via UpdateAppGroupRequest by setting the action as \`active\` or \`inactive\`.").optional(),
  "createdAt": z.string().describe("Output only. Created time as milliseconds since epoch.").readonly().optional(),
  "displayName": z.string().describe("app group name displayed in the UI").optional()
}
```

### parameters_v1_organizations_organizationsid_appgroups

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_appgroups_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "name": z.string().describe("Immutable. Name of the AppGroup. Characters you can use in the name are restricted to: A-Z0-9._\\-$ %.").optional(),
  "channelId": z.string().describe("channel identifier identifies the owner maintaing this grouping.").optional(),
  "organization": z.string().describe("Immutable. the org the app group is created").optional(),
  "appGroupId": z.string().describe("Output only. Internal identifier that cannot be edited").readonly().optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("A list of attributes").optional(),
  "lastModifiedAt": z.string().describe("Output only. Modified time as milliseconds since epoch.").readonly().optional(),
  "channelUri": z.string().describe("A reference to the associated storefront/marketplace.").optional(),
  "status": z.string().describe("Valid values are \`active\` or \`inactive\`. Note that the status of the AppGroup should be updated via UpdateAppGroupRequest by setting the action as \`active\` or \`inactive\`.").optional(),
  "createdAt": z.string().describe("Output only. Created time as milliseconds since epoch.").readonly().optional(),
  "displayName": z.string().describe("app group name displayed in the UI").optional()
}
```

### apigee_organizations_appgroups_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional(),
  "filter": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_sites_sitesid_apicat

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_sites_apicategories_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sitesId": z.string()
}
```

### apigee_organizations_sites_apicategories_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sitesId": z.string(),
  "updateTime": z.string().describe("Time the category was last modified in milliseconds since epoch.").optional(),
  "id": z.string().describe("ID of the category (a UUID).").optional(),
  "name": z.string().describe("Name of the category.").optional(),
  "siteId": z.string().describe("Name of the portal.").optional()
}
```

### parameters_v1_organizations_organizationsid_sites_sitesid_apicat

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_sites_apicategories_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sitesId": z.string(),
  "apicategoriesId": z.string()
}
```

### apigee_organizations_sites_apicategories_patch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sitesId": z.string(),
  "apicategoriesId": z.string(),
  "updateTime": z.string().describe("Time the category was last modified in milliseconds since epoch.").optional(),
  "id": z.string().describe("ID of the category (a UUID).").optional(),
  "name": z.string().describe("Name of the category.").optional(),
  "siteId": z.string().describe("Name of the portal.").optional()
}
```

### apigee_organizations_sites_apicategories_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sitesId": z.string(),
  "apicategoriesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_sites_sitesid_apidoc

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_sites_apidocs_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sitesId": z.string(),
  "apidocsId": z.string(),
  "requireCallbackUrl": z.boolean().describe("Optional. Whether a callback URL is required when this catalog item's API product is enabled in a developer app. When true, a portal user will be required to input a URL when managing the app (this is typically used for the app's OAuth flow).").optional(),
  "imageUrl": z.string().describe("Optional. Location of the image used for the catalog item in the catalog. This can be either an image with an external URL or a file path for [image files stored in the portal](/apigee/docs/api-platform/publish/portal/portal-files\"), for example, \`/files/book-tree.jpg\`. When specifying the URL of an external image, the image won't be uploaded to your assets; additionally, loading the image in the integrated portal will be subject to its availability, which may be blocked or restricted by [content security policies](/apigee/docs/api-platform/publish/portal/csp). Max length of file path is 2,083 characters.").optional(),
  "siteId": z.string().describe("Output only. The ID of the parent portal.").readonly().optional(),
  "visibility": z.boolean().describe("Optional. DEPRECATED: use the \`published\` field instead").optional(),
  "categoryIds": z.array(z.string()).describe("Optional. The IDs of the API categories to which this catalog item belongs.").optional(),
  "anonAllowed": z.boolean().describe("Optional. Boolean flag that manages user access to the catalog item. When true, the catalog item has public visibility and can be viewed anonymously; otherwise, only registered users may view it. Note: when the parent portal is enrolled in the [audience management feature](https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature), and this flag is set to false, visibility is set to an indeterminate state and must be explicitly specified in the management UI (see [Manage the visibility of an API in your portal](https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility)). Additionally, when enrolled in the audience management feature, updates to this flag will be ignored as visibility permissions must be updated in the management UI.").optional(),
  "modified": z.string().describe("Output only. Time the catalog item was last modified in milliseconds since epoch.").readonly().optional(),
  "description": z.string().describe("Optional. Description of the catalog item. Max length is 10,000 characters.").optional(),
  "edgeAPIProductName": z.string().describe("Optional. Immutable. DEPRECATED: use the \`apiProductName\` field instead").optional(),
  "id": z.string().describe("Output only. The ID of the catalog item.").readonly().optional(),
  "published": z.boolean().describe("Optional. Denotes whether the catalog item is published to the portal or is in a draft state. When the parent portal is enrolled in the [audience management feature](https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature), the visibility can be set to public on creation by setting the anonAllowed flag to true or further managed in the management UI (see [Manage the visibility of an API in your portal](https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility)) before it can be visible to any users. If not enrolled in the audience management feature, the visibility is managed by the \`anonAllowed\` flag.").optional(),
  "title": z.string().describe("Required. The user-facing name of the catalog item. \`title\` must be a non-empty string with a max length of 255 characters.").optional(),
  "apiProductName": z.string().describe("Required. Immutable. The \`name\` field of the associated [API product](/apigee/docs/reference/apis/apigee/rest/v1/organizations.apiproducts). A portal may have only one catalog item associated with a given API product.").optional()
}
```

### apigee_organizations_sites_apidocs_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sitesId": z.string(),
  "apidocsId": z.string()
}
```

### apigee_organizations_sites_apidocs_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sitesId": z.string(),
  "apidocsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_sites_sitesid_apidoc

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_sites_apidocs_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sitesId": z.string(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional()
}
```

### apigee_organizations_sites_apidocs_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sitesId": z.string(),
  "requireCallbackUrl": z.boolean().describe("Optional. Whether a callback URL is required when this catalog item's API product is enabled in a developer app. When true, a portal user will be required to input a URL when managing the app (this is typically used for the app's OAuth flow).").optional(),
  "imageUrl": z.string().describe("Optional. Location of the image used for the catalog item in the catalog. This can be either an image with an external URL or a file path for [image files stored in the portal](/apigee/docs/api-platform/publish/portal/portal-files\"), for example, \`/files/book-tree.jpg\`. When specifying the URL of an external image, the image won't be uploaded to your assets; additionally, loading the image in the integrated portal will be subject to its availability, which may be blocked or restricted by [content security policies](/apigee/docs/api-platform/publish/portal/csp). Max length of file path is 2,083 characters.").optional(),
  "siteId": z.string().describe("Output only. The ID of the parent portal.").readonly().optional(),
  "visibility": z.boolean().describe("Optional. DEPRECATED: use the \`published\` field instead").optional(),
  "categoryIds": z.array(z.string()).describe("Optional. The IDs of the API categories to which this catalog item belongs.").optional(),
  "anonAllowed": z.boolean().describe("Optional. Boolean flag that manages user access to the catalog item. When true, the catalog item has public visibility and can be viewed anonymously; otherwise, only registered users may view it. Note: when the parent portal is enrolled in the [audience management feature](https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature), and this flag is set to false, visibility is set to an indeterminate state and must be explicitly specified in the management UI (see [Manage the visibility of an API in your portal](https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility)). Additionally, when enrolled in the audience management feature, updates to this flag will be ignored as visibility permissions must be updated in the management UI.").optional(),
  "modified": z.string().describe("Output only. Time the catalog item was last modified in milliseconds since epoch.").readonly().optional(),
  "description": z.string().describe("Optional. Description of the catalog item. Max length is 10,000 characters.").optional(),
  "edgeAPIProductName": z.string().describe("Optional. Immutable. DEPRECATED: use the \`apiProductName\` field instead").optional(),
  "id": z.string().describe("Output only. The ID of the catalog item.").readonly().optional(),
  "published": z.boolean().describe("Optional. Denotes whether the catalog item is published to the portal or is in a draft state. When the parent portal is enrolled in the [audience management feature](https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature), the visibility can be set to public on creation by setting the anonAllowed flag to true or further managed in the management UI (see [Manage the visibility of an API in your portal](https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility)) before it can be visible to any users. If not enrolled in the audience management feature, the visibility is managed by the \`anonAllowed\` flag.").optional(),
  "title": z.string().describe("Required. The user-facing name of the catalog item. \`title\` must be a non-empty string with a max length of 255 characters.").optional(),
  "apiProductName": z.string().describe("Required. Immutable. The \`name\` field of the associated [API product](/apigee/docs/reference/apis/apigee/rest/v1/organizations.apiproducts). A portal may have only one catalog item associated with a given API product.").optional()
}
```

### parameters_v1_organizations_organizationsid_sites_sitesid_apidoc

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_sites_apidocs_updatedocumentation

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sitesId": z.string(),
  "apidocsId": z.string(),
  "oasDocumentation": z.object({ "spec": z.object({ "contents": z.string().describe("Required. The file contents. The max size is 4 MB.").optional(), "displayName": z.string().describe("Required. A display name for the file, shown in the management UI. Max length is 255 characters.").optional() }).describe("Required. The documentation file contents for the OpenAPI Specification. JSON and YAML file formats are supported.").optional(), "format": z.enum(["FORMAT_UNSPECIFIED","YAML","JSON"]).describe("Output only. The format of the input specification file contents.").readonly().optional() }).describe("Optional. OpenAPI Specification documentation.").optional(),
  "graphqlDocumentation": z.object({ "endpointUri": z.string().describe("Required. The GraphQL endpoint URI to be queried by API consumers. Max length is 2,083 characters.").optional(), "schema": z.object({ "contents": z.string().describe("Required. The file contents. The max size is 4 MB.").optional(), "displayName": z.string().describe("Required. A display name for the file, shown in the management UI. Max length is 255 characters.").optional() }).describe("Required. The documentation file contents for the GraphQL schema.").optional() }).describe("Optional. GraphQL documentation.").optional()
}
```

### apigee_organizations_sites_apidocs_getdocumentation

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sitesId": z.string(),
  "apidocsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_apiproducts_apiprodu

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_apiproducts_attributes_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apiproductsId": z.string()
}
```

### apigee_organizations_apiproducts_attributes

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apiproductsId": z.string(),
  "attribute": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes.").optional()
}
```

### parameters_v1_organizations_organizationsid_apiproducts_apiprodu

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_apiproducts_attributes_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apiproductsId": z.string(),
  "attributesId": z.string()
}
```

### apigee_organizations_apiproducts_attributes_updateapiproductattr

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apiproductsId": z.string(),
  "attributesId": z.string(),
  "name": z.string().describe("API key of the attribute.").optional(),
  "value": z.string().describe("Value of the attribute.").optional()
}
```

### apigee_organizations_apiproducts_attributes_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apiproductsId": z.string(),
  "attributesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_apiproducts_apiprodu

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_apiproducts_rateplans_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apiproductsId": z.string(),
  "orderBy": z.string().optional(),
  "expand": z.boolean().optional(),
  "startKey": z.string().optional(),
  "state": z.string().optional(),
  "count": z.number().int().optional()
}
```

### apigee_organizations_apiproducts_rateplans_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apiproductsId": z.string(),
  "createdAt": z.string().describe("Output only. Time that the rate plan was created in milliseconds since epoch.").readonly().optional(),
  "displayName": z.string().describe("Display name of the rate plan.").optional(),
  "revenueShareRates": z.array(z.object({ "sharePercentage": z.number().describe("Percentage of the revenue to be shared with the developer. For example, to share 21 percent of the total revenue with the developer, set this value to 21. Specify a decimal number with a maximum of two digits following the decimal point.").optional(), "start": z.string().describe("Starting value of the range. Set to 0 or \`null\` for the initial range of values.").optional(), "end": z.string().describe("Ending value of the range. Set to 0 or \`null\` for the last range of values.").optional() }).describe("API call volume range and the percentage of revenue to share with the developer when the total number of API calls is within the range.")).describe("Details of the revenue sharing model.").optional(),
  "endTime": z.string().describe("Time when the rate plan will expire in milliseconds since epoch. Set to 0 or \`null\` to indicate that the rate plan should never expire.").optional(),
  "billingPeriod": z.enum(["BILLING_PERIOD_UNSPECIFIED","WEEKLY","MONTHLY"]).describe("Frequency at which the customer will be billed.").optional(),
  "fixedFeeFrequency": z.number().int().describe("Frequency at which the fixed fee is charged.").optional(),
  "name": z.string().describe("Output only. Name of the rate plan.").readonly().optional(),
  "startTime": z.string().describe("Time when the rate plan becomes active in milliseconds since epoch.").optional(),
  "lastModifiedAt": z.string().describe("Output only. Time the rate plan was last modified in milliseconds since epoch.").readonly().optional(),
  "consumptionPricingRates": z.array(z.object({ "fee": z.object({ "currencyCode": z.string().describe("The three-letter currency code defined in ISO 4217.").optional(), "nanos": z.number().int().describe("Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If \`units\` is positive, \`nanos\` must be positive or zero. If \`units\` is zero, \`nanos\` can be positive, zero, or negative. If \`units\` is negative, \`nanos\` must be negative or zero. For example $-1.75 is represented as \`units\`=-1 and \`nanos\`=-750,000,000.").optional(), "units": z.string().describe("The whole units of the amount. For example if \`currencyCode\` is \`\"USD\"\`, then 1 unit is one US dollar.").optional() }).describe("Fee to charge when total number of API calls falls within this range.").optional(), "end": z.string().describe("Ending value of the range. Set to 0 or \`null\` for the last range of values.").optional(), "start": z.string().describe("Starting value of the range. Set to 0 or \`null\` for the initial range of values.").optional() }).describe("API call volume range and the fees charged when the total number of API calls is within the range.")).describe("API call volume ranges and the fees charged when the total number of API calls is within a given range. The method used to calculate the final fee depends on the selected pricing model. For example, if the pricing model is \`STAIRSTEP\` and the ranges are defined as follows: \`\`\` { \"start\": 1, \"end\": 100, \"fee\": 75 }, { \"start\": 101, \"end\": 200, \"fee\": 100 }, } \`\`\` Then the following fees would be charged based on the total number of API calls (assuming the currency selected is \`USD\`): * 1 call costs $75 * 50 calls cost $75 * 150 calls cost $100 The number of API calls cannot exceed 200.").optional(),
  "setupFee": z.object({ "currencyCode": z.string().describe("The three-letter currency code defined in ISO 4217.").optional(), "nanos": z.number().int().describe("Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If \`units\` is positive, \`nanos\` must be positive or zero. If \`units\` is zero, \`nanos\` can be positive, zero, or negative. If \`units\` is negative, \`nanos\` must be negative or zero. For example $-1.75 is represented as \`units\`=-1 and \`nanos\`=-750,000,000.").optional(), "units": z.string().describe("The whole units of the amount. For example if \`currencyCode\` is \`\"USD\"\`, then 1 unit is one US dollar.").optional() }).describe("Initial, one-time fee paid when purchasing the API product.").optional(),
  "apiproduct": z.string().describe("Name of the API product that the rate plan is associated with.").optional(),
  "description": z.string().describe("Description of the rate plan.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","DRAFT","PUBLISHED"]).describe("Current state of the rate plan (draft or published).").optional(),
  "consumptionPricingType": z.enum(["CONSUMPTION_PRICING_TYPE_UNSPECIFIED","FIXED_PER_UNIT","BANDED","TIERED","STAIRSTEP"]).describe("Pricing model used for consumption-based charges.").optional(),
  "revenueShareType": z.enum(["REVENUE_SHARE_TYPE_UNSPECIFIED","FIXED","VOLUME_BANDED"]).describe("Method used to calculate the revenue that is shared with developers.").optional(),
  "fixedRecurringFee": z.object({ "currencyCode": z.string().describe("The three-letter currency code defined in ISO 4217.").optional(), "nanos": z.number().int().describe("Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If \`units\` is positive, \`nanos\` must be positive or zero. If \`units\` is zero, \`nanos\` can be positive, zero, or negative. If \`units\` is negative, \`nanos\` must be negative or zero. For example $-1.75 is represented as \`units\`=-1 and \`nanos\`=-750,000,000.").optional(), "units": z.string().describe("The whole units of the amount. For example if \`currencyCode\` is \`\"USD\"\`, then 1 unit is one US dollar.").optional() }).describe("Fixed amount that is charged at a defined interval and billed in advance of use of the API product. The fee will be prorated for the first billing period.").optional(),
  "currencyCode": z.string().describe("Currency to be used for billing. Consists of a three-letter code as defined by the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) standard.").optional()
}
```

### parameters_v1_organizations_organizationsid_apiproducts_apiprodu

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_apiproducts_rateplans_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apiproductsId": z.string(),
  "rateplansId": z.string()
}
```

### apigee_organizations_apiproducts_rateplans_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apiproductsId": z.string(),
  "rateplansId": z.string(),
  "createdAt": z.string().describe("Output only. Time that the rate plan was created in milliseconds since epoch.").readonly().optional(),
  "displayName": z.string().describe("Display name of the rate plan.").optional(),
  "revenueShareRates": z.array(z.object({ "sharePercentage": z.number().describe("Percentage of the revenue to be shared with the developer. For example, to share 21 percent of the total revenue with the developer, set this value to 21. Specify a decimal number with a maximum of two digits following the decimal point.").optional(), "start": z.string().describe("Starting value of the range. Set to 0 or \`null\` for the initial range of values.").optional(), "end": z.string().describe("Ending value of the range. Set to 0 or \`null\` for the last range of values.").optional() }).describe("API call volume range and the percentage of revenue to share with the developer when the total number of API calls is within the range.")).describe("Details of the revenue sharing model.").optional(),
  "endTime": z.string().describe("Time when the rate plan will expire in milliseconds since epoch. Set to 0 or \`null\` to indicate that the rate plan should never expire.").optional(),
  "billingPeriod": z.enum(["BILLING_PERIOD_UNSPECIFIED","WEEKLY","MONTHLY"]).describe("Frequency at which the customer will be billed.").optional(),
  "fixedFeeFrequency": z.number().int().describe("Frequency at which the fixed fee is charged.").optional(),
  "name": z.string().describe("Output only. Name of the rate plan.").readonly().optional(),
  "startTime": z.string().describe("Time when the rate plan becomes active in milliseconds since epoch.").optional(),
  "lastModifiedAt": z.string().describe("Output only. Time the rate plan was last modified in milliseconds since epoch.").readonly().optional(),
  "consumptionPricingRates": z.array(z.object({ "fee": z.object({ "currencyCode": z.string().describe("The three-letter currency code defined in ISO 4217.").optional(), "nanos": z.number().int().describe("Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If \`units\` is positive, \`nanos\` must be positive or zero. If \`units\` is zero, \`nanos\` can be positive, zero, or negative. If \`units\` is negative, \`nanos\` must be negative or zero. For example $-1.75 is represented as \`units\`=-1 and \`nanos\`=-750,000,000.").optional(), "units": z.string().describe("The whole units of the amount. For example if \`currencyCode\` is \`\"USD\"\`, then 1 unit is one US dollar.").optional() }).describe("Fee to charge when total number of API calls falls within this range.").optional(), "end": z.string().describe("Ending value of the range. Set to 0 or \`null\` for the last range of values.").optional(), "start": z.string().describe("Starting value of the range. Set to 0 or \`null\` for the initial range of values.").optional() }).describe("API call volume range and the fees charged when the total number of API calls is within the range.")).describe("API call volume ranges and the fees charged when the total number of API calls is within a given range. The method used to calculate the final fee depends on the selected pricing model. For example, if the pricing model is \`STAIRSTEP\` and the ranges are defined as follows: \`\`\` { \"start\": 1, \"end\": 100, \"fee\": 75 }, { \"start\": 101, \"end\": 200, \"fee\": 100 }, } \`\`\` Then the following fees would be charged based on the total number of API calls (assuming the currency selected is \`USD\`): * 1 call costs $75 * 50 calls cost $75 * 150 calls cost $100 The number of API calls cannot exceed 200.").optional(),
  "setupFee": z.object({ "currencyCode": z.string().describe("The three-letter currency code defined in ISO 4217.").optional(), "nanos": z.number().int().describe("Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If \`units\` is positive, \`nanos\` must be positive or zero. If \`units\` is zero, \`nanos\` can be positive, zero, or negative. If \`units\` is negative, \`nanos\` must be negative or zero. For example $-1.75 is represented as \`units\`=-1 and \`nanos\`=-750,000,000.").optional(), "units": z.string().describe("The whole units of the amount. For example if \`currencyCode\` is \`\"USD\"\`, then 1 unit is one US dollar.").optional() }).describe("Initial, one-time fee paid when purchasing the API product.").optional(),
  "apiproduct": z.string().describe("Name of the API product that the rate plan is associated with.").optional(),
  "description": z.string().describe("Description of the rate plan.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","DRAFT","PUBLISHED"]).describe("Current state of the rate plan (draft or published).").optional(),
  "consumptionPricingType": z.enum(["CONSUMPTION_PRICING_TYPE_UNSPECIFIED","FIXED_PER_UNIT","BANDED","TIERED","STAIRSTEP"]).describe("Pricing model used for consumption-based charges.").optional(),
  "revenueShareType": z.enum(["REVENUE_SHARE_TYPE_UNSPECIFIED","FIXED","VOLUME_BANDED"]).describe("Method used to calculate the revenue that is shared with developers.").optional(),
  "fixedRecurringFee": z.object({ "currencyCode": z.string().describe("The three-letter currency code defined in ISO 4217.").optional(), "nanos": z.number().int().describe("Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If \`units\` is positive, \`nanos\` must be positive or zero. If \`units\` is zero, \`nanos\` can be positive, zero, or negative. If \`units\` is negative, \`nanos\` must be negative or zero. For example $-1.75 is represented as \`units\`=-1 and \`nanos\`=-750,000,000.").optional(), "units": z.string().describe("The whole units of the amount. For example if \`currencyCode\` is \`\"USD\"\`, then 1 unit is one US dollar.").optional() }).describe("Fixed amount that is charged at a defined interval and billed in advance of use of the API product. The fee will be prorated for the first billing period.").optional(),
  "currencyCode": z.string().describe("Currency to be used for billing. Consists of a three-letter code as defined by the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) standard.").optional()
}
```

### apigee_organizations_apiproducts_rateplans_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apiproductsId": z.string(),
  "rateplansId": z.string()
}
```

### parameters_v1_organizations_organizationsid_apiproducts

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_apiproducts_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "attributename": z.string().optional(),
  "startKey": z.string().optional(),
  "expand": z.boolean().optional(),
  "attributevalue": z.string().optional(),
  "count": z.string().optional()
}
```

### apigee_organizations_apiproducts_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "displayName": z.string().describe("Name displayed in the UI or developer portal to developers registering for API access.").optional(),
  "graphqlOperationGroup": z.object({ "operationConfigType": z.string().describe("Flag that specifies whether the configuration is for Apigee API proxy or a remote service. Valid values include \`proxy\` or \`remoteservice\`. Defaults to \`proxy\`. Set to \`proxy\` when Apigee API proxies are associated with the API product. Set to \`remoteservice\` when non-Apigee proxies like Istio-Envoy are associated with the API product.").optional(), "operationConfigs": z.array(z.object({ "apiSource": z.string().describe("Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated.").optional(), "quota": z.object({ "timeUnit": z.string().describe("Time unit defined for the \`interval\`. Valid values include \`minute\`, \`hour\`, \`day\`, or \`month\`. If \`limit\` and \`interval\` are valid, the default value is \`hour\`; otherwise, the default is null.").optional(), "interval": z.string().describe("Required. Time interval over which the number of request messages is calculated.").optional(), "limit": z.string().describe("Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.").optional() }).describe("Quota parameters to be enforced for the resources, methods, and API source combination. If none are specified, quota enforcement will not be done.").optional(), "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("Custom attributes associated with the operation.").optional(), "operations": z.array(z.object({ "operation": z.string().describe("GraphQL operation name. The name and operation type will be used to apply quotas. If no name is specified, the quota will be applied to all GraphQL operations irrespective of their operation names in the payload.").optional(), "operationTypes": z.array(z.string()).describe("Required. GraphQL operation types. Valid values include \`query\` or \`mutation\`. **Note**: Apigee does not currently support \`subscription\` types.").optional() }).describe("Represents the pairing of GraphQL operation types and the GraphQL operation name.")).describe("Required. List of GraphQL name/operation type pairs for the proxy or remote service to which quota will be applied. If only operation types are specified, the quota will be applied to all GraphQL requests irrespective of the GraphQL name. **Note**: Currently, you can specify only a single GraphQLOperation. Specifying more than one will cause the operation to fail.").optional() }).describe("Binds the resources in a proxy or remote service with the GraphQL operation and its associated quota enforcement.")).describe("Required. List of operation configurations for either Apigee API proxies or other remote services that are associated with this API product.").optional() }).describe("Configuration used to group Apigee proxies or remote services with graphQL operation name, graphQL operation type and quotas. This grouping allows us to precisely set quota for a particular combination of graphQL name and operation type for a particular proxy request. If graphQL name is not set, this would imply quota will be applied on all graphQL requests matching the operation type.").optional(),
  "proxies": z.array(z.string()).describe("Comma-separated list of API proxy names to which this API product is bound. By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies. Apigee rejects requests to API proxies that are not listed. **Note:** The API proxy names must already exist in the specified environment as they will be validated upon creation.").optional(),
  "approvalType": z.string().describe("Flag that specifies how API keys are approved to access the APIs defined by the API product. If set to \`manual\`, the consumer key is generated and returned in \"pending\" state. In this case, the API keys won't work until they have been explicitly approved. If set to \`auto\`, the consumer key is generated and returned in \"approved\" state and can be used immediately. **Note:** Typically, \`auto\` is used to provide access to free or trial API products that provide limited quota or capabilities.").optional(),
  "quotaTimeUnit": z.string().describe("Time unit defined for the \`quotaInterval\`. Valid values include \`minute\`, \`hour\`, \`day\`, or \`month\`.").optional(),
  "environments": z.array(z.string()).describe("Comma-separated list of environment names to which the API product is bound. Requests to environments that are not listed are rejected. By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment. This setting is used, for example, to prevent resources associated with API proxies in \`prod\` from being accessed by API proxies deployed in \`test\`.").optional(),
  "lastModifiedAt": z.string().describe("Response only. Modified time of this environment as milliseconds since epoch.").optional(),
  "createdAt": z.string().describe("Response only. Creation time of this environment as milliseconds since epoch.").optional(),
  "quota": z.string().describe("Number of request messages permitted per app by this API product for the specified \`quotaInterval\` and \`quotaTimeUnit\`. For example, a \`quota\` of 50, for a \`quotaInterval\` of 12 and a \`quotaTimeUnit\` of hours means 50 requests are allowed every 12 hours.").optional(),
  "quotaCounterScope": z.enum(["QUOTA_COUNTER_SCOPE_UNSPECIFIED","PROXY","OPERATION"]).describe("Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself.").optional(),
  "operationGroup": z.object({ "operationConfigType": z.string().describe("Flag that specifes whether the configuration is for Apigee API proxy or a remote service. Valid values include \`proxy\` or \`remoteservice\`. Defaults to \`proxy\`. Set to \`proxy\` when Apigee API proxies are associated with the API product. Set to \`remoteservice\` when non-Apigee proxies like Istio-Envoy are associated with the API product.").optional(), "operationConfigs": z.array(z.object({ "quota": z.object({ "timeUnit": z.string().describe("Time unit defined for the \`interval\`. Valid values include \`minute\`, \`hour\`, \`day\`, or \`month\`. If \`limit\` and \`interval\` are valid, the default value is \`hour\`; otherwise, the default is null.").optional(), "interval": z.string().describe("Required. Time interval over which the number of request messages is calculated.").optional(), "limit": z.string().describe("Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.").optional() }).describe("Quota parameters to be enforced for the resources, methods, and API source combination. If none are specified, quota enforcement will not be done.").optional(), "operations": z.array(z.object({ "methods": z.array(z.string()).describe("methods refers to the REST verbs as in https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html. When none specified, all verb types are allowed.").optional(), "resource": z.string().describe("Required. REST resource path associated with the API proxy or remote service.").optional() }).describe("Represents the pairing of REST resource path and the actions (verbs) allowed on the resource path.")).describe("List of resource/method pairs for the API proxy or remote service to which quota will applied. **Note**: Currently, you can specify only a single resource/method pair. The call will fail if more than one resource/method pair is provided.").optional(), "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("Custom attributes associated with the operation.").optional(), "apiSource": z.string().describe("Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated.").optional() }).describe("Binds the resources in an API proxy or remote service with the allowed REST methods and associated quota enforcement.")).describe("Required. List of operation configurations for either Apigee API proxies or other remote services that are associated with this API product.").optional() }).describe("Configuration used to group Apigee proxies or remote services with resources, method types, and quotas. The resource refers to the resource URI (excluding the base path). With this grouping, the API product creator is able to fine-tune and give precise control over which REST methods have access to specific resources and how many calls can be made (using the \`quota\` setting). **Note:** The \`api_resources\` setting cannot be specified for both the API product and operation group; otherwise the call will fail.").optional(),
  "grpcOperationGroup": z.object({ "operationConfigs": z.array(z.object({ "quota": z.object({ "timeUnit": z.string().describe("Time unit defined for the \`interval\`. Valid values include \`minute\`, \`hour\`, \`day\`, or \`month\`. If \`limit\` and \`interval\` are valid, the default value is \`hour\`; otherwise, the default is null.").optional(), "interval": z.string().describe("Required. Time interval over which the number of request messages is calculated.").optional(), "limit": z.string().describe("Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.").optional() }).describe("Quota parameters to be enforced for the methods and API source combination. If none are specified, quota enforcement will not be done.").optional(), "apiSource": z.string().describe("Required. Name of the API proxy with which the gRPC operation and quota are associated.").optional(), "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("Custom attributes associated with the operation.").optional(), "service": z.string().describe("Required. gRPC Service name associated to be associated with the API proxy, on which quota rules can be applied upon.").optional(), "methods": z.array(z.string()).describe("List of unqualified gRPC method names for the proxy to which quota will be applied. If this field is empty, the Quota will apply to all operations on the gRPC service defined on the proxy. Example: Given a proxy that is configured to serve com.petstore.PetService, the methods com.petstore.PetService.ListPets and com.petstore.PetService.GetPet would be specified here as simply [\"ListPets\", \"GetPet\"].").optional() }).describe("Binds the resources in a proxy or remote service with the gRPC operation and its associated quota enforcement.")).describe("Required. List of operation configurations for either Apigee API proxies that are associated with this API product.").optional() }).describe("Optional. Configuration used to group Apigee proxies with gRPC services and method names. This grouping allows us to set quota for a particular proxy with the gRPC service name and method. If a method name is not set, this implies quota and authorization are applied to all gRPC methods implemented by that proxy for that particular gRPC service.").optional(),
  "name": z.string().describe("Internal name of the API product. Characters you can use in the name are restricted to: \`A-Z0-9._\\-$ %\`. **Note:** The internal name cannot be edited when updating the API product.").optional(),
  "quotaInterval": z.string().describe("Time interval over which the number of request messages is calculated.").optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("Array of attributes that may be used to extend the default API product profile with customer-specific metadata. You can specify a maximum of 18 attributes. Use this property to specify the access level of the API product as either \`public\`, \`private\`, or \`internal\`. Only products marked \`public\` are available to developers in the Apigee developer portal. For example, you can set a product to \`internal\` while it is in development and then change access to \`public\` when it is ready to release on the portal. API products marked as \`private\` do not appear on the portal, but can be accessed by external developers.").optional(),
  "apiResources": z.array(z.string()).describe("Comma-separated list of API resources to be bundled in the API product. By default, the resource paths are mapped from the \`proxy.pathsuffix\` variable. The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the \`apiResources\` element is defined to be \`/forecastrss\` and the base path defined for the API proxy is \`/weather\`, then only requests to \`/weather/forecastrss\` are permitted by the API product. You can select a specific path, or you can select all subpaths with the following wildcard: - \`/**\`: Indicates that all sub-URIs are included. - \`/*\` : Indicates that only URIs one level down are included. By default, / supports the same resources as /** as well as the base path defined by the API proxy. For example, if the base path of the API proxy is \`/v1/weatherapikey\`, then the API product supports requests to \`/v1/weatherapikey\` and to any sub-URIs, such as \`/v1/weatherapikey/forecastrss\`, \`/v1/weatherapikey/region/CA\`, and so on. For more information, see Managing API products.").optional(),
  "scopes": z.array(z.string()).describe("Comma-separated list of OAuth scopes that are validated at runtime. Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product.").optional(),
  "description": z.string().describe("Description of the API product. Include key information about the API product that is not captured by other fields.").optional()
}
```

### parameters_v1_organizations_organizationsid_apiproducts_apiprodu

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_apiproducts_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apiproductsId": z.string(),
  "displayName": z.string().describe("Name displayed in the UI or developer portal to developers registering for API access.").optional(),
  "graphqlOperationGroup": z.object({ "operationConfigType": z.string().describe("Flag that specifies whether the configuration is for Apigee API proxy or a remote service. Valid values include \`proxy\` or \`remoteservice\`. Defaults to \`proxy\`. Set to \`proxy\` when Apigee API proxies are associated with the API product. Set to \`remoteservice\` when non-Apigee proxies like Istio-Envoy are associated with the API product.").optional(), "operationConfigs": z.array(z.object({ "apiSource": z.string().describe("Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated.").optional(), "quota": z.object({ "timeUnit": z.string().describe("Time unit defined for the \`interval\`. Valid values include \`minute\`, \`hour\`, \`day\`, or \`month\`. If \`limit\` and \`interval\` are valid, the default value is \`hour\`; otherwise, the default is null.").optional(), "interval": z.string().describe("Required. Time interval over which the number of request messages is calculated.").optional(), "limit": z.string().describe("Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.").optional() }).describe("Quota parameters to be enforced for the resources, methods, and API source combination. If none are specified, quota enforcement will not be done.").optional(), "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("Custom attributes associated with the operation.").optional(), "operations": z.array(z.object({ "operation": z.string().describe("GraphQL operation name. The name and operation type will be used to apply quotas. If no name is specified, the quota will be applied to all GraphQL operations irrespective of their operation names in the payload.").optional(), "operationTypes": z.array(z.string()).describe("Required. GraphQL operation types. Valid values include \`query\` or \`mutation\`. **Note**: Apigee does not currently support \`subscription\` types.").optional() }).describe("Represents the pairing of GraphQL operation types and the GraphQL operation name.")).describe("Required. List of GraphQL name/operation type pairs for the proxy or remote service to which quota will be applied. If only operation types are specified, the quota will be applied to all GraphQL requests irrespective of the GraphQL name. **Note**: Currently, you can specify only a single GraphQLOperation. Specifying more than one will cause the operation to fail.").optional() }).describe("Binds the resources in a proxy or remote service with the GraphQL operation and its associated quota enforcement.")).describe("Required. List of operation configurations for either Apigee API proxies or other remote services that are associated with this API product.").optional() }).describe("Configuration used to group Apigee proxies or remote services with graphQL operation name, graphQL operation type and quotas. This grouping allows us to precisely set quota for a particular combination of graphQL name and operation type for a particular proxy request. If graphQL name is not set, this would imply quota will be applied on all graphQL requests matching the operation type.").optional(),
  "proxies": z.array(z.string()).describe("Comma-separated list of API proxy names to which this API product is bound. By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies. Apigee rejects requests to API proxies that are not listed. **Note:** The API proxy names must already exist in the specified environment as they will be validated upon creation.").optional(),
  "approvalType": z.string().describe("Flag that specifies how API keys are approved to access the APIs defined by the API product. If set to \`manual\`, the consumer key is generated and returned in \"pending\" state. In this case, the API keys won't work until they have been explicitly approved. If set to \`auto\`, the consumer key is generated and returned in \"approved\" state and can be used immediately. **Note:** Typically, \`auto\` is used to provide access to free or trial API products that provide limited quota or capabilities.").optional(),
  "quotaTimeUnit": z.string().describe("Time unit defined for the \`quotaInterval\`. Valid values include \`minute\`, \`hour\`, \`day\`, or \`month\`.").optional(),
  "environments": z.array(z.string()).describe("Comma-separated list of environment names to which the API product is bound. Requests to environments that are not listed are rejected. By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment. This setting is used, for example, to prevent resources associated with API proxies in \`prod\` from being accessed by API proxies deployed in \`test\`.").optional(),
  "lastModifiedAt": z.string().describe("Response only. Modified time of this environment as milliseconds since epoch.").optional(),
  "createdAt": z.string().describe("Response only. Creation time of this environment as milliseconds since epoch.").optional(),
  "quota": z.string().describe("Number of request messages permitted per app by this API product for the specified \`quotaInterval\` and \`quotaTimeUnit\`. For example, a \`quota\` of 50, for a \`quotaInterval\` of 12 and a \`quotaTimeUnit\` of hours means 50 requests are allowed every 12 hours.").optional(),
  "quotaCounterScope": z.enum(["QUOTA_COUNTER_SCOPE_UNSPECIFIED","PROXY","OPERATION"]).describe("Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself.").optional(),
  "operationGroup": z.object({ "operationConfigType": z.string().describe("Flag that specifes whether the configuration is for Apigee API proxy or a remote service. Valid values include \`proxy\` or \`remoteservice\`. Defaults to \`proxy\`. Set to \`proxy\` when Apigee API proxies are associated with the API product. Set to \`remoteservice\` when non-Apigee proxies like Istio-Envoy are associated with the API product.").optional(), "operationConfigs": z.array(z.object({ "quota": z.object({ "timeUnit": z.string().describe("Time unit defined for the \`interval\`. Valid values include \`minute\`, \`hour\`, \`day\`, or \`month\`. If \`limit\` and \`interval\` are valid, the default value is \`hour\`; otherwise, the default is null.").optional(), "interval": z.string().describe("Required. Time interval over which the number of request messages is calculated.").optional(), "limit": z.string().describe("Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.").optional() }).describe("Quota parameters to be enforced for the resources, methods, and API source combination. If none are specified, quota enforcement will not be done.").optional(), "operations": z.array(z.object({ "methods": z.array(z.string()).describe("methods refers to the REST verbs as in https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html. When none specified, all verb types are allowed.").optional(), "resource": z.string().describe("Required. REST resource path associated with the API proxy or remote service.").optional() }).describe("Represents the pairing of REST resource path and the actions (verbs) allowed on the resource path.")).describe("List of resource/method pairs for the API proxy or remote service to which quota will applied. **Note**: Currently, you can specify only a single resource/method pair. The call will fail if more than one resource/method pair is provided.").optional(), "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("Custom attributes associated with the operation.").optional(), "apiSource": z.string().describe("Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated.").optional() }).describe("Binds the resources in an API proxy or remote service with the allowed REST methods and associated quota enforcement.")).describe("Required. List of operation configurations for either Apigee API proxies or other remote services that are associated with this API product.").optional() }).describe("Configuration used to group Apigee proxies or remote services with resources, method types, and quotas. The resource refers to the resource URI (excluding the base path). With this grouping, the API product creator is able to fine-tune and give precise control over which REST methods have access to specific resources and how many calls can be made (using the \`quota\` setting). **Note:** The \`api_resources\` setting cannot be specified for both the API product and operation group; otherwise the call will fail.").optional(),
  "grpcOperationGroup": z.object({ "operationConfigs": z.array(z.object({ "quota": z.object({ "timeUnit": z.string().describe("Time unit defined for the \`interval\`. Valid values include \`minute\`, \`hour\`, \`day\`, or \`month\`. If \`limit\` and \`interval\` are valid, the default value is \`hour\`; otherwise, the default is null.").optional(), "interval": z.string().describe("Required. Time interval over which the number of request messages is calculated.").optional(), "limit": z.string().describe("Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.").optional() }).describe("Quota parameters to be enforced for the methods and API source combination. If none are specified, quota enforcement will not be done.").optional(), "apiSource": z.string().describe("Required. Name of the API proxy with which the gRPC operation and quota are associated.").optional(), "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("Custom attributes associated with the operation.").optional(), "service": z.string().describe("Required. gRPC Service name associated to be associated with the API proxy, on which quota rules can be applied upon.").optional(), "methods": z.array(z.string()).describe("List of unqualified gRPC method names for the proxy to which quota will be applied. If this field is empty, the Quota will apply to all operations on the gRPC service defined on the proxy. Example: Given a proxy that is configured to serve com.petstore.PetService, the methods com.petstore.PetService.ListPets and com.petstore.PetService.GetPet would be specified here as simply [\"ListPets\", \"GetPet\"].").optional() }).describe("Binds the resources in a proxy or remote service with the gRPC operation and its associated quota enforcement.")).describe("Required. List of operation configurations for either Apigee API proxies that are associated with this API product.").optional() }).describe("Optional. Configuration used to group Apigee proxies with gRPC services and method names. This grouping allows us to set quota for a particular proxy with the gRPC service name and method. If a method name is not set, this implies quota and authorization are applied to all gRPC methods implemented by that proxy for that particular gRPC service.").optional(),
  "name": z.string().describe("Internal name of the API product. Characters you can use in the name are restricted to: \`A-Z0-9._\\-$ %\`. **Note:** The internal name cannot be edited when updating the API product.").optional(),
  "quotaInterval": z.string().describe("Time interval over which the number of request messages is calculated.").optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("Array of attributes that may be used to extend the default API product profile with customer-specific metadata. You can specify a maximum of 18 attributes. Use this property to specify the access level of the API product as either \`public\`, \`private\`, or \`internal\`. Only products marked \`public\` are available to developers in the Apigee developer portal. For example, you can set a product to \`internal\` while it is in development and then change access to \`public\` when it is ready to release on the portal. API products marked as \`private\` do not appear on the portal, but can be accessed by external developers.").optional(),
  "apiResources": z.array(z.string()).describe("Comma-separated list of API resources to be bundled in the API product. By default, the resource paths are mapped from the \`proxy.pathsuffix\` variable. The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the \`apiResources\` element is defined to be \`/forecastrss\` and the base path defined for the API proxy is \`/weather\`, then only requests to \`/weather/forecastrss\` are permitted by the API product. You can select a specific path, or you can select all subpaths with the following wildcard: - \`/**\`: Indicates that all sub-URIs are included. - \`/*\` : Indicates that only URIs one level down are included. By default, / supports the same resources as /** as well as the base path defined by the API proxy. For example, if the base path of the API proxy is \`/v1/weatherapikey\`, then the API product supports requests to \`/v1/weatherapikey\` and to any sub-URIs, such as \`/v1/weatherapikey/forecastrss\`, \`/v1/weatherapikey/region/CA\`, and so on. For more information, see Managing API products.").optional(),
  "scopes": z.array(z.string()).describe("Comma-separated list of OAuth scopes that are validated at runtime. Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product.").optional(),
  "description": z.string().describe("Description of the API product. Include key information about the API product that is not captured by other fields.").optional()
}
```

### apigee_organizations_apiproducts_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apiproductsId": z.string()
}
```

### apigee_organizations_apiproducts_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apiproductsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_operations

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_operations_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional(),
  "filter": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_operations_operation

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_operations_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "operationsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_securityactions_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "securityActionsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_securityactions_disable

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "securityActionsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_securityactions_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "pageToken": z.string().optional(),
  "filter": z.string().optional(),
  "pageSize": z.number().int().optional()
}
```

### apigee_organizations_environments_securityactions_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "securityActionId": z.string().optional(),
  "description": z.string().describe("Optional. An optional user provided description of the SecurityAction.").optional(),
  "name": z.string().describe("Immutable. This field is ignored during creation as per AIP-133. Please set the \`security_action_id\` field in the CreateSecurityActionRequest when creating a new SecurityAction. Format: organizations/{org}/environments/{env}/securityActions/{security_action}").optional(),
  "conditionConfig": z.object({ "asns": z.array(z.string()).describe("Optional. A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types.").optional(), "accessTokens": z.array(z.string()).describe("Optional. A list of access_tokens. Limit 1000 per action.").optional(), "developers": z.array(z.string()).describe("Optional. A list of developers. Limit 1000 per action.").optional(), "userAgents": z.array(z.string()).describe("Optional. A list of user agents to deny. We look for exact matches. Limit 50 per action.").optional(), "apiProducts": z.array(z.string()).describe("Optional. A list of API Products. Limit 1000 per action.").optional(), "ipAddressRanges": z.array(z.string()).describe("Optional. A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action.").optional(), "regionCodes": z.array(z.string()).describe("Optional. A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.").optional(), "developerApps": z.array(z.string()).describe("Optional. A list of developer apps. Limit 1000 per action.").optional(), "apiKeys": z.array(z.string()).describe("Optional. A list of API keys. Limit 1000 per action.").optional(), "botReasons": z.array(z.string()).describe("Optional. A list of Bot Reasons. Current options: Flooder, Brute Guessor, Static Content Scraper, OAuth Abuser, Robot Abuser, TorListRule, Advanced Anomaly Detection, Advanced API Scraper, Search Engine Crawlers, Public Clouds, Public Cloud AWS, Public Cloud Azure, and Public Cloud Google.").optional(), "httpMethods": z.array(z.string()).describe("Optional. Act only on particular HTTP methods. E.g. A read-only API can block POST/PUT/DELETE methods. Accepted values are: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE and PATCH.").optional() }).describe("Required. A valid SecurityAction must contain at least one condition.").optional(),
  "updateTime": z.string().describe("Output only. The update time for this SecurityAction. This reflects when this SecurityAction changed states.").readonly().optional(),
  "expireTime": z.string().describe("The expiration for this SecurityAction.").optional(),
  "ttl": z.string().describe("Input only. The TTL for this SecurityAction.").optional(),
  "createTime": z.string().describe("Output only. The create time for this SecurityAction.").readonly().optional(),
  "state": z.enum(["STATE_UNSPECIFIED","ENABLED","DISABLED"]).describe("Required. Only an ENABLED SecurityAction is enforced. An ENABLED SecurityAction past its expiration time will not be enforced.").optional(),
  "flag": z.object({ "headers": z.array(z.object({ "value": z.string().describe("The header value to be sent to the target.").optional(), "name": z.string().describe("The header name to be sent to the target.").optional() }).describe("An HTTP header.")).describe("Optional. A list of HTTP headers to be sent to the target in case of a FLAG SecurityAction. Limit 5 headers per SecurityAction. At least one is mandatory.").optional() }).describe("Flag a request through if it matches this SecurityAction.").optional(),
  "deny": z.object({ "responseCode": z.number().int().describe("Optional. The HTTP response code if the Action = DENY.").optional() }).describe("Deny a request through if it matches this SecurityAction.").optional(),
  "allow": z.object({}).describe("Allow a request through if it matches this SecurityAction.").optional(),
  "apiProxies": z.array(z.string()).describe("Optional. If unset, this would apply to all proxies in the environment. If set, this action is enforced only if at least one proxy in the repeated list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions. There can be at most 100 enabled actions with proxies set in an env. Several other restrictions apply on conditions and are detailed later.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_securityactions_enable

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "securityActionsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_resourcefiles_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "type": z.string().optional()
}
```

### apigee_organizations_environments_resourcefiles_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "name": z.string().optional(),
  "type": z.string().optional(),
  "contentType": z.string().describe("The HTTP Content-Type header value specifying the content type of the body.").optional(),
  "extensions": z.array(z.record(z.any().describe("Properties of the object. Contains field @type with type URL."))).describe("Application specific response metadata. Must be set in the first response for streaming APIs.").optional(),
  "data": z.string().describe("The HTTP request/response body as raw binary.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_resourcefiles_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "type": z.string(),
  "name": z.string()
}
```

### apigee_organizations_environments_resourcefiles_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "type": z.string(),
  "name": z.string()
}
```

### apigee_organizations_environments_resourcefiles_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "type": z.string(),
  "name": z.string(),
  "contentType": z.string().describe("The HTTP Content-Type header value specifying the content type of the body.").optional(),
  "extensions": z.array(z.record(z.any().describe("Properties of the object. Contains field @type with type URL."))).describe("Application specific response metadata. Must be set in the first response for streaming APIs.").optional(),
  "data": z.string().describe("The HTTP request/response body as raw binary.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_resourcefiles_listenvironmentr

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "type": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_caches_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "cachesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_deployments_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "deploymentsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_deployments_testiampermissions

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "deploymentsId": z.string(),
  "permissions": z.array(z.string()).describe("The set of permissions to check for the \`resource\`. Permissions with wildcards (such as \`*\` or \`storage.*\`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_deployments_getiampolicy

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "deploymentsId": z.string(),
  "options.requestedPolicyVersion": z.number().int().optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_deployments_setiampolicy

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "deploymentsId": z.string(),
  "updateMask": z.string().describe("OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: \`paths: \"bindings, etag\"\`").optional(),
  "policy": z.object({ "etag": z.string().describe("\`etag\` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the \`etag\` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An \`etag\` is returned in the response to \`getIamPolicy\`, and systems are expected to put that etag in the request to \`setIamPolicy\` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the \`etag\` field whenever you call \`setIamPolicy\`. If you omit this field, then IAM allows you to overwrite a version \`3\` policy with a version \`1\` policy, and all of the conditions in the version \`3\` policy are lost.").optional(), "version": z.number().int().describe("Specifies the format of the policy. Valid values are \`0\`, \`1\`, and \`3\`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version \`3\`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the \`etag\` field whenever you call \`setIamPolicy\`. If you omit this field, then IAM allows you to overwrite a version \`3\` policy with a version \`1\` policy, and all of the conditions in the version \`3\` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).").optional(), "bindings": z.array(z.object({ "role": z.string().describe("Role that is assigned to the list of \`members\`, or principals. For example, \`roles/viewer\`, \`roles/editor\`, or \`roles/owner\`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).").optional(), "condition": z.object({ "location": z.string().describe("Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.").optional(), "expression": z.string().describe("Textual representation of an expression in Common Expression Language syntax.").optional(), "title": z.string().describe("Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.").optional(), "description": z.string().describe("Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.").optional() }).describe("The condition that is associated with this binding. If the condition evaluates to \`true\`, then this binding applies to the current request. If the condition evaluates to \`false\`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).").optional(), "members": z.array(z.string()).describe("Specifies the principals requesting access for a Google Cloud resource. \`members\` can have the following values: * \`allUsers\`: A special identifier that represents anyone who is on the internet; with or without a Google account. * \`allAuthenticatedUsers\`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * \`user:{emailid}\`: An email address that represents a specific Google account. For example, \`alice@example.com\` . * \`serviceAccount:{emailid}\`: An email address that represents a Google service account. For example, \`my-other-app@appspot.gserviceaccount.com\`. * \`serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]\`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, \`my-project.svc.id.goog[my-namespace/my-kubernetes-sa]\`. * \`group:{emailid}\`: An email address that represents a Google group. For example, \`admins@example.com\`. * \`domain:{domain}\`: The G Suite domain (primary) that represents all the users of that domain. For example, \`google.com\` or \`example.com\`. * \`principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}\`: A single identity in a workforce identity pool. * \`principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}\`: All workforce identities in a group. * \`principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}\`: All workforce identities with a specific attribute value. * \`principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*\`: All identities in a workforce identity pool. * \`principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}\`: A single identity in a workload identity pool. * \`principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}\`: A workload identity pool group. * \`principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}\`: All identities in a workload identity pool with a certain attribute. * \`principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*\`: All identities in a workload identity pool. * \`deleted:user:{emailid}?uid={uniqueid}\`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, \`alice@example.com?uid=123456789012345678901\`. If the user is recovered, this value reverts to \`user:{emailid}\` and the recovered user retains the role in the binding. * \`deleted:serviceAccount:{emailid}?uid={uniqueid}\`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, \`my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901\`. If the service account is undeleted, this value reverts to \`serviceAccount:{emailid}\` and the undeleted service account retains the role in the binding. * \`deleted:group:{emailid}?uid={uniqueid}\`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, \`admins@example.com?uid=123456789012345678901\`. If the group is recovered, this value reverts to \`group:{emailid}\` and the recovered group retains the role in the binding. * \`deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}\`: Deleted single identity in a workforce identity pool. For example, \`deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value\`.").optional() }).describe("Associates \`members\`, or principals, with a \`role\`.")).describe("Associates a list of \`members\`, or principals, with a \`role\`. Optionally, may specify a \`condition\` that determines how and when the \`bindings\` are applied. Each of the \`bindings\` must contain at least one principal. The \`bindings\` in a \`Policy\` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the \`bindings\` grant 50 different roles to \`user:alice@example.com\`, and not to any other principal, then you can add another 1,450 principals to the \`bindings\` in the \`Policy\`.").optional(), "auditConfigs": z.array(z.object({ "service": z.string().describe("Specifies a service that will be enabled for audit logging. For example, \`storage.googleapis.com\`, \`cloudsql.googleapis.com\`. \`allServices\` is a special value that covers all services.").optional(), "auditLogConfigs": z.array(z.object({ "exemptedMembers": z.array(z.string()).describe("Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.").optional(), "logType": z.enum(["LOG_TYPE_UNSPECIFIED","ADMIN_READ","DATA_WRITE","DATA_READ"]).describe("The log type that this config enables.").optional() }).describe("Provides the configuration for logging a type of permissions. Example: { \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.")).describe("The configuration for logging of each type of permission.").optional() }).describe("Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both \`allServices\` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { \"audit_configs\": [ { \"service\": \"allServices\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" }, { \"log_type\": \"ADMIN_READ\" } ] }, { \"service\": \"sampleservice.googleapis.com\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\" }, { \"log_type\": \"DATA_WRITE\", \"exempted_members\": [ \"user:aliya@example.com\" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts \`jose@example.com\` from DATA_READ logging, and \`aliya@example.com\` from DATA_WRITE logging.")).describe("Specifies cloud audit logging configuration for this policy.").optional() }).describe("REQUIRED: The complete policy to be applied to the \`resource\`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_deployments_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "sharedFlows": z.boolean().optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_references_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "referencesId": z.string()
}
```

### apigee_organizations_environments_references_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "referencesId": z.string(),
  "description": z.string().describe("Optional. A human-readable description of this reference.").optional(),
  "name": z.string().describe("Required. The resource id of this reference. Values must match the regular expression [\\w\\s\\-.]+.").optional(),
  "refers": z.string().describe("Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resource_type.").optional(),
  "resourceType": z.string().describe("The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.").optional()
}
```

### apigee_organizations_environments_references_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "referencesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_references_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "description": z.string().describe("Optional. A human-readable description of this reference.").optional(),
  "name": z.string().describe("Required. The resource id of this reference. Values must match the regular expression [\\w\\s\\-.]+.").optional(),
  "refers": z.string().describe("Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resource_type.").optional(),
  "resourceType": z.string().describe("The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_securityincidents_batchupdate

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "requests": z.array(z.object({ "securityIncident": z.object({ "name": z.string().describe("Immutable. Name of the security incident resource. Format: organizations/{org}/environments/{environment}/securityIncidents/{incident} Example: organizations/apigee-org/environments/dev/securityIncidents/1234-5678-9101-1111").optional(), "displayName": z.string().describe("Optional. Display name of the security incident.").optional(), "riskLevel": z.enum(["RISK_LEVEL_UNSPECIFIED","LOW","MODERATE","SEVERE"]).describe("Output only. Risk level of the incident.").readonly().optional(), "trafficCount": z.string().describe("Total traffic detected as part of the incident.").optional(), "observability": z.enum(["OBSERVABILITY_UNSPECIFIED","ACTIVE","ARCHIVED"]).describe("Optional. Indicates if the user archived this incident.").optional(), "firstDetectedTime": z.string().describe("Output only. The time when events associated with the incident were first detected.").readonly().optional(), "lastObservabilityChangeTime": z.string().describe("Output only. The time when the incident observability was last changed.").readonly().optional(), "detectionTypes": z.array(z.string()).describe("Output only. Detection types which are part of the incident. Examples: Flooder, OAuth Abuser, Static Content Scraper, Anomaly Detection.").readonly().optional(), "lastDetectedTime": z.string().describe("Output only. The time when events associated with the incident were last detected.").readonly().optional() }).describe("Required. The security incident to update. Must contain all existing populated fields of the current incident.").optional(), "updateMask": z.string().describe("Required. The list of fields to update. Allowed fields are: LINT.IfChange(allowed_update_fields_comment) - observability LINT.ThenChange()").optional() }).describe("Request for UpdateSecurityIncident.")).describe("Optional. Required. The request message specifying the resources to update. A maximum of 1000 can be modified in a batch.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_securityincidents_patch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "securityIncidentsId": z.string(),
  "updateMask": z.string().optional(),
  "name": z.string().describe("Immutable. Name of the security incident resource. Format: organizations/{org}/environments/{environment}/securityIncidents/{incident} Example: organizations/apigee-org/environments/dev/securityIncidents/1234-5678-9101-1111").optional(),
  "displayName": z.string().describe("Optional. Display name of the security incident.").optional(),
  "riskLevel": z.enum(["RISK_LEVEL_UNSPECIFIED","LOW","MODERATE","SEVERE"]).describe("Output only. Risk level of the incident.").readonly().optional(),
  "trafficCount": z.string().describe("Total traffic detected as part of the incident.").optional(),
  "observability": z.enum(["OBSERVABILITY_UNSPECIFIED","ACTIVE","ARCHIVED"]).describe("Optional. Indicates if the user archived this incident.").optional(),
  "firstDetectedTime": z.string().describe("Output only. The time when events associated with the incident were first detected.").readonly().optional(),
  "lastObservabilityChangeTime": z.string().describe("Output only. The time when the incident observability was last changed.").readonly().optional(),
  "detectionTypes": z.array(z.string()).describe("Output only. Detection types which are part of the incident. Examples: Flooder, OAuth Abuser, Static Content Scraper, Anomaly Detection.").readonly().optional(),
  "lastDetectedTime": z.string().describe("Output only. The time when events associated with the incident were last detected.").readonly().optional()
}
```

### apigee_organizations_environments_securityincidents_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "securityIncidentsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_securityincidents_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "filter": z.string().optional(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_sharedflows_revisions_getdeplo

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "sharedflowsId": z.string(),
  "revisionsId": z.string()
}
```

### apigee_organizations_environments_sharedflows_revisions_undeploy

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "sharedflowsId": z.string(),
  "revisionsId": z.string()
}
```

### apigee_organizations_environments_sharedflows_revisions_deploy

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "sharedflowsId": z.string(),
  "revisionsId": z.string(),
  "serviceAccount": z.string().optional(),
  "override": z.boolean().optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_sharedflows_deployments_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "sharedflowsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_queries_getresulturl

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "queriesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_queries_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "queriesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_queries_getresult

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "queriesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_queries_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "metrics": z.array(z.object({ "function": z.string().describe("Aggregation function: avg, min, max, or sum.").optional(), "name": z.string().describe("Required. Metric name.").optional(), "value": z.string().describe("Operand value should be provided when operator is set.").optional(), "alias": z.string().describe("Alias for the metric. Alias will be used to replace metric name in query results.").optional(), "operator": z.string().describe("One of \`+\`, \`-\`, \`/\`, \`%\`, \`*\`.").optional() }).describe("More info about Metric: https://docs.apigee.com/api-platform/analytics/analytics-reference#metrics")).describe("A list of Metrics.").optional(),
  "filter": z.string().describe("Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax").optional(),
  "timeRange": z.any().describe("Required. Time range for the query. Can use the following predefined strings to specify the time range: \`last60minutes\` \`last24hours\` \`last7days\` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: \"timeRange\": { \"start\": \"2018-07-29T00:13:00Z\", \"end\": \"2018-08-01T00:18:00Z\" }").optional(),
  "reportDefinitionId": z.string().describe("Asynchronous Report ID.").optional(),
  "name": z.string().describe("Asynchronous Query Name.").optional(),
  "dimensions": z.array(z.string()).describe("A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions").optional(),
  "limit": z.number().int().describe("Maximum number of rows that can be returned in the result.").optional(),
  "groupByTimeUnit": z.string().describe("Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision.").optional(),
  "outputFormat": z.string().describe("Valid values include: \`csv\` or \`json\`. Defaults to \`json\`. Note: Configure the delimiter for CSV output using the csvDelimiter property.").optional(),
  "envgroupHostname": z.string().describe("Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostAsyncQuery where analytics data will be grouped by organization and hostname.").optional(),
  "csvDelimiter": z.string().describe("Delimiter used in the CSV file, if \`outputFormat\` is set to \`csv\`. Defaults to the \`,\` (comma) character. Supported delimiter characters include comma (\`,\`), pipe (\`|\`), and tab (\`\\t\`).").optional()
}
```

### apigee_organizations_environments_queries_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "to": z.string().optional(),
  "dataset": z.string().optional(),
  "submittedBy": z.string().optional(),
  "from": z.string().optional(),
  "inclQueriesWithoutReport": z.string().optional(),
  "status": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_targetservers_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "targetserversId": z.string(),
  "protocol": z.enum(["PROTOCOL_UNSPECIFIED","HTTP","HTTP2","GRPC_TARGET","GRPC","EXTERNAL_CALLOUT"]).describe("Immutable. The protocol used by this TargetServer.").optional(),
  "name": z.string().describe("Required. The resource id of this target server. Values must match the regular expression ").optional(),
  "sSLInfo": z.object({ "enforce": z.boolean().describe("TLS is strictly enforced.").optional(), "clientAuthEnabled": z.boolean().describe("Optional. Enables two-way TLS.").optional(), "protocols": z.array(z.string()).describe("The TLS versioins to be used.").optional(), "keyAlias": z.string().describe("Required if \`client_auth_enabled\` is true. The resource ID for the alias containing the private key and cert.").optional(), "commonName": z.object({ "wildcardMatch": z.boolean().describe("Indicates whether the cert should be matched against as a wildcard cert.").optional(), "value": z.string().describe("The TLS Common Name string of the certificate.").optional() }).describe("The TLS Common Name of the certificate.").optional(), "enabled": z.boolean().describe("Required. Enables TLS. If false, neither one-way nor two-way TLS will be enabled.").optional(), "ignoreValidationErrors": z.boolean().describe("If true, Edge ignores TLS certificate errors. Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.").optional(), "trustStore": z.string().describe("The resource ID of the truststore.").optional(), "ciphers": z.array(z.string()).describe("The SSL/TLS cipher suites to be used. For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.").optional(), "keyStore": z.string().describe("Required if \`client_auth_enabled\` is true. The resource ID of the keystore.").optional() }).describe("Optional. Specifies TLS configuration info for this TargetServer. The JSON name is \`sSLInfo\` for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration.").optional(),
  "host": z.string().describe("Required. The host name this target connects to. Value must be a valid hostname as described by RFC-1123.").optional(),
  "isEnabled": z.boolean().describe("Optional. Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.").optional(),
  "description": z.string().describe("Optional. A human-readable description of this TargetServer.").optional(),
  "port": z.number().int().describe("Required. The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.").optional()
}
```

### apigee_organizations_environments_targetservers_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "targetserversId": z.string()
}
```

### apigee_organizations_environments_targetservers_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "targetserversId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_targetservers_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "name": z.string().optional(),
  "protocol": z.enum(["PROTOCOL_UNSPECIFIED","HTTP","HTTP2","GRPC_TARGET","GRPC","EXTERNAL_CALLOUT"]).describe("Immutable. The protocol used by this TargetServer.").optional(),
  "b_name": z.string().describe("Required. The resource id of this target server. Values must match the regular expression ").optional(),
  "sSLInfo": z.object({ "enforce": z.boolean().describe("TLS is strictly enforced.").optional(), "clientAuthEnabled": z.boolean().describe("Optional. Enables two-way TLS.").optional(), "protocols": z.array(z.string()).describe("The TLS versioins to be used.").optional(), "keyAlias": z.string().describe("Required if \`client_auth_enabled\` is true. The resource ID for the alias containing the private key and cert.").optional(), "commonName": z.object({ "wildcardMatch": z.boolean().describe("Indicates whether the cert should be matched against as a wildcard cert.").optional(), "value": z.string().describe("The TLS Common Name string of the certificate.").optional() }).describe("The TLS Common Name of the certificate.").optional(), "enabled": z.boolean().describe("Required. Enables TLS. If false, neither one-way nor two-way TLS will be enabled.").optional(), "ignoreValidationErrors": z.boolean().describe("If true, Edge ignores TLS certificate errors. Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.").optional(), "trustStore": z.string().describe("The resource ID of the truststore.").optional(), "ciphers": z.array(z.string()).describe("The SSL/TLS cipher suites to be used. For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.").optional(), "keyStore": z.string().describe("Required if \`client_auth_enabled\` is true. The resource ID of the keystore.").optional() }).describe("Optional. Specifies TLS configuration info for this TargetServer. The JSON name is \`sSLInfo\` for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration.").optional(),
  "host": z.string().describe("Required. The host name this target connects to. Value must be a valid hostname as described by RFC-1123.").optional(),
  "isEnabled": z.boolean().describe("Optional. Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.").optional(),
  "description": z.string().describe("Optional. A human-readable description of this TargetServer.").optional(),
  "port": z.number().int().describe("Required. The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_optimizedstats_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "optimizedStatsId": z.string(),
  "tsAscending": z.boolean().optional(),
  "filter": z.string().optional(),
  "aggTable": z.string().optional(),
  "select": z.string().optional(),
  "sortby": z.string().optional(),
  "timeUnit": z.string().optional(),
  "timeRange": z.string().optional(),
  "accuracy": z.string().optional(),
  "limit": z.string().optional(),
  "tzo": z.string().optional(),
  "sort": z.string().optional(),
  "topk": z.string().optional(),
  "offset": z.string().optional(),
  "sonar": z.boolean().optional(),
  "realtime": z.boolean().optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_addonsconfig_setaddonenablemen

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "apiSecurityEnabled": z.boolean().describe("If the API Security should be enabled in the environment.").optional(),
  "analyticsEnabled": z.boolean().describe("If the Analytics should be enabled in the environment.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_keyvaluemaps_entries_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "keyvaluemapsId": z.string(),
  "name": z.string().describe("Resource URI that can be used to identify the scope of the key value map entries.").optional(),
  "value": z.string().describe("Required. Data or payload that is being retrieved and associated with the unique key.").optional()
}
```

### apigee_organizations_environments_keyvaluemaps_entries_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "keyvaluemapsId": z.string(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_keyvaluemaps_entries_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "keyvaluemapsId": z.string(),
  "entriesId": z.string()
}
```

### apigee_organizations_environments_keyvaluemaps_entries_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "keyvaluemapsId": z.string(),
  "entriesId": z.string(),
  "name": z.string().describe("Resource URI that can be used to identify the scope of the key value map entries.").optional(),
  "value": z.string().describe("Required. Data or payload that is being retrieved and associated with the unique key.").optional()
}
```

### apigee_organizations_environments_keyvaluemaps_entries_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "keyvaluemapsId": z.string(),
  "entriesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_keyvaluemaps_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "encrypted": z.boolean().describe("Required. Flag that specifies whether entry values will be encrypted. This field is retained for backward compatibility and the value of encrypted will always be \`true\`. Apigee X and hybrid do not support unencrypted key value maps.").optional(),
  "name": z.string().describe("Required. ID of the key value map.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_keyvaluemaps_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "keyvaluemapsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_securityreports_getresult

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "securityReportsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_securityreports_getresultview

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "securityReportsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_securityreports_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "metrics": z.array(z.object({ "name": z.string().describe("Required. Metric name.").optional(), "alias": z.string().describe("Alias for the metric. Alias will be used to replace metric name in query results.").optional(), "value": z.string().describe("Operand value should be provided when operator is set.").optional(), "aggregationFunction": z.string().describe("Aggregation function: avg, min, max, or sum.").optional(), "operator": z.string().describe("One of \`+\`, \`-\`, \`/\`, \`%\`, \`*\`.").optional() }).describe("Metric of the Query")).describe("A list of Metrics.").optional(),
  "dimensions": z.array(z.string()).describe("A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions").optional(),
  "reportDefinitionId": z.string().describe("Report Definition ID.").optional(),
  "csvDelimiter": z.string().describe("Delimiter used in the CSV file, if \`outputFormat\` is set to \`csv\`. Defaults to the \`,\` (comma) character. Supported delimiter characters include comma (\`,\`), pipe (\`|\`), and tab (\`\\t\`).").optional(),
  "timeRange": z.any().describe("Required. Time range for the query. Can use the following predefined strings to specify the time range: \`last60minutes\` \`last24hours\` \`last7days\` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: \"timeRange\": { \"start\": \"2018-07-29T00:13:00Z\", \"end\": \"2018-08-01T00:18:00Z\" }").optional(),
  "filter": z.string().describe("Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax").optional(),
  "groupByTimeUnit": z.string().describe("Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision.").optional(),
  "envgroupHostname": z.string().describe("Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostSecurityReport where analytics data will be grouped by organization and hostname.").optional(),
  "mimeType": z.string().describe("Valid values include: \`csv\` or \`json\`. Defaults to \`json\`. Note: Configure the delimiter for CSV output using the csvDelimiter property.").optional(),
  "limit": z.number().int().describe("Maximum number of rows that can be returned in the result.").optional(),
  "displayName": z.string().describe("Security Report display name which users can specify.").optional()
}
```

### apigee_organizations_environments_securityreports_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "to": z.string().optional(),
  "submittedBy": z.string().optional(),
  "status": z.string().optional(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional(),
  "dataset": z.string().optional(),
  "from": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_securityreports_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "securityReportsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_flowhooks_detachsharedflowfrom

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "flowhooksId": z.string()
}
```

### apigee_organizations_environments_flowhooks_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "flowhooksId": z.string()
}
```

### apigee_organizations_environments_flowhooks_attachsharedflowtofl

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "flowhooksId": z.string(),
  "description": z.string().describe("Description of the flow hook.").optional(),
  "continueOnError": z.boolean().describe("Optional. Flag that specifies whether execution should continue if the flow hook throws an exception. Set to \`true\` to continue execution. Set to \`false\` to stop execution if the flow hook throws an exception. Defaults to \`true\`.").optional(),
  "flowHookPoint": z.string().describe("Output only. Where in the API call flow the flow hook is invoked. Must be one of \`PreProxyFlowHook\`, \`PostProxyFlowHook\`, \`PreTargetFlowHook\`, or \`PostTargetFlowHook\`.").readonly().optional(),
  "sharedFlow": z.string().describe("Shared flow attached to this flow hook, or empty if there is none attached.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_traceconfig_overrides_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "overridesId": z.string()
}
```

### apigee_organizations_environments_traceconfig_overrides_patch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "overridesId": z.string(),
  "updateMask": z.string().optional(),
  "apiProxy": z.string().describe("ID of the API proxy that will have its trace configuration overridden.").optional(),
  "name": z.string().describe("ID of the trace configuration override specified as a system-generated UUID.").optional(),
  "samplingConfig": z.object({ "sampler": z.enum(["SAMPLER_UNSPECIFIED","OFF","PROBABILITY"]).describe("Sampler of distributed tracing. OFF is the default value.").optional(), "samplingRate": z.number().describe("Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are > 0 and <= 0.5.").optional() }).describe("Trace configuration to override.").optional()
}
```

### apigee_organizations_environments_traceconfig_overrides_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "overridesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_traceconfig_overrides_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "apiProxy": z.string().describe("ID of the API proxy that will have its trace configuration overridden.").optional(),
  "name": z.string().describe("ID of the trace configuration override specified as a system-generated UUID.").optional(),
  "samplingConfig": z.object({ "sampler": z.enum(["SAMPLER_UNSPECIFIED","OFF","PROBABILITY"]).describe("Sampler of distributed tracing. OFF is the default value.").optional(), "samplingRate": z.number().describe("Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are > 0 and <= 0.5.").optional() }).describe("Trace configuration to override.").optional()
}
```

### apigee_organizations_environments_traceconfig_overrides_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_securitystats_querytabularstat

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "pageSize": z.number().int().describe("Page size represents the number of rows.").optional(),
  "metrics": z.array(z.object({ "aggregation": z.enum(["AGGREGATION_FUNCTION_UNSPECIFIED","AVG","SUM","MIN","MAX","COUNT_DISTINCT"]).describe("Aggregation function associated with the metric.").optional(), "order": z.enum(["ORDER_UNSPECIFIED","ASCENDING","DESCENDING"]).describe("Ordering for this aggregation in the result. For time series this is ignored since the ordering of points depends only on the timestamp, not the values.").optional(), "name": z.string().describe("Name of the metric").optional() }).describe("The optionally aggregated metric to query with its ordering.")).describe("Required. List of metrics and their aggregations.").optional(),
  "timeRange": z.object({ "endTime": z.string().describe("Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.").optional(), "startTime": z.string().describe("Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.").optional() }).describe("Time range for the stats.").optional(),
  "filter": z.string().describe("Filter further on specific dimension values. Follows the same grammar as custom report's filter expressions. Example, apiproxy eq 'foobar'. https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters").optional(),
  "pageToken": z.string().describe("Identifies a sequence of rows.").optional(),
  "dimensions": z.array(z.string()).describe("Required. List of dimension names to group the aggregations by.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_securitystats_querytimeseriess

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "filter": z.string().describe("Filter further on specific dimension values. Follows the same grammar as custom report's filter expressions. Example, apiproxy eq 'foobar'. https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters").optional(),
  "windowSize": z.enum(["WINDOW_SIZE_UNSPECIFIED","MINUTE","HOUR","DAY","MONTH"]).describe("Time buckets to group the stats by.").optional(),
  "pageToken": z.string().describe("Page token stands for a specific collection of time series sequences.").optional(),
  "pageSize": z.number().int().describe("Page size represents the number of time series sequences, one per unique set of dimensions and their values.").optional(),
  "metrics": z.array(z.object({ "aggregation": z.enum(["AGGREGATION_FUNCTION_UNSPECIFIED","AVG","SUM","MIN","MAX","COUNT_DISTINCT"]).describe("Aggregation function associated with the metric.").optional(), "order": z.enum(["ORDER_UNSPECIFIED","ASCENDING","DESCENDING"]).describe("Ordering for this aggregation in the result. For time series this is ignored since the ordering of points depends only on the timestamp, not the values.").optional(), "name": z.string().describe("Name of the metric").optional() }).describe("The optionally aggregated metric to query with its ordering.")).describe("Required. List of metrics and their aggregations.").optional(),
  "dimensions": z.array(z.string()).describe("List of dimension names to group the aggregations by. If no dimensions are passed, a single trend line representing the requested metric aggregations grouped by environment is returned.").optional(),
  "timestampOrder": z.enum(["ORDER_UNSPECIFIED","ASCENDING","DESCENDING"]).describe("Order the sequences in increasing or decreasing order of timestamps. Default is descending order of timestamps (latest first).").optional(),
  "timeRange": z.object({ "endTime": z.string().describe("Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.").optional(), "startTime": z.string().describe("Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.").optional() }).describe("Required. Time range for the stats.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_keystores_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "keystoresId": z.string()
}
```

### apigee_organizations_environments_keystores_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "keystoresId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_keystores_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "name": z.string().optional(),
  "aliases": z.array(z.string()).describe("Output only. Aliases in this keystore.").readonly().optional(),
  "b_name": z.string().describe("Required. Resource ID for this keystore. Values must match the regular expression \`[\\w[:space:].-]{1,255}\`.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_keystores_aliases_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "keystoresId": z.string(),
  "aliasesId": z.string()
}
```

### apigee_organizations_environments_keystores_aliases_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "keystoresId": z.string(),
  "aliasesId": z.string()
}
```

### apigee_organizations_environments_keystores_aliases_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "keystoresId": z.string(),
  "aliasesId": z.string(),
  "ignoreExpiryValidation": z.boolean().optional(),
  "ignoreNewlineValidation": z.boolean().optional(),
  "contentType": z.string().describe("The HTTP Content-Type header value specifying the content type of the body.").optional(),
  "extensions": z.array(z.record(z.any().describe("Properties of the object. Contains field @type with type URL."))).describe("Application specific response metadata. Must be set in the first response for streaming APIs.").optional(),
  "data": z.string().describe("The HTTP request/response body as raw binary.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_keystores_aliases_getcertifica

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "keystoresId": z.string(),
  "aliasesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_keystores_aliases_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "keystoresId": z.string(),
  "format": z.string().optional(),
  "_password": z.string().optional(),
  "ignoreExpiryValidation": z.boolean().optional(),
  "alias": z.string().optional(),
  "ignoreNewlineValidation": z.boolean().optional(),
  "contentType": z.string().describe("The HTTP Content-Type header value specifying the content type of the body.").optional(),
  "extensions": z.array(z.record(z.any().describe("Properties of the object. Contains field @type with type URL."))).describe("Application specific response metadata. Must be set in the first response for streaming APIs.").optional(),
  "data": z.string().describe("The HTTP request/response body as raw binary.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_keystores_aliases_csr

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "keystoresId": z.string(),
  "aliasesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_archivedeployments_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "archiveDeploymentsId": z.string()
}
```

### apigee_organizations_environments_archivedeployments_patch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "archiveDeploymentsId": z.string(),
  "updateMask": z.string().optional(),
  "operation": z.string().describe("Output only. A reference to the LRO that created this Archive Deployment in the following format: \`organizations/{org}/operations/{id}\`").readonly().optional(),
  "createdAt": z.string().describe("Output only. The time at which the Archive Deployment was created in milliseconds since the epoch.").readonly().optional(),
  "gcsUri": z.string().describe("Input only. The Google Cloud Storage signed URL returned from GenerateUploadUrl and used to upload the Archive zip file.").optional(),
  "labels": z.record(z.string()).describe("User-supplied key-value pairs used to organize ArchiveDeployments. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62} Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.").optional(),
  "updatedAt": z.string().describe("Output only. The time at which the Archive Deployment was updated in milliseconds since the epoch.").readonly().optional(),
  "name": z.string().describe("Name of the Archive Deployment in the following format: \`organizations/{org}/environments/{env}/archiveDeployments/{id}\`.").optional()
}
```

### apigee_organizations_environments_archivedeployments_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "archiveDeploymentsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_archivedeployments_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "operation": z.string().describe("Output only. A reference to the LRO that created this Archive Deployment in the following format: \`organizations/{org}/operations/{id}\`").readonly().optional(),
  "createdAt": z.string().describe("Output only. The time at which the Archive Deployment was created in milliseconds since the epoch.").readonly().optional(),
  "gcsUri": z.string().describe("Input only. The Google Cloud Storage signed URL returned from GenerateUploadUrl and used to upload the Archive zip file.").optional(),
  "labels": z.record(z.string()).describe("User-supplied key-value pairs used to organize ArchiveDeployments. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62} Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.").optional(),
  "updatedAt": z.string().describe("Output only. The time at which the Archive Deployment was updated in milliseconds since the epoch.").readonly().optional(),
  "name": z.string().describe("Name of the Archive Deployment in the following format: \`organizations/{org}/environments/{env}/archiveDeployments/{id}\`.").optional()
}
```

### apigee_organizations_environments_archivedeployments_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "filter": z.string().optional(),
  "pageToken": z.string().optional(),
  "pageSize": z.number().int().optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_archivedeployments_generatedow

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "archiveDeploymentsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_archivedeployments_generateupl

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_stats_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "statsId": z.string(),
  "tsAscending": z.boolean().optional(),
  "timeRange": z.string().optional(),
  "tzo": z.string().optional(),
  "offset": z.string().optional(),
  "accuracy": z.string().optional(),
  "aggTable": z.string().optional(),
  "limit": z.string().optional(),
  "sort": z.string().optional(),
  "sortby": z.string().optional(),
  "realtime": z.boolean().optional(),
  "topk": z.string().optional(),
  "sonar": z.boolean().optional(),
  "select": z.string().optional(),
  "filter": z.string().optional(),
  "timeUnit": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_analytics_admin_getschemav2

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "type": z.string().optional(),
  "disableCache": z.boolean().optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_analytics_exports_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "datastoreName": z.string().describe("Required. Name of the preconfigured datastore.").optional(),
  "name": z.string().describe("Required. Display name of the export job.").optional(),
  "csvDelimiter": z.string().describe("Optional. Delimiter used in the CSV file, if \`outputFormat\` is set to \`csv\`. Defaults to the \`,\` (comma) character. Supported delimiter characters include comma (\`,\`), pipe (\`|\`), and tab (\`\\t\`).").optional(),
  "outputFormat": z.string().describe("Optional. Output format of the export. Valid values include: \`csv\` or \`json\`. Defaults to \`json\`. Note: Configure the delimiter for CSV output using the \`csvDelimiter\` property.").optional(),
  "dateRange": z.object({ "start": z.string().describe("Required. Start date of the data to export in the format \`yyyy-mm-dd\`. The date range begins at 00:00:00 UTC on the start date.").optional(), "end": z.string().describe("Required. End date (exclusive) of the data to export in the format \`yyyy-mm-dd\`. The date range ends at 00:00:00 UTC on the end date- which will not be in the output.").optional() }).describe("Required. Date range of the data to export.").optional(),
  "description": z.string().describe("Optional. Description of the export job.").optional()
}
```

### apigee_organizations_environments_analytics_exports_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_analytics_exports_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "exportsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_apis_deployments_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "apisId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_apis_revisions_debugsessions_g

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "apisId": z.string(),
  "revisionsId": z.string(),
  "debugsessionsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_apis_revisions_debugsessions_c

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "apisId": z.string(),
  "revisionsId": z.string(),
  "timeout": z.string().optional(),
  "filter": z.string().describe("Optional. A conditional statement which is evaluated against the request message to determine if it should be traced. Syntax matches that of on API Proxy bundle flow Condition.").optional(),
  "b_timeout": z.string().describe("Optional. The time in seconds after which this DebugSession should end. This value will override the value in query param, if both are provided.").optional(),
  "name": z.string().describe("A unique ID for this DebugSession.").optional(),
  "createTime": z.string().describe("Output only. The first transaction creation timestamp, recorded by UAP.").readonly().optional(),
  "validity": z.number().int().describe("Optional. The length of time, in seconds, that this debug session is valid, starting from when it's received in the control plane. Min = 1, Max = 15, Default = 10.").optional(),
  "tracesize": z.number().int().describe("Optional. The maximum number of bytes captured from the response payload. Min = 0, Max = 5120, Default = 5120.").optional(),
  "count": z.number().int().describe("Optional. The number of request to be traced. Min = 1, Max = 15, Default = 10.").optional()
}
```

### apigee_organizations_environments_apis_revisions_debugsessions_l

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "apisId": z.string(),
  "revisionsId": z.string(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_apis_revisions_debugsessions_d

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "apisId": z.string(),
  "revisionsId": z.string(),
  "debugsessionsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_apis_revisions_debugsessions_d

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "apisId": z.string(),
  "revisionsId": z.string(),
  "debugsessionsId": z.string(),
  "dataId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_apis_revisions_deployments_gen

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "apisId": z.string(),
  "revisionsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_apis_revisions_deployments_gen

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "apisId": z.string(),
  "revisionsId": z.string(),
  "override": z.boolean().optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_apis_revisions_undeploy

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "apisId": z.string(),
  "revisionsId": z.string(),
  "sequencedRollout": z.boolean().optional()
}
```

### apigee_organizations_environments_apis_revisions_deploy

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "apisId": z.string(),
  "revisionsId": z.string(),
  "sequencedRollout": z.boolean().optional(),
  "override": z.boolean().optional(),
  "serviceAccount": z.string().optional()
}
```

### apigee_organizations_environments_apis_revisions_getdeployments

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "apisId": z.string(),
  "revisionsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string()
}
```

### apigee_organizations_environments_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string()
}
```

### apigee_organizations_environments_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "deploymentType": z.enum(["DEPLOYMENT_TYPE_UNSPECIFIED","PROXY","ARCHIVE"]).describe("Optional. Deployment type supported by the environment. The deployment type can be set when creating the environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a [subset of actions](/apigee/docs/api-platform/local-development/overview#prevented-actions) within the environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers").optional(),
  "hasAttachedFlowHooks": z.boolean().optional(),
  "displayName": z.string().describe("Optional. Display name for this environment.").optional(),
  "nodeConfig": z.object({ "currentAggregateNodeCount": z.string().describe("Output only. The current total number of gateway nodes that each environment currently has across all instances.").readonly().optional(), "maxNodeCount": z.string().describe("Optional. The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended maximum number of nodes for that gateway.").optional(), "minNodeCount": z.string().describe("Optional. The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended minimum number of nodes for that gateway.").optional() }).describe("Optional. NodeConfig of the environment.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use.").readonly().optional(),
  "createdAt": z.string().describe("Output only. Creation time of this environment as milliseconds since epoch.").readonly().optional(),
  "name": z.string().describe("Required. Name of the environment. Values must match the regular expression \`^[.\\\\p{Alnum}-_]{1,255}{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "deploymentType": z.enum(["DEPLOYMENT_TYPE_UNSPECIFIED","PROXY","ARCHIVE"]).describe("Optional. Deployment type supported by the environment. The deployment type can be set when creating the environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a [subset of actions](/apigee/docs/api-platform/local-development/overview#prevented-actions) within the environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers").optional(),
  "hasAttachedFlowHooks": z.boolean().optional(),
  "displayName": z.string().describe("Optional. Display name for this environment.").optional(),
  "nodeConfig": z.object({ "currentAggregateNodeCount": z.string().describe("Output only. The current total number of gateway nodes that each environment currently has across all instances.").readonly().optional(), "maxNodeCount": z.string().describe("Optional. The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended maximum number of nodes for that gateway.").optional(), "minNodeCount": z.string().describe("Optional. The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended minimum number of nodes for that gateway.").optional() }).describe("Optional. NodeConfig of the environment.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use.").readonly().optional(),
  "createdAt": z.string().describe("Output only. Creation time of this environment as milliseconds since epoch.").readonly().optional(),
  "name": ").optional(),
  "properties": z.object({ "property": z.array(z.object({ "value": z.string().describe("The property value").optional(), "name": z.string().describe("The property key").optional() }).describe("A single property entry in the Properties message.")).describe("List of all properties in the object").optional() }).describe("Optional. Key-value pairs that may be used for customizing the environment.").optional(),
  "type": z.enum(["ENVIRONMENT_TYPE_UNSPECIFIED","BASE","INTERMEDIATE","COMPREHENSIVE"]).describe("Optional. EnvironmentType selected for the environment.").optional(),
  "lastModifiedAt": z.string().describe("Output only. Last modification time of this environment as milliseconds since epoch.").readonly().optional(),
  "apiProxyType": z.enum(["API_PROXY_TYPE_UNSPECIFIED","PROGRAMMABLE","CONFIGURABLE"]).describe("Optional. API Proxy type supported by the environment. The type can be set when creating the Environment and cannot be changed.").optional(),
  "forwardProxyUri": z.string().describe("Optional. URI of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of {scheme}://{hostname}:{port}. Note that the scheme must be one of \"http\" or \"https\", and the port must be supplied. To remove a forward proxy setting, update the field to an empty value. Note: At this time, PUT operations to add forwardProxyUri to an existing environment fail if the environment has nodeConfig set up. To successfully add the forwardProxyUri setting in this case, include the NodeConfig details with the request.").optional(),
  "description": z.string().describe("Optional. Description of the environment.").optional()
}
```

### apigee_organizations_environments_updateenvironment

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "deploymentType": z.enum(["DEPLOYMENT_TYPE_UNSPECIFIED","PROXY","ARCHIVE"]).describe("Optional. Deployment type supported by the environment. The deployment type can be set when creating the environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a [subset of actions](/apigee/docs/api-platform/local-development/overview#prevented-actions) within the environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers").optional(),
  "hasAttachedFlowHooks": z.boolean().optional(),
  "displayName": z.string().describe("Optional. Display name for this environment.").optional(),
  "nodeConfig": z.object({ "currentAggregateNodeCount": z.string().describe("Output only. The current total number of gateway nodes that each environment currently has across all instances.").readonly().optional(), "maxNodeCount": z.string().describe("Optional. The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended maximum number of nodes for that gateway.").optional(), "minNodeCount": z.string().describe("Optional. The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended minimum number of nodes for that gateway.").optional() }).describe("Optional. NodeConfig of the environment.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use.").readonly().optional(),
  "createdAt": z.string().describe("Output only. Creation time of this environment as milliseconds since epoch.").readonly().optional(),
  "name": z.string().describe("Required. Name of the environment. Values must match the regular expression \`^[.\\\\p{Alnum}-_]{1,255}{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "deploymentType": z.enum(["DEPLOYMENT_TYPE_UNSPECIFIED","PROXY","ARCHIVE"]).describe("Optional. Deployment type supported by the environment. The deployment type can be set when creating the environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a [subset of actions](/apigee/docs/api-platform/local-development/overview#prevented-actions) within the environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers").optional(),
  "hasAttachedFlowHooks": z.boolean().optional(),
  "displayName": z.string().describe("Optional. Display name for this environment.").optional(),
  "nodeConfig": z.object({ "currentAggregateNodeCount": z.string().describe("Output only. The current total number of gateway nodes that each environment currently has across all instances.").readonly().optional(), "maxNodeCount": z.string().describe("Optional. The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended maximum number of nodes for that gateway.").optional(), "minNodeCount": z.string().describe("Optional. The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended minimum number of nodes for that gateway.").optional() }).describe("Optional. NodeConfig of the environment.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use.").readonly().optional(),
  "createdAt": z.string().describe("Output only. Creation time of this environment as milliseconds since epoch.").readonly().optional(),
  "name": ").optional(),
  "properties": z.object({ "property": z.array(z.object({ "value": z.string().describe("The property value").optional(), "name": z.string().describe("The property key").optional() }).describe("A single property entry in the Properties message.")).describe("List of all properties in the object").optional() }).describe("Optional. Key-value pairs that may be used for customizing the environment.").optional(),
  "type": z.enum(["ENVIRONMENT_TYPE_UNSPECIFIED","BASE","INTERMEDIATE","COMPREHENSIVE"]).describe("Optional. EnvironmentType selected for the environment.").optional(),
  "lastModifiedAt": z.string().describe("Output only. Last modification time of this environment as milliseconds since epoch.").readonly().optional(),
  "apiProxyType": z.enum(["API_PROXY_TYPE_UNSPECIFIED","PROGRAMMABLE","CONFIGURABLE"]).describe("Optional. API Proxy type supported by the environment. The type can be set when creating the Environment and cannot be changed.").optional(),
  "forwardProxyUri": z.string().describe("Optional. URI of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of {scheme}://{hostname}:{port}. Note that the scheme must be one of \"http\" or \"https\", and the port must be supplied. To remove a forward proxy setting, update the field to an empty value. Note: At this time, PUT operations to add forwardProxyUri to an existing environment fail if the environment has nodeConfig set up. To successfully add the forwardProxyUri setting in this case, include the NodeConfig details with the request.").optional(),
  "description": z.string().describe("Optional. Description of the environment.").optional()
}
```

### apigee_organizations_environments_modifyenvironment

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "updateMask": z.string().optional(),
  "deploymentType": z.enum(["DEPLOYMENT_TYPE_UNSPECIFIED","PROXY","ARCHIVE"]).describe("Optional. Deployment type supported by the environment. The deployment type can be set when creating the environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a [subset of actions](/apigee/docs/api-platform/local-development/overview#prevented-actions) within the environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers").optional(),
  "hasAttachedFlowHooks": z.boolean().optional(),
  "displayName": z.string().describe("Optional. Display name for this environment.").optional(),
  "nodeConfig": z.object({ "currentAggregateNodeCount": z.string().describe("Output only. The current total number of gateway nodes that each environment currently has across all instances.").readonly().optional(), "maxNodeCount": z.string().describe("Optional. The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended maximum number of nodes for that gateway.").optional(), "minNodeCount": z.string().describe("Optional. The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended minimum number of nodes for that gateway.").optional() }).describe("Optional. NodeConfig of the environment.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use.").readonly().optional(),
  "createdAt": z.string().describe("Output only. Creation time of this environment as milliseconds since epoch.").readonly().optional(),
  "name": z.string().describe("Required. Name of the environment. Values must match the regular expression \`^[.\\\\p{Alnum}-_]{1,255}{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "updateMask": z.string().optional(),
  "deploymentType": z.enum(["DEPLOYMENT_TYPE_UNSPECIFIED","PROXY","ARCHIVE"]).describe("Optional. Deployment type supported by the environment. The deployment type can be set when creating the environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a [subset of actions](/apigee/docs/api-platform/local-development/overview#prevented-actions) within the environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers").optional(),
  "hasAttachedFlowHooks": z.boolean().optional(),
  "displayName": z.string().describe("Optional. Display name for this environment.").optional(),
  "nodeConfig": z.object({ "currentAggregateNodeCount": z.string().describe("Output only. The current total number of gateway nodes that each environment currently has across all instances.").readonly().optional(), "maxNodeCount": z.string().describe("Optional. The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended maximum number of nodes for that gateway.").optional(), "minNodeCount": z.string().describe("Optional. The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended minimum number of nodes for that gateway.").optional() }).describe("Optional. NodeConfig of the environment.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use.").readonly().optional(),
  "createdAt": z.string().describe("Output only. Creation time of this environment as milliseconds since epoch.").readonly().optional(),
  "name": ").optional(),
  "properties": z.object({ "property": z.array(z.object({ "value": z.string().describe("The property value").optional(), "name": z.string().describe("The property key").optional() }).describe("A single property entry in the Properties message.")).describe("List of all properties in the object").optional() }).describe("Optional. Key-value pairs that may be used for customizing the environment.").optional(),
  "type": z.enum(["ENVIRONMENT_TYPE_UNSPECIFIED","BASE","INTERMEDIATE","COMPREHENSIVE"]).describe("Optional. EnvironmentType selected for the environment.").optional(),
  "lastModifiedAt": z.string().describe("Output only. Last modification time of this environment as milliseconds since epoch.").readonly().optional(),
  "apiProxyType": z.enum(["API_PROXY_TYPE_UNSPECIFIED","PROGRAMMABLE","CONFIGURABLE"]).describe("Optional. API Proxy type supported by the environment. The type can be set when creating the Environment and cannot be changed.").optional(),
  "forwardProxyUri": z.string().describe("Optional. URI of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of {scheme}://{hostname}:{port}. Note that the scheme must be one of \"http\" or \"https\", and the port must be supplied. To remove a forward proxy setting, update the field to an empty value. Note: At this time, PUT operations to add forwardProxyUri to an existing environment fail if the environment has nodeConfig set up. To successfully add the forwardProxyUri setting in this case, include the NodeConfig details with the request.").optional(),
  "description": z.string().describe("Optional. Description of the environment.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_setiampolicy

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "updateMask": z.string().describe("OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: \`paths: \"bindings, etag\"\`").optional(),
  "policy": z.object({ "etag": z.string().describe("\`etag\` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the \`etag\` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An \`etag\` is returned in the response to \`getIamPolicy\`, and systems are expected to put that etag in the request to \`setIamPolicy\` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the \`etag\` field whenever you call \`setIamPolicy\`. If you omit this field, then IAM allows you to overwrite a version \`3\` policy with a version \`1\` policy, and all of the conditions in the version \`3\` policy are lost.").optional(), "version": z.number().int().describe("Specifies the format of the policy. Valid values are \`0\`, \`1\`, and \`3\`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version \`3\`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the \`etag\` field whenever you call \`setIamPolicy\`. If you omit this field, then IAM allows you to overwrite a version \`3\` policy with a version \`1\` policy, and all of the conditions in the version \`3\` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).").optional(), "bindings": z.array(z.object({ "role": z.string().describe("Role that is assigned to the list of \`members\`, or principals. For example, \`roles/viewer\`, \`roles/editor\`, or \`roles/owner\`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).").optional(), "condition": z.object({ "location": z.string().describe("Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.").optional(), "expression": z.string().describe("Textual representation of an expression in Common Expression Language syntax.").optional(), "title": z.string().describe("Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.").optional(), "description": z.string().describe("Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.").optional() }).describe("The condition that is associated with this binding. If the condition evaluates to \`true\`, then this binding applies to the current request. If the condition evaluates to \`false\`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).").optional(), "members": z.array(z.string()).describe("Specifies the principals requesting access for a Google Cloud resource. \`members\` can have the following values: * \`allUsers\`: A special identifier that represents anyone who is on the internet; with or without a Google account. * \`allAuthenticatedUsers\`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * \`user:{emailid}\`: An email address that represents a specific Google account. For example, \`alice@example.com\` . * \`serviceAccount:{emailid}\`: An email address that represents a Google service account. For example, \`my-other-app@appspot.gserviceaccount.com\`. * \`serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]\`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, \`my-project.svc.id.goog[my-namespace/my-kubernetes-sa]\`. * \`group:{emailid}\`: An email address that represents a Google group. For example, \`admins@example.com\`. * \`domain:{domain}\`: The G Suite domain (primary) that represents all the users of that domain. For example, \`google.com\` or \`example.com\`. * \`principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}\`: A single identity in a workforce identity pool. * \`principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}\`: All workforce identities in a group. * \`principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}\`: All workforce identities with a specific attribute value. * \`principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*\`: All identities in a workforce identity pool. * \`principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}\`: A single identity in a workload identity pool. * \`principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}\`: A workload identity pool group. * \`principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}\`: All identities in a workload identity pool with a certain attribute. * \`principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*\`: All identities in a workload identity pool. * \`deleted:user:{emailid}?uid={uniqueid}\`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, \`alice@example.com?uid=123456789012345678901\`. If the user is recovered, this value reverts to \`user:{emailid}\` and the recovered user retains the role in the binding. * \`deleted:serviceAccount:{emailid}?uid={uniqueid}\`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, \`my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901\`. If the service account is undeleted, this value reverts to \`serviceAccount:{emailid}\` and the undeleted service account retains the role in the binding. * \`deleted:group:{emailid}?uid={uniqueid}\`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, \`admins@example.com?uid=123456789012345678901\`. If the group is recovered, this value reverts to \`group:{emailid}\` and the recovered group retains the role in the binding. * \`deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}\`: Deleted single identity in a workforce identity pool. For example, \`deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value\`.").optional() }).describe("Associates \`members\`, or principals, with a \`role\`.")).describe("Associates a list of \`members\`, or principals, with a \`role\`. Optionally, may specify a \`condition\` that determines how and when the \`bindings\` are applied. Each of the \`bindings\` must contain at least one principal. The \`bindings\` in a \`Policy\` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the \`bindings\` grant 50 different roles to \`user:alice@example.com\`, and not to any other principal, then you can add another 1,450 principals to the \`bindings\` in the \`Policy\`.").optional(), "auditConfigs": z.array(z.object({ "service": z.string().describe("Specifies a service that will be enabled for audit logging. For example, \`storage.googleapis.com\`, \`cloudsql.googleapis.com\`. \`allServices\` is a special value that covers all services.").optional(), "auditLogConfigs": z.array(z.object({ "exemptedMembers": z.array(z.string()).describe("Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.").optional(), "logType": z.enum(["LOG_TYPE_UNSPECIFIED","ADMIN_READ","DATA_WRITE","DATA_READ"]).describe("The log type that this config enables.").optional() }).describe("Provides the configuration for logging a type of permissions. Example: { \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.")).describe("The configuration for logging of each type of permission.").optional() }).describe("Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both \`allServices\` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { \"audit_configs\": [ { \"service\": \"allServices\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" }, { \"log_type\": \"ADMIN_READ\" } ] }, { \"service\": \"sampleservice.googleapis.com\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\" }, { \"log_type\": \"DATA_WRITE\", \"exempted_members\": [ \"user:aliya@example.com\" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts \`jose@example.com\` from DATA_READ logging, and \`aliya@example.com\` from DATA_WRITE logging.")).describe("Specifies cloud audit logging configuration for this policy.").optional() }).describe("REQUIRED: The complete policy to be applied to the \`resource\`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_testiampermissions

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "permissions": z.array(z.string()).describe("The set of permissions to check for the \`resource\`. Permissions with wildcards (such as \`*\` or \`storage.*\`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_subscribe

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_updatedebugmask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "replaceRepeatedFields": z.boolean().optional(),
  "updateMask": z.string().optional(),
  "requestJSONPaths": z.array(z.string()).describe("List of JSON paths that specify the JSON elements to be filtered from JSON request message payloads.").optional(),
  "requestXPaths": z.array(z.string()).describe("List of XPaths that specify the XML elements to be filtered from XML request message payloads.").optional(),
  "responseJSONPaths": z.array(z.string()).describe("List of JSON paths that specify the JSON elements to be filtered from JSON response message payloads.").optional(),
  "variables": z.array(z.string()).describe("List of variables that should be masked from the debug output.").optional(),
  "namespaces": z.record(z.string()).describe("Map of namespaces to URIs.").optional(),
  "faultXPaths": z.array(z.string()).describe("List of XPaths that specify the XML elements to be filtered from XML payloads in error flows.").optional(),
  "responseXPaths": z.array(z.string()).describe("List of XPaths that specify the XML elements to be filtered from XML response message payloads.").optional(),
  "name": z.string().describe("Name of the debug mask.").optional(),
  "faultJSONPaths": z.array(z.string()).describe("List of JSON paths that specify the JSON elements to be filtered from JSON payloads in error flows.").optional()
}
```

### apigee_organizations_environments_getdebugmask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_updatetraceconfig

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "updateMask": z.string().optional(),
  "endpoint": z.string().describe("Required. Endpoint of the exporter.").optional(),
  "exporter": z.enum(["EXPORTER_UNSPECIFIED","JAEGER","CLOUD_TRACE"]).describe("Required. Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered exporters.").optional(),
  "samplingConfig": z.object({ "sampler": z.enum(["SAMPLER_UNSPECIFIED","OFF","PROBABILITY"]).describe("Sampler of distributed tracing. OFF is the default value.").optional(), "samplingRate": z.number().describe("Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are > 0 and <= 0.5.").optional() }).describe("Distributed trace configuration for all API proxies in an environment. You can also override the configuration for a specific API proxy using the distributed trace configuration overrides API.").optional()
}
```

### apigee_organizations_environments_gettraceconfig

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_getsecurityactionsconfig

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string()
}
```

### apigee_organizations_environments_updatesecurityactionsconfig

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "updateMask": z.string().optional(),
  "name": z.string().describe("This is a singleton resource, the name will always be set by SecurityActions and any user input will be ignored. The name is always: \`organizations/{org}/environments/{env}/security_actions_config\`").optional(),
  "updateTime": z.string().describe("Output only. The update time for configuration.").readonly().optional(),
  "enabled": z.boolean().describe("The flag that controls whether this feature is enabled. This is \`unset\` by default. When this flag is \`false\`, even if individual rules are enabled, no SecurityActions will be enforced.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_getiampolicy

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "options.requestedPolicyVersion": z.number().int().optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_getdeployedconfig

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "name": z.string().optional(),
  "deploymentType": z.enum(["DEPLOYMENT_TYPE_UNSPECIFIED","PROXY","ARCHIVE"]).describe("Optional. Deployment type supported by the environment. The deployment type can be set when creating the environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a [subset of actions](/apigee/docs/api-platform/local-development/overview#prevented-actions) within the environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers").optional(),
  "hasAttachedFlowHooks": z.boolean().optional(),
  "displayName": z.string().describe("Optional. Display name for this environment.").optional(),
  "nodeConfig": z.object({ "currentAggregateNodeCount": z.string().describe("Output only. The current total number of gateway nodes that each environment currently has across all instances.").readonly().optional(), "maxNodeCount": z.string().describe("Optional. The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended maximum number of nodes for that gateway.").optional(), "minNodeCount": z.string().describe("Optional. The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended minimum number of nodes for that gateway.").optional() }).describe("Optional. NodeConfig of the environment.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use.").readonly().optional(),
  "createdAt": z.string().describe("Output only. Creation time of this environment as milliseconds since epoch.").readonly().optional(),
  "b_name": z.string().describe("Required. Name of the environment. Values must match the regular expression \`^[.\\\\p{Alnum}-_]{1,255}{
  "organizationsId": z.string(),
  "name": z.string().optional(),
  "deploymentType": z.enum(["DEPLOYMENT_TYPE_UNSPECIFIED","PROXY","ARCHIVE"]).describe("Optional. Deployment type supported by the environment. The deployment type can be set when creating the environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a [subset of actions](/apigee/docs/api-platform/local-development/overview#prevented-actions) within the environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers").optional(),
  "hasAttachedFlowHooks": z.boolean().optional(),
  "displayName": z.string().describe("Optional. Display name for this environment.").optional(),
  "nodeConfig": z.object({ "currentAggregateNodeCount": z.string().describe("Output only. The current total number of gateway nodes that each environment currently has across all instances.").readonly().optional(), "maxNodeCount": z.string().describe("Optional. The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended maximum number of nodes for that gateway.").optional(), "minNodeCount": z.string().describe("Optional. The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended minimum number of nodes for that gateway.").optional() }).describe("Optional. NodeConfig of the environment.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use.").readonly().optional(),
  "createdAt": z.string().describe("Output only. Creation time of this environment as milliseconds since epoch.").readonly().optional(),
  "b_name": ").optional(),
  "properties": z.object({ "property": z.array(z.object({ "value": z.string().describe("The property value").optional(), "name": z.string().describe("The property key").optional() }).describe("A single property entry in the Properties message.")).describe("List of all properties in the object").optional() }).describe("Optional. Key-value pairs that may be used for customizing the environment.").optional(),
  "type": z.enum(["ENVIRONMENT_TYPE_UNSPECIFIED","BASE","INTERMEDIATE","COMPREHENSIVE"]).describe("Optional. EnvironmentType selected for the environment.").optional(),
  "lastModifiedAt": z.string().describe("Output only. Last modification time of this environment as milliseconds since epoch.").readonly().optional(),
  "apiProxyType": z.enum(["API_PROXY_TYPE_UNSPECIFIED","PROGRAMMABLE","CONFIGURABLE"]).describe("Optional. API Proxy type supported by the environment. The type can be set when creating the Environment and cannot be changed.").optional(),
  "forwardProxyUri": z.string().describe("Optional. URI of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of {scheme}://{hostname}:{port}. Note that the scheme must be one of \"http\" or \"https\", and the port must be supplied. To remove a forward proxy setting, update the field to an empty value. Note: At this time, PUT operations to add forwardProxyUri to an existing environment fail if the environment has nodeConfig set up. To successfully add the forwardProxyUri setting in this case, include the NodeConfig details with the request.").optional(),
  "description": z.string().describe("Optional. Description of the environment.").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_unsubscribe

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "name": z.string().describe("Full name of the Pub/Sub subcription. Use the following structure in your request: \`subscription \"projects/foo/subscription/bar\"\`").optional()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_getaddonsconfig

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_environments_environ

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_environments_getapisecurityruntimeconfig

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "environmentsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_instances_instancesi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_instances_attachments_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "attachmentsId": z.string()
}
```

### apigee_organizations_instances_attachments_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "attachmentsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_instances_instancesi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_instances_attachments_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "createdAt": z.string().describe("Output only. Time the attachment was created in milliseconds since epoch.").readonly().optional(),
  "name": z.string().describe("Output only. ID of the attachment.").readonly().optional(),
  "environment": z.string().describe("ID of the attached environment.").optional()
}
```

### apigee_organizations_instances_attachments_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "pageToken": z.string().optional(),
  "pageSize": z.number().int().optional()
}
```

### parameters_v1_organizations_organizationsid_instances_instancesi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_instances_nataddresses_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "pageToken": z.string().optional(),
  "pageSize": z.number().int().optional()
}
```

### apigee_organizations_instances_nataddresses_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "ipAddress": z.string().describe("Output only. The static IPV4 address.").readonly().optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","RESERVED","ACTIVE","DELETING"]).describe("Output only. State of the nat address.").readonly().optional(),
  "name": z.string().describe("Required. Resource ID of the NAT address.").optional()
}
```

### parameters_v1_organizations_organizationsid_instances_instancesi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_instances_nataddresses_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "natAddressesId": z.string()
}
```

### apigee_organizations_instances_nataddresses_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "natAddressesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_instances_instancesi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_instances_nataddresses_activate

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "natAddressesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_instances_instancesi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_instances_canaryevaluations_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "canaryevaluationsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_instances_instancesi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_instances_canaryevaluations_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "name": z.string().describe("Output only. Name of the canary evalution.").readonly().optional(),
  "state": z.enum(["STATE_UNSPECIFIED","RUNNING","SUCCEEDED"]).describe("Output only. The current state of the canary evaluation.").readonly().optional(),
  "verdict": z.enum(["VERDICT_UNSPECIFIED","NONE","FAIL","PASS"]).describe("Output only. The resulting verdict of the canary evaluations: NONE, PASS, or FAIL.").readonly().optional(),
  "endTime": z.string().describe("Required. End time for the evaluation's analysis.").optional(),
  "control": z.string().describe("Required. The stable version that is serving requests.").optional(),
  "metricLabels": z.object({ "env": z.string().describe("The environment ID associated with the metrics.").optional(), "instance_id": z.string().describe("Required. The instance ID associated with the metrics. In Apigee Hybrid, the value is configured during installation.").optional(), "location": z.string().describe("Required. The location associated with the metrics.").optional() }).describe("Required. Labels used to filter the metrics used for a canary evaluation.").optional(),
  "createTime": z.string().describe("Output only. Create time of the canary evaluation.").readonly().optional(),
  "startTime": z.string().describe("Required. Start time for the canary evaluation's analysis.").optional(),
  "treatment": z.string().describe("Required. The newer version that is serving requests.").optional()
}
```

### parameters_v1_organizations_organizationsid_instances

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_instances_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional()
}
```

### apigee_organizations_instances_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "displayName": z.string().describe("Optional. Display name for the instance.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the instance. Values other than \`ACTIVE\` means the resource is not ready to use.").readonly().optional(),
  "location": z.string().describe("Required. Compute Engine location where the instance resides.").optional(),
  "ipRange": z.string().describe("Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: \`a.b.c.d/22\` or \`e.f.g.h/28\` or \`a.b.c.d/22,e.f.g.h/28\`").optional(),
  "name": z.string().describe("Required. Resource ID of the instance. Values must match the regular expression \`^a-z{0,30}[a-z\\d]{
  "organizationsId": z.string(),
  "displayName": z.string().describe("Optional. Display name for the instance.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the instance. Values other than \`ACTIVE\` means the resource is not ready to use.").readonly().optional(),
  "location": z.string().describe("Required. Compute Engine location where the instance resides.").optional(),
  "ipRange": z.string().describe("Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: \`a.b.c.d/22\` or \`e.f.g.h/28\` or \`a.b.c.d/22,e.f.g.h/28\`").optional(),
  "name": .").optional(),
  "accessLoggingConfig": z.object({ "enabled": z.boolean().describe("Optional. Boolean flag that specifies whether the customer access log feature is enabled.").optional(), "filter": z.string().describe("Optional. Ship the access log entries that match the status_code defined in the filter. The status_code is the only expected/supported filter field. (Ex: status_code) The filter will parse it to the Common Expression Language semantics for expression evaluation to build the filter condition. (Ex: \"filter\": status_code >= 200 && status_code < 300 )").optional() }).describe("Optional. Access logging configuration enables the access logging feature at the instance. Apigee customers can enable access logging to ship the access logs to their own project's cloud logging.").optional(),
  "createdAt": z.string().describe("Output only. Time the instance was created in milliseconds since epoch.").readonly().optional(),
  "lastModifiedAt": z.string().describe("Output only. Time the instance was last modified in milliseconds since epoch.").readonly().optional(),
  "port": z.string().describe("Output only. Port number of the exposed Apigee endpoint.").readonly().optional(),
  "runtimeVersion": z.string().describe("Output only. Version of the runtime system running in the instance. The runtime system is the set of components that serve the API Proxy traffic in your Environments.").readonly().optional(),
  "host": z.string().describe("Output only. Internal hostname or IP address of the Apigee endpoint used by clients to connect to the service.").readonly().optional(),
  "description": z.string().describe("Optional. Description of the instance.").optional(),
  "serviceAttachment": z.string().describe("Output only. Resource name of the service attachment created for the instance in the format: \`projects/*/regions/*/serviceAttachments/*\` Apigee customers can privately forward traffic to this service attachment using the PSC endpoints.").readonly().optional(),
  "diskEncryptionKeyName": z.string().describe("Customer Managed Encryption Key (CMEK) used for disk and volume encryption. If not specified, a Google-Managed encryption key will be used. Use the following format: \`projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)\`").optional(),
  "consumerAcceptList": z.array(z.string()).describe("Optional. Customer accept list represents the list of projects (id/number) on customer side that can privately connect to the service attachment. It is an optional field which the customers can provide during the instance creation. By default, the customer project associated with the Apigee organization will be included to the list.").optional()
}
```

### parameters_v1_organizations_organizationsid_instances_instancesi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_instances_reportstatus

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "resources": z.array(z.object({ "resource": z.string().describe("The resource name. Currently only two resources are supported: EnvironmentGroup - organizations/{org}/envgroups/{envgroup} EnvironmentConfig - organizations/{org}/environments/{environment}/deployedConfig").optional(), "totalReplicas": z.number().int().describe("The total number of replicas that should have this resource.").optional(), "uid": z.string().describe("The uid of the resource. In the unexpected case that the instance has multiple uids for the same name, they should be reported under separate ResourceStatuses.").optional(), "revisions": z.array(z.object({ "jsonSpec": z.string().describe("The json content of the resource revision. Large specs should be sent individually via the spec field to avoid hitting request size limits.").optional(), "errors": z.array(z.object({ "message": z.string().describe("User-friendly error message.").optional(), "type": z.string().describe("A string that uniquely identifies the type of error. This provides a more reliable means to deduplicate errors across revisions and instances.").optional(), "resource": z.string().describe("The sub resource specific to this error (e.g. a proxy deployed within the EnvironmentConfig). If empty the error refers to the top level resource.").optional(), "code": z.enum(["OK","CANCELLED","UNKNOWN","INVALID_ARGUMENT","DEADLINE_EXCEEDED","NOT_FOUND","ALREADY_EXISTS","PERMISSION_DENIED","UNAUTHENTICATED","RESOURCE_EXHAUSTED","FAILED_PRECONDITION","ABORTED","OUT_OF_RANGE","UNIMPLEMENTED","INTERNAL","UNAVAILABLE","DATA_LOSS"]).describe("Status code.").optional() }).describe("Details on why a resource update failed in the runtime.")).describe("Errors reported when attempting to load this revision.").optional(), "revisionId": z.string().describe("The revision of the resource.").optional(), "replicas": z.number().int().describe("The number of replicas that have successfully loaded this revision.").optional() }).describe("The status of a specific resource revision.")).describe("Revisions of the resource currently deployed in the instance.").optional() }).describe("The status of a resource loaded in the runtime.")).describe("Status for config resources").optional(),
  "reportTime": z.string().describe("The time the report was generated in the runtime. Used to prevent an old status from overwriting a newer one. An instance should space out it's status reports so that clock skew does not play a factor.").optional(),
  "instanceUid": z.string().describe("A unique ID for the instance which is guaranteed to be unique in case the user installs multiple hybrid runtimes with the same instance ID.").optional()
}
```

### parameters_v1_organizations_organizationsid_instances_instancesi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_instances_patch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "updateMask": z.string().optional(),
  "displayName": z.string().describe("Optional. Display name for the instance.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the instance. Values other than \`ACTIVE\` means the resource is not ready to use.").readonly().optional(),
  "location": z.string().describe("Required. Compute Engine location where the instance resides.").optional(),
  "ipRange": z.string().describe("Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: \`a.b.c.d/22\` or \`e.f.g.h/28\` or \`a.b.c.d/22,e.f.g.h/28\`").optional(),
  "name": z.string().describe("Required. Resource ID of the instance. Values must match the regular expression \`^a-z{0,30}[a-z\\d]{
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "updateMask": z.string().optional(),
  "displayName": z.string().describe("Optional. Display name for the instance.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the instance. Values other than \`ACTIVE\` means the resource is not ready to use.").readonly().optional(),
  "location": z.string().describe("Required. Compute Engine location where the instance resides.").optional(),
  "ipRange": z.string().describe("Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: \`a.b.c.d/22\` or \`e.f.g.h/28\` or \`a.b.c.d/22,e.f.g.h/28\`").optional(),
  "name": .").optional(),
  "accessLoggingConfig": z.object({ "enabled": z.boolean().describe("Optional. Boolean flag that specifies whether the customer access log feature is enabled.").optional(), "filter": z.string().describe("Optional. Ship the access log entries that match the status_code defined in the filter. The status_code is the only expected/supported filter field. (Ex: status_code) The filter will parse it to the Common Expression Language semantics for expression evaluation to build the filter condition. (Ex: \"filter\": status_code >= 200 && status_code < 300 )").optional() }).describe("Optional. Access logging configuration enables the access logging feature at the instance. Apigee customers can enable access logging to ship the access logs to their own project's cloud logging.").optional(),
  "createdAt": z.string().describe("Output only. Time the instance was created in milliseconds since epoch.").readonly().optional(),
  "lastModifiedAt": z.string().describe("Output only. Time the instance was last modified in milliseconds since epoch.").readonly().optional(),
  "port": z.string().describe("Output only. Port number of the exposed Apigee endpoint.").readonly().optional(),
  "runtimeVersion": z.string().describe("Output only. Version of the runtime system running in the instance. The runtime system is the set of components that serve the API Proxy traffic in your Environments.").readonly().optional(),
  "host": z.string().describe("Output only. Internal hostname or IP address of the Apigee endpoint used by clients to connect to the service.").readonly().optional(),
  "description": z.string().describe("Optional. Description of the instance.").optional(),
  "serviceAttachment": z.string().describe("Output only. Resource name of the service attachment created for the instance in the format: \`projects/*/regions/*/serviceAttachments/*\` Apigee customers can privately forward traffic to this service attachment using the PSC endpoints.").readonly().optional(),
  "diskEncryptionKeyName": z.string().describe("Customer Managed Encryption Key (CMEK) used for disk and volume encryption. If not specified, a Google-Managed encryption key will be used. Use the following format: \`projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)\`").optional(),
  "consumerAcceptList": z.array(z.string()).describe("Optional. Customer accept list represents the list of projects (id/number) on customer side that can privately connect to the service attachment. It is an optional field which the customers can provide during the instance creation. By default, the customer project associated with the Apigee organization will be included to the list.").optional()
}
```

### apigee_organizations_instances_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "instancesId": z.string()
}
```

### apigee_organizations_instances_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "instancesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_envgroups_envgroupsi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_envgroups_attachments_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "envgroupsId": z.string(),
  "attachmentsId": z.string()
}
```

### apigee_organizations_envgroups_attachments_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "envgroupsId": z.string(),
  "attachmentsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_envgroups_envgroupsi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_envgroups_attachments_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "envgroupsId": z.string(),
  "environment": z.string().describe("Required. ID of the attached environment.").optional(),
  "environmentGroupId": z.string().describe("Output only. ID of the environment group.").readonly().optional(),
  "createdAt": z.string().describe("Output only. The time at which the environment group attachment was created as milliseconds since epoch.").readonly().optional(),
  "name": z.string().describe("ID of the environment group attachment.").optional()
}
```

### apigee_organizations_envgroups_attachments_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "envgroupsId": z.string(),
  "pageToken": z.string().optional(),
  "pageSize": z.number().int().optional()
}
```

### parameters_v1_organizations_organizationsid_envgroups_envgroupsi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_envgroups_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "envgroupsId": z.string()
}
```

### apigee_organizations_envgroups_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "envgroupsId": z.string()
}
```

### apigee_organizations_envgroups_patch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "envgroupsId": z.string(),
  "updateMask": z.string().optional(),
  "name": z.string().describe("ID of the environment group.").optional(),
  "hostnames": z.array(z.string()).describe("Required. Host names for this environment group.").optional(),
  "createdAt": z.string().describe("Output only. The time at which the environment group was created as milliseconds since epoch.").readonly().optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the environment group. Values other than ACTIVE means the resource is not ready to use.").readonly().optional(),
  "lastModifiedAt": z.string().describe("Output only. The time at which the environment group was last updated as milliseconds since epoch.").readonly().optional()
}
```

### parameters_v1_organizations_organizationsid_envgroups

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_envgroups_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "name": z.string().optional(),
  "b_name": z.string().describe("ID of the environment group.").optional(),
  "hostnames": z.array(z.string()).describe("Required. Host names for this environment group.").optional(),
  "createdAt": z.string().describe("Output only. The time at which the environment group was created as milliseconds since epoch.").readonly().optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the environment group. Values other than ACTIVE means the resource is not ready to use.").readonly().optional(),
  "lastModifiedAt": z.string().describe("Output only. The time at which the environment group was last updated as milliseconds since epoch.").readonly().optional()
}
```

### apigee_organizations_envgroups_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_envgroups_envgroupsi

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_envgroups_getdeployedingressconfig

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "envgroupsId": z.string(),
  "view": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_apps

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_apps_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "expand": z.boolean().optional(),
  "rows": z.string().optional(),
  "ids": z.string().optional(),
  "includeCred": z.boolean().optional(),
  "filter": z.string().optional(),
  "apiProduct": z.string().optional(),
  "apptype": z.string().optional(),
  "pageSize": z.number().int().optional(),
  "status": z.string().optional(),
  "startKey": z.string().optional(),
  "keyStatus": z.string().optional(),
  "pageToken": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_apps_appsid_

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_apps_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "appsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_endpointattachments_

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_endpointattachments_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "endpointAttachmentsId": z.string()
}
```

### apigee_organizations_endpointattachments_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "endpointAttachmentsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_endpointattachments

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_endpointattachments_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional()
}
```

### apigee_organizations_endpointattachments_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "endpointAttachmentId": z.string().optional(),
  "serviceAttachment": z.string().describe("Format: projects/*/regions/*/serviceAttachments/*").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the endpoint attachment. Values other than \`ACTIVE\` mean the resource is not ready to use.").readonly().optional(),
  "host": z.string().describe("Output only. Host that can be used in either the HTTP target endpoint directly or as the host in target server.").readonly().optional(),
  "connectionState": z.enum(["CONNECTION_STATE_UNSPECIFIED","UNAVAILABLE","PENDING","ACCEPTED","REJECTED","CLOSED","FROZEN","NEEDS_ATTENTION"]).describe("Output only. State of the endpoint attachment connection to the service attachment.").readonly().optional(),
  "name": z.string().describe("Name of the endpoint attachment. Use the following structure in your request: \`organizations/{org}/endpointAttachments/{endpoint_attachment}\`").optional(),
  "location": z.string().describe("Required. Location of the endpoint attachment.").optional()
}
```

### parameters_v1_organizations_organizationsid_securityprofiles_sec

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_securityprofiles_environments_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "securityProfilesId": z.string(),
  "attachTime": z.string().describe("Output only. The time when environment was attached to the security profile.").readonly().optional(),
  "name": z.string().describe("Immutable. Name of the environment that the profile is attached to.").optional()
}
```

### parameters_v1_organizations_organizationsid_securityprofiles_sec

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_securityprofiles_environments_computeenviro

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "securityProfilesId": z.string(),
  "environmentsId": z.string(),
  "pageSize": z.number().int().describe("Optional. The maximum number of subcomponents to be returned in a single page. The service may return fewer than this value. If unspecified, at most 100 subcomponents will be returned in a single page.").optional(),
  "timeRange": z.object({ "endTime": z.string().describe("Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.").optional(), "startTime": z.string().describe("Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.").optional() }).describe("Required. Time range for score calculation. At most 14 days of scores will be returned, and both the start and end dates must be within the last 90 days.").optional(),
  "pageToken": z.string().describe("Optional. A token that can be sent as \`page_token\` to retrieve the next page. If this field is omitted, there are no subsequent pages.").optional(),
  "filters": z.array(z.object({ "scorePath": z.string().describe("Optional. Return scores for this component. Example: \"/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source\"").optional() }).describe("Filter scores by component path. Used custom filter instead of AIP-160 as the use cases are highly constrained and predictable.")).describe("Optional. Filters are used to filter scored components. Return all the components if no filter is mentioned. Example: [{ \"scorePath\": \"/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source\" }, { \"scorePath\": \"/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target\", }] This will return components with path: \"/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source\" OR \"/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target\"").optional()
}
```

### parameters_v1_organizations_organizationsid_securityprofiles_sec

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_securityprofiles_environments_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "securityProfilesId": z.string(),
  "environmentsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_securityprofiles_sec

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_securityprofiles_patch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "securityProfilesId": z.string(),
  "updateMask": z.string().optional(),
  "revisionCreateTime": z.string().describe("Output only. The time when revision was created.").readonly().optional(),
  "profileConfig": z.object({ "categories": z.array(z.object({ "mtls": z.object({}).describe("Checks to see if you have configured mTLS for the target server.").optional(), "cors": z.object({}).describe("Checks to see if you have CORS policy in place.").optional(), "threat": z.object({}).describe("Checks to see if you have a threat protection policy in place.").optional(), "abuse": z.object({}).describe("Checks for abuse, which includes any requests sent to the API for purposes other than what it is intended for, such as high volumes of requests, data scraping, and abuse related to authorization.").optional(), "mediation": z.object({}).describe("Checks to see if you have a mediation policy in place.").optional(), "authorization": z.object({}).describe("Checks to see if you have an authorization policy in place.").optional() }).describe("Advanced API Security provides security profile that scores the following categories.")).describe("List of categories of profile config.").optional() }).describe("Required. Customized profile configuration that computes the security score.").optional(),
  "scoringConfigs": z.array(z.object({ "scorePath": z.string().describe("Path of the component config used for scoring.").optional(), "description": z.string().describe("Description of the config.").optional(), "title": z.string().describe("Title of the config.").optional() }).describe("Security configurations to manage scoring.")).describe("List of profile scoring configs in this revision.").optional(),
  "environments": z.array(z.object({ "attachTime": z.string().describe("Output only. Time at which environment was attached to the security profile.").readonly().optional(), "environment": z.string().describe("Output only. Name of the environment.").readonly().optional() }).describe("Environment information of attached environments. Scoring an environment is enabled only if it is attached to a security profile.")).describe("List of environments attached to security profile.").optional(),
  "maxScore": z.number().int().describe("Output only. Maximum security score that can be generated by this profile.").readonly().optional(),
  "revisionId": z.string().describe("Output only. Revision ID of the security profile.").readonly().optional(),
  "minScore": z.number().int().describe("Output only. Minimum security score that can be generated by this profile.").readonly().optional(),
  "revisionUpdateTime": z.string().describe("Output only. The time when revision was updated.").readonly().optional(),
  "description": z.string().describe("Description of the security profile.").optional(),
  "name": z.string().describe("Immutable. Name of the security profile resource. Format: organizations/{org}/securityProfiles/{profile}").optional()
}
```

### apigee_organizations_securityprofiles_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "securityProfilesId": z.string()
}
```

### apigee_organizations_securityprofiles_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "securityProfilesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_securityprofiles_sec

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_securityprofiles_listrevisions

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "securityProfilesId": z.string(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_securityprofiles

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_securityprofiles_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "pageToken": z.string().optional(),
  "pageSize": z.number().int().optional()
}
```

### apigee_organizations_securityprofiles_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "securityProfileId": z.string().optional(),
  "revisionCreateTime": z.string().describe("Output only. The time when revision was created.").readonly().optional(),
  "profileConfig": z.object({ "categories": z.array(z.object({ "mtls": z.object({}).describe("Checks to see if you have configured mTLS for the target server.").optional(), "cors": z.object({}).describe("Checks to see if you have CORS policy in place.").optional(), "threat": z.object({}).describe("Checks to see if you have a threat protection policy in place.").optional(), "abuse": z.object({}).describe("Checks for abuse, which includes any requests sent to the API for purposes other than what it is intended for, such as high volumes of requests, data scraping, and abuse related to authorization.").optional(), "mediation": z.object({}).describe("Checks to see if you have a mediation policy in place.").optional(), "authorization": z.object({}).describe("Checks to see if you have an authorization policy in place.").optional() }).describe("Advanced API Security provides security profile that scores the following categories.")).describe("List of categories of profile config.").optional() }).describe("Required. Customized profile configuration that computes the security score.").optional(),
  "scoringConfigs": z.array(z.object({ "scorePath": z.string().describe("Path of the component config used for scoring.").optional(), "description": z.string().describe("Description of the config.").optional(), "title": z.string().describe("Title of the config.").optional() }).describe("Security configurations to manage scoring.")).describe("List of profile scoring configs in this revision.").optional(),
  "environments": z.array(z.object({ "attachTime": z.string().describe("Output only. Time at which environment was attached to the security profile.").readonly().optional(), "environment": z.string().describe("Output only. Name of the environment.").readonly().optional() }).describe("Environment information of attached environments. Scoring an environment is enabled only if it is attached to a security profile.")).describe("List of environments attached to security profile.").optional(),
  "maxScore": z.number().int().describe("Output only. Maximum security score that can be generated by this profile.").readonly().optional(),
  "revisionId": z.string().describe("Output only. Revision ID of the security profile.").readonly().optional(),
  "minScore": z.number().int().describe("Output only. Minimum security score that can be generated by this profile.").readonly().optional(),
  "revisionUpdateTime": z.string().describe("Output only. The time when revision was updated.").readonly().optional(),
  "description": z.string().describe("Description of the security profile.").optional(),
  "name": z.string().describe("Immutable. Name of the security profile resource. Format: organizations/{org}/securityProfiles/{profile}").optional()
}
```

### parameters_v1_organizations_organizationsid_securityprofilesv2

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_securityprofilesv2_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "securityProfileV2Id": z.string().optional(),
  "name": z.string().describe("Identifier. Name of the security profile v2 resource. Format: organizations/{org}/securityProfilesV2/{profile}").optional(),
  "googleDefined": z.boolean().describe("Output only. Whether the security profile is google defined.").readonly().optional(),
  "createTime": z.string().describe("Output only. The time of the security profile creation.").readonly().optional(),
  "description": z.string().describe("Optional. The description of the security profile.").optional(),
  "profileAssessmentConfigs": z.record(z.object({ "weight": z.enum(["WEIGHT_UNSPECIFIED","MINOR","MODERATE","MAJOR"]).describe("The weight of the assessment.").optional() }).describe("The configuration definition for a specific assessment.")).describe("Required. The configuration for each assessment in this profile. Key is the name/id of the assessment.").optional(),
  "updateTime": z.string().describe("Output only. The time of the security profile update.").readonly().optional()
}
```

### apigee_organizations_securityprofilesv2_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_securityprofilesv2_s

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_securityprofilesv2_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "securityProfilesV2Id": z.string()
}
```

### apigee_organizations_securityprofilesv2_patch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "securityProfilesV2Id": z.string(),
  "updateMask": z.string().optional(),
  "name": z.string().describe("Identifier. Name of the security profile v2 resource. Format: organizations/{org}/securityProfilesV2/{profile}").optional(),
  "googleDefined": z.boolean().describe("Output only. Whether the security profile is google defined.").readonly().optional(),
  "createTime": z.string().describe("Output only. The time of the security profile creation.").readonly().optional(),
  "description": z.string().describe("Optional. The description of the security profile.").optional(),
  "profileAssessmentConfigs": z.record(z.object({ "weight": z.enum(["WEIGHT_UNSPECIFIED","MINOR","MODERATE","MAJOR"]).describe("The weight of the assessment.").optional() }).describe("The configuration definition for a specific assessment.")).describe("Required. The configuration for each assessment in this profile. Key is the name/id of the assessment.").optional(),
  "updateTime": z.string().describe("Output only. The time of the security profile update.").readonly().optional()
}
```

### apigee_organizations_securityprofilesv2_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "securityProfilesV2Id": z.string()
}
```

### parameters_v1_organizations_organizationsid_analytics_datastores

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_analytics_datastores_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "datastoresId": z.string()
}
```

### apigee_organizations_analytics_datastores_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "datastoresId": z.string()
}
```

### apigee_organizations_analytics_datastores_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "datastoresId": z.string(),
  "createTime": z.string().describe("Output only. Datastore create time, in milliseconds since the epoch of 1970-01-01T00:00:00Z").readonly().optional(),
  "targetType": z.string().describe("Destination storage type. Supported types \`gcs\` or \`bigquery\`.").optional(),
  "org": z.string().describe("Output only. Organization that the datastore belongs to").readonly().optional(),
  "datastoreConfig": z.object({ "tablePrefix": z.string().describe("Prefix of BigQuery table Required for \`bigquery\` target_type.").optional(), "bucketName": z.string().describe("Name of the Cloud Storage bucket. Required for \`gcs\` target_type.").optional(), "datasetName": z.string().describe("BigQuery dataset name Required for \`bigquery\` target_type.").optional(), "path": z.string().describe("Path of Cloud Storage bucket Required for \`gcs\` target_type.").optional(), "projectId": z.string().describe("Required. Google Cloud project in which the datastore exists").optional() }).describe("Datastore Configurations.").optional(),
  "displayName": z.string().describe("Required. Display name in UI").optional(),
  "lastUpdateTime": z.string().describe("Output only. Datastore last update time, in milliseconds since the epoch of 1970-01-01T00:00:00Z").readonly().optional(),
  "self": z.string().describe("Output only. Resource link of Datastore. Example: \`/organizations/{org}/analytics/datastores/{uuid}\`").readonly().optional()
}
```

### parameters_v1_organizations_organizationsid_analytics_datastores

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_analytics_datastores_test

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "createTime": z.string().describe("Output only. Datastore create time, in milliseconds since the epoch of 1970-01-01T00:00:00Z").readonly().optional(),
  "targetType": z.string().describe("Destination storage type. Supported types \`gcs\` or \`bigquery\`.").optional(),
  "org": z.string().describe("Output only. Organization that the datastore belongs to").readonly().optional(),
  "datastoreConfig": z.object({ "tablePrefix": z.string().describe("Prefix of BigQuery table Required for \`bigquery\` target_type.").optional(), "bucketName": z.string().describe("Name of the Cloud Storage bucket. Required for \`gcs\` target_type.").optional(), "datasetName": z.string().describe("BigQuery dataset name Required for \`bigquery\` target_type.").optional(), "path": z.string().describe("Path of Cloud Storage bucket Required for \`gcs\` target_type.").optional(), "projectId": z.string().describe("Required. Google Cloud project in which the datastore exists").optional() }).describe("Datastore Configurations.").optional(),
  "displayName": z.string().describe("Required. Display name in UI").optional(),
  "lastUpdateTime": z.string().describe("Output only. Datastore last update time, in milliseconds since the epoch of 1970-01-01T00:00:00Z").readonly().optional(),
  "self": z.string().describe("Output only. Resource link of Datastore. Example: \`/organizations/{org}/analytics/datastores/{uuid}\`").readonly().optional()
}
```

### parameters_v1_organizations_organizationsid_analytics_datastores

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_analytics_datastores_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "targetType": z.string().optional()
}
```

### apigee_organizations_analytics_datastores_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "createTime": z.string().describe("Output only. Datastore create time, in milliseconds since the epoch of 1970-01-01T00:00:00Z").readonly().optional(),
  "targetType": z.string().describe("Destination storage type. Supported types \`gcs\` or \`bigquery\`.").optional(),
  "org": z.string().describe("Output only. Organization that the datastore belongs to").readonly().optional(),
  "datastoreConfig": z.object({ "tablePrefix": z.string().describe("Prefix of BigQuery table Required for \`bigquery\` target_type.").optional(), "bucketName": z.string().describe("Name of the Cloud Storage bucket. Required for \`gcs\` target_type.").optional(), "datasetName": z.string().describe("BigQuery dataset name Required for \`bigquery\` target_type.").optional(), "path": z.string().describe("Path of Cloud Storage bucket Required for \`gcs\` target_type.").optional(), "projectId": z.string().describe("Required. Google Cloud project in which the datastore exists").optional() }).describe("Datastore Configurations.").optional(),
  "displayName": z.string().describe("Required. Display name in UI").optional(),
  "lastUpdateTime": z.string().describe("Output only. Datastore last update time, in milliseconds since the epoch of 1970-01-01T00:00:00Z").readonly().optional(),
  "self": z.string().describe("Output only. Resource link of Datastore. Example: \`/organizations/{org}/analytics/datastores/{uuid}\`").readonly().optional()
}
```

### parameters_v1_organizations_organizationsid_apis_apisid_

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_apis_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apisId": z.string()
}
```

### apigee_organizations_apis_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apisId": z.string()
}
```

### apigee_organizations_apis_patch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apisId": z.string(),
  "updateMask": z.string().optional(),
  "name": z.string().describe("Output only. Name of the API proxy.").readonly().optional(),
  "latestRevisionId": z.string().describe("Output only. The id of the most recently created revision for this api proxy.").readonly().optional(),
  "revision": z.array(z.string()).describe("Output only. List of revisions defined for the API proxy.").readonly().optional(),
  "labels": z.record(z.string()).describe("User labels applied to this API Proxy.").optional(),
  "apiProxyType": z.enum(["API_PROXY_TYPE_UNSPECIFIED","PROGRAMMABLE","CONFIGURABLE"]).describe("Output only. The type of the API proxy.").readonly().optional(),
  "readOnly": z.boolean().describe("Output only. Whether this proxy is read-only. A read-only proxy cannot have new revisions created through calls to CreateApiProxyRevision. A proxy is read-only if it was generated by an archive.").readonly().optional(),
  "metaData": z.object({ "lastModifiedAt": z.string().describe("Time at which the API proxy was most recently modified, in milliseconds since epoch.").optional(), "subType": z.string().describe("The type of entity described").optional(), "createdAt": z.string().describe("Time at which the API proxy was created, in milliseconds since epoch.").optional() }).describe("Output only. Metadata describing the API proxy.").readonly().optional()
}
```

### parameters_v1_organizations_organizationsid_apis

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_apis_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "includeRevisions": z.boolean().optional(),
  "includeMetaData": z.boolean().optional()
}
```

### apigee_organizations_apis_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "name": z.string().optional(),
  "validate": z.boolean().optional(),
  "action": z.string().optional(),
  "contentType": z.string().describe("The HTTP Content-Type header value specifying the content type of the body.").optional(),
  "extensions": z.array(z.record(z.any().describe("Properties of the object. Contains field @type with type URL."))).describe("Application specific response metadata. Must be set in the first response for streaming APIs.").optional(),
  "data": z.string().describe("The HTTP request/response body as raw binary.").optional()
}
```

### parameters_v1_organizations_organizationsid_apis_apisid_revision

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_apis_revisions_deployments_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apisId": z.string(),
  "revisionsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_apis_apisid_revision

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_apis_revisions_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apisId": z.string(),
  "revisionsId": z.string()
}
```

### apigee_organizations_apis_revisions_updateapiproxyrevision

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apisId": z.string(),
  "revisionsId": z.string(),
  "validate": z.boolean().optional(),
  "contentType": z.string().describe("The HTTP Content-Type header value specifying the content type of the body.").optional(),
  "extensions": z.array(z.record(z.any().describe("Properties of the object. Contains field @type with type URL."))).describe("Application specific response metadata. Must be set in the first response for streaming APIs.").optional(),
  "data": z.string().describe("The HTTP request/response body as raw binary.").optional()
}
```

### apigee_organizations_apis_revisions_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apisId": z.string(),
  "revisionsId": z.string(),
  "format": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_apis_apisid_keyvalue

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_apis_keyvaluemaps_entries_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apisId": z.string(),
  "keyvaluemapsId": z.string(),
  "entriesId": z.string()
}
```

### apigee_organizations_apis_keyvaluemaps_entries_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apisId": z.string(),
  "keyvaluemapsId": z.string(),
  "entriesId": z.string()
}
```

### apigee_organizations_apis_keyvaluemaps_entries_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apisId": z.string(),
  "keyvaluemapsId": z.string(),
  "entriesId": z.string(),
  "name": z.string().describe("Resource URI that can be used to identify the scope of the key value map entries.").optional(),
  "value": z.string().describe("Required. Data or payload that is being retrieved and associated with the unique key.").optional()
}
```

### parameters_v1_organizations_organizationsid_apis_apisid_keyvalue

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_apis_keyvaluemaps_entries_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apisId": z.string(),
  "keyvaluemapsId": z.string(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional()
}
```

### apigee_organizations_apis_keyvaluemaps_entries_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apisId": z.string(),
  "keyvaluemapsId": z.string(),
  "name": z.string().describe("Resource URI that can be used to identify the scope of the key value map entries.").optional(),
  "value": z.string().describe("Required. Data or payload that is being retrieved and associated with the unique key.").optional()
}
```

### parameters_v1_organizations_organizationsid_apis_apisid_keyvalue

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_apis_keyvaluemaps_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apisId": z.string(),
  "keyvaluemapsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_apis_apisid_keyvalue

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_apis_keyvaluemaps_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apisId": z.string(),
  "encrypted": z.boolean().describe("Required. Flag that specifies whether entry values will be encrypted. This field is retained for backward compatibility and the value of encrypted will always be \`true\`. Apigee X and hybrid do not support unencrypted key value maps.").optional(),
  "name": z.string().describe("Required. ID of the key value map.").optional()
}
```

### parameters_v1_organizations_organizationsid_apis_apisid_deployme

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_apis_deployments_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "apisId": z.string()
}
```

### parameters_v1_organizations_organizationsid_securityassessmentre

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_securityassessmentresults_batchcompute

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "profile": z.string().describe("Required. Name of the profile that is used for computation.").optional(),
  "include": z.object({ "resources": z.array(z.object({ "name": z.string().describe("Required. Name of this resource.").optional(), "type": z.enum(["RESOURCE_TYPE_UNSPECIFIED","API_PROXY"]).describe("Required. Type of this resource.").optional() }).describe("Resource for which we are computing security assessment.")).describe("Required. The array of resources. For Apigee, the proxies are resources.").optional() }).describe("Include only these resources.").optional(),
  "pageToken": z.string().describe("Optional. A page token, received from a previous \`BatchComputeSecurityAssessmentResults\` call. Provide this to retrieve the subsequent page.").optional(),
  "includeAllResources": z.object({}).describe("Include all resources under the scope.").optional(),
  "scope": z.string().describe("Required. Scope of the resources for the computation. For Apigee, the environment is the scope of the resources.").optional(),
  "pageSize": z.number().int().describe("Optional. The maximum number of results to return. The service may return fewer than this value. If unspecified, at most 50 results will be returned.").optional()
}
```

### parameters_v1_organizations_organizationsid_hostqueries

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_hostqueries_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "metrics": z.array(z.object({ "function": z.string().describe("Aggregation function: avg, min, max, or sum.").optional(), "name": z.string().describe("Required. Metric name.").optional(), "value": z.string().describe("Operand value should be provided when operator is set.").optional(), "alias": z.string().describe("Alias for the metric. Alias will be used to replace metric name in query results.").optional(), "operator": z.string().describe("One of \`+\`, \`-\`, \`/\`, \`%\`, \`*\`.").optional() }).describe("More info about Metric: https://docs.apigee.com/api-platform/analytics/analytics-reference#metrics")).describe("A list of Metrics.").optional(),
  "filter": z.string().describe("Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax").optional(),
  "timeRange": z.any().describe("Required. Time range for the query. Can use the following predefined strings to specify the time range: \`last60minutes\` \`last24hours\` \`last7days\` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: \"timeRange\": { \"start\": \"2018-07-29T00:13:00Z\", \"end\": \"2018-08-01T00:18:00Z\" }").optional(),
  "reportDefinitionId": z.string().describe("Asynchronous Report ID.").optional(),
  "name": z.string().describe("Asynchronous Query Name.").optional(),
  "dimensions": z.array(z.string()).describe("A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions").optional(),
  "limit": z.number().int().describe("Maximum number of rows that can be returned in the result.").optional(),
  "groupByTimeUnit": z.string().describe("Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision.").optional(),
  "outputFormat": z.string().describe("Valid values include: \`csv\` or \`json\`. Defaults to \`json\`. Note: Configure the delimiter for CSV output using the csvDelimiter property.").optional(),
  "envgroupHostname": z.string().describe("Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostAsyncQuery where analytics data will be grouped by organization and hostname.").optional(),
  "csvDelimiter": z.string().describe("Delimiter used in the CSV file, if \`outputFormat\` is set to \`csv\`. Defaults to the \`,\` (comma) character. Supported delimiter characters include comma (\`,\`), pipe (\`|\`), and tab (\`\\t\`).").optional()
}
```

### apigee_organizations_hostqueries_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "submittedBy": z.string().optional(),
  "status": z.string().optional(),
  "envgroupHostname": z.string().optional(),
  "from": z.string().optional(),
  "dataset": z.string().optional(),
  "inclQueriesWithoutReport": z.string().optional(),
  "to": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_hostqueries_hostquer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_hostqueries_getresultview

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "hostQueriesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_hostqueries_hostquer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_hostqueries_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "hostQueriesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_hostqueries_hostquer

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_hostqueries_getresult

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "hostQueriesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_keyvaluemaps_keyvalu

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_keyvaluemaps_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "keyvaluemapsId": z.string()
}
```

### parameters_v1_organizations_organizationsid_keyvaluemaps

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_keyvaluemaps_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "encrypted": z.boolean().describe("Required. Flag that specifies whether entry values will be encrypted. This field is retained for backward compatibility and the value of encrypted will always be \`true\`. Apigee X and hybrid do not support unencrypted key value maps.").optional(),
  "name": z.string().describe("Required. ID of the key value map.").optional()
}
```

### parameters_v1_organizations_organizationsid_keyvaluemaps_keyvalu

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_keyvaluemaps_entries_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "keyvaluemapsId": z.string(),
  "name": z.string().describe("Resource URI that can be used to identify the scope of the key value map entries.").optional(),
  "value": z.string().describe("Required. Data or payload that is being retrieved and associated with the unique key.").optional()
}
```

### apigee_organizations_keyvaluemaps_entries_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "keyvaluemapsId": z.string(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional()
}
```

### parameters_v1_organizations_organizationsid_keyvaluemaps_keyvalu

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_keyvaluemaps_entries_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "keyvaluemapsId": z.string(),
  "entriesId": z.string(),
  "name": z.string().describe("Resource URI that can be used to identify the scope of the key value map entries.").optional(),
  "value": z.string().describe("Required. Data or payload that is being retrieved and associated with the unique key.").optional()
}
```

### apigee_organizations_keyvaluemaps_entries_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "keyvaluemapsId": z.string(),
  "entriesId": z.string()
}
```

### apigee_organizations_keyvaluemaps_entries_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "keyvaluemapsId": z.string(),
  "entriesId": z.string()
}
```

### parameters_v1_organizations_organizationsid_deployments

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_organizations_deployments_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "organizationsId": z.string(),
  "sharedFlows": z.boolean().optional()
}
```

### parameters_v1_hybrid_issuers

**Environment variables**



**Input schema**

```ts
{}
```

### apigee_hybrid_issuers_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```
