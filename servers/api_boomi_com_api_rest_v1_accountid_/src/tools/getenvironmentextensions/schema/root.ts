import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the object. This can be either of the following: \n 1. The value of `environmentId`. \n 2. A conceptual ID synthesized from the environment ID (`environmentId`) and the ID of the multi-install integration pack to which the extension values apply (`extensionGroupId`).")
}