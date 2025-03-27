import { SERVER_NAME } from "./constants.js"

export function enclose(str: string) {
  return `<mcp-env-var>${str}</mcp-env-var>`
}

export function getConfigExample(envVarNames: string[]) {
  return JSON.stringify(
    {
      mcpServers: {
        [SERVER_NAME]: {
          env: envVarNames.reduce((acc, envVarName) => {
            acc[envVarName] = "..."
            return acc
          }, {} as Record<string, string>),
          command: "...",
        },
      },
    },
    null,
    2
  )
}
