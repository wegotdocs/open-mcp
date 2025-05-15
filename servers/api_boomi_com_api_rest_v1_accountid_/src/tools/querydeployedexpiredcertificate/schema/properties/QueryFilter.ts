import { z } from "zod"

export const inputParamsSchema = {
  "expression": z.object({ "argument": z.array(z.string()).optional(), "operator": z.literal("LESS_THAN_OR_EQUAL"), "property": z.enum(["containerId","containerName","environmentId","environmentName","expirationBoundary"]) })
}