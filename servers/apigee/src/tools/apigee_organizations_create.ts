import { z } from "zod"

export const toolName = `apigee_organizations_create`
export const toolDescription = `Creates an Apigee organization. See [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [
    "parent"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "description",
    "state",
    "lastModifiedAt",
    "projectId",
    "displayName",
    "customerName",
    "subscriptionPlan",
    "name",
    "caCertificate",
    "portalDisabled",
    "apigeeProjectId",
    "properties",
    "attributes",
    "type",
    "authorizedNetwork",
    "addonsConfig",
    "controlPlaneEncryptionKeyName",
    "runtimeDatabaseEncryptionKeyName",
    "environments",
    "disableVpcPeering",
    "expiresAt",
    "runtimeType",
    "apiConsumerDataEncryptionKeyName",
    "createdAt",
    "apiConsumerDataLocation",
    "billingType"
  ]
}
export const flatMap = {}

export const inputParams = {
  "parent": z.string().optional(),
  "description": z.string().describe("Description of the Apigee organization.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the organization. Values other than ACTIVE means the resource is not ready to use.").readonly().optional(),
  "lastModifiedAt": z.string().describe("Output only. Time that the Apigee organization was last modified in milliseconds since epoch.").readonly().optional(),
  "projectId": z.string().describe("Output only. Project ID associated with the Apigee organization.").readonly().optional(),
  "displayName": z.string().describe("Display name for the Apigee organization. Unused, but reserved for future use.").optional(),
  "customerName": z.string().describe("Not used by Apigee.").optional(),
  "subscriptionPlan": z.enum(["SUBSCRIPTION_PLAN_UNSPECIFIED","SUBSCRIPTION_2021","SUBSCRIPTION_2024"]).describe("Output only. Subscription plan that the customer has purchased. Output only.").readonly().optional(),
  "name": z.string().describe("Output only. Name of the Apigee organization.").readonly().optional(),
  "caCertificate": z.string().describe("Output only. Base64-encoded public certificate for the root CA of the Apigee organization. Valid only when [RuntimeType](#RuntimeType) is `CLOUD`.").readonly().optional(),
  "portalDisabled": z.boolean().describe("Configuration for the Portals settings.").optional(),
  "apigeeProjectId": z.string().describe("Output only. Apigee Project ID associated with the organization. Use this project to allowlist Apigee in the Service Attachment when using private service connect with Apigee.").readonly().optional(),
  "properties": z.object({ "property": z.array(z.object({ "value": z.string().describe("The property value").optional(), "name": z.string().describe("The property key").optional() }).describe("A single property entry in the Properties message.")).describe("List of all properties in the object").optional() }).describe("Properties defined in the Apigee organization profile.").optional(),
  "attributes": z.array(z.string()).describe("Not used by Apigee.").optional(),
  "type": z.enum(["TYPE_UNSPECIFIED","TYPE_TRIAL","TYPE_PAID","TYPE_INTERNAL"]).describe("Not used by Apigee.").optional(),
  "authorizedNetwork": z.string().describe("Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Valid only when [RuntimeType](#RuntimeType) is set to `CLOUD`. The value must be set before the creation of a runtime instance and can be updated only when there are no runtime instances. For example: `default`. Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` **Note:** Not supported for Apigee hybrid.").optional(),
  "addonsConfig": z.object({ "advancedApiOpsConfig": z.object({ "enabled": z.boolean().describe("Flag that specifies whether the Advanced API Ops add-on is enabled.").optional() }).describe("Configuration for the Advanced API Ops add-on.").optional(), "connectorsPlatformConfig": z.object({ "expiresAt": z.string().describe("Output only. Time at which the Connectors Platform add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire.").readonly().optional(), "enabled": z.boolean().describe("Flag that specifies whether the Connectors Platform add-on is enabled.").optional() }).describe("Configuration for the Connectors Platform add-on.").optional(), "monetizationConfig": z.object({ "enabled": z.boolean().describe("Flag that specifies whether the Monetization add-on is enabled.").optional() }).describe("Configuration for the Monetization add-on.").optional(), "analyticsConfig": z.object({ "updateTime": z.string().describe("Output only. The latest update time.").readonly().optional(), "state": z.enum(["ADDON_STATE_UNSPECIFIED","ENABLING","ENABLED","DISABLING","DISABLED"]).describe("Output only. The state of the Analytics add-on.").readonly().optional(), "expireTimeMillis": z.string().describe("Output only. Time at which the Analytics add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire.").readonly().optional(), "enabled": z.boolean().describe("Whether the Analytics add-on is enabled.").optional() }).describe("Configuration for the Analytics add-on. Only used in organizations.environments.addonsConfig.").optional(), "integrationConfig": z.object({ "enabled": z.boolean().describe("Flag that specifies whether the Integration add-on is enabled.").optional() }).describe("Configuration for the Integration add-on.").optional(), "apiSecurityConfig": z.object({ "expiresAt": z.string().describe("Output only. Time at which the API Security add-on expires in in milliseconds since epoch. If unspecified, the add-on will never expire.").readonly().optional(), "enabled": z.boolean().describe("Flag that specifies whether the API security add-on is enabled.").optional() }).describe("Configuration for the API Security add-on.").optional() }).describe("Addon configurations of the Apigee organization.").optional(),
  "controlPlaneEncryptionKeyName": z.string().describe("Cloud KMS key name used for encrypting control plane data that is stored in a multi region. Only used for the data residency region \"US\" or \"EU\". If not specified or [BillingType](#BillingType) is `EVALUATION`, a Google-Managed encryption key will be used. Format: `projects/*/locations/*/keyRings/*/cryptoKeys/*`").optional(),
  "runtimeDatabaseEncryptionKeyName": z.string().describe("Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. If not specified or [RuntimeType](#RuntimeType) is `TRIAL`, a Google-Managed encryption key will be used. For example: \"projects/foo/locations/us/keyRings/bar/cryptoKeys/baz\". **Note:** Not supported for Apigee hybrid.").optional(),
  "environments": z.array(z.string()).describe("Output only. List of environments in the Apigee organization.").readonly().optional(),
  "disableVpcPeering": z.boolean().describe("Optional. Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. Valid only when RuntimeType is set to CLOUD. Required if an authorizedNetwork on the consumer project is not provided, in which case the flag should be set to true. The value must be set before the creation of any Apigee runtime instance and can be updated only when there are no runtime instances. **Note:** Apigee will be deprecating the vpc peering model that requires you to provide 'authorizedNetwork', by making the non-peering model as the default way of provisioning Apigee organization in future. So, this will be a temporary flag to enable the transition. Not supported for Apigee hybrid.").optional(),
  "expiresAt": z.string().describe("Output only. Time that the Apigee organization is scheduled for deletion.").readonly().optional(),
  "runtimeType": z.enum(["RUNTIME_TYPE_UNSPECIFIED","CLOUD","HYBRID"]).describe("Required. Runtime type of the Apigee organization based on the Apigee subscription purchased.").optional(),
  "apiConsumerDataEncryptionKeyName": z.string().describe("Cloud KMS key name used for encrypting API consumer data. If not specified or [BillingType](#BillingType) is `EVALUATION`, a Google-Managed encryption key will be used. Format: `projects/*/locations/*/keyRings/*/cryptoKeys/*`").optional(),
  "createdAt": z.string().describe("Output only. Time that the Apigee organization was created in milliseconds since epoch.").readonly().optional(),
  "apiConsumerDataLocation": z.string().describe("This field is needed only for customers using non-default data residency regions. Apigee stores some control plane data only in single region. This field determines which single region Apigee should use. For example: \"us-west1\" when control plane is in US or \"europe-west2\" when control plane is in EU.").optional(),
  "billingType": z.enum(["BILLING_TYPE_UNSPECIFIED","SUBSCRIPTION","EVALUATION","PAYG"]).describe("Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).").optional()
}