import { z } from "zod"

export const inputParamsSchema = {
  "start_date": z.string().describe("Date of initial earth disturbance provided in ISO 8601 format"),
  "end_date": z.string().describe("Date of final stabilization provided in ISO 8601 format"),
  "location": z.string().describe("Location to be examined for LEW eligibility provided as a GeoJSON point geometry"),
  "X-Api-Key": z.string().describe("API key used to access EPA web service resources. The below default value key is used for testing purposes only. Web service consumers should <a target=\"_blank\" href=\"..\\api_key_signup.html\">obtain their own API key</a>")
}