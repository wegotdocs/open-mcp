import { z } from "zod"

export type ParamType = "path" | "query" | "body" | "header" | "cookie"

type InputParamsSchema = Record<string, z.ZodType>

// ParamMap keys are HTTP params which get sent
// ParamMap values are top-level params in `inputParamsSchema`
type ParamMap = Record<string, keyof InputParamsSchema>

type ParamsMap = Partial<Record<ParamType, ParamMap>>

export interface OpenMCPServerTool {
  toolName: string
  toolDescription: string
  baseUrl: string
  path: string
  method: string
  inputParamsSchema: InputParamsSchema
  paramsMap: ParamsMap
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
