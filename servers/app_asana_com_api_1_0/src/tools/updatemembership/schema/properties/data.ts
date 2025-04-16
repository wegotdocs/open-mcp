import { z } from "zod"

export const inputParamsSchema = {
  "access_level": z.string().describe("Sets the access level for the member. Goals can have access levels `editor` or `commenter`. Projects can have access levels `admin`, `editor` or `commenter`. Portfolios can have access levels `admin`, `editor` or `viewer`. Custom Fields can have access levels `admin`, `editor` or `user`.").optional()
}