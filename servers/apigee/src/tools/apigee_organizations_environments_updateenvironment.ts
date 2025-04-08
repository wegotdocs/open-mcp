import { z } from "zod"

export const toolName = `apigee_organizations_environments_updateenvironment`
export const toolDescription = `Updates an existing environment. When updating properties, you must pass all existing properties to the API, even if they are not being changed. If you omit properties from the payload, the properties are removed. To get the current list of`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}`
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
  "query": [],
  "header": [],
  "path": [
    "organizationsId",
    "environmentsId"
  ],
  "cookie": [],
  "body": [
    "deploymentType",
    "hasAttachedFlowHooks",
    "displayName",
    "nodeConfig",
    "state",
    "createdAt",
    "name",
    "properties",
    "type",
    "lastModifiedAt",
    "apiProxyType",
    "forwardProxyUri",
    "description"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "deploymentType": z.enum(["DEPLOYMENT_TYPE_UNSPECIFIED","PROXY","ARCHIVE"]).describe("Optional. Deployment type supported by the environment. The deployment type can be set when creating the environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a [subset of actions](/apigee/docs/api-platform/local-development/overview#prevented-actions) within the environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers").optional(),
  "hasAttachedFlowHooks": z.boolean().optional(),
  "displayName": z.string().describe("Optional. Display name for this environment.").optional(),
  "nodeConfig": z.object({ "currentAggregateNodeCount": z.string().describe("Output only. The current total number of gateway nodes that each environment currently has across all instances.").readonly().optional(), "maxNodeCount": z.string().describe("Optional. The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended maximum number of nodes for that gateway.").optional(), "minNodeCount": z.string().describe("Optional. The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended minimum number of nodes for that gateway.").optional() }).describe("Optional. NodeConfig of the environment.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use.").readonly().optional(),
  "createdAt": z.string().describe("Output only. Creation time of this environment as milliseconds since epoch.").readonly().optional(),
  "name": z.string().describe("Required. Name of the environment. Values must match the regular expression `^[.\\\\p{Alnum}-_]{1,255}{
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