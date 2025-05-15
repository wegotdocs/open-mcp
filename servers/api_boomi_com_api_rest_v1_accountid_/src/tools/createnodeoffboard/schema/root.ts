import { z } from "zod"

export const inputParamsSchema = {
  "atomId": z.string().describe("A unique, -generated identifier assigned to the Runtime cluster or Runtime cloud. In the  user interface, this ID appears on the **Runtime Information** panel of Runtime Management.").optional(),
  "nodeId": z.array(z.string()).describe("The ID of the Runtime cluster or Cloud node that is intended for deletion. In the  user interface, this ID appears on the **Cluster Status** panel of Runtime Management.").optional()
}