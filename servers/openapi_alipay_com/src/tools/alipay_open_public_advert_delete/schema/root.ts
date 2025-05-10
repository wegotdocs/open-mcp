import { z } from "zod"

export const inputParams = {
  "advert_id": z.string().describe("待删除的广告位id，删除通投广告位需传递此参数").optional(),
  "advert_group": z.string().describe("待删除的广告位分组标识，删除个性化广告位需传递此参数。").optional()
}