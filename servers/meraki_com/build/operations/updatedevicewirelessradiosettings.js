import { z } from "zod";
export const toolName = `updatedevicewirelessradiosettings`;
export const toolDescription = `Update the radio settings of a device`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/devices/{serial}/wireless/radio/settings`;
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
export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "body": z.object({ "fiveGhzSettings": z.object({ "channel": z.union([z.literal(36), z.literal(40), z.literal(44), z.literal(48), z.literal(52), z.literal(56), z.literal(60), z.literal(64), z.literal(100), z.literal(104), z.literal(108), z.literal(112), z.literal(116), z.literal(120), z.literal(124), z.literal(128), z.literal(132), z.literal(136), z.literal(140), z.literal(144), z.literal(149), z.literal(153), z.literal(157), z.literal(161), z.literal(165), z.literal(169), z.literal(173), z.literal(177)]).describe("Sets a manual channel for 5 GHz. Can be '36', '40', '44', '48', '52', '56', '60', '64', '100', '104', '108', '112', '116', '120', '124', '128', '132', '136', '140', '144', '149', '153', '157', '161', '165', '169', '173' or '177' or null for using auto channel.").optional(), "channelWidth": z.union([z.literal(0), z.literal(20), z.literal(40), z.literal(80), z.literal(160)]).describe("Sets a manual channel for 5 GHz. Can be '0', '20', '40', '80' or '160' or null for using auto channel width.").optional(), "targetPower": z.number().int().describe("Set a manual target power for 5 GHz. Can be between '8' or '30' or null for using auto power range.").optional() }).describe("Manual radio settings for 5 GHz.").optional(), "rfProfileId": z.string().describe("The ID of an RF profile to assign to the device. If the value of this parameter is null, the appropriate basic RF profile (indoor or outdoor) will be assigned to the device. Assigning an RF profile will clear ALL manually configured overrides on the device (channel width, channel, power).").optional(), "twoFourGhzSettings": z.object({ "channel": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12), z.literal(13), z.literal(14)]).describe("Sets a manual channel for 2.4 GHz. Can be '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13' or '14' or null for using auto channel.").optional(), "targetPower": z.number().int().describe("Set a manual target power for 2.4 GHz. Can be between '5' or '30' or null for using auto power range.").optional() }).describe("Manual radio settings for 2.4 GHz.").optional() }).optional() }).shape;
