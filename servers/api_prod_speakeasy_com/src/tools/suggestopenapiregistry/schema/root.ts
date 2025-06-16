import { z } from "zod"

export const inputParamsSchema = {
  "namespace_name": z.string(),
  "revision_reference": z.string().describe("Tag or digest"),
  "oas_summary": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `oas_summary` to the tool, first call the tool `expandSchema` with \"/properties/oas_summary\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "suggestion_type": z.enum(["method-names","diagnostics-only"]),
  "diagnostics": z.array(z.object({ "message": z.string().describe("Message describing the issue"), "path": z.array(z.string()).describe("Schema path to the issue"), "type": z.string().describe("Issue type"), "helpMessage": z.string().describe("Help message for how to fix the issue").optional() })),
  "x-session-id": z.string()
}