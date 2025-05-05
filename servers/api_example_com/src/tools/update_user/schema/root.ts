import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "name": z.string().min(1).max(128).optional(),
  "organisation": z.string().min(1).max(128).describe("When updating the profile, use this field to determine the organisation to update").optional(),
  "profile": z.string().min(1).max(64).describe("Requires admin permission to update this field").optional(),
  "locked": z.boolean().describe("Requires admin permission to update this field").optional(),
  "avatar": z.string().optional(),
  "email": z.string().regex(new RegExp("^(([^()\\[\\]\\\\.,;:\\s@\"]+(\\.[^()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9 -퟿豈-﷏ﷰ-￯]+\\.)+[a-zA-Z -퟿豈-﷏ﷰ-￯]{2,}))$")).max(128).optional(),
  "defaultOrganisation": z.string().min(1).max(128).optional(),
  "type": z.enum(["Service","Normal"]).describe("Normal or Service. A service user cannot use the ui and needs to provide an api key for authentication").optional()
}