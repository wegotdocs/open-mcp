import { z } from "zod";
export const toolName = `updatedevicewirelessbluetoothsettings`;
export const toolDescription = `Update the bluetooth settings for a wireless device`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/devices/{serial}/wireless/bluetooth/settings`;
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
export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "body": z.object({ "major": z.number().int().describe("Desired major value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.").optional(), "minor": z.number().int().describe("Desired minor value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.").optional(), "uuid": z.string().describe("Desired UUID of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.").optional() }).optional() }).shape;
