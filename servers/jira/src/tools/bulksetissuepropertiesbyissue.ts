import { z } from "zod"

export const toolName = `bulksetissuepropertiesbyissue`
export const toolDescription = `Bulk set issue properties by issue`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/properties/multi`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
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
  "path": [],
  "cookie": [],
  "body": [
    "issues"
  ]
}
export const flatMap = {}

export const inputParams = {
  "issues": z.array(z.object({ "issueID": z.number().int().describe("The ID of the issue.").optional(), "properties": z.record(z.object({ "array": z.boolean().optional(), "bigDecimal": z.boolean().optional(), "bigInteger": z.boolean().optional(), "bigIntegerValue": z.number().int().optional(), "binary": z.boolean().optional(), "binaryValue": z.array(z.string()).optional(), "boolean": z.boolean().optional(), "booleanValue": z.boolean().optional(), "containerNode": z.boolean().optional(), "decimalValue": z.number().optional(), "double": z.boolean().optional(), "doubleValue": z.number().optional(), "elements": z.record(z.any()).optional(), "fieldNames": z.record(z.any()).optional(), "fields": z.record(z.any()).optional(), "floatingPointNumber": z.boolean().optional(), "int": z.boolean().optional(), "intValue": z.number().int().optional(), "integralNumber": z.boolean().optional(), "long": z.boolean().optional(), "longValue": z.number().int().optional(), "missingNode": z.boolean().optional(), "null": z.boolean().optional(), "number": z.boolean().optional(), "numberType": z.enum(["INT","LONG","BIG_INTEGER","FLOAT","DOUBLE","BIG_DECIMAL"]).optional(), "numberValue": z.number().optional(), "object": z.boolean().optional(), "pojo": z.boolean().optional(), "textValue": z.string().optional(), "textual": z.boolean().optional(), "valueAsBoolean": z.boolean().optional(), "valueAsDouble": z.number().optional(), "valueAsInt": z.number().int().optional(), "valueAsLong": z.number().int().optional(), "valueAsText": z.string().optional(), "valueNode": z.boolean().optional() }).strict()).describe("Entity properties to set on the issue. The maximum length of an issue property value is 32768 characters.").optional() }).strict().describe("An issue ID with entity property values. See [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/) for more information.")).describe("A list of issue IDs and their respective properties.").optional()
}