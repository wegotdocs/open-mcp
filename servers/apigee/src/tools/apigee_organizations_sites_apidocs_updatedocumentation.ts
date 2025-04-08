import { z } from "zod"

export const toolName = `apigee_organizations_sites_apidocs_updatedocumentation`
export const toolDescription = `Updates the documentation for the specified catalog item. Note that the documentation file contents will not be populated in the return message.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/sites/{sitesId}/apidocs/{apidocsId}/documentation`
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
  "query": [],
  "header": [],
  "path": [
    "organizationsId",
    "sitesId",
    "apidocsId"
  ],
  "cookie": [],
  "body": [
    "oasDocumentation",
    "graphqlDocumentation"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "sitesId": z.string(),
  "apidocsId": z.string(),
  "oasDocumentation": z.object({ "spec": z.object({ "contents": z.string().describe("Required. The file contents. The max size is 4 MB.").optional(), "displayName": z.string().describe("Required. A display name for the file, shown in the management UI. Max length is 255 characters.").optional() }).describe("Required. The documentation file contents for the OpenAPI Specification. JSON and YAML file formats are supported.").optional(), "format": z.enum(["FORMAT_UNSPECIFIED","YAML","JSON"]).describe("Output only. The format of the input specification file contents.").readonly().optional() }).describe("Optional. OpenAPI Specification documentation.").optional(),
  "graphqlDocumentation": z.object({ "endpointUri": z.string().describe("Required. The GraphQL endpoint URI to be queried by API consumers. Max length is 2,083 characters.").optional(), "schema": z.object({ "contents": z.string().describe("Required. The file contents. The max size is 4 MB.").optional(), "displayName": z.string().describe("Required. A display name for the file, shown in the management UI. Max length is 255 characters.").optional() }).describe("Required. The documentation file contents for the GraphQL schema.").optional() }).describe("Optional. GraphQL documentation.").optional()
}