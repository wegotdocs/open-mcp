import { z } from "zod"

export const toolName = `apigee_organizations_instances_patch`
export const toolDescription = `Updates an Apigee runtime instance. You can update the fields described in NodeConfig. No other fields will be updated. **Note:** Not supported for Apigee hybrid.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/instances/{instancesId}`
export const method = `patch`
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
    "updateMask"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "instancesId"
  ],
  "cookie": [],
  "body": [
    "displayName",
    "state",
    "location",
    "ipRange",
    "name",
    "accessLoggingConfig",
    "createdAt",
    "lastModifiedAt",
    "port",
    "runtimeVersion",
    "host",
    "description",
    "serviceAttachment",
    "diskEncryptionKeyName",
    "consumerAcceptList"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "updateMask": z.string().optional(),
  "displayName": z.string().describe("Optional. Display name for the instance.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the instance. Values other than `ACTIVE` means the resource is not ready to use.").readonly().optional(),
  "location": z.string().describe("Required. Compute Engine location where the instance resides.").optional(),
  "ipRange": z.string().describe("Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: `a.b.c.d/22` or `e.f.g.h/28` or `a.b.c.d/22,e.f.g.h/28`").optional(),
  "name": z.string().describe("Required. Resource ID of the instance. Values must match the regular expression `^a-z{0,30}[a-z\\d]{
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "updateMask": z.string().optional(),
  "displayName": z.string().describe("Optional. Display name for the instance.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the instance. Values other than `ACTIVE` means the resource is not ready to use.").readonly().optional(),
  "location": z.string().describe("Required. Compute Engine location where the instance resides.").optional(),
  "ipRange": z.string().describe("Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: `a.b.c.d/22` or `e.f.g.h/28` or `a.b.c.d/22,e.f.g.h/28`").optional(),
  "name": .").optional(),
  "accessLoggingConfig": z.object({ "enabled": z.boolean().describe("Optional. Boolean flag that specifies whether the customer access log feature is enabled.").optional(), "filter": z.string().describe("Optional. Ship the access log entries that match the status_code defined in the filter. The status_code is the only expected/supported filter field. (Ex: status_code) The filter will parse it to the Common Expression Language semantics for expression evaluation to build the filter condition. (Ex: \"filter\": status_code >= 200 && status_code < 300 )").optional() }).describe("Optional. Access logging configuration enables the access logging feature at the instance. Apigee customers can enable access logging to ship the access logs to their own project's cloud logging.").optional(),
  "createdAt": z.string().describe("Output only. Time the instance was created in milliseconds since epoch.").readonly().optional(),
  "lastModifiedAt": z.string().describe("Output only. Time the instance was last modified in milliseconds since epoch.").readonly().optional(),
  "port": z.string().describe("Output only. Port number of the exposed Apigee endpoint.").readonly().optional(),
  "runtimeVersion": z.string().describe("Output only. Version of the runtime system running in the instance. The runtime system is the set of components that serve the API Proxy traffic in your Environments.").readonly().optional(),
  "host": z.string().describe("Output only. Internal hostname or IP address of the Apigee endpoint used by clients to connect to the service.").readonly().optional(),
  "description": z.string().describe("Optional. Description of the instance.").optional(),
  "serviceAttachment": z.string().describe("Output only. Resource name of the service attachment created for the instance in the format: `projects/*/regions/*/serviceAttachments/*` Apigee customers can privately forward traffic to this service attachment using the PSC endpoints.").readonly().optional(),
  "diskEncryptionKeyName": z.string().describe("Customer Managed Encryption Key (CMEK) used for disk and volume encryption. If not specified, a Google-Managed encryption key will be used. Use the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`").optional(),
  "consumerAcceptList": z.array(z.string()).describe("Optional. Customer accept list represents the list of projects (id/number) on customer side that can privately connect to the service attachment. It is an optional field which the customers can provide during the instance creation. By default, the customer project associated with the Apigee organization will be included to the list.").optional()
}