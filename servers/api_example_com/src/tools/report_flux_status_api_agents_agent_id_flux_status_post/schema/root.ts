import { z } from "zod"

export const inputParamsSchema = {
  "agent_id": z.string(),
  "b_agent_id": z.string(),
  "cluster": z.string(),
  "timestamp": z.string().datetime({ offset: true }).optional(),
  "failed_resources": z.array(z.object({ "name": z.string(), "namespace": z.string(), "kind": z.string(), "ready": z.boolean(), "status": z.string(), "message": z.union([z.string(), z.null()]).optional(), "last_transition_time": z.union([z.string().datetime({ offset: true }), z.null()]).optional(), "revision": z.union([z.string(), z.null()]).optional(), "suspended": z.boolean() }).describe("Status of a Flux resource")).optional(),
  "degraded_resources": z.array(z.object({ "name": z.string(), "namespace": z.string(), "kind": z.string(), "ready": z.boolean(), "status": z.string(), "message": z.union([z.string(), z.null()]).optional(), "last_transition_time": z.union([z.string().datetime({ offset: true }), z.null()]).optional(), "revision": z.union([z.string(), z.null()]).optional(), "suspended": z.boolean() }).describe("Status of a Flux resource")).optional(),
  "summary": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `summary` to the tool, first call the tool `expandSchema` with \"/properties/summary\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}