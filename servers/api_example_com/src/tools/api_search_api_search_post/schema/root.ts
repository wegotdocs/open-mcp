import { z } from "zod"

export const inputParamsSchema = {
  "query": z.string().describe("The query to search for (email address or phone number)."),
  "query_type": z.enum(["email","phone"]).describe("The type of query used to retrieve the profile"),
  "networks": z.array(z.string()).describe("A list of platforms to search. Specify platform names such as 'google', 'facebook', or 'chess'. Use 'all' to search across all platforms.")
}