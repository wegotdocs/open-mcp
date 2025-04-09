export { inputParams } from "./schema/root.js";
export const toolName = `updateuser`;
export const toolDescription = `Update user resource.`;
export const baseUrl = `https://petstore3.swagger.io/api/v3`;
export const path = `/user/{username}`;
export const method = `put`;
export const security = [];
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "username"
    ],
    "cookie": [],
    "body": [
        "id",
        "b_username",
        "firstName",
        "lastName",
        "email",
        "password",
        "phone",
        "userStatus"
    ]
};
export const flatMap = {
    "b_username": "username"
};
