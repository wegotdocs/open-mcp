import { z } from "zod"

export const inputParamsSchema = {
  "instanceId": z.string(),
  "projectId": z.string(),
  "remoteWriteMaxLimit": z.number().describe("Remote write metric sample limit for credential to push in a single minute.").optional(),
  "Authorization": z.string().describe("Accepts system permissions.")
}