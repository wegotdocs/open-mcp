import { z } from "zod"

export const inputParamsSchema = {
  "namespace_name": z.string(),
  "revision_digest": z.string().describe("revision digest to add tags too sha256:..."),
  "tags": z.array(z.string()).describe("string tags to add to the revision")
}