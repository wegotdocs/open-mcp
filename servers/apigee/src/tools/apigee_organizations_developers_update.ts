import { z } from "zod"

export const toolName = `apigee_organizations_developers_update`
export const toolDescription = `Updates a developer. This API replaces the existing developer details with those specified in the request. Include or exclude any existing details that you want to retain or delete, respectively. The custom attribute limit is 18. **Note**:`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/developers/{developersId}`
export const method = `put`
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
    "developersId"
  ],
  "cookie": [],
  "body": [
    "attributes",
    "developerId",
    "companies",
    "status",
    "organizationName",
    "apps",
    "lastModifiedAt",
    "firstName",
    "appFamily",
    "userName",
    "email",
    "accessType",
    "createdAt",
    "lastName"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "developersId": z.string(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("Optional. Developer attributes (name/value pairs). The custom attribute limit is 18.").optional(),
  "developerId": z.string().describe("ID of the developer. **Note**: IDs are generated internally by Apigee and are not guaranteed to stay the same over time.").optional(),
  "companies": z.array(z.string()).describe("List of companies associated with the developer.").optional(),
  "status": z.string().describe("Output only. Status of the developer. Valid values are `active` and `inactive`.").readonly().optional(),
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