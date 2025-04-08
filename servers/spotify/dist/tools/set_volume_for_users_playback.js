import { z } from "zod";
export const toolName = `set_volume_for_users_playback`;
export const toolDescription = `Set Playback Volume`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/me/player/volume`;
export const method = `put`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const keys = {
    "query": [
        "volume_percent",
        "device_id"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "volume_percent": z.number().int().describe("The volume to set. Must be a value from 0 to 100 inclusive.\n"),
    "device_id": z.string().describe("The id of the device this command is targeting. If not supplied, the user's currently active device is the target.\n").optional()
};
