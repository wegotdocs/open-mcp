import { z } from "zod"

export const inputParamsSchema = {
  "componentId": z.string().describe("The ID of the secondary component. The component ID is available in the **Revision History** dialog, which you can access from the **Build** page in the service.")
}