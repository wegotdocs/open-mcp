import { z } from "zod";
export const toolName = `patch_spaces_id_persons_memberid_player`;
export const toolDescription = `Modify the role of a person`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/spaces/{id}/persons/{memberId}/player`;
export const method = `patch`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space"), "memberId": z.string().describe("memberId of the person") }).optional(), "body": z.object({ "ClientManagement": z.enum(["no", "manager", "adn"]).optional(), "IsAdmin": z.boolean().optional(), "Player": z.enum(["guest", "owner", "manager", "assistant", "collaborator"]), "PlayerEnd": z.string().optional() }).optional() }).shape;
