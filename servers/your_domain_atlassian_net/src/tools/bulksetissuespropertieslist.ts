import { z } from "zod"

export const toolName = `bulksetissuespropertieslist`
export const toolDescription = `Bulk set issues properties by list`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/properties`
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

export const inputParams = z.object({ "b_entitiesIds": z.array(z.number().int()).min(1).max(10000).describe("A list of entity property IDs.").optional(), "b_properties": z.record(z.object({ "array": z.boolean().optional(), "bigDecimal": z.boolean().optional(), "bigInteger": z.boolean().optional(), "bigIntegerValue": z.number().int().optional(), "binary": z.boolean().optional(), "binaryValue": z.array(z.string()).optional(), "boolean": z.boolean().optional(), "booleanValue": z.boolean().optional(), "containerNode": z.boolean().optional(), "decimalValue": z.number().optional(), "double": z.boolean().optional(), "doubleValue": z.number().optional(), "elements": z.record(z.any()).optional(), "fieldNames": z.record(z.any()).optional(), "fields": z.record(z.any()).optional(), "floatingPointNumber": z.boolean().optional(), "int": z.boolean().optional(), "intValue": z.number().int().optional(), "integralNumber": z.boolean().optional(), "long": z.boolean().optional(), "longValue": z.number().int().optional(), "missingNode": z.boolean().optional(), "null": z.boolean().optional(), "number": z.boolean().optional(), "numberType": z.enum(["INT","LONG","BIG_INTEGER","FLOAT","DOUBLE","BIG_DECIMAL"]).optional(), "numberValue": z.number().optional(), "object": z.boolean().optional(), "pojo": z.boolean().optional(), "textValue": z.string().optional(), "textual": z.boolean().optional(), "valueAsBoolean": z.boolean().optional(), "valueAsDouble": z.number().optional(), "valueAsInt": z.number().int().optional(), "valueAsLong": z.number().int().optional(), "valueAsText": z.string().optional(), "valueNode": z.boolean().optional() }).strict()).describe("A list of entity property keys and values.").optional() }).shape