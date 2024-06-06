// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { AssociateTimeSeriesToAssetPropertyRequest } from "../models/models_0";
import {
  de_AssociateTimeSeriesToAssetPropertyCommand,
  se_AssociateTimeSeriesToAssetPropertyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateTimeSeriesToAssetPropertyCommand}.
 */
export interface AssociateTimeSeriesToAssetPropertyCommandInput extends AssociateTimeSeriesToAssetPropertyRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTimeSeriesToAssetPropertyCommand}.
 */
export interface AssociateTimeSeriesToAssetPropertyCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates a time series (data stream) with an asset property.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, AssociateTimeSeriesToAssetPropertyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, AssociateTimeSeriesToAssetPropertyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // AssociateTimeSeriesToAssetPropertyRequest
 *   alias: "STRING_VALUE", // required
 *   assetId: "STRING_VALUE", // required
 *   propertyId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AssociateTimeSeriesToAssetPropertyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateTimeSeriesToAssetPropertyCommandInput - {@link AssociateTimeSeriesToAssetPropertyCommandInput}
 * @returns {@link AssociateTimeSeriesToAssetPropertyCommandOutput}
 * @see {@link AssociateTimeSeriesToAssetPropertyCommandInput} for command's `input` shape.
 * @see {@link AssociateTimeSeriesToAssetPropertyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 * @public
 */
export class AssociateTimeSeriesToAssetPropertyCommand extends $Command
  .classBuilder<
    AssociateTimeSeriesToAssetPropertyCommandInput,
    AssociateTimeSeriesToAssetPropertyCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTSiteWise", "AssociateTimeSeriesToAssetProperty", {})
  .n("IoTSiteWiseClient", "AssociateTimeSeriesToAssetPropertyCommand")
  .f(void 0, void 0)
  .ser(se_AssociateTimeSeriesToAssetPropertyCommand)
  .de(de_AssociateTimeSeriesToAssetPropertyCommand)
  .build() {}
