// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetLaunchProfileRequest,
  GetLaunchProfileResponse,
  GetLaunchProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_GetLaunchProfileCommand, se_GetLaunchProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLaunchProfileCommand}.
 */
export interface GetLaunchProfileCommandInput extends GetLaunchProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetLaunchProfileCommand}.
 */
export interface GetLaunchProfileCommandOutput extends GetLaunchProfileResponse, __MetadataBearer {}

/**
 * <p>Get a launch profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetLaunchProfileCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetLaunchProfileCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // GetLaunchProfileRequest
 *   launchProfileId: "STRING_VALUE", // required
 *   studioId: "STRING_VALUE", // required
 * };
 * const command = new GetLaunchProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetLaunchProfileResponse
 * //   launchProfile: { // LaunchProfile
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     createdBy: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     ec2SubnetIds: [ // EC2SubnetIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     launchProfileId: "STRING_VALUE",
 * //     launchProfileProtocolVersions: [ // LaunchProfileProtocolVersionList
 * //       "STRING_VALUE",
 * //     ],
 * //     name: "STRING_VALUE",
 * //     state: "CREATE_IN_PROGRESS" || "READY" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DELETE_FAILED" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //     statusCode: "LAUNCH_PROFILE_CREATED" || "LAUNCH_PROFILE_UPDATED" || "LAUNCH_PROFILE_DELETED" || "LAUNCH_PROFILE_CREATE_IN_PROGRESS" || "LAUNCH_PROFILE_UPDATE_IN_PROGRESS" || "LAUNCH_PROFILE_DELETE_IN_PROGRESS" || "INTERNAL_ERROR" || "STREAMING_IMAGE_NOT_FOUND" || "STREAMING_IMAGE_NOT_READY" || "LAUNCH_PROFILE_WITH_STREAM_SESSIONS_NOT_DELETED" || "ENCRYPTION_KEY_ACCESS_DENIED" || "ENCRYPTION_KEY_NOT_FOUND" || "INVALID_SUBNETS_PROVIDED" || "INVALID_INSTANCE_TYPES_PROVIDED" || "INVALID_SUBNETS_COMBINATION",
 * //     statusMessage: "STRING_VALUE",
 * //     streamConfiguration: { // StreamConfiguration
 * //       clipboardMode: "ENABLED" || "DISABLED", // required
 * //       ec2InstanceTypes: [ // StreamingInstanceTypeList // required
 * //         "g4dn.xlarge" || "g4dn.2xlarge" || "g4dn.4xlarge" || "g4dn.8xlarge" || "g4dn.12xlarge" || "g4dn.16xlarge" || "g3.4xlarge" || "g3s.xlarge" || "g5.xlarge" || "g5.2xlarge" || "g5.4xlarge" || "g5.8xlarge" || "g5.16xlarge",
 * //       ],
 * //       maxSessionLengthInMinutes: Number("int"),
 * //       streamingImageIds: [ // StreamingImageIdList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       maxStoppedSessionLengthInMinutes: Number("int"),
 * //       sessionStorage: { // StreamConfigurationSessionStorage
 * //         root: { // StreamingSessionStorageRoot
 * //           linux: "STRING_VALUE",
 * //           windows: "STRING_VALUE",
 * //         },
 * //         mode: [ // StreamingSessionStorageModeList // required
 * //           "UPLOAD",
 * //         ],
 * //       },
 * //       sessionBackup: { // StreamConfigurationSessionBackup
 * //         mode: "AUTOMATIC" || "DEACTIVATED",
 * //         maxBackupsToRetain: Number("int"),
 * //       },
 * //       sessionPersistenceMode: "DEACTIVATED" || "ACTIVATED",
 * //       volumeConfiguration: { // VolumeConfiguration
 * //         size: Number("int"),
 * //         throughput: Number("int"),
 * //         iops: Number("int"),
 * //       },
 * //       automaticTerminationMode: "DEACTIVATED" || "ACTIVATED",
 * //     },
 * //     studioComponentIds: [ // LaunchProfileStudioComponentIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     updatedBy: "STRING_VALUE",
 * //     validationResults: [ // ValidationResults
 * //       { // ValidationResult
 * //         type: "VALIDATE_ACTIVE_DIRECTORY_STUDIO_COMPONENT" || "VALIDATE_SUBNET_ASSOCIATION" || "VALIDATE_NETWORK_ACL_ASSOCIATION" || "VALIDATE_SECURITY_GROUP_ASSOCIATION", // required
 * //         state: "VALIDATION_NOT_STARTED" || "VALIDATION_IN_PROGRESS" || "VALIDATION_SUCCESS" || "VALIDATION_FAILED" || "VALIDATION_FAILED_INTERNAL_SERVER_ERROR", // required
 * //         statusCode: "VALIDATION_NOT_STARTED" || "VALIDATION_IN_PROGRESS" || "VALIDATION_SUCCESS" || "VALIDATION_FAILED_INVALID_SUBNET_ROUTE_TABLE_ASSOCIATION" || "VALIDATION_FAILED_SUBNET_NOT_FOUND" || "VALIDATION_FAILED_INVALID_SECURITY_GROUP_ASSOCIATION" || "VALIDATION_FAILED_INVALID_ACTIVE_DIRECTORY" || "VALIDATION_FAILED_UNAUTHORIZED" || "VALIDATION_FAILED_INTERNAL_SERVER_ERROR", // required
 * //         statusMessage: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLaunchProfileCommandInput - {@link GetLaunchProfileCommandInput}
 * @returns {@link GetLaunchProfileCommandOutput}
 * @see {@link GetLaunchProfileCommandInput} for command's `input` shape.
 * @see {@link GetLaunchProfileCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another operation is in progress. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current quota does not allow you to perform the request action. You can request
 *             increases for some quotas, and other quotas cannot be increased.</p>
 *         <p>Please use Amazon Web Services Service Quotas to request an increase. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link NimbleServiceException}
 * <p>Base exception class for all service exceptions from Nimble service.</p>
 *
 * @public
 */
export class GetLaunchProfileCommand extends $Command
  .classBuilder<
    GetLaunchProfileCommandInput,
    GetLaunchProfileCommandOutput,
    NimbleClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: NimbleClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("nimble", "GetLaunchProfile", {})
  .n("NimbleClient", "GetLaunchProfileCommand")
  .f(void 0, GetLaunchProfileResponseFilterSensitiveLog)
  .ser(se_GetLaunchProfileCommand)
  .de(de_GetLaunchProfileCommand)
  .build() {}
