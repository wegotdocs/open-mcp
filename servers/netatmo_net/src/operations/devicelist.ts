import { z } from "zod"

export const toolName = `devicelist`
export const toolDescription = `The method devicelist returns the list of devices owned by the user, and their modules.
A device is identified by its _id (which is its mac address) and each device may have one, several or no modules, also identified by an _id.`
export const baseUrl = `https://api.netatmo.net/api`
export const path = `/devicelist`
export const method = `get`
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

export const inputParams = z.object({ "query": z.object({ "app_type": z.enum(["app_thermostat","app_station"]).describe("Defines which device type will be returned by devicelist. It could be app_thermostat or app_station (by default if not provided)").optional(), "device_id": z.string().describe("Specify a device_id if you want to retrieve only this device informations.").optional(), "get_favorites": z.boolean().describe("When set to \"true\", the favorite devices of the user are returned. This flag is available only if the devices requested are Weather Stations.") }).optional() }).shape