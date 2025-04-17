import { z } from "zod"

export const toolName = `getloraendpointconnections`
export const toolDescription = `Retrieve endpoint connections for a LoRa device`
export const baseUrl = `https://api.example.com`
export const path = `/api/v1/device/lora/{deviceName}/{nodeId}`
export const method = `get`
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
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "deviceName",
    "nodeId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "deviceName": z.string(),
  "nodeId": z.string()
}