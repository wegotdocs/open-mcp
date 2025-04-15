import { z } from "zod"

export const inputParamsSchema = {
  "deploymentType": z.enum(["all","preview","prod_deployment_urls_and_all_previews"]).describe("Specify if the Vercel Authentication (SSO Protection) will apply to every Deployment Target or just Preview")
}