import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string(),
  "package_type": z.enum(["docker","file","python","npm","hackage","repository-jvm"]),
  "package_name": z.string()
}