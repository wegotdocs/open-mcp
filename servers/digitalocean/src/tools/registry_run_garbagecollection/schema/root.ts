import { z } from "zod"

export const inputParams = {
  "registry_name": z.string().describe("The name of a container registry.")
}