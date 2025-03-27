import { z } from "zod";
export const toolName = `getdevicelossandlatencyhistory`;
export const toolDescription = `Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/devices/{serial}/lossAndLatencyHistory`;
export const method = `get`;
export const security = [
    {
        "key": "X-Cisco-Meraki-API-Key",
        "value": "<mcp-env-var>X_CISCO_MERAKI_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_CISCO_MERAKI_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "X-Cisco-Meraki-API-Key"
    }
];
export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "query": z.object({ "t0": z.string().describe("The beginning of the timespan for the data. The maximum lookback period is 60 days from today.").optional(), "t1": z.string().describe("The end of the timespan for the data. t1 can be a maximum of 31 days after t0.").optional(), "timespan": z.number().describe("The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.").optional(), "resolution": z.number().int().describe("The time resolution in seconds for returned data. The valid resolutions are: 60, 600, 3600, 86400. The default is 60.").optional(), "uplink": z.enum(["cellular", "wan1", "wan2"]).describe("The WAN uplink used to obtain the requested stats. Valid uplinks are wan1, wan2, cellular. The default is wan1.").optional(), "ip": z.string().describe("The destination IP used to obtain the requested stats. This is required.") }).optional() }).shape;
