import { z } from "zod"

export const inputParamsSchema = {
  "ReleasePackagedComponent": z.array(z.object({ "componentId": z.string().describe("The ID of the component.").optional(), "releasedVersion": z.string().describe("The released version of the packaged component.").optional(), "version": z.string().describe("Packaged component version of the component that will be included in the next release of this integration pack.").optional() }))
}