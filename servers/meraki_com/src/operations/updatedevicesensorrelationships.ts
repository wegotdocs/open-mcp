import { z } from "zod"

export const toolName = `updatedevicesensorrelationships`
export const toolDescription = `Assign one or more sensor roles to a given sensor or camera device.`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/devices/{serial}/sensor/relationships`
export const method = `put`
export const security = [
  {
    "key": "X-Cisco-Meraki-API-Key",
    "value": "<mcp-env-var>X_CISCO_MERAKI_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_CISCO_MERAKI_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "X-Cisco-Meraki-API-Key"
  }
]

export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "body": z.object({ "livestream": z.object({ "relatedDevices": z.array(z.object({ "serial": z.string().describe("The serial of the related device") })).describe("An array of the related devices for the role").optional() }).describe("A role defined between an MT sensor and an MV camera that adds the camera's livestream to the sensor's details page. Snapshots from the camera will also appear in alert notifications that the sensor triggers.").optional() }).optional() }).shape