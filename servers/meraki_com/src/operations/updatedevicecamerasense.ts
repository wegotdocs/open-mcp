import { z } from "zod"

export const toolName = `updatedevicecamerasense`
export const toolDescription = `Update sense settings for the given camera`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/devices/{serial}/camera/sense`
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

export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "body": z.object({ "audioDetection": z.object({ "enabled": z.boolean().describe("Boolean indicating if audio detection is enabled(true) or disabled(false) on the camera").optional() }).describe("The details of the audio detection config.").optional(), "detectionModelId": z.string().describe("The ID of the object detection model").optional(), "mqttBrokerId": z.string().describe("The ID of the MQTT broker to be enabled on the camera. A value of null will disable MQTT on the camera").optional(), "senseEnabled": z.boolean().describe("Boolean indicating if sense(license) is enabled(true) or disabled(false) on the camera").optional() }).optional() }).shape