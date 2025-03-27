import { z } from "zod";
export const toolName = `updatedevicecameraqualityandretention`;
export const toolDescription = `Update quality and retention settings for the given camera`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/devices/{serial}/camera/qualityAndRetention`;
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
export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "body": z.object({ "audioRecordingEnabled": z.boolean().describe("Boolean indicating if audio recording is enabled(true) or disabled(false) on the camera").optional(), "motionBasedRetentionEnabled": z.boolean().describe("Boolean indicating if motion-based retention is enabled(true) or disabled(false) on the camera.").optional(), "motionDetectorVersion": z.union([z.literal(1), z.literal(2)]).describe("The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.").optional(), "profileId": z.string().describe("The ID of a quality and retention profile to assign to the camera. The profile's settings will override all of the per-camera quality and retention settings. If the value of this parameter is null, any existing profile will be unassigned from the camera.").optional(), "quality": z.enum(["Enhanced", "High", "Standard"]).describe("Quality of the camera. Can be one of 'Standard', 'High' or 'Enhanced'. Not all qualities are supported by every camera model.").optional(), "resolution": z.enum(["1080x1080", "1280x720", "1920x1080", "2058x2058", "2112x2112", "2688x1512", "2880x2880", "3840x2160"]).describe("Resolution of the camera. Can be one of '1280x720', '1920x1080', '1080x1080', '2058x2058', '2112x2112', '2880x2880', '2688x1512' or '3840x2160'.Not all resolutions are supported by every camera model.").optional(), "restrictedBandwidthModeEnabled": z.boolean().describe("Boolean indicating if restricted bandwidth is enabled(true) or disabled(false) on the camera. This setting does not apply to MV2 cameras.").optional() }).optional() }).shape;
