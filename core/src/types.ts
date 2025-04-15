import { z } from "zod"

export type ParamType = "path" | "query" | "body" | "header" | "cookie"

type ParamKeys = {
  [key in ParamType]: string[]
}

export interface OpenMCPServerTool {
  toolName: string
  toolDescription: string
  baseUrl: string
  path: string
  method: string
  inputParams: {
    [key: string]: z.ZodType
  }
  keys: ParamKeys
  flatMap: Record<string, string>
  security: Array<{
    key: string
    value: string
    in: "header" | "query" | "cookie"
    envVarName: string
    // schemeType: string
    // schemeScheme?: string
    // schemeName?: string
  }>
}
