import { z } from "zod"

export const inputParamsSchema = {
  "registry_name": z.string().describe("The name of a container registry.")
}