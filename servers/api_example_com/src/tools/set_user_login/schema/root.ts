import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "login": z.string().regex(new RegExp("^(([^()\\[\\]\\\\.,;:\\s@\"]+(\\.[^()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9 -퟿豈-﷏ﷰ-￯]+\\.)+[a-zA-Z -퟿豈-﷏ﷰ-￯]{2,}))$")).max(128)
}