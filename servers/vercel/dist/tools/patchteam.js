import { z } from "zod";
export const toolName = `patchteam`;
export const toolDescription = `Update a Team`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v2/teams/{teamId}`;
export const method = `patch`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const keys = {
    "query": [
        "slug"
    ],
    "header": [],
    "path": [
        "teamId"
    ],
    "cookie": [],
    "body": [
        "avatar",
        "description",
        "emailDomain",
        "name",
        "previewDeploymentSuffix",
        "regenerateInviteCode",
        "saml",
        "b_slug",
        "enablePreviewFeedback",
        "enableProductionFeedback",
        "sensitiveEnvironmentVariablePolicy",
        "remoteCaching",
        "hideIpAddresses",
        "hideIpAddressesInLogDrains"
    ]
};
export const flatMap = {
    "b_slug": "slug"
};
export const inputParams = z.object({ "teamId": z.string().describe("The Team identifier to perform the request on behalf of."), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(), "avatar": z.string().describe("The hash value of an uploaded image.").optional(), "description": z.string().max(140).describe("A short text that describes the team.").optional(), "emailDomain": z.string().nullable().optional(), "name": z.string().max(256).describe("The name of the team.").optional(), "previewDeploymentSuffix": z.string().nullable().describe("Suffix that will be used for all preview deployments.").optional(), "regenerateInviteCode": z.boolean().describe("Create a new invite code and replace the current one.").optional(), "saml": z.object({ "enforced": z.boolean().describe("Require that members of the team use SAML Single Sign-On.").optional(), "roles": z.record(z.union([z.enum(["OWNER", "MEMBER", "DEVELOPER", "SECURITY", "BILLING", "VIEWER", "CONTRIBUTOR"]), z.object({ "accessGroupId": z.string().regex(new RegExp("^ag_[A-z0-9_ -]+$")) }).strict()])).describe("Directory groups to role or access group mappings.").optional() }).strict().optional(), "b_slug": z.string().describe("A new slug for the team.").optional(), "enablePreviewFeedback": z.string().describe("Enable preview toolbar: one of on, off or default.").optional(), "enableProductionFeedback": z.string().describe("Enable production toolbar: one of on, off or default.").optional(), "sensitiveEnvironmentVariablePolicy": z.string().describe("Sensitive environment variable policy: one of on, off or default.").optional(), "remoteCaching": z.object({ "enabled": z.boolean().describe("Enable or disable remote caching for the team.").optional() }).strict().describe("Whether or not remote caching is enabled for the team").optional(), "hideIpAddresses": z.boolean().describe("Display or hide IP addresses in Monitoring queries.").optional(), "hideIpAddressesInLogDrains": z.boolean().describe("Display or hide IP addresses in Log Drains.").optional() }).shape;
