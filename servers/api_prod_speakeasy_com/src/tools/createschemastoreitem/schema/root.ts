import { z } from "zod"

export const inputParamsSchema = {
  "spec": z.string().describe("The OpenAPI specification to store."),
  "packageName": z.string().describe("The package name to use in code snippets / quickstart."),
  "sdkClassname": z.string().describe("The classname of the SDK to use in code snippets / quickstart."),
  "format": z.enum(["json","yaml"]).describe("The format of the OpenAPI specification.")
}