import { z } from "zod"

export const toolName = `listbatches`
export const toolDescription = `List your organization's batches.`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/batches`
export const method = `get`
export const security = [
  {
    "key": "x-portkey-api-key",
    "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-api-key"
  },
  {
    "key": "x-portkey-virtual-key",
    "value": "<mcp-env-var>X_PORTKEY_VIRTUAL_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_VIRTUAL_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-virtual-key"
  },
  {
    "key": "x-portkey-api-key",
    "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-api-key"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
  {
    "key": "x-portkey-provider",
    "value": "<mcp-env-var>X_PORTKEY_PROVIDER</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_PROVIDER",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-provider"
  },
  {
    "key": "x-portkey-api-key",
    "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-api-key"
  },
  {
    "key": "x-portkey-config",
    "value": "<mcp-env-var>X_PORTKEY_CONFIG</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_CONFIG",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-config"
  },
  {
    "key": "x-portkey-api-key",
    "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-api-key"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
  {
    "key": "x-portkey-provider",
    "value": "<mcp-env-var>X_PORTKEY_PROVIDER</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_PROVIDER",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-provider"
  },
  {
    "key": "x-portkey-custom-host",
    "value": "<mcp-env-var>X_PORTKEY_CUSTOM_HOST</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_CUSTOM_HOST",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-custom-host"
  }
]
export const keys = {
  "query": [
    "after",
    "limit"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "after": z.string().describe("A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional()
}