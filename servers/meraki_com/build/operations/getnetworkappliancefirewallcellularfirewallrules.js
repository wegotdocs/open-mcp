import { z } from "zod";
export const toolName = `getnetworkappliancefirewallcellularfirewallrules`;
export const toolDescription = `Return the cellular firewall rules for an MX network`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/networks/{networkId}/appliance/firewall/cellularFirewallRules`;
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
export const inputParams = z.object({ "path": z.object({ "networkId": z.string() }).optional() }).shape;
