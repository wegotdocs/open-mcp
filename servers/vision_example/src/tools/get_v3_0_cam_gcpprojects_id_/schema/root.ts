import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(30).describe("The GCP project number Cloud Account Management uses for managing the connected GCP project.")
}