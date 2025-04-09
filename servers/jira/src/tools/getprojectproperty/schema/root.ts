import { z } from "zod"

export const inputParams = {
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "propertyKey": z.string().describe("The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys.")
}