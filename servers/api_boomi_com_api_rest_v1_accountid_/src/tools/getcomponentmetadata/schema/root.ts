import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Required. Read only. The ID of the component. The component ID is available on the Revision History dialog, which you can access from the Build page in the service.")
}