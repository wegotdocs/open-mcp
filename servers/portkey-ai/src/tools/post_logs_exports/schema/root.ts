import { z } from "zod"

export const inputParamsSchema = {
  "workspace_id": z.string().optional(),
  "filters": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `filters` to the tool, first call the tool `expandSchema` with \"/properties/filters\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "requested_data": z.array(z.enum(["id","trace_id","created_at","request","response","is_success","ai_org","ai_model","req_units","res_units","total_units","request_url","cost","cost_currency","response_time","response_status_code","mode","config","prompt_slug","metadata"]))
}