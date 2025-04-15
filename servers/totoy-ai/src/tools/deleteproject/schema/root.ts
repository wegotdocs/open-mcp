import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.string().regex(new RegExp("^pj_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a `Project` created in Totoy.")
}