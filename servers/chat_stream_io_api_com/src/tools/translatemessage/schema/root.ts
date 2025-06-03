import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Message ID"),
  "language": z.enum(["af","sq","am","ar","az","bn","bs","bg","zh","zh-TW","hr","cs","da","fa-AF","nl","en","et","fi","fr","fr-CA","ka","de","el","ha","he","hi","hu","id","it","ja","ko","lv","ms","no","fa","ps","pl","pt","ro","ru","sr","sk","sl","so","es","es-MX","sw","sv","tl","ta","th","tr","uk","ur","vi","lt","ht"]).describe("Language to translate message to")
}