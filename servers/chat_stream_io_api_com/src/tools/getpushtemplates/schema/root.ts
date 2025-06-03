import { z } from "zod"

export const inputParamsSchema = {
  "push_provider_name": z.string().describe("Push provider name to filter templates").optional(),
  "push_provider_type": z.enum(["firebase","apn"]).describe("Push provider type (firebase, apn) to filter templates")
}