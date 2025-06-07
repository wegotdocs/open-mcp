import { z } from "zod"

export const inputParamsSchema = {
  "cluster_name": z.union([z.string(), z.null()]).describe("Optional EKS cluster name to filter instances").optional()
}