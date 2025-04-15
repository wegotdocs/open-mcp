import { z } from "zod"

export const inputParamsSchema = {
  "auth_plugin": z.enum(["mysql_native_password","caching_sha2_password"]).describe("A string specifying the authentication method to be used for connections\nto the MySQL user account. The valid values are `mysql_native_password`\nor `caching_sha2_password`. If excluded when creating a new user, the\ndefault for the version of MySQL in use will be used. As of MySQL 8.0, the\ndefault is `caching_sha2_password`.\n")
}