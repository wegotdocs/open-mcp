import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Prompt."),
  "log_id": z.string().describe("Unique identifier for the Log."),
  "output": z.string().describe("Generated output from your model for the provided inputs. Can be `None` if logging an error, or if creating a parent Log with the intention to populate it later.").optional(),
  "created_at": z.string().datetime({ offset: true }).describe("User defined timestamp for when the log was created. ").optional(),
  "error": z.string().describe("Error message if the log is an error.").optional(),
  "provider_latency": z.number().describe("Duration of the logged event in seconds.").optional(),
  "stdout": z.string().describe("Captured log and debug statements.").optional(),
  "provider_request": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `provider_request` to the tool, first call the tool `expandSchema` with \"/properties/provider_request\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Raw request sent to provider.</property-description>").optional(),
  "provider_response": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `provider_response` to the tool, first call the tool `expandSchema` with \"/properties/provider_response\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Raw response received the provider.</property-description>").optional(),
  "inputs": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `inputs` to the tool, first call the tool `expandSchema` with \"/properties/inputs\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The inputs passed to the prompt template.</property-description>").optional(),
  "source": z.string().describe("Identifies where the model was called from.").optional(),
  "metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `metadata` to the tool, first call the tool `expandSchema` with \"/properties/metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Any additional metadata to record.</property-description>").optional(),
  "start_time": z.string().datetime({ offset: true }).describe("When the logged event started.").optional(),
  "end_time": z.string().datetime({ offset: true }).describe("When the logged event ended.").optional(),
  "log_status": z.string().optional()
}