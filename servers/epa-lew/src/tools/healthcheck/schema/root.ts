import { z } from "zod"

export const inputParamsSchema = {
  "X-Api-Key": z.string().describe("API key used to access EPA web service resources. The below default value key is used for testing purposes only. Web service consumers should <a target=\"_blank\" href=\"..\\api_key_signup.html\">obtain their own API key</a>")
}