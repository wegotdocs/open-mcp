import { z } from "zod"

export const toolName = `calculatematrix`
export const toolDescription = `Batch Matrix Endpoint`
export const baseUrl = `https://graphhopper.com/api/1`
export const path = `/matrix/calculate`
export const method = `post`
export const security = [
  {
    "key": "key",
    "value": "<mcp-env-var>KEY</mcp-env-var>",
    "in": "query",
    "envVarName": "KEY",
    "schemeType": "apiKey",
    "schemeName": "key"
  }
]

export const inputParams = z.object({ "body": z.object({ "fail_fast": z.boolean().describe("Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation)."), "from_curbsides": z.array(z.string()).describe("See `curbsides`of symmetrical matrix").optional(), "from_point_hints": z.array(z.string()).describe("See `point_hints`of symmetrical matrix").optional(), "from_points": z.array(z.array(z.number())).describe("The starting points for the routes in an array of `[longitude,latitude]`. For instance, if you want to calculate three routes from point A such as A->1, A->2, A->3 then you have one `from_point` parameter and three `to_point` parameters.").optional(), "out_arrays": z.array(z.string()).describe("Specifies which matrices should be included in the response. Specify one or more of the following options `weights`, `times`, `distances`. The units of the entries of `distances` are meters, of `times` are seconds and of `weights` is arbitrary and it can differ for different vehicles or versions of this API.").optional(), "snap_preventions": z.array(z.string()).describe("See `snap_preventions` of symmetrical matrix").optional(), "to_curbsides": z.array(z.string()).describe("See `curbsides`of symmetrical matrix").optional(), "to_point_hints": z.array(z.string()).describe("See `point_hints`of symmetrical matrix").optional(), "to_points": z.array(z.array(z.number())).describe("The destination points for the routes in an array of `[longitude,latitude]`.").optional(), "turn_costs": z.boolean().describe("Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap."), "vehicle": z.string().optional() }).optional() }).shape