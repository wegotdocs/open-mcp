import { z } from "zod"

export const inputParamsSchema = {
  "login": z.string().regex(new RegExp("^(([^()\\[\\]\\\\.,;:\\s@\"]+(\\.[^()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9 -퟿豈-﷏ﷰ-￯]+\\.)+[a-zA-Z -퟿豈-﷏ﷰ-￯]{2,}))$")).max(128).describe("Login the user will need to enter, this will be the main identifier for the user"),
  "name": z.string().min(1).max(128).describe("Name of the user"),
  "email": z.string().regex(new RegExp("^(([^()\\[\\]\\\\.,;:\\s@\"]+(\\.[^()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9 -퟿豈-﷏ﷰ-￯]+\\.)+[a-zA-Z -퟿豈-﷏ﷰ-￯]{2,}))$")).max(128).optional(),
  "password": z.string().min(1).max(128).optional(),
  "profile": z.string().min(1).max(64).describe("Profile to assign the user in the organisation"),
  "organisation": z.string().min(1).max(128).optional(),
  "avatar": z.string().base64().describe("ignored in json body").optional(),
  "type": z.enum(["Service","Normal"]).describe("Normal or Service. A service user cannot use the ui and needs to provide an api key for authentication").optional()
}