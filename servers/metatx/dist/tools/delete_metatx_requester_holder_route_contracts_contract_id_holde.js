import { z } from "zod";
export const toolName = `delete_metatx_requester_holder_route_contracts_contract_id_holde`;
export const toolDescription = `Delete Metatx Requester Holder Route`;
export const baseUrl = `https://engineapi.moonstream.to/metatx`;
export const path = `/contracts/{contract_id}/holders`;
export const method = `delete`;
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
    "query": [],
    "header": [],
    "path": [
        "contract_id"
    ],
    "cookie": [],
    "body": [
        "holder_id",
        "holder_type",
        "permissions"
    ]
};
export const flatMap = {};
export const inputParams = {
    "contract_id": z.string().uuid(),
    "holder_id": z.string().uuid(),
    "holder_type": z.enum(["user", "group"]).describe("An enumeration."),
    "permissions": z.array(z.enum(["admin", "create", "read", "update", "delete"]).describe("An enumeration.")).optional()
};
