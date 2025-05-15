import { z } from "zod"

export const inputParamsSchema = {
  "componentId": z.string().describe("The ID of the component. The component ID is available on the Revision History dialog, which you can access from the Build page in the service. This must be omitted for the CREATE operation but it is required for the UPDATE operation.")
}