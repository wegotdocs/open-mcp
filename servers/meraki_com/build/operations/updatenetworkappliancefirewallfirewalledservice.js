import { z } from "zod";
export const toolName = `updatenetworkappliancefirewallfirewalledservice`;
export const toolDescription = `Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/networks/{networkId}/appliance/firewall/firewalledServices/{service}`;
export const method = `put`;
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
export const inputParams = z.object({ "path": z.object({ "networkId": z.string(), "service": z.string() }).optional(), "body": z.object({ "access": z.enum(["blocked", "restricted", "unrestricted"]).describe("A string indicating the rule for which IPs are allowed to use the specified service. Acceptable values are \"blocked\" (no remote IPs can access the service), \"restricted\" (only allowed IPs can access the service), and \"unrestriced\" (any remote IP can access the service). This field is required"), "allowedIps": z.array(z.string()).describe("An array of allowed IPs that can access the service. This field is required if \"access\" is set to \"restricted\". Otherwise this field is ignored").optional() }).optional() }).shape;
