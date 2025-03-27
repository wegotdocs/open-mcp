import { z } from "zod";
export const toolName = `updatenetworkalertssettings`;
export const toolDescription = `Update the alert configuration for this network`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/networks/{networkId}/alerts/settings`;
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
export const inputParams = z.object({ "path": z.object({ "networkId": z.string() }).optional(), "body": z.object({ "alerts": z.array(z.object({ "alertDestinations": z.object({ "allAdmins": z.boolean().describe("If true, then all network admins will receive emails for this alert").optional(), "emails": z.array(z.string()).describe("A list of emails that will receive information about the alert").optional(), "httpServerIds": z.array(z.string()).describe("A list of HTTP server IDs to send a Webhook to for this alert").optional(), "snmp": z.boolean().describe("If true, then an SNMP trap will be sent for this alert if there is an SNMP trap server configured for this network").optional() }).describe("A hash of destinations for this specific alert").optional(), "enabled": z.boolean().describe("A boolean depicting if the alert is turned on or off").optional(), "filters": z.object({}).describe("A hash of specific configuration data for the alert. Only filters specific to the alert will be updated.").optional(), "type": z.string().describe("The type of alert") })).describe("Alert-specific configuration for each type. Only alerts that pertain to the network can be updated.").optional(), "defaultDestinations": z.object({ "allAdmins": z.boolean().describe("If true, then all network admins will receive emails.").optional(), "emails": z.array(z.string()).describe("A list of emails that will recieve the alert(s).").optional(), "httpServerIds": z.array(z.string()).describe("A list of HTTP server IDs to send a Webhook to").optional(), "snmp": z.boolean().describe("If true, then an SNMP trap will be sent if there is an SNMP trap server configured for this network.").optional() }).describe("The network-wide destinations for all alerts on the network.").optional() }).optional() }).shape;
