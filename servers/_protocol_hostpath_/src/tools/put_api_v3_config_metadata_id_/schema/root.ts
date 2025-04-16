import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "certificationCountry": z.enum(["au","br","ca","fr","de","gb","in","ie","it","nz","ro","es","us"]).optional()
}