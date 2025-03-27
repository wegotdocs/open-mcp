import { z } from "zod";
export const toolName = `createdeviceswitchroutingstaticroute`;
export const toolDescription = `Create a layer 3 static route for a switch`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/devices/{serial}/switch/routing/staticRoutes`;
export const method = `post`;
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
export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "body": z.object({ "advertiseViaOspfEnabled": z.boolean().describe("Option to advertise static route via OSPF").optional(), "name": z.string().describe("Name or description for layer 3 static route").optional(), "nextHopIp": z.string().describe("IP address of the next hop device to which the device sends its traffic for the subnet"), "preferOverOspfRoutesEnabled": z.boolean().describe("Option to prefer static route over OSPF routes").optional(), "subnet": z.string().describe("The subnet which is routed via this static route and should be specified in CIDR notation (ex. 1.2.3.0/24)") }).optional() }).shape;
