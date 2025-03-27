import { z } from "zod"

export const toolName = `post_bulkjobs_v4_deviceuploads`
export const toolDescription = `Starts bulk upload`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/bulkjobs/v4/deviceUploads`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "query": z.object({ "fileName": z.string().min(1).max(50).describe("The name of the upload file.").optional() }).optional(), "body": z.array(z.object({ "areaBased": z.boolean().describe("True if device should be configured to be in area based mode.\nArea based mode can be set to true only if device has maximum of 3 associated geofences.\n"), "distanceM": z.number().gte(0).describe("Send an update if the device has moved farther than the specified distance in meters").optional(), "geofences": z.array(z.string().uuid().describe("Geofence ID")).max(10).describe("Geofence IDs to be associated with the device").optional(), "name": z.string().min(1).max(50).describe("The name of the device. Must be unique within a project."), "rules": z.array(z.string().uuid().describe("An ID of a rule or a sensor rule")).max(10).describe("Rule or sensor rule IDs to be associated with the device").optional(), "sampleMs": z.number().gte(0).describe("The rate at which to sample signals in milliseconds").optional(), "sendMs": z.number().gte(0).describe("The rate at which to send sample results in milliseconds").optional(), "tags": z.array(z.string().describe("Arbitrary tag to be assigned to the device")).max(10).describe("Arbitrary tags to be assigned to the device").optional(), "type": z.string().min(1).max(50).describe("The type of the asset. Can be any user defined string, but if one of the following types is\nselected, the asset icon in asset.tracking.here.com application will be changed accordingly:\n\n* `Phone`\n* `Heavy Machinery`\n* `Tracker`\n* `Airport / Air Cargo`\n* `Warehouse`\n* `Returnable / Reusable`\n* `Generic`\n* `Hospital`\n").optional() }).strict()).optional() }).shape