import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("ID of the requested company. This is required and must be specified in the URL path. The value must match the id from the company linked to the API key."),
  "a2p_campaign_id": z.number().int().describe("Optional company A2P campaign entity id to filter results by. Note, if set,\nthen the parameter 'opt_out_state' must be also set to the value 'opted_out'.").optional(),
  "cursor": z.string().describe("Optional token used to return the next page of a previous request. Use the cursor provided in the previous response.").optional(),
  "opt_out_state": z.enum(["opted_back_in","opted_out"]).describe("Required opt-out state to filter results by. Only results matching this state will be returned.")
}