import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted."),
  "email": z.string().describe("The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted."),
  "date": z.string().optional()
}