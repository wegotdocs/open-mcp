import { z } from "zod"

export const inputParams = {
  "deploymentType": z.enum(["all","preview","prod_deployment_urls_and_all_previews"]).describe("Specify if the password will apply to every Deployment Target or just Preview"),
  "password": z.string().max(72).nullable().describe("The password that will be used to protect Project Deployments").optional()
}