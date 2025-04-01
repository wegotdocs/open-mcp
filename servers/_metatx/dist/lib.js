import { SERVER_NAME } from "./constants.js";
export function enclose(str) {
    return `<mcp-env-var>${str}</mcp-env-var>`;
}
export function getConfigExample(envVarNames) {
    return JSON.stringify({
        mcpServers: {
            [SERVER_NAME]: {
                env: envVarNames.reduce((acc, envVarName) => {
                    acc[envVarName] = "...";
                    return acc;
                }, {}),
                command: "...",
            },
        },
    }, null, 2);
}
export function unflatten({ flat, keys, flatMap, }) {
    return Object.entries(keys).reduce((acc, [paramType, paramTypeKeys]) => {
        acc[paramType] = paramTypeKeys.reduce((paramObj, flatKey) => {
            const originalKey = flatMap[flatKey] || flatKey;
            paramObj[originalKey] = flat[flatKey];
            return paramObj;
        }, {});
        return acc;
    }, {});
}
