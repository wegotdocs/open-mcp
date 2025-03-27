import { z } from "zod";
export const toolName = `get_v4_layers_scoutingobservations_scoutingobservationid_`;
export const toolDescription = `Retrieve individual scouting observation`;
export const baseUrl = `https://platform.climate.com`;
export const path = `/v4/layers/scoutingObservations/{scoutingObservationId}`;
export const method = `get`;
export const security = [
    {
        "key": "X-Api-Key",
        "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "X-Api-Key"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "scoutingObservationId": z.string().uuid().describe("Unique identifier of the Scouting Observation.") }).optional() }).shape;
