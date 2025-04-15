import { z } from "zod"

export const inputParamsSchema = {
  "registry_name": z.string().describe("The name of a container registry."),
  "garbage_collection_uuid": z.string().describe("The UUID of a garbage collection run."),
  "cancel": z.boolean().describe("A boolean value indicating that the garbage collection should be cancelled.").optional()
}