import { z } from "zod";
export const toolName = `updatedevicecellularsims`;
export const toolDescription = `Updates the SIM and APN configurations for a cellular device.`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/devices/{serial}/cellular/sims`;
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
export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "body": z.object({ "simFailover": z.object({ "enabled": z.boolean().describe("Failover to secondary SIM (optional)").optional() }).describe("SIM Failover settings.").optional(), "sims": z.array(z.object({ "apns": z.array(z.object({ "allowedIpTypes": z.array(z.string()).describe("IP versions to support (permitted values include 'ipv4', 'ipv6')."), "authentication": z.object({ "password": z.string().describe("APN password, if type is set (if APN password is not supplied, the password is left unchanged).").optional(), "type": z.enum(["chap", "none", "pap"]).describe("APN auth type."), "username": z.string().describe("APN username, if type is set.").optional() }).describe("APN authentication configurations.").optional(), "name": z.string().describe("APN name.") })).describe("APN configurations. If empty, the default APN will be used."), "isPrimary": z.boolean().describe("If true, this SIM is used for boot. Must be true on single-sim devices."), "slot": z.enum(["sim1", "sim2"]).describe("SIM slot being configured. Must be 'sim1' on single-sim devices.").optional() })).describe("List of SIMs. If a SIM was previously configured and not specified in this request, it will remain unchanged.").optional() }).optional() }).shape;
