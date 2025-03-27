import { z } from "zod";
export const toolName = `updatedevice`;
export const toolDescription = `Update the attributes of a device`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/devices/{serial}`;
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
export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "body": z.object({ "address": z.string().describe("The address of a device").optional(), "floorPlanId": z.string().describe("The floor plan to associate to this device. null disassociates the device from the floorplan.").optional(), "lat": z.number().describe("The latitude of a device").optional(), "lng": z.number().describe("The longitude of a device").optional(), "moveMapMarker": z.boolean().describe("Whether or not to set the latitude and longitude of a device based on the new address. Only applies when lat and lng are not specified.").optional(), "name": z.string().describe("The name of a device").optional(), "notes": z.string().describe("The notes for the device. String. Limited to 255 characters.").optional(), "switchProfileId": z.string().describe("The ID of a switch profile to bind to the device (for available switch profiles, see the 'Switch Profiles' endpoint). Use null to unbind the switch device from the current profile. For a device to be bindable to a switch profile, it must (1) be a switch, and (2) belong to a network that is bound to a configuration template.").optional(), "tags": z.array(z.string()).describe("The list of tags of a device").optional() }).optional() }).shape;
