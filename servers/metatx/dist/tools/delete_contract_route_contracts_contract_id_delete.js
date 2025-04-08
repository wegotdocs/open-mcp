import { z } from "zod";
export const toolName = `delete_contract_route_contracts_contract_id_delete`;
export const toolDescription = `Delete Contract Route`;
export const baseUrl = `https://engineapi.moonstream.to/metatx`;
export const path = `/contracts/{contract_id}`;
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
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "contract_id": z.string().uuid()
};
