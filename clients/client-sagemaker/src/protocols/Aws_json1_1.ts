// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  LazyJsonString as __LazyJsonString,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AddAssociationCommandInput, AddAssociationCommandOutput } from "../commands/AddAssociationCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "../commands/AddTagsCommand";
import {
  AssociateTrialComponentCommandInput,
  AssociateTrialComponentCommandOutput,
} from "../commands/AssociateTrialComponentCommand";
import {
  BatchDescribeModelPackageCommandInput,
  BatchDescribeModelPackageCommandOutput,
} from "../commands/BatchDescribeModelPackageCommand";
import { CreateActionCommandInput, CreateActionCommandOutput } from "../commands/CreateActionCommand";
import { CreateAlgorithmCommandInput, CreateAlgorithmCommandOutput } from "../commands/CreateAlgorithmCommand";
import { CreateAppCommandInput, CreateAppCommandOutput } from "../commands/CreateAppCommand";
import {
  CreateAppImageConfigCommandInput,
  CreateAppImageConfigCommandOutput,
} from "../commands/CreateAppImageConfigCommand";
import { CreateArtifactCommandInput, CreateArtifactCommandOutput } from "../commands/CreateArtifactCommand";
import { CreateAutoMLJobCommandInput, CreateAutoMLJobCommandOutput } from "../commands/CreateAutoMLJobCommand";
import { CreateAutoMLJobV2CommandInput, CreateAutoMLJobV2CommandOutput } from "../commands/CreateAutoMLJobV2Command";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "../commands/CreateClusterCommand";
import {
  CreateCodeRepositoryCommandInput,
  CreateCodeRepositoryCommandOutput,
} from "../commands/CreateCodeRepositoryCommand";
import {
  CreateCompilationJobCommandInput,
  CreateCompilationJobCommandOutput,
} from "../commands/CreateCompilationJobCommand";
import { CreateContextCommandInput, CreateContextCommandOutput } from "../commands/CreateContextCommand";
import {
  CreateDataQualityJobDefinitionCommandInput,
  CreateDataQualityJobDefinitionCommandOutput,
} from "../commands/CreateDataQualityJobDefinitionCommand";
import { CreateDeviceFleetCommandInput, CreateDeviceFleetCommandOutput } from "../commands/CreateDeviceFleetCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import {
  CreateEdgeDeploymentPlanCommandInput,
  CreateEdgeDeploymentPlanCommandOutput,
} from "../commands/CreateEdgeDeploymentPlanCommand";
import {
  CreateEdgeDeploymentStageCommandInput,
  CreateEdgeDeploymentStageCommandOutput,
} from "../commands/CreateEdgeDeploymentStageCommand";
import {
  CreateEdgePackagingJobCommandInput,
  CreateEdgePackagingJobCommandOutput,
} from "../commands/CreateEdgePackagingJobCommand";
import { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "../commands/CreateEndpointCommand";
import {
  CreateEndpointConfigCommandInput,
  CreateEndpointConfigCommandOutput,
} from "../commands/CreateEndpointConfigCommand";
import { CreateExperimentCommandInput, CreateExperimentCommandOutput } from "../commands/CreateExperimentCommand";
import { CreateFeatureGroupCommandInput, CreateFeatureGroupCommandOutput } from "../commands/CreateFeatureGroupCommand";
import {
  CreateFlowDefinitionCommandInput,
  CreateFlowDefinitionCommandOutput,
} from "../commands/CreateFlowDefinitionCommand";
import { CreateHubCommandInput, CreateHubCommandOutput } from "../commands/CreateHubCommand";
import { CreateHumanTaskUiCommandInput, CreateHumanTaskUiCommandOutput } from "../commands/CreateHumanTaskUiCommand";
import {
  CreateHyperParameterTuningJobCommandInput,
  CreateHyperParameterTuningJobCommandOutput,
} from "../commands/CreateHyperParameterTuningJobCommand";
import { CreateImageCommandInput, CreateImageCommandOutput } from "../commands/CreateImageCommand";
import { CreateImageVersionCommandInput, CreateImageVersionCommandOutput } from "../commands/CreateImageVersionCommand";
import {
  CreateInferenceComponentCommandInput,
  CreateInferenceComponentCommandOutput,
} from "../commands/CreateInferenceComponentCommand";
import {
  CreateInferenceExperimentCommandInput,
  CreateInferenceExperimentCommandOutput,
} from "../commands/CreateInferenceExperimentCommand";
import {
  CreateInferenceRecommendationsJobCommandInput,
  CreateInferenceRecommendationsJobCommandOutput,
} from "../commands/CreateInferenceRecommendationsJobCommand";
import { CreateLabelingJobCommandInput, CreateLabelingJobCommandOutput } from "../commands/CreateLabelingJobCommand";
import {
  CreateMlflowTrackingServerCommandInput,
  CreateMlflowTrackingServerCommandOutput,
} from "../commands/CreateMlflowTrackingServerCommand";
import {
  CreateModelBiasJobDefinitionCommandInput,
  CreateModelBiasJobDefinitionCommandOutput,
} from "../commands/CreateModelBiasJobDefinitionCommand";
import { CreateModelCardCommandInput, CreateModelCardCommandOutput } from "../commands/CreateModelCardCommand";
import {
  CreateModelCardExportJobCommandInput,
  CreateModelCardExportJobCommandOutput,
} from "../commands/CreateModelCardExportJobCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "../commands/CreateModelCommand";
import {
  CreateModelExplainabilityJobDefinitionCommandInput,
  CreateModelExplainabilityJobDefinitionCommandOutput,
} from "../commands/CreateModelExplainabilityJobDefinitionCommand";
import { CreateModelPackageCommandInput, CreateModelPackageCommandOutput } from "../commands/CreateModelPackageCommand";
import {
  CreateModelPackageGroupCommandInput,
  CreateModelPackageGroupCommandOutput,
} from "../commands/CreateModelPackageGroupCommand";
import {
  CreateModelQualityJobDefinitionCommandInput,
  CreateModelQualityJobDefinitionCommandOutput,
} from "../commands/CreateModelQualityJobDefinitionCommand";
import {
  CreateMonitoringScheduleCommandInput,
  CreateMonitoringScheduleCommandOutput,
} from "../commands/CreateMonitoringScheduleCommand";
import {
  CreateNotebookInstanceCommandInput,
  CreateNotebookInstanceCommandOutput,
} from "../commands/CreateNotebookInstanceCommand";
import {
  CreateNotebookInstanceLifecycleConfigCommandInput,
  CreateNotebookInstanceLifecycleConfigCommandOutput,
} from "../commands/CreateNotebookInstanceLifecycleConfigCommand";
import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "../commands/CreatePipelineCommand";
import {
  CreatePresignedDomainUrlCommandInput,
  CreatePresignedDomainUrlCommandOutput,
} from "../commands/CreatePresignedDomainUrlCommand";
import {
  CreatePresignedMlflowTrackingServerUrlCommandInput,
  CreatePresignedMlflowTrackingServerUrlCommandOutput,
} from "../commands/CreatePresignedMlflowTrackingServerUrlCommand";
import {
  CreatePresignedNotebookInstanceUrlCommandInput,
  CreatePresignedNotebookInstanceUrlCommandOutput,
} from "../commands/CreatePresignedNotebookInstanceUrlCommand";
import {
  CreateProcessingJobCommandInput,
  CreateProcessingJobCommandOutput,
} from "../commands/CreateProcessingJobCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "../commands/CreateProjectCommand";
import { CreateSpaceCommandInput, CreateSpaceCommandOutput } from "../commands/CreateSpaceCommand";
import {
  CreateStudioLifecycleConfigCommandInput,
  CreateStudioLifecycleConfigCommandOutput,
} from "../commands/CreateStudioLifecycleConfigCommand";
import { CreateTrainingJobCommandInput, CreateTrainingJobCommandOutput } from "../commands/CreateTrainingJobCommand";
import { CreateTransformJobCommandInput, CreateTransformJobCommandOutput } from "../commands/CreateTransformJobCommand";
import { CreateTrialCommandInput, CreateTrialCommandOutput } from "../commands/CreateTrialCommand";
import {
  CreateTrialComponentCommandInput,
  CreateTrialComponentCommandOutput,
} from "../commands/CreateTrialComponentCommand";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "../commands/CreateUserProfileCommand";
import { CreateWorkforceCommandInput, CreateWorkforceCommandOutput } from "../commands/CreateWorkforceCommand";
import { CreateWorkteamCommandInput, CreateWorkteamCommandOutput } from "../commands/CreateWorkteamCommand";
import { DeleteActionCommandInput, DeleteActionCommandOutput } from "../commands/DeleteActionCommand";
import { DeleteAlgorithmCommandInput, DeleteAlgorithmCommandOutput } from "../commands/DeleteAlgorithmCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "../commands/DeleteAppCommand";
import {
  DeleteAppImageConfigCommandInput,
  DeleteAppImageConfigCommandOutput,
} from "../commands/DeleteAppImageConfigCommand";
import { DeleteArtifactCommandInput, DeleteArtifactCommandOutput } from "../commands/DeleteArtifactCommand";
import { DeleteAssociationCommandInput, DeleteAssociationCommandOutput } from "../commands/DeleteAssociationCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "../commands/DeleteClusterCommand";
import {
  DeleteCodeRepositoryCommandInput,
  DeleteCodeRepositoryCommandOutput,
} from "../commands/DeleteCodeRepositoryCommand";
import {
  DeleteCompilationJobCommandInput,
  DeleteCompilationJobCommandOutput,
} from "../commands/DeleteCompilationJobCommand";
import { DeleteContextCommandInput, DeleteContextCommandOutput } from "../commands/DeleteContextCommand";
import {
  DeleteDataQualityJobDefinitionCommandInput,
  DeleteDataQualityJobDefinitionCommandOutput,
} from "../commands/DeleteDataQualityJobDefinitionCommand";
import { DeleteDeviceFleetCommandInput, DeleteDeviceFleetCommandOutput } from "../commands/DeleteDeviceFleetCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import {
  DeleteEdgeDeploymentPlanCommandInput,
  DeleteEdgeDeploymentPlanCommandOutput,
} from "../commands/DeleteEdgeDeploymentPlanCommand";
import {
  DeleteEdgeDeploymentStageCommandInput,
  DeleteEdgeDeploymentStageCommandOutput,
} from "../commands/DeleteEdgeDeploymentStageCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "../commands/DeleteEndpointCommand";
import {
  DeleteEndpointConfigCommandInput,
  DeleteEndpointConfigCommandOutput,
} from "../commands/DeleteEndpointConfigCommand";
import { DeleteExperimentCommandInput, DeleteExperimentCommandOutput } from "../commands/DeleteExperimentCommand";
import { DeleteFeatureGroupCommandInput, DeleteFeatureGroupCommandOutput } from "../commands/DeleteFeatureGroupCommand";
import {
  DeleteFlowDefinitionCommandInput,
  DeleteFlowDefinitionCommandOutput,
} from "../commands/DeleteFlowDefinitionCommand";
import { DeleteHubCommandInput, DeleteHubCommandOutput } from "../commands/DeleteHubCommand";
import { DeleteHubContentCommandInput, DeleteHubContentCommandOutput } from "../commands/DeleteHubContentCommand";
import { DeleteHumanTaskUiCommandInput, DeleteHumanTaskUiCommandOutput } from "../commands/DeleteHumanTaskUiCommand";
import {
  DeleteHyperParameterTuningJobCommandInput,
  DeleteHyperParameterTuningJobCommandOutput,
} from "../commands/DeleteHyperParameterTuningJobCommand";
import { DeleteImageCommandInput, DeleteImageCommandOutput } from "../commands/DeleteImageCommand";
import { DeleteImageVersionCommandInput, DeleteImageVersionCommandOutput } from "../commands/DeleteImageVersionCommand";
import {
  DeleteInferenceComponentCommandInput,
  DeleteInferenceComponentCommandOutput,
} from "../commands/DeleteInferenceComponentCommand";
import {
  DeleteInferenceExperimentCommandInput,
  DeleteInferenceExperimentCommandOutput,
} from "../commands/DeleteInferenceExperimentCommand";
import {
  DeleteMlflowTrackingServerCommandInput,
  DeleteMlflowTrackingServerCommandOutput,
} from "../commands/DeleteMlflowTrackingServerCommand";
import {
  DeleteModelBiasJobDefinitionCommandInput,
  DeleteModelBiasJobDefinitionCommandOutput,
} from "../commands/DeleteModelBiasJobDefinitionCommand";
import { DeleteModelCardCommandInput, DeleteModelCardCommandOutput } from "../commands/DeleteModelCardCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "../commands/DeleteModelCommand";
import {
  DeleteModelExplainabilityJobDefinitionCommandInput,
  DeleteModelExplainabilityJobDefinitionCommandOutput,
} from "../commands/DeleteModelExplainabilityJobDefinitionCommand";
import { DeleteModelPackageCommandInput, DeleteModelPackageCommandOutput } from "../commands/DeleteModelPackageCommand";
import {
  DeleteModelPackageGroupCommandInput,
  DeleteModelPackageGroupCommandOutput,
} from "../commands/DeleteModelPackageGroupCommand";
import {
  DeleteModelPackageGroupPolicyCommandInput,
  DeleteModelPackageGroupPolicyCommandOutput,
} from "../commands/DeleteModelPackageGroupPolicyCommand";
import {
  DeleteModelQualityJobDefinitionCommandInput,
  DeleteModelQualityJobDefinitionCommandOutput,
} from "../commands/DeleteModelQualityJobDefinitionCommand";
import {
  DeleteMonitoringScheduleCommandInput,
  DeleteMonitoringScheduleCommandOutput,
} from "../commands/DeleteMonitoringScheduleCommand";
import {
  DeleteNotebookInstanceCommandInput,
  DeleteNotebookInstanceCommandOutput,
} from "../commands/DeleteNotebookInstanceCommand";
import {
  DeleteNotebookInstanceLifecycleConfigCommandInput,
  DeleteNotebookInstanceLifecycleConfigCommandOutput,
} from "../commands/DeleteNotebookInstanceLifecycleConfigCommand";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "../commands/DeletePipelineCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import { DeleteSpaceCommandInput, DeleteSpaceCommandOutput } from "../commands/DeleteSpaceCommand";
import {
  DeleteStudioLifecycleConfigCommandInput,
  DeleteStudioLifecycleConfigCommandOutput,
} from "../commands/DeleteStudioLifecycleConfigCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "../commands/DeleteTagsCommand";
import { DeleteTrialCommandInput, DeleteTrialCommandOutput } from "../commands/DeleteTrialCommand";
import {
  DeleteTrialComponentCommandInput,
  DeleteTrialComponentCommandOutput,
} from "../commands/DeleteTrialComponentCommand";
import { DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput } from "../commands/DeleteUserProfileCommand";
import { DeleteWorkforceCommandInput, DeleteWorkforceCommandOutput } from "../commands/DeleteWorkforceCommand";
import { DeleteWorkteamCommandInput, DeleteWorkteamCommandOutput } from "../commands/DeleteWorkteamCommand";
import { DeregisterDevicesCommandInput, DeregisterDevicesCommandOutput } from "../commands/DeregisterDevicesCommand";
import { DescribeActionCommandInput, DescribeActionCommandOutput } from "../commands/DescribeActionCommand";
import { DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput } from "../commands/DescribeAlgorithmCommand";
import { DescribeAppCommandInput, DescribeAppCommandOutput } from "../commands/DescribeAppCommand";
import {
  DescribeAppImageConfigCommandInput,
  DescribeAppImageConfigCommandOutput,
} from "../commands/DescribeAppImageConfigCommand";
import { DescribeArtifactCommandInput, DescribeArtifactCommandOutput } from "../commands/DescribeArtifactCommand";
import { DescribeAutoMLJobCommandInput, DescribeAutoMLJobCommandOutput } from "../commands/DescribeAutoMLJobCommand";
import {
  DescribeAutoMLJobV2CommandInput,
  DescribeAutoMLJobV2CommandOutput,
} from "../commands/DescribeAutoMLJobV2Command";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "../commands/DescribeClusterCommand";
import {
  DescribeClusterNodeCommandInput,
  DescribeClusterNodeCommandOutput,
} from "../commands/DescribeClusterNodeCommand";
import {
  DescribeCodeRepositoryCommandInput,
  DescribeCodeRepositoryCommandOutput,
} from "../commands/DescribeCodeRepositoryCommand";
import {
  DescribeCompilationJobCommandInput,
  DescribeCompilationJobCommandOutput,
} from "../commands/DescribeCompilationJobCommand";
import { DescribeContextCommandInput, DescribeContextCommandOutput } from "../commands/DescribeContextCommand";
import {
  DescribeDataQualityJobDefinitionCommandInput,
  DescribeDataQualityJobDefinitionCommandOutput,
} from "../commands/DescribeDataQualityJobDefinitionCommand";
import { DescribeDeviceCommandInput, DescribeDeviceCommandOutput } from "../commands/DescribeDeviceCommand";
import {
  DescribeDeviceFleetCommandInput,
  DescribeDeviceFleetCommandOutput,
} from "../commands/DescribeDeviceFleetCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "../commands/DescribeDomainCommand";
import {
  DescribeEdgeDeploymentPlanCommandInput,
  DescribeEdgeDeploymentPlanCommandOutput,
} from "../commands/DescribeEdgeDeploymentPlanCommand";
import {
  DescribeEdgePackagingJobCommandInput,
  DescribeEdgePackagingJobCommandOutput,
} from "../commands/DescribeEdgePackagingJobCommand";
import { DescribeEndpointCommandInput, DescribeEndpointCommandOutput } from "../commands/DescribeEndpointCommand";
import {
  DescribeEndpointConfigCommandInput,
  DescribeEndpointConfigCommandOutput,
} from "../commands/DescribeEndpointConfigCommand";
import { DescribeExperimentCommandInput, DescribeExperimentCommandOutput } from "../commands/DescribeExperimentCommand";
import {
  DescribeFeatureGroupCommandInput,
  DescribeFeatureGroupCommandOutput,
} from "../commands/DescribeFeatureGroupCommand";
import {
  DescribeFeatureMetadataCommandInput,
  DescribeFeatureMetadataCommandOutput,
} from "../commands/DescribeFeatureMetadataCommand";
import {
  DescribeFlowDefinitionCommandInput,
  DescribeFlowDefinitionCommandOutput,
} from "../commands/DescribeFlowDefinitionCommand";
import { DescribeHubCommandInput, DescribeHubCommandOutput } from "../commands/DescribeHubCommand";
import { DescribeHubContentCommandInput, DescribeHubContentCommandOutput } from "../commands/DescribeHubContentCommand";
import {
  DescribeHumanTaskUiCommandInput,
  DescribeHumanTaskUiCommandOutput,
} from "../commands/DescribeHumanTaskUiCommand";
import {
  DescribeHyperParameterTuningJobCommandInput,
  DescribeHyperParameterTuningJobCommandOutput,
} from "../commands/DescribeHyperParameterTuningJobCommand";
import { DescribeImageCommandInput, DescribeImageCommandOutput } from "../commands/DescribeImageCommand";
import {
  DescribeImageVersionCommandInput,
  DescribeImageVersionCommandOutput,
} from "../commands/DescribeImageVersionCommand";
import {
  DescribeInferenceComponentCommandInput,
  DescribeInferenceComponentCommandOutput,
} from "../commands/DescribeInferenceComponentCommand";
import {
  DescribeInferenceExperimentCommandInput,
  DescribeInferenceExperimentCommandOutput,
} from "../commands/DescribeInferenceExperimentCommand";
import {
  DescribeInferenceRecommendationsJobCommandInput,
  DescribeInferenceRecommendationsJobCommandOutput,
} from "../commands/DescribeInferenceRecommendationsJobCommand";
import {
  DescribeLabelingJobCommandInput,
  DescribeLabelingJobCommandOutput,
} from "../commands/DescribeLabelingJobCommand";
import {
  DescribeLineageGroupCommandInput,
  DescribeLineageGroupCommandOutput,
} from "../commands/DescribeLineageGroupCommand";
import {
  DescribeMlflowTrackingServerCommandInput,
  DescribeMlflowTrackingServerCommandOutput,
} from "../commands/DescribeMlflowTrackingServerCommand";
import {
  DescribeModelBiasJobDefinitionCommandInput,
  DescribeModelBiasJobDefinitionCommandOutput,
} from "../commands/DescribeModelBiasJobDefinitionCommand";
import { DescribeModelCardCommandInput, DescribeModelCardCommandOutput } from "../commands/DescribeModelCardCommand";
import {
  DescribeModelCardExportJobCommandInput,
  DescribeModelCardExportJobCommandOutput,
} from "../commands/DescribeModelCardExportJobCommand";
import { DescribeModelCommandInput, DescribeModelCommandOutput } from "../commands/DescribeModelCommand";
import {
  DescribeModelExplainabilityJobDefinitionCommandInput,
  DescribeModelExplainabilityJobDefinitionCommandOutput,
} from "../commands/DescribeModelExplainabilityJobDefinitionCommand";
import {
  DescribeModelPackageCommandInput,
  DescribeModelPackageCommandOutput,
} from "../commands/DescribeModelPackageCommand";
import {
  DescribeModelPackageGroupCommandInput,
  DescribeModelPackageGroupCommandOutput,
} from "../commands/DescribeModelPackageGroupCommand";
import {
  DescribeModelQualityJobDefinitionCommandInput,
  DescribeModelQualityJobDefinitionCommandOutput,
} from "../commands/DescribeModelQualityJobDefinitionCommand";
import {
  DescribeMonitoringScheduleCommandInput,
  DescribeMonitoringScheduleCommandOutput,
} from "../commands/DescribeMonitoringScheduleCommand";
import {
  DescribeNotebookInstanceCommandInput,
  DescribeNotebookInstanceCommandOutput,
} from "../commands/DescribeNotebookInstanceCommand";
import {
  DescribeNotebookInstanceLifecycleConfigCommandInput,
  DescribeNotebookInstanceLifecycleConfigCommandOutput,
} from "../commands/DescribeNotebookInstanceLifecycleConfigCommand";
import { DescribePipelineCommandInput, DescribePipelineCommandOutput } from "../commands/DescribePipelineCommand";
import {
  DescribePipelineDefinitionForExecutionCommandInput,
  DescribePipelineDefinitionForExecutionCommandOutput,
} from "../commands/DescribePipelineDefinitionForExecutionCommand";
import {
  DescribePipelineExecutionCommandInput,
  DescribePipelineExecutionCommandOutput,
} from "../commands/DescribePipelineExecutionCommand";
import {
  DescribeProcessingJobCommandInput,
  DescribeProcessingJobCommandOutput,
} from "../commands/DescribeProcessingJobCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "../commands/DescribeProjectCommand";
import { DescribeSpaceCommandInput, DescribeSpaceCommandOutput } from "../commands/DescribeSpaceCommand";
import {
  DescribeStudioLifecycleConfigCommandInput,
  DescribeStudioLifecycleConfigCommandOutput,
} from "../commands/DescribeStudioLifecycleConfigCommand";
import {
  DescribeSubscribedWorkteamCommandInput,
  DescribeSubscribedWorkteamCommandOutput,
} from "../commands/DescribeSubscribedWorkteamCommand";
import {
  DescribeTrainingJobCommandInput,
  DescribeTrainingJobCommandOutput,
} from "../commands/DescribeTrainingJobCommand";
import {
  DescribeTransformJobCommandInput,
  DescribeTransformJobCommandOutput,
} from "../commands/DescribeTransformJobCommand";
import { DescribeTrialCommandInput, DescribeTrialCommandOutput } from "../commands/DescribeTrialCommand";
import {
  DescribeTrialComponentCommandInput,
  DescribeTrialComponentCommandOutput,
} from "../commands/DescribeTrialComponentCommand";
import {
  DescribeUserProfileCommandInput,
  DescribeUserProfileCommandOutput,
} from "../commands/DescribeUserProfileCommand";
import { DescribeWorkforceCommandInput, DescribeWorkforceCommandOutput } from "../commands/DescribeWorkforceCommand";
import { DescribeWorkteamCommandInput, DescribeWorkteamCommandOutput } from "../commands/DescribeWorkteamCommand";
import {
  DisableSagemakerServicecatalogPortfolioCommandInput,
  DisableSagemakerServicecatalogPortfolioCommandOutput,
} from "../commands/DisableSagemakerServicecatalogPortfolioCommand";
import {
  DisassociateTrialComponentCommandInput,
  DisassociateTrialComponentCommandOutput,
} from "../commands/DisassociateTrialComponentCommand";
import {
  EnableSagemakerServicecatalogPortfolioCommandInput,
  EnableSagemakerServicecatalogPortfolioCommandOutput,
} from "../commands/EnableSagemakerServicecatalogPortfolioCommand";
import {
  GetDeviceFleetReportCommandInput,
  GetDeviceFleetReportCommandOutput,
} from "../commands/GetDeviceFleetReportCommand";
import {
  GetLineageGroupPolicyCommandInput,
  GetLineageGroupPolicyCommandOutput,
} from "../commands/GetLineageGroupPolicyCommand";
import {
  GetModelPackageGroupPolicyCommandInput,
  GetModelPackageGroupPolicyCommandOutput,
} from "../commands/GetModelPackageGroupPolicyCommand";
import {
  GetSagemakerServicecatalogPortfolioStatusCommandInput,
  GetSagemakerServicecatalogPortfolioStatusCommandOutput,
} from "../commands/GetSagemakerServicecatalogPortfolioStatusCommand";
import {
  GetScalingConfigurationRecommendationCommandInput,
  GetScalingConfigurationRecommendationCommandOutput,
} from "../commands/GetScalingConfigurationRecommendationCommand";
import {
  GetSearchSuggestionsCommandInput,
  GetSearchSuggestionsCommandOutput,
} from "../commands/GetSearchSuggestionsCommand";
import { ImportHubContentCommandInput, ImportHubContentCommandOutput } from "../commands/ImportHubContentCommand";
import { ListActionsCommandInput, ListActionsCommandOutput } from "../commands/ListActionsCommand";
import { ListAlgorithmsCommandInput, ListAlgorithmsCommandOutput } from "../commands/ListAlgorithmsCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import {
  ListAppImageConfigsCommandInput,
  ListAppImageConfigsCommandOutput,
} from "../commands/ListAppImageConfigsCommand";
import { ListAppsCommandInput, ListAppsCommandOutput } from "../commands/ListAppsCommand";
import { ListArtifactsCommandInput, ListArtifactsCommandOutput } from "../commands/ListArtifactsCommand";
import { ListAssociationsCommandInput, ListAssociationsCommandOutput } from "../commands/ListAssociationsCommand";
import { ListAutoMLJobsCommandInput, ListAutoMLJobsCommandOutput } from "../commands/ListAutoMLJobsCommand";
import {
  ListCandidatesForAutoMLJobCommandInput,
  ListCandidatesForAutoMLJobCommandOutput,
} from "../commands/ListCandidatesForAutoMLJobCommand";
import { ListClusterNodesCommandInput, ListClusterNodesCommandOutput } from "../commands/ListClusterNodesCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "../commands/ListClustersCommand";
import {
  ListCodeRepositoriesCommandInput,
  ListCodeRepositoriesCommandOutput,
} from "../commands/ListCodeRepositoriesCommand";
import {
  ListCompilationJobsCommandInput,
  ListCompilationJobsCommandOutput,
} from "../commands/ListCompilationJobsCommand";
import { ListContextsCommandInput, ListContextsCommandOutput } from "../commands/ListContextsCommand";
import {
  ListDataQualityJobDefinitionsCommandInput,
  ListDataQualityJobDefinitionsCommandOutput,
} from "../commands/ListDataQualityJobDefinitionsCommand";
import { ListDeviceFleetsCommandInput, ListDeviceFleetsCommandOutput } from "../commands/ListDeviceFleetsCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import {
  ListEdgeDeploymentPlansCommandInput,
  ListEdgeDeploymentPlansCommandOutput,
} from "../commands/ListEdgeDeploymentPlansCommand";
import {
  ListEdgePackagingJobsCommandInput,
  ListEdgePackagingJobsCommandOutput,
} from "../commands/ListEdgePackagingJobsCommand";
import {
  ListEndpointConfigsCommandInput,
  ListEndpointConfigsCommandOutput,
} from "../commands/ListEndpointConfigsCommand";
import { ListEndpointsCommandInput, ListEndpointsCommandOutput } from "../commands/ListEndpointsCommand";
import { ListExperimentsCommandInput, ListExperimentsCommandOutput } from "../commands/ListExperimentsCommand";
import { ListFeatureGroupsCommandInput, ListFeatureGroupsCommandOutput } from "../commands/ListFeatureGroupsCommand";
import {
  ListFlowDefinitionsCommandInput,
  ListFlowDefinitionsCommandOutput,
} from "../commands/ListFlowDefinitionsCommand";
import { ListHubContentsCommandInput, ListHubContentsCommandOutput } from "../commands/ListHubContentsCommand";
import {
  ListHubContentVersionsCommandInput,
  ListHubContentVersionsCommandOutput,
} from "../commands/ListHubContentVersionsCommand";
import { ListHubsCommandInput, ListHubsCommandOutput } from "../commands/ListHubsCommand";
import { ListHumanTaskUisCommandInput, ListHumanTaskUisCommandOutput } from "../commands/ListHumanTaskUisCommand";
import {
  ListHyperParameterTuningJobsCommandInput,
  ListHyperParameterTuningJobsCommandOutput,
} from "../commands/ListHyperParameterTuningJobsCommand";
import { ListImagesCommandInput, ListImagesCommandOutput } from "../commands/ListImagesCommand";
import { ListImageVersionsCommandInput, ListImageVersionsCommandOutput } from "../commands/ListImageVersionsCommand";
import {
  ListInferenceComponentsCommandInput,
  ListInferenceComponentsCommandOutput,
} from "../commands/ListInferenceComponentsCommand";
import {
  ListInferenceExperimentsCommandInput,
  ListInferenceExperimentsCommandOutput,
} from "../commands/ListInferenceExperimentsCommand";
import {
  ListInferenceRecommendationsJobsCommandInput,
  ListInferenceRecommendationsJobsCommandOutput,
} from "../commands/ListInferenceRecommendationsJobsCommand";
import {
  ListInferenceRecommendationsJobStepsCommandInput,
  ListInferenceRecommendationsJobStepsCommandOutput,
} from "../commands/ListInferenceRecommendationsJobStepsCommand";
import { ListLabelingJobsCommandInput, ListLabelingJobsCommandOutput } from "../commands/ListLabelingJobsCommand";
import {
  ListLabelingJobsForWorkteamCommandInput,
  ListLabelingJobsForWorkteamCommandOutput,
} from "../commands/ListLabelingJobsForWorkteamCommand";
import { ListLineageGroupsCommandInput, ListLineageGroupsCommandOutput } from "../commands/ListLineageGroupsCommand";
import {
  ListMlflowTrackingServersCommandInput,
  ListMlflowTrackingServersCommandOutput,
} from "../commands/ListMlflowTrackingServersCommand";
import {
  ListModelBiasJobDefinitionsCommandInput,
  ListModelBiasJobDefinitionsCommandOutput,
} from "../commands/ListModelBiasJobDefinitionsCommand";
import {
  ListModelCardExportJobsCommandInput,
  ListModelCardExportJobsCommandOutput,
} from "../commands/ListModelCardExportJobsCommand";
import { ListModelCardsCommandInput, ListModelCardsCommandOutput } from "../commands/ListModelCardsCommand";
import {
  ListModelCardVersionsCommandInput,
  ListModelCardVersionsCommandOutput,
} from "../commands/ListModelCardVersionsCommand";
import {
  ListModelExplainabilityJobDefinitionsCommandInput,
  ListModelExplainabilityJobDefinitionsCommandOutput,
} from "../commands/ListModelExplainabilityJobDefinitionsCommand";
import { ListModelMetadataCommandInput, ListModelMetadataCommandOutput } from "../commands/ListModelMetadataCommand";
import {
  ListModelPackageGroupsCommandInput,
  ListModelPackageGroupsCommandOutput,
} from "../commands/ListModelPackageGroupsCommand";
import { ListModelPackagesCommandInput, ListModelPackagesCommandOutput } from "../commands/ListModelPackagesCommand";
import {
  ListModelQualityJobDefinitionsCommandInput,
  ListModelQualityJobDefinitionsCommandOutput,
} from "../commands/ListModelQualityJobDefinitionsCommand";
import { ListModelsCommandInput, ListModelsCommandOutput } from "../commands/ListModelsCommand";
import {
  ListMonitoringAlertHistoryCommandInput,
  ListMonitoringAlertHistoryCommandOutput,
} from "../commands/ListMonitoringAlertHistoryCommand";
import {
  ListMonitoringAlertsCommandInput,
  ListMonitoringAlertsCommandOutput,
} from "../commands/ListMonitoringAlertsCommand";
import {
  ListMonitoringExecutionsCommandInput,
  ListMonitoringExecutionsCommandOutput,
} from "../commands/ListMonitoringExecutionsCommand";
import {
  ListMonitoringSchedulesCommandInput,
  ListMonitoringSchedulesCommandOutput,
} from "../commands/ListMonitoringSchedulesCommand";
import {
  ListNotebookInstanceLifecycleConfigsCommandInput,
  ListNotebookInstanceLifecycleConfigsCommandOutput,
} from "../commands/ListNotebookInstanceLifecycleConfigsCommand";
import {
  ListNotebookInstancesCommandInput,
  ListNotebookInstancesCommandOutput,
} from "../commands/ListNotebookInstancesCommand";
import {
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput,
} from "../commands/ListPipelineExecutionsCommand";
import {
  ListPipelineExecutionStepsCommandInput,
  ListPipelineExecutionStepsCommandOutput,
} from "../commands/ListPipelineExecutionStepsCommand";
import {
  ListPipelineParametersForExecutionCommandInput,
  ListPipelineParametersForExecutionCommandOutput,
} from "../commands/ListPipelineParametersForExecutionCommand";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "../commands/ListPipelinesCommand";
import { ListProcessingJobsCommandInput, ListProcessingJobsCommandOutput } from "../commands/ListProcessingJobsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import {
  ListResourceCatalogsCommandInput,
  ListResourceCatalogsCommandOutput,
} from "../commands/ListResourceCatalogsCommand";
import { ListSpacesCommandInput, ListSpacesCommandOutput } from "../commands/ListSpacesCommand";
import { ListStageDevicesCommandInput, ListStageDevicesCommandOutput } from "../commands/ListStageDevicesCommand";
import {
  ListStudioLifecycleConfigsCommandInput,
  ListStudioLifecycleConfigsCommandOutput,
} from "../commands/ListStudioLifecycleConfigsCommand";
import {
  ListSubscribedWorkteamsCommandInput,
  ListSubscribedWorkteamsCommandOutput,
} from "../commands/ListSubscribedWorkteamsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { ListTrainingJobsCommandInput, ListTrainingJobsCommandOutput } from "../commands/ListTrainingJobsCommand";
import {
  ListTrainingJobsForHyperParameterTuningJobCommandInput,
  ListTrainingJobsForHyperParameterTuningJobCommandOutput,
} from "../commands/ListTrainingJobsForHyperParameterTuningJobCommand";
import { ListTransformJobsCommandInput, ListTransformJobsCommandOutput } from "../commands/ListTransformJobsCommand";
import {
  ListTrialComponentsCommandInput,
  ListTrialComponentsCommandOutput,
} from "../commands/ListTrialComponentsCommand";
import { ListTrialsCommandInput, ListTrialsCommandOutput } from "../commands/ListTrialsCommand";
import { ListUserProfilesCommandInput, ListUserProfilesCommandOutput } from "../commands/ListUserProfilesCommand";
import { ListWorkforcesCommandInput, ListWorkforcesCommandOutput } from "../commands/ListWorkforcesCommand";
import { ListWorkteamsCommandInput, ListWorkteamsCommandOutput } from "../commands/ListWorkteamsCommand";
import {
  PutModelPackageGroupPolicyCommandInput,
  PutModelPackageGroupPolicyCommandOutput,
} from "../commands/PutModelPackageGroupPolicyCommand";
import { QueryLineageCommandInput, QueryLineageCommandOutput } from "../commands/QueryLineageCommand";
import { RegisterDevicesCommandInput, RegisterDevicesCommandOutput } from "../commands/RegisterDevicesCommand";
import { RenderUiTemplateCommandInput, RenderUiTemplateCommandOutput } from "../commands/RenderUiTemplateCommand";
import {
  RetryPipelineExecutionCommandInput,
  RetryPipelineExecutionCommandOutput,
} from "../commands/RetryPipelineExecutionCommand";
import { SearchCommandInput, SearchCommandOutput } from "../commands/SearchCommand";
import {
  SendPipelineExecutionStepFailureCommandInput,
  SendPipelineExecutionStepFailureCommandOutput,
} from "../commands/SendPipelineExecutionStepFailureCommand";
import {
  SendPipelineExecutionStepSuccessCommandInput,
  SendPipelineExecutionStepSuccessCommandOutput,
} from "../commands/SendPipelineExecutionStepSuccessCommand";
import {
  StartEdgeDeploymentStageCommandInput,
  StartEdgeDeploymentStageCommandOutput,
} from "../commands/StartEdgeDeploymentStageCommand";
import {
  StartInferenceExperimentCommandInput,
  StartInferenceExperimentCommandOutput,
} from "../commands/StartInferenceExperimentCommand";
import {
  StartMlflowTrackingServerCommandInput,
  StartMlflowTrackingServerCommandOutput,
} from "../commands/StartMlflowTrackingServerCommand";
import {
  StartMonitoringScheduleCommandInput,
  StartMonitoringScheduleCommandOutput,
} from "../commands/StartMonitoringScheduleCommand";
import {
  StartNotebookInstanceCommandInput,
  StartNotebookInstanceCommandOutput,
} from "../commands/StartNotebookInstanceCommand";
import {
  StartPipelineExecutionCommandInput,
  StartPipelineExecutionCommandOutput,
} from "../commands/StartPipelineExecutionCommand";
import { StopAutoMLJobCommandInput, StopAutoMLJobCommandOutput } from "../commands/StopAutoMLJobCommand";
import { StopCompilationJobCommandInput, StopCompilationJobCommandOutput } from "../commands/StopCompilationJobCommand";
import {
  StopEdgeDeploymentStageCommandInput,
  StopEdgeDeploymentStageCommandOutput,
} from "../commands/StopEdgeDeploymentStageCommand";
import {
  StopEdgePackagingJobCommandInput,
  StopEdgePackagingJobCommandOutput,
} from "../commands/StopEdgePackagingJobCommand";
import {
  StopHyperParameterTuningJobCommandInput,
  StopHyperParameterTuningJobCommandOutput,
} from "../commands/StopHyperParameterTuningJobCommand";
import {
  StopInferenceExperimentCommandInput,
  StopInferenceExperimentCommandOutput,
} from "../commands/StopInferenceExperimentCommand";
import {
  StopInferenceRecommendationsJobCommandInput,
  StopInferenceRecommendationsJobCommandOutput,
} from "../commands/StopInferenceRecommendationsJobCommand";
import { StopLabelingJobCommandInput, StopLabelingJobCommandOutput } from "../commands/StopLabelingJobCommand";
import {
  StopMlflowTrackingServerCommandInput,
  StopMlflowTrackingServerCommandOutput,
} from "../commands/StopMlflowTrackingServerCommand";
import {
  StopMonitoringScheduleCommandInput,
  StopMonitoringScheduleCommandOutput,
} from "../commands/StopMonitoringScheduleCommand";
import {
  StopNotebookInstanceCommandInput,
  StopNotebookInstanceCommandOutput,
} from "../commands/StopNotebookInstanceCommand";
import {
  StopPipelineExecutionCommandInput,
  StopPipelineExecutionCommandOutput,
} from "../commands/StopPipelineExecutionCommand";
import { StopProcessingJobCommandInput, StopProcessingJobCommandOutput } from "../commands/StopProcessingJobCommand";
import { StopTrainingJobCommandInput, StopTrainingJobCommandOutput } from "../commands/StopTrainingJobCommand";
import { StopTransformJobCommandInput, StopTransformJobCommandOutput } from "../commands/StopTransformJobCommand";
import { UpdateActionCommandInput, UpdateActionCommandOutput } from "../commands/UpdateActionCommand";
import {
  UpdateAppImageConfigCommandInput,
  UpdateAppImageConfigCommandOutput,
} from "../commands/UpdateAppImageConfigCommand";
import { UpdateArtifactCommandInput, UpdateArtifactCommandOutput } from "../commands/UpdateArtifactCommand";
import { UpdateClusterCommandInput, UpdateClusterCommandOutput } from "../commands/UpdateClusterCommand";
import {
  UpdateClusterSoftwareCommandInput,
  UpdateClusterSoftwareCommandOutput,
} from "../commands/UpdateClusterSoftwareCommand";
import {
  UpdateCodeRepositoryCommandInput,
  UpdateCodeRepositoryCommandOutput,
} from "../commands/UpdateCodeRepositoryCommand";
import { UpdateContextCommandInput, UpdateContextCommandOutput } from "../commands/UpdateContextCommand";
import { UpdateDeviceFleetCommandInput, UpdateDeviceFleetCommandOutput } from "../commands/UpdateDeviceFleetCommand";
import { UpdateDevicesCommandInput, UpdateDevicesCommandOutput } from "../commands/UpdateDevicesCommand";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "../commands/UpdateDomainCommand";
import { UpdateEndpointCommandInput, UpdateEndpointCommandOutput } from "../commands/UpdateEndpointCommand";
import {
  UpdateEndpointWeightsAndCapacitiesCommandInput,
  UpdateEndpointWeightsAndCapacitiesCommandOutput,
} from "../commands/UpdateEndpointWeightsAndCapacitiesCommand";
import { UpdateExperimentCommandInput, UpdateExperimentCommandOutput } from "../commands/UpdateExperimentCommand";
import { UpdateFeatureGroupCommandInput, UpdateFeatureGroupCommandOutput } from "../commands/UpdateFeatureGroupCommand";
import {
  UpdateFeatureMetadataCommandInput,
  UpdateFeatureMetadataCommandOutput,
} from "../commands/UpdateFeatureMetadataCommand";
import { UpdateHubCommandInput, UpdateHubCommandOutput } from "../commands/UpdateHubCommand";
import { UpdateImageCommandInput, UpdateImageCommandOutput } from "../commands/UpdateImageCommand";
import { UpdateImageVersionCommandInput, UpdateImageVersionCommandOutput } from "../commands/UpdateImageVersionCommand";
import {
  UpdateInferenceComponentCommandInput,
  UpdateInferenceComponentCommandOutput,
} from "../commands/UpdateInferenceComponentCommand";
import {
  UpdateInferenceComponentRuntimeConfigCommandInput,
  UpdateInferenceComponentRuntimeConfigCommandOutput,
} from "../commands/UpdateInferenceComponentRuntimeConfigCommand";
import {
  UpdateInferenceExperimentCommandInput,
  UpdateInferenceExperimentCommandOutput,
} from "../commands/UpdateInferenceExperimentCommand";
import {
  UpdateMlflowTrackingServerCommandInput,
  UpdateMlflowTrackingServerCommandOutput,
} from "../commands/UpdateMlflowTrackingServerCommand";
import { UpdateModelCardCommandInput, UpdateModelCardCommandOutput } from "../commands/UpdateModelCardCommand";
import { UpdateModelPackageCommandInput, UpdateModelPackageCommandOutput } from "../commands/UpdateModelPackageCommand";
import {
  UpdateMonitoringAlertCommandInput,
  UpdateMonitoringAlertCommandOutput,
} from "../commands/UpdateMonitoringAlertCommand";
import {
  UpdateMonitoringScheduleCommandInput,
  UpdateMonitoringScheduleCommandOutput,
} from "../commands/UpdateMonitoringScheduleCommand";
import {
  UpdateNotebookInstanceCommandInput,
  UpdateNotebookInstanceCommandOutput,
} from "../commands/UpdateNotebookInstanceCommand";
import {
  UpdateNotebookInstanceLifecycleConfigCommandInput,
  UpdateNotebookInstanceLifecycleConfigCommandOutput,
} from "../commands/UpdateNotebookInstanceLifecycleConfigCommand";
import { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "../commands/UpdatePipelineCommand";
import {
  UpdatePipelineExecutionCommandInput,
  UpdatePipelineExecutionCommandOutput,
} from "../commands/UpdatePipelineExecutionCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "../commands/UpdateProjectCommand";
import { UpdateSpaceCommandInput, UpdateSpaceCommandOutput } from "../commands/UpdateSpaceCommand";
import { UpdateTrainingJobCommandInput, UpdateTrainingJobCommandOutput } from "../commands/UpdateTrainingJobCommand";
import { UpdateTrialCommandInput, UpdateTrialCommandOutput } from "../commands/UpdateTrialCommand";
import {
  UpdateTrialComponentCommandInput,
  UpdateTrialComponentCommandOutput,
} from "../commands/UpdateTrialComponentCommand";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "../commands/UpdateUserProfileCommand";
import { UpdateWorkforceCommandInput, UpdateWorkforceCommandOutput } from "../commands/UpdateWorkforceCommand";
import { UpdateWorkteamCommandInput, UpdateWorkteamCommandOutput } from "../commands/UpdateWorkteamCommand";
import {
  ActionSource,
  ActionSummary,
  AddAssociationRequest,
  AddAssociationResponse,
  AdditionalInferenceSpecificationDefinition,
  AdditionalS3DataSource,
  AddTagsInput,
  AddTagsOutput,
  AgentVersion,
  AggregationTransformationValue,
  Alarm,
  AlgorithmSpecification,
  AlgorithmStatusDetails,
  AlgorithmStatusItem,
  AlgorithmSummary,
  AlgorithmValidationProfile,
  AlgorithmValidationSpecification,
  AnnotationConsolidationConfig,
  AppDetails,
  AppImageConfigDetails,
  AppSpecification,
  ArtifactSource,
  ArtifactSourceType,
  ArtifactSummary,
  AssociateTrialComponentRequest,
  AssociateTrialComponentResponse,
  AssociationSummary,
  AsyncInferenceClientConfig,
  AsyncInferenceConfig,
  AsyncInferenceNotificationConfig,
  AsyncInferenceOutputConfig,
  AsyncNotificationTopicTypes,
  AthenaDatasetDefinition,
  AutoMLAlgorithm,
  AutoMLAlgorithmConfig,
  AutoMLCandidate,
  AutoMLCandidateGenerationConfig,
  AutoMLCandidateStep,
  AutoMLChannel,
  AutoMLContainerDefinition,
  AutoMLDataSource,
  AutoMLDataSplitConfig,
  AutoMLJobArtifacts,
  AutoMLJobChannel,
  AutoMLJobCompletionCriteria,
  AutoMLJobConfig,
  AutoMLJobObjective,
  AutoMLJobStepMetadata,
  AutoMLJobSummary,
  AutoMLOutputDataConfig,
  AutoMLPartialFailureReason,
  AutoMLProblemTypeConfig,
  AutoMLProblemTypeResolvedAttributes,
  AutoMLProcessingUnit,
  AutoMLResolvedAttributes,
  AutoMLS3DataSource,
  AutoMLSecurityConfig,
  AutoParameter,
  AutoRollbackConfig,
  Autotune,
  BatchDataCaptureConfig,
  BatchDescribeModelPackageError,
  BatchDescribeModelPackageInput,
  BatchDescribeModelPackageOutput,
  BatchDescribeModelPackageSummary,
  BatchTransformInput,
  BestObjectiveNotImproving,
  Bias,
  BlueGreenUpdatePolicy,
  CacheHitResult,
  CallbackStepMetadata,
  CandidateArtifactLocations,
  CandidateGenerationConfig,
  CandidateProperties,
  CanvasAppSettings,
  CapacitySize,
  CaptureContentTypeHeader,
  CaptureOption,
  CategoricalParameter,
  CategoricalParameterRange,
  CategoricalParameterRangeSpecification,
  Channel,
  ChannelSpecification,
  CheckpointConfig,
  ClarifyCheckStepMetadata,
  ClarifyExplainerConfig,
  ClarifyFeatureType,
  ClarifyInferenceConfig,
  ClarifyShapBaselineConfig,
  ClarifyShapConfig,
  ClarifyTextConfig,
  ClusterEbsVolumeConfig,
  ClusterInstanceGroupDetails,
  ClusterInstanceGroupSpecification,
  ClusterInstancePlacement,
  ClusterInstanceStatusDetails,
  ClusterInstanceStorageConfig,
  ClusterLifeCycleConfig,
  ClusterNodeDetails,
  ClusterNodeSummary,
  ClusterSummary,
  CodeEditorAppImageConfig,
  CodeEditorAppSettings,
  CodeRepository,
  CodeRepositorySummary,
  CognitoConfig,
  CognitoMemberDefinition,
  CollectionConfig,
  CollectionConfiguration,
  CompilationJobSummary,
  CompressionType,
  ConditionStepMetadata,
  ConflictException,
  ContainerConfig,
  ContainerDefinition,
  ContentClassifier,
  ContextSource,
  ContextSummary,
  ContinuousParameterRange,
  ContinuousParameterRangeSpecification,
  ConvergenceDetected,
  CreateActionRequest,
  CreateActionResponse,
  CreateAlgorithmInput,
  CreateAlgorithmOutput,
  CreateAppImageConfigRequest,
  CreateAppImageConfigResponse,
  CreateAppRequest,
  CreateAppResponse,
  CreateArtifactRequest,
  CreateArtifactResponse,
  CreateAutoMLJobRequest,
  CreateAutoMLJobResponse,
  CreateAutoMLJobV2Request,
  CreateAutoMLJobV2Response,
  CreateClusterRequest,
  CreateClusterResponse,
  CreateCodeRepositoryInput,
  CreateCodeRepositoryOutput,
  CustomImage,
  DataSource,
  DirectDeploySettings,
  FileSystemConfig,
  FileSystemDataSource,
  FillingType,
  FinalAutoMLJobObjectiveMetric,
  GenerativeAiSettings,
  GitConfig,
  HolidayConfigAttributes,
  HyperParameterSpecification,
  HyperParameterTuningJobObjective,
  IamIdentity,
  IdentityProviderOAuthSetting,
  ImageClassificationJobConfig,
  ImageConfig,
  InferenceSpecification,
  InstanceGroup,
  IntegerParameterRangeSpecification,
  JupyterLabAppImageConfig,
  KendraSettings,
  KernelGatewayImageConfig,
  KernelSpec,
  MetadataProperties,
  MetricDatum,
  MetricDefinition,
  MetricsSource,
  ModelAccessConfig,
  ModelDataSource,
  ModelDeployConfig,
  ModelInput,
  ModelPackageContainerDefinition,
  ModelRegisterSettings,
  MonitoringCsvDatasetFormat,
  MonitoringDatasetFormat,
  MonitoringJsonDatasetFormat,
  MonitoringParquetDatasetFormat,
  MultiModelConfig,
  OutputDataConfig,
  OutputParameter,
  ParameterRange,
  ProductionVariantInstanceType,
  RepositoryAuthConfig,
  ResourceConfig,
  ResourceInUse,
  ResourceLimitExceeded,
  ResourceNotFound,
  ResourceSpec,
  S3DataSource,
  S3ModelDataSource,
  ShuffleConfig,
  StoppingCondition,
  TabularJobConfig,
  TabularResolvedAttributes,
  Tag,
  TextClassificationJobConfig,
  TextGenerationJobConfig,
  TextGenerationResolvedAttributes,
  TimeSeriesConfig,
  TimeSeriesForecastingJobConfig,
  TimeSeriesForecastingSettings,
  TimeSeriesTransformations,
  TrafficRoutingConfig,
  TrainingImageConfig,
  TrainingInputMode,
  TrainingInstanceType,
  TrainingJobDefinition,
  TrainingRepositoryAuthConfig,
  TrainingSpecification,
  TransformDataSource,
  TransformInput,
  TransformInstanceType,
  TransformJobDefinition,
  TransformOutput,
  TransformResources,
  TransformS3DataSource,
  UserContext,
  VectorConfig,
  VpcConfig,
  WorkspaceSettings,
} from "../models/models_0";
import {
  CreateCompilationJobRequest,
  CreateCompilationJobResponse,
  CreateContextRequest,
  CreateContextResponse,
  CreateDataQualityJobDefinitionRequest,
  CreateDataQualityJobDefinitionResponse,
  CreateDeviceFleetRequest,
  CreateDomainRequest,
  CreateDomainResponse,
  CreateEdgeDeploymentPlanRequest,
  CreateEdgeDeploymentPlanResponse,
  CreateEdgeDeploymentStageRequest,
  CreateEdgePackagingJobRequest,
  CreateEndpointConfigInput,
  CreateEndpointConfigOutput,
  CreateEndpointInput,
  CreateEndpointOutput,
  CreateExperimentRequest,
  CreateExperimentResponse,
  CreateFeatureGroupRequest,
  CreateFeatureGroupResponse,
  CreateFlowDefinitionRequest,
  CreateFlowDefinitionResponse,
  CreateHubRequest,
  CreateHubResponse,
  CreateHumanTaskUiRequest,
  CreateHumanTaskUiResponse,
  CreateHyperParameterTuningJobRequest,
  CreateHyperParameterTuningJobResponse,
  CreateImageRequest,
  CreateImageResponse,
  CreateImageVersionRequest,
  CreateImageVersionResponse,
  CreateInferenceComponentInput,
  CreateInferenceComponentOutput,
  CreateInferenceExperimentRequest,
  CreateInferenceExperimentResponse,
  CreateInferenceRecommendationsJobRequest,
  CreateInferenceRecommendationsJobResponse,
  CreateLabelingJobRequest,
  CreateLabelingJobResponse,
  CreateMlflowTrackingServerRequest,
  CreateMlflowTrackingServerResponse,
  CreateModelBiasJobDefinitionRequest,
  CreateModelBiasJobDefinitionResponse,
  CreateModelCardExportJobRequest,
  CreateModelCardExportJobResponse,
  CreateModelCardRequest,
  CreateModelCardResponse,
  CreateModelExplainabilityJobDefinitionRequest,
  CreateModelExplainabilityJobDefinitionResponse,
  CreateModelInput,
  CreateModelOutput,
  CreateModelPackageGroupInput,
  CreateModelPackageGroupOutput,
  CreateModelPackageInput,
  CreateModelPackageOutput,
  CreateModelQualityJobDefinitionRequest,
  CreateModelQualityJobDefinitionResponse,
  CreateMonitoringScheduleRequest,
  CreateMonitoringScheduleResponse,
  CreateNotebookInstanceInput,
  CreateNotebookInstanceLifecycleConfigInput,
  CreateNotebookInstanceLifecycleConfigOutput,
  CreateNotebookInstanceOutput,
  CreatePipelineRequest,
  CreatePipelineResponse,
  CreatePresignedDomainUrlRequest,
  CreatePresignedDomainUrlResponse,
  CreatePresignedMlflowTrackingServerUrlRequest,
  CreatePresignedMlflowTrackingServerUrlResponse,
  CreatePresignedNotebookInstanceUrlInput,
  CreatePresignedNotebookInstanceUrlOutput,
  CreateProcessingJobRequest,
  CreateProcessingJobResponse,
  CreateProjectInput,
  CreateProjectOutput,
  CustomFileSystemConfig,
  CustomPosixUserConfig,
  DataCaptureConfig,
  DataCatalogConfig,
  DataQualityAppSpecification,
  DataQualityBaselineConfig,
  DataQualityJobInput,
  DatasetDefinition,
  DefaultEbsStorageSettings,
  DefaultSpaceSettings,
  DefaultSpaceStorageSettings,
  DeploymentConfig,
  DeploymentStage,
  DeviceSelectionConfig,
  DockerSettings,
  DomainSettings,
  DriftCheckBaselines,
  DriftCheckBias,
  DriftCheckExplainability,
  DriftCheckModelDataQuality,
  DriftCheckModelQuality,
  EdgeDeploymentConfig,
  EdgeDeploymentModelConfig,
  EdgeOutputConfig,
  EFSFileSystem,
  EFSFileSystemConfig,
  EndpointInfo,
  EndpointInput,
  EndpointInputConfiguration,
  EnvironmentParameterRanges,
  ExperimentConfig,
  Explainability,
  ExplainerConfig,
  FeatureDefinition,
  FileSource,
  FlowDefinitionOutputConfig,
  HubS3StorageConfig,
  HumanLoopActivationConditionsConfig,
  HumanLoopActivationConfig,
  HumanLoopConfig,
  HumanLoopRequestSource,
  HumanTaskConfig,
  HyperbandStrategyConfig,
  HyperParameterAlgorithmSpecification,
  HyperParameterTrainingJobDefinition,
  HyperParameterTuningInstanceConfig,
  HyperParameterTuningJobConfig,
  HyperParameterTuningJobStrategyConfig,
  HyperParameterTuningJobWarmStartConfig,
  HyperParameterTuningResourceConfig,
  InferenceComponentComputeResourceRequirements,
  InferenceComponentContainerSpecification,
  InferenceComponentRuntimeConfig,
  InferenceComponentSpecification,
  InferenceComponentStartupParameters,
  InferenceExecutionConfig,
  InferenceExperimentDataStorageConfig,
  InferenceExperimentSchedule,
  InputConfig,
  InstanceMetadataServiceConfiguration,
  IntegerParameterRange,
  JupyterLabAppSettings,
  JupyterServerAppSettings,
  KernelGatewayAppSettings,
  LabelingJobAlgorithmsConfig,
  LabelingJobDataAttributes,
  LabelingJobDataSource,
  LabelingJobInputConfig,
  LabelingJobOutputConfig,
  LabelingJobResourceConfig,
  LabelingJobS3DataSource,
  LabelingJobSnsDataSource,
  LabelingJobStoppingConditions,
  ModelBiasAppSpecification,
  ModelBiasBaselineConfig,
  ModelBiasJobInput,
  ModelCardExportOutputConfig,
  ModelCardSecurityConfig,
  ModelDataQuality,
  ModelExplainabilityAppSpecification,
  ModelExplainabilityBaselineConfig,
  ModelExplainabilityJobInput,
  ModelInfrastructureConfig,
  ModelLatencyThreshold,
  ModelMetrics,
  ModelPackageModelCard,
  ModelPackageSecurityConfig,
  ModelPackageValidationProfile,
  ModelPackageValidationSpecification,
  ModelQuality,
  ModelQualityAppSpecification,
  ModelQualityBaselineConfig,
  ModelQualityJobInput,
  ModelVariantConfig,
  MonitoringAppSpecification,
  MonitoringBaselineConfig,
  MonitoringClusterConfig,
  MonitoringConstraintsResource,
  MonitoringGroundTruthS3Input,
  MonitoringInput,
  MonitoringJobDefinition,
  MonitoringNetworkConfig,
  MonitoringOutput,
  MonitoringOutputConfig,
  MonitoringResources,
  MonitoringS3Output,
  MonitoringScheduleConfig,
  MonitoringStatisticsResource,
  MonitoringStoppingCondition,
  NeoVpcConfig,
  NetworkConfig,
  NotebookInstanceAcceleratorType,
  NotebookInstanceLifecycleHook,
  OfflineStoreConfig,
  OnlineStoreConfig,
  OnlineStoreSecurityConfig,
  OutputConfig,
  OwnershipSettings,
  ParallelismConfiguration,
  ParameterRanges,
  ParentHyperParameterTuningJob,
  Phase,
  PipelineDefinitionS3Location,
  ProcessingClusterConfig,
  ProcessingFeatureStoreOutput,
  ProcessingInput,
  ProcessingOutput,
  ProcessingOutputConfig,
  ProcessingResources,
  ProcessingS3Input,
  ProcessingS3Output,
  ProcessingStoppingCondition,
  ProductionVariant,
  ProductionVariantCoreDumpConfig,
  ProductionVariantManagedInstanceScaling,
  ProductionVariantRoutingConfig,
  ProductionVariantServerlessConfig,
  ProvisioningParameter,
  PublicWorkforceTaskPrice,
  RealTimeInferenceConfig,
  RecommendationJobCompiledOutputConfig,
  RecommendationJobContainerConfig,
  RecommendationJobInputConfig,
  RecommendationJobOutputConfig,
  RecommendationJobPayloadConfig,
  RecommendationJobResourceLimit,
  RecommendationJobStoppingConditions,
  RecommendationJobVpcConfig,
  RedshiftDatasetDefinition,
  ResourceLimits,
  RetryStrategy,
  RollingUpdatePolicy,
  RSessionAppSettings,
  RStudioServerProAppSettings,
  RStudioServerProDomainSettings,
  S3StorageConfig,
  ScheduleConfig,
  ServiceCatalogProvisioningDetails,
  ShadowModeConfig,
  ShadowModelVariantConfig,
  SharingSettings,
  SourceAlgorithm,
  SourceAlgorithmSpecification,
  SpaceCodeEditorAppSettings,
  Stairs,
  TargetPlatform,
  TensorBoardAppSettings,
  ThroughputConfig,
  TrafficPattern,
  TtlDuration,
  TuningJobCompletionCriteria,
  UiConfig,
  UiTemplate,
  USD,
  UserSettings,
} from "../models/models_1";
import {
  CreateSpaceRequest,
  CreateSpaceResponse,
  CreateStudioLifecycleConfigRequest,
  CreateStudioLifecycleConfigResponse,
  CreateTrainingJobRequest,
  CreateTrainingJobResponse,
  CreateTransformJobRequest,
  CreateTransformJobResponse,
  CreateTrialComponentRequest,
  CreateTrialComponentResponse,
  CreateTrialRequest,
  CreateTrialResponse,
  CreateUserProfileRequest,
  CreateUserProfileResponse,
  CreateWorkforceRequest,
  CreateWorkforceResponse,
  CreateWorkteamRequest,
  CreateWorkteamResponse,
  CustomFileSystem,
  CustomizedMetricSpecification,
  DataCaptureConfigSummary,
  DataProcessing,
  DebugHookConfig,
  DebugRuleConfiguration,
  DebugRuleEvaluationStatus,
  DeleteActionRequest,
  DeleteActionResponse,
  DeleteAlgorithmInput,
  DeleteAppImageConfigRequest,
  DeleteAppRequest,
  DeleteArtifactRequest,
  DeleteArtifactResponse,
  DeleteAssociationRequest,
  DeleteAssociationResponse,
  DeleteClusterRequest,
  DeleteClusterResponse,
  DeleteCodeRepositoryInput,
  DeleteCompilationJobRequest,
  DeleteContextRequest,
  DeleteContextResponse,
  DeleteDataQualityJobDefinitionRequest,
  DeleteDeviceFleetRequest,
  DeleteDomainRequest,
  DeleteEdgeDeploymentPlanRequest,
  DeleteEdgeDeploymentStageRequest,
  DeleteEndpointConfigInput,
  DeleteEndpointInput,
  DeleteExperimentRequest,
  DeleteExperimentResponse,
  DeleteFeatureGroupRequest,
  DeleteFlowDefinitionRequest,
  DeleteFlowDefinitionResponse,
  DeleteHubContentRequest,
  DeleteHubRequest,
  DeleteHumanTaskUiRequest,
  DeleteHumanTaskUiResponse,
  DeleteHyperParameterTuningJobRequest,
  DeleteImageRequest,
  DeleteImageResponse,
  DeleteImageVersionRequest,
  DeleteImageVersionResponse,
  DeleteInferenceComponentInput,
  DeleteInferenceExperimentRequest,
  DeleteInferenceExperimentResponse,
  DeleteMlflowTrackingServerRequest,
  DeleteMlflowTrackingServerResponse,
  DeleteModelBiasJobDefinitionRequest,
  DeleteModelCardRequest,
  DeleteModelExplainabilityJobDefinitionRequest,
  DeleteModelInput,
  DeleteModelPackageGroupInput,
  DeleteModelPackageGroupPolicyInput,
  DeleteModelPackageInput,
  DeleteModelQualityJobDefinitionRequest,
  DeleteMonitoringScheduleRequest,
  DeleteNotebookInstanceInput,
  DeleteNotebookInstanceLifecycleConfigInput,
  DeletePipelineRequest,
  DeletePipelineResponse,
  DeleteProjectInput,
  DeleteSpaceRequest,
  DeleteStudioLifecycleConfigRequest,
  DeleteTagsInput,
  DeleteTagsOutput,
  DeleteTrialComponentRequest,
  DeleteTrialComponentResponse,
  DeleteTrialRequest,
  DeleteTrialResponse,
  DeleteUserProfileRequest,
  DeleteWorkforceRequest,
  DeleteWorkforceResponse,
  DeleteWorkteamRequest,
  DeleteWorkteamResponse,
  DeployedImage,
  DeploymentRecommendation,
  DeploymentStageStatusSummary,
  DeregisterDevicesRequest,
  DerivedInformation,
  DescribeActionRequest,
  DescribeActionResponse,
  DescribeAlgorithmInput,
  DescribeAlgorithmOutput,
  DescribeAppImageConfigRequest,
  DescribeAppImageConfigResponse,
  DescribeAppRequest,
  DescribeAppResponse,
  DescribeArtifactRequest,
  DescribeArtifactResponse,
  DescribeAutoMLJobRequest,
  DescribeAutoMLJobResponse,
  DescribeAutoMLJobV2Request,
  DescribeAutoMLJobV2Response,
  DescribeClusterNodeRequest,
  DescribeClusterNodeResponse,
  DescribeClusterRequest,
  DescribeClusterResponse,
  DescribeCodeRepositoryInput,
  DescribeCodeRepositoryOutput,
  DescribeCompilationJobRequest,
  DescribeCompilationJobResponse,
  DescribeContextRequest,
  DescribeContextResponse,
  DescribeDataQualityJobDefinitionRequest,
  DescribeDataQualityJobDefinitionResponse,
  DescribeDeviceFleetRequest,
  DescribeDeviceFleetResponse,
  DescribeDeviceRequest,
  DescribeDeviceResponse,
  DescribeDomainRequest,
  DescribeDomainResponse,
  DescribeEdgeDeploymentPlanRequest,
  DescribeEdgeDeploymentPlanResponse,
  DescribeEdgePackagingJobRequest,
  DescribeEdgePackagingJobResponse,
  DescribeEndpointConfigInput,
  DescribeEndpointConfigOutput,
  DescribeEndpointInput,
  DescribeEndpointOutput,
  DescribeExperimentRequest,
  DescribeExperimentResponse,
  DescribeFeatureGroupRequest,
  DescribeFeatureGroupResponse,
  DescribeFeatureMetadataRequest,
  DescribeFeatureMetadataResponse,
  DescribeFlowDefinitionRequest,
  DescribeFlowDefinitionResponse,
  DescribeHubContentRequest,
  DescribeHubContentResponse,
  DescribeHubRequest,
  DescribeHubResponse,
  DescribeHumanTaskUiRequest,
  DescribeHumanTaskUiResponse,
  DescribeHyperParameterTuningJobRequest,
  DescribeHyperParameterTuningJobResponse,
  DescribeImageRequest,
  DescribeImageResponse,
  DescribeImageVersionRequest,
  DescribeImageVersionResponse,
  DescribeInferenceComponentInput,
  DescribeInferenceComponentOutput,
  DescribeInferenceExperimentRequest,
  DescribeInferenceExperimentResponse,
  DescribeInferenceRecommendationsJobRequest,
  DescribeInferenceRecommendationsJobResponse,
  DescribeLabelingJobRequest,
  DescribeLabelingJobResponse,
  DescribeLineageGroupRequest,
  DescribeLineageGroupResponse,
  DescribeMlflowTrackingServerRequest,
  DescribeMlflowTrackingServerResponse,
  DescribeModelBiasJobDefinitionRequest,
  DescribeModelBiasJobDefinitionResponse,
  DescribeModelCardExportJobRequest,
  DescribeModelCardExportJobResponse,
  DescribeModelCardRequest,
  DescribeModelCardResponse,
  DescribeModelExplainabilityJobDefinitionRequest,
  DescribeModelExplainabilityJobDefinitionResponse,
  DescribeModelInput,
  DescribeModelOutput,
  DescribeModelPackageGroupInput,
  DescribeModelPackageGroupOutput,
  DescribeModelPackageInput,
  DescribeModelPackageOutput,
  DescribeModelQualityJobDefinitionRequest,
  DescribeModelQualityJobDefinitionResponse,
  DescribeMonitoringScheduleRequest,
  DescribeMonitoringScheduleResponse,
  DescribeNotebookInstanceInput,
  DescribeNotebookInstanceOutput,
  EbsStorageSettings,
  EdgeDeploymentStatus,
  EdgeModel,
  EdgePresetDeploymentOutput,
  EndpointMetadata,
  EndpointOutputConfiguration,
  EndpointPerformance,
  EnvironmentParameter,
  ExperimentSource,
  FeatureParameter,
  FinalHyperParameterTuningJobObjectiveMetric,
  HubContentDependency,
  HyperParameterTrainingJobSummary,
  HyperParameterTuningJobCompletionDetails,
  HyperParameterTuningJobConsumedResources,
  IamPolicyConstraints,
  InferenceComponentContainerSpecificationSummary,
  InferenceComponentRuntimeConfigSummary,
  InferenceComponentSpecificationSummary,
  InferenceMetrics,
  InferenceRecommendation,
  InfraCheckConfig,
  LabelCounters,
  LabelingJobOutput,
  LastUpdateStatus,
  MemberDefinition,
  ModelArtifacts,
  ModelCardExportArtifacts,
  ModelClientConfig,
  ModelConfiguration,
  ModelDeployResult,
  ModelDigests,
  ModelPackageStatusDetails,
  ModelPackageStatusItem,
  ModelVariantConfigSummary,
  MonitoringExecutionSummary,
  NotificationConfiguration,
  ObjectiveStatusCounters,
  OfflineStoreStatus,
  OidcConfig,
  OidcMemberDefinition,
  PendingDeploymentSummary,
  PendingProductionVariantSummary,
  ProductionVariantStatus,
  ProductionVariantSummary,
  ProfilerConfig,
  ProfilerRuleConfiguration,
  RealTimeInferenceRecommendation,
  RecommendationMetrics,
  RemoteDebugConfig,
  ResolvedAttributes,
  RetentionPolicy,
  S3Presign,
  SessionChainingConfig,
  SourceIpConfig,
  SpaceJupyterLabAppSettings,
  SpaceSettings,
  SpaceSharingSettings,
  SpaceStorageSettings,
  TensorBoardOutputConfig,
  ThroughputConfigDescription,
  TrainingJobStatusCounters,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
  UiTemplateInfo,
  WorkerAccessConfiguration,
  WorkforceVpcConfigRequest,
} from "../models/models_2";
import {
  DescribeNotebookInstanceLifecycleConfigInput,
  DescribeNotebookInstanceLifecycleConfigOutput,
  DescribePipelineDefinitionForExecutionRequest,
  DescribePipelineDefinitionForExecutionResponse,
  DescribePipelineExecutionRequest,
  DescribePipelineExecutionResponse,
  DescribePipelineRequest,
  DescribePipelineResponse,
  DescribeProcessingJobRequest,
  DescribeProcessingJobResponse,
  DescribeProjectInput,
  DescribeProjectOutput,
  DescribeSpaceRequest,
  DescribeSpaceResponse,
  DescribeStudioLifecycleConfigRequest,
  DescribeStudioLifecycleConfigResponse,
  DescribeSubscribedWorkteamRequest,
  DescribeSubscribedWorkteamResponse,
  DescribeTrainingJobRequest,
  DescribeTrainingJobResponse,
  DescribeTransformJobRequest,
  DescribeTransformJobResponse,
  DescribeTrialComponentRequest,
  DescribeTrialComponentResponse,
  DescribeTrialRequest,
  DescribeTrialResponse,
  DescribeUserProfileRequest,
  DescribeUserProfileResponse,
  DescribeWorkforceRequest,
  DescribeWorkforceResponse,
  DescribeWorkteamRequest,
  DescribeWorkteamResponse,
  DesiredWeightAndCapacity,
  Device,
  DeviceDeploymentSummary,
  DeviceFleetSummary,
  DeviceStats,
  DeviceSummary,
  DisableSagemakerServicecatalogPortfolioInput,
  DisableSagemakerServicecatalogPortfolioOutput,
  DisassociateTrialComponentRequest,
  DisassociateTrialComponentResponse,
  DomainDetails,
  DomainSettingsForUpdate,
  DynamicScalingConfiguration,
  Edge,
  EdgeDeploymentPlanSummary,
  EdgeModelStat,
  EdgeModelSummary,
  EdgePackagingJobSummary,
  EMRStepMetadata,
  EnableSagemakerServicecatalogPortfolioInput,
  EnableSagemakerServicecatalogPortfolioOutput,
  Endpoint,
  EndpointConfigSummary,
  EndpointSummary,
  Experiment,
  ExperimentSummary,
  FailStepMetadata,
  FeatureGroup,
  FeatureGroupSummary,
  FeatureMetadata,
  Filter,
  FlowDefinitionSummary,
  GetDeviceFleetReportRequest,
  GetDeviceFleetReportResponse,
  GetLineageGroupPolicyRequest,
  GetLineageGroupPolicyResponse,
  GetModelPackageGroupPolicyInput,
  GetModelPackageGroupPolicyOutput,
  GetSagemakerServicecatalogPortfolioStatusInput,
  GetSagemakerServicecatalogPortfolioStatusOutput,
  GetScalingConfigurationRecommendationRequest,
  GetScalingConfigurationRecommendationResponse,
  GetSearchSuggestionsRequest,
  GetSearchSuggestionsResponse,
  GitConfigForUpdate,
  HubContentInfo,
  HubInfo,
  HumanTaskUiSummary,
  HyperParameterTuningJobSearchEntity,
  HyperParameterTuningJobSummary,
  Image,
  ImageVersion,
  ImportHubContentRequest,
  ImportHubContentResponse,
  InferenceComponentSummary,
  InferenceExperimentSummary,
  InferenceRecommendationsJob,
  InferenceRecommendationsJobStep,
  LabelCountersForWorkteam,
  LabelingJobForWorkteamSummary,
  LabelingJobSummary,
  LambdaStepMetadata,
  LineageGroupSummary,
  LineageType,
  ListActionsRequest,
  ListActionsResponse,
  ListAlgorithmsInput,
  ListAlgorithmsOutput,
  ListAliasesRequest,
  ListAliasesResponse,
  ListAppImageConfigsRequest,
  ListAppImageConfigsResponse,
  ListAppsRequest,
  ListAppsResponse,
  ListArtifactsRequest,
  ListArtifactsResponse,
  ListAssociationsRequest,
  ListAssociationsResponse,
  ListAutoMLJobsRequest,
  ListAutoMLJobsResponse,
  ListCandidatesForAutoMLJobRequest,
  ListCandidatesForAutoMLJobResponse,
  ListClusterNodesRequest,
  ListClusterNodesResponse,
  ListClustersRequest,
  ListClustersResponse,
  ListCodeRepositoriesInput,
  ListCodeRepositoriesOutput,
  ListCompilationJobsRequest,
  ListCompilationJobsResponse,
  ListContextsRequest,
  ListContextsResponse,
  ListDataQualityJobDefinitionsRequest,
  ListDataQualityJobDefinitionsResponse,
  ListDeviceFleetsRequest,
  ListDeviceFleetsResponse,
  ListDevicesRequest,
  ListDevicesResponse,
  ListDomainsRequest,
  ListDomainsResponse,
  ListEdgeDeploymentPlansRequest,
  ListEdgeDeploymentPlansResponse,
  ListEdgePackagingJobsRequest,
  ListEdgePackagingJobsResponse,
  ListEndpointConfigsInput,
  ListEndpointConfigsOutput,
  ListEndpointsInput,
  ListEndpointsOutput,
  ListExperimentsRequest,
  ListExperimentsResponse,
  ListFeatureGroupsRequest,
  ListFeatureGroupsResponse,
  ListFlowDefinitionsRequest,
  ListFlowDefinitionsResponse,
  ListHubContentsRequest,
  ListHubContentsResponse,
  ListHubContentVersionsRequest,
  ListHubContentVersionsResponse,
  ListHubsRequest,
  ListHubsResponse,
  ListHumanTaskUisRequest,
  ListHumanTaskUisResponse,
  ListHyperParameterTuningJobsRequest,
  ListHyperParameterTuningJobsResponse,
  ListImagesRequest,
  ListImagesResponse,
  ListImageVersionsRequest,
  ListImageVersionsResponse,
  ListInferenceComponentsInput,
  ListInferenceComponentsOutput,
  ListInferenceExperimentsRequest,
  ListInferenceExperimentsResponse,
  ListInferenceRecommendationsJobsRequest,
  ListInferenceRecommendationsJobsResponse,
  ListInferenceRecommendationsJobStepsRequest,
  ListInferenceRecommendationsJobStepsResponse,
  ListLabelingJobsForWorkteamRequest,
  ListLabelingJobsForWorkteamResponse,
  ListLabelingJobsRequest,
  ListLabelingJobsResponse,
  ListLineageGroupsRequest,
  ListLineageGroupsResponse,
  ListMlflowTrackingServersRequest,
  ListMlflowTrackingServersResponse,
  ListModelBiasJobDefinitionsRequest,
  ListModelBiasJobDefinitionsResponse,
  ListModelCardExportJobsRequest,
  ListModelCardExportJobsResponse,
  ListModelCardsRequest,
  ListModelCardsResponse,
  ListModelCardVersionsRequest,
  ListModelCardVersionsResponse,
  ListModelExplainabilityJobDefinitionsRequest,
  ListModelExplainabilityJobDefinitionsResponse,
  ListModelMetadataRequest,
  ListModelMetadataResponse,
  ListModelPackageGroupsInput,
  ListModelPackageGroupsOutput,
  ListModelPackagesInput,
  ListModelPackagesOutput,
  ListModelQualityJobDefinitionsRequest,
  ListModelQualityJobDefinitionsResponse,
  ListModelsInput,
  ListModelsOutput,
  ListMonitoringAlertHistoryRequest,
  ListMonitoringAlertHistoryResponse,
  ListMonitoringAlertsRequest,
  MetricData,
  MetricSpecification,
  ModelCardExportJobSummary,
  ModelCardSummary,
  ModelCardVersionSummary,
  ModelMetadataFilter,
  ModelMetadataSearchExpression,
  ModelMetadataSummary,
  ModelPackageGroupSummary,
  ModelPackageSummary,
  ModelSummary,
  MonitoringAlertHistorySummary,
  MonitoringJobDefinitionSummary,
  MonitoringSchedule,
  OidcConfigForResponse,
  PipelineExperimentConfig,
  PredefinedMetricSpecification,
  ProductionVariantServerlessUpdateConfig,
  ProfilerRuleEvaluationStatus,
  PropertyNameQuery,
  PropertyNameSuggestion,
  RecommendationJobInferenceBenchmark,
  RStudioServerProDomainSettingsForUpdate,
  ScalingPolicy,
  ScalingPolicyMetric,
  ScalingPolicyObjective,
  SecondaryStatusTransition,
  SelectedStep,
  SelectiveExecutionConfig,
  ServiceCatalogProvisionedProductDetails,
  SubscribedWorkteam,
  SuggestionQuery,
  TargetTrackingScalingPolicyConfiguration,
  TrackingServerSummary,
  TrialComponentMetricSummary,
  TrialComponentSource,
  TrialSource,
  WarmPoolStatus,
  Workforce,
  WorkforceVpcConfigResponse,
  Workteam,
} from "../models/models_3";
import {
  ListMonitoringAlertsResponse,
  ListMonitoringExecutionsRequest,
  ListMonitoringExecutionsResponse,
  ListMonitoringSchedulesRequest,
  ListMonitoringSchedulesResponse,
  ListNotebookInstanceLifecycleConfigsInput,
  ListNotebookInstanceLifecycleConfigsOutput,
  ListNotebookInstancesInput,
  ListNotebookInstancesOutput,
  ListPipelineExecutionsRequest,
  ListPipelineExecutionsResponse,
  ListPipelineExecutionStepsRequest,
  ListPipelineExecutionStepsResponse,
  ListPipelineParametersForExecutionRequest,
  ListPipelineParametersForExecutionResponse,
  ListPipelinesRequest,
  ListPipelinesResponse,
  ListProcessingJobsRequest,
  ListProcessingJobsResponse,
  ListProjectsInput,
  ListProjectsOutput,
  ListResourceCatalogsRequest,
  ListResourceCatalogsResponse,
  ListSpacesRequest,
  ListSpacesResponse,
  ListStageDevicesRequest,
  ListStageDevicesResponse,
  ListStudioLifecycleConfigsRequest,
  ListStudioLifecycleConfigsResponse,
  ListSubscribedWorkteamsRequest,
  ListSubscribedWorkteamsResponse,
  ListTagsInput,
  ListTagsOutput,
  ListTrainingJobsForHyperParameterTuningJobRequest,
  ListTrainingJobsForHyperParameterTuningJobResponse,
  ListTrainingJobsRequest,
  ListTrainingJobsResponse,
  ListTransformJobsRequest,
  ListTransformJobsResponse,
  ListTrialComponentsRequest,
  ListTrialComponentsResponse,
  ListTrialsRequest,
  ListTrialsResponse,
  ListUserProfilesRequest,
  ListUserProfilesResponse,
  ListWorkforcesRequest,
  ListWorkforcesResponse,
  ListWorkteamsRequest,
  ListWorkteamsResponse,
  Model,
  ModelCard,
  ModelDashboardEndpoint,
  ModelDashboardIndicatorAction,
  ModelDashboardModel,
  ModelDashboardModelCard,
  ModelDashboardMonitoringSchedule,
  ModelPackage,
  ModelPackageGroup,
  ModelStepMetadata,
  ModelVariantAction,
  MonitoringAlertActions,
  MonitoringAlertSummary,
  MonitoringScheduleSummary,
  NestedFilters,
  NotebookInstanceLifecycleConfigSummary,
  NotebookInstanceSummary,
  OnlineStoreConfigUpdate,
  OwnershipSettingsSummary,
  Parameter,
  Parent,
  Pipeline,
  PipelineExecution,
  PipelineExecutionStep,
  PipelineExecutionStepMetadata,
  PipelineExecutionSummary,
  PipelineSummary,
  ProcessingJob,
  ProcessingJobStepMetadata,
  ProcessingJobSummary,
  ProfilerConfigForUpdate,
  Project,
  ProjectSummary,
  PutModelPackageGroupPolicyInput,
  PutModelPackageGroupPolicyOutput,
  QualityCheckStepMetadata,
  QueryFilters,
  QueryLineageRequest,
  QueryLineageResponse,
  RegisterDevicesRequest,
  RegisterModelStepMetadata,
  RemoteDebugConfigForUpdate,
  RenderableTask,
  RenderingError,
  RenderUiTemplateRequest,
  RenderUiTemplateResponse,
  ResourceCatalog,
  ResourceConfigForUpdate,
  RetryPipelineExecutionRequest,
  RetryPipelineExecutionResponse,
  SearchExpression,
  SearchRecord,
  SearchRequest,
  SearchResponse,
  SelectiveExecutionResult,
  SendPipelineExecutionStepFailureRequest,
  SendPipelineExecutionStepFailureResponse,
  SendPipelineExecutionStepSuccessRequest,
  SendPipelineExecutionStepSuccessResponse,
  ServiceCatalogProvisioningUpdateDetails,
  SpaceDetails,
  SpaceSettingsSummary,
  SpaceSharingSettingsSummary,
  StartEdgeDeploymentStageRequest,
  StartInferenceExperimentRequest,
  StartInferenceExperimentResponse,
  StartMlflowTrackingServerRequest,
  StartMlflowTrackingServerResponse,
  StartMonitoringScheduleRequest,
  StartNotebookInstanceInput,
  StartPipelineExecutionRequest,
  StartPipelineExecutionResponse,
  StopAutoMLJobRequest,
  StopCompilationJobRequest,
  StopEdgeDeploymentStageRequest,
  StopEdgePackagingJobRequest,
  StopHyperParameterTuningJobRequest,
  StopInferenceExperimentRequest,
  StopInferenceExperimentResponse,
  StopInferenceRecommendationsJobRequest,
  StopLabelingJobRequest,
  StopMlflowTrackingServerRequest,
  StopMlflowTrackingServerResponse,
  StopMonitoringScheduleRequest,
  StopNotebookInstanceInput,
  StopPipelineExecutionRequest,
  StopPipelineExecutionResponse,
  StopProcessingJobRequest,
  StopTrainingJobRequest,
  StopTransformJobRequest,
  StudioLifecycleConfigDetails,
  ThroughputConfigUpdate,
  TrainingJob,
  TrainingJobStepMetadata,
  TrainingJobSummary,
  TransformJob,
  TransformJobStepMetadata,
  TransformJobSummary,
  Trial,
  TrialComponent,
  TrialComponentSimpleSummary,
  TrialComponentSourceDetail,
  TrialComponentSummary,
  TrialSummary,
  TuningJobStepMetaData,
  UpdateActionRequest,
  UpdateActionResponse,
  UpdateAppImageConfigRequest,
  UpdateAppImageConfigResponse,
  UpdateArtifactRequest,
  UpdateArtifactResponse,
  UpdateClusterRequest,
  UpdateClusterResponse,
  UpdateClusterSoftwareRequest,
  UpdateClusterSoftwareResponse,
  UpdateCodeRepositoryInput,
  UpdateCodeRepositoryOutput,
  UpdateContextRequest,
  UpdateContextResponse,
  UpdateDeviceFleetRequest,
  UpdateDevicesRequest,
  UpdateDomainRequest,
  UpdateDomainResponse,
  UpdateEndpointInput,
  UpdateEndpointOutput,
  UpdateEndpointWeightsAndCapacitiesInput,
  UpdateEndpointWeightsAndCapacitiesOutput,
  UpdateExperimentRequest,
  UpdateExperimentResponse,
  UpdateFeatureGroupRequest,
  UpdateFeatureGroupResponse,
  UpdateFeatureMetadataRequest,
  UpdateHubRequest,
  UpdateHubResponse,
  UpdateImageRequest,
  UpdateImageResponse,
  UpdateImageVersionRequest,
  UpdateImageVersionResponse,
  UpdateInferenceComponentInput,
  UpdateInferenceComponentOutput,
  UpdateInferenceComponentRuntimeConfigInput,
  UpdateInferenceComponentRuntimeConfigOutput,
  UpdateInferenceExperimentRequest,
  UpdateInferenceExperimentResponse,
  UpdateMlflowTrackingServerRequest,
  UpdateMlflowTrackingServerResponse,
  UpdateModelCardRequest,
  UpdateModelCardResponse,
  UpdateModelPackageInput,
  UpdateModelPackageOutput,
  UpdateMonitoringAlertRequest,
  UpdateMonitoringAlertResponse,
  UpdateMonitoringScheduleRequest,
  UpdateMonitoringScheduleResponse,
  UpdateNotebookInstanceInput,
  UpdateNotebookInstanceLifecycleConfigInput,
  UpdateNotebookInstanceLifecycleConfigOutput,
  UpdateNotebookInstanceOutput,
  UpdatePipelineExecutionRequest,
  UpdatePipelineExecutionResponse,
  UpdatePipelineRequest,
  UpdatePipelineResponse,
  UpdateProjectInput,
  UpdateProjectOutput,
  UpdateSpaceRequest,
  UpdateSpaceResponse,
  UpdateTrainingJobRequest,
  UpdateTrainingJobResponse,
  UpdateTrialComponentRequest,
  UpdateTrialComponentResponse,
  UpdateTrialRequest,
  UpdateTrialResponse,
  UpdateUserProfileRequest,
  UpdateUserProfileResponse,
  UpdateWorkforceRequest,
  UpdateWorkforceResponse,
  UpdateWorkteamRequest,
  UpdateWorkteamResponse,
  UserProfileDetails,
  VariantProperty,
  Vertex,
  VisibilityConditions,
} from "../models/models_4";
import { SageMakerServiceException as __BaseException } from "../models/SageMakerServiceException";

/**
 * serializeAws_json1_1AddAssociationCommand
 */
export const se_AddAssociationCommand = async (
  input: AddAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddAssociation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddTagsCommand
 */
export const se_AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateTrialComponentCommand
 */
export const se_AssociateTrialComponentCommand = async (
  input: AssociateTrialComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateTrialComponent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDescribeModelPackageCommand
 */
export const se_BatchDescribeModelPackageCommand = async (
  input: BatchDescribeModelPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDescribeModelPackage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateActionCommand
 */
export const se_CreateActionCommand = async (
  input: CreateActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAlgorithmCommand
 */
export const se_CreateAlgorithmCommand = async (
  input: CreateAlgorithmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAlgorithm");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAppCommand
 */
export const se_CreateAppCommand = async (
  input: CreateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAppImageConfigCommand
 */
export const se_CreateAppImageConfigCommand = async (
  input: CreateAppImageConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAppImageConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateArtifactCommand
 */
export const se_CreateArtifactCommand = async (
  input: CreateArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateArtifact");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAutoMLJobCommand
 */
export const se_CreateAutoMLJobCommand = async (
  input: CreateAutoMLJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAutoMLJob");
  let body: any;
  body = JSON.stringify(se_CreateAutoMLJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAutoMLJobV2Command
 */
export const se_CreateAutoMLJobV2Command = async (
  input: CreateAutoMLJobV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAutoMLJobV2");
  let body: any;
  body = JSON.stringify(se_CreateAutoMLJobV2Request(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateClusterCommand
 */
export const se_CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCodeRepositoryCommand
 */
export const se_CreateCodeRepositoryCommand = async (
  input: CreateCodeRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCodeRepository");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCompilationJobCommand
 */
export const se_CreateCompilationJobCommand = async (
  input: CreateCompilationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCompilationJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateContextCommand
 */
export const se_CreateContextCommand = async (
  input: CreateContextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateContext");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDataQualityJobDefinitionCommand
 */
export const se_CreateDataQualityJobDefinitionCommand = async (
  input: CreateDataQualityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDataQualityJobDefinition");
  let body: any;
  body = JSON.stringify(se_CreateDataQualityJobDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDeviceFleetCommand
 */
export const se_CreateDeviceFleetCommand = async (
  input: CreateDeviceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDeviceFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDomainCommand
 */
export const se_CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEdgeDeploymentPlanCommand
 */
export const se_CreateEdgeDeploymentPlanCommand = async (
  input: CreateEdgeDeploymentPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEdgeDeploymentPlan");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEdgeDeploymentStageCommand
 */
export const se_CreateEdgeDeploymentStageCommand = async (
  input: CreateEdgeDeploymentStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEdgeDeploymentStage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEdgePackagingJobCommand
 */
export const se_CreateEdgePackagingJobCommand = async (
  input: CreateEdgePackagingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEdgePackagingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEndpointCommand
 */
export const se_CreateEndpointCommand = async (
  input: CreateEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEndpointConfigCommand
 */
export const se_CreateEndpointConfigCommand = async (
  input: CreateEndpointConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEndpointConfig");
  let body: any;
  body = JSON.stringify(se_CreateEndpointConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateExperimentCommand
 */
export const se_CreateExperimentCommand = async (
  input: CreateExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateExperiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFeatureGroupCommand
 */
export const se_CreateFeatureGroupCommand = async (
  input: CreateFeatureGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFeatureGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFlowDefinitionCommand
 */
export const se_CreateFlowDefinitionCommand = async (
  input: CreateFlowDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFlowDefinition");
  let body: any;
  body = JSON.stringify(se_CreateFlowDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateHubCommand
 */
export const se_CreateHubCommand = async (
  input: CreateHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateHub");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateHumanTaskUiCommand
 */
export const se_CreateHumanTaskUiCommand = async (
  input: CreateHumanTaskUiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateHumanTaskUi");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateHyperParameterTuningJobCommand
 */
export const se_CreateHyperParameterTuningJobCommand = async (
  input: CreateHyperParameterTuningJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateHyperParameterTuningJob");
  let body: any;
  body = JSON.stringify(se_CreateHyperParameterTuningJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateImageCommand
 */
export const se_CreateImageCommand = async (
  input: CreateImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateImageVersionCommand
 */
export const se_CreateImageVersionCommand = async (
  input: CreateImageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateImageVersion");
  let body: any;
  body = JSON.stringify(se_CreateImageVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInferenceComponentCommand
 */
export const se_CreateInferenceComponentCommand = async (
  input: CreateInferenceComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateInferenceComponent");
  let body: any;
  body = JSON.stringify(se_CreateInferenceComponentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInferenceExperimentCommand
 */
export const se_CreateInferenceExperimentCommand = async (
  input: CreateInferenceExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateInferenceExperiment");
  let body: any;
  body = JSON.stringify(se_CreateInferenceExperimentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInferenceRecommendationsJobCommand
 */
export const se_CreateInferenceRecommendationsJobCommand = async (
  input: CreateInferenceRecommendationsJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateInferenceRecommendationsJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLabelingJobCommand
 */
export const se_CreateLabelingJobCommand = async (
  input: CreateLabelingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLabelingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateMlflowTrackingServerCommand
 */
export const se_CreateMlflowTrackingServerCommand = async (
  input: CreateMlflowTrackingServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateMlflowTrackingServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelCommand
 */
export const se_CreateModelCommand = async (
  input: CreateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelBiasJobDefinitionCommand
 */
export const se_CreateModelBiasJobDefinitionCommand = async (
  input: CreateModelBiasJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModelBiasJobDefinition");
  let body: any;
  body = JSON.stringify(se_CreateModelBiasJobDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelCardCommand
 */
export const se_CreateModelCardCommand = async (
  input: CreateModelCardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModelCard");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelCardExportJobCommand
 */
export const se_CreateModelCardExportJobCommand = async (
  input: CreateModelCardExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModelCardExportJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelExplainabilityJobDefinitionCommand
 */
export const se_CreateModelExplainabilityJobDefinitionCommand = async (
  input: CreateModelExplainabilityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModelExplainabilityJobDefinition");
  let body: any;
  body = JSON.stringify(se_CreateModelExplainabilityJobDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelPackageCommand
 */
export const se_CreateModelPackageCommand = async (
  input: CreateModelPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModelPackage");
  let body: any;
  body = JSON.stringify(se_CreateModelPackageInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelPackageGroupCommand
 */
export const se_CreateModelPackageGroupCommand = async (
  input: CreateModelPackageGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModelPackageGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelQualityJobDefinitionCommand
 */
export const se_CreateModelQualityJobDefinitionCommand = async (
  input: CreateModelQualityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModelQualityJobDefinition");
  let body: any;
  body = JSON.stringify(se_CreateModelQualityJobDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateMonitoringScheduleCommand
 */
export const se_CreateMonitoringScheduleCommand = async (
  input: CreateMonitoringScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateMonitoringSchedule");
  let body: any;
  body = JSON.stringify(se_CreateMonitoringScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateNotebookInstanceCommand
 */
export const se_CreateNotebookInstanceCommand = async (
  input: CreateNotebookInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateNotebookInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand
 */
export const se_CreateNotebookInstanceLifecycleConfigCommand = async (
  input: CreateNotebookInstanceLifecycleConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateNotebookInstanceLifecycleConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePipelineCommand
 */
export const se_CreatePipelineCommand = async (
  input: CreatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePipeline");
  let body: any;
  body = JSON.stringify(se_CreatePipelineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePresignedDomainUrlCommand
 */
export const se_CreatePresignedDomainUrlCommand = async (
  input: CreatePresignedDomainUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePresignedDomainUrl");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePresignedMlflowTrackingServerUrlCommand
 */
export const se_CreatePresignedMlflowTrackingServerUrlCommand = async (
  input: CreatePresignedMlflowTrackingServerUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePresignedMlflowTrackingServerUrl");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand
 */
export const se_CreatePresignedNotebookInstanceUrlCommand = async (
  input: CreatePresignedNotebookInstanceUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePresignedNotebookInstanceUrl");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProcessingJobCommand
 */
export const se_CreateProcessingJobCommand = async (
  input: CreateProcessingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProcessingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProjectCommand
 */
export const se_CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSpaceCommand
 */
export const se_CreateSpaceCommand = async (
  input: CreateSpaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSpace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStudioLifecycleConfigCommand
 */
export const se_CreateStudioLifecycleConfigCommand = async (
  input: CreateStudioLifecycleConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateStudioLifecycleConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTrainingJobCommand
 */
export const se_CreateTrainingJobCommand = async (
  input: CreateTrainingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTrainingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTransformJobCommand
 */
export const se_CreateTransformJobCommand = async (
  input: CreateTransformJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTransformJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTrialCommand
 */
export const se_CreateTrialCommand = async (
  input: CreateTrialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTrial");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTrialComponentCommand
 */
export const se_CreateTrialComponentCommand = async (
  input: CreateTrialComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTrialComponent");
  let body: any;
  body = JSON.stringify(se_CreateTrialComponentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserProfileCommand
 */
export const se_CreateUserProfileCommand = async (
  input: CreateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUserProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWorkforceCommand
 */
export const se_CreateWorkforceCommand = async (
  input: CreateWorkforceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWorkforce");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWorkteamCommand
 */
export const se_CreateWorkteamCommand = async (
  input: CreateWorkteamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWorkteam");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteActionCommand
 */
export const se_DeleteActionCommand = async (
  input: DeleteActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAlgorithmCommand
 */
export const se_DeleteAlgorithmCommand = async (
  input: DeleteAlgorithmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAlgorithm");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppCommand
 */
export const se_DeleteAppCommand = async (
  input: DeleteAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppImageConfigCommand
 */
export const se_DeleteAppImageConfigCommand = async (
  input: DeleteAppImageConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAppImageConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteArtifactCommand
 */
export const se_DeleteArtifactCommand = async (
  input: DeleteArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteArtifact");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAssociationCommand
 */
export const se_DeleteAssociationCommand = async (
  input: DeleteAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAssociation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteClusterCommand
 */
export const se_DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCodeRepositoryCommand
 */
export const se_DeleteCodeRepositoryCommand = async (
  input: DeleteCodeRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCodeRepository");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCompilationJobCommand
 */
export const se_DeleteCompilationJobCommand = async (
  input: DeleteCompilationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCompilationJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteContextCommand
 */
export const se_DeleteContextCommand = async (
  input: DeleteContextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteContext");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDataQualityJobDefinitionCommand
 */
export const se_DeleteDataQualityJobDefinitionCommand = async (
  input: DeleteDataQualityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDataQualityJobDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDeviceFleetCommand
 */
export const se_DeleteDeviceFleetCommand = async (
  input: DeleteDeviceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDeviceFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDomainCommand
 */
export const se_DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEdgeDeploymentPlanCommand
 */
export const se_DeleteEdgeDeploymentPlanCommand = async (
  input: DeleteEdgeDeploymentPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEdgeDeploymentPlan");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEdgeDeploymentStageCommand
 */
export const se_DeleteEdgeDeploymentStageCommand = async (
  input: DeleteEdgeDeploymentStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEdgeDeploymentStage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEndpointCommand
 */
export const se_DeleteEndpointCommand = async (
  input: DeleteEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEndpointConfigCommand
 */
export const se_DeleteEndpointConfigCommand = async (
  input: DeleteEndpointConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEndpointConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteExperimentCommand
 */
export const se_DeleteExperimentCommand = async (
  input: DeleteExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteExperiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFeatureGroupCommand
 */
export const se_DeleteFeatureGroupCommand = async (
  input: DeleteFeatureGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFeatureGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFlowDefinitionCommand
 */
export const se_DeleteFlowDefinitionCommand = async (
  input: DeleteFlowDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFlowDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteHubCommand
 */
export const se_DeleteHubCommand = async (
  input: DeleteHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteHub");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteHubContentCommand
 */
export const se_DeleteHubContentCommand = async (
  input: DeleteHubContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteHubContent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteHumanTaskUiCommand
 */
export const se_DeleteHumanTaskUiCommand = async (
  input: DeleteHumanTaskUiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteHumanTaskUi");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteHyperParameterTuningJobCommand
 */
export const se_DeleteHyperParameterTuningJobCommand = async (
  input: DeleteHyperParameterTuningJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteHyperParameterTuningJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteImageCommand
 */
export const se_DeleteImageCommand = async (
  input: DeleteImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteImageVersionCommand
 */
export const se_DeleteImageVersionCommand = async (
  input: DeleteImageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteImageVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteInferenceComponentCommand
 */
export const se_DeleteInferenceComponentCommand = async (
  input: DeleteInferenceComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteInferenceComponent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteInferenceExperimentCommand
 */
export const se_DeleteInferenceExperimentCommand = async (
  input: DeleteInferenceExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteInferenceExperiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMlflowTrackingServerCommand
 */
export const se_DeleteMlflowTrackingServerCommand = async (
  input: DeleteMlflowTrackingServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMlflowTrackingServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelCommand
 */
export const se_DeleteModelCommand = async (
  input: DeleteModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelBiasJobDefinitionCommand
 */
export const se_DeleteModelBiasJobDefinitionCommand = async (
  input: DeleteModelBiasJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModelBiasJobDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelCardCommand
 */
export const se_DeleteModelCardCommand = async (
  input: DeleteModelCardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModelCard");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelExplainabilityJobDefinitionCommand
 */
export const se_DeleteModelExplainabilityJobDefinitionCommand = async (
  input: DeleteModelExplainabilityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModelExplainabilityJobDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelPackageCommand
 */
export const se_DeleteModelPackageCommand = async (
  input: DeleteModelPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModelPackage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelPackageGroupCommand
 */
export const se_DeleteModelPackageGroupCommand = async (
  input: DeleteModelPackageGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModelPackageGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelPackageGroupPolicyCommand
 */
export const se_DeleteModelPackageGroupPolicyCommand = async (
  input: DeleteModelPackageGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModelPackageGroupPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelQualityJobDefinitionCommand
 */
export const se_DeleteModelQualityJobDefinitionCommand = async (
  input: DeleteModelQualityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModelQualityJobDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMonitoringScheduleCommand
 */
export const se_DeleteMonitoringScheduleCommand = async (
  input: DeleteMonitoringScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMonitoringSchedule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteNotebookInstanceCommand
 */
export const se_DeleteNotebookInstanceCommand = async (
  input: DeleteNotebookInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteNotebookInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand
 */
export const se_DeleteNotebookInstanceLifecycleConfigCommand = async (
  input: DeleteNotebookInstanceLifecycleConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteNotebookInstanceLifecycleConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePipelineCommand
 */
export const se_DeletePipelineCommand = async (
  input: DeletePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePipeline");
  let body: any;
  body = JSON.stringify(se_DeletePipelineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProjectCommand
 */
export const se_DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSpaceCommand
 */
export const se_DeleteSpaceCommand = async (
  input: DeleteSpaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSpace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteStudioLifecycleConfigCommand
 */
export const se_DeleteStudioLifecycleConfigCommand = async (
  input: DeleteStudioLifecycleConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteStudioLifecycleConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTagsCommand
 */
export const se_DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTrialCommand
 */
export const se_DeleteTrialCommand = async (
  input: DeleteTrialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTrial");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTrialComponentCommand
 */
export const se_DeleteTrialComponentCommand = async (
  input: DeleteTrialComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTrialComponent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserProfileCommand
 */
export const se_DeleteUserProfileCommand = async (
  input: DeleteUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUserProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWorkforceCommand
 */
export const se_DeleteWorkforceCommand = async (
  input: DeleteWorkforceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWorkforce");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWorkteamCommand
 */
export const se_DeleteWorkteamCommand = async (
  input: DeleteWorkteamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWorkteam");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterDevicesCommand
 */
export const se_DeregisterDevicesCommand = async (
  input: DeregisterDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterDevices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeActionCommand
 */
export const se_DescribeActionCommand = async (
  input: DescribeActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAlgorithmCommand
 */
export const se_DescribeAlgorithmCommand = async (
  input: DescribeAlgorithmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAlgorithm");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAppCommand
 */
export const se_DescribeAppCommand = async (
  input: DescribeAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAppImageConfigCommand
 */
export const se_DescribeAppImageConfigCommand = async (
  input: DescribeAppImageConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAppImageConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeArtifactCommand
 */
export const se_DescribeArtifactCommand = async (
  input: DescribeArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeArtifact");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAutoMLJobCommand
 */
export const se_DescribeAutoMLJobCommand = async (
  input: DescribeAutoMLJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAutoMLJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAutoMLJobV2Command
 */
export const se_DescribeAutoMLJobV2Command = async (
  input: DescribeAutoMLJobV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAutoMLJobV2");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeClusterCommand
 */
export const se_DescribeClusterCommand = async (
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeClusterNodeCommand
 */
export const se_DescribeClusterNodeCommand = async (
  input: DescribeClusterNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeClusterNode");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCodeRepositoryCommand
 */
export const se_DescribeCodeRepositoryCommand = async (
  input: DescribeCodeRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCodeRepository");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCompilationJobCommand
 */
export const se_DescribeCompilationJobCommand = async (
  input: DescribeCompilationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCompilationJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeContextCommand
 */
export const se_DescribeContextCommand = async (
  input: DescribeContextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeContext");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDataQualityJobDefinitionCommand
 */
export const se_DescribeDataQualityJobDefinitionCommand = async (
  input: DescribeDataQualityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDataQualityJobDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDeviceCommand
 */
export const se_DescribeDeviceCommand = async (
  input: DescribeDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDevice");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDeviceFleetCommand
 */
export const se_DescribeDeviceFleetCommand = async (
  input: DescribeDeviceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDeviceFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDomainCommand
 */
export const se_DescribeDomainCommand = async (
  input: DescribeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEdgeDeploymentPlanCommand
 */
export const se_DescribeEdgeDeploymentPlanCommand = async (
  input: DescribeEdgeDeploymentPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEdgeDeploymentPlan");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEdgePackagingJobCommand
 */
export const se_DescribeEdgePackagingJobCommand = async (
  input: DescribeEdgePackagingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEdgePackagingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEndpointCommand
 */
export const se_DescribeEndpointCommand = async (
  input: DescribeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEndpointConfigCommand
 */
export const se_DescribeEndpointConfigCommand = async (
  input: DescribeEndpointConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEndpointConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeExperimentCommand
 */
export const se_DescribeExperimentCommand = async (
  input: DescribeExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeExperiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFeatureGroupCommand
 */
export const se_DescribeFeatureGroupCommand = async (
  input: DescribeFeatureGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFeatureGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFeatureMetadataCommand
 */
export const se_DescribeFeatureMetadataCommand = async (
  input: DescribeFeatureMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFeatureMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFlowDefinitionCommand
 */
export const se_DescribeFlowDefinitionCommand = async (
  input: DescribeFlowDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFlowDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeHubCommand
 */
export const se_DescribeHubCommand = async (
  input: DescribeHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeHub");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeHubContentCommand
 */
export const se_DescribeHubContentCommand = async (
  input: DescribeHubContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeHubContent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeHumanTaskUiCommand
 */
export const se_DescribeHumanTaskUiCommand = async (
  input: DescribeHumanTaskUiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeHumanTaskUi");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeHyperParameterTuningJobCommand
 */
export const se_DescribeHyperParameterTuningJobCommand = async (
  input: DescribeHyperParameterTuningJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeHyperParameterTuningJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImageCommand
 */
export const se_DescribeImageCommand = async (
  input: DescribeImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImageVersionCommand
 */
export const se_DescribeImageVersionCommand = async (
  input: DescribeImageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeImageVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInferenceComponentCommand
 */
export const se_DescribeInferenceComponentCommand = async (
  input: DescribeInferenceComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInferenceComponent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInferenceExperimentCommand
 */
export const se_DescribeInferenceExperimentCommand = async (
  input: DescribeInferenceExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInferenceExperiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInferenceRecommendationsJobCommand
 */
export const se_DescribeInferenceRecommendationsJobCommand = async (
  input: DescribeInferenceRecommendationsJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInferenceRecommendationsJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLabelingJobCommand
 */
export const se_DescribeLabelingJobCommand = async (
  input: DescribeLabelingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLabelingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLineageGroupCommand
 */
export const se_DescribeLineageGroupCommand = async (
  input: DescribeLineageGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLineageGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMlflowTrackingServerCommand
 */
export const se_DescribeMlflowTrackingServerCommand = async (
  input: DescribeMlflowTrackingServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMlflowTrackingServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelCommand
 */
export const se_DescribeModelCommand = async (
  input: DescribeModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelBiasJobDefinitionCommand
 */
export const se_DescribeModelBiasJobDefinitionCommand = async (
  input: DescribeModelBiasJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModelBiasJobDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelCardCommand
 */
export const se_DescribeModelCardCommand = async (
  input: DescribeModelCardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModelCard");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelCardExportJobCommand
 */
export const se_DescribeModelCardExportJobCommand = async (
  input: DescribeModelCardExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModelCardExportJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelExplainabilityJobDefinitionCommand
 */
export const se_DescribeModelExplainabilityJobDefinitionCommand = async (
  input: DescribeModelExplainabilityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModelExplainabilityJobDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelPackageCommand
 */
export const se_DescribeModelPackageCommand = async (
  input: DescribeModelPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModelPackage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelPackageGroupCommand
 */
export const se_DescribeModelPackageGroupCommand = async (
  input: DescribeModelPackageGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModelPackageGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelQualityJobDefinitionCommand
 */
export const se_DescribeModelQualityJobDefinitionCommand = async (
  input: DescribeModelQualityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModelQualityJobDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMonitoringScheduleCommand
 */
export const se_DescribeMonitoringScheduleCommand = async (
  input: DescribeMonitoringScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMonitoringSchedule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeNotebookInstanceCommand
 */
export const se_DescribeNotebookInstanceCommand = async (
  input: DescribeNotebookInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeNotebookInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand
 */
export const se_DescribeNotebookInstanceLifecycleConfigCommand = async (
  input: DescribeNotebookInstanceLifecycleConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeNotebookInstanceLifecycleConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePipelineCommand
 */
export const se_DescribePipelineCommand = async (
  input: DescribePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePipeline");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePipelineDefinitionForExecutionCommand
 */
export const se_DescribePipelineDefinitionForExecutionCommand = async (
  input: DescribePipelineDefinitionForExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePipelineDefinitionForExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePipelineExecutionCommand
 */
export const se_DescribePipelineExecutionCommand = async (
  input: DescribePipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePipelineExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProcessingJobCommand
 */
export const se_DescribeProcessingJobCommand = async (
  input: DescribeProcessingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProcessingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProjectCommand
 */
export const se_DescribeProjectCommand = async (
  input: DescribeProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSpaceCommand
 */
export const se_DescribeSpaceCommand = async (
  input: DescribeSpaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSpace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStudioLifecycleConfigCommand
 */
export const se_DescribeStudioLifecycleConfigCommand = async (
  input: DescribeStudioLifecycleConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStudioLifecycleConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSubscribedWorkteamCommand
 */
export const se_DescribeSubscribedWorkteamCommand = async (
  input: DescribeSubscribedWorkteamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSubscribedWorkteam");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTrainingJobCommand
 */
export const se_DescribeTrainingJobCommand = async (
  input: DescribeTrainingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTrainingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTransformJobCommand
 */
export const se_DescribeTransformJobCommand = async (
  input: DescribeTransformJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTransformJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTrialCommand
 */
export const se_DescribeTrialCommand = async (
  input: DescribeTrialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTrial");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTrialComponentCommand
 */
export const se_DescribeTrialComponentCommand = async (
  input: DescribeTrialComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTrialComponent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserProfileCommand
 */
export const se_DescribeUserProfileCommand = async (
  input: DescribeUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUserProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkforceCommand
 */
export const se_DescribeWorkforceCommand = async (
  input: DescribeWorkforceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkforce");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkteamCommand
 */
export const se_DescribeWorkteamCommand = async (
  input: DescribeWorkteamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkteam");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableSagemakerServicecatalogPortfolioCommand
 */
export const se_DisableSagemakerServicecatalogPortfolioCommand = async (
  input: DisableSagemakerServicecatalogPortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableSagemakerServicecatalogPortfolio");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateTrialComponentCommand
 */
export const se_DisassociateTrialComponentCommand = async (
  input: DisassociateTrialComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateTrialComponent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableSagemakerServicecatalogPortfolioCommand
 */
export const se_EnableSagemakerServicecatalogPortfolioCommand = async (
  input: EnableSagemakerServicecatalogPortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableSagemakerServicecatalogPortfolio");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeviceFleetReportCommand
 */
export const se_GetDeviceFleetReportCommand = async (
  input: GetDeviceFleetReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDeviceFleetReport");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLineageGroupPolicyCommand
 */
export const se_GetLineageGroupPolicyCommand = async (
  input: GetLineageGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLineageGroupPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetModelPackageGroupPolicyCommand
 */
export const se_GetModelPackageGroupPolicyCommand = async (
  input: GetModelPackageGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetModelPackageGroupPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSagemakerServicecatalogPortfolioStatusCommand
 */
export const se_GetSagemakerServicecatalogPortfolioStatusCommand = async (
  input: GetSagemakerServicecatalogPortfolioStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSagemakerServicecatalogPortfolioStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetScalingConfigurationRecommendationCommand
 */
export const se_GetScalingConfigurationRecommendationCommand = async (
  input: GetScalingConfigurationRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetScalingConfigurationRecommendation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSearchSuggestionsCommand
 */
export const se_GetSearchSuggestionsCommand = async (
  input: GetSearchSuggestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSearchSuggestions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportHubContentCommand
 */
export const se_ImportHubContentCommand = async (
  input: ImportHubContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportHubContent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListActionsCommand
 */
export const se_ListActionsCommand = async (
  input: ListActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListActions");
  let body: any;
  body = JSON.stringify(se_ListActionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAlgorithmsCommand
 */
export const se_ListAlgorithmsCommand = async (
  input: ListAlgorithmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAlgorithms");
  let body: any;
  body = JSON.stringify(se_ListAlgorithmsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAliasesCommand
 */
export const se_ListAliasesCommand = async (
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAliases");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAppImageConfigsCommand
 */
export const se_ListAppImageConfigsCommand = async (
  input: ListAppImageConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAppImageConfigs");
  let body: any;
  body = JSON.stringify(se_ListAppImageConfigsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAppsCommand
 */
export const se_ListAppsCommand = async (
  input: ListAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApps");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListArtifactsCommand
 */
export const se_ListArtifactsCommand = async (
  input: ListArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListArtifacts");
  let body: any;
  body = JSON.stringify(se_ListArtifactsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssociationsCommand
 */
export const se_ListAssociationsCommand = async (
  input: ListAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAssociations");
  let body: any;
  body = JSON.stringify(se_ListAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAutoMLJobsCommand
 */
export const se_ListAutoMLJobsCommand = async (
  input: ListAutoMLJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAutoMLJobs");
  let body: any;
  body = JSON.stringify(se_ListAutoMLJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCandidatesForAutoMLJobCommand
 */
export const se_ListCandidatesForAutoMLJobCommand = async (
  input: ListCandidatesForAutoMLJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCandidatesForAutoMLJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListClusterNodesCommand
 */
export const se_ListClusterNodesCommand = async (
  input: ListClusterNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListClusterNodes");
  let body: any;
  body = JSON.stringify(se_ListClusterNodesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListClustersCommand
 */
export const se_ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListClusters");
  let body: any;
  body = JSON.stringify(se_ListClustersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCodeRepositoriesCommand
 */
export const se_ListCodeRepositoriesCommand = async (
  input: ListCodeRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCodeRepositories");
  let body: any;
  body = JSON.stringify(se_ListCodeRepositoriesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCompilationJobsCommand
 */
export const se_ListCompilationJobsCommand = async (
  input: ListCompilationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCompilationJobs");
  let body: any;
  body = JSON.stringify(se_ListCompilationJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListContextsCommand
 */
export const se_ListContextsCommand = async (
  input: ListContextsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListContexts");
  let body: any;
  body = JSON.stringify(se_ListContextsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDataQualityJobDefinitionsCommand
 */
export const se_ListDataQualityJobDefinitionsCommand = async (
  input: ListDataQualityJobDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDataQualityJobDefinitions");
  let body: any;
  body = JSON.stringify(se_ListDataQualityJobDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDeviceFleetsCommand
 */
export const se_ListDeviceFleetsCommand = async (
  input: ListDeviceFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDeviceFleets");
  let body: any;
  body = JSON.stringify(se_ListDeviceFleetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDevicesCommand
 */
export const se_ListDevicesCommand = async (
  input: ListDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDevices");
  let body: any;
  body = JSON.stringify(se_ListDevicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDomainsCommand
 */
export const se_ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDomains");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEdgeDeploymentPlansCommand
 */
export const se_ListEdgeDeploymentPlansCommand = async (
  input: ListEdgeDeploymentPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEdgeDeploymentPlans");
  let body: any;
  body = JSON.stringify(se_ListEdgeDeploymentPlansRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEdgePackagingJobsCommand
 */
export const se_ListEdgePackagingJobsCommand = async (
  input: ListEdgePackagingJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEdgePackagingJobs");
  let body: any;
  body = JSON.stringify(se_ListEdgePackagingJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEndpointConfigsCommand
 */
export const se_ListEndpointConfigsCommand = async (
  input: ListEndpointConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEndpointConfigs");
  let body: any;
  body = JSON.stringify(se_ListEndpointConfigsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEndpointsCommand
 */
export const se_ListEndpointsCommand = async (
  input: ListEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEndpoints");
  let body: any;
  body = JSON.stringify(se_ListEndpointsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListExperimentsCommand
 */
export const se_ListExperimentsCommand = async (
  input: ListExperimentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListExperiments");
  let body: any;
  body = JSON.stringify(se_ListExperimentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFeatureGroupsCommand
 */
export const se_ListFeatureGroupsCommand = async (
  input: ListFeatureGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFeatureGroups");
  let body: any;
  body = JSON.stringify(se_ListFeatureGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFlowDefinitionsCommand
 */
export const se_ListFlowDefinitionsCommand = async (
  input: ListFlowDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFlowDefinitions");
  let body: any;
  body = JSON.stringify(se_ListFlowDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHubContentsCommand
 */
export const se_ListHubContentsCommand = async (
  input: ListHubContentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHubContents");
  let body: any;
  body = JSON.stringify(se_ListHubContentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHubContentVersionsCommand
 */
export const se_ListHubContentVersionsCommand = async (
  input: ListHubContentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHubContentVersions");
  let body: any;
  body = JSON.stringify(se_ListHubContentVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHubsCommand
 */
export const se_ListHubsCommand = async (
  input: ListHubsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHubs");
  let body: any;
  body = JSON.stringify(se_ListHubsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHumanTaskUisCommand
 */
export const se_ListHumanTaskUisCommand = async (
  input: ListHumanTaskUisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHumanTaskUis");
  let body: any;
  body = JSON.stringify(se_ListHumanTaskUisRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHyperParameterTuningJobsCommand
 */
export const se_ListHyperParameterTuningJobsCommand = async (
  input: ListHyperParameterTuningJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHyperParameterTuningJobs");
  let body: any;
  body = JSON.stringify(se_ListHyperParameterTuningJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListImagesCommand
 */
export const se_ListImagesCommand = async (
  input: ListImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListImages");
  let body: any;
  body = JSON.stringify(se_ListImagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListImageVersionsCommand
 */
export const se_ListImageVersionsCommand = async (
  input: ListImageVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListImageVersions");
  let body: any;
  body = JSON.stringify(se_ListImageVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInferenceComponentsCommand
 */
export const se_ListInferenceComponentsCommand = async (
  input: ListInferenceComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInferenceComponents");
  let body: any;
  body = JSON.stringify(se_ListInferenceComponentsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInferenceExperimentsCommand
 */
export const se_ListInferenceExperimentsCommand = async (
  input: ListInferenceExperimentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInferenceExperiments");
  let body: any;
  body = JSON.stringify(se_ListInferenceExperimentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInferenceRecommendationsJobsCommand
 */
export const se_ListInferenceRecommendationsJobsCommand = async (
  input: ListInferenceRecommendationsJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInferenceRecommendationsJobs");
  let body: any;
  body = JSON.stringify(se_ListInferenceRecommendationsJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInferenceRecommendationsJobStepsCommand
 */
export const se_ListInferenceRecommendationsJobStepsCommand = async (
  input: ListInferenceRecommendationsJobStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInferenceRecommendationsJobSteps");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLabelingJobsCommand
 */
export const se_ListLabelingJobsCommand = async (
  input: ListLabelingJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLabelingJobs");
  let body: any;
  body = JSON.stringify(se_ListLabelingJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLabelingJobsForWorkteamCommand
 */
export const se_ListLabelingJobsForWorkteamCommand = async (
  input: ListLabelingJobsForWorkteamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLabelingJobsForWorkteam");
  let body: any;
  body = JSON.stringify(se_ListLabelingJobsForWorkteamRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLineageGroupsCommand
 */
export const se_ListLineageGroupsCommand = async (
  input: ListLineageGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLineageGroups");
  let body: any;
  body = JSON.stringify(se_ListLineageGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMlflowTrackingServersCommand
 */
export const se_ListMlflowTrackingServersCommand = async (
  input: ListMlflowTrackingServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMlflowTrackingServers");
  let body: any;
  body = JSON.stringify(se_ListMlflowTrackingServersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelBiasJobDefinitionsCommand
 */
export const se_ListModelBiasJobDefinitionsCommand = async (
  input: ListModelBiasJobDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelBiasJobDefinitions");
  let body: any;
  body = JSON.stringify(se_ListModelBiasJobDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelCardExportJobsCommand
 */
export const se_ListModelCardExportJobsCommand = async (
  input: ListModelCardExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelCardExportJobs");
  let body: any;
  body = JSON.stringify(se_ListModelCardExportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelCardsCommand
 */
export const se_ListModelCardsCommand = async (
  input: ListModelCardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelCards");
  let body: any;
  body = JSON.stringify(se_ListModelCardsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelCardVersionsCommand
 */
export const se_ListModelCardVersionsCommand = async (
  input: ListModelCardVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelCardVersions");
  let body: any;
  body = JSON.stringify(se_ListModelCardVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelExplainabilityJobDefinitionsCommand
 */
export const se_ListModelExplainabilityJobDefinitionsCommand = async (
  input: ListModelExplainabilityJobDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelExplainabilityJobDefinitions");
  let body: any;
  body = JSON.stringify(se_ListModelExplainabilityJobDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelMetadataCommand
 */
export const se_ListModelMetadataCommand = async (
  input: ListModelMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelPackageGroupsCommand
 */
export const se_ListModelPackageGroupsCommand = async (
  input: ListModelPackageGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelPackageGroups");
  let body: any;
  body = JSON.stringify(se_ListModelPackageGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelPackagesCommand
 */
export const se_ListModelPackagesCommand = async (
  input: ListModelPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelPackages");
  let body: any;
  body = JSON.stringify(se_ListModelPackagesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelQualityJobDefinitionsCommand
 */
export const se_ListModelQualityJobDefinitionsCommand = async (
  input: ListModelQualityJobDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelQualityJobDefinitions");
  let body: any;
  body = JSON.stringify(se_ListModelQualityJobDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelsCommand
 */
export const se_ListModelsCommand = async (
  input: ListModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModels");
  let body: any;
  body = JSON.stringify(se_ListModelsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMonitoringAlertHistoryCommand
 */
export const se_ListMonitoringAlertHistoryCommand = async (
  input: ListMonitoringAlertHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMonitoringAlertHistory");
  let body: any;
  body = JSON.stringify(se_ListMonitoringAlertHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMonitoringAlertsCommand
 */
export const se_ListMonitoringAlertsCommand = async (
  input: ListMonitoringAlertsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMonitoringAlerts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMonitoringExecutionsCommand
 */
export const se_ListMonitoringExecutionsCommand = async (
  input: ListMonitoringExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMonitoringExecutions");
  let body: any;
  body = JSON.stringify(se_ListMonitoringExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMonitoringSchedulesCommand
 */
export const se_ListMonitoringSchedulesCommand = async (
  input: ListMonitoringSchedulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMonitoringSchedules");
  let body: any;
  body = JSON.stringify(se_ListMonitoringSchedulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand
 */
export const se_ListNotebookInstanceLifecycleConfigsCommand = async (
  input: ListNotebookInstanceLifecycleConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListNotebookInstanceLifecycleConfigs");
  let body: any;
  body = JSON.stringify(se_ListNotebookInstanceLifecycleConfigsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListNotebookInstancesCommand
 */
export const se_ListNotebookInstancesCommand = async (
  input: ListNotebookInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListNotebookInstances");
  let body: any;
  body = JSON.stringify(se_ListNotebookInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPipelineExecutionsCommand
 */
export const se_ListPipelineExecutionsCommand = async (
  input: ListPipelineExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPipelineExecutions");
  let body: any;
  body = JSON.stringify(se_ListPipelineExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPipelineExecutionStepsCommand
 */
export const se_ListPipelineExecutionStepsCommand = async (
  input: ListPipelineExecutionStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPipelineExecutionSteps");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPipelineParametersForExecutionCommand
 */
export const se_ListPipelineParametersForExecutionCommand = async (
  input: ListPipelineParametersForExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPipelineParametersForExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPipelinesCommand
 */
export const se_ListPipelinesCommand = async (
  input: ListPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPipelines");
  let body: any;
  body = JSON.stringify(se_ListPipelinesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProcessingJobsCommand
 */
export const se_ListProcessingJobsCommand = async (
  input: ListProcessingJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProcessingJobs");
  let body: any;
  body = JSON.stringify(se_ListProcessingJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProjectsCommand
 */
export const se_ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProjects");
  let body: any;
  body = JSON.stringify(se_ListProjectsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourceCatalogsCommand
 */
export const se_ListResourceCatalogsCommand = async (
  input: ListResourceCatalogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResourceCatalogs");
  let body: any;
  body = JSON.stringify(se_ListResourceCatalogsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSpacesCommand
 */
export const se_ListSpacesCommand = async (
  input: ListSpacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSpaces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStageDevicesCommand
 */
export const se_ListStageDevicesCommand = async (
  input: ListStageDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListStageDevices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStudioLifecycleConfigsCommand
 */
export const se_ListStudioLifecycleConfigsCommand = async (
  input: ListStudioLifecycleConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListStudioLifecycleConfigs");
  let body: any;
  body = JSON.stringify(se_ListStudioLifecycleConfigsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSubscribedWorkteamsCommand
 */
export const se_ListSubscribedWorkteamsCommand = async (
  input: ListSubscribedWorkteamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSubscribedWorkteams");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTrainingJobsCommand
 */
export const se_ListTrainingJobsCommand = async (
  input: ListTrainingJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTrainingJobs");
  let body: any;
  body = JSON.stringify(se_ListTrainingJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand
 */
export const se_ListTrainingJobsForHyperParameterTuningJobCommand = async (
  input: ListTrainingJobsForHyperParameterTuningJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTrainingJobsForHyperParameterTuningJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTransformJobsCommand
 */
export const se_ListTransformJobsCommand = async (
  input: ListTransformJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTransformJobs");
  let body: any;
  body = JSON.stringify(se_ListTransformJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTrialComponentsCommand
 */
export const se_ListTrialComponentsCommand = async (
  input: ListTrialComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTrialComponents");
  let body: any;
  body = JSON.stringify(se_ListTrialComponentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTrialsCommand
 */
export const se_ListTrialsCommand = async (
  input: ListTrialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTrials");
  let body: any;
  body = JSON.stringify(se_ListTrialsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUserProfilesCommand
 */
export const se_ListUserProfilesCommand = async (
  input: ListUserProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListUserProfiles");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWorkforcesCommand
 */
export const se_ListWorkforcesCommand = async (
  input: ListWorkforcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWorkforces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWorkteamsCommand
 */
export const se_ListWorkteamsCommand = async (
  input: ListWorkteamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWorkteams");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutModelPackageGroupPolicyCommand
 */
export const se_PutModelPackageGroupPolicyCommand = async (
  input: PutModelPackageGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutModelPackageGroupPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1QueryLineageCommand
 */
export const se_QueryLineageCommand = async (
  input: QueryLineageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("QueryLineage");
  let body: any;
  body = JSON.stringify(se_QueryLineageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterDevicesCommand
 */
export const se_RegisterDevicesCommand = async (
  input: RegisterDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterDevices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RenderUiTemplateCommand
 */
export const se_RenderUiTemplateCommand = async (
  input: RenderUiTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RenderUiTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RetryPipelineExecutionCommand
 */
export const se_RetryPipelineExecutionCommand = async (
  input: RetryPipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RetryPipelineExecution");
  let body: any;
  body = JSON.stringify(se_RetryPipelineExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchCommand
 */
export const se_SearchCommand = async (input: SearchCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("Search");
  let body: any;
  body = JSON.stringify(se_SearchRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendPipelineExecutionStepFailureCommand
 */
export const se_SendPipelineExecutionStepFailureCommand = async (
  input: SendPipelineExecutionStepFailureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendPipelineExecutionStepFailure");
  let body: any;
  body = JSON.stringify(se_SendPipelineExecutionStepFailureRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendPipelineExecutionStepSuccessCommand
 */
export const se_SendPipelineExecutionStepSuccessCommand = async (
  input: SendPipelineExecutionStepSuccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendPipelineExecutionStepSuccess");
  let body: any;
  body = JSON.stringify(se_SendPipelineExecutionStepSuccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartEdgeDeploymentStageCommand
 */
export const se_StartEdgeDeploymentStageCommand = async (
  input: StartEdgeDeploymentStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartEdgeDeploymentStage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartInferenceExperimentCommand
 */
export const se_StartInferenceExperimentCommand = async (
  input: StartInferenceExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartInferenceExperiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartMlflowTrackingServerCommand
 */
export const se_StartMlflowTrackingServerCommand = async (
  input: StartMlflowTrackingServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartMlflowTrackingServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartMonitoringScheduleCommand
 */
export const se_StartMonitoringScheduleCommand = async (
  input: StartMonitoringScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartMonitoringSchedule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartNotebookInstanceCommand
 */
export const se_StartNotebookInstanceCommand = async (
  input: StartNotebookInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartNotebookInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartPipelineExecutionCommand
 */
export const se_StartPipelineExecutionCommand = async (
  input: StartPipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartPipelineExecution");
  let body: any;
  body = JSON.stringify(se_StartPipelineExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopAutoMLJobCommand
 */
export const se_StopAutoMLJobCommand = async (
  input: StopAutoMLJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopAutoMLJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopCompilationJobCommand
 */
export const se_StopCompilationJobCommand = async (
  input: StopCompilationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopCompilationJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopEdgeDeploymentStageCommand
 */
export const se_StopEdgeDeploymentStageCommand = async (
  input: StopEdgeDeploymentStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopEdgeDeploymentStage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopEdgePackagingJobCommand
 */
export const se_StopEdgePackagingJobCommand = async (
  input: StopEdgePackagingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopEdgePackagingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopHyperParameterTuningJobCommand
 */
export const se_StopHyperParameterTuningJobCommand = async (
  input: StopHyperParameterTuningJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopHyperParameterTuningJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopInferenceExperimentCommand
 */
export const se_StopInferenceExperimentCommand = async (
  input: StopInferenceExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopInferenceExperiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopInferenceRecommendationsJobCommand
 */
export const se_StopInferenceRecommendationsJobCommand = async (
  input: StopInferenceRecommendationsJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopInferenceRecommendationsJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopLabelingJobCommand
 */
export const se_StopLabelingJobCommand = async (
  input: StopLabelingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopLabelingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopMlflowTrackingServerCommand
 */
export const se_StopMlflowTrackingServerCommand = async (
  input: StopMlflowTrackingServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopMlflowTrackingServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopMonitoringScheduleCommand
 */
export const se_StopMonitoringScheduleCommand = async (
  input: StopMonitoringScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopMonitoringSchedule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopNotebookInstanceCommand
 */
export const se_StopNotebookInstanceCommand = async (
  input: StopNotebookInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopNotebookInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopPipelineExecutionCommand
 */
export const se_StopPipelineExecutionCommand = async (
  input: StopPipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopPipelineExecution");
  let body: any;
  body = JSON.stringify(se_StopPipelineExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopProcessingJobCommand
 */
export const se_StopProcessingJobCommand = async (
  input: StopProcessingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopProcessingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopTrainingJobCommand
 */
export const se_StopTrainingJobCommand = async (
  input: StopTrainingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopTrainingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopTransformJobCommand
 */
export const se_StopTransformJobCommand = async (
  input: StopTransformJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopTransformJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateActionCommand
 */
export const se_UpdateActionCommand = async (
  input: UpdateActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAppImageConfigCommand
 */
export const se_UpdateAppImageConfigCommand = async (
  input: UpdateAppImageConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAppImageConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateArtifactCommand
 */
export const se_UpdateArtifactCommand = async (
  input: UpdateArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateArtifact");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateClusterCommand
 */
export const se_UpdateClusterCommand = async (
  input: UpdateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateClusterSoftwareCommand
 */
export const se_UpdateClusterSoftwareCommand = async (
  input: UpdateClusterSoftwareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateClusterSoftware");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCodeRepositoryCommand
 */
export const se_UpdateCodeRepositoryCommand = async (
  input: UpdateCodeRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCodeRepository");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateContextCommand
 */
export const se_UpdateContextCommand = async (
  input: UpdateContextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateContext");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDeviceFleetCommand
 */
export const se_UpdateDeviceFleetCommand = async (
  input: UpdateDeviceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDeviceFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDevicesCommand
 */
export const se_UpdateDevicesCommand = async (
  input: UpdateDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDevices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDomainCommand
 */
export const se_UpdateDomainCommand = async (
  input: UpdateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEndpointCommand
 */
export const se_UpdateEndpointCommand = async (
  input: UpdateEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand
 */
export const se_UpdateEndpointWeightsAndCapacitiesCommand = async (
  input: UpdateEndpointWeightsAndCapacitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEndpointWeightsAndCapacities");
  let body: any;
  body = JSON.stringify(se_UpdateEndpointWeightsAndCapacitiesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateExperimentCommand
 */
export const se_UpdateExperimentCommand = async (
  input: UpdateExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateExperiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFeatureGroupCommand
 */
export const se_UpdateFeatureGroupCommand = async (
  input: UpdateFeatureGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFeatureGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFeatureMetadataCommand
 */
export const se_UpdateFeatureMetadataCommand = async (
  input: UpdateFeatureMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFeatureMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateHubCommand
 */
export const se_UpdateHubCommand = async (
  input: UpdateHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateHub");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateImageCommand
 */
export const se_UpdateImageCommand = async (
  input: UpdateImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateImageVersionCommand
 */
export const se_UpdateImageVersionCommand = async (
  input: UpdateImageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateImageVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateInferenceComponentCommand
 */
export const se_UpdateInferenceComponentCommand = async (
  input: UpdateInferenceComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateInferenceComponent");
  let body: any;
  body = JSON.stringify(se_UpdateInferenceComponentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateInferenceComponentRuntimeConfigCommand
 */
export const se_UpdateInferenceComponentRuntimeConfigCommand = async (
  input: UpdateInferenceComponentRuntimeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateInferenceComponentRuntimeConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateInferenceExperimentCommand
 */
export const se_UpdateInferenceExperimentCommand = async (
  input: UpdateInferenceExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateInferenceExperiment");
  let body: any;
  body = JSON.stringify(se_UpdateInferenceExperimentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMlflowTrackingServerCommand
 */
export const se_UpdateMlflowTrackingServerCommand = async (
  input: UpdateMlflowTrackingServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMlflowTrackingServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateModelCardCommand
 */
export const se_UpdateModelCardCommand = async (
  input: UpdateModelCardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateModelCard");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateModelPackageCommand
 */
export const se_UpdateModelPackageCommand = async (
  input: UpdateModelPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateModelPackage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMonitoringAlertCommand
 */
export const se_UpdateMonitoringAlertCommand = async (
  input: UpdateMonitoringAlertCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMonitoringAlert");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMonitoringScheduleCommand
 */
export const se_UpdateMonitoringScheduleCommand = async (
  input: UpdateMonitoringScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMonitoringSchedule");
  let body: any;
  body = JSON.stringify(se_UpdateMonitoringScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateNotebookInstanceCommand
 */
export const se_UpdateNotebookInstanceCommand = async (
  input: UpdateNotebookInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateNotebookInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand
 */
export const se_UpdateNotebookInstanceLifecycleConfigCommand = async (
  input: UpdateNotebookInstanceLifecycleConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateNotebookInstanceLifecycleConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePipelineCommand
 */
export const se_UpdatePipelineCommand = async (
  input: UpdatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePipeline");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePipelineExecutionCommand
 */
export const se_UpdatePipelineExecutionCommand = async (
  input: UpdatePipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePipelineExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateProjectCommand
 */
export const se_UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSpaceCommand
 */
export const se_UpdateSpaceCommand = async (
  input: UpdateSpaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSpace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTrainingJobCommand
 */
export const se_UpdateTrainingJobCommand = async (
  input: UpdateTrainingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTrainingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTrialCommand
 */
export const se_UpdateTrialCommand = async (
  input: UpdateTrialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTrial");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTrialComponentCommand
 */
export const se_UpdateTrialComponentCommand = async (
  input: UpdateTrialComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTrialComponent");
  let body: any;
  body = JSON.stringify(se_UpdateTrialComponentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserProfileCommand
 */
export const se_UpdateUserProfileCommand = async (
  input: UpdateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateUserProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWorkforceCommand
 */
export const se_UpdateWorkforceCommand = async (
  input: UpdateWorkforceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWorkforce");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWorkteamCommand
 */
export const se_UpdateWorkteamCommand = async (
  input: UpdateWorkteamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWorkteam");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AddAssociationCommand
 */
export const de_AddAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddAssociationResponse(data, context);
  const response: AddAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddTagsCommand
 */
export const de_AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddTagsOutput(data, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateTrialComponentCommand
 */
export const de_AssociateTrialComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTrialComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateTrialComponentResponse(data, context);
  const response: AssociateTrialComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDescribeModelPackageCommand
 */
export const de_BatchDescribeModelPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeModelPackageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchDescribeModelPackageOutput(data, context);
  const response: BatchDescribeModelPackageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateActionCommand
 */
export const de_CreateActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateActionResponse(data, context);
  const response: CreateActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAlgorithmCommand
 */
export const de_CreateAlgorithmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAlgorithmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAlgorithmOutput(data, context);
  const response: CreateAlgorithmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAppCommand
 */
export const de_CreateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAppResponse(data, context);
  const response: CreateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAppImageConfigCommand
 */
export const de_CreateAppImageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppImageConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAppImageConfigResponse(data, context);
  const response: CreateAppImageConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateArtifactCommand
 */
export const de_CreateArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateArtifactResponse(data, context);
  const response: CreateArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAutoMLJobCommand
 */
export const de_CreateAutoMLJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoMLJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAutoMLJobResponse(data, context);
  const response: CreateAutoMLJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAutoMLJobV2Command
 */
export const de_CreateAutoMLJobV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoMLJobV2CommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAutoMLJobV2Response(data, context);
  const response: CreateAutoMLJobV2CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateClusterCommand
 */
export const de_CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateClusterResponse(data, context);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateCodeRepositoryCommand
 */
export const de_CreateCodeRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCodeRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCodeRepositoryOutput(data, context);
  const response: CreateCodeRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateCompilationJobCommand
 */
export const de_CreateCompilationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCompilationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCompilationJobResponse(data, context);
  const response: CreateCompilationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateContextCommand
 */
export const de_CreateContextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContextCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateContextResponse(data, context);
  const response: CreateContextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDataQualityJobDefinitionCommand
 */
export const de_CreateDataQualityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataQualityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDataQualityJobDefinitionResponse(data, context);
  const response: CreateDataQualityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDeviceFleetCommand
 */
export const de_CreateDeviceFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateDeviceFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDomainCommand
 */
export const de_CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDomainResponse(data, context);
  const response: CreateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateEdgeDeploymentPlanCommand
 */
export const de_CreateEdgeDeploymentPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEdgeDeploymentPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEdgeDeploymentPlanResponse(data, context);
  const response: CreateEdgeDeploymentPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateEdgeDeploymentStageCommand
 */
export const de_CreateEdgeDeploymentStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEdgeDeploymentStageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateEdgeDeploymentStageCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateEdgePackagingJobCommand
 */
export const de_CreateEdgePackagingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEdgePackagingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateEdgePackagingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateEndpointCommand
 */
export const de_CreateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEndpointOutput(data, context);
  const response: CreateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateEndpointConfigCommand
 */
export const de_CreateEndpointConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEndpointConfigOutput(data, context);
  const response: CreateEndpointConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateExperimentCommand
 */
export const de_CreateExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateExperimentResponse(data, context);
  const response: CreateExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateFeatureGroupCommand
 */
export const de_CreateFeatureGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFeatureGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFeatureGroupResponse(data, context);
  const response: CreateFeatureGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateFlowDefinitionCommand
 */
export const de_CreateFlowDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFlowDefinitionResponse(data, context);
  const response: CreateFlowDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateHubCommand
 */
export const de_CreateHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHubCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateHubResponse(data, context);
  const response: CreateHubCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateHumanTaskUiCommand
 */
export const de_CreateHumanTaskUiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHumanTaskUiCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateHumanTaskUiResponse(data, context);
  const response: CreateHumanTaskUiCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateHyperParameterTuningJobCommand
 */
export const de_CreateHyperParameterTuningJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHyperParameterTuningJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateHyperParameterTuningJobResponse(data, context);
  const response: CreateHyperParameterTuningJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateImageCommand
 */
export const de_CreateImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateImageResponse(data, context);
  const response: CreateImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateImageVersionCommand
 */
export const de_CreateImageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateImageVersionResponse(data, context);
  const response: CreateImageVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateInferenceComponentCommand
 */
export const de_CreateInferenceComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInferenceComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateInferenceComponentOutput(data, context);
  const response: CreateInferenceComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateInferenceExperimentCommand
 */
export const de_CreateInferenceExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInferenceExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateInferenceExperimentResponse(data, context);
  const response: CreateInferenceExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateInferenceRecommendationsJobCommand
 */
export const de_CreateInferenceRecommendationsJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInferenceRecommendationsJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateInferenceRecommendationsJobResponse(data, context);
  const response: CreateInferenceRecommendationsJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLabelingJobCommand
 */
export const de_CreateLabelingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLabelingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLabelingJobResponse(data, context);
  const response: CreateLabelingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateMlflowTrackingServerCommand
 */
export const de_CreateMlflowTrackingServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMlflowTrackingServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateMlflowTrackingServerResponse(data, context);
  const response: CreateMlflowTrackingServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateModelCommand
 */
export const de_CreateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateModelOutput(data, context);
  const response: CreateModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateModelBiasJobDefinitionCommand
 */
export const de_CreateModelBiasJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelBiasJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateModelBiasJobDefinitionResponse(data, context);
  const response: CreateModelBiasJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateModelCardCommand
 */
export const de_CreateModelCardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateModelCardResponse(data, context);
  const response: CreateModelCardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateModelCardExportJobCommand
 */
export const de_CreateModelCardExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCardExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateModelCardExportJobResponse(data, context);
  const response: CreateModelCardExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateModelExplainabilityJobDefinitionCommand
 */
export const de_CreateModelExplainabilityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelExplainabilityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateModelExplainabilityJobDefinitionResponse(data, context);
  const response: CreateModelExplainabilityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateModelPackageCommand
 */
export const de_CreateModelPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelPackageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateModelPackageOutput(data, context);
  const response: CreateModelPackageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateModelPackageGroupCommand
 */
export const de_CreateModelPackageGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelPackageGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateModelPackageGroupOutput(data, context);
  const response: CreateModelPackageGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateModelQualityJobDefinitionCommand
 */
export const de_CreateModelQualityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelQualityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateModelQualityJobDefinitionResponse(data, context);
  const response: CreateModelQualityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateMonitoringScheduleCommand
 */
export const de_CreateMonitoringScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMonitoringScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateMonitoringScheduleResponse(data, context);
  const response: CreateMonitoringScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateNotebookInstanceCommand
 */
export const de_CreateNotebookInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotebookInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateNotebookInstanceOutput(data, context);
  const response: CreateNotebookInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand
 */
export const de_CreateNotebookInstanceLifecycleConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotebookInstanceLifecycleConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateNotebookInstanceLifecycleConfigOutput(data, context);
  const response: CreateNotebookInstanceLifecycleConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreatePipelineCommand
 */
export const de_CreatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePipelineResponse(data, context);
  const response: CreatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreatePresignedDomainUrlCommand
 */
export const de_CreatePresignedDomainUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresignedDomainUrlCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePresignedDomainUrlResponse(data, context);
  const response: CreatePresignedDomainUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreatePresignedMlflowTrackingServerUrlCommand
 */
export const de_CreatePresignedMlflowTrackingServerUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresignedMlflowTrackingServerUrlCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePresignedMlflowTrackingServerUrlResponse(data, context);
  const response: CreatePresignedMlflowTrackingServerUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand
 */
export const de_CreatePresignedNotebookInstanceUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresignedNotebookInstanceUrlCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePresignedNotebookInstanceUrlOutput(data, context);
  const response: CreatePresignedNotebookInstanceUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateProcessingJobCommand
 */
export const de_CreateProcessingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProcessingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateProcessingJobResponse(data, context);
  const response: CreateProcessingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateProjectCommand
 */
export const de_CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateProjectOutput(data, context);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateSpaceCommand
 */
export const de_CreateSpaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSpaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSpaceResponse(data, context);
  const response: CreateSpaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateStudioLifecycleConfigCommand
 */
export const de_CreateStudioLifecycleConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioLifecycleConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateStudioLifecycleConfigResponse(data, context);
  const response: CreateStudioLifecycleConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTrainingJobCommand
 */
export const de_CreateTrainingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrainingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTrainingJobResponse(data, context);
  const response: CreateTrainingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTransformJobCommand
 */
export const de_CreateTransformJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTransformJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTransformJobResponse(data, context);
  const response: CreateTransformJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTrialCommand
 */
export const de_CreateTrialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTrialResponse(data, context);
  const response: CreateTrialCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTrialComponentCommand
 */
export const de_CreateTrialComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrialComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTrialComponentResponse(data, context);
  const response: CreateTrialComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateUserProfileCommand
 */
export const de_CreateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUserProfileResponse(data, context);
  const response: CreateUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateWorkforceCommand
 */
export const de_CreateWorkforceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkforceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWorkforceResponse(data, context);
  const response: CreateWorkforceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateWorkteamCommand
 */
export const de_CreateWorkteamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkteamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWorkteamResponse(data, context);
  const response: CreateWorkteamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteActionCommand
 */
export const de_DeleteActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteActionResponse(data, context);
  const response: DeleteActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAlgorithmCommand
 */
export const de_DeleteAlgorithmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlgorithmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAlgorithmCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAppCommand
 */
export const de_DeleteAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAppCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAppImageConfigCommand
 */
export const de_DeleteAppImageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppImageConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAppImageConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteArtifactCommand
 */
export const de_DeleteArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteArtifactResponse(data, context);
  const response: DeleteArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAssociationCommand
 */
export const de_DeleteAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAssociationResponse(data, context);
  const response: DeleteAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteClusterCommand
 */
export const de_DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteClusterResponse(data, context);
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteCodeRepositoryCommand
 */
export const de_DeleteCodeRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCodeRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCodeRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteCompilationJobCommand
 */
export const de_DeleteCompilationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCompilationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCompilationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteContextCommand
 */
export const de_DeleteContextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContextCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteContextResponse(data, context);
  const response: DeleteContextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDataQualityJobDefinitionCommand
 */
export const de_DeleteDataQualityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataQualityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDataQualityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDeviceFleetCommand
 */
export const de_DeleteDeviceFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDeviceFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDomainCommand
 */
export const de_DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEdgeDeploymentPlanCommand
 */
export const de_DeleteEdgeDeploymentPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEdgeDeploymentPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEdgeDeploymentPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEdgeDeploymentStageCommand
 */
export const de_DeleteEdgeDeploymentStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEdgeDeploymentStageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEdgeDeploymentStageCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEndpointCommand
 */
export const de_DeleteEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEndpointConfigCommand
 */
export const de_DeleteEndpointConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEndpointConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteExperimentCommand
 */
export const de_DeleteExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteExperimentResponse(data, context);
  const response: DeleteExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFeatureGroupCommand
 */
export const de_DeleteFeatureGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFeatureGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteFeatureGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFlowDefinitionCommand
 */
export const de_DeleteFlowDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteFlowDefinitionResponse(data, context);
  const response: DeleteFlowDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteHubCommand
 */
export const de_DeleteHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHubCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteHubCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteHubContentCommand
 */
export const de_DeleteHubContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHubContentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteHubContentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteHumanTaskUiCommand
 */
export const de_DeleteHumanTaskUiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHumanTaskUiCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteHumanTaskUiResponse(data, context);
  const response: DeleteHumanTaskUiCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteHyperParameterTuningJobCommand
 */
export const de_DeleteHyperParameterTuningJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHyperParameterTuningJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteHyperParameterTuningJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteImageCommand
 */
export const de_DeleteImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteImageResponse(data, context);
  const response: DeleteImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteImageVersionCommand
 */
export const de_DeleteImageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteImageVersionResponse(data, context);
  const response: DeleteImageVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteInferenceComponentCommand
 */
export const de_DeleteInferenceComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInferenceComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteInferenceComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteInferenceExperimentCommand
 */
export const de_DeleteInferenceExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInferenceExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteInferenceExperimentResponse(data, context);
  const response: DeleteInferenceExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteMlflowTrackingServerCommand
 */
export const de_DeleteMlflowTrackingServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMlflowTrackingServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteMlflowTrackingServerResponse(data, context);
  const response: DeleteMlflowTrackingServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelCommand
 */
export const de_DeleteModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelBiasJobDefinitionCommand
 */
export const de_DeleteModelBiasJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelBiasJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelBiasJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelCardCommand
 */
export const de_DeleteModelCardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelCardCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelExplainabilityJobDefinitionCommand
 */
export const de_DeleteModelExplainabilityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelExplainabilityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelExplainabilityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelPackageCommand
 */
export const de_DeleteModelPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelPackageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelPackageCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelPackageGroupCommand
 */
export const de_DeleteModelPackageGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelPackageGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelPackageGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelPackageGroupPolicyCommand
 */
export const de_DeleteModelPackageGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelPackageGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelPackageGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelQualityJobDefinitionCommand
 */
export const de_DeleteModelQualityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelQualityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelQualityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteMonitoringScheduleCommand
 */
export const de_DeleteMonitoringScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMonitoringScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMonitoringScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteNotebookInstanceCommand
 */
export const de_DeleteNotebookInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotebookInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteNotebookInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand
 */
export const de_DeleteNotebookInstanceLifecycleConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotebookInstanceLifecycleConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteNotebookInstanceLifecycleConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeletePipelineCommand
 */
export const de_DeletePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeletePipelineResponse(data, context);
  const response: DeletePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteProjectCommand
 */
export const de_DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteSpaceCommand
 */
export const de_DeleteSpaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSpaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSpaceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteStudioLifecycleConfigCommand
 */
export const de_DeleteStudioLifecycleConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioLifecycleConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteStudioLifecycleConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTagsCommand
 */
export const de_DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTagsOutput(data, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTrialCommand
 */
export const de_DeleteTrialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTrialResponse(data, context);
  const response: DeleteTrialCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTrialComponentCommand
 */
export const de_DeleteTrialComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrialComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTrialComponentResponse(data, context);
  const response: DeleteTrialComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteUserProfileCommand
 */
export const de_DeleteUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteWorkforceCommand
 */
export const de_DeleteWorkforceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkforceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteWorkforceResponse(data, context);
  const response: DeleteWorkforceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteWorkteamCommand
 */
export const de_DeleteWorkteamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkteamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteWorkteamResponse(data, context);
  const response: DeleteWorkteamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeregisterDevicesCommand
 */
export const de_DeregisterDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeActionCommand
 */
export const de_DescribeActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeActionResponse(data, context);
  const response: DescribeActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAlgorithmCommand
 */
export const de_DescribeAlgorithmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlgorithmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAlgorithmOutput(data, context);
  const response: DescribeAlgorithmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAppCommand
 */
export const de_DescribeAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAppResponse(data, context);
  const response: DescribeAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAppImageConfigCommand
 */
export const de_DescribeAppImageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppImageConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAppImageConfigResponse(data, context);
  const response: DescribeAppImageConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeArtifactCommand
 */
export const de_DescribeArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeArtifactResponse(data, context);
  const response: DescribeArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAutoMLJobCommand
 */
export const de_DescribeAutoMLJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoMLJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAutoMLJobResponse(data, context);
  const response: DescribeAutoMLJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAutoMLJobV2Command
 */
export const de_DescribeAutoMLJobV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoMLJobV2CommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAutoMLJobV2Response(data, context);
  const response: DescribeAutoMLJobV2CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeClusterCommand
 */
export const de_DescribeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeClusterResponse(data, context);
  const response: DescribeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeClusterNodeCommand
 */
export const de_DescribeClusterNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterNodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeClusterNodeResponse(data, context);
  const response: DescribeClusterNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCodeRepositoryCommand
 */
export const de_DescribeCodeRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCodeRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCodeRepositoryOutput(data, context);
  const response: DescribeCodeRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCompilationJobCommand
 */
export const de_DescribeCompilationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCompilationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCompilationJobResponse(data, context);
  const response: DescribeCompilationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeContextCommand
 */
export const de_DescribeContextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContextCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeContextResponse(data, context);
  const response: DescribeContextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDataQualityJobDefinitionCommand
 */
export const de_DescribeDataQualityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataQualityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDataQualityJobDefinitionResponse(data, context);
  const response: DescribeDataQualityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDeviceCommand
 */
export const de_DescribeDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDeviceResponse(data, context);
  const response: DescribeDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDeviceFleetCommand
 */
export const de_DescribeDeviceFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDeviceFleetResponse(data, context);
  const response: DescribeDeviceFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDomainCommand
 */
export const de_DescribeDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDomainResponse(data, context);
  const response: DescribeDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEdgeDeploymentPlanCommand
 */
export const de_DescribeEdgeDeploymentPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEdgeDeploymentPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEdgeDeploymentPlanResponse(data, context);
  const response: DescribeEdgeDeploymentPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEdgePackagingJobCommand
 */
export const de_DescribeEdgePackagingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEdgePackagingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEdgePackagingJobResponse(data, context);
  const response: DescribeEdgePackagingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEndpointCommand
 */
export const de_DescribeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEndpointOutput(data, context);
  const response: DescribeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEndpointConfigCommand
 */
export const de_DescribeEndpointConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEndpointConfigOutput(data, context);
  const response: DescribeEndpointConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeExperimentCommand
 */
export const de_DescribeExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeExperimentResponse(data, context);
  const response: DescribeExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFeatureGroupCommand
 */
export const de_DescribeFeatureGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFeatureGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFeatureGroupResponse(data, context);
  const response: DescribeFeatureGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFeatureMetadataCommand
 */
export const de_DescribeFeatureMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFeatureMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFeatureMetadataResponse(data, context);
  const response: DescribeFeatureMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFlowDefinitionCommand
 */
export const de_DescribeFlowDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFlowDefinitionResponse(data, context);
  const response: DescribeFlowDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeHubCommand
 */
export const de_DescribeHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeHubResponse(data, context);
  const response: DescribeHubCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeHubContentCommand
 */
export const de_DescribeHubContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubContentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeHubContentResponse(data, context);
  const response: DescribeHubContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeHumanTaskUiCommand
 */
export const de_DescribeHumanTaskUiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHumanTaskUiCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeHumanTaskUiResponse(data, context);
  const response: DescribeHumanTaskUiCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeHyperParameterTuningJobCommand
 */
export const de_DescribeHyperParameterTuningJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHyperParameterTuningJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeHyperParameterTuningJobResponse(data, context);
  const response: DescribeHyperParameterTuningJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeImageCommand
 */
export const de_DescribeImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeImageResponse(data, context);
  const response: DescribeImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeImageVersionCommand
 */
export const de_DescribeImageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeImageVersionResponse(data, context);
  const response: DescribeImageVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeInferenceComponentCommand
 */
export const de_DescribeInferenceComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInferenceComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInferenceComponentOutput(data, context);
  const response: DescribeInferenceComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeInferenceExperimentCommand
 */
export const de_DescribeInferenceExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInferenceExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInferenceExperimentResponse(data, context);
  const response: DescribeInferenceExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeInferenceRecommendationsJobCommand
 */
export const de_DescribeInferenceRecommendationsJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInferenceRecommendationsJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInferenceRecommendationsJobResponse(data, context);
  const response: DescribeInferenceRecommendationsJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLabelingJobCommand
 */
export const de_DescribeLabelingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLabelingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLabelingJobResponse(data, context);
  const response: DescribeLabelingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLineageGroupCommand
 */
export const de_DescribeLineageGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLineageGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLineageGroupResponse(data, context);
  const response: DescribeLineageGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeMlflowTrackingServerCommand
 */
export const de_DescribeMlflowTrackingServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMlflowTrackingServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMlflowTrackingServerResponse(data, context);
  const response: DescribeMlflowTrackingServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeModelCommand
 */
export const de_DescribeModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelOutput(data, context);
  const response: DescribeModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeModelBiasJobDefinitionCommand
 */
export const de_DescribeModelBiasJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelBiasJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelBiasJobDefinitionResponse(data, context);
  const response: DescribeModelBiasJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeModelCardCommand
 */
export const de_DescribeModelCardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelCardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelCardResponse(data, context);
  const response: DescribeModelCardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeModelCardExportJobCommand
 */
export const de_DescribeModelCardExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelCardExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelCardExportJobResponse(data, context);
  const response: DescribeModelCardExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeModelExplainabilityJobDefinitionCommand
 */
export const de_DescribeModelExplainabilityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelExplainabilityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelExplainabilityJobDefinitionResponse(data, context);
  const response: DescribeModelExplainabilityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeModelPackageCommand
 */
export const de_DescribeModelPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelPackageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelPackageOutput(data, context);
  const response: DescribeModelPackageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeModelPackageGroupCommand
 */
export const de_DescribeModelPackageGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelPackageGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelPackageGroupOutput(data, context);
  const response: DescribeModelPackageGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeModelQualityJobDefinitionCommand
 */
export const de_DescribeModelQualityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelQualityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelQualityJobDefinitionResponse(data, context);
  const response: DescribeModelQualityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeMonitoringScheduleCommand
 */
export const de_DescribeMonitoringScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMonitoringScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMonitoringScheduleResponse(data, context);
  const response: DescribeMonitoringScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeNotebookInstanceCommand
 */
export const de_DescribeNotebookInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotebookInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeNotebookInstanceOutput(data, context);
  const response: DescribeNotebookInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand
 */
export const de_DescribeNotebookInstanceLifecycleConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotebookInstanceLifecycleConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeNotebookInstanceLifecycleConfigOutput(data, context);
  const response: DescribeNotebookInstanceLifecycleConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribePipelineCommand
 */
export const de_DescribePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePipelineResponse(data, context);
  const response: DescribePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribePipelineDefinitionForExecutionCommand
 */
export const de_DescribePipelineDefinitionForExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelineDefinitionForExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePipelineDefinitionForExecutionResponse(data, context);
  const response: DescribePipelineDefinitionForExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribePipelineExecutionCommand
 */
export const de_DescribePipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelineExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePipelineExecutionResponse(data, context);
  const response: DescribePipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeProcessingJobCommand
 */
export const de_DescribeProcessingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProcessingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProcessingJobResponse(data, context);
  const response: DescribeProcessingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeProjectCommand
 */
export const de_DescribeProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProjectOutput(data, context);
  const response: DescribeProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeSpaceCommand
 */
export const de_DescribeSpaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSpaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSpaceResponse(data, context);
  const response: DescribeSpaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeStudioLifecycleConfigCommand
 */
export const de_DescribeStudioLifecycleConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStudioLifecycleConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStudioLifecycleConfigResponse(data, context);
  const response: DescribeStudioLifecycleConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeSubscribedWorkteamCommand
 */
export const de_DescribeSubscribedWorkteamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscribedWorkteamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSubscribedWorkteamResponse(data, context);
  const response: DescribeSubscribedWorkteamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTrainingJobCommand
 */
export const de_DescribeTrainingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrainingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTrainingJobResponse(data, context);
  const response: DescribeTrainingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTransformJobCommand
 */
export const de_DescribeTransformJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTransformJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTransformJobResponse(data, context);
  const response: DescribeTransformJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTrialCommand
 */
export const de_DescribeTrialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTrialResponse(data, context);
  const response: DescribeTrialCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTrialComponentCommand
 */
export const de_DescribeTrialComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrialComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTrialComponentResponse(data, context);
  const response: DescribeTrialComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeUserProfileCommand
 */
export const de_DescribeUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUserProfileResponse(data, context);
  const response: DescribeUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWorkforceCommand
 */
export const de_DescribeWorkforceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkforceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkforceResponse(data, context);
  const response: DescribeWorkforceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWorkteamCommand
 */
export const de_DescribeWorkteamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkteamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkteamResponse(data, context);
  const response: DescribeWorkteamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisableSagemakerServicecatalogPortfolioCommand
 */
export const de_DisableSagemakerServicecatalogPortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSagemakerServicecatalogPortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisableSagemakerServicecatalogPortfolioOutput(data, context);
  const response: DisableSagemakerServicecatalogPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateTrialComponentCommand
 */
export const de_DisassociateTrialComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTrialComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateTrialComponentResponse(data, context);
  const response: DisassociateTrialComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1EnableSagemakerServicecatalogPortfolioCommand
 */
export const de_EnableSagemakerServicecatalogPortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSagemakerServicecatalogPortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnableSagemakerServicecatalogPortfolioOutput(data, context);
  const response: EnableSagemakerServicecatalogPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDeviceFleetReportCommand
 */
export const de_GetDeviceFleetReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceFleetReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDeviceFleetReportResponse(data, context);
  const response: GetDeviceFleetReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetLineageGroupPolicyCommand
 */
export const de_GetLineageGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLineageGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLineageGroupPolicyResponse(data, context);
  const response: GetLineageGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetModelPackageGroupPolicyCommand
 */
export const de_GetModelPackageGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelPackageGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetModelPackageGroupPolicyOutput(data, context);
  const response: GetModelPackageGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetSagemakerServicecatalogPortfolioStatusCommand
 */
export const de_GetSagemakerServicecatalogPortfolioStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSagemakerServicecatalogPortfolioStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSagemakerServicecatalogPortfolioStatusOutput(data, context);
  const response: GetSagemakerServicecatalogPortfolioStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetScalingConfigurationRecommendationCommand
 */
export const de_GetScalingConfigurationRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScalingConfigurationRecommendationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetScalingConfigurationRecommendationResponse(data, context);
  const response: GetScalingConfigurationRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetSearchSuggestionsCommand
 */
export const de_GetSearchSuggestionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSearchSuggestionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSearchSuggestionsResponse(data, context);
  const response: GetSearchSuggestionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ImportHubContentCommand
 */
export const de_ImportHubContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportHubContentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportHubContentResponse(data, context);
  const response: ImportHubContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListActionsCommand
 */
export const de_ListActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListActionsResponse(data, context);
  const response: ListActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAlgorithmsCommand
 */
export const de_ListAlgorithmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlgorithmsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAlgorithmsOutput(data, context);
  const response: ListAlgorithmsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAliasesCommand
 */
export const de_ListAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAliasesResponse(data, context);
  const response: ListAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAppImageConfigsCommand
 */
export const de_ListAppImageConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppImageConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAppImageConfigsResponse(data, context);
  const response: ListAppImageConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAppsCommand
 */
export const de_ListAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAppsResponse(data, context);
  const response: ListAppsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListArtifactsCommand
 */
export const de_ListArtifactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArtifactsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListArtifactsResponse(data, context);
  const response: ListArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAssociationsCommand
 */
export const de_ListAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAssociationsResponse(data, context);
  const response: ListAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAutoMLJobsCommand
 */
export const de_ListAutoMLJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutoMLJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAutoMLJobsResponse(data, context);
  const response: ListAutoMLJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCandidatesForAutoMLJobCommand
 */
export const de_ListCandidatesForAutoMLJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCandidatesForAutoMLJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCandidatesForAutoMLJobResponse(data, context);
  const response: ListCandidatesForAutoMLJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListClusterNodesCommand
 */
export const de_ListClusterNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterNodesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListClusterNodesResponse(data, context);
  const response: ListClusterNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListClustersCommand
 */
export const de_ListClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListClustersResponse(data, context);
  const response: ListClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCodeRepositoriesCommand
 */
export const de_ListCodeRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodeRepositoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCodeRepositoriesOutput(data, context);
  const response: ListCodeRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCompilationJobsCommand
 */
export const de_ListCompilationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCompilationJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCompilationJobsResponse(data, context);
  const response: ListCompilationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListContextsCommand
 */
export const de_ListContextsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContextsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListContextsResponse(data, context);
  const response: ListContextsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDataQualityJobDefinitionsCommand
 */
export const de_ListDataQualityJobDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataQualityJobDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDataQualityJobDefinitionsResponse(data, context);
  const response: ListDataQualityJobDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDeviceFleetsCommand
 */
export const de_ListDeviceFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceFleetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDeviceFleetsResponse(data, context);
  const response: ListDeviceFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDevicesCommand
 */
export const de_ListDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDevicesResponse(data, context);
  const response: ListDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDomainsCommand
 */
export const de_ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDomainsResponse(data, context);
  const response: ListDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEdgeDeploymentPlansCommand
 */
export const de_ListEdgeDeploymentPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEdgeDeploymentPlansCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEdgeDeploymentPlansResponse(data, context);
  const response: ListEdgeDeploymentPlansCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEdgePackagingJobsCommand
 */
export const de_ListEdgePackagingJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEdgePackagingJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEdgePackagingJobsResponse(data, context);
  const response: ListEdgePackagingJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEndpointConfigsCommand
 */
export const de_ListEndpointConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEndpointConfigsOutput(data, context);
  const response: ListEndpointConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEndpointsCommand
 */
export const de_ListEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEndpointsOutput(data, context);
  const response: ListEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListExperimentsCommand
 */
export const de_ListExperimentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListExperimentsResponse(data, context);
  const response: ListExperimentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFeatureGroupsCommand
 */
export const de_ListFeatureGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFeatureGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFeatureGroupsResponse(data, context);
  const response: ListFeatureGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFlowDefinitionsCommand
 */
export const de_ListFlowDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFlowDefinitionsResponse(data, context);
  const response: ListFlowDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListHubContentsCommand
 */
export const de_ListHubContentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHubContentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHubContentsResponse(data, context);
  const response: ListHubContentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListHubContentVersionsCommand
 */
export const de_ListHubContentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHubContentVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHubContentVersionsResponse(data, context);
  const response: ListHubContentVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListHubsCommand
 */
export const de_ListHubsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHubsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHubsResponse(data, context);
  const response: ListHubsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListHumanTaskUisCommand
 */
export const de_ListHumanTaskUisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHumanTaskUisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHumanTaskUisResponse(data, context);
  const response: ListHumanTaskUisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListHyperParameterTuningJobsCommand
 */
export const de_ListHyperParameterTuningJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHyperParameterTuningJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHyperParameterTuningJobsResponse(data, context);
  const response: ListHyperParameterTuningJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListImagesCommand
 */
export const de_ListImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListImagesResponse(data, context);
  const response: ListImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListImageVersionsCommand
 */
export const de_ListImageVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListImageVersionsResponse(data, context);
  const response: ListImageVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListInferenceComponentsCommand
 */
export const de_ListInferenceComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceComponentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInferenceComponentsOutput(data, context);
  const response: ListInferenceComponentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListInferenceExperimentsCommand
 */
export const de_ListInferenceExperimentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceExperimentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInferenceExperimentsResponse(data, context);
  const response: ListInferenceExperimentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListInferenceRecommendationsJobsCommand
 */
export const de_ListInferenceRecommendationsJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceRecommendationsJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInferenceRecommendationsJobsResponse(data, context);
  const response: ListInferenceRecommendationsJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListInferenceRecommendationsJobStepsCommand
 */
export const de_ListInferenceRecommendationsJobStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceRecommendationsJobStepsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInferenceRecommendationsJobStepsResponse(data, context);
  const response: ListInferenceRecommendationsJobStepsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListLabelingJobsCommand
 */
export const de_ListLabelingJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLabelingJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLabelingJobsResponse(data, context);
  const response: ListLabelingJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListLabelingJobsForWorkteamCommand
 */
export const de_ListLabelingJobsForWorkteamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLabelingJobsForWorkteamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLabelingJobsForWorkteamResponse(data, context);
  const response: ListLabelingJobsForWorkteamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListLineageGroupsCommand
 */
export const de_ListLineageGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLineageGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLineageGroupsResponse(data, context);
  const response: ListLineageGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListMlflowTrackingServersCommand
 */
export const de_ListMlflowTrackingServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMlflowTrackingServersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMlflowTrackingServersResponse(data, context);
  const response: ListMlflowTrackingServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelBiasJobDefinitionsCommand
 */
export const de_ListModelBiasJobDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelBiasJobDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelBiasJobDefinitionsResponse(data, context);
  const response: ListModelBiasJobDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelCardExportJobsCommand
 */
export const de_ListModelCardExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelCardExportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelCardExportJobsResponse(data, context);
  const response: ListModelCardExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelCardsCommand
 */
export const de_ListModelCardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelCardsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelCardsResponse(data, context);
  const response: ListModelCardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelCardVersionsCommand
 */
export const de_ListModelCardVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelCardVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelCardVersionsResponse(data, context);
  const response: ListModelCardVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelExplainabilityJobDefinitionsCommand
 */
export const de_ListModelExplainabilityJobDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelExplainabilityJobDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelExplainabilityJobDefinitionsResponse(data, context);
  const response: ListModelExplainabilityJobDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelMetadataCommand
 */
export const de_ListModelMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelMetadataResponse(data, context);
  const response: ListModelMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelPackageGroupsCommand
 */
export const de_ListModelPackageGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelPackageGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelPackageGroupsOutput(data, context);
  const response: ListModelPackageGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelPackagesCommand
 */
export const de_ListModelPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelPackagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelPackagesOutput(data, context);
  const response: ListModelPackagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelQualityJobDefinitionsCommand
 */
export const de_ListModelQualityJobDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelQualityJobDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelQualityJobDefinitionsResponse(data, context);
  const response: ListModelQualityJobDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelsCommand
 */
export const de_ListModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelsOutput(data, context);
  const response: ListModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListMonitoringAlertHistoryCommand
 */
export const de_ListMonitoringAlertHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitoringAlertHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMonitoringAlertHistoryResponse(data, context);
  const response: ListMonitoringAlertHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListMonitoringAlertsCommand
 */
export const de_ListMonitoringAlertsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitoringAlertsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMonitoringAlertsResponse(data, context);
  const response: ListMonitoringAlertsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListMonitoringExecutionsCommand
 */
export const de_ListMonitoringExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitoringExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMonitoringExecutionsResponse(data, context);
  const response: ListMonitoringExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListMonitoringSchedulesCommand
 */
export const de_ListMonitoringSchedulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitoringSchedulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMonitoringSchedulesResponse(data, context);
  const response: ListMonitoringSchedulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand
 */
export const de_ListNotebookInstanceLifecycleConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotebookInstanceLifecycleConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListNotebookInstanceLifecycleConfigsOutput(data, context);
  const response: ListNotebookInstanceLifecycleConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListNotebookInstancesCommand
 */
export const de_ListNotebookInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotebookInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListNotebookInstancesOutput(data, context);
  const response: ListNotebookInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPipelineExecutionsCommand
 */
export const de_ListPipelineExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelineExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPipelineExecutionsResponse(data, context);
  const response: ListPipelineExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPipelineExecutionStepsCommand
 */
export const de_ListPipelineExecutionStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelineExecutionStepsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPipelineExecutionStepsResponse(data, context);
  const response: ListPipelineExecutionStepsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPipelineParametersForExecutionCommand
 */
export const de_ListPipelineParametersForExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelineParametersForExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPipelineParametersForExecutionResponse(data, context);
  const response: ListPipelineParametersForExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPipelinesCommand
 */
export const de_ListPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPipelinesResponse(data, context);
  const response: ListPipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListProcessingJobsCommand
 */
export const de_ListProcessingJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProcessingJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListProcessingJobsResponse(data, context);
  const response: ListProcessingJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListProjectsCommand
 */
export const de_ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListProjectsOutput(data, context);
  const response: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListResourceCatalogsCommand
 */
export const de_ListResourceCatalogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceCatalogsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResourceCatalogsResponse(data, context);
  const response: ListResourceCatalogsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSpacesCommand
 */
export const de_ListSpacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSpacesResponse(data, context);
  const response: ListSpacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListStageDevicesCommand
 */
export const de_ListStageDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStageDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStageDevicesResponse(data, context);
  const response: ListStageDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListStudioLifecycleConfigsCommand
 */
export const de_ListStudioLifecycleConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudioLifecycleConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStudioLifecycleConfigsResponse(data, context);
  const response: ListStudioLifecycleConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSubscribedWorkteamsCommand
 */
export const de_ListSubscribedWorkteamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscribedWorkteamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSubscribedWorkteamsResponse(data, context);
  const response: ListSubscribedWorkteamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsOutput(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTrainingJobsCommand
 */
export const de_ListTrainingJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrainingJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTrainingJobsResponse(data, context);
  const response: ListTrainingJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand
 */
export const de_ListTrainingJobsForHyperParameterTuningJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrainingJobsForHyperParameterTuningJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTrainingJobsForHyperParameterTuningJobResponse(data, context);
  const response: ListTrainingJobsForHyperParameterTuningJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTransformJobsCommand
 */
export const de_ListTransformJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTransformJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTransformJobsResponse(data, context);
  const response: ListTransformJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTrialComponentsCommand
 */
export const de_ListTrialComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrialComponentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTrialComponentsResponse(data, context);
  const response: ListTrialComponentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTrialsCommand
 */
export const de_ListTrialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTrialsResponse(data, context);
  const response: ListTrialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListUserProfilesCommand
 */
export const de_ListUserProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUserProfilesResponse(data, context);
  const response: ListUserProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListWorkforcesCommand
 */
export const de_ListWorkforcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkforcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWorkforcesResponse(data, context);
  const response: ListWorkforcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListWorkteamsCommand
 */
export const de_ListWorkteamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkteamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWorkteamsResponse(data, context);
  const response: ListWorkteamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutModelPackageGroupPolicyCommand
 */
export const de_PutModelPackageGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutModelPackageGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutModelPackageGroupPolicyOutput(data, context);
  const response: PutModelPackageGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1QueryLineageCommand
 */
export const de_QueryLineageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryLineageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_QueryLineageResponse(data, context);
  const response: QueryLineageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RegisterDevicesCommand
 */
export const de_RegisterDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1RenderUiTemplateCommand
 */
export const de_RenderUiTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenderUiTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RenderUiTemplateResponse(data, context);
  const response: RenderUiTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RetryPipelineExecutionCommand
 */
export const de_RetryPipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryPipelineExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RetryPipelineExecutionResponse(data, context);
  const response: RetryPipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SearchCommand
 */
export const de_SearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchResponse(data, context);
  const response: SearchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SendPipelineExecutionStepFailureCommand
 */
export const de_SendPipelineExecutionStepFailureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendPipelineExecutionStepFailureCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendPipelineExecutionStepFailureResponse(data, context);
  const response: SendPipelineExecutionStepFailureCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SendPipelineExecutionStepSuccessCommand
 */
export const de_SendPipelineExecutionStepSuccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendPipelineExecutionStepSuccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendPipelineExecutionStepSuccessResponse(data, context);
  const response: SendPipelineExecutionStepSuccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartEdgeDeploymentStageCommand
 */
export const de_StartEdgeDeploymentStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEdgeDeploymentStageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartEdgeDeploymentStageCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StartInferenceExperimentCommand
 */
export const de_StartInferenceExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInferenceExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartInferenceExperimentResponse(data, context);
  const response: StartInferenceExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartMlflowTrackingServerCommand
 */
export const de_StartMlflowTrackingServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMlflowTrackingServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartMlflowTrackingServerResponse(data, context);
  const response: StartMlflowTrackingServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartMonitoringScheduleCommand
 */
export const de_StartMonitoringScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMonitoringScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartMonitoringScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StartNotebookInstanceCommand
 */
export const de_StartNotebookInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartNotebookInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartNotebookInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StartPipelineExecutionCommand
 */
export const de_StartPipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartPipelineExecutionResponse(data, context);
  const response: StartPipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopAutoMLJobCommand
 */
export const de_StopAutoMLJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAutoMLJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopAutoMLJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopCompilationJobCommand
 */
export const de_StopCompilationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCompilationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopCompilationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopEdgeDeploymentStageCommand
 */
export const de_StopEdgeDeploymentStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEdgeDeploymentStageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopEdgeDeploymentStageCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopEdgePackagingJobCommand
 */
export const de_StopEdgePackagingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEdgePackagingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopEdgePackagingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopHyperParameterTuningJobCommand
 */
export const de_StopHyperParameterTuningJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopHyperParameterTuningJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopHyperParameterTuningJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopInferenceExperimentCommand
 */
export const de_StopInferenceExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInferenceExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopInferenceExperimentResponse(data, context);
  const response: StopInferenceExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopInferenceRecommendationsJobCommand
 */
export const de_StopInferenceRecommendationsJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInferenceRecommendationsJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopInferenceRecommendationsJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopLabelingJobCommand
 */
export const de_StopLabelingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopLabelingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopLabelingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopMlflowTrackingServerCommand
 */
export const de_StopMlflowTrackingServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMlflowTrackingServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopMlflowTrackingServerResponse(data, context);
  const response: StopMlflowTrackingServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopMonitoringScheduleCommand
 */
export const de_StopMonitoringScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMonitoringScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopMonitoringScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopNotebookInstanceCommand
 */
export const de_StopNotebookInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopNotebookInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopNotebookInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopPipelineExecutionCommand
 */
export const de_StopPipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPipelineExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopPipelineExecutionResponse(data, context);
  const response: StopPipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopProcessingJobCommand
 */
export const de_StopProcessingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopProcessingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopProcessingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopTrainingJobCommand
 */
export const de_StopTrainingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTrainingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopTrainingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopTransformJobCommand
 */
export const de_StopTransformJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTransformJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopTransformJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateActionCommand
 */
export const de_UpdateActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateActionResponse(data, context);
  const response: UpdateActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateAppImageConfigCommand
 */
export const de_UpdateAppImageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppImageConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAppImageConfigResponse(data, context);
  const response: UpdateAppImageConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateArtifactCommand
 */
export const de_UpdateArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateArtifactResponse(data, context);
  const response: UpdateArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateClusterCommand
 */
export const de_UpdateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateClusterResponse(data, context);
  const response: UpdateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateClusterSoftwareCommand
 */
export const de_UpdateClusterSoftwareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterSoftwareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateClusterSoftwareResponse(data, context);
  const response: UpdateClusterSoftwareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateCodeRepositoryCommand
 */
export const de_UpdateCodeRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCodeRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateCodeRepositoryOutput(data, context);
  const response: UpdateCodeRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateContextCommand
 */
export const de_UpdateContextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContextCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateContextResponse(data, context);
  const response: UpdateContextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDeviceFleetCommand
 */
export const de_UpdateDeviceFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateDeviceFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDevicesCommand
 */
export const de_UpdateDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDomainCommand
 */
export const de_UpdateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDomainResponse(data, context);
  const response: UpdateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateEndpointCommand
 */
export const de_UpdateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateEndpointOutput(data, context);
  const response: UpdateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand
 */
export const de_UpdateEndpointWeightsAndCapacitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointWeightsAndCapacitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateEndpointWeightsAndCapacitiesOutput(data, context);
  const response: UpdateEndpointWeightsAndCapacitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateExperimentCommand
 */
export const de_UpdateExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateExperimentResponse(data, context);
  const response: UpdateExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateFeatureGroupCommand
 */
export const de_UpdateFeatureGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFeatureGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFeatureGroupResponse(data, context);
  const response: UpdateFeatureGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateFeatureMetadataCommand
 */
export const de_UpdateFeatureMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFeatureMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateFeatureMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateHubCommand
 */
export const de_UpdateHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHubCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateHubResponse(data, context);
  const response: UpdateHubCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateImageCommand
 */
export const de_UpdateImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateImageResponse(data, context);
  const response: UpdateImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateImageVersionCommand
 */
export const de_UpdateImageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImageVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateImageVersionResponse(data, context);
  const response: UpdateImageVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateInferenceComponentCommand
 */
export const de_UpdateInferenceComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInferenceComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateInferenceComponentOutput(data, context);
  const response: UpdateInferenceComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateInferenceComponentRuntimeConfigCommand
 */
export const de_UpdateInferenceComponentRuntimeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInferenceComponentRuntimeConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateInferenceComponentRuntimeConfigOutput(data, context);
  const response: UpdateInferenceComponentRuntimeConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateInferenceExperimentCommand
 */
export const de_UpdateInferenceExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInferenceExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateInferenceExperimentResponse(data, context);
  const response: UpdateInferenceExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateMlflowTrackingServerCommand
 */
export const de_UpdateMlflowTrackingServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMlflowTrackingServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateMlflowTrackingServerResponse(data, context);
  const response: UpdateMlflowTrackingServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateModelCardCommand
 */
export const de_UpdateModelCardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelCardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateModelCardResponse(data, context);
  const response: UpdateModelCardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateModelPackageCommand
 */
export const de_UpdateModelPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelPackageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateModelPackageOutput(data, context);
  const response: UpdateModelPackageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateMonitoringAlertCommand
 */
export const de_UpdateMonitoringAlertCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMonitoringAlertCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateMonitoringAlertResponse(data, context);
  const response: UpdateMonitoringAlertCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateMonitoringScheduleCommand
 */
export const de_UpdateMonitoringScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMonitoringScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateMonitoringScheduleResponse(data, context);
  const response: UpdateMonitoringScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateNotebookInstanceCommand
 */
export const de_UpdateNotebookInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotebookInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateNotebookInstanceOutput(data, context);
  const response: UpdateNotebookInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand
 */
export const de_UpdateNotebookInstanceLifecycleConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotebookInstanceLifecycleConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateNotebookInstanceLifecycleConfigOutput(data, context);
  const response: UpdateNotebookInstanceLifecycleConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdatePipelineCommand
 */
export const de_UpdatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePipelineResponse(data, context);
  const response: UpdatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdatePipelineExecutionCommand
 */
export const de_UpdatePipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePipelineExecutionResponse(data, context);
  const response: UpdatePipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateProjectCommand
 */
export const de_UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateProjectOutput(data, context);
  const response: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateSpaceCommand
 */
export const de_UpdateSpaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSpaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSpaceResponse(data, context);
  const response: UpdateSpaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateTrainingJobCommand
 */
export const de_UpdateTrainingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrainingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTrainingJobResponse(data, context);
  const response: UpdateTrainingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateTrialCommand
 */
export const de_UpdateTrialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTrialResponse(data, context);
  const response: UpdateTrialCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateTrialComponentCommand
 */
export const de_UpdateTrialComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrialComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTrialComponentResponse(data, context);
  const response: UpdateTrialComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateUserProfileCommand
 */
export const de_UpdateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateUserProfileResponse(data, context);
  const response: UpdateUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateWorkforceCommand
 */
export const de_UpdateWorkforceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkforceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateWorkforceResponse(data, context);
  const response: UpdateWorkforceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateWorkteamCommand
 */
export const de_UpdateWorkteamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkteamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateWorkteamResponse(data, context);
  const response: UpdateWorkteamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseRes
 */
const de_ResourceInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<ResourceInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceLimitExceededRes
 */
const de_ResourceLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundRes
 */
const de_ResourceNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<ResourceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_ActionSource omitted.

// se_AddAssociationRequest omitted.

// se_AdditionalCodeRepositoryNamesOrUrls omitted.

// se_AdditionalInferenceSpecificationDefinition omitted.

// se_AdditionalInferenceSpecifications omitted.

// se_AdditionalS3DataSource omitted.

// se_AddTagsInput omitted.

// se_AggregationTransformations omitted.

// se_Alarm omitted.

// se_AlarmList omitted.

// se_AlgorithmSpecification omitted.

// se_AlgorithmValidationProfile omitted.

// se_AlgorithmValidationProfiles omitted.

// se_AlgorithmValidationSpecification omitted.

// se_AnnotationConsolidationConfig omitted.

// se_AppSpecification omitted.

// se_ArtifactProperties omitted.

// se_ArtifactSource omitted.

// se_ArtifactSourceType omitted.

// se_ArtifactSourceTypes omitted.

// se_AssociateTrialComponentRequest omitted.

// se_AsyncInferenceClientConfig omitted.

// se_AsyncInferenceConfig omitted.

// se_AsyncInferenceNotificationConfig omitted.

// se_AsyncInferenceOutputConfig omitted.

// se_AsyncNotificationTopicTypeList omitted.

// se_AthenaDatasetDefinition omitted.

// se_AttributeNames omitted.

// se_AuthenticationRequestExtraParams omitted.

// se_AutoMLAlgorithmConfig omitted.

// se_AutoMLAlgorithms omitted.

// se_AutoMLAlgorithmsConfig omitted.

// se_AutoMLCandidateGenerationConfig omitted.

// se_AutoMLChannel omitted.

// se_AutoMLDataSource omitted.

/**
 * serializeAws_json1_1AutoMLDataSplitConfig
 */
const se_AutoMLDataSplitConfig = (input: AutoMLDataSplitConfig, context: __SerdeContext): any => {
  return take(input, {
    ValidationFraction: __serializeFloat,
  });
};

// se_AutoMLInputDataConfig omitted.

// se_AutoMLJobChannel omitted.

// se_AutoMLJobCompletionCriteria omitted.

/**
 * serializeAws_json1_1AutoMLJobConfig
 */
const se_AutoMLJobConfig = (input: AutoMLJobConfig, context: __SerdeContext): any => {
  return take(input, {
    CandidateGenerationConfig: _json,
    CompletionCriteria: _json,
    DataSplitConfig: (_) => se_AutoMLDataSplitConfig(_, context),
    Mode: [],
    SecurityConfig: _json,
  });
};

// se_AutoMLJobInputDataConfig omitted.

// se_AutoMLJobObjective omitted.

// se_AutoMLOutputDataConfig omitted.

// se_AutoMLProblemTypeConfig omitted.

// se_AutoMLS3DataSource omitted.

// se_AutoMLSecurityConfig omitted.

// se_AutoParameter omitted.

// se_AutoParameters omitted.

// se_AutoRollbackConfig omitted.

// se_Autotune omitted.

// se_BatchDataCaptureConfig omitted.

// se_BatchDescribeModelPackageInput omitted.

/**
 * serializeAws_json1_1BatchTransformInput
 */
const se_BatchTransformInput = (input: BatchTransformInput, context: __SerdeContext): any => {
  return take(input, {
    DataCapturedDestinationS3Uri: [],
    DatasetFormat: _json,
    EndTimeOffset: [],
    ExcludeFeaturesAttribute: [],
    FeaturesAttribute: [],
    InferenceAttribute: [],
    LocalPath: [],
    ProbabilityAttribute: [],
    ProbabilityThresholdAttribute: __serializeFloat,
    S3DataDistributionType: [],
    S3InputMode: [],
    StartTimeOffset: [],
  });
};

// se_BestObjectiveNotImproving omitted.

// se_Bias omitted.

// se_BlueGreenUpdatePolicy omitted.

// se_CandidateGenerationConfig omitted.

// se_CanvasAppSettings omitted.

// se_CapacitySize omitted.

// se_CaptureContentTypeHeader omitted.

// se_CaptureOption omitted.

// se_CaptureOptionList omitted.

// se_CategoricalParameter omitted.

// se_CategoricalParameterRange omitted.

// se_CategoricalParameterRanges omitted.

// se_CategoricalParameterRangeSpecification omitted.

// se_CategoricalParameterRangeValues omitted.

// se_CategoricalParameters omitted.

// se_Channel omitted.

// se_ChannelSpecification omitted.

// se_ChannelSpecifications omitted.

// se_CheckpointConfig omitted.

// se_Cidrs omitted.

// se_ClarifyExplainerConfig omitted.

// se_ClarifyFeatureHeaders omitted.

// se_ClarifyFeatureTypes omitted.

// se_ClarifyInferenceConfig omitted.

// se_ClarifyLabelHeaders omitted.

// se_ClarifyShapBaselineConfig omitted.

// se_ClarifyShapConfig omitted.

// se_ClarifyTextConfig omitted.

// se_ClusterEbsVolumeConfig omitted.

// se_ClusterInstanceGroupSpecification omitted.

// se_ClusterInstanceGroupSpecifications omitted.

// se_ClusterInstanceStorageConfig omitted.

// se_ClusterInstanceStorageConfigs omitted.

// se_ClusterLifeCycleConfig omitted.

// se_CodeEditorAppImageConfig omitted.

// se_CodeEditorAppSettings omitted.

// se_CodeRepositories omitted.

// se_CodeRepository omitted.

// se_CognitoConfig omitted.

// se_CognitoMemberDefinition omitted.

// se_CollectionConfig omitted.

// se_CollectionConfiguration omitted.

// se_CollectionConfigurations omitted.

// se_CollectionParameters omitted.

// se_CompressionTypes omitted.

// se_ContainerArguments omitted.

// se_ContainerConfig omitted.

// se_ContainerDefinition omitted.

// se_ContainerDefinitionList omitted.

// se_ContainerEntrypoint omitted.

// se_ContentClassifiers omitted.

// se_ContentTypes omitted.

// se_ContextSource omitted.

// se_ContinuousParameterRange omitted.

// se_ContinuousParameterRanges omitted.

// se_ContinuousParameterRangeSpecification omitted.

// se_ConvergenceDetected omitted.

// se_CreateActionRequest omitted.

// se_CreateAlgorithmInput omitted.

// se_CreateAppImageConfigRequest omitted.

// se_CreateAppRequest omitted.

// se_CreateArtifactRequest omitted.

/**
 * serializeAws_json1_1CreateAutoMLJobRequest
 */
const se_CreateAutoMLJobRequest = (input: CreateAutoMLJobRequest, context: __SerdeContext): any => {
  return take(input, {
    AutoMLJobConfig: (_) => se_AutoMLJobConfig(_, context),
    AutoMLJobName: [],
    AutoMLJobObjective: _json,
    GenerateCandidateDefinitionsOnly: [],
    InputDataConfig: _json,
    ModelDeployConfig: _json,
    OutputDataConfig: _json,
    ProblemType: [],
    RoleArn: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateAutoMLJobV2Request
 */
const se_CreateAutoMLJobV2Request = (input: CreateAutoMLJobV2Request, context: __SerdeContext): any => {
  return take(input, {
    AutoMLJobInputDataConfig: _json,
    AutoMLJobName: [],
    AutoMLJobObjective: _json,
    AutoMLProblemTypeConfig: _json,
    DataSplitConfig: (_) => se_AutoMLDataSplitConfig(_, context),
    ModelDeployConfig: _json,
    OutputDataConfig: _json,
    RoleArn: [],
    SecurityConfig: _json,
    Tags: _json,
  });
};

// se_CreateClusterRequest omitted.

// se_CreateCodeRepositoryInput omitted.

// se_CreateCompilationJobRequest omitted.

// se_CreateContextRequest omitted.

/**
 * serializeAws_json1_1CreateDataQualityJobDefinitionRequest
 */
const se_CreateDataQualityJobDefinitionRequest = (
  input: CreateDataQualityJobDefinitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    DataQualityAppSpecification: _json,
    DataQualityBaselineConfig: _json,
    DataQualityJobInput: (_) => se_DataQualityJobInput(_, context),
    DataQualityJobOutputConfig: _json,
    JobDefinitionName: [],
    JobResources: _json,
    NetworkConfig: _json,
    RoleArn: [],
    StoppingCondition: _json,
    Tags: _json,
  });
};

// se_CreateDeviceFleetRequest omitted.

// se_CreateDomainRequest omitted.

// se_CreateEdgeDeploymentPlanRequest omitted.

// se_CreateEdgeDeploymentStageRequest omitted.

// se_CreateEdgePackagingJobRequest omitted.

/**
 * serializeAws_json1_1CreateEndpointConfigInput
 */
const se_CreateEndpointConfigInput = (input: CreateEndpointConfigInput, context: __SerdeContext): any => {
  return take(input, {
    AsyncInferenceConfig: _json,
    DataCaptureConfig: _json,
    EnableNetworkIsolation: [],
    EndpointConfigName: [],
    ExecutionRoleArn: [],
    ExplainerConfig: _json,
    KmsKeyId: [],
    ProductionVariants: (_) => se_ProductionVariantList(_, context),
    ShadowProductionVariants: (_) => se_ProductionVariantList(_, context),
    Tags: _json,
    VpcConfig: _json,
  });
};

// se_CreateEndpointInput omitted.

// se_CreateExperimentRequest omitted.

// se_CreateFeatureGroupRequest omitted.

/**
 * serializeAws_json1_1CreateFlowDefinitionRequest
 */
const se_CreateFlowDefinitionRequest = (input: CreateFlowDefinitionRequest, context: __SerdeContext): any => {
  return take(input, {
    FlowDefinitionName: [],
    HumanLoopActivationConfig: (_) => se_HumanLoopActivationConfig(_, context),
    HumanLoopConfig: _json,
    HumanLoopRequestSource: _json,
    OutputConfig: _json,
    RoleArn: [],
    Tags: _json,
  });
};

// se_CreateHubRequest omitted.

// se_CreateHumanTaskUiRequest omitted.

/**
 * serializeAws_json1_1CreateHyperParameterTuningJobRequest
 */
const se_CreateHyperParameterTuningJobRequest = (
  input: CreateHyperParameterTuningJobRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Autotune: _json,
    HyperParameterTuningJobConfig: (_) => se_HyperParameterTuningJobConfig(_, context),
    HyperParameterTuningJobName: [],
    Tags: _json,
    TrainingJobDefinition: _json,
    TrainingJobDefinitions: _json,
    WarmStartConfig: _json,
  });
};

// se_CreateImageRequest omitted.

/**
 * serializeAws_json1_1CreateImageVersionRequest
 */
const se_CreateImageVersionRequest = (input: CreateImageVersionRequest, context: __SerdeContext): any => {
  return take(input, {
    Aliases: _json,
    BaseImage: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Horovod: [],
    ImageName: [],
    JobType: [],
    MLFramework: [],
    Processor: [],
    ProgrammingLang: [],
    ReleaseNotes: [],
    VendorGuidance: [],
  });
};

/**
 * serializeAws_json1_1CreateInferenceComponentInput
 */
const se_CreateInferenceComponentInput = (input: CreateInferenceComponentInput, context: __SerdeContext): any => {
  return take(input, {
    EndpointName: [],
    InferenceComponentName: [],
    RuntimeConfig: _json,
    Specification: (_) => se_InferenceComponentSpecification(_, context),
    Tags: _json,
    VariantName: [],
  });
};

/**
 * serializeAws_json1_1CreateInferenceExperimentRequest
 */
const se_CreateInferenceExperimentRequest = (input: CreateInferenceExperimentRequest, context: __SerdeContext): any => {
  return take(input, {
    DataStorageConfig: _json,
    Description: [],
    EndpointName: [],
    KmsKey: [],
    ModelVariants: _json,
    Name: [],
    RoleArn: [],
    Schedule: (_) => se_InferenceExperimentSchedule(_, context),
    ShadowModeConfig: _json,
    Tags: _json,
    Type: [],
  });
};

// se_CreateInferenceRecommendationsJobRequest omitted.

// se_CreateLabelingJobRequest omitted.

// se_CreateMlflowTrackingServerRequest omitted.

/**
 * serializeAws_json1_1CreateModelBiasJobDefinitionRequest
 */
const se_CreateModelBiasJobDefinitionRequest = (
  input: CreateModelBiasJobDefinitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    JobDefinitionName: [],
    JobResources: _json,
    ModelBiasAppSpecification: _json,
    ModelBiasBaselineConfig: _json,
    ModelBiasJobInput: (_) => se_ModelBiasJobInput(_, context),
    ModelBiasJobOutputConfig: _json,
    NetworkConfig: _json,
    RoleArn: [],
    StoppingCondition: _json,
    Tags: _json,
  });
};

// se_CreateModelCardExportJobRequest omitted.

// se_CreateModelCardRequest omitted.

/**
 * serializeAws_json1_1CreateModelExplainabilityJobDefinitionRequest
 */
const se_CreateModelExplainabilityJobDefinitionRequest = (
  input: CreateModelExplainabilityJobDefinitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    JobDefinitionName: [],
    JobResources: _json,
    ModelExplainabilityAppSpecification: _json,
    ModelExplainabilityBaselineConfig: _json,
    ModelExplainabilityJobInput: (_) => se_ModelExplainabilityJobInput(_, context),
    ModelExplainabilityJobOutputConfig: _json,
    NetworkConfig: _json,
    RoleArn: [],
    StoppingCondition: _json,
    Tags: _json,
  });
};

// se_CreateModelInput omitted.

// se_CreateModelPackageGroupInput omitted.

/**
 * serializeAws_json1_1CreateModelPackageInput
 */
const se_CreateModelPackageInput = (input: CreateModelPackageInput, context: __SerdeContext): any => {
  return take(input, {
    AdditionalInferenceSpecifications: _json,
    CertifyForMarketplace: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    CustomerMetadataProperties: _json,
    Domain: [],
    DriftCheckBaselines: _json,
    InferenceSpecification: _json,
    MetadataProperties: _json,
    ModelApprovalStatus: [],
    ModelCard: _json,
    ModelMetrics: _json,
    ModelPackageDescription: [],
    ModelPackageGroupName: [],
    ModelPackageName: [],
    SamplePayloadUrl: [],
    SecurityConfig: _json,
    SkipModelValidation: [],
    SourceAlgorithmSpecification: _json,
    SourceUri: [],
    Tags: _json,
    Task: [],
    ValidationSpecification: _json,
  });
};

/**
 * serializeAws_json1_1CreateModelQualityJobDefinitionRequest
 */
const se_CreateModelQualityJobDefinitionRequest = (
  input: CreateModelQualityJobDefinitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    JobDefinitionName: [],
    JobResources: _json,
    ModelQualityAppSpecification: _json,
    ModelQualityBaselineConfig: _json,
    ModelQualityJobInput: (_) => se_ModelQualityJobInput(_, context),
    ModelQualityJobOutputConfig: _json,
    NetworkConfig: _json,
    RoleArn: [],
    StoppingCondition: _json,
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateMonitoringScheduleRequest
 */
const se_CreateMonitoringScheduleRequest = (input: CreateMonitoringScheduleRequest, context: __SerdeContext): any => {
  return take(input, {
    MonitoringScheduleConfig: (_) => se_MonitoringScheduleConfig(_, context),
    MonitoringScheduleName: [],
    Tags: _json,
  });
};

// se_CreateNotebookInstanceInput omitted.

// se_CreateNotebookInstanceLifecycleConfigInput omitted.

/**
 * serializeAws_json1_1CreatePipelineRequest
 */
const se_CreatePipelineRequest = (input: CreatePipelineRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ParallelismConfiguration: _json,
    PipelineDefinition: [],
    PipelineDefinitionS3Location: _json,
    PipelineDescription: [],
    PipelineDisplayName: [],
    PipelineName: [],
    RoleArn: [],
    Tags: _json,
  });
};

// se_CreatePresignedDomainUrlRequest omitted.

// se_CreatePresignedMlflowTrackingServerUrlRequest omitted.

// se_CreatePresignedNotebookInstanceUrlInput omitted.

// se_CreateProcessingJobRequest omitted.

// se_CreateProjectInput omitted.

// se_CreateSpaceRequest omitted.

// se_CreateStudioLifecycleConfigRequest omitted.

// se_CreateTrainingJobRequest omitted.

// se_CreateTransformJobRequest omitted.

/**
 * serializeAws_json1_1CreateTrialComponentRequest
 */
const se_CreateTrialComponentRequest = (input: CreateTrialComponentRequest, context: __SerdeContext): any => {
  return take(input, {
    DisplayName: [],
    EndTime: (_) => _.getTime() / 1_000,
    InputArtifacts: _json,
    MetadataProperties: _json,
    OutputArtifacts: _json,
    Parameters: (_) => se_TrialComponentParameters(_, context),
    StartTime: (_) => _.getTime() / 1_000,
    Status: _json,
    Tags: _json,
    TrialComponentName: [],
  });
};

// se_CreateTrialRequest omitted.

// se_CreateUserProfileRequest omitted.

// se_CreateWorkforceRequest omitted.

// se_CreateWorkteamRequest omitted.

// se_CsvContentTypes omitted.

// se_CustomerMetadataKeyList omitted.

// se_CustomerMetadataMap omitted.

// se_CustomFileSystem omitted.

// se_CustomFileSystemConfig omitted.

// se_CustomFileSystemConfigs omitted.

// se_CustomFileSystems omitted.

// se_CustomImage omitted.

// se_CustomImageContainerArguments omitted.

// se_CustomImageContainerEntrypoint omitted.

// se_CustomImageContainerEnvironmentVariables omitted.

// se_CustomImages omitted.

// se_CustomPosixUserConfig omitted.

// se_DataCaptureConfig omitted.

// se_DataCatalogConfig omitted.

// se_DataProcessing omitted.

// se_DataQualityAppSpecification omitted.

// se_DataQualityBaselineConfig omitted.

/**
 * serializeAws_json1_1DataQualityJobInput
 */
const se_DataQualityJobInput = (input: DataQualityJobInput, context: __SerdeContext): any => {
  return take(input, {
    BatchTransformInput: (_) => se_BatchTransformInput(_, context),
    EndpointInput: (_) => se_EndpointInput(_, context),
  });
};

// se_DatasetDefinition omitted.

// se_DataSource omitted.

// se_DebugHookConfig omitted.

// se_DebugRuleConfiguration omitted.

// se_DebugRuleConfigurations omitted.

// se_DefaultEbsStorageSettings omitted.

// se_DefaultSpaceSettings omitted.

// se_DefaultSpaceStorageSettings omitted.

// se_DeleteActionRequest omitted.

// se_DeleteAlgorithmInput omitted.

// se_DeleteAppImageConfigRequest omitted.

// se_DeleteAppRequest omitted.

// se_DeleteArtifactRequest omitted.

// se_DeleteAssociationRequest omitted.

// se_DeleteClusterRequest omitted.

// se_DeleteCodeRepositoryInput omitted.

// se_DeleteCompilationJobRequest omitted.

// se_DeleteContextRequest omitted.

// se_DeleteDataQualityJobDefinitionRequest omitted.

// se_DeleteDeviceFleetRequest omitted.

// se_DeleteDomainRequest omitted.

// se_DeleteEdgeDeploymentPlanRequest omitted.

// se_DeleteEdgeDeploymentStageRequest omitted.

// se_DeleteEndpointConfigInput omitted.

// se_DeleteEndpointInput omitted.

// se_DeleteExperimentRequest omitted.

// se_DeleteFeatureGroupRequest omitted.

// se_DeleteFlowDefinitionRequest omitted.

// se_DeleteHubContentRequest omitted.

// se_DeleteHubRequest omitted.

// se_DeleteHumanTaskUiRequest omitted.

// se_DeleteHyperParameterTuningJobRequest omitted.

// se_DeleteImageRequest omitted.

// se_DeleteImageVersionRequest omitted.

// se_DeleteInferenceComponentInput omitted.

// se_DeleteInferenceExperimentRequest omitted.

// se_DeleteMlflowTrackingServerRequest omitted.

// se_DeleteModelBiasJobDefinitionRequest omitted.

// se_DeleteModelCardRequest omitted.

// se_DeleteModelExplainabilityJobDefinitionRequest omitted.

// se_DeleteModelInput omitted.

// se_DeleteModelPackageGroupInput omitted.

// se_DeleteModelPackageGroupPolicyInput omitted.

// se_DeleteModelPackageInput omitted.

// se_DeleteModelQualityJobDefinitionRequest omitted.

// se_DeleteMonitoringScheduleRequest omitted.

// se_DeleteNotebookInstanceInput omitted.

// se_DeleteNotebookInstanceLifecycleConfigInput omitted.

/**
 * serializeAws_json1_1DeletePipelineRequest
 */
const se_DeletePipelineRequest = (input: DeletePipelineRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    PipelineName: [],
  });
};

// se_DeleteProjectInput omitted.

// se_DeleteSpaceRequest omitted.

// se_DeleteStudioLifecycleConfigRequest omitted.

// se_DeleteTagsInput omitted.

// se_DeleteTrialComponentRequest omitted.

// se_DeleteTrialRequest omitted.

// se_DeleteUserProfileRequest omitted.

// se_DeleteWorkforceRequest omitted.

// se_DeleteWorkteamRequest omitted.

// se_DeploymentConfig omitted.

// se_DeploymentStage omitted.

// se_DeploymentStages omitted.

// se_DeregisterDevicesRequest omitted.

// se_DescribeActionRequest omitted.

// se_DescribeAlgorithmInput omitted.

// se_DescribeAppImageConfigRequest omitted.

// se_DescribeAppRequest omitted.

// se_DescribeArtifactRequest omitted.

// se_DescribeAutoMLJobRequest omitted.

// se_DescribeAutoMLJobV2Request omitted.

// se_DescribeClusterNodeRequest omitted.

// se_DescribeClusterRequest omitted.

// se_DescribeCodeRepositoryInput omitted.

// se_DescribeCompilationJobRequest omitted.

// se_DescribeContextRequest omitted.

// se_DescribeDataQualityJobDefinitionRequest omitted.

// se_DescribeDeviceFleetRequest omitted.

// se_DescribeDeviceRequest omitted.

// se_DescribeDomainRequest omitted.

// se_DescribeEdgeDeploymentPlanRequest omitted.

// se_DescribeEdgePackagingJobRequest omitted.

// se_DescribeEndpointConfigInput omitted.

// se_DescribeEndpointInput omitted.

// se_DescribeExperimentRequest omitted.

// se_DescribeFeatureGroupRequest omitted.

// se_DescribeFeatureMetadataRequest omitted.

// se_DescribeFlowDefinitionRequest omitted.

// se_DescribeHubContentRequest omitted.

// se_DescribeHubRequest omitted.

// se_DescribeHumanTaskUiRequest omitted.

// se_DescribeHyperParameterTuningJobRequest omitted.

// se_DescribeImageRequest omitted.

// se_DescribeImageVersionRequest omitted.

// se_DescribeInferenceComponentInput omitted.

// se_DescribeInferenceExperimentRequest omitted.

// se_DescribeInferenceRecommendationsJobRequest omitted.

// se_DescribeLabelingJobRequest omitted.

// se_DescribeLineageGroupRequest omitted.

// se_DescribeMlflowTrackingServerRequest omitted.

// se_DescribeModelBiasJobDefinitionRequest omitted.

// se_DescribeModelCardExportJobRequest omitted.

// se_DescribeModelCardRequest omitted.

// se_DescribeModelExplainabilityJobDefinitionRequest omitted.

// se_DescribeModelInput omitted.

// se_DescribeModelPackageGroupInput omitted.

// se_DescribeModelPackageInput omitted.

// se_DescribeModelQualityJobDefinitionRequest omitted.

// se_DescribeMonitoringScheduleRequest omitted.

// se_DescribeNotebookInstanceInput omitted.

// se_DescribeNotebookInstanceLifecycleConfigInput omitted.

// se_DescribePipelineDefinitionForExecutionRequest omitted.

// se_DescribePipelineExecutionRequest omitted.

// se_DescribePipelineRequest omitted.

// se_DescribeProcessingJobRequest omitted.

// se_DescribeProjectInput omitted.

// se_DescribeSpaceRequest omitted.

// se_DescribeStudioLifecycleConfigRequest omitted.

// se_DescribeSubscribedWorkteamRequest omitted.

// se_DescribeTrainingJobRequest omitted.

// se_DescribeTransformJobRequest omitted.

// se_DescribeTrialComponentRequest omitted.

// se_DescribeTrialRequest omitted.

// se_DescribeUserProfileRequest omitted.

// se_DescribeWorkforceRequest omitted.

// se_DescribeWorkteamRequest omitted.

/**
 * serializeAws_json1_1DesiredWeightAndCapacity
 */
const se_DesiredWeightAndCapacity = (input: DesiredWeightAndCapacity, context: __SerdeContext): any => {
  return take(input, {
    DesiredInstanceCount: [],
    DesiredWeight: __serializeFloat,
    ServerlessUpdateConfig: _json,
    VariantName: [],
  });
};

/**
 * serializeAws_json1_1DesiredWeightAndCapacityList
 */
const se_DesiredWeightAndCapacityList = (input: DesiredWeightAndCapacity[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DesiredWeightAndCapacity(entry, context);
    });
};

// se_Device omitted.

// se_DeviceNames omitted.

// se_Devices omitted.

// se_DeviceSelectionConfig omitted.

// se_DirectDeploySettings omitted.

// se_DisableSagemakerServicecatalogPortfolioInput omitted.

// se_DisassociateTrialComponentRequest omitted.

// se_DockerSettings omitted.

// se_DomainSecurityGroupIds omitted.

// se_DomainSettings omitted.

// se_DomainSettingsForUpdate omitted.

// se_DriftCheckBaselines omitted.

// se_DriftCheckBias omitted.

// se_DriftCheckExplainability omitted.

// se_DriftCheckModelDataQuality omitted.

// se_DriftCheckModelQuality omitted.

// se_EbsStorageSettings omitted.

// se_EdgeDeploymentConfig omitted.

// se_EdgeDeploymentModelConfig omitted.

// se_EdgeDeploymentModelConfigs omitted.

// se_EdgeOutputConfig omitted.

// se_EFSFileSystem omitted.

// se_EFSFileSystemConfig omitted.

// se_EnableSagemakerServicecatalogPortfolioInput omitted.

// se_EndpointInfo omitted.

/**
 * serializeAws_json1_1EndpointInput
 */
const se_EndpointInput = (input: EndpointInput, context: __SerdeContext): any => {
  return take(input, {
    EndTimeOffset: [],
    EndpointName: [],
    ExcludeFeaturesAttribute: [],
    FeaturesAttribute: [],
    InferenceAttribute: [],
    LocalPath: [],
    ProbabilityAttribute: [],
    ProbabilityThresholdAttribute: __serializeFloat,
    S3DataDistributionType: [],
    S3InputMode: [],
    StartTimeOffset: [],
  });
};

// se_EndpointInputConfiguration omitted.

// se_EndpointInputConfigurations omitted.

// se_Endpoints omitted.

// se_EnvironmentMap omitted.

// se_EnvironmentParameterRanges omitted.

// se_ExperimentConfig omitted.

// se_Explainability omitted.

// se_ExplainerConfig omitted.

// se_FeatureAdditions omitted.

// se_FeatureDefinition omitted.

// se_FeatureDefinitions omitted.

// se_FeatureParameter omitted.

// se_FeatureParameterAdditions omitted.

// se_FeatureParameterRemovals omitted.

// se_FileSource omitted.

// se_FileSystemConfig omitted.

// se_FileSystemDataSource omitted.

// se_FillingTransformationMap omitted.

// se_FillingTransformations omitted.

// se_Filter omitted.

// se_FilterList omitted.

// se_FlowDefinitionOutputConfig omitted.

// se_FlowDefinitionTaskKeywords omitted.

// se_ForecastQuantiles omitted.

// se_GenerativeAiSettings omitted.

// se_GetDeviceFleetReportRequest omitted.

// se_GetLineageGroupPolicyRequest omitted.

// se_GetModelPackageGroupPolicyInput omitted.

// se_GetSagemakerServicecatalogPortfolioStatusInput omitted.

// se_GetScalingConfigurationRecommendationRequest omitted.

// se_GetSearchSuggestionsRequest omitted.

// se_GitConfig omitted.

// se_GitConfigForUpdate omitted.

// se_GroupingAttributeNames omitted.

// se_Groups omitted.

// se_HolidayConfig omitted.

// se_HolidayConfigAttributes omitted.

// se_HookParameters omitted.

// se_HubContentSearchKeywordList omitted.

// se_HubS3StorageConfig omitted.

// se_HubSearchKeywordList omitted.

/**
 * serializeAws_json1_1HumanLoopActivationConditionsConfig
 */
const se_HumanLoopActivationConditionsConfig = (
  input: HumanLoopActivationConditionsConfig,
  context: __SerdeContext
): any => {
  return take(input, {
    HumanLoopActivationConditions: __LazyJsonString.fromObject,
  });
};

/**
 * serializeAws_json1_1HumanLoopActivationConfig
 */
const se_HumanLoopActivationConfig = (input: HumanLoopActivationConfig, context: __SerdeContext): any => {
  return take(input, {
    HumanLoopActivationConditionsConfig: (_) => se_HumanLoopActivationConditionsConfig(_, context),
  });
};

// se_HumanLoopConfig omitted.

// se_HumanLoopRequestSource omitted.

// se_HumanTaskConfig omitted.

// se_HyperbandStrategyConfig omitted.

// se_HyperParameterAlgorithmSpecification omitted.

// se_HyperParameters omitted.

// se_HyperParameterSpecification omitted.

// se_HyperParameterSpecifications omitted.

// se_HyperParameterTrainingJobDefinition omitted.

// se_HyperParameterTrainingJobDefinitions omitted.

// se_HyperParameterTrainingJobEnvironmentMap omitted.

// se_HyperParameterTuningInstanceConfig omitted.

// se_HyperParameterTuningInstanceConfigs omitted.

/**
 * serializeAws_json1_1HyperParameterTuningJobConfig
 */
const se_HyperParameterTuningJobConfig = (input: HyperParameterTuningJobConfig, context: __SerdeContext): any => {
  return take(input, {
    HyperParameterTuningJobObjective: _json,
    ParameterRanges: _json,
    RandomSeed: [],
    ResourceLimits: _json,
    Strategy: [],
    StrategyConfig: _json,
    TrainingJobEarlyStoppingType: [],
    TuningJobCompletionCriteria: (_) => se_TuningJobCompletionCriteria(_, context),
  });
};

// se_HyperParameterTuningJobObjective omitted.

// se_HyperParameterTuningJobObjectives omitted.

// se_HyperParameterTuningJobStrategyConfig omitted.

// se_HyperParameterTuningJobWarmStartConfig omitted.

// se_HyperParameterTuningResourceConfig omitted.

// se_IamPolicyConstraints omitted.

// se_IdentityProviderOAuthSetting omitted.

// se_IdentityProviderOAuthSettings omitted.

// se_ImageClassificationJobConfig omitted.

// se_ImageConfig omitted.

// se_ImageDeletePropertyList omitted.

// se_ImportHubContentRequest omitted.

/**
 * serializeAws_json1_1InferenceComponentComputeResourceRequirements
 */
const se_InferenceComponentComputeResourceRequirements = (
  input: InferenceComponentComputeResourceRequirements,
  context: __SerdeContext
): any => {
  return take(input, {
    MaxMemoryRequiredInMb: [],
    MinMemoryRequiredInMb: [],
    NumberOfAcceleratorDevicesRequired: __serializeFloat,
    NumberOfCpuCoresRequired: __serializeFloat,
  });
};

// se_InferenceComponentContainerSpecification omitted.

// se_InferenceComponentRuntimeConfig omitted.

/**
 * serializeAws_json1_1InferenceComponentSpecification
 */
const se_InferenceComponentSpecification = (input: InferenceComponentSpecification, context: __SerdeContext): any => {
  return take(input, {
    ComputeResourceRequirements: (_) => se_InferenceComponentComputeResourceRequirements(_, context),
    Container: _json,
    ModelName: [],
    StartupParameters: _json,
  });
};

// se_InferenceComponentStartupParameters omitted.

// se_InferenceExecutionConfig omitted.

// se_InferenceExperimentDataStorageConfig omitted.

/**
 * serializeAws_json1_1InferenceExperimentSchedule
 */
const se_InferenceExperimentSchedule = (input: InferenceExperimentSchedule, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => _.getTime() / 1_000,
    StartTime: (_) => _.getTime() / 1_000,
  });
};

// se_InferenceSpecification omitted.

// se_InfraCheckConfig omitted.

// se_InputConfig omitted.

// se_InputDataConfig omitted.

// se_InputModes omitted.

// se_InstanceGroup omitted.

// se_InstanceGroupNames omitted.

// se_InstanceGroups omitted.

// se_InstanceMetadataServiceConfiguration omitted.

// se_IntegerParameterRange omitted.

// se_IntegerParameterRanges omitted.

// se_IntegerParameterRangeSpecification omitted.

// se_JsonContentTypes omitted.

// se_JupyterLabAppImageConfig omitted.

// se_JupyterLabAppSettings omitted.

// se_JupyterServerAppSettings omitted.

// se_KendraSettings omitted.

// se_KernelGatewayAppSettings omitted.

// se_KernelGatewayImageConfig omitted.

// se_KernelSpec omitted.

// se_KernelSpecs omitted.

// se_LabelingJobAlgorithmsConfig omitted.

// se_LabelingJobDataAttributes omitted.

// se_LabelingJobDataSource omitted.

// se_LabelingJobInputConfig omitted.

// se_LabelingJobOutputConfig omitted.

// se_LabelingJobResourceConfig omitted.

// se_LabelingJobS3DataSource omitted.

// se_LabelingJobSnsDataSource omitted.

// se_LabelingJobStoppingConditions omitted.

// se_LifecycleConfigArns omitted.

// se_LineageEntityParameters omitted.

/**
 * serializeAws_json1_1ListActionsRequest
 */
const se_ListActionsRequest = (input: ListActionsRequest, context: __SerdeContext): any => {
  return take(input, {
    ActionType: [],
    CreatedAfter: (_) => _.getTime() / 1_000,
    CreatedBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    SourceUri: [],
  });
};

/**
 * serializeAws_json1_1ListAlgorithmsInput
 */
const se_ListAlgorithmsInput = (input: ListAlgorithmsInput, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

// se_ListAliasesRequest omitted.

/**
 * serializeAws_json1_1ListAppImageConfigsRequest
 */
const se_ListAppImageConfigsRequest = (input: ListAppImageConfigsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    ModifiedTimeAfter: (_) => _.getTime() / 1_000,
    ModifiedTimeBefore: (_) => _.getTime() / 1_000,
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

// se_ListAppsRequest omitted.

/**
 * serializeAws_json1_1ListArtifactsRequest
 */
const se_ListArtifactsRequest = (input: ListArtifactsRequest, context: __SerdeContext): any => {
  return take(input, {
    ArtifactType: [],
    CreatedAfter: (_) => _.getTime() / 1_000,
    CreatedBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    SourceUri: [],
  });
};

/**
 * serializeAws_json1_1ListAssociationsRequest
 */
const se_ListAssociationsRequest = (input: ListAssociationsRequest, context: __SerdeContext): any => {
  return take(input, {
    AssociationType: [],
    CreatedAfter: (_) => _.getTime() / 1_000,
    CreatedBefore: (_) => _.getTime() / 1_000,
    DestinationArn: [],
    DestinationType: [],
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    SourceArn: [],
    SourceType: [],
  });
};

/**
 * serializeAws_json1_1ListAutoMLJobsRequest
 */
const se_ListAutoMLJobsRequest = (input: ListAutoMLJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

// se_ListCandidatesForAutoMLJobRequest omitted.

/**
 * serializeAws_json1_1ListClusterNodesRequest
 */
const se_ListClusterNodesRequest = (input: ListClusterNodesRequest, context: __SerdeContext): any => {
  return take(input, {
    ClusterName: [],
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    InstanceGroupNameContains: [],
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListClustersRequest
 */
const se_ListClustersRequest = (input: ListClustersRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListCodeRepositoriesInput
 */
const se_ListCodeRepositoriesInput = (input: ListCodeRepositoriesInput, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListCompilationJobsRequest
 */
const se_ListCompilationJobsRequest = (input: ListCompilationJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListContextsRequest
 */
const se_ListContextsRequest = (input: ListContextsRequest, context: __SerdeContext): any => {
  return take(input, {
    ContextType: [],
    CreatedAfter: (_) => _.getTime() / 1_000,
    CreatedBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    SourceUri: [],
  });
};

/**
 * serializeAws_json1_1ListDataQualityJobDefinitionsRequest
 */
const se_ListDataQualityJobDefinitionsRequest = (
  input: ListDataQualityJobDefinitionsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    EndpointName: [],
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListDeviceFleetsRequest
 */
const se_ListDeviceFleetsRequest = (input: ListDeviceFleetsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListDevicesRequest
 */
const se_ListDevicesRequest = (input: ListDevicesRequest, context: __SerdeContext): any => {
  return take(input, {
    DeviceFleetName: [],
    LatestHeartbeatAfter: (_) => _.getTime() / 1_000,
    MaxResults: [],
    ModelName: [],
    NextToken: [],
  });
};

// se_ListDomainsRequest omitted.

/**
 * serializeAws_json1_1ListEdgeDeploymentPlansRequest
 */
const se_ListEdgeDeploymentPlansRequest = (input: ListEdgeDeploymentPlansRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    DeviceFleetNameContains: [],
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListEdgePackagingJobsRequest
 */
const se_ListEdgePackagingJobsRequest = (input: ListEdgePackagingJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    ModelNameContains: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListEndpointConfigsInput
 */
const se_ListEndpointConfigsInput = (input: ListEndpointConfigsInput, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListEndpointsInput
 */
const se_ListEndpointsInput = (input: ListEndpointsInput, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListExperimentsRequest
 */
const se_ListExperimentsRequest = (input: ListExperimentsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => _.getTime() / 1_000,
    CreatedBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListFeatureGroupsRequest
 */
const se_ListFeatureGroupsRequest = (input: ListFeatureGroupsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    FeatureGroupStatusEquals: [],
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    OfflineStoreStatusEquals: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListFlowDefinitionsRequest
 */
const se_ListFlowDefinitionsRequest = (input: ListFlowDefinitionsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NextToken: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListHubContentsRequest
 */
const se_ListHubContentsRequest = (input: ListHubContentsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    HubContentType: [],
    HubName: [],
    MaxResults: [],
    MaxSchemaVersion: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListHubContentVersionsRequest
 */
const se_ListHubContentVersionsRequest = (input: ListHubContentVersionsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    HubContentName: [],
    HubContentType: [],
    HubName: [],
    MaxResults: [],
    MaxSchemaVersion: [],
    MinVersion: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListHubsRequest
 */
const se_ListHubsRequest = (input: ListHubsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListHumanTaskUisRequest
 */
const se_ListHumanTaskUisRequest = (input: ListHumanTaskUisRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NextToken: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListHyperParameterTuningJobsRequest
 */
const se_ListHyperParameterTuningJobsRequest = (
  input: ListHyperParameterTuningJobsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListImagesRequest
 */
const se_ListImagesRequest = (input: ListImagesRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListImageVersionsRequest
 */
const se_ListImageVersionsRequest = (input: ListImageVersionsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    ImageName: [],
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListInferenceComponentsInput
 */
const se_ListInferenceComponentsInput = (input: ListInferenceComponentsInput, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    EndpointNameEquals: [],
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
    VariantNameEquals: [],
  });
};

/**
 * serializeAws_json1_1ListInferenceExperimentsRequest
 */
const se_ListInferenceExperimentsRequest = (input: ListInferenceExperimentsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
    Type: [],
  });
};

/**
 * serializeAws_json1_1ListInferenceRecommendationsJobsRequest
 */
const se_ListInferenceRecommendationsJobsRequest = (
  input: ListInferenceRecommendationsJobsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    ModelNameEquals: [],
    ModelPackageVersionArnEquals: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

// se_ListInferenceRecommendationsJobStepsRequest omitted.

/**
 * serializeAws_json1_1ListLabelingJobsForWorkteamRequest
 */
const se_ListLabelingJobsForWorkteamRequest = (
  input: ListLabelingJobsForWorkteamRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    JobReferenceCodeContains: [],
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    WorkteamArn: [],
  });
};

/**
 * serializeAws_json1_1ListLabelingJobsRequest
 */
const se_ListLabelingJobsRequest = (input: ListLabelingJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

// se_ListLineageEntityParameterKey omitted.

/**
 * serializeAws_json1_1ListLineageGroupsRequest
 */
const se_ListLineageGroupsRequest = (input: ListLineageGroupsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => _.getTime() / 1_000,
    CreatedBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListMlflowTrackingServersRequest
 */
const se_ListMlflowTrackingServersRequest = (input: ListMlflowTrackingServersRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => _.getTime() / 1_000,
    CreatedBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    MlflowVersion: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    TrackingServerStatus: [],
  });
};

/**
 * serializeAws_json1_1ListModelBiasJobDefinitionsRequest
 */
const se_ListModelBiasJobDefinitionsRequest = (
  input: ListModelBiasJobDefinitionsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    EndpointName: [],
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListModelCardExportJobsRequest
 */
const se_ListModelCardExportJobsRequest = (input: ListModelCardExportJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    ModelCardExportJobNameContains: [],
    ModelCardName: [],
    ModelCardVersion: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListModelCardsRequest
 */
const se_ListModelCardsRequest = (input: ListModelCardsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    ModelCardStatus: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListModelCardVersionsRequest
 */
const se_ListModelCardVersionsRequest = (input: ListModelCardVersionsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    ModelCardName: [],
    ModelCardStatus: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListModelExplainabilityJobDefinitionsRequest
 */
const se_ListModelExplainabilityJobDefinitionsRequest = (
  input: ListModelExplainabilityJobDefinitionsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    EndpointName: [],
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

// se_ListModelMetadataRequest omitted.

/**
 * serializeAws_json1_1ListModelPackageGroupsInput
 */
const se_ListModelPackageGroupsInput = (input: ListModelPackageGroupsInput, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    CrossAccountFilterOption: [],
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListModelPackagesInput
 */
const se_ListModelPackagesInput = (input: ListModelPackagesInput, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    ModelApprovalStatus: [],
    ModelPackageGroupName: [],
    ModelPackageType: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListModelQualityJobDefinitionsRequest
 */
const se_ListModelQualityJobDefinitionsRequest = (
  input: ListModelQualityJobDefinitionsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    EndpointName: [],
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListModelsInput
 */
const se_ListModelsInput = (input: ListModelsInput, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListMonitoringAlertHistoryRequest
 */
const se_ListMonitoringAlertHistoryRequest = (
  input: ListMonitoringAlertHistoryRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    MonitoringAlertName: [],
    MonitoringScheduleName: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

// se_ListMonitoringAlertsRequest omitted.

/**
 * serializeAws_json1_1ListMonitoringExecutionsRequest
 */
const se_ListMonitoringExecutionsRequest = (input: ListMonitoringExecutionsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    EndpointName: [],
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    MonitoringJobDefinitionName: [],
    MonitoringScheduleName: [],
    MonitoringTypeEquals: [],
    NextToken: [],
    ScheduledTimeAfter: (_) => _.getTime() / 1_000,
    ScheduledTimeBefore: (_) => _.getTime() / 1_000,
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListMonitoringSchedulesRequest
 */
const se_ListMonitoringSchedulesRequest = (input: ListMonitoringSchedulesRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    EndpointName: [],
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    MonitoringJobDefinitionName: [],
    MonitoringTypeEquals: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListNotebookInstanceLifecycleConfigsInput
 */
const se_ListNotebookInstanceLifecycleConfigsInput = (
  input: ListNotebookInstanceLifecycleConfigsInput,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListNotebookInstancesInput
 */
const se_ListNotebookInstancesInput = (input: ListNotebookInstancesInput, context: __SerdeContext): any => {
  return take(input, {
    AdditionalCodeRepositoryEquals: [],
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    DefaultCodeRepositoryContains: [],
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    NotebookInstanceLifecycleConfigNameContains: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListPipelineExecutionsRequest
 */
const se_ListPipelineExecutionsRequest = (input: ListPipelineExecutionsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => _.getTime() / 1_000,
    CreatedBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NextToken: [],
    PipelineName: [],
    SortBy: [],
    SortOrder: [],
  });
};

// se_ListPipelineExecutionStepsRequest omitted.

// se_ListPipelineParametersForExecutionRequest omitted.

/**
 * serializeAws_json1_1ListPipelinesRequest
 */
const se_ListPipelinesRequest = (input: ListPipelinesRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => _.getTime() / 1_000,
    CreatedBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NextToken: [],
    PipelineNamePrefix: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListProcessingJobsRequest
 */
const se_ListProcessingJobsRequest = (input: ListProcessingJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListProjectsInput
 */
const se_ListProjectsInput = (input: ListProjectsInput, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListResourceCatalogsRequest
 */
const se_ListResourceCatalogsRequest = (input: ListResourceCatalogsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

// se_ListSpacesRequest omitted.

// se_ListStageDevicesRequest omitted.

/**
 * serializeAws_json1_1ListStudioLifecycleConfigsRequest
 */
const se_ListStudioLifecycleConfigsRequest = (
  input: ListStudioLifecycleConfigsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AppTypeEquals: [],
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    ModifiedTimeAfter: (_) => _.getTime() / 1_000,
    ModifiedTimeBefore: (_) => _.getTime() / 1_000,
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

// se_ListSubscribedWorkteamsRequest omitted.

// se_ListTagsInput omitted.

// se_ListTrainingJobsForHyperParameterTuningJobRequest omitted.

/**
 * serializeAws_json1_1ListTrainingJobsRequest
 */
const se_ListTrainingJobsRequest = (input: ListTrainingJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
    WarmPoolStatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListTransformJobsRequest
 */
const se_ListTransformJobsRequest = (input: ListTransformJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => _.getTime() / 1_000,
    CreationTimeBefore: (_) => _.getTime() / 1_000,
    LastModifiedTimeAfter: (_) => _.getTime() / 1_000,
    LastModifiedTimeBefore: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

// se_ListTrialComponentKey256 omitted.

/**
 * serializeAws_json1_1ListTrialComponentsRequest
 */
const se_ListTrialComponentsRequest = (input: ListTrialComponentsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => _.getTime() / 1_000,
    CreatedBefore: (_) => _.getTime() / 1_000,
    ExperimentName: [],
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    SourceArn: [],
    TrialName: [],
  });
};

/**
 * serializeAws_json1_1ListTrialsRequest
 */
const se_ListTrialsRequest = (input: ListTrialsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => _.getTime() / 1_000,
    CreatedBefore: (_) => _.getTime() / 1_000,
    ExperimentName: [],
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    TrialComponentName: [],
  });
};

// se_ListUserProfilesRequest omitted.

// se_ListWorkforcesRequest omitted.

// se_ListWorkteamsRequest omitted.

// se_MemberDefinition omitted.

// se_MemberDefinitions omitted.

// se_MetadataProperties omitted.

// se_MetricDefinition omitted.

// se_MetricDefinitionList omitted.

// se_MetricsSource omitted.

// se_ModelAccessConfig omitted.

// se_ModelBiasAppSpecification omitted.

// se_ModelBiasBaselineConfig omitted.

/**
 * serializeAws_json1_1ModelBiasJobInput
 */
const se_ModelBiasJobInput = (input: ModelBiasJobInput, context: __SerdeContext): any => {
  return take(input, {
    BatchTransformInput: (_) => se_BatchTransformInput(_, context),
    EndpointInput: (_) => se_EndpointInput(_, context),
    GroundTruthS3Input: _json,
  });
};

// se_ModelCardExportOutputConfig omitted.

// se_ModelCardSecurityConfig omitted.

// se_ModelClientConfig omitted.

// se_ModelDataQuality omitted.

// se_ModelDataSource omitted.

// se_ModelDeployConfig omitted.

// se_ModelExplainabilityAppSpecification omitted.

// se_ModelExplainabilityBaselineConfig omitted.

/**
 * serializeAws_json1_1ModelExplainabilityJobInput
 */
const se_ModelExplainabilityJobInput = (input: ModelExplainabilityJobInput, context: __SerdeContext): any => {
  return take(input, {
    BatchTransformInput: (_) => se_BatchTransformInput(_, context),
    EndpointInput: (_) => se_EndpointInput(_, context),
  });
};

// se_ModelInfrastructureConfig omitted.

// se_ModelInput omitted.

// se_ModelLatencyThreshold omitted.

// se_ModelLatencyThresholds omitted.

// se_ModelMetadataFilter omitted.

// se_ModelMetadataFilters omitted.

// se_ModelMetadataSearchExpression omitted.

// se_ModelMetrics omitted.

// se_ModelPackageArnList omitted.

// se_ModelPackageContainerDefinition omitted.

// se_ModelPackageContainerDefinitionList omitted.

// se_ModelPackageModelCard omitted.

// se_ModelPackageSecurityConfig omitted.

// se_ModelPackageValidationProfile omitted.

// se_ModelPackageValidationProfiles omitted.

// se_ModelPackageValidationSpecification omitted.

// se_ModelQuality omitted.

// se_ModelQualityAppSpecification omitted.

// se_ModelQualityBaselineConfig omitted.

/**
 * serializeAws_json1_1ModelQualityJobInput
 */
const se_ModelQualityJobInput = (input: ModelQualityJobInput, context: __SerdeContext): any => {
  return take(input, {
    BatchTransformInput: (_) => se_BatchTransformInput(_, context),
    EndpointInput: (_) => se_EndpointInput(_, context),
    GroundTruthS3Input: _json,
  });
};

// se_ModelRegisterSettings omitted.

// se_ModelVariantActionMap omitted.

// se_ModelVariantConfig omitted.

// se_ModelVariantConfigList omitted.

// se_MonitoringAppSpecification omitted.

// se_MonitoringBaselineConfig omitted.

// se_MonitoringClusterConfig omitted.

// se_MonitoringConstraintsResource omitted.

// se_MonitoringContainerArguments omitted.

// se_MonitoringCsvDatasetFormat omitted.

// se_MonitoringDatasetFormat omitted.

// se_MonitoringEnvironmentMap omitted.

// se_MonitoringGroundTruthS3Input omitted.

/**
 * serializeAws_json1_1MonitoringInput
 */
const se_MonitoringInput = (input: MonitoringInput, context: __SerdeContext): any => {
  return take(input, {
    BatchTransformInput: (_) => se_BatchTransformInput(_, context),
    EndpointInput: (_) => se_EndpointInput(_, context),
  });
};

/**
 * serializeAws_json1_1MonitoringInputs
 */
const se_MonitoringInputs = (input: MonitoringInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MonitoringInput(entry, context);
    });
};

/**
 * serializeAws_json1_1MonitoringJobDefinition
 */
const se_MonitoringJobDefinition = (input: MonitoringJobDefinition, context: __SerdeContext): any => {
  return take(input, {
    BaselineConfig: _json,
    Environment: _json,
    MonitoringAppSpecification: _json,
    MonitoringInputs: (_) => se_MonitoringInputs(_, context),
    MonitoringOutputConfig: _json,
    MonitoringResources: _json,
    NetworkConfig: _json,
    RoleArn: [],
    StoppingCondition: _json,
  });
};

// se_MonitoringJsonDatasetFormat omitted.

// se_MonitoringNetworkConfig omitted.

// se_MonitoringOutput omitted.

// se_MonitoringOutputConfig omitted.

// se_MonitoringOutputs omitted.

// se_MonitoringParquetDatasetFormat omitted.

// se_MonitoringResources omitted.

// se_MonitoringS3Output omitted.

/**
 * serializeAws_json1_1MonitoringScheduleConfig
 */
const se_MonitoringScheduleConfig = (input: MonitoringScheduleConfig, context: __SerdeContext): any => {
  return take(input, {
    MonitoringJobDefinition: (_) => se_MonitoringJobDefinition(_, context),
    MonitoringJobDefinitionName: [],
    MonitoringType: [],
    ScheduleConfig: _json,
  });
};

// se_MonitoringStatisticsResource omitted.

// se_MonitoringStoppingCondition omitted.

// se_MultiModelConfig omitted.

// se_NeoVpcConfig omitted.

// se_NeoVpcSecurityGroupIds omitted.

// se_NeoVpcSubnets omitted.

// se_NestedFilters omitted.

// se_NestedFiltersList omitted.

// se_NetworkConfig omitted.

// se_NotebookInstanceAcceleratorTypes omitted.

// se_NotebookInstanceLifecycleConfigList omitted.

// se_NotebookInstanceLifecycleHook omitted.

// se_NotificationConfiguration omitted.

// se_OfflineStoreConfig omitted.

// se_OidcConfig omitted.

// se_OidcMemberDefinition omitted.

// se_OnlineStoreConfig omitted.

// se_OnlineStoreConfigUpdate omitted.

// se_OnlineStoreSecurityConfig omitted.

// se_OutputConfig omitted.

// se_OutputDataConfig omitted.

// se_OutputParameter omitted.

// se_OutputParameterList omitted.

// se_OwnershipSettings omitted.

// se_ParallelismConfiguration omitted.

// se_Parameter omitted.

// se_ParameterList omitted.

// se_ParameterRange omitted.

// se_ParameterRanges omitted.

// se_ParameterValues omitted.

// se_ParentHyperParameterTuningJob omitted.

// se_ParentHyperParameterTuningJobs omitted.

// se_Phase omitted.

// se_Phases omitted.

// se_PipelineDefinitionS3Location omitted.

// se_ProcessingClusterConfig omitted.

// se_ProcessingEnvironmentMap omitted.

// se_ProcessingFeatureStoreOutput omitted.

// se_ProcessingInput omitted.

// se_ProcessingInputs omitted.

// se_ProcessingOutput omitted.

// se_ProcessingOutputConfig omitted.

// se_ProcessingOutputs omitted.

// se_ProcessingResources omitted.

// se_ProcessingS3Input omitted.

// se_ProcessingS3Output omitted.

// se_ProcessingStoppingCondition omitted.

/**
 * serializeAws_json1_1ProductionVariant
 */
const se_ProductionVariant = (input: ProductionVariant, context: __SerdeContext): any => {
  return take(input, {
    AcceleratorType: [],
    ContainerStartupHealthCheckTimeoutInSeconds: [],
    CoreDumpConfig: _json,
    EnableSSMAccess: [],
    InferenceAmiVersion: [],
    InitialInstanceCount: [],
    InitialVariantWeight: __serializeFloat,
    InstanceType: [],
    ManagedInstanceScaling: _json,
    ModelDataDownloadTimeoutInSeconds: [],
    ModelName: [],
    RoutingConfig: _json,
    ServerlessConfig: _json,
    VariantName: [],
    VolumeSizeInGB: [],
  });
};

// se_ProductionVariantCoreDumpConfig omitted.

/**
 * serializeAws_json1_1ProductionVariantList
 */
const se_ProductionVariantList = (input: ProductionVariant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ProductionVariant(entry, context);
    });
};

// se_ProductionVariantManagedInstanceScaling omitted.

// se_ProductionVariantRoutingConfig omitted.

// se_ProductionVariantServerlessConfig omitted.

// se_ProductionVariantServerlessUpdateConfig omitted.

// se_ProfilerConfig omitted.

// se_ProfilerConfigForUpdate omitted.

// se_ProfilerRuleConfiguration omitted.

// se_ProfilerRuleConfigurations omitted.

// se_ProfilingParameters omitted.

// se_PropertyNameQuery omitted.

// se_ProvisioningParameter omitted.

// se_ProvisioningParameters omitted.

// se_PublicWorkforceTaskPrice omitted.

// se_PutModelPackageGroupPolicyInput omitted.

/**
 * serializeAws_json1_1QueryFilters
 */
const se_QueryFilters = (input: QueryFilters, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => _.getTime() / 1_000,
    CreatedBefore: (_) => _.getTime() / 1_000,
    LineageTypes: _json,
    ModifiedAfter: (_) => _.getTime() / 1_000,
    ModifiedBefore: (_) => _.getTime() / 1_000,
    Properties: _json,
    Types: _json,
  });
};

/**
 * serializeAws_json1_1QueryLineageRequest
 */
const se_QueryLineageRequest = (input: QueryLineageRequest, context: __SerdeContext): any => {
  return take(input, {
    Direction: [],
    Filters: (_) => se_QueryFilters(_, context),
    IncludeEdges: [],
    MaxDepth: [],
    MaxResults: [],
    NextToken: [],
    StartArns: _json,
  });
};

// se_QueryLineageStartArns omitted.

// se_QueryLineageTypes omitted.

// se_QueryProperties omitted.

// se_QueryTypes omitted.

// se_RealTimeInferenceConfig omitted.

// se_RealtimeInferenceInstanceTypes omitted.

// se_RecommendationJobCompiledOutputConfig omitted.

// se_RecommendationJobContainerConfig omitted.

// se_RecommendationJobInputConfig omitted.

// se_RecommendationJobOutputConfig omitted.

// se_RecommendationJobPayloadConfig omitted.

// se_RecommendationJobResourceLimit omitted.

// se_RecommendationJobStoppingConditions omitted.

// se_RecommendationJobSupportedContentTypes omitted.

// se_RecommendationJobSupportedInstanceTypes omitted.

// se_RecommendationJobSupportedResponseMIMETypes omitted.

// se_RecommendationJobVpcConfig omitted.

// se_RecommendationJobVpcSecurityGroupIds omitted.

// se_RecommendationJobVpcSubnets omitted.

// se_RedshiftDatasetDefinition omitted.

// se_RegisterDevicesRequest omitted.

// se_RemoteDebugConfig omitted.

// se_RemoteDebugConfigForUpdate omitted.

// se_RenderableTask omitted.

// se_RenderUiTemplateRequest omitted.

// se_RepositoryAuthConfig omitted.

// se_ResourceConfig omitted.

// se_ResourceConfigForUpdate omitted.

// se_ResourceLimits omitted.

// se_ResourceSpec omitted.

// se_ResponseMIMETypes omitted.

// se_RetentionPolicy omitted.

/**
 * serializeAws_json1_1RetryPipelineExecutionRequest
 */
const se_RetryPipelineExecutionRequest = (input: RetryPipelineExecutionRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ParallelismConfiguration: _json,
    PipelineExecutionArn: [],
  });
};

// se_RetryStrategy omitted.

// se_RollingUpdatePolicy omitted.

// se_RSessionAppSettings omitted.

// se_RStudioServerProAppSettings omitted.

// se_RStudioServerProDomainSettings omitted.

// se_RStudioServerProDomainSettingsForUpdate omitted.

// se_RuleParameters omitted.

// se_S3DataSource omitted.

// se_S3ModelDataSource omitted.

// se_S3Presign omitted.

// se_S3StorageConfig omitted.

// se_SageMakerImageVersionAliases omitted.

// se_ScalingPolicyObjective omitted.

// se_ScheduleConfig omitted.

/**
 * serializeAws_json1_1SearchExpression
 */
const se_SearchExpression = (input: SearchExpression, context: __SerdeContext): any => {
  return take(input, {
    Filters: _json,
    NestedFilters: _json,
    Operator: [],
    SubExpressions: (_) => se_SearchExpressionList(_, context),
  });
};

/**
 * serializeAws_json1_1SearchExpressionList
 */
const se_SearchExpressionList = (input: SearchExpression[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SearchExpression(entry, context);
    });
};

/**
 * serializeAws_json1_1SearchRequest
 */
const se_SearchRequest = (input: SearchRequest, context: __SerdeContext): any => {
  return take(input, {
    CrossAccountFilterOption: [],
    MaxResults: [],
    NextToken: [],
    Resource: [],
    SearchExpression: (_) => se_SearchExpression(_, context),
    SortBy: [],
    SortOrder: [],
    VisibilityConditions: _json,
  });
};

// se_SecurityGroupIds omitted.

// se_SelectedStep omitted.

// se_SelectedStepList omitted.

// se_SelectiveExecutionConfig omitted.

/**
 * serializeAws_json1_1SendPipelineExecutionStepFailureRequest
 */
const se_SendPipelineExecutionStepFailureRequest = (
  input: SendPipelineExecutionStepFailureRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CallbackToken: [],
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    FailureReason: [],
  });
};

/**
 * serializeAws_json1_1SendPipelineExecutionStepSuccessRequest
 */
const se_SendPipelineExecutionStepSuccessRequest = (
  input: SendPipelineExecutionStepSuccessRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CallbackToken: [],
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    OutputParameters: _json,
  });
};

// se_ServiceCatalogProvisioningDetails omitted.

// se_ServiceCatalogProvisioningUpdateDetails omitted.

// se_SessionChainingConfig omitted.

// se_ShadowModeConfig omitted.

// se_ShadowModelVariantConfig omitted.

// se_ShadowModelVariantConfigList omitted.

// se_SharingSettings omitted.

// se_ShuffleConfig omitted.

// se_SourceAlgorithm omitted.

// se_SourceAlgorithmList omitted.

// se_SourceAlgorithmSpecification omitted.

// se_SourceIpConfig omitted.

// se_SpaceCodeEditorAppSettings omitted.

// se_SpaceJupyterLabAppSettings omitted.

// se_SpaceSettings omitted.

// se_SpaceSharingSettings omitted.

// se_SpaceStorageSettings omitted.

// se_Stairs omitted.

// se_StartEdgeDeploymentStageRequest omitted.

// se_StartInferenceExperimentRequest omitted.

// se_StartMlflowTrackingServerRequest omitted.

// se_StartMonitoringScheduleRequest omitted.

// se_StartNotebookInstanceInput omitted.

/**
 * serializeAws_json1_1StartPipelineExecutionRequest
 */
const se_StartPipelineExecutionRequest = (input: StartPipelineExecutionRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ParallelismConfiguration: _json,
    PipelineExecutionDescription: [],
    PipelineExecutionDisplayName: [],
    PipelineName: [],
    PipelineParameters: _json,
    SelectiveExecutionConfig: _json,
  });
};

// se_StopAutoMLJobRequest omitted.

// se_StopCompilationJobRequest omitted.

// se_StopEdgeDeploymentStageRequest omitted.

// se_StopEdgePackagingJobRequest omitted.

// se_StopHyperParameterTuningJobRequest omitted.

// se_StopInferenceExperimentRequest omitted.

// se_StopInferenceRecommendationsJobRequest omitted.

// se_StopLabelingJobRequest omitted.

// se_StopMlflowTrackingServerRequest omitted.

// se_StopMonitoringScheduleRequest omitted.

// se_StopNotebookInstanceInput omitted.

// se_StoppingCondition omitted.

/**
 * serializeAws_json1_1StopPipelineExecutionRequest
 */
const se_StopPipelineExecutionRequest = (input: StopPipelineExecutionRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    PipelineExecutionArn: [],
  });
};

// se_StopProcessingJobRequest omitted.

// se_StopTrainingJobRequest omitted.

// se_StopTransformJobRequest omitted.

// se_Subnets omitted.

// se_SuggestionQuery omitted.

// se_TabularJobConfig omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TargetPlatform omitted.

// se_TaskKeywords omitted.

// se_TensorBoardAppSettings omitted.

// se_TensorBoardOutputConfig omitted.

// se_TextClassificationJobConfig omitted.

// se_TextGenerationHyperParameters omitted.

// se_TextGenerationJobConfig omitted.

// se_ThroughputConfig omitted.

// se_ThroughputConfigUpdate omitted.

// se_TimeSeriesConfig omitted.

// se_TimeSeriesForecastingJobConfig omitted.

// se_TimeSeriesForecastingSettings omitted.

// se_TimeSeriesTransformations omitted.

// se_TrafficPattern omitted.

// se_TrafficRoutingConfig omitted.

// se_TrainingContainerArguments omitted.

// se_TrainingContainerEntrypoint omitted.

// se_TrainingEnvironmentMap omitted.

// se_TrainingImageConfig omitted.

// se_TrainingInstanceTypes omitted.

// se_TrainingJobDefinition omitted.

// se_TrainingRepositoryAuthConfig omitted.

// se_TrainingSpecification omitted.

// se_TransformDataSource omitted.

// se_TransformEnvironmentMap omitted.

// se_TransformInput omitted.

// se_TransformInstanceTypes omitted.

// se_TransformJobDefinition omitted.

// se_TransformOutput omitted.

// se_TransformResources omitted.

// se_TransformS3DataSource omitted.

// se_TrialComponentArtifact omitted.

// se_TrialComponentArtifacts omitted.

/**
 * serializeAws_json1_1TrialComponentParameters
 */
const se_TrialComponentParameters = (
  input: Record<string, TrialComponentParameterValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_TrialComponentParameterValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1TrialComponentParameterValue
 */
const se_TrialComponentParameterValue = (input: TrialComponentParameterValue, context: __SerdeContext): any => {
  return TrialComponentParameterValue.visit(input, {
    NumberValue: (value) => ({ NumberValue: __serializeFloat(value) }),
    StringValue: (value) => ({ StringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

// se_TrialComponentStatus omitted.

// se_TtlDuration omitted.

/**
 * serializeAws_json1_1TuningJobCompletionCriteria
 */
const se_TuningJobCompletionCriteria = (input: TuningJobCompletionCriteria, context: __SerdeContext): any => {
  return take(input, {
    BestObjectiveNotImproving: _json,
    ConvergenceDetected: _json,
    TargetObjectiveMetricValue: __serializeFloat,
  });
};

// se_UiConfig omitted.

// se_UiTemplate omitted.

// se_UpdateActionRequest omitted.

// se_UpdateAppImageConfigRequest omitted.

// se_UpdateArtifactRequest omitted.

// se_UpdateClusterRequest omitted.

// se_UpdateClusterSoftwareRequest omitted.

// se_UpdateCodeRepositoryInput omitted.

// se_UpdateContextRequest omitted.

// se_UpdateDeviceFleetRequest omitted.

// se_UpdateDevicesRequest omitted.

// se_UpdateDomainRequest omitted.

// se_UpdateEndpointInput omitted.

/**
 * serializeAws_json1_1UpdateEndpointWeightsAndCapacitiesInput
 */
const se_UpdateEndpointWeightsAndCapacitiesInput = (
  input: UpdateEndpointWeightsAndCapacitiesInput,
  context: __SerdeContext
): any => {
  return take(input, {
    DesiredWeightsAndCapacities: (_) => se_DesiredWeightAndCapacityList(_, context),
    EndpointName: [],
  });
};

// se_UpdateExperimentRequest omitted.

// se_UpdateFeatureGroupRequest omitted.

// se_UpdateFeatureMetadataRequest omitted.

// se_UpdateHubRequest omitted.

// se_UpdateImageRequest omitted.

// se_UpdateImageVersionRequest omitted.

/**
 * serializeAws_json1_1UpdateInferenceComponentInput
 */
const se_UpdateInferenceComponentInput = (input: UpdateInferenceComponentInput, context: __SerdeContext): any => {
  return take(input, {
    InferenceComponentName: [],
    RuntimeConfig: _json,
    Specification: (_) => se_InferenceComponentSpecification(_, context),
  });
};

// se_UpdateInferenceComponentRuntimeConfigInput omitted.

/**
 * serializeAws_json1_1UpdateInferenceExperimentRequest
 */
const se_UpdateInferenceExperimentRequest = (input: UpdateInferenceExperimentRequest, context: __SerdeContext): any => {
  return take(input, {
    DataStorageConfig: _json,
    Description: [],
    ModelVariants: _json,
    Name: [],
    Schedule: (_) => se_InferenceExperimentSchedule(_, context),
    ShadowModeConfig: _json,
  });
};

// se_UpdateMlflowTrackingServerRequest omitted.

// se_UpdateModelCardRequest omitted.

// se_UpdateModelPackageInput omitted.

// se_UpdateMonitoringAlertRequest omitted.

/**
 * serializeAws_json1_1UpdateMonitoringScheduleRequest
 */
const se_UpdateMonitoringScheduleRequest = (input: UpdateMonitoringScheduleRequest, context: __SerdeContext): any => {
  return take(input, {
    MonitoringScheduleConfig: (_) => se_MonitoringScheduleConfig(_, context),
    MonitoringScheduleName: [],
  });
};

// se_UpdateNotebookInstanceInput omitted.

// se_UpdateNotebookInstanceLifecycleConfigInput omitted.

// se_UpdatePipelineExecutionRequest omitted.

// se_UpdatePipelineRequest omitted.

// se_UpdateProjectInput omitted.

// se_UpdateSpaceRequest omitted.

// se_UpdateTrainingJobRequest omitted.

/**
 * serializeAws_json1_1UpdateTrialComponentRequest
 */
const se_UpdateTrialComponentRequest = (input: UpdateTrialComponentRequest, context: __SerdeContext): any => {
  return take(input, {
    DisplayName: [],
    EndTime: (_) => _.getTime() / 1_000,
    InputArtifacts: _json,
    InputArtifactsToRemove: _json,
    OutputArtifacts: _json,
    OutputArtifactsToRemove: _json,
    Parameters: (_) => se_TrialComponentParameters(_, context),
    ParametersToRemove: _json,
    StartTime: (_) => _.getTime() / 1_000,
    Status: _json,
    TrialComponentName: [],
  });
};

// se_UpdateTrialRequest omitted.

// se_UpdateUserProfileRequest omitted.

// se_UpdateWorkforceRequest omitted.

// se_UpdateWorkteamRequest omitted.

// se_USD omitted.

// se_UserSettings omitted.

// se_VariantProperty omitted.

// se_VariantPropertyList omitted.

// se_VectorConfig omitted.

// se_VisibilityConditions omitted.

// se_VisibilityConditionsList omitted.

// se_VpcConfig omitted.

// se_VpcOnlyTrustedAccounts omitted.

// se_VpcSecurityGroupIds omitted.

// se_WorkerAccessConfiguration omitted.

// se_WorkforceSecurityGroupIds omitted.

// se_WorkforceSubnets omitted.

// se_WorkforceVpcConfigRequest omitted.

// se_WorkspaceSettings omitted.

/**
 * deserializeAws_json1_1ActionSource
 */
const de_ActionSource = (output: any, context: __SerdeContext): ActionSource => {
  return take(output, {
    SourceId: __expectString,
    SourceType: __expectString,
    SourceUri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ActionSummaries
 */
const de_ActionSummaries = (output: any, context: __SerdeContext): ActionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ActionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ActionSummary
 */
const de_ActionSummary = (output: any, context: __SerdeContext): ActionSummary => {
  return take(output, {
    ActionArn: __expectString,
    ActionName: __expectString,
    ActionType: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Source: (_: any) => de_ActionSource(_, context),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AddAssociationResponse
 */
const de_AddAssociationResponse = (output: any, context: __SerdeContext): AddAssociationResponse => {
  return take(output, {
    DestinationArn: __expectString,
    SourceArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AdditionalCodeRepositoryNamesOrUrls
 */
const de_AdditionalCodeRepositoryNamesOrUrls = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AdditionalInferenceSpecificationDefinition
 */
const de_AdditionalInferenceSpecificationDefinition = (
  output: any,
  context: __SerdeContext
): AdditionalInferenceSpecificationDefinition => {
  return take(output, {
    Containers: (_: any) => de_ModelPackageContainerDefinitionList(_, context),
    Description: __expectString,
    Name: __expectString,
    SupportedContentTypes: (_: any) => de_ContentTypes(_, context),
    SupportedRealtimeInferenceInstanceTypes: (_: any) => de_RealtimeInferenceInstanceTypes(_, context),
    SupportedResponseMIMETypes: (_: any) => de_ResponseMIMETypes(_, context),
    SupportedTransformInstanceTypes: (_: any) => de_TransformInstanceTypes(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AdditionalInferenceSpecifications
 */
const de_AdditionalInferenceSpecifications = (
  output: any,
  context: __SerdeContext
): AdditionalInferenceSpecificationDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AdditionalInferenceSpecificationDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AdditionalS3DataSource
 */
const de_AdditionalS3DataSource = (output: any, context: __SerdeContext): AdditionalS3DataSource => {
  return take(output, {
    CompressionType: __expectString,
    S3DataType: __expectString,
    S3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AddTagsOutput
 */
const de_AddTagsOutput = (output: any, context: __SerdeContext): AddTagsOutput => {
  return take(output, {
    Tags: (_: any) => de_TagList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AgentVersion
 */
const de_AgentVersion = (output: any, context: __SerdeContext): AgentVersion => {
  return take(output, {
    AgentCount: __expectLong,
    Version: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AgentVersions
 */
const de_AgentVersions = (output: any, context: __SerdeContext): AgentVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AgentVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AggregationTransformations
 */
const de_AggregationTransformations = (
  output: any,
  context: __SerdeContext
): Record<string, AggregationTransformationValue> => {
  return Object.entries(output).reduce(
    (acc: Record<string, AggregationTransformationValue>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as string] = __expectString(value) as any;
      return acc;
    },
    {} as Record<string, AggregationTransformationValue>
  );
};

/**
 * deserializeAws_json1_1Alarm
 */
const de_Alarm = (output: any, context: __SerdeContext): Alarm => {
  return take(output, {
    AlarmName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AlarmList
 */
const de_AlarmList = (output: any, context: __SerdeContext): Alarm[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Alarm(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AlgorithmSpecification
 */
const de_AlgorithmSpecification = (output: any, context: __SerdeContext): AlgorithmSpecification => {
  return take(output, {
    AlgorithmName: __expectString,
    ContainerArguments: (_: any) => de_TrainingContainerArguments(_, context),
    ContainerEntrypoint: (_: any) => de_TrainingContainerEntrypoint(_, context),
    EnableSageMakerMetricsTimeSeries: __expectBoolean,
    MetricDefinitions: (_: any) => de_MetricDefinitionList(_, context),
    TrainingImage: __expectString,
    TrainingImageConfig: (_: any) => de_TrainingImageConfig(_, context),
    TrainingInputMode: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AlgorithmStatusDetails
 */
const de_AlgorithmStatusDetails = (output: any, context: __SerdeContext): AlgorithmStatusDetails => {
  return take(output, {
    ImageScanStatuses: (_: any) => de_AlgorithmStatusItemList(_, context),
    ValidationStatuses: (_: any) => de_AlgorithmStatusItemList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AlgorithmStatusItem
 */
const de_AlgorithmStatusItem = (output: any, context: __SerdeContext): AlgorithmStatusItem => {
  return take(output, {
    FailureReason: __expectString,
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AlgorithmStatusItemList
 */
const de_AlgorithmStatusItemList = (output: any, context: __SerdeContext): AlgorithmStatusItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AlgorithmStatusItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AlgorithmSummary
 */
const de_AlgorithmSummary = (output: any, context: __SerdeContext): AlgorithmSummary => {
  return take(output, {
    AlgorithmArn: __expectString,
    AlgorithmDescription: __expectString,
    AlgorithmName: __expectString,
    AlgorithmStatus: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1AlgorithmSummaryList
 */
const de_AlgorithmSummaryList = (output: any, context: __SerdeContext): AlgorithmSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AlgorithmSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AlgorithmValidationProfile
 */
const de_AlgorithmValidationProfile = (output: any, context: __SerdeContext): AlgorithmValidationProfile => {
  return take(output, {
    ProfileName: __expectString,
    TrainingJobDefinition: (_: any) => de_TrainingJobDefinition(_, context),
    TransformJobDefinition: (_: any) => de_TransformJobDefinition(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AlgorithmValidationProfiles
 */
const de_AlgorithmValidationProfiles = (output: any, context: __SerdeContext): AlgorithmValidationProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AlgorithmValidationProfile(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AlgorithmValidationSpecification
 */
const de_AlgorithmValidationSpecification = (
  output: any,
  context: __SerdeContext
): AlgorithmValidationSpecification => {
  return take(output, {
    ValidationProfiles: (_: any) => de_AlgorithmValidationProfiles(_, context),
    ValidationRole: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AnnotationConsolidationConfig
 */
const de_AnnotationConsolidationConfig = (output: any, context: __SerdeContext): AnnotationConsolidationConfig => {
  return take(output, {
    AnnotationConsolidationLambdaArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AppDetails
 */
const de_AppDetails = (output: any, context: __SerdeContext): AppDetails => {
  return take(output, {
    AppName: __expectString,
    AppType: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainId: __expectString,
    ResourceSpec: (_: any) => de_ResourceSpec(_, context),
    SpaceName: __expectString,
    Status: __expectString,
    UserProfileName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AppImageConfigDetails
 */
const de_AppImageConfigDetails = (output: any, context: __SerdeContext): AppImageConfigDetails => {
  return take(output, {
    AppImageConfigArn: __expectString,
    AppImageConfigName: __expectString,
    CodeEditorAppImageConfig: (_: any) => de_CodeEditorAppImageConfig(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JupyterLabAppImageConfig: (_: any) => de_JupyterLabAppImageConfig(_, context),
    KernelGatewayImageConfig: (_: any) => de_KernelGatewayImageConfig(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1AppImageConfigList
 */
const de_AppImageConfigList = (output: any, context: __SerdeContext): AppImageConfigDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AppImageConfigDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AppList
 */
const de_AppList = (output: any, context: __SerdeContext): AppDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AppDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AppSpecification
 */
const de_AppSpecification = (output: any, context: __SerdeContext): AppSpecification => {
  return take(output, {
    ContainerArguments: (_: any) => de_ContainerArguments(_, context),
    ContainerEntrypoint: (_: any) => de_ContainerEntrypoint(_, context),
    ImageUri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ArtifactSource
 */
const de_ArtifactSource = (output: any, context: __SerdeContext): ArtifactSource => {
  return take(output, {
    SourceTypes: (_: any) => de_ArtifactSourceTypes(_, context),
    SourceUri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ArtifactSourceType
 */
const de_ArtifactSourceType = (output: any, context: __SerdeContext): ArtifactSourceType => {
  return take(output, {
    SourceIdType: __expectString,
    Value: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ArtifactSourceTypes
 */
const de_ArtifactSourceTypes = (output: any, context: __SerdeContext): ArtifactSourceType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ArtifactSourceType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ArtifactSummaries
 */
const de_ArtifactSummaries = (output: any, context: __SerdeContext): ArtifactSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ArtifactSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ArtifactSummary
 */
const de_ArtifactSummary = (output: any, context: __SerdeContext): ArtifactSummary => {
  return take(output, {
    ArtifactArn: __expectString,
    ArtifactName: __expectString,
    ArtifactType: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Source: (_: any) => de_ArtifactSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AssociateTrialComponentResponse
 */
const de_AssociateTrialComponentResponse = (output: any, context: __SerdeContext): AssociateTrialComponentResponse => {
  return take(output, {
    TrialArn: __expectString,
    TrialComponentArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AssociationSummaries
 */
const de_AssociationSummaries = (output: any, context: __SerdeContext): AssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociationSummary
 */
const de_AssociationSummary = (output: any, context: __SerdeContext): AssociationSummary => {
  return take(output, {
    AssociationType: __expectString,
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DestinationArn: __expectString,
    DestinationName: __expectString,
    DestinationType: __expectString,
    SourceArn: __expectString,
    SourceName: __expectString,
    SourceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AsyncInferenceClientConfig
 */
const de_AsyncInferenceClientConfig = (output: any, context: __SerdeContext): AsyncInferenceClientConfig => {
  return take(output, {
    MaxConcurrentInvocationsPerInstance: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1AsyncInferenceConfig
 */
const de_AsyncInferenceConfig = (output: any, context: __SerdeContext): AsyncInferenceConfig => {
  return take(output, {
    ClientConfig: (_: any) => de_AsyncInferenceClientConfig(_, context),
    OutputConfig: (_: any) => de_AsyncInferenceOutputConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AsyncInferenceNotificationConfig
 */
const de_AsyncInferenceNotificationConfig = (
  output: any,
  context: __SerdeContext
): AsyncInferenceNotificationConfig => {
  return take(output, {
    ErrorTopic: __expectString,
    IncludeInferenceResponseIn: (_: any) => de_AsyncNotificationTopicTypeList(_, context),
    SuccessTopic: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AsyncInferenceOutputConfig
 */
const de_AsyncInferenceOutputConfig = (output: any, context: __SerdeContext): AsyncInferenceOutputConfig => {
  return take(output, {
    KmsKeyId: __expectString,
    NotificationConfig: (_: any) => de_AsyncInferenceNotificationConfig(_, context),
    S3FailurePath: __expectString,
    S3OutputPath: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AsyncNotificationTopicTypeList
 */
const de_AsyncNotificationTopicTypeList = (output: any, context: __SerdeContext): AsyncNotificationTopicTypes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AthenaDatasetDefinition
 */
const de_AthenaDatasetDefinition = (output: any, context: __SerdeContext): AthenaDatasetDefinition => {
  return take(output, {
    Catalog: __expectString,
    Database: __expectString,
    KmsKeyId: __expectString,
    OutputCompression: __expectString,
    OutputFormat: __expectString,
    OutputS3Uri: __expectString,
    QueryString: __expectString,
    WorkGroup: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AttributeNames
 */
const de_AttributeNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AuthenticationRequestExtraParams
 */
const de_AuthenticationRequestExtraParams = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_json1_1AutoMLAlgorithmConfig
 */
const de_AutoMLAlgorithmConfig = (output: any, context: __SerdeContext): AutoMLAlgorithmConfig => {
  return take(output, {
    AutoMLAlgorithms: (_: any) => de_AutoMLAlgorithms(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLAlgorithms
 */
const de_AutoMLAlgorithms = (output: any, context: __SerdeContext): AutoMLAlgorithm[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutoMLAlgorithmsConfig
 */
const de_AutoMLAlgorithmsConfig = (output: any, context: __SerdeContext): AutoMLAlgorithmConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoMLAlgorithmConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutoMLCandidate
 */
const de_AutoMLCandidate = (output: any, context: __SerdeContext): AutoMLCandidate => {
  return take(output, {
    CandidateName: __expectString,
    CandidateProperties: (_: any) => de_CandidateProperties(_, context),
    CandidateStatus: __expectString,
    CandidateSteps: (_: any) => de_CandidateSteps(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    FinalAutoMLJobObjectiveMetric: (_: any) => de_FinalAutoMLJobObjectiveMetric(_, context),
    InferenceContainerDefinitions: (_: any) => de_AutoMLInferenceContainerDefinitions(_, context),
    InferenceContainers: (_: any) => de_AutoMLContainerDefinitions(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ObjectiveStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLCandidateGenerationConfig
 */
const de_AutoMLCandidateGenerationConfig = (output: any, context: __SerdeContext): AutoMLCandidateGenerationConfig => {
  return take(output, {
    AlgorithmsConfig: (_: any) => de_AutoMLAlgorithmsConfig(_, context),
    FeatureSpecificationS3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLCandidates
 */
const de_AutoMLCandidates = (output: any, context: __SerdeContext): AutoMLCandidate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoMLCandidate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutoMLCandidateStep
 */
const de_AutoMLCandidateStep = (output: any, context: __SerdeContext): AutoMLCandidateStep => {
  return take(output, {
    CandidateStepArn: __expectString,
    CandidateStepName: __expectString,
    CandidateStepType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLChannel
 */
const de_AutoMLChannel = (output: any, context: __SerdeContext): AutoMLChannel => {
  return take(output, {
    ChannelType: __expectString,
    CompressionType: __expectString,
    ContentType: __expectString,
    DataSource: (_: any) => de_AutoMLDataSource(_, context),
    SampleWeightAttributeName: __expectString,
    TargetAttributeName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLContainerDefinition
 */
const de_AutoMLContainerDefinition = (output: any, context: __SerdeContext): AutoMLContainerDefinition => {
  return take(output, {
    Environment: (_: any) => de_EnvironmentMap(_, context),
    Image: __expectString,
    ModelDataUrl: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLContainerDefinitions
 */
const de_AutoMLContainerDefinitions = (output: any, context: __SerdeContext): AutoMLContainerDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoMLContainerDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutoMLDataSource
 */
const de_AutoMLDataSource = (output: any, context: __SerdeContext): AutoMLDataSource => {
  return take(output, {
    S3DataSource: (_: any) => de_AutoMLS3DataSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLDataSplitConfig
 */
const de_AutoMLDataSplitConfig = (output: any, context: __SerdeContext): AutoMLDataSplitConfig => {
  return take(output, {
    ValidationFraction: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLInferenceContainerDefinitions
 */
const de_AutoMLInferenceContainerDefinitions = (
  output: any,
  context: __SerdeContext
): Partial<Record<AutoMLProcessingUnit, AutoMLContainerDefinition[]>> => {
  return Object.entries(output).reduce(
    (acc: Partial<Record<AutoMLProcessingUnit, AutoMLContainerDefinition[]>>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as AutoMLProcessingUnit] = de_AutoMLContainerDefinitions(value, context);
      return acc;
    },
    {} as Partial<Record<AutoMLProcessingUnit, AutoMLContainerDefinition[]>>
  );
};

/**
 * deserializeAws_json1_1AutoMLInputDataConfig
 */
const de_AutoMLInputDataConfig = (output: any, context: __SerdeContext): AutoMLChannel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoMLChannel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutoMLJobArtifacts
 */
const de_AutoMLJobArtifacts = (output: any, context: __SerdeContext): AutoMLJobArtifacts => {
  return take(output, {
    CandidateDefinitionNotebookLocation: __expectString,
    DataExplorationNotebookLocation: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLJobChannel
 */
const de_AutoMLJobChannel = (output: any, context: __SerdeContext): AutoMLJobChannel => {
  return take(output, {
    ChannelType: __expectString,
    CompressionType: __expectString,
    ContentType: __expectString,
    DataSource: (_: any) => de_AutoMLDataSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLJobCompletionCriteria
 */
const de_AutoMLJobCompletionCriteria = (output: any, context: __SerdeContext): AutoMLJobCompletionCriteria => {
  return take(output, {
    MaxAutoMLJobRuntimeInSeconds: __expectInt32,
    MaxCandidates: __expectInt32,
    MaxRuntimePerTrainingJobInSeconds: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLJobConfig
 */
const de_AutoMLJobConfig = (output: any, context: __SerdeContext): AutoMLJobConfig => {
  return take(output, {
    CandidateGenerationConfig: (_: any) => de_AutoMLCandidateGenerationConfig(_, context),
    CompletionCriteria: (_: any) => de_AutoMLJobCompletionCriteria(_, context),
    DataSplitConfig: (_: any) => de_AutoMLDataSplitConfig(_, context),
    Mode: __expectString,
    SecurityConfig: (_: any) => de_AutoMLSecurityConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLJobInputDataConfig
 */
const de_AutoMLJobInputDataConfig = (output: any, context: __SerdeContext): AutoMLJobChannel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoMLJobChannel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutoMLJobObjective
 */
const de_AutoMLJobObjective = (output: any, context: __SerdeContext): AutoMLJobObjective => {
  return take(output, {
    MetricName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLJobStepMetadata
 */
const de_AutoMLJobStepMetadata = (output: any, context: __SerdeContext): AutoMLJobStepMetadata => {
  return take(output, {
    Arn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLJobSummaries
 */
const de_AutoMLJobSummaries = (output: any, context: __SerdeContext): AutoMLJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoMLJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutoMLJobSummary
 */
const de_AutoMLJobSummary = (output: any, context: __SerdeContext): AutoMLJobSummary => {
  return take(output, {
    AutoMLJobArn: __expectString,
    AutoMLJobName: __expectString,
    AutoMLJobSecondaryStatus: __expectString,
    AutoMLJobStatus: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PartialFailureReasons: (_: any) => de_AutoMLPartialFailureReasons(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLOutputDataConfig
 */
const de_AutoMLOutputDataConfig = (output: any, context: __SerdeContext): AutoMLOutputDataConfig => {
  return take(output, {
    KmsKeyId: __expectString,
    S3OutputPath: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLPartialFailureReason
 */
const de_AutoMLPartialFailureReason = (output: any, context: __SerdeContext): AutoMLPartialFailureReason => {
  return take(output, {
    PartialFailureMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLPartialFailureReasons
 */
const de_AutoMLPartialFailureReasons = (output: any, context: __SerdeContext): AutoMLPartialFailureReason[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoMLPartialFailureReason(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutoMLProblemTypeConfig
 */
const de_AutoMLProblemTypeConfig = (output: any, context: __SerdeContext): AutoMLProblemTypeConfig => {
  if (output.ImageClassificationJobConfig != null) {
    return {
      ImageClassificationJobConfig: de_ImageClassificationJobConfig(output.ImageClassificationJobConfig, context),
    };
  }
  if (output.TabularJobConfig != null) {
    return {
      TabularJobConfig: de_TabularJobConfig(output.TabularJobConfig, context),
    };
  }
  if (output.TextClassificationJobConfig != null) {
    return {
      TextClassificationJobConfig: de_TextClassificationJobConfig(output.TextClassificationJobConfig, context),
    };
  }
  if (output.TextGenerationJobConfig != null) {
    return {
      TextGenerationJobConfig: de_TextGenerationJobConfig(output.TextGenerationJobConfig, context),
    };
  }
  if (output.TimeSeriesForecastingJobConfig != null) {
    return {
      TimeSeriesForecastingJobConfig: de_TimeSeriesForecastingJobConfig(output.TimeSeriesForecastingJobConfig, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_1AutoMLProblemTypeResolvedAttributes
 */
const de_AutoMLProblemTypeResolvedAttributes = (
  output: any,
  context: __SerdeContext
): AutoMLProblemTypeResolvedAttributes => {
  if (output.TabularResolvedAttributes != null) {
    return {
      TabularResolvedAttributes: de_TabularResolvedAttributes(output.TabularResolvedAttributes, context),
    };
  }
  if (output.TextGenerationResolvedAttributes != null) {
    return {
      TextGenerationResolvedAttributes: de_TextGenerationResolvedAttributes(
        output.TextGenerationResolvedAttributes,
        context
      ),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_1AutoMLResolvedAttributes
 */
const de_AutoMLResolvedAttributes = (output: any, context: __SerdeContext): AutoMLResolvedAttributes => {
  return take(output, {
    AutoMLJobObjective: (_: any) => de_AutoMLJobObjective(_, context),
    AutoMLProblemTypeResolvedAttributes: (_: any) => de_AutoMLProblemTypeResolvedAttributes(__expectUnion(_), context),
    CompletionCriteria: (_: any) => de_AutoMLJobCompletionCriteria(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLS3DataSource
 */
const de_AutoMLS3DataSource = (output: any, context: __SerdeContext): AutoMLS3DataSource => {
  return take(output, {
    S3DataType: __expectString,
    S3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AutoMLSecurityConfig
 */
const de_AutoMLSecurityConfig = (output: any, context: __SerdeContext): AutoMLSecurityConfig => {
  return take(output, {
    EnableInterContainerTrafficEncryption: __expectBoolean,
    VolumeKmsKeyId: __expectString,
    VpcConfig: (_: any) => de_VpcConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AutoParameter
 */
const de_AutoParameter = (output: any, context: __SerdeContext): AutoParameter => {
  return take(output, {
    Name: __expectString,
    ValueHint: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AutoParameters
 */
const de_AutoParameters = (output: any, context: __SerdeContext): AutoParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutoRollbackConfig
 */
const de_AutoRollbackConfig = (output: any, context: __SerdeContext): AutoRollbackConfig => {
  return take(output, {
    Alarms: (_: any) => de_AlarmList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Autotune
 */
const de_Autotune = (output: any, context: __SerdeContext): Autotune => {
  return take(output, {
    Mode: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchDataCaptureConfig
 */
const de_BatchDataCaptureConfig = (output: any, context: __SerdeContext): BatchDataCaptureConfig => {
  return take(output, {
    DestinationS3Uri: __expectString,
    GenerateInferenceId: __expectBoolean,
    KmsKeyId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchDescribeModelPackageError
 */
const de_BatchDescribeModelPackageError = (output: any, context: __SerdeContext): BatchDescribeModelPackageError => {
  return take(output, {
    ErrorCode: __expectString,
    ErrorResponse: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchDescribeModelPackageErrorMap
 */
const de_BatchDescribeModelPackageErrorMap = (
  output: any,
  context: __SerdeContext
): Record<string, BatchDescribeModelPackageError> => {
  return Object.entries(output).reduce(
    (acc: Record<string, BatchDescribeModelPackageError>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as string] = de_BatchDescribeModelPackageError(value, context);
      return acc;
    },
    {} as Record<string, BatchDescribeModelPackageError>
  );
};

/**
 * deserializeAws_json1_1BatchDescribeModelPackageOutput
 */
const de_BatchDescribeModelPackageOutput = (output: any, context: __SerdeContext): BatchDescribeModelPackageOutput => {
  return take(output, {
    BatchDescribeModelPackageErrorMap: (_: any) => de_BatchDescribeModelPackageErrorMap(_, context),
    ModelPackageSummaries: (_: any) => de_ModelPackageSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BatchDescribeModelPackageSummary
 */
const de_BatchDescribeModelPackageSummary = (
  output: any,
  context: __SerdeContext
): BatchDescribeModelPackageSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InferenceSpecification: (_: any) => de_InferenceSpecification(_, context),
    ModelApprovalStatus: __expectString,
    ModelPackageArn: __expectString,
    ModelPackageDescription: __expectString,
    ModelPackageGroupName: __expectString,
    ModelPackageStatus: __expectString,
    ModelPackageVersion: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchTransformInput
 */
const de_BatchTransformInput = (output: any, context: __SerdeContext): BatchTransformInput => {
  return take(output, {
    DataCapturedDestinationS3Uri: __expectString,
    DatasetFormat: (_: any) => de_MonitoringDatasetFormat(_, context),
    EndTimeOffset: __expectString,
    ExcludeFeaturesAttribute: __expectString,
    FeaturesAttribute: __expectString,
    InferenceAttribute: __expectString,
    LocalPath: __expectString,
    ProbabilityAttribute: __expectString,
    ProbabilityThresholdAttribute: __limitedParseDouble,
    S3DataDistributionType: __expectString,
    S3InputMode: __expectString,
    StartTimeOffset: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1BestObjectiveNotImproving
 */
const de_BestObjectiveNotImproving = (output: any, context: __SerdeContext): BestObjectiveNotImproving => {
  return take(output, {
    MaxNumberOfTrainingJobsNotImproving: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1Bias
 */
const de_Bias = (output: any, context: __SerdeContext): Bias => {
  return take(output, {
    PostTrainingReport: (_: any) => de_MetricsSource(_, context),
    PreTrainingReport: (_: any) => de_MetricsSource(_, context),
    Report: (_: any) => de_MetricsSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BlueGreenUpdatePolicy
 */
const de_BlueGreenUpdatePolicy = (output: any, context: __SerdeContext): BlueGreenUpdatePolicy => {
  return take(output, {
    MaximumExecutionTimeoutInSeconds: __expectInt32,
    TerminationWaitInSeconds: __expectInt32,
    TrafficRoutingConfiguration: (_: any) => de_TrafficRoutingConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CacheHitResult
 */
const de_CacheHitResult = (output: any, context: __SerdeContext): CacheHitResult => {
  return take(output, {
    SourcePipelineExecutionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CallbackStepMetadata
 */
const de_CallbackStepMetadata = (output: any, context: __SerdeContext): CallbackStepMetadata => {
  return take(output, {
    CallbackToken: __expectString,
    OutputParameters: (_: any) => de_OutputParameterList(_, context),
    SqsQueueUrl: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CandidateArtifactLocations
 */
const de_CandidateArtifactLocations = (output: any, context: __SerdeContext): CandidateArtifactLocations => {
  return take(output, {
    BacktestResults: __expectString,
    Explainability: __expectString,
    ModelInsights: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CandidateGenerationConfig
 */
const de_CandidateGenerationConfig = (output: any, context: __SerdeContext): CandidateGenerationConfig => {
  return take(output, {
    AlgorithmsConfig: (_: any) => de_AutoMLAlgorithmsConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CandidateProperties
 */
const de_CandidateProperties = (output: any, context: __SerdeContext): CandidateProperties => {
  return take(output, {
    CandidateArtifactLocations: (_: any) => de_CandidateArtifactLocations(_, context),
    CandidateMetrics: (_: any) => de_MetricDataList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CandidateSteps
 */
const de_CandidateSteps = (output: any, context: __SerdeContext): AutoMLCandidateStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoMLCandidateStep(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CanvasAppSettings
 */
const de_CanvasAppSettings = (output: any, context: __SerdeContext): CanvasAppSettings => {
  return take(output, {
    DirectDeploySettings: (_: any) => de_DirectDeploySettings(_, context),
    GenerativeAiSettings: (_: any) => de_GenerativeAiSettings(_, context),
    IdentityProviderOAuthSettings: (_: any) => de_IdentityProviderOAuthSettings(_, context),
    KendraSettings: (_: any) => de_KendraSettings(_, context),
    ModelRegisterSettings: (_: any) => de_ModelRegisterSettings(_, context),
    TimeSeriesForecastingSettings: (_: any) => de_TimeSeriesForecastingSettings(_, context),
    WorkspaceSettings: (_: any) => de_WorkspaceSettings(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CapacitySize
 */
const de_CapacitySize = (output: any, context: __SerdeContext): CapacitySize => {
  return take(output, {
    Type: __expectString,
    Value: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1CaptureContentTypeHeader
 */
const de_CaptureContentTypeHeader = (output: any, context: __SerdeContext): CaptureContentTypeHeader => {
  return take(output, {
    CsvContentTypes: (_: any) => de_CsvContentTypes(_, context),
    JsonContentTypes: (_: any) => de_JsonContentTypes(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CaptureOption
 */
const de_CaptureOption = (output: any, context: __SerdeContext): CaptureOption => {
  return take(output, {
    CaptureMode: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CaptureOptionList
 */
const de_CaptureOptionList = (output: any, context: __SerdeContext): CaptureOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CaptureOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CategoricalParameter
 */
const de_CategoricalParameter = (output: any, context: __SerdeContext): CategoricalParameter => {
  return take(output, {
    Name: __expectString,
    Value: (_: any) => de_CategoricalParameterRangeValues(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CategoricalParameterRange
 */
const de_CategoricalParameterRange = (output: any, context: __SerdeContext): CategoricalParameterRange => {
  return take(output, {
    Name: __expectString,
    Values: (_: any) => de_ParameterValues(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CategoricalParameterRanges
 */
const de_CategoricalParameterRanges = (output: any, context: __SerdeContext): CategoricalParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CategoricalParameterRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CategoricalParameterRangeSpecification
 */
const de_CategoricalParameterRangeSpecification = (
  output: any,
  context: __SerdeContext
): CategoricalParameterRangeSpecification => {
  return take(output, {
    Values: (_: any) => de_ParameterValues(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CategoricalParameterRangeValues
 */
const de_CategoricalParameterRangeValues = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CategoricalParameters
 */
const de_CategoricalParameters = (output: any, context: __SerdeContext): CategoricalParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CategoricalParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Channel
 */
const de_Channel = (output: any, context: __SerdeContext): Channel => {
  return take(output, {
    ChannelName: __expectString,
    CompressionType: __expectString,
    ContentType: __expectString,
    DataSource: (_: any) => de_DataSource(_, context),
    InputMode: __expectString,
    RecordWrapperType: __expectString,
    ShuffleConfig: (_: any) => de_ShuffleConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ChannelSpecification
 */
const de_ChannelSpecification = (output: any, context: __SerdeContext): ChannelSpecification => {
  return take(output, {
    Description: __expectString,
    IsRequired: __expectBoolean,
    Name: __expectString,
    SupportedCompressionTypes: (_: any) => de_CompressionTypes(_, context),
    SupportedContentTypes: (_: any) => de_ContentTypes(_, context),
    SupportedInputModes: (_: any) => de_InputModes(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ChannelSpecifications
 */
const de_ChannelSpecifications = (output: any, context: __SerdeContext): ChannelSpecification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ChannelSpecification(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CheckpointConfig
 */
const de_CheckpointConfig = (output: any, context: __SerdeContext): CheckpointConfig => {
  return take(output, {
    LocalPath: __expectString,
    S3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Cidrs
 */
const de_Cidrs = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClarifyCheckStepMetadata
 */
const de_ClarifyCheckStepMetadata = (output: any, context: __SerdeContext): ClarifyCheckStepMetadata => {
  return take(output, {
    BaselineUsedForDriftCheckConstraints: __expectString,
    CalculatedBaselineConstraints: __expectString,
    CheckJobArn: __expectString,
    CheckType: __expectString,
    ModelPackageGroupName: __expectString,
    RegisterNewBaseline: __expectBoolean,
    SkipCheck: __expectBoolean,
    ViolationReport: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ClarifyExplainerConfig
 */
const de_ClarifyExplainerConfig = (output: any, context: __SerdeContext): ClarifyExplainerConfig => {
  return take(output, {
    EnableExplanations: __expectString,
    InferenceConfig: (_: any) => de_ClarifyInferenceConfig(_, context),
    ShapConfig: (_: any) => de_ClarifyShapConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ClarifyFeatureHeaders
 */
const de_ClarifyFeatureHeaders = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClarifyFeatureTypes
 */
const de_ClarifyFeatureTypes = (output: any, context: __SerdeContext): ClarifyFeatureType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClarifyInferenceConfig
 */
const de_ClarifyInferenceConfig = (output: any, context: __SerdeContext): ClarifyInferenceConfig => {
  return take(output, {
    ContentTemplate: __expectString,
    FeatureHeaders: (_: any) => de_ClarifyFeatureHeaders(_, context),
    FeatureTypes: (_: any) => de_ClarifyFeatureTypes(_, context),
    FeaturesAttribute: __expectString,
    LabelAttribute: __expectString,
    LabelHeaders: (_: any) => de_ClarifyLabelHeaders(_, context),
    LabelIndex: __expectInt32,
    MaxPayloadInMB: __expectInt32,
    MaxRecordCount: __expectInt32,
    ProbabilityAttribute: __expectString,
    ProbabilityIndex: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ClarifyLabelHeaders
 */
const de_ClarifyLabelHeaders = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClarifyShapBaselineConfig
 */
const de_ClarifyShapBaselineConfig = (output: any, context: __SerdeContext): ClarifyShapBaselineConfig => {
  return take(output, {
    MimeType: __expectString,
    ShapBaseline: __expectString,
    ShapBaselineUri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ClarifyShapConfig
 */
const de_ClarifyShapConfig = (output: any, context: __SerdeContext): ClarifyShapConfig => {
  return take(output, {
    NumberOfSamples: __expectInt32,
    Seed: __expectInt32,
    ShapBaselineConfig: (_: any) => de_ClarifyShapBaselineConfig(_, context),
    TextConfig: (_: any) => de_ClarifyTextConfig(_, context),
    UseLogit: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1ClarifyTextConfig
 */
const de_ClarifyTextConfig = (output: any, context: __SerdeContext): ClarifyTextConfig => {
  return take(output, {
    Granularity: __expectString,
    Language: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ClusterEbsVolumeConfig
 */
const de_ClusterEbsVolumeConfig = (output: any, context: __SerdeContext): ClusterEbsVolumeConfig => {
  return take(output, {
    VolumeSizeInGB: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ClusterInstanceGroupDetails
 */
const de_ClusterInstanceGroupDetails = (output: any, context: __SerdeContext): ClusterInstanceGroupDetails => {
  return take(output, {
    CurrentCount: __expectInt32,
    ExecutionRole: __expectString,
    InstanceGroupName: __expectString,
    InstanceStorageConfigs: (_: any) => de_ClusterInstanceStorageConfigs(_, context),
    InstanceType: __expectString,
    LifeCycleConfig: (_: any) => de_ClusterLifeCycleConfig(_, context),
    TargetCount: __expectInt32,
    ThreadsPerCore: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ClusterInstanceGroupDetailsList
 */
const de_ClusterInstanceGroupDetailsList = (output: any, context: __SerdeContext): ClusterInstanceGroupDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterInstanceGroupDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClusterInstancePlacement
 */
const de_ClusterInstancePlacement = (output: any, context: __SerdeContext): ClusterInstancePlacement => {
  return take(output, {
    AvailabilityZone: __expectString,
    AvailabilityZoneId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ClusterInstanceStatusDetails
 */
const de_ClusterInstanceStatusDetails = (output: any, context: __SerdeContext): ClusterInstanceStatusDetails => {
  return take(output, {
    Message: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ClusterInstanceStorageConfig
 */
const de_ClusterInstanceStorageConfig = (output: any, context: __SerdeContext): ClusterInstanceStorageConfig => {
  if (output.EbsVolumeConfig != null) {
    return {
      EbsVolumeConfig: de_ClusterEbsVolumeConfig(output.EbsVolumeConfig, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_1ClusterInstanceStorageConfigs
 */
const de_ClusterInstanceStorageConfigs = (output: any, context: __SerdeContext): ClusterInstanceStorageConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterInstanceStorageConfig(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClusterLifeCycleConfig
 */
const de_ClusterLifeCycleConfig = (output: any, context: __SerdeContext): ClusterLifeCycleConfig => {
  return take(output, {
    OnCreate: __expectString,
    SourceS3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ClusterNodeDetails
 */
const de_ClusterNodeDetails = (output: any, context: __SerdeContext): ClusterNodeDetails => {
  return take(output, {
    InstanceGroupName: __expectString,
    InstanceId: __expectString,
    InstanceStatus: (_: any) => de_ClusterInstanceStatusDetails(_, context),
    InstanceStorageConfigs: (_: any) => de_ClusterInstanceStorageConfigs(_, context),
    InstanceType: __expectString,
    LaunchTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LifeCycleConfig: (_: any) => de_ClusterLifeCycleConfig(_, context),
    Placement: (_: any) => de_ClusterInstancePlacement(_, context),
    PrivateDnsHostname: __expectString,
    PrivatePrimaryIp: __expectString,
    ThreadsPerCore: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ClusterNodeSummaries
 */
const de_ClusterNodeSummaries = (output: any, context: __SerdeContext): ClusterNodeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterNodeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClusterNodeSummary
 */
const de_ClusterNodeSummary = (output: any, context: __SerdeContext): ClusterNodeSummary => {
  return take(output, {
    InstanceGroupName: __expectString,
    InstanceId: __expectString,
    InstanceStatus: (_: any) => de_ClusterInstanceStatusDetails(_, context),
    InstanceType: __expectString,
    LaunchTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ClusterSummaries
 */
const de_ClusterSummaries = (output: any, context: __SerdeContext): ClusterSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClusterSummary
 */
const de_ClusterSummary = (output: any, context: __SerdeContext): ClusterSummary => {
  return take(output, {
    ClusterArn: __expectString,
    ClusterName: __expectString,
    ClusterStatus: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1CodeEditorAppImageConfig
 */
const de_CodeEditorAppImageConfig = (output: any, context: __SerdeContext): CodeEditorAppImageConfig => {
  return take(output, {
    ContainerConfig: (_: any) => de_ContainerConfig(_, context),
    FileSystemConfig: (_: any) => de_FileSystemConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CodeEditorAppSettings
 */
const de_CodeEditorAppSettings = (output: any, context: __SerdeContext): CodeEditorAppSettings => {
  return take(output, {
    CustomImages: (_: any) => de_CustomImages(_, context),
    DefaultResourceSpec: (_: any) => de_ResourceSpec(_, context),
    LifecycleConfigArns: (_: any) => de_LifecycleConfigArns(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CodeRepositories
 */
const de_CodeRepositories = (output: any, context: __SerdeContext): CodeRepository[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CodeRepository(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CodeRepository
 */
const de_CodeRepository = (output: any, context: __SerdeContext): CodeRepository => {
  return take(output, {
    RepositoryUrl: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CodeRepositorySummary
 */
const de_CodeRepositorySummary = (output: any, context: __SerdeContext): CodeRepositorySummary => {
  return take(output, {
    CodeRepositoryArn: __expectString,
    CodeRepositoryName: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    GitConfig: (_: any) => de_GitConfig(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1CodeRepositorySummaryList
 */
const de_CodeRepositorySummaryList = (output: any, context: __SerdeContext): CodeRepositorySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CodeRepositorySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CognitoConfig
 */
const de_CognitoConfig = (output: any, context: __SerdeContext): CognitoConfig => {
  return take(output, {
    ClientId: __expectString,
    UserPool: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CognitoMemberDefinition
 */
const de_CognitoMemberDefinition = (output: any, context: __SerdeContext): CognitoMemberDefinition => {
  return take(output, {
    ClientId: __expectString,
    UserGroup: __expectString,
    UserPool: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CollectionConfig
 */
const de_CollectionConfig = (output: any, context: __SerdeContext): CollectionConfig => {
  if (output.VectorConfig != null) {
    return {
      VectorConfig: de_VectorConfig(output.VectorConfig, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_1CollectionConfiguration
 */
const de_CollectionConfiguration = (output: any, context: __SerdeContext): CollectionConfiguration => {
  return take(output, {
    CollectionName: __expectString,
    CollectionParameters: (_: any) => de_CollectionParameters(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CollectionConfigurations
 */
const de_CollectionConfigurations = (output: any, context: __SerdeContext): CollectionConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CollectionConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CollectionParameters
 */
const de_CollectionParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_json1_1CompilationJobSummaries
 */
const de_CompilationJobSummaries = (output: any, context: __SerdeContext): CompilationJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CompilationJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CompilationJobSummary
 */
const de_CompilationJobSummary = (output: any, context: __SerdeContext): CompilationJobSummary => {
  return take(output, {
    CompilationEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CompilationJobArn: __expectString,
    CompilationJobName: __expectString,
    CompilationJobStatus: __expectString,
    CompilationStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CompilationTargetDevice: __expectString,
    CompilationTargetPlatformAccelerator: __expectString,
    CompilationTargetPlatformArch: __expectString,
    CompilationTargetPlatformOs: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1CompressionTypes
 */
const de_CompressionTypes = (output: any, context: __SerdeContext): CompressionType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConditionStepMetadata
 */
const de_ConditionStepMetadata = (output: any, context: __SerdeContext): ConditionStepMetadata => {
  return take(output, {
    Outcome: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ContainerArguments
 */
const de_ContainerArguments = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContainerConfig
 */
const de_ContainerConfig = (output: any, context: __SerdeContext): ContainerConfig => {
  return take(output, {
    ContainerArguments: (_: any) => de_CustomImageContainerArguments(_, context),
    ContainerEntrypoint: (_: any) => de_CustomImageContainerEntrypoint(_, context),
    ContainerEnvironmentVariables: (_: any) => de_CustomImageContainerEnvironmentVariables(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ContainerDefinition
 */
const de_ContainerDefinition = (output: any, context: __SerdeContext): ContainerDefinition => {
  return take(output, {
    ContainerHostname: __expectString,
    Environment: (_: any) => de_EnvironmentMap(_, context),
    Image: __expectString,
    ImageConfig: (_: any) => de_ImageConfig(_, context),
    InferenceSpecificationName: __expectString,
    Mode: __expectString,
    ModelDataSource: (_: any) => de_ModelDataSource(_, context),
    ModelDataUrl: __expectString,
    ModelPackageName: __expectString,
    MultiModelConfig: (_: any) => de_MultiModelConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ContainerDefinitionList
 */
const de_ContainerDefinitionList = (output: any, context: __SerdeContext): ContainerDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContainerDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContainerEntrypoint
 */
const de_ContainerEntrypoint = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContentClassifiers
 */
const de_ContentClassifiers = (output: any, context: __SerdeContext): ContentClassifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContentTypes
 */
const de_ContentTypes = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContextSource
 */
const de_ContextSource = (output: any, context: __SerdeContext): ContextSource => {
  return take(output, {
    SourceId: __expectString,
    SourceType: __expectString,
    SourceUri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ContextSummaries
 */
const de_ContextSummaries = (output: any, context: __SerdeContext): ContextSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContextSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContextSummary
 */
const de_ContextSummary = (output: any, context: __SerdeContext): ContextSummary => {
  return take(output, {
    ContextArn: __expectString,
    ContextName: __expectString,
    ContextType: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Source: (_: any) => de_ContextSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ContinuousParameterRange
 */
const de_ContinuousParameterRange = (output: any, context: __SerdeContext): ContinuousParameterRange => {
  return take(output, {
    MaxValue: __expectString,
    MinValue: __expectString,
    Name: __expectString,
    ScalingType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ContinuousParameterRanges
 */
const de_ContinuousParameterRanges = (output: any, context: __SerdeContext): ContinuousParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContinuousParameterRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContinuousParameterRangeSpecification
 */
const de_ContinuousParameterRangeSpecification = (
  output: any,
  context: __SerdeContext
): ContinuousParameterRangeSpecification => {
  return take(output, {
    MaxValue: __expectString,
    MinValue: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ConvergenceDetected
 */
const de_ConvergenceDetected = (output: any, context: __SerdeContext): ConvergenceDetected => {
  return take(output, {
    CompleteOnConvergence: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateActionResponse
 */
const de_CreateActionResponse = (output: any, context: __SerdeContext): CreateActionResponse => {
  return take(output, {
    ActionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateAlgorithmOutput
 */
const de_CreateAlgorithmOutput = (output: any, context: __SerdeContext): CreateAlgorithmOutput => {
  return take(output, {
    AlgorithmArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateAppImageConfigResponse
 */
const de_CreateAppImageConfigResponse = (output: any, context: __SerdeContext): CreateAppImageConfigResponse => {
  return take(output, {
    AppImageConfigArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateAppResponse
 */
const de_CreateAppResponse = (output: any, context: __SerdeContext): CreateAppResponse => {
  return take(output, {
    AppArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateArtifactResponse
 */
const de_CreateArtifactResponse = (output: any, context: __SerdeContext): CreateArtifactResponse => {
  return take(output, {
    ArtifactArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateAutoMLJobResponse
 */
const de_CreateAutoMLJobResponse = (output: any, context: __SerdeContext): CreateAutoMLJobResponse => {
  return take(output, {
    AutoMLJobArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateAutoMLJobV2Response
 */
const de_CreateAutoMLJobV2Response = (output: any, context: __SerdeContext): CreateAutoMLJobV2Response => {
  return take(output, {
    AutoMLJobArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateClusterResponse
 */
const de_CreateClusterResponse = (output: any, context: __SerdeContext): CreateClusterResponse => {
  return take(output, {
    ClusterArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateCodeRepositoryOutput
 */
const de_CreateCodeRepositoryOutput = (output: any, context: __SerdeContext): CreateCodeRepositoryOutput => {
  return take(output, {
    CodeRepositoryArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateCompilationJobResponse
 */
const de_CreateCompilationJobResponse = (output: any, context: __SerdeContext): CreateCompilationJobResponse => {
  return take(output, {
    CompilationJobArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateContextResponse
 */
const de_CreateContextResponse = (output: any, context: __SerdeContext): CreateContextResponse => {
  return take(output, {
    ContextArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateDataQualityJobDefinitionResponse
 */
const de_CreateDataQualityJobDefinitionResponse = (
  output: any,
  context: __SerdeContext
): CreateDataQualityJobDefinitionResponse => {
  return take(output, {
    JobDefinitionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateDomainResponse
 */
const de_CreateDomainResponse = (output: any, context: __SerdeContext): CreateDomainResponse => {
  return take(output, {
    DomainArn: __expectString,
    Url: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateEdgeDeploymentPlanResponse
 */
const de_CreateEdgeDeploymentPlanResponse = (
  output: any,
  context: __SerdeContext
): CreateEdgeDeploymentPlanResponse => {
  return take(output, {
    EdgeDeploymentPlanArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateEndpointConfigOutput
 */
const de_CreateEndpointConfigOutput = (output: any, context: __SerdeContext): CreateEndpointConfigOutput => {
  return take(output, {
    EndpointConfigArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateEndpointOutput
 */
const de_CreateEndpointOutput = (output: any, context: __SerdeContext): CreateEndpointOutput => {
  return take(output, {
    EndpointArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateExperimentResponse
 */
const de_CreateExperimentResponse = (output: any, context: __SerdeContext): CreateExperimentResponse => {
  return take(output, {
    ExperimentArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateFeatureGroupResponse
 */
const de_CreateFeatureGroupResponse = (output: any, context: __SerdeContext): CreateFeatureGroupResponse => {
  return take(output, {
    FeatureGroupArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateFlowDefinitionResponse
 */
const de_CreateFlowDefinitionResponse = (output: any, context: __SerdeContext): CreateFlowDefinitionResponse => {
  return take(output, {
    FlowDefinitionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateHubResponse
 */
const de_CreateHubResponse = (output: any, context: __SerdeContext): CreateHubResponse => {
  return take(output, {
    HubArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateHumanTaskUiResponse
 */
const de_CreateHumanTaskUiResponse = (output: any, context: __SerdeContext): CreateHumanTaskUiResponse => {
  return take(output, {
    HumanTaskUiArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateHyperParameterTuningJobResponse
 */
const de_CreateHyperParameterTuningJobResponse = (
  output: any,
  context: __SerdeContext
): CreateHyperParameterTuningJobResponse => {
  return take(output, {
    HyperParameterTuningJobArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateImageResponse
 */
const de_CreateImageResponse = (output: any, context: __SerdeContext): CreateImageResponse => {
  return take(output, {
    ImageArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateImageVersionResponse
 */
const de_CreateImageVersionResponse = (output: any, context: __SerdeContext): CreateImageVersionResponse => {
  return take(output, {
    ImageVersionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateInferenceComponentOutput
 */
const de_CreateInferenceComponentOutput = (output: any, context: __SerdeContext): CreateInferenceComponentOutput => {
  return take(output, {
    InferenceComponentArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateInferenceExperimentResponse
 */
const de_CreateInferenceExperimentResponse = (
  output: any,
  context: __SerdeContext
): CreateInferenceExperimentResponse => {
  return take(output, {
    InferenceExperimentArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateInferenceRecommendationsJobResponse
 */
const de_CreateInferenceRecommendationsJobResponse = (
  output: any,
  context: __SerdeContext
): CreateInferenceRecommendationsJobResponse => {
  return take(output, {
    JobArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateLabelingJobResponse
 */
const de_CreateLabelingJobResponse = (output: any, context: __SerdeContext): CreateLabelingJobResponse => {
  return take(output, {
    LabelingJobArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateMlflowTrackingServerResponse
 */
const de_CreateMlflowTrackingServerResponse = (
  output: any,
  context: __SerdeContext
): CreateMlflowTrackingServerResponse => {
  return take(output, {
    TrackingServerArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateModelBiasJobDefinitionResponse
 */
const de_CreateModelBiasJobDefinitionResponse = (
  output: any,
  context: __SerdeContext
): CreateModelBiasJobDefinitionResponse => {
  return take(output, {
    JobDefinitionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateModelCardExportJobResponse
 */
const de_CreateModelCardExportJobResponse = (
  output: any,
  context: __SerdeContext
): CreateModelCardExportJobResponse => {
  return take(output, {
    ModelCardExportJobArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateModelCardResponse
 */
const de_CreateModelCardResponse = (output: any, context: __SerdeContext): CreateModelCardResponse => {
  return take(output, {
    ModelCardArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateModelExplainabilityJobDefinitionResponse
 */
const de_CreateModelExplainabilityJobDefinitionResponse = (
  output: any,
  context: __SerdeContext
): CreateModelExplainabilityJobDefinitionResponse => {
  return take(output, {
    JobDefinitionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateModelOutput
 */
const de_CreateModelOutput = (output: any, context: __SerdeContext): CreateModelOutput => {
  return take(output, {
    ModelArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateModelPackageGroupOutput
 */
const de_CreateModelPackageGroupOutput = (output: any, context: __SerdeContext): CreateModelPackageGroupOutput => {
  return take(output, {
    ModelPackageGroupArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateModelPackageOutput
 */
const de_CreateModelPackageOutput = (output: any, context: __SerdeContext): CreateModelPackageOutput => {
  return take(output, {
    ModelPackageArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateModelQualityJobDefinitionResponse
 */
const de_CreateModelQualityJobDefinitionResponse = (
  output: any,
  context: __SerdeContext
): CreateModelQualityJobDefinitionResponse => {
  return take(output, {
    JobDefinitionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateMonitoringScheduleResponse
 */
const de_CreateMonitoringScheduleResponse = (
  output: any,
  context: __SerdeContext
): CreateMonitoringScheduleResponse => {
  return take(output, {
    MonitoringScheduleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateNotebookInstanceLifecycleConfigOutput
 */
const de_CreateNotebookInstanceLifecycleConfigOutput = (
  output: any,
  context: __SerdeContext
): CreateNotebookInstanceLifecycleConfigOutput => {
  return take(output, {
    NotebookInstanceLifecycleConfigArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateNotebookInstanceOutput
 */
const de_CreateNotebookInstanceOutput = (output: any, context: __SerdeContext): CreateNotebookInstanceOutput => {
  return take(output, {
    NotebookInstanceArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreatePipelineResponse
 */
const de_CreatePipelineResponse = (output: any, context: __SerdeContext): CreatePipelineResponse => {
  return take(output, {
    PipelineArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreatePresignedDomainUrlResponse
 */
const de_CreatePresignedDomainUrlResponse = (
  output: any,
  context: __SerdeContext
): CreatePresignedDomainUrlResponse => {
  return take(output, {
    AuthorizedUrl: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreatePresignedMlflowTrackingServerUrlResponse
 */
const de_CreatePresignedMlflowTrackingServerUrlResponse = (
  output: any,
  context: __SerdeContext
): CreatePresignedMlflowTrackingServerUrlResponse => {
  return take(output, {
    AuthorizedUrl: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreatePresignedNotebookInstanceUrlOutput
 */
const de_CreatePresignedNotebookInstanceUrlOutput = (
  output: any,
  context: __SerdeContext
): CreatePresignedNotebookInstanceUrlOutput => {
  return take(output, {
    AuthorizedUrl: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateProcessingJobResponse
 */
const de_CreateProcessingJobResponse = (output: any, context: __SerdeContext): CreateProcessingJobResponse => {
  return take(output, {
    ProcessingJobArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateProjectOutput
 */
const de_CreateProjectOutput = (output: any, context: __SerdeContext): CreateProjectOutput => {
  return take(output, {
    ProjectArn: __expectString,
    ProjectId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateSpaceResponse
 */
const de_CreateSpaceResponse = (output: any, context: __SerdeContext): CreateSpaceResponse => {
  return take(output, {
    SpaceArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateStudioLifecycleConfigResponse
 */
const de_CreateStudioLifecycleConfigResponse = (
  output: any,
  context: __SerdeContext
): CreateStudioLifecycleConfigResponse => {
  return take(output, {
    StudioLifecycleConfigArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateTrainingJobResponse
 */
const de_CreateTrainingJobResponse = (output: any, context: __SerdeContext): CreateTrainingJobResponse => {
  return take(output, {
    TrainingJobArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateTransformJobResponse
 */
const de_CreateTransformJobResponse = (output: any, context: __SerdeContext): CreateTransformJobResponse => {
  return take(output, {
    TransformJobArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateTrialComponentResponse
 */
const de_CreateTrialComponentResponse = (output: any, context: __SerdeContext): CreateTrialComponentResponse => {
  return take(output, {
    TrialComponentArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateTrialResponse
 */
const de_CreateTrialResponse = (output: any, context: __SerdeContext): CreateTrialResponse => {
  return take(output, {
    TrialArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateUserProfileResponse
 */
const de_CreateUserProfileResponse = (output: any, context: __SerdeContext): CreateUserProfileResponse => {
  return take(output, {
    UserProfileArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateWorkforceResponse
 */
const de_CreateWorkforceResponse = (output: any, context: __SerdeContext): CreateWorkforceResponse => {
  return take(output, {
    WorkforceArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateWorkteamResponse
 */
const de_CreateWorkteamResponse = (output: any, context: __SerdeContext): CreateWorkteamResponse => {
  return take(output, {
    WorkteamArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CsvContentTypes
 */
const de_CsvContentTypes = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CustomerMetadataMap
 */
const de_CustomerMetadataMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_json1_1CustomFileSystem
 */
const de_CustomFileSystem = (output: any, context: __SerdeContext): CustomFileSystem => {
  if (output.EFSFileSystem != null) {
    return {
      EFSFileSystem: de_EFSFileSystem(output.EFSFileSystem, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_1CustomFileSystemConfig
 */
const de_CustomFileSystemConfig = (output: any, context: __SerdeContext): CustomFileSystemConfig => {
  if (output.EFSFileSystemConfig != null) {
    return {
      EFSFileSystemConfig: de_EFSFileSystemConfig(output.EFSFileSystemConfig, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_1CustomFileSystemConfigs
 */
const de_CustomFileSystemConfigs = (output: any, context: __SerdeContext): CustomFileSystemConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CustomFileSystemConfig(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CustomFileSystems
 */
const de_CustomFileSystems = (output: any, context: __SerdeContext): CustomFileSystem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CustomFileSystem(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CustomImage
 */
const de_CustomImage = (output: any, context: __SerdeContext): CustomImage => {
  return take(output, {
    AppImageConfigName: __expectString,
    ImageName: __expectString,
    ImageVersionNumber: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1CustomImageContainerArguments
 */
const de_CustomImageContainerArguments = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CustomImageContainerEntrypoint
 */
const de_CustomImageContainerEntrypoint = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CustomImageContainerEnvironmentVariables
 */
const de_CustomImageContainerEnvironmentVariables = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_json1_1CustomImages
 */
const de_CustomImages = (output: any, context: __SerdeContext): CustomImage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CustomImage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CustomizedMetricSpecification
 */
const de_CustomizedMetricSpecification = (output: any, context: __SerdeContext): CustomizedMetricSpecification => {
  return take(output, {
    MetricName: __expectString,
    Namespace: __expectString,
    Statistic: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CustomPosixUserConfig
 */
const de_CustomPosixUserConfig = (output: any, context: __SerdeContext): CustomPosixUserConfig => {
  return take(output, {
    Gid: __expectLong,
    Uid: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1DataCaptureConfig
 */
const de_DataCaptureConfig = (output: any, context: __SerdeContext): DataCaptureConfig => {
  return take(output, {
    CaptureContentTypeHeader: (_: any) => de_CaptureContentTypeHeader(_, context),
    CaptureOptions: (_: any) => de_CaptureOptionList(_, context),
    DestinationS3Uri: __expectString,
    EnableCapture: __expectBoolean,
    InitialSamplingPercentage: __expectInt32,
    KmsKeyId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DataCaptureConfigSummary
 */
const de_DataCaptureConfigSummary = (output: any, context: __SerdeContext): DataCaptureConfigSummary => {
  return take(output, {
    CaptureStatus: __expectString,
    CurrentSamplingPercentage: __expectInt32,
    DestinationS3Uri: __expectString,
    EnableCapture: __expectBoolean,
    KmsKeyId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DataCatalogConfig
 */
const de_DataCatalogConfig = (output: any, context: __SerdeContext): DataCatalogConfig => {
  return take(output, {
    Catalog: __expectString,
    Database: __expectString,
    TableName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DataProcessing
 */
const de_DataProcessing = (output: any, context: __SerdeContext): DataProcessing => {
  return take(output, {
    InputFilter: __expectString,
    JoinSource: __expectString,
    OutputFilter: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DataQualityAppSpecification
 */
const de_DataQualityAppSpecification = (output: any, context: __SerdeContext): DataQualityAppSpecification => {
  return take(output, {
    ContainerArguments: (_: any) => de_MonitoringContainerArguments(_, context),
    ContainerEntrypoint: (_: any) => de_ContainerEntrypoint(_, context),
    Environment: (_: any) => de_MonitoringEnvironmentMap(_, context),
    ImageUri: __expectString,
    PostAnalyticsProcessorSourceUri: __expectString,
    RecordPreprocessorSourceUri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DataQualityBaselineConfig
 */
const de_DataQualityBaselineConfig = (output: any, context: __SerdeContext): DataQualityBaselineConfig => {
  return take(output, {
    BaseliningJobName: __expectString,
    ConstraintsResource: (_: any) => de_MonitoringConstraintsResource(_, context),
    StatisticsResource: (_: any) => de_MonitoringStatisticsResource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DataQualityJobInput
 */
const de_DataQualityJobInput = (output: any, context: __SerdeContext): DataQualityJobInput => {
  return take(output, {
    BatchTransformInput: (_: any) => de_BatchTransformInput(_, context),
    EndpointInput: (_: any) => de_EndpointInput(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DatasetDefinition
 */
const de_DatasetDefinition = (output: any, context: __SerdeContext): DatasetDefinition => {
  return take(output, {
    AthenaDatasetDefinition: (_: any) => de_AthenaDatasetDefinition(_, context),
    DataDistributionType: __expectString,
    InputMode: __expectString,
    LocalPath: __expectString,
    RedshiftDatasetDefinition: (_: any) => de_RedshiftDatasetDefinition(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DataSource
 */
const de_DataSource = (output: any, context: __SerdeContext): DataSource => {
  return take(output, {
    FileSystemDataSource: (_: any) => de_FileSystemDataSource(_, context),
    S3DataSource: (_: any) => de_S3DataSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DebugHookConfig
 */
const de_DebugHookConfig = (output: any, context: __SerdeContext): DebugHookConfig => {
  return take(output, {
    CollectionConfigurations: (_: any) => de_CollectionConfigurations(_, context),
    HookParameters: (_: any) => de_HookParameters(_, context),
    LocalPath: __expectString,
    S3OutputPath: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DebugRuleConfiguration
 */
const de_DebugRuleConfiguration = (output: any, context: __SerdeContext): DebugRuleConfiguration => {
  return take(output, {
    InstanceType: __expectString,
    LocalPath: __expectString,
    RuleConfigurationName: __expectString,
    RuleEvaluatorImage: __expectString,
    RuleParameters: (_: any) => de_RuleParameters(_, context),
    S3OutputPath: __expectString,
    VolumeSizeInGB: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1DebugRuleConfigurations
 */
const de_DebugRuleConfigurations = (output: any, context: __SerdeContext): DebugRuleConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DebugRuleConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DebugRuleEvaluationStatus
 */
const de_DebugRuleEvaluationStatus = (output: any, context: __SerdeContext): DebugRuleEvaluationStatus => {
  return take(output, {
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RuleConfigurationName: __expectString,
    RuleEvaluationJobArn: __expectString,
    RuleEvaluationStatus: __expectString,
    StatusDetails: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DebugRuleEvaluationStatuses
 */
const de_DebugRuleEvaluationStatuses = (output: any, context: __SerdeContext): DebugRuleEvaluationStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DebugRuleEvaluationStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DefaultEbsStorageSettings
 */
const de_DefaultEbsStorageSettings = (output: any, context: __SerdeContext): DefaultEbsStorageSettings => {
  return take(output, {
    DefaultEbsVolumeSizeInGb: __expectInt32,
    MaximumEbsVolumeSizeInGb: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1DefaultSpaceSettings
 */
const de_DefaultSpaceSettings = (output: any, context: __SerdeContext): DefaultSpaceSettings => {
  return take(output, {
    CustomFileSystemConfigs: (_: any) => de_CustomFileSystemConfigs(_, context),
    CustomPosixUserConfig: (_: any) => de_CustomPosixUserConfig(_, context),
    ExecutionRole: __expectString,
    JupyterLabAppSettings: (_: any) => de_JupyterLabAppSettings(_, context),
    JupyterServerAppSettings: (_: any) => de_JupyterServerAppSettings(_, context),
    KernelGatewayAppSettings: (_: any) => de_KernelGatewayAppSettings(_, context),
    SecurityGroups: (_: any) => de_SecurityGroupIds(_, context),
    SpaceStorageSettings: (_: any) => de_DefaultSpaceStorageSettings(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DefaultSpaceStorageSettings
 */
const de_DefaultSpaceStorageSettings = (output: any, context: __SerdeContext): DefaultSpaceStorageSettings => {
  return take(output, {
    DefaultEbsStorageSettings: (_: any) => de_DefaultEbsStorageSettings(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteActionResponse
 */
const de_DeleteActionResponse = (output: any, context: __SerdeContext): DeleteActionResponse => {
  return take(output, {
    ActionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteArtifactResponse
 */
const de_DeleteArtifactResponse = (output: any, context: __SerdeContext): DeleteArtifactResponse => {
  return take(output, {
    ArtifactArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteAssociationResponse
 */
const de_DeleteAssociationResponse = (output: any, context: __SerdeContext): DeleteAssociationResponse => {
  return take(output, {
    DestinationArn: __expectString,
    SourceArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteClusterResponse
 */
const de_DeleteClusterResponse = (output: any, context: __SerdeContext): DeleteClusterResponse => {
  return take(output, {
    ClusterArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteContextResponse
 */
const de_DeleteContextResponse = (output: any, context: __SerdeContext): DeleteContextResponse => {
  return take(output, {
    ContextArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteExperimentResponse
 */
const de_DeleteExperimentResponse = (output: any, context: __SerdeContext): DeleteExperimentResponse => {
  return take(output, {
    ExperimentArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteFlowDefinitionResponse
 */
const de_DeleteFlowDefinitionResponse = (output: any, context: __SerdeContext): DeleteFlowDefinitionResponse => {
  return take(output, {}) as any;
};

/**
 * deserializeAws_json1_1DeleteHumanTaskUiResponse
 */
const de_DeleteHumanTaskUiResponse = (output: any, context: __SerdeContext): DeleteHumanTaskUiResponse => {
  return take(output, {}) as any;
};

/**
 * deserializeAws_json1_1DeleteImageResponse
 */
const de_DeleteImageResponse = (output: any, context: __SerdeContext): DeleteImageResponse => {
  return take(output, {}) as any;
};

/**
 * deserializeAws_json1_1DeleteImageVersionResponse
 */
const de_DeleteImageVersionResponse = (output: any, context: __SerdeContext): DeleteImageVersionResponse => {
  return take(output, {}) as any;
};

/**
 * deserializeAws_json1_1DeleteInferenceExperimentResponse
 */
const de_DeleteInferenceExperimentResponse = (
  output: any,
  context: __SerdeContext
): DeleteInferenceExperimentResponse => {
  return take(output, {
    InferenceExperimentArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteMlflowTrackingServerResponse
 */
const de_DeleteMlflowTrackingServerResponse = (
  output: any,
  context: __SerdeContext
): DeleteMlflowTrackingServerResponse => {
  return take(output, {
    TrackingServerArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeletePipelineResponse
 */
const de_DeletePipelineResponse = (output: any, context: __SerdeContext): DeletePipelineResponse => {
  return take(output, {
    PipelineArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteTagsOutput
 */
const de_DeleteTagsOutput = (output: any, context: __SerdeContext): DeleteTagsOutput => {
  return take(output, {}) as any;
};

/**
 * deserializeAws_json1_1DeleteTrialComponentResponse
 */
const de_DeleteTrialComponentResponse = (output: any, context: __SerdeContext): DeleteTrialComponentResponse => {
  return take(output, {
    TrialComponentArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteTrialResponse
 */
const de_DeleteTrialResponse = (output: any, context: __SerdeContext): DeleteTrialResponse => {
  return take(output, {
    TrialArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteWorkforceResponse
 */
const de_DeleteWorkforceResponse = (output: any, context: __SerdeContext): DeleteWorkforceResponse => {
  return take(output, {}) as any;
};

/**
 * deserializeAws_json1_1DeleteWorkteamResponse
 */
const de_DeleteWorkteamResponse = (output: any, context: __SerdeContext): DeleteWorkteamResponse => {
  return take(output, {
    Success: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1DeployedImage
 */
const de_DeployedImage = (output: any, context: __SerdeContext): DeployedImage => {
  return take(output, {
    ResolutionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResolvedImage: __expectString,
    SpecifiedImage: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeployedImages
 */
const de_DeployedImages = (output: any, context: __SerdeContext): DeployedImage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeployedImage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeploymentConfig
 */
const de_DeploymentConfig = (output: any, context: __SerdeContext): DeploymentConfig => {
  return take(output, {
    AutoRollbackConfiguration: (_: any) => de_AutoRollbackConfig(_, context),
    BlueGreenUpdatePolicy: (_: any) => de_BlueGreenUpdatePolicy(_, context),
    RollingUpdatePolicy: (_: any) => de_RollingUpdatePolicy(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeploymentRecommendation
 */
const de_DeploymentRecommendation = (output: any, context: __SerdeContext): DeploymentRecommendation => {
  return take(output, {
    RealTimeInferenceRecommendations: (_: any) => de_RealTimeInferenceRecommendations(_, context),
    RecommendationStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeploymentStageStatusSummaries
 */
const de_DeploymentStageStatusSummaries = (output: any, context: __SerdeContext): DeploymentStageStatusSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeploymentStageStatusSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeploymentStageStatusSummary
 */
const de_DeploymentStageStatusSummary = (output: any, context: __SerdeContext): DeploymentStageStatusSummary => {
  return take(output, {
    DeploymentConfig: (_: any) => de_EdgeDeploymentConfig(_, context),
    DeploymentStatus: (_: any) => de_EdgeDeploymentStatus(_, context),
    DeviceSelectionConfig: (_: any) => de_DeviceSelectionConfig(_, context),
    StageName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DerivedInformation
 */
const de_DerivedInformation = (output: any, context: __SerdeContext): DerivedInformation => {
  return take(output, {
    DerivedDataInputConfig: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeActionResponse
 */
const de_DescribeActionResponse = (output: any, context: __SerdeContext): DescribeActionResponse => {
  return take(output, {
    ActionArn: __expectString,
    ActionName: __expectString,
    ActionType: __expectString,
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LineageGroupArn: __expectString,
    MetadataProperties: (_: any) => de_MetadataProperties(_, context),
    Properties: (_: any) => de_LineageEntityParameters(_, context),
    Source: (_: any) => de_ActionSource(_, context),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAlgorithmOutput
 */
const de_DescribeAlgorithmOutput = (output: any, context: __SerdeContext): DescribeAlgorithmOutput => {
  return take(output, {
    AlgorithmArn: __expectString,
    AlgorithmDescription: __expectString,
    AlgorithmName: __expectString,
    AlgorithmStatus: __expectString,
    AlgorithmStatusDetails: (_: any) => de_AlgorithmStatusDetails(_, context),
    CertifyForMarketplace: __expectBoolean,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InferenceSpecification: (_: any) => de_InferenceSpecification(_, context),
    ProductId: __expectString,
    TrainingSpecification: (_: any) => de_TrainingSpecification(_, context),
    ValidationSpecification: (_: any) => de_AlgorithmValidationSpecification(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAppImageConfigResponse
 */
const de_DescribeAppImageConfigResponse = (output: any, context: __SerdeContext): DescribeAppImageConfigResponse => {
  return take(output, {
    AppImageConfigArn: __expectString,
    AppImageConfigName: __expectString,
    CodeEditorAppImageConfig: (_: any) => de_CodeEditorAppImageConfig(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JupyterLabAppImageConfig: (_: any) => de_JupyterLabAppImageConfig(_, context),
    KernelGatewayImageConfig: (_: any) => de_KernelGatewayImageConfig(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAppResponse
 */
const de_DescribeAppResponse = (output: any, context: __SerdeContext): DescribeAppResponse => {
  return take(output, {
    AppArn: __expectString,
    AppName: __expectString,
    AppType: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainId: __expectString,
    FailureReason: __expectString,
    LastHealthCheckTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUserActivityTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceSpec: (_: any) => de_ResourceSpec(_, context),
    SpaceName: __expectString,
    Status: __expectString,
    UserProfileName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeArtifactResponse
 */
const de_DescribeArtifactResponse = (output: any, context: __SerdeContext): DescribeArtifactResponse => {
  return take(output, {
    ArtifactArn: __expectString,
    ArtifactName: __expectString,
    ArtifactType: __expectString,
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LineageGroupArn: __expectString,
    MetadataProperties: (_: any) => de_MetadataProperties(_, context),
    Properties: (_: any) => de_LineageEntityParameters(_, context),
    Source: (_: any) => de_ArtifactSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAutoMLJobResponse
 */
const de_DescribeAutoMLJobResponse = (output: any, context: __SerdeContext): DescribeAutoMLJobResponse => {
  return take(output, {
    AutoMLJobArn: __expectString,
    AutoMLJobArtifacts: (_: any) => de_AutoMLJobArtifacts(_, context),
    AutoMLJobConfig: (_: any) => de_AutoMLJobConfig(_, context),
    AutoMLJobName: __expectString,
    AutoMLJobObjective: (_: any) => de_AutoMLJobObjective(_, context),
    AutoMLJobSecondaryStatus: __expectString,
    AutoMLJobStatus: __expectString,
    BestCandidate: (_: any) => de_AutoMLCandidate(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    GenerateCandidateDefinitionsOnly: __expectBoolean,
    InputDataConfig: (_: any) => de_AutoMLInputDataConfig(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelDeployConfig: (_: any) => de_ModelDeployConfig(_, context),
    ModelDeployResult: (_: any) => de_ModelDeployResult(_, context),
    OutputDataConfig: (_: any) => de_AutoMLOutputDataConfig(_, context),
    PartialFailureReasons: (_: any) => de_AutoMLPartialFailureReasons(_, context),
    ProblemType: __expectString,
    ResolvedAttributes: (_: any) => de_ResolvedAttributes(_, context),
    RoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAutoMLJobV2Response
 */
const de_DescribeAutoMLJobV2Response = (output: any, context: __SerdeContext): DescribeAutoMLJobV2Response => {
  return take(output, {
    AutoMLJobArn: __expectString,
    AutoMLJobArtifacts: (_: any) => de_AutoMLJobArtifacts(_, context),
    AutoMLJobInputDataConfig: (_: any) => de_AutoMLJobInputDataConfig(_, context),
    AutoMLJobName: __expectString,
    AutoMLJobObjective: (_: any) => de_AutoMLJobObjective(_, context),
    AutoMLJobSecondaryStatus: __expectString,
    AutoMLJobStatus: __expectString,
    AutoMLProblemTypeConfig: (_: any) => de_AutoMLProblemTypeConfig(__expectUnion(_), context),
    AutoMLProblemTypeConfigName: __expectString,
    BestCandidate: (_: any) => de_AutoMLCandidate(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataSplitConfig: (_: any) => de_AutoMLDataSplitConfig(_, context),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelDeployConfig: (_: any) => de_ModelDeployConfig(_, context),
    ModelDeployResult: (_: any) => de_ModelDeployResult(_, context),
    OutputDataConfig: (_: any) => de_AutoMLOutputDataConfig(_, context),
    PartialFailureReasons: (_: any) => de_AutoMLPartialFailureReasons(_, context),
    ResolvedAttributes: (_: any) => de_AutoMLResolvedAttributes(_, context),
    RoleArn: __expectString,
    SecurityConfig: (_: any) => de_AutoMLSecurityConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeClusterNodeResponse
 */
const de_DescribeClusterNodeResponse = (output: any, context: __SerdeContext): DescribeClusterNodeResponse => {
  return take(output, {
    NodeDetails: (_: any) => de_ClusterNodeDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeClusterResponse
 */
const de_DescribeClusterResponse = (output: any, context: __SerdeContext): DescribeClusterResponse => {
  return take(output, {
    ClusterArn: __expectString,
    ClusterName: __expectString,
    ClusterStatus: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureMessage: __expectString,
    InstanceGroups: (_: any) => de_ClusterInstanceGroupDetailsList(_, context),
    VpcConfig: (_: any) => de_VpcConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeCodeRepositoryOutput
 */
const de_DescribeCodeRepositoryOutput = (output: any, context: __SerdeContext): DescribeCodeRepositoryOutput => {
  return take(output, {
    CodeRepositoryArn: __expectString,
    CodeRepositoryName: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    GitConfig: (_: any) => de_GitConfig(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeCompilationJobResponse
 */
const de_DescribeCompilationJobResponse = (output: any, context: __SerdeContext): DescribeCompilationJobResponse => {
  return take(output, {
    CompilationEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CompilationJobArn: __expectString,
    CompilationJobName: __expectString,
    CompilationJobStatus: __expectString,
    CompilationStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DerivedInformation: (_: any) => de_DerivedInformation(_, context),
    FailureReason: __expectString,
    InferenceImage: __expectString,
    InputConfig: (_: any) => de_InputConfig(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelArtifacts: (_: any) => de_ModelArtifacts(_, context),
    ModelDigests: (_: any) => de_ModelDigests(_, context),
    ModelPackageVersionArn: __expectString,
    OutputConfig: (_: any) => de_OutputConfig(_, context),
    RoleArn: __expectString,
    StoppingCondition: (_: any) => de_StoppingCondition(_, context),
    VpcConfig: (_: any) => de_NeoVpcConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeContextResponse
 */
const de_DescribeContextResponse = (output: any, context: __SerdeContext): DescribeContextResponse => {
  return take(output, {
    ContextArn: __expectString,
    ContextName: __expectString,
    ContextType: __expectString,
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LineageGroupArn: __expectString,
    Properties: (_: any) => de_LineageEntityParameters(_, context),
    Source: (_: any) => de_ContextSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDataQualityJobDefinitionResponse
 */
const de_DescribeDataQualityJobDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DescribeDataQualityJobDefinitionResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataQualityAppSpecification: (_: any) => de_DataQualityAppSpecification(_, context),
    DataQualityBaselineConfig: (_: any) => de_DataQualityBaselineConfig(_, context),
    DataQualityJobInput: (_: any) => de_DataQualityJobInput(_, context),
    DataQualityJobOutputConfig: (_: any) => de_MonitoringOutputConfig(_, context),
    JobDefinitionArn: __expectString,
    JobDefinitionName: __expectString,
    JobResources: (_: any) => de_MonitoringResources(_, context),
    NetworkConfig: (_: any) => de_MonitoringNetworkConfig(_, context),
    RoleArn: __expectString,
    StoppingCondition: (_: any) => de_MonitoringStoppingCondition(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDeviceFleetResponse
 */
const de_DescribeDeviceFleetResponse = (output: any, context: __SerdeContext): DescribeDeviceFleetResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DeviceFleetArn: __expectString,
    DeviceFleetName: __expectString,
    IotRoleAlias: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OutputConfig: (_: any) => de_EdgeOutputConfig(_, context),
    RoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDeviceResponse
 */
const de_DescribeDeviceResponse = (output: any, context: __SerdeContext): DescribeDeviceResponse => {
  return take(output, {
    AgentVersion: __expectString,
    Description: __expectString,
    DeviceArn: __expectString,
    DeviceFleetName: __expectString,
    DeviceName: __expectString,
    IotThingName: __expectString,
    LatestHeartbeat: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaxModels: __expectInt32,
    Models: (_: any) => de_EdgeModels(_, context),
    NextToken: __expectString,
    RegistrationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDomainResponse
 */
const de_DescribeDomainResponse = (output: any, context: __SerdeContext): DescribeDomainResponse => {
  return take(output, {
    AppNetworkAccessType: __expectString,
    AppSecurityGroupManagement: __expectString,
    AuthMode: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultSpaceSettings: (_: any) => de_DefaultSpaceSettings(_, context),
    DefaultUserSettings: (_: any) => de_UserSettings(_, context),
    DomainArn: __expectString,
    DomainId: __expectString,
    DomainName: __expectString,
    DomainSettings: (_: any) => de_DomainSettings(_, context),
    FailureReason: __expectString,
    HomeEfsFileSystemId: __expectString,
    HomeEfsFileSystemKmsKeyId: __expectString,
    KmsKeyId: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SecurityGroupIdForDomainBoundary: __expectString,
    SingleSignOnApplicationArn: __expectString,
    SingleSignOnManagedApplicationInstanceId: __expectString,
    Status: __expectString,
    SubnetIds: (_: any) => de_Subnets(_, context),
    Url: __expectString,
    VpcId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEdgeDeploymentPlanResponse
 */
const de_DescribeEdgeDeploymentPlanResponse = (
  output: any,
  context: __SerdeContext
): DescribeEdgeDeploymentPlanResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeviceFleetName: __expectString,
    EdgeDeploymentFailed: __expectInt32,
    EdgeDeploymentPending: __expectInt32,
    EdgeDeploymentPlanArn: __expectString,
    EdgeDeploymentPlanName: __expectString,
    EdgeDeploymentSuccess: __expectInt32,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelConfigs: (_: any) => de_EdgeDeploymentModelConfigs(_, context),
    NextToken: __expectString,
    Stages: (_: any) => de_DeploymentStageStatusSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEdgePackagingJobResponse
 */
const de_DescribeEdgePackagingJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeEdgePackagingJobResponse => {
  return take(output, {
    CompilationJobName: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EdgePackagingJobArn: __expectString,
    EdgePackagingJobName: __expectString,
    EdgePackagingJobStatus: __expectString,
    EdgePackagingJobStatusMessage: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelArtifact: __expectString,
    ModelName: __expectString,
    ModelSignature: __expectString,
    ModelVersion: __expectString,
    OutputConfig: (_: any) => de_EdgeOutputConfig(_, context),
    PresetDeploymentOutput: (_: any) => de_EdgePresetDeploymentOutput(_, context),
    ResourceKey: __expectString,
    RoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEndpointConfigOutput
 */
const de_DescribeEndpointConfigOutput = (output: any, context: __SerdeContext): DescribeEndpointConfigOutput => {
  return take(output, {
    AsyncInferenceConfig: (_: any) => de_AsyncInferenceConfig(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataCaptureConfig: (_: any) => de_DataCaptureConfig(_, context),
    EnableNetworkIsolation: __expectBoolean,
    EndpointConfigArn: __expectString,
    EndpointConfigName: __expectString,
    ExecutionRoleArn: __expectString,
    ExplainerConfig: (_: any) => de_ExplainerConfig(_, context),
    KmsKeyId: __expectString,
    ProductionVariants: (_: any) => de_ProductionVariantList(_, context),
    ShadowProductionVariants: (_: any) => de_ProductionVariantList(_, context),
    VpcConfig: (_: any) => de_VpcConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEndpointOutput
 */
const de_DescribeEndpointOutput = (output: any, context: __SerdeContext): DescribeEndpointOutput => {
  return take(output, {
    AsyncInferenceConfig: (_: any) => de_AsyncInferenceConfig(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataCaptureConfig: (_: any) => de_DataCaptureConfigSummary(_, context),
    EndpointArn: __expectString,
    EndpointConfigName: __expectString,
    EndpointName: __expectString,
    EndpointStatus: __expectString,
    ExplainerConfig: (_: any) => de_ExplainerConfig(_, context),
    FailureReason: __expectString,
    LastDeploymentConfig: (_: any) => de_DeploymentConfig(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PendingDeploymentSummary: (_: any) => de_PendingDeploymentSummary(_, context),
    ProductionVariants: (_: any) => de_ProductionVariantSummaryList(_, context),
    ShadowProductionVariants: (_: any) => de_ProductionVariantSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeExperimentResponse
 */
const de_DescribeExperimentResponse = (output: any, context: __SerdeContext): DescribeExperimentResponse => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    ExperimentArn: __expectString,
    ExperimentName: __expectString,
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Source: (_: any) => de_ExperimentSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeFeatureGroupResponse
 */
const de_DescribeFeatureGroupResponse = (output: any, context: __SerdeContext): DescribeFeatureGroupResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EventTimeFeatureName: __expectString,
    FailureReason: __expectString,
    FeatureDefinitions: (_: any) => de_FeatureDefinitions(_, context),
    FeatureGroupArn: __expectString,
    FeatureGroupName: __expectString,
    FeatureGroupStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdateStatus: (_: any) => de_LastUpdateStatus(_, context),
    NextToken: __expectString,
    OfflineStoreConfig: (_: any) => de_OfflineStoreConfig(_, context),
    OfflineStoreStatus: (_: any) => de_OfflineStoreStatus(_, context),
    OnlineStoreConfig: (_: any) => de_OnlineStoreConfig(_, context),
    OnlineStoreTotalSizeBytes: __expectLong,
    RecordIdentifierFeatureName: __expectString,
    RoleArn: __expectString,
    ThroughputConfig: (_: any) => de_ThroughputConfigDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeFeatureMetadataResponse
 */
const de_DescribeFeatureMetadataResponse = (output: any, context: __SerdeContext): DescribeFeatureMetadataResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    FeatureGroupArn: __expectString,
    FeatureGroupName: __expectString,
    FeatureName: __expectString,
    FeatureType: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Parameters: (_: any) => de_FeatureParameters(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeFlowDefinitionResponse
 */
const de_DescribeFlowDefinitionResponse = (output: any, context: __SerdeContext): DescribeFlowDefinitionResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    FlowDefinitionArn: __expectString,
    FlowDefinitionName: __expectString,
    FlowDefinitionStatus: __expectString,
    HumanLoopActivationConfig: (_: any) => de_HumanLoopActivationConfig(_, context),
    HumanLoopConfig: (_: any) => de_HumanLoopConfig(_, context),
    HumanLoopRequestSource: (_: any) => de_HumanLoopRequestSource(_, context),
    OutputConfig: (_: any) => de_FlowDefinitionOutputConfig(_, context),
    RoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeHubContentResponse
 */
const de_DescribeHubContentResponse = (output: any, context: __SerdeContext): DescribeHubContentResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DocumentSchemaVersion: __expectString,
    FailureReason: __expectString,
    HubArn: __expectString,
    HubContentArn: __expectString,
    HubContentDependencies: (_: any) => de_HubContentDependencyList(_, context),
    HubContentDescription: __expectString,
    HubContentDisplayName: __expectString,
    HubContentDocument: __expectString,
    HubContentMarkdown: __expectString,
    HubContentName: __expectString,
    HubContentSearchKeywords: (_: any) => de_HubContentSearchKeywordList(_, context),
    HubContentStatus: __expectString,
    HubContentType: __expectString,
    HubContentVersion: __expectString,
    HubName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeHubResponse
 */
const de_DescribeHubResponse = (output: any, context: __SerdeContext): DescribeHubResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    HubArn: __expectString,
    HubDescription: __expectString,
    HubDisplayName: __expectString,
    HubName: __expectString,
    HubSearchKeywords: (_: any) => de_HubSearchKeywordList(_, context),
    HubStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    S3StorageConfig: (_: any) => de_HubS3StorageConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeHumanTaskUiResponse
 */
const de_DescribeHumanTaskUiResponse = (output: any, context: __SerdeContext): DescribeHumanTaskUiResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HumanTaskUiArn: __expectString,
    HumanTaskUiName: __expectString,
    HumanTaskUiStatus: __expectString,
    UiTemplate: (_: any) => de_UiTemplateInfo(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeHyperParameterTuningJobResponse
 */
const de_DescribeHyperParameterTuningJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeHyperParameterTuningJobResponse => {
  return take(output, {
    Autotune: (_: any) => de_Autotune(_, context),
    BestTrainingJob: (_: any) => de_HyperParameterTrainingJobSummary(_, context),
    ConsumedResources: (_: any) => de_HyperParameterTuningJobConsumedResources(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    HyperParameterTuningEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HyperParameterTuningJobArn: __expectString,
    HyperParameterTuningJobConfig: (_: any) => de_HyperParameterTuningJobConfig(_, context),
    HyperParameterTuningJobName: __expectString,
    HyperParameterTuningJobStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ObjectiveStatusCounters: (_: any) => de_ObjectiveStatusCounters(_, context),
    OverallBestTrainingJob: (_: any) => de_HyperParameterTrainingJobSummary(_, context),
    TrainingJobDefinition: (_: any) => de_HyperParameterTrainingJobDefinition(_, context),
    TrainingJobDefinitions: (_: any) => de_HyperParameterTrainingJobDefinitions(_, context),
    TrainingJobStatusCounters: (_: any) => de_TrainingJobStatusCounters(_, context),
    TuningJobCompletionDetails: (_: any) => de_HyperParameterTuningJobCompletionDetails(_, context),
    WarmStartConfig: (_: any) => de_HyperParameterTuningJobWarmStartConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeImageResponse
 */
const de_DescribeImageResponse = (output: any, context: __SerdeContext): DescribeImageResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    FailureReason: __expectString,
    ImageArn: __expectString,
    ImageName: __expectString,
    ImageStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeImageVersionResponse
 */
const de_DescribeImageVersionResponse = (output: any, context: __SerdeContext): DescribeImageVersionResponse => {
  return take(output, {
    BaseImage: __expectString,
    ContainerImage: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    Horovod: __expectBoolean,
    ImageArn: __expectString,
    ImageVersionArn: __expectString,
    ImageVersionStatus: __expectString,
    JobType: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MLFramework: __expectString,
    Processor: __expectString,
    ProgrammingLang: __expectString,
    ReleaseNotes: __expectString,
    VendorGuidance: __expectString,
    Version: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeInferenceComponentOutput
 */
const de_DescribeInferenceComponentOutput = (
  output: any,
  context: __SerdeContext
): DescribeInferenceComponentOutput => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointArn: __expectString,
    EndpointName: __expectString,
    FailureReason: __expectString,
    InferenceComponentArn: __expectString,
    InferenceComponentName: __expectString,
    InferenceComponentStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RuntimeConfig: (_: any) => de_InferenceComponentRuntimeConfigSummary(_, context),
    Specification: (_: any) => de_InferenceComponentSpecificationSummary(_, context),
    VariantName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeInferenceExperimentResponse
 */
const de_DescribeInferenceExperimentResponse = (
  output: any,
  context: __SerdeContext
): DescribeInferenceExperimentResponse => {
  return take(output, {
    Arn: __expectString,
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataStorageConfig: (_: any) => de_InferenceExperimentDataStorageConfig(_, context),
    Description: __expectString,
    EndpointMetadata: (_: any) => de_EndpointMetadata(_, context),
    KmsKey: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelVariants: (_: any) => de_ModelVariantConfigSummaryList(_, context),
    Name: __expectString,
    RoleArn: __expectString,
    Schedule: (_: any) => de_InferenceExperimentSchedule(_, context),
    ShadowModeConfig: (_: any) => de_ShadowModeConfig(_, context),
    Status: __expectString,
    StatusReason: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeInferenceRecommendationsJobResponse
 */
const de_DescribeInferenceRecommendationsJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeInferenceRecommendationsJobResponse => {
  return take(output, {
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointPerformances: (_: any) => de_EndpointPerformances(_, context),
    FailureReason: __expectString,
    InferenceRecommendations: (_: any) => de_InferenceRecommendations(_, context),
    InputConfig: (_: any) => de_RecommendationJobInputConfig(_, context),
    JobArn: __expectString,
    JobDescription: __expectString,
    JobName: __expectString,
    JobType: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RoleArn: __expectString,
    Status: __expectString,
    StoppingConditions: (_: any) => de_RecommendationJobStoppingConditions(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeLabelingJobResponse
 */
const de_DescribeLabelingJobResponse = (output: any, context: __SerdeContext): DescribeLabelingJobResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    HumanTaskConfig: (_: any) => de_HumanTaskConfig(_, context),
    InputConfig: (_: any) => de_LabelingJobInputConfig(_, context),
    JobReferenceCode: __expectString,
    LabelAttributeName: __expectString,
    LabelCategoryConfigS3Uri: __expectString,
    LabelCounters: (_: any) => de_LabelCounters(_, context),
    LabelingJobAlgorithmsConfig: (_: any) => de_LabelingJobAlgorithmsConfig(_, context),
    LabelingJobArn: __expectString,
    LabelingJobName: __expectString,
    LabelingJobOutput: (_: any) => de_LabelingJobOutput(_, context),
    LabelingJobStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OutputConfig: (_: any) => de_LabelingJobOutputConfig(_, context),
    RoleArn: __expectString,
    StoppingConditions: (_: any) => de_LabelingJobStoppingConditions(_, context),
    Tags: (_: any) => de_TagList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeLineageGroupResponse
 */
const de_DescribeLineageGroupResponse = (output: any, context: __SerdeContext): DescribeLineageGroupResponse => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LineageGroupArn: __expectString,
    LineageGroupName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeMlflowTrackingServerResponse
 */
const de_DescribeMlflowTrackingServerResponse = (
  output: any,
  context: __SerdeContext
): DescribeMlflowTrackingServerResponse => {
  return take(output, {
    ArtifactStoreUri: __expectString,
    AutomaticModelRegistration: __expectBoolean,
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IsActive: __expectString,
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MlflowVersion: __expectString,
    RoleArn: __expectString,
    TrackingServerArn: __expectString,
    TrackingServerName: __expectString,
    TrackingServerSize: __expectString,
    TrackingServerStatus: __expectString,
    TrackingServerUrl: __expectString,
    WeeklyMaintenanceWindowStart: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeModelBiasJobDefinitionResponse
 */
const de_DescribeModelBiasJobDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DescribeModelBiasJobDefinitionResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobDefinitionArn: __expectString,
    JobDefinitionName: __expectString,
    JobResources: (_: any) => de_MonitoringResources(_, context),
    ModelBiasAppSpecification: (_: any) => de_ModelBiasAppSpecification(_, context),
    ModelBiasBaselineConfig: (_: any) => de_ModelBiasBaselineConfig(_, context),
    ModelBiasJobInput: (_: any) => de_ModelBiasJobInput(_, context),
    ModelBiasJobOutputConfig: (_: any) => de_MonitoringOutputConfig(_, context),
    NetworkConfig: (_: any) => de_MonitoringNetworkConfig(_, context),
    RoleArn: __expectString,
    StoppingCondition: (_: any) => de_MonitoringStoppingCondition(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeModelCardExportJobResponse
 */
const de_DescribeModelCardExportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeModelCardExportJobResponse => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExportArtifacts: (_: any) => de_ModelCardExportArtifacts(_, context),
    FailureReason: __expectString,
    LastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelCardExportJobArn: __expectString,
    ModelCardExportJobName: __expectString,
    ModelCardName: __expectString,
    ModelCardVersion: __expectInt32,
    OutputConfig: (_: any) => de_ModelCardExportOutputConfig(_, context),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeModelCardResponse
 */
const de_DescribeModelCardResponse = (output: any, context: __SerdeContext): DescribeModelCardResponse => {
  return take(output, {
    Content: __expectString,
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelCardArn: __expectString,
    ModelCardName: __expectString,
    ModelCardProcessingStatus: __expectString,
    ModelCardStatus: __expectString,
    ModelCardVersion: __expectInt32,
    SecurityConfig: (_: any) => de_ModelCardSecurityConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeModelExplainabilityJobDefinitionResponse
 */
const de_DescribeModelExplainabilityJobDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DescribeModelExplainabilityJobDefinitionResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobDefinitionArn: __expectString,
    JobDefinitionName: __expectString,
    JobResources: (_: any) => de_MonitoringResources(_, context),
    ModelExplainabilityAppSpecification: (_: any) => de_ModelExplainabilityAppSpecification(_, context),
    ModelExplainabilityBaselineConfig: (_: any) => de_ModelExplainabilityBaselineConfig(_, context),
    ModelExplainabilityJobInput: (_: any) => de_ModelExplainabilityJobInput(_, context),
    ModelExplainabilityJobOutputConfig: (_: any) => de_MonitoringOutputConfig(_, context),
    NetworkConfig: (_: any) => de_MonitoringNetworkConfig(_, context),
    RoleArn: __expectString,
    StoppingCondition: (_: any) => de_MonitoringStoppingCondition(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeModelOutput
 */
const de_DescribeModelOutput = (output: any, context: __SerdeContext): DescribeModelOutput => {
  return take(output, {
    Containers: (_: any) => de_ContainerDefinitionList(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeploymentRecommendation: (_: any) => de_DeploymentRecommendation(_, context),
    EnableNetworkIsolation: __expectBoolean,
    ExecutionRoleArn: __expectString,
    InferenceExecutionConfig: (_: any) => de_InferenceExecutionConfig(_, context),
    ModelArn: __expectString,
    ModelName: __expectString,
    PrimaryContainer: (_: any) => de_ContainerDefinition(_, context),
    VpcConfig: (_: any) => de_VpcConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeModelPackageGroupOutput
 */
const de_DescribeModelPackageGroupOutput = (output: any, context: __SerdeContext): DescribeModelPackageGroupOutput => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelPackageGroupArn: __expectString,
    ModelPackageGroupDescription: __expectString,
    ModelPackageGroupName: __expectString,
    ModelPackageGroupStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeModelPackageOutput
 */
const de_DescribeModelPackageOutput = (output: any, context: __SerdeContext): DescribeModelPackageOutput => {
  return take(output, {
    AdditionalInferenceSpecifications: (_: any) => de_AdditionalInferenceSpecifications(_, context),
    ApprovalDescription: __expectString,
    CertifyForMarketplace: __expectBoolean,
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CustomerMetadataProperties: (_: any) => de_CustomerMetadataMap(_, context),
    Domain: __expectString,
    DriftCheckBaselines: (_: any) => de_DriftCheckBaselines(_, context),
    InferenceSpecification: (_: any) => de_InferenceSpecification(_, context),
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MetadataProperties: (_: any) => de_MetadataProperties(_, context),
    ModelApprovalStatus: __expectString,
    ModelCard: (_: any) => de_ModelPackageModelCard(_, context),
    ModelMetrics: (_: any) => de_ModelMetrics(_, context),
    ModelPackageArn: __expectString,
    ModelPackageDescription: __expectString,
    ModelPackageGroupName: __expectString,
    ModelPackageName: __expectString,
    ModelPackageStatus: __expectString,
    ModelPackageStatusDetails: (_: any) => de_ModelPackageStatusDetails(_, context),
    ModelPackageVersion: __expectInt32,
    SamplePayloadUrl: __expectString,
    SecurityConfig: (_: any) => de_ModelPackageSecurityConfig(_, context),
    SkipModelValidation: __expectString,
    SourceAlgorithmSpecification: (_: any) => de_SourceAlgorithmSpecification(_, context),
    SourceUri: __expectString,
    Task: __expectString,
    ValidationSpecification: (_: any) => de_ModelPackageValidationSpecification(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeModelQualityJobDefinitionResponse
 */
const de_DescribeModelQualityJobDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DescribeModelQualityJobDefinitionResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobDefinitionArn: __expectString,
    JobDefinitionName: __expectString,
    JobResources: (_: any) => de_MonitoringResources(_, context),
    ModelQualityAppSpecification: (_: any) => de_ModelQualityAppSpecification(_, context),
    ModelQualityBaselineConfig: (_: any) => de_ModelQualityBaselineConfig(_, context),
    ModelQualityJobInput: (_: any) => de_ModelQualityJobInput(_, context),
    ModelQualityJobOutputConfig: (_: any) => de_MonitoringOutputConfig(_, context),
    NetworkConfig: (_: any) => de_MonitoringNetworkConfig(_, context),
    RoleArn: __expectString,
    StoppingCondition: (_: any) => de_MonitoringStoppingCondition(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeMonitoringScheduleResponse
 */
const de_DescribeMonitoringScheduleResponse = (
  output: any,
  context: __SerdeContext
): DescribeMonitoringScheduleResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointName: __expectString,
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastMonitoringExecutionSummary: (_: any) => de_MonitoringExecutionSummary(_, context),
    MonitoringScheduleArn: __expectString,
    MonitoringScheduleConfig: (_: any) => de_MonitoringScheduleConfig(_, context),
    MonitoringScheduleName: __expectString,
    MonitoringScheduleStatus: __expectString,
    MonitoringType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigOutput
 */
const de_DescribeNotebookInstanceLifecycleConfigOutput = (
  output: any,
  context: __SerdeContext
): DescribeNotebookInstanceLifecycleConfigOutput => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NotebookInstanceLifecycleConfigArn: __expectString,
    NotebookInstanceLifecycleConfigName: __expectString,
    OnCreate: (_: any) => de_NotebookInstanceLifecycleConfigList(_, context),
    OnStart: (_: any) => de_NotebookInstanceLifecycleConfigList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeNotebookInstanceOutput
 */
const de_DescribeNotebookInstanceOutput = (output: any, context: __SerdeContext): DescribeNotebookInstanceOutput => {
  return take(output, {
    AcceleratorTypes: (_: any) => de_NotebookInstanceAcceleratorTypes(_, context),
    AdditionalCodeRepositories: (_: any) => de_AdditionalCodeRepositoryNamesOrUrls(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultCodeRepository: __expectString,
    DirectInternetAccess: __expectString,
    FailureReason: __expectString,
    InstanceMetadataServiceConfiguration: (_: any) => de_InstanceMetadataServiceConfiguration(_, context),
    InstanceType: __expectString,
    KmsKeyId: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NetworkInterfaceId: __expectString,
    NotebookInstanceArn: __expectString,
    NotebookInstanceLifecycleConfigName: __expectString,
    NotebookInstanceName: __expectString,
    NotebookInstanceStatus: __expectString,
    PlatformIdentifier: __expectString,
    RoleArn: __expectString,
    RootAccess: __expectString,
    SecurityGroups: (_: any) => de_SecurityGroupIds(_, context),
    SubnetId: __expectString,
    Url: __expectString,
    VolumeSizeInGB: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribePipelineDefinitionForExecutionResponse
 */
const de_DescribePipelineDefinitionForExecutionResponse = (
  output: any,
  context: __SerdeContext
): DescribePipelineDefinitionForExecutionResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PipelineDefinition: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribePipelineExecutionResponse
 */
const de_DescribePipelineExecutionResponse = (
  output: any,
  context: __SerdeContext
): DescribePipelineExecutionResponse => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ParallelismConfiguration: (_: any) => de_ParallelismConfiguration(_, context),
    PipelineArn: __expectString,
    PipelineExecutionArn: __expectString,
    PipelineExecutionDescription: __expectString,
    PipelineExecutionDisplayName: __expectString,
    PipelineExecutionStatus: __expectString,
    PipelineExperimentConfig: (_: any) => de_PipelineExperimentConfig(_, context),
    SelectiveExecutionConfig: (_: any) => de_SelectiveExecutionConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribePipelineResponse
 */
const de_DescribePipelineResponse = (output: any, context: __SerdeContext): DescribePipelineResponse => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastRunTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ParallelismConfiguration: (_: any) => de_ParallelismConfiguration(_, context),
    PipelineArn: __expectString,
    PipelineDefinition: __expectString,
    PipelineDescription: __expectString,
    PipelineDisplayName: __expectString,
    PipelineName: __expectString,
    PipelineStatus: __expectString,
    RoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeProcessingJobResponse
 */
const de_DescribeProcessingJobResponse = (output: any, context: __SerdeContext): DescribeProcessingJobResponse => {
  return take(output, {
    AppSpecification: (_: any) => de_AppSpecification(_, context),
    AutoMLJobArn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Environment: (_: any) => de_ProcessingEnvironmentMap(_, context),
    ExitMessage: __expectString,
    ExperimentConfig: (_: any) => de_ExperimentConfig(_, context),
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MonitoringScheduleArn: __expectString,
    NetworkConfig: (_: any) => de_NetworkConfig(_, context),
    ProcessingEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProcessingInputs: (_: any) => de_ProcessingInputs(_, context),
    ProcessingJobArn: __expectString,
    ProcessingJobName: __expectString,
    ProcessingJobStatus: __expectString,
    ProcessingOutputConfig: (_: any) => de_ProcessingOutputConfig(_, context),
    ProcessingResources: (_: any) => de_ProcessingResources(_, context),
    ProcessingStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RoleArn: __expectString,
    StoppingCondition: (_: any) => de_ProcessingStoppingCondition(_, context),
    TrainingJobArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeProjectOutput
 */
const de_DescribeProjectOutput = (output: any, context: __SerdeContext): DescribeProjectOutput => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProjectArn: __expectString,
    ProjectDescription: __expectString,
    ProjectId: __expectString,
    ProjectName: __expectString,
    ProjectStatus: __expectString,
    ServiceCatalogProvisionedProductDetails: (_: any) => de_ServiceCatalogProvisionedProductDetails(_, context),
    ServiceCatalogProvisioningDetails: (_: any) => de_ServiceCatalogProvisioningDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeSpaceResponse
 */
const de_DescribeSpaceResponse = (output: any, context: __SerdeContext): DescribeSpaceResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainId: __expectString,
    FailureReason: __expectString,
    HomeEfsFileSystemUid: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OwnershipSettings: (_: any) => de_OwnershipSettings(_, context),
    SpaceArn: __expectString,
    SpaceDisplayName: __expectString,
    SpaceName: __expectString,
    SpaceSettings: (_: any) => de_SpaceSettings(_, context),
    SpaceSharingSettings: (_: any) => de_SpaceSharingSettings(_, context),
    Status: __expectString,
    Url: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeStudioLifecycleConfigResponse
 */
const de_DescribeStudioLifecycleConfigResponse = (
  output: any,
  context: __SerdeContext
): DescribeStudioLifecycleConfigResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StudioLifecycleConfigAppType: __expectString,
    StudioLifecycleConfigArn: __expectString,
    StudioLifecycleConfigContent: __expectString,
    StudioLifecycleConfigName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeSubscribedWorkteamResponse
 */
const de_DescribeSubscribedWorkteamResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubscribedWorkteamResponse => {
  return take(output, {
    SubscribedWorkteam: (_: any) => de_SubscribedWorkteam(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTrainingJobResponse
 */
const de_DescribeTrainingJobResponse = (output: any, context: __SerdeContext): DescribeTrainingJobResponse => {
  return take(output, {
    AlgorithmSpecification: (_: any) => de_AlgorithmSpecification(_, context),
    AutoMLJobArn: __expectString,
    BillableTimeInSeconds: __expectInt32,
    CheckpointConfig: (_: any) => de_CheckpointConfig(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DebugHookConfig: (_: any) => de_DebugHookConfig(_, context),
    DebugRuleConfigurations: (_: any) => de_DebugRuleConfigurations(_, context),
    DebugRuleEvaluationStatuses: (_: any) => de_DebugRuleEvaluationStatuses(_, context),
    EnableInterContainerTrafficEncryption: __expectBoolean,
    EnableManagedSpotTraining: __expectBoolean,
    EnableNetworkIsolation: __expectBoolean,
    Environment: (_: any) => de_TrainingEnvironmentMap(_, context),
    ExperimentConfig: (_: any) => de_ExperimentConfig(_, context),
    FailureReason: __expectString,
    FinalMetricDataList: (_: any) => de_FinalMetricDataList(_, context),
    HyperParameters: (_: any) => de_HyperParameters(_, context),
    InfraCheckConfig: (_: any) => de_InfraCheckConfig(_, context),
    InputDataConfig: (_: any) => de_InputDataConfig(_, context),
    LabelingJobArn: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelArtifacts: (_: any) => de_ModelArtifacts(_, context),
    OutputDataConfig: (_: any) => de_OutputDataConfig(_, context),
    ProfilerConfig: (_: any) => de_ProfilerConfig(_, context),
    ProfilerRuleConfigurations: (_: any) => de_ProfilerRuleConfigurations(_, context),
    ProfilerRuleEvaluationStatuses: (_: any) => de_ProfilerRuleEvaluationStatuses(_, context),
    ProfilingStatus: __expectString,
    RemoteDebugConfig: (_: any) => de_RemoteDebugConfig(_, context),
    ResourceConfig: (_: any) => de_ResourceConfig(_, context),
    RetryStrategy: (_: any) => de_RetryStrategy(_, context),
    RoleArn: __expectString,
    SecondaryStatus: __expectString,
    SecondaryStatusTransitions: (_: any) => de_SecondaryStatusTransitions(_, context),
    StoppingCondition: (_: any) => de_StoppingCondition(_, context),
    TensorBoardOutputConfig: (_: any) => de_TensorBoardOutputConfig(_, context),
    TrainingEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingJobArn: __expectString,
    TrainingJobName: __expectString,
    TrainingJobStatus: __expectString,
    TrainingStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingTimeInSeconds: __expectInt32,
    TuningJobArn: __expectString,
    VpcConfig: (_: any) => de_VpcConfig(_, context),
    WarmPoolStatus: (_: any) => de_WarmPoolStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTransformJobResponse
 */
const de_DescribeTransformJobResponse = (output: any, context: __SerdeContext): DescribeTransformJobResponse => {
  return take(output, {
    AutoMLJobArn: __expectString,
    BatchStrategy: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataCaptureConfig: (_: any) => de_BatchDataCaptureConfig(_, context),
    DataProcessing: (_: any) => de_DataProcessing(_, context),
    Environment: (_: any) => de_TransformEnvironmentMap(_, context),
    ExperimentConfig: (_: any) => de_ExperimentConfig(_, context),
    FailureReason: __expectString,
    LabelingJobArn: __expectString,
    MaxConcurrentTransforms: __expectInt32,
    MaxPayloadInMB: __expectInt32,
    ModelClientConfig: (_: any) => de_ModelClientConfig(_, context),
    ModelName: __expectString,
    TransformEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TransformInput: (_: any) => de_TransformInput(_, context),
    TransformJobArn: __expectString,
    TransformJobName: __expectString,
    TransformJobStatus: __expectString,
    TransformOutput: (_: any) => de_TransformOutput(_, context),
    TransformResources: (_: any) => de_TransformResources(_, context),
    TransformStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTrialComponentResponse
 */
const de_DescribeTrialComponentResponse = (output: any, context: __SerdeContext): DescribeTrialComponentResponse => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputArtifacts: (_: any) => de_TrialComponentArtifacts(_, context),
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LineageGroupArn: __expectString,
    MetadataProperties: (_: any) => de_MetadataProperties(_, context),
    Metrics: (_: any) => de_TrialComponentMetricSummaries(_, context),
    OutputArtifacts: (_: any) => de_TrialComponentArtifacts(_, context),
    Parameters: (_: any) => de_TrialComponentParameters(_, context),
    Source: (_: any) => de_TrialComponentSource(_, context),
    Sources: (_: any) => de_TrialComponentSources(_, context),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: (_: any) => de_TrialComponentStatus(_, context),
    TrialComponentArn: __expectString,
    TrialComponentName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTrialResponse
 */
const de_DescribeTrialResponse = (output: any, context: __SerdeContext): DescribeTrialResponse => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    ExperimentName: __expectString,
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MetadataProperties: (_: any) => de_MetadataProperties(_, context),
    Source: (_: any) => de_TrialSource(_, context),
    TrialArn: __expectString,
    TrialName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeUserProfileResponse
 */
const de_DescribeUserProfileResponse = (output: any, context: __SerdeContext): DescribeUserProfileResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainId: __expectString,
    FailureReason: __expectString,
    HomeEfsFileSystemUid: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SingleSignOnUserIdentifier: __expectString,
    SingleSignOnUserValue: __expectString,
    Status: __expectString,
    UserProfileArn: __expectString,
    UserProfileName: __expectString,
    UserSettings: (_: any) => de_UserSettings(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeWorkforceResponse
 */
const de_DescribeWorkforceResponse = (output: any, context: __SerdeContext): DescribeWorkforceResponse => {
  return take(output, {
    Workforce: (_: any) => de_Workforce(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeWorkteamResponse
 */
const de_DescribeWorkteamResponse = (output: any, context: __SerdeContext): DescribeWorkteamResponse => {
  return take(output, {
    Workteam: (_: any) => de_Workteam(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeviceDeploymentSummaries
 */
const de_DeviceDeploymentSummaries = (output: any, context: __SerdeContext): DeviceDeploymentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeviceDeploymentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceDeploymentSummary
 */
const de_DeviceDeploymentSummary = (output: any, context: __SerdeContext): DeviceDeploymentSummary => {
  return take(output, {
    DeployedStageName: __expectString,
    DeploymentStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DeviceArn: __expectString,
    DeviceDeploymentStatus: __expectString,
    DeviceDeploymentStatusMessage: __expectString,
    DeviceFleetName: __expectString,
    DeviceName: __expectString,
    EdgeDeploymentPlanArn: __expectString,
    EdgeDeploymentPlanName: __expectString,
    StageName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeviceFleetSummaries
 */
const de_DeviceFleetSummaries = (output: any, context: __SerdeContext): DeviceFleetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeviceFleetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceFleetSummary
 */
const de_DeviceFleetSummary = (output: any, context: __SerdeContext): DeviceFleetSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeviceFleetArn: __expectString,
    DeviceFleetName: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DeviceNames
 */
const de_DeviceNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceSelectionConfig
 */
const de_DeviceSelectionConfig = (output: any, context: __SerdeContext): DeviceSelectionConfig => {
  return take(output, {
    DeviceNameContains: __expectString,
    DeviceNames: (_: any) => de_DeviceNames(_, context),
    DeviceSubsetType: __expectString,
    Percentage: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1DeviceStats
 */
const de_DeviceStats = (output: any, context: __SerdeContext): DeviceStats => {
  return take(output, {
    ConnectedDeviceCount: __expectLong,
    RegisteredDeviceCount: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1DeviceSummaries
 */
const de_DeviceSummaries = (output: any, context: __SerdeContext): DeviceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeviceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceSummary
 */
const de_DeviceSummary = (output: any, context: __SerdeContext): DeviceSummary => {
  return take(output, {
    AgentVersion: __expectString,
    Description: __expectString,
    DeviceArn: __expectString,
    DeviceFleetName: __expectString,
    DeviceName: __expectString,
    IotThingName: __expectString,
    LatestHeartbeat: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Models: (_: any) => de_EdgeModelSummaries(_, context),
    RegistrationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DirectDeploySettings
 */
const de_DirectDeploySettings = (output: any, context: __SerdeContext): DirectDeploySettings => {
  return take(output, {
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DisableSagemakerServicecatalogPortfolioOutput
 */
const de_DisableSagemakerServicecatalogPortfolioOutput = (
  output: any,
  context: __SerdeContext
): DisableSagemakerServicecatalogPortfolioOutput => {
  return take(output, {}) as any;
};

/**
 * deserializeAws_json1_1DisassociateTrialComponentResponse
 */
const de_DisassociateTrialComponentResponse = (
  output: any,
  context: __SerdeContext
): DisassociateTrialComponentResponse => {
  return take(output, {
    TrialArn: __expectString,
    TrialComponentArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DockerSettings
 */
const de_DockerSettings = (output: any, context: __SerdeContext): DockerSettings => {
  return take(output, {
    EnableDockerAccess: __expectString,
    VpcOnlyTrustedAccounts: (_: any) => de_VpcOnlyTrustedAccounts(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DomainDetails
 */
const de_DomainDetails = (output: any, context: __SerdeContext): DomainDetails => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainArn: __expectString,
    DomainId: __expectString,
    DomainName: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    Url: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DomainList
 */
const de_DomainList = (output: any, context: __SerdeContext): DomainDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DomainSecurityGroupIds
 */
const de_DomainSecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DomainSettings
 */
const de_DomainSettings = (output: any, context: __SerdeContext): DomainSettings => {
  return take(output, {
    DockerSettings: (_: any) => de_DockerSettings(_, context),
    ExecutionRoleIdentityConfig: __expectString,
    RStudioServerProDomainSettings: (_: any) => de_RStudioServerProDomainSettings(_, context),
    SecurityGroupIds: (_: any) => de_DomainSecurityGroupIds(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DriftCheckBaselines
 */
const de_DriftCheckBaselines = (output: any, context: __SerdeContext): DriftCheckBaselines => {
  return take(output, {
    Bias: (_: any) => de_DriftCheckBias(_, context),
    Explainability: (_: any) => de_DriftCheckExplainability(_, context),
    ModelDataQuality: (_: any) => de_DriftCheckModelDataQuality(_, context),
    ModelQuality: (_: any) => de_DriftCheckModelQuality(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DriftCheckBias
 */
const de_DriftCheckBias = (output: any, context: __SerdeContext): DriftCheckBias => {
  return take(output, {
    ConfigFile: (_: any) => de_FileSource(_, context),
    PostTrainingConstraints: (_: any) => de_MetricsSource(_, context),
    PreTrainingConstraints: (_: any) => de_MetricsSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DriftCheckExplainability
 */
const de_DriftCheckExplainability = (output: any, context: __SerdeContext): DriftCheckExplainability => {
  return take(output, {
    ConfigFile: (_: any) => de_FileSource(_, context),
    Constraints: (_: any) => de_MetricsSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DriftCheckModelDataQuality
 */
const de_DriftCheckModelDataQuality = (output: any, context: __SerdeContext): DriftCheckModelDataQuality => {
  return take(output, {
    Constraints: (_: any) => de_MetricsSource(_, context),
    Statistics: (_: any) => de_MetricsSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DriftCheckModelQuality
 */
const de_DriftCheckModelQuality = (output: any, context: __SerdeContext): DriftCheckModelQuality => {
  return take(output, {
    Constraints: (_: any) => de_MetricsSource(_, context),
    Statistics: (_: any) => de_MetricsSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DynamicScalingConfiguration
 */
const de_DynamicScalingConfiguration = (output: any, context: __SerdeContext): DynamicScalingConfiguration => {
  return take(output, {
    MaxCapacity: __expectInt32,
    MinCapacity: __expectInt32,
    ScaleInCooldown: __expectInt32,
    ScaleOutCooldown: __expectInt32,
    ScalingPolicies: (_: any) => de_ScalingPolicies(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1EbsStorageSettings
 */
const de_EbsStorageSettings = (output: any, context: __SerdeContext): EbsStorageSettings => {
  return take(output, {
    EbsVolumeSizeInGb: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1Edge
 */
const de_Edge = (output: any, context: __SerdeContext): Edge => {
  return take(output, {
    AssociationType: __expectString,
    DestinationArn: __expectString,
    SourceArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EdgeDeploymentConfig
 */
const de_EdgeDeploymentConfig = (output: any, context: __SerdeContext): EdgeDeploymentConfig => {
  return take(output, {
    FailureHandlingPolicy: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EdgeDeploymentModelConfig
 */
const de_EdgeDeploymentModelConfig = (output: any, context: __SerdeContext): EdgeDeploymentModelConfig => {
  return take(output, {
    EdgePackagingJobName: __expectString,
    ModelHandle: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EdgeDeploymentModelConfigs
 */
const de_EdgeDeploymentModelConfigs = (output: any, context: __SerdeContext): EdgeDeploymentModelConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EdgeDeploymentModelConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EdgeDeploymentPlanSummaries
 */
const de_EdgeDeploymentPlanSummaries = (output: any, context: __SerdeContext): EdgeDeploymentPlanSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EdgeDeploymentPlanSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EdgeDeploymentPlanSummary
 */
const de_EdgeDeploymentPlanSummary = (output: any, context: __SerdeContext): EdgeDeploymentPlanSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeviceFleetName: __expectString,
    EdgeDeploymentFailed: __expectInt32,
    EdgeDeploymentPending: __expectInt32,
    EdgeDeploymentPlanArn: __expectString,
    EdgeDeploymentPlanName: __expectString,
    EdgeDeploymentSuccess: __expectInt32,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1EdgeDeploymentStatus
 */
const de_EdgeDeploymentStatus = (output: any, context: __SerdeContext): EdgeDeploymentStatus => {
  return take(output, {
    EdgeDeploymentFailedInStage: __expectInt32,
    EdgeDeploymentPendingInStage: __expectInt32,
    EdgeDeploymentStageStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EdgeDeploymentStatusMessage: __expectString,
    EdgeDeploymentSuccessInStage: __expectInt32,
    StageStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EdgeModel
 */
const de_EdgeModel = (output: any, context: __SerdeContext): EdgeModel => {
  return take(output, {
    LatestInference: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestSampleTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelName: __expectString,
    ModelVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EdgeModels
 */
const de_EdgeModels = (output: any, context: __SerdeContext): EdgeModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EdgeModel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EdgeModelStat
 */
const de_EdgeModelStat = (output: any, context: __SerdeContext): EdgeModelStat => {
  return take(output, {
    ActiveDeviceCount: __expectLong,
    ConnectedDeviceCount: __expectLong,
    ModelName: __expectString,
    ModelVersion: __expectString,
    OfflineDeviceCount: __expectLong,
    SamplingDeviceCount: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1EdgeModelStats
 */
const de_EdgeModelStats = (output: any, context: __SerdeContext): EdgeModelStat[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EdgeModelStat(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EdgeModelSummaries
 */
const de_EdgeModelSummaries = (output: any, context: __SerdeContext): EdgeModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EdgeModelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EdgeModelSummary
 */
const de_EdgeModelSummary = (output: any, context: __SerdeContext): EdgeModelSummary => {
  return take(output, {
    ModelName: __expectString,
    ModelVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EdgeOutputConfig
 */
const de_EdgeOutputConfig = (output: any, context: __SerdeContext): EdgeOutputConfig => {
  return take(output, {
    KmsKeyId: __expectString,
    PresetDeploymentConfig: __expectString,
    PresetDeploymentType: __expectString,
    S3OutputLocation: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EdgePackagingJobSummaries
 */
const de_EdgePackagingJobSummaries = (output: any, context: __SerdeContext): EdgePackagingJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EdgePackagingJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EdgePackagingJobSummary
 */
const de_EdgePackagingJobSummary = (output: any, context: __SerdeContext): EdgePackagingJobSummary => {
  return take(output, {
    CompilationJobName: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EdgePackagingJobArn: __expectString,
    EdgePackagingJobName: __expectString,
    EdgePackagingJobStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelName: __expectString,
    ModelVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EdgePresetDeploymentOutput
 */
const de_EdgePresetDeploymentOutput = (output: any, context: __SerdeContext): EdgePresetDeploymentOutput => {
  return take(output, {
    Artifact: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Edges
 */
const de_Edges = (output: any, context: __SerdeContext): Edge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Edge(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EFSFileSystem
 */
const de_EFSFileSystem = (output: any, context: __SerdeContext): EFSFileSystem => {
  return take(output, {
    FileSystemId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EFSFileSystemConfig
 */
const de_EFSFileSystemConfig = (output: any, context: __SerdeContext): EFSFileSystemConfig => {
  return take(output, {
    FileSystemId: __expectString,
    FileSystemPath: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EMRStepMetadata
 */
const de_EMRStepMetadata = (output: any, context: __SerdeContext): EMRStepMetadata => {
  return take(output, {
    ClusterId: __expectString,
    LogFilePath: __expectString,
    StepId: __expectString,
    StepName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EnableSagemakerServicecatalogPortfolioOutput
 */
const de_EnableSagemakerServicecatalogPortfolioOutput = (
  output: any,
  context: __SerdeContext
): EnableSagemakerServicecatalogPortfolioOutput => {
  return take(output, {}) as any;
};

/**
 * deserializeAws_json1_1Endpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataCaptureConfig: (_: any) => de_DataCaptureConfigSummary(_, context),
    EndpointArn: __expectString,
    EndpointConfigName: __expectString,
    EndpointName: __expectString,
    EndpointStatus: __expectString,
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MonitoringSchedules: (_: any) => de_MonitoringScheduleList(_, context),
    ProductionVariants: (_: any) => de_ProductionVariantSummaryList(_, context),
    ShadowProductionVariants: (_: any) => de_ProductionVariantSummaryList(_, context),
    Tags: (_: any) => de_TagList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1EndpointConfigSummary
 */
const de_EndpointConfigSummary = (output: any, context: __SerdeContext): EndpointConfigSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointConfigArn: __expectString,
    EndpointConfigName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EndpointConfigSummaryList
 */
const de_EndpointConfigSummaryList = (output: any, context: __SerdeContext): EndpointConfigSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EndpointConfigSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EndpointInfo
 */
const de_EndpointInfo = (output: any, context: __SerdeContext): EndpointInfo => {
  return take(output, {
    EndpointName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EndpointInput
 */
const de_EndpointInput = (output: any, context: __SerdeContext): EndpointInput => {
  return take(output, {
    EndTimeOffset: __expectString,
    EndpointName: __expectString,
    ExcludeFeaturesAttribute: __expectString,
    FeaturesAttribute: __expectString,
    InferenceAttribute: __expectString,
    LocalPath: __expectString,
    ProbabilityAttribute: __expectString,
    ProbabilityThresholdAttribute: __limitedParseDouble,
    S3DataDistributionType: __expectString,
    S3InputMode: __expectString,
    StartTimeOffset: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EndpointInputConfiguration
 */
const de_EndpointInputConfiguration = (output: any, context: __SerdeContext): EndpointInputConfiguration => {
  return take(output, {
    EnvironmentParameterRanges: (_: any) => de_EnvironmentParameterRanges(_, context),
    InferenceSpecificationName: __expectString,
    InstanceType: __expectString,
    ServerlessConfig: (_: any) => de_ProductionVariantServerlessConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1EndpointInputConfigurations
 */
const de_EndpointInputConfigurations = (output: any, context: __SerdeContext): EndpointInputConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EndpointInputConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EndpointMetadata
 */
const de_EndpointMetadata = (output: any, context: __SerdeContext): EndpointMetadata => {
  return take(output, {
    EndpointConfigName: __expectString,
    EndpointName: __expectString,
    EndpointStatus: __expectString,
    FailureReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EndpointOutputConfiguration
 */
const de_EndpointOutputConfiguration = (output: any, context: __SerdeContext): EndpointOutputConfiguration => {
  return take(output, {
    EndpointName: __expectString,
    InitialInstanceCount: __expectInt32,
    InstanceType: __expectString,
    ServerlessConfig: (_: any) => de_ProductionVariantServerlessConfig(_, context),
    VariantName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EndpointPerformance
 */
const de_EndpointPerformance = (output: any, context: __SerdeContext): EndpointPerformance => {
  return take(output, {
    EndpointInfo: (_: any) => de_EndpointInfo(_, context),
    Metrics: (_: any) => de_InferenceMetrics(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1EndpointPerformances
 */
const de_EndpointPerformances = (output: any, context: __SerdeContext): EndpointPerformance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EndpointPerformance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Endpoints
 */
const de_Endpoints = (output: any, context: __SerdeContext): EndpointInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EndpointInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EndpointSummary
 */
const de_EndpointSummary = (output: any, context: __SerdeContext): EndpointSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointArn: __expectString,
    EndpointName: __expectString,
    EndpointStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1EndpointSummaryList
 */
const de_EndpointSummaryList = (output: any, context: __SerdeContext): EndpointSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EndpointSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EnvironmentMap
 */
const de_EnvironmentMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_json1_1EnvironmentParameter
 */
const de_EnvironmentParameter = (output: any, context: __SerdeContext): EnvironmentParameter => {
  return take(output, {
    Key: __expectString,
    Value: __expectString,
    ValueType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EnvironmentParameterRanges
 */
const de_EnvironmentParameterRanges = (output: any, context: __SerdeContext): EnvironmentParameterRanges => {
  return take(output, {
    CategoricalParameterRanges: (_: any) => de_CategoricalParameters(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1EnvironmentParameters
 */
const de_EnvironmentParameters = (output: any, context: __SerdeContext): EnvironmentParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Experiment
 */
const de_Experiment = (output: any, context: __SerdeContext): Experiment => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    ExperimentArn: __expectString,
    ExperimentName: __expectString,
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Source: (_: any) => de_ExperimentSource(_, context),
    Tags: (_: any) => de_TagList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ExperimentConfig
 */
const de_ExperimentConfig = (output: any, context: __SerdeContext): ExperimentConfig => {
  return take(output, {
    ExperimentName: __expectString,
    RunName: __expectString,
    TrialComponentDisplayName: __expectString,
    TrialName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ExperimentSource
 */
const de_ExperimentSource = (output: any, context: __SerdeContext): ExperimentSource => {
  return take(output, {
    SourceArn: __expectString,
    SourceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ExperimentSummaries
 */
const de_ExperimentSummaries = (output: any, context: __SerdeContext): ExperimentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExperimentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExperimentSummary
 */
const de_ExperimentSummary = (output: any, context: __SerdeContext): ExperimentSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    ExperimentArn: __expectString,
    ExperimentName: __expectString,
    ExperimentSource: (_: any) => de_ExperimentSource(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1Explainability
 */
const de_Explainability = (output: any, context: __SerdeContext): Explainability => {
  return take(output, {
    Report: (_: any) => de_MetricsSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ExplainerConfig
 */
const de_ExplainerConfig = (output: any, context: __SerdeContext): ExplainerConfig => {
  return take(output, {
    ClarifyExplainerConfig: (_: any) => de_ClarifyExplainerConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1FailStepMetadata
 */
const de_FailStepMetadata = (output: any, context: __SerdeContext): FailStepMetadata => {
  return take(output, {
    ErrorMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1FeatureDefinition
 */
const de_FeatureDefinition = (output: any, context: __SerdeContext): FeatureDefinition => {
  return take(output, {
    CollectionConfig: (_: any) => de_CollectionConfig(__expectUnion(_), context),
    CollectionType: __expectString,
    FeatureName: __expectString,
    FeatureType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1FeatureDefinitions
 */
const de_FeatureDefinitions = (output: any, context: __SerdeContext): FeatureDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FeatureDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FeatureGroup
 */
const de_FeatureGroup = (output: any, context: __SerdeContext): FeatureGroup => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EventTimeFeatureName: __expectString,
    FailureReason: __expectString,
    FeatureDefinitions: (_: any) => de_FeatureDefinitions(_, context),
    FeatureGroupArn: __expectString,
    FeatureGroupName: __expectString,
    FeatureGroupStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdateStatus: (_: any) => de_LastUpdateStatus(_, context),
    OfflineStoreConfig: (_: any) => de_OfflineStoreConfig(_, context),
    OfflineStoreStatus: (_: any) => de_OfflineStoreStatus(_, context),
    OnlineStoreConfig: (_: any) => de_OnlineStoreConfig(_, context),
    RecordIdentifierFeatureName: __expectString,
    RoleArn: __expectString,
    Tags: (_: any) => de_TagList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1FeatureGroupSummaries
 */
const de_FeatureGroupSummaries = (output: any, context: __SerdeContext): FeatureGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FeatureGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FeatureGroupSummary
 */
const de_FeatureGroupSummary = (output: any, context: __SerdeContext): FeatureGroupSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FeatureGroupArn: __expectString,
    FeatureGroupName: __expectString,
    FeatureGroupStatus: __expectString,
    OfflineStoreStatus: (_: any) => de_OfflineStoreStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1FeatureMetadata
 */
const de_FeatureMetadata = (output: any, context: __SerdeContext): FeatureMetadata => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    FeatureGroupArn: __expectString,
    FeatureGroupName: __expectString,
    FeatureName: __expectString,
    FeatureType: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Parameters: (_: any) => de_FeatureParameters(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1FeatureParameter
 */
const de_FeatureParameter = (output: any, context: __SerdeContext): FeatureParameter => {
  return take(output, {
    Key: __expectString,
    Value: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1FeatureParameters
 */
const de_FeatureParameters = (output: any, context: __SerdeContext): FeatureParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FeatureParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FileSource
 */
const de_FileSource = (output: any, context: __SerdeContext): FileSource => {
  return take(output, {
    ContentDigest: __expectString,
    ContentType: __expectString,
    S3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1FileSystemConfig
 */
const de_FileSystemConfig = (output: any, context: __SerdeContext): FileSystemConfig => {
  return take(output, {
    DefaultGid: __expectInt32,
    DefaultUid: __expectInt32,
    MountPath: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1FileSystemDataSource
 */
const de_FileSystemDataSource = (output: any, context: __SerdeContext): FileSystemDataSource => {
  return take(output, {
    DirectoryPath: __expectString,
    FileSystemAccessMode: __expectString,
    FileSystemId: __expectString,
    FileSystemType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1FillingTransformationMap
 */
const de_FillingTransformationMap = (output: any, context: __SerdeContext): Partial<Record<FillingType, string>> => {
  return Object.entries(output).reduce((acc: Partial<Record<FillingType, string>>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as FillingType] = __expectString(value) as any;
    return acc;
  }, {} as Partial<Record<FillingType, string>>);
};

/**
 * deserializeAws_json1_1FillingTransformations
 */
const de_FillingTransformations = (
  output: any,
  context: __SerdeContext
): Record<string, Partial<Record<FillingType, string>>> => {
  return Object.entries(output).reduce(
    (acc: Record<string, Partial<Record<FillingType, string>>>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as string] = de_FillingTransformationMap(value, context);
      return acc;
    },
    {} as Record<string, Partial<Record<FillingType, string>>>
  );
};

/**
 * deserializeAws_json1_1FinalAutoMLJobObjectiveMetric
 */
const de_FinalAutoMLJobObjectiveMetric = (output: any, context: __SerdeContext): FinalAutoMLJobObjectiveMetric => {
  return take(output, {
    MetricName: __expectString,
    StandardMetricName: __expectString,
    Type: __expectString,
    Value: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1FinalHyperParameterTuningJobObjectiveMetric
 */
const de_FinalHyperParameterTuningJobObjectiveMetric = (
  output: any,
  context: __SerdeContext
): FinalHyperParameterTuningJobObjectiveMetric => {
  return take(output, {
    MetricName: __expectString,
    Type: __expectString,
    Value: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1FinalMetricDataList
 */
const de_FinalMetricDataList = (output: any, context: __SerdeContext): MetricData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FlowDefinitionOutputConfig
 */
const de_FlowDefinitionOutputConfig = (output: any, context: __SerdeContext): FlowDefinitionOutputConfig => {
  return take(output, {
    KmsKeyId: __expectString,
    S3OutputPath: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1FlowDefinitionSummaries
 */
const de_FlowDefinitionSummaries = (output: any, context: __SerdeContext): FlowDefinitionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FlowDefinitionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FlowDefinitionSummary
 */
const de_FlowDefinitionSummary = (output: any, context: __SerdeContext): FlowDefinitionSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    FlowDefinitionArn: __expectString,
    FlowDefinitionName: __expectString,
    FlowDefinitionStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1FlowDefinitionTaskKeywords
 */
const de_FlowDefinitionTaskKeywords = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ForecastQuantiles
 */
const de_ForecastQuantiles = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GenerativeAiSettings
 */
const de_GenerativeAiSettings = (output: any, context: __SerdeContext): GenerativeAiSettings => {
  return take(output, {
    AmazonBedrockRoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetDeviceFleetReportResponse
 */
const de_GetDeviceFleetReportResponse = (output: any, context: __SerdeContext): GetDeviceFleetReportResponse => {
  return take(output, {
    AgentVersions: (_: any) => de_AgentVersions(_, context),
    Description: __expectString,
    DeviceFleetArn: __expectString,
    DeviceFleetName: __expectString,
    DeviceStats: (_: any) => de_DeviceStats(_, context),
    ModelStats: (_: any) => de_EdgeModelStats(_, context),
    OutputConfig: (_: any) => de_EdgeOutputConfig(_, context),
    ReportGenerated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1GetLineageGroupPolicyResponse
 */
const de_GetLineageGroupPolicyResponse = (output: any, context: __SerdeContext): GetLineageGroupPolicyResponse => {
  return take(output, {
    LineageGroupArn: __expectString,
    ResourcePolicy: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetModelPackageGroupPolicyOutput
 */
const de_GetModelPackageGroupPolicyOutput = (
  output: any,
  context: __SerdeContext
): GetModelPackageGroupPolicyOutput => {
  return take(output, {
    ResourcePolicy: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetSagemakerServicecatalogPortfolioStatusOutput
 */
const de_GetSagemakerServicecatalogPortfolioStatusOutput = (
  output: any,
  context: __SerdeContext
): GetSagemakerServicecatalogPortfolioStatusOutput => {
  return take(output, {
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetScalingConfigurationRecommendationResponse
 */
const de_GetScalingConfigurationRecommendationResponse = (
  output: any,
  context: __SerdeContext
): GetScalingConfigurationRecommendationResponse => {
  return take(output, {
    DynamicScalingConfiguration: (_: any) => de_DynamicScalingConfiguration(_, context),
    EndpointName: __expectString,
    InferenceRecommendationsJobName: __expectString,
    Metric: (_: any) => de_ScalingPolicyMetric(_, context),
    RecommendationId: __expectString,
    ScalingPolicyObjective: (_: any) => de_ScalingPolicyObjective(_, context),
    TargetCpuUtilizationPerCore: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1GetSearchSuggestionsResponse
 */
const de_GetSearchSuggestionsResponse = (output: any, context: __SerdeContext): GetSearchSuggestionsResponse => {
  return take(output, {
    PropertyNameSuggestions: (_: any) => de_PropertyNameSuggestionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GitConfig
 */
const de_GitConfig = (output: any, context: __SerdeContext): GitConfig => {
  return take(output, {
    Branch: __expectString,
    RepositoryUrl: __expectString,
    SecretArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GroupingAttributeNames
 */
const de_GroupingAttributeNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Groups
 */
const de_Groups = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HolidayConfig
 */
const de_HolidayConfig = (output: any, context: __SerdeContext): HolidayConfigAttributes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HolidayConfigAttributes(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HolidayConfigAttributes
 */
const de_HolidayConfigAttributes = (output: any, context: __SerdeContext): HolidayConfigAttributes => {
  return take(output, {
    CountryCode: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1HookParameters
 */
const de_HookParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_json1_1HubContentDependency
 */
const de_HubContentDependency = (output: any, context: __SerdeContext): HubContentDependency => {
  return take(output, {
    DependencyCopyPath: __expectString,
    DependencyOriginPath: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1HubContentDependencyList
 */
const de_HubContentDependencyList = (output: any, context: __SerdeContext): HubContentDependency[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HubContentDependency(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HubContentInfo
 */
const de_HubContentInfo = (output: any, context: __SerdeContext): HubContentInfo => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DocumentSchemaVersion: __expectString,
    HubContentArn: __expectString,
    HubContentDescription: __expectString,
    HubContentDisplayName: __expectString,
    HubContentName: __expectString,
    HubContentSearchKeywords: (_: any) => de_HubContentSearchKeywordList(_, context),
    HubContentStatus: __expectString,
    HubContentType: __expectString,
    HubContentVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1HubContentInfoList
 */
const de_HubContentInfoList = (output: any, context: __SerdeContext): HubContentInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HubContentInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HubContentSearchKeywordList
 */
const de_HubContentSearchKeywordList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HubInfo
 */
const de_HubInfo = (output: any, context: __SerdeContext): HubInfo => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HubArn: __expectString,
    HubDescription: __expectString,
    HubDisplayName: __expectString,
    HubName: __expectString,
    HubSearchKeywords: (_: any) => de_HubSearchKeywordList(_, context),
    HubStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1HubInfoList
 */
const de_HubInfoList = (output: any, context: __SerdeContext): HubInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HubInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HubS3StorageConfig
 */
const de_HubS3StorageConfig = (output: any, context: __SerdeContext): HubS3StorageConfig => {
  return take(output, {
    S3OutputPath: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1HubSearchKeywordList
 */
const de_HubSearchKeywordList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HumanLoopActivationConditionsConfig
 */
const de_HumanLoopActivationConditionsConfig = (
  output: any,
  context: __SerdeContext
): HumanLoopActivationConditionsConfig => {
  return take(output, {
    HumanLoopActivationConditions: (_: any) => new __LazyJsonString(_),
  }) as any;
};

/**
 * deserializeAws_json1_1HumanLoopActivationConfig
 */
const de_HumanLoopActivationConfig = (output: any, context: __SerdeContext): HumanLoopActivationConfig => {
  return take(output, {
    HumanLoopActivationConditionsConfig: (_: any) => de_HumanLoopActivationConditionsConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1HumanLoopConfig
 */
const de_HumanLoopConfig = (output: any, context: __SerdeContext): HumanLoopConfig => {
  return take(output, {
    HumanTaskUiArn: __expectString,
    PublicWorkforceTaskPrice: (_: any) => de_PublicWorkforceTaskPrice(_, context),
    TaskAvailabilityLifetimeInSeconds: __expectInt32,
    TaskCount: __expectInt32,
    TaskDescription: __expectString,
    TaskKeywords: (_: any) => de_FlowDefinitionTaskKeywords(_, context),
    TaskTimeLimitInSeconds: __expectInt32,
    TaskTitle: __expectString,
    WorkteamArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1HumanLoopRequestSource
 */
const de_HumanLoopRequestSource = (output: any, context: __SerdeContext): HumanLoopRequestSource => {
  return take(output, {
    AwsManagedHumanLoopRequestSource: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1HumanTaskConfig
 */
const de_HumanTaskConfig = (output: any, context: __SerdeContext): HumanTaskConfig => {
  return take(output, {
    AnnotationConsolidationConfig: (_: any) => de_AnnotationConsolidationConfig(_, context),
    MaxConcurrentTaskCount: __expectInt32,
    NumberOfHumanWorkersPerDataObject: __expectInt32,
    PreHumanTaskLambdaArn: __expectString,
    PublicWorkforceTaskPrice: (_: any) => de_PublicWorkforceTaskPrice(_, context),
    TaskAvailabilityLifetimeInSeconds: __expectInt32,
    TaskDescription: __expectString,
    TaskKeywords: (_: any) => de_TaskKeywords(_, context),
    TaskTimeLimitInSeconds: __expectInt32,
    TaskTitle: __expectString,
    UiConfig: (_: any) => de_UiConfig(_, context),
    WorkteamArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1HumanTaskUiSummaries
 */
const de_HumanTaskUiSummaries = (output: any, context: __SerdeContext): HumanTaskUiSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HumanTaskUiSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HumanTaskUiSummary
 */
const de_HumanTaskUiSummary = (output: any, context: __SerdeContext): HumanTaskUiSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HumanTaskUiArn: __expectString,
    HumanTaskUiName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1HyperbandStrategyConfig
 */
const de_HyperbandStrategyConfig = (output: any, context: __SerdeContext): HyperbandStrategyConfig => {
  return take(output, {
    MaxResource: __expectInt32,
    MinResource: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1HyperParameterAlgorithmSpecification
 */
const de_HyperParameterAlgorithmSpecification = (
  output: any,
  context: __SerdeContext
): HyperParameterAlgorithmSpecification => {
  return take(output, {
    AlgorithmName: __expectString,
    MetricDefinitions: (_: any) => de_MetricDefinitionList(_, context),
    TrainingImage: __expectString,
    TrainingInputMode: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1HyperParameters
 */
const de_HyperParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_json1_1HyperParameterSpecification
 */
const de_HyperParameterSpecification = (output: any, context: __SerdeContext): HyperParameterSpecification => {
  return take(output, {
    DefaultValue: __expectString,
    Description: __expectString,
    IsRequired: __expectBoolean,
    IsTunable: __expectBoolean,
    Name: __expectString,
    Range: (_: any) => de_ParameterRange(_, context),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1HyperParameterSpecifications
 */
const de_HyperParameterSpecifications = (output: any, context: __SerdeContext): HyperParameterSpecification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HyperParameterSpecification(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HyperParameterTrainingJobDefinition
 */
const de_HyperParameterTrainingJobDefinition = (
  output: any,
  context: __SerdeContext
): HyperParameterTrainingJobDefinition => {
  return take(output, {
    AlgorithmSpecification: (_: any) => de_HyperParameterAlgorithmSpecification(_, context),
    CheckpointConfig: (_: any) => de_CheckpointConfig(_, context),
    DefinitionName: __expectString,
    EnableInterContainerTrafficEncryption: __expectBoolean,
    EnableManagedSpotTraining: __expectBoolean,
    EnableNetworkIsolation: __expectBoolean,
    Environment: (_: any) => de_HyperParameterTrainingJobEnvironmentMap(_, context),
    HyperParameterRanges: (_: any) => de_ParameterRanges(_, context),
    HyperParameterTuningResourceConfig: (_: any) => de_HyperParameterTuningResourceConfig(_, context),
    InputDataConfig: (_: any) => de_InputDataConfig(_, context),
    OutputDataConfig: (_: any) => de_OutputDataConfig(_, context),
    ResourceConfig: (_: any) => de_ResourceConfig(_, context),
    RetryStrategy: (_: any) => de_RetryStrategy(_, context),
    RoleArn: __expectString,
    StaticHyperParameters: (_: any) => de_HyperParameters(_, context),
    StoppingCondition: (_: any) => de_StoppingCondition(_, context),
    TuningObjective: (_: any) => de_HyperParameterTuningJobObjective(_, context),
    VpcConfig: (_: any) => de_VpcConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1HyperParameterTrainingJobDefinitions
 */
const de_HyperParameterTrainingJobDefinitions = (
  output: any,
  context: __SerdeContext
): HyperParameterTrainingJobDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HyperParameterTrainingJobDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HyperParameterTrainingJobEnvironmentMap
 */
const de_HyperParameterTrainingJobEnvironmentMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_json1_1HyperParameterTrainingJobSummaries
 */
const de_HyperParameterTrainingJobSummaries = (
  output: any,
  context: __SerdeContext
): HyperParameterTrainingJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HyperParameterTrainingJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HyperParameterTrainingJobSummary
 */
const de_HyperParameterTrainingJobSummary = (
  output: any,
  context: __SerdeContext
): HyperParameterTrainingJobSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    FinalHyperParameterTuningJobObjectiveMetric: (_: any) => de_FinalHyperParameterTuningJobObjectiveMetric(_, context),
    ObjectiveStatus: __expectString,
    TrainingEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingJobArn: __expectString,
    TrainingJobDefinitionName: __expectString,
    TrainingJobName: __expectString,
    TrainingJobStatus: __expectString,
    TrainingStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TunedHyperParameters: (_: any) => de_HyperParameters(_, context),
    TuningJobName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1HyperParameterTuningInstanceConfig
 */
const de_HyperParameterTuningInstanceConfig = (
  output: any,
  context: __SerdeContext
): HyperParameterTuningInstanceConfig => {
  return take(output, {
    InstanceCount: __expectInt32,
    InstanceType: __expectString,
    VolumeSizeInGB: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1HyperParameterTuningInstanceConfigs
 */
const de_HyperParameterTuningInstanceConfigs = (
  output: any,
  context: __SerdeContext
): HyperParameterTuningInstanceConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HyperParameterTuningInstanceConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HyperParameterTuningJobCompletionDetails
 */
const de_HyperParameterTuningJobCompletionDetails = (
  output: any,
  context: __SerdeContext
): HyperParameterTuningJobCompletionDetails => {
  return take(output, {
    ConvergenceDetectedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NumberOfTrainingJobsObjectiveNotImproving: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1HyperParameterTuningJobConfig
 */
const de_HyperParameterTuningJobConfig = (output: any, context: __SerdeContext): HyperParameterTuningJobConfig => {
  return take(output, {
    HyperParameterTuningJobObjective: (_: any) => de_HyperParameterTuningJobObjective(_, context),
    ParameterRanges: (_: any) => de_ParameterRanges(_, context),
    RandomSeed: __expectInt32,
    ResourceLimits: (_: any) => de_ResourceLimits(_, context),
    Strategy: __expectString,
    StrategyConfig: (_: any) => de_HyperParameterTuningJobStrategyConfig(_, context),
    TrainingJobEarlyStoppingType: __expectString,
    TuningJobCompletionCriteria: (_: any) => de_TuningJobCompletionCriteria(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1HyperParameterTuningJobConsumedResources
 */
const de_HyperParameterTuningJobConsumedResources = (
  output: any,
  context: __SerdeContext
): HyperParameterTuningJobConsumedResources => {
  return take(output, {
    RuntimeInSeconds: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1HyperParameterTuningJobObjective
 */
const de_HyperParameterTuningJobObjective = (
  output: any,
  context: __SerdeContext
): HyperParameterTuningJobObjective => {
  return take(output, {
    MetricName: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1HyperParameterTuningJobObjectives
 */
const de_HyperParameterTuningJobObjectives = (
  output: any,
  context: __SerdeContext
): HyperParameterTuningJobObjective[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HyperParameterTuningJobObjective(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HyperParameterTuningJobSearchEntity
 */
const de_HyperParameterTuningJobSearchEntity = (
  output: any,
  context: __SerdeContext
): HyperParameterTuningJobSearchEntity => {
  return take(output, {
    BestTrainingJob: (_: any) => de_HyperParameterTrainingJobSummary(_, context),
    ConsumedResources: (_: any) => de_HyperParameterTuningJobConsumedResources(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    HyperParameterTuningEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HyperParameterTuningJobArn: __expectString,
    HyperParameterTuningJobConfig: (_: any) => de_HyperParameterTuningJobConfig(_, context),
    HyperParameterTuningJobName: __expectString,
    HyperParameterTuningJobStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ObjectiveStatusCounters: (_: any) => de_ObjectiveStatusCounters(_, context),
    OverallBestTrainingJob: (_: any) => de_HyperParameterTrainingJobSummary(_, context),
    Tags: (_: any) => de_TagList(_, context),
    TrainingJobDefinition: (_: any) => de_HyperParameterTrainingJobDefinition(_, context),
    TrainingJobDefinitions: (_: any) => de_HyperParameterTrainingJobDefinitions(_, context),
    TrainingJobStatusCounters: (_: any) => de_TrainingJobStatusCounters(_, context),
    TuningJobCompletionDetails: (_: any) => de_HyperParameterTuningJobCompletionDetails(_, context),
    WarmStartConfig: (_: any) => de_HyperParameterTuningJobWarmStartConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1HyperParameterTuningJobStrategyConfig
 */
const de_HyperParameterTuningJobStrategyConfig = (
  output: any,
  context: __SerdeContext
): HyperParameterTuningJobStrategyConfig => {
  return take(output, {
    HyperbandStrategyConfig: (_: any) => de_HyperbandStrategyConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1HyperParameterTuningJobSummaries
 */
const de_HyperParameterTuningJobSummaries = (
  output: any,
  context: __SerdeContext
): HyperParameterTuningJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HyperParameterTuningJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HyperParameterTuningJobSummary
 */
const de_HyperParameterTuningJobSummary = (output: any, context: __SerdeContext): HyperParameterTuningJobSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HyperParameterTuningEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HyperParameterTuningJobArn: __expectString,
    HyperParameterTuningJobName: __expectString,
    HyperParameterTuningJobStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ObjectiveStatusCounters: (_: any) => de_ObjectiveStatusCounters(_, context),
    ResourceLimits: (_: any) => de_ResourceLimits(_, context),
    Strategy: __expectString,
    TrainingJobStatusCounters: (_: any) => de_TrainingJobStatusCounters(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1HyperParameterTuningJobWarmStartConfig
 */
const de_HyperParameterTuningJobWarmStartConfig = (
  output: any,
  context: __SerdeContext
): HyperParameterTuningJobWarmStartConfig => {
  return take(output, {
    ParentHyperParameterTuningJobs: (_: any) => de_ParentHyperParameterTuningJobs(_, context),
    WarmStartType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1HyperParameterTuningResourceConfig
 */
const de_HyperParameterTuningResourceConfig = (
  output: any,
  context: __SerdeContext
): HyperParameterTuningResourceConfig => {
  return take(output, {
    AllocationStrategy: __expectString,
    InstanceConfigs: (_: any) => de_HyperParameterTuningInstanceConfigs(_, context),
    InstanceCount: __expectInt32,
    InstanceType: __expectString,
    VolumeKmsKeyId: __expectString,
    VolumeSizeInGB: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1IamIdentity
 */
const de_IamIdentity = (output: any, context: __SerdeContext): IamIdentity => {
  return take(output, {
    Arn: __expectString,
    PrincipalId: __expectString,
    SourceIdentity: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1IamPolicyConstraints
 */
const de_IamPolicyConstraints = (output: any, context: __SerdeContext): IamPolicyConstraints => {
  return take(output, {
    SourceIp: __expectString,
    VpcSourceIp: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1IdentityProviderOAuthSetting
 */
const de_IdentityProviderOAuthSetting = (output: any, context: __SerdeContext): IdentityProviderOAuthSetting => {
  return take(output, {
    DataSourceName: __expectString,
    SecretArn: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1IdentityProviderOAuthSettings
 */
const de_IdentityProviderOAuthSettings = (output: any, context: __SerdeContext): IdentityProviderOAuthSetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IdentityProviderOAuthSetting(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Image
 */
const de_Image = (output: any, context: __SerdeContext): Image => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    FailureReason: __expectString,
    ImageArn: __expectString,
    ImageName: __expectString,
    ImageStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ImageClassificationJobConfig
 */
const de_ImageClassificationJobConfig = (output: any, context: __SerdeContext): ImageClassificationJobConfig => {
  return take(output, {
    CompletionCriteria: (_: any) => de_AutoMLJobCompletionCriteria(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ImageConfig
 */
const de_ImageConfig = (output: any, context: __SerdeContext): ImageConfig => {
  return take(output, {
    RepositoryAccessMode: __expectString,
    RepositoryAuthConfig: (_: any) => de_RepositoryAuthConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Images
 */
const de_Images = (output: any, context: __SerdeContext): Image[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Image(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImageVersion
 */
const de_ImageVersion = (output: any, context: __SerdeContext): ImageVersion => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    ImageArn: __expectString,
    ImageVersionArn: __expectString,
    ImageVersionStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Version: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ImageVersions
 */
const de_ImageVersions = (output: any, context: __SerdeContext): ImageVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImageVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImportHubContentResponse
 */
const de_ImportHubContentResponse = (output: any, context: __SerdeContext): ImportHubContentResponse => {
  return take(output, {
    HubArn: __expectString,
    HubContentArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceComponentComputeResourceRequirements
 */
const de_InferenceComponentComputeResourceRequirements = (
  output: any,
  context: __SerdeContext
): InferenceComponentComputeResourceRequirements => {
  return take(output, {
    MaxMemoryRequiredInMb: __expectInt32,
    MinMemoryRequiredInMb: __expectInt32,
    NumberOfAcceleratorDevicesRequired: __limitedParseFloat32,
    NumberOfCpuCoresRequired: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceComponentContainerSpecificationSummary
 */
const de_InferenceComponentContainerSpecificationSummary = (
  output: any,
  context: __SerdeContext
): InferenceComponentContainerSpecificationSummary => {
  return take(output, {
    ArtifactUrl: __expectString,
    DeployedImage: (_: any) => de_DeployedImage(_, context),
    Environment: (_: any) => de_EnvironmentMap(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceComponentRuntimeConfigSummary
 */
const de_InferenceComponentRuntimeConfigSummary = (
  output: any,
  context: __SerdeContext
): InferenceComponentRuntimeConfigSummary => {
  return take(output, {
    CurrentCopyCount: __expectInt32,
    DesiredCopyCount: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceComponentSpecificationSummary
 */
const de_InferenceComponentSpecificationSummary = (
  output: any,
  context: __SerdeContext
): InferenceComponentSpecificationSummary => {
  return take(output, {
    ComputeResourceRequirements: (_: any) => de_InferenceComponentComputeResourceRequirements(_, context),
    Container: (_: any) => de_InferenceComponentContainerSpecificationSummary(_, context),
    ModelName: __expectString,
    StartupParameters: (_: any) => de_InferenceComponentStartupParameters(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceComponentStartupParameters
 */
const de_InferenceComponentStartupParameters = (
  output: any,
  context: __SerdeContext
): InferenceComponentStartupParameters => {
  return take(output, {
    ContainerStartupHealthCheckTimeoutInSeconds: __expectInt32,
    ModelDataDownloadTimeoutInSeconds: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceComponentSummary
 */
const de_InferenceComponentSummary = (output: any, context: __SerdeContext): InferenceComponentSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointArn: __expectString,
    EndpointName: __expectString,
    InferenceComponentArn: __expectString,
    InferenceComponentName: __expectString,
    InferenceComponentStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VariantName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceComponentSummaryList
 */
const de_InferenceComponentSummaryList = (output: any, context: __SerdeContext): InferenceComponentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InferenceComponentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InferenceExecutionConfig
 */
const de_InferenceExecutionConfig = (output: any, context: __SerdeContext): InferenceExecutionConfig => {
  return take(output, {
    Mode: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceExperimentDataStorageConfig
 */
const de_InferenceExperimentDataStorageConfig = (
  output: any,
  context: __SerdeContext
): InferenceExperimentDataStorageConfig => {
  return take(output, {
    ContentType: (_: any) => de_CaptureContentTypeHeader(_, context),
    Destination: __expectString,
    KmsKey: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceExperimentList
 */
const de_InferenceExperimentList = (output: any, context: __SerdeContext): InferenceExperimentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InferenceExperimentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InferenceExperimentSchedule
 */
const de_InferenceExperimentSchedule = (output: any, context: __SerdeContext): InferenceExperimentSchedule => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceExperimentSummary
 */
const de_InferenceExperimentSummary = (output: any, context: __SerdeContext): InferenceExperimentSummary => {
  return take(output, {
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    RoleArn: __expectString,
    Schedule: (_: any) => de_InferenceExperimentSchedule(_, context),
    Status: __expectString,
    StatusReason: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceMetrics
 */
const de_InferenceMetrics = (output: any, context: __SerdeContext): InferenceMetrics => {
  return take(output, {
    MaxInvocations: __expectInt32,
    ModelLatency: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceRecommendation
 */
const de_InferenceRecommendation = (output: any, context: __SerdeContext): InferenceRecommendation => {
  return take(output, {
    EndpointConfiguration: (_: any) => de_EndpointOutputConfiguration(_, context),
    InvocationEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InvocationStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Metrics: (_: any) => de_RecommendationMetrics(_, context),
    ModelConfiguration: (_: any) => de_ModelConfiguration(_, context),
    RecommendationId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceRecommendations
 */
const de_InferenceRecommendations = (output: any, context: __SerdeContext): InferenceRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InferenceRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InferenceRecommendationsJob
 */
const de_InferenceRecommendationsJob = (output: any, context: __SerdeContext): InferenceRecommendationsJob => {
  return take(output, {
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    JobArn: __expectString,
    JobDescription: __expectString,
    JobName: __expectString,
    JobType: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelName: __expectString,
    ModelPackageVersionArn: __expectString,
    RoleArn: __expectString,
    SamplePayloadUrl: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceRecommendationsJobs
 */
const de_InferenceRecommendationsJobs = (output: any, context: __SerdeContext): InferenceRecommendationsJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InferenceRecommendationsJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InferenceRecommendationsJobStep
 */
const de_InferenceRecommendationsJobStep = (output: any, context: __SerdeContext): InferenceRecommendationsJobStep => {
  return take(output, {
    InferenceBenchmark: (_: any) => de_RecommendationJobInferenceBenchmark(_, context),
    JobName: __expectString,
    Status: __expectString,
    StepType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceRecommendationsJobSteps
 */
const de_InferenceRecommendationsJobSteps = (
  output: any,
  context: __SerdeContext
): InferenceRecommendationsJobStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InferenceRecommendationsJobStep(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InferenceSpecification
 */
const de_InferenceSpecification = (output: any, context: __SerdeContext): InferenceSpecification => {
  return take(output, {
    Containers: (_: any) => de_ModelPackageContainerDefinitionList(_, context),
    SupportedContentTypes: (_: any) => de_ContentTypes(_, context),
    SupportedRealtimeInferenceInstanceTypes: (_: any) => de_RealtimeInferenceInstanceTypes(_, context),
    SupportedResponseMIMETypes: (_: any) => de_ResponseMIMETypes(_, context),
    SupportedTransformInstanceTypes: (_: any) => de_TransformInstanceTypes(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1InfraCheckConfig
 */
const de_InfraCheckConfig = (output: any, context: __SerdeContext): InfraCheckConfig => {
  return take(output, {
    EnableInfraCheck: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1InputConfig
 */
const de_InputConfig = (output: any, context: __SerdeContext): InputConfig => {
  return take(output, {
    DataInputConfig: __expectString,
    Framework: __expectString,
    FrameworkVersion: __expectString,
    S3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InputDataConfig
 */
const de_InputDataConfig = (output: any, context: __SerdeContext): Channel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Channel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InputModes
 */
const de_InputModes = (output: any, context: __SerdeContext): TrainingInputMode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceGroup
 */
const de_InstanceGroup = (output: any, context: __SerdeContext): InstanceGroup => {
  return take(output, {
    InstanceCount: __expectInt32,
    InstanceGroupName: __expectString,
    InstanceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceGroupNames
 */
const de_InstanceGroupNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceGroups
 */
const de_InstanceGroups = (output: any, context: __SerdeContext): InstanceGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceMetadataServiceConfiguration
 */
const de_InstanceMetadataServiceConfiguration = (
  output: any,
  context: __SerdeContext
): InstanceMetadataServiceConfiguration => {
  return take(output, {
    MinimumInstanceMetadataServiceVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1IntegerParameterRange
 */
const de_IntegerParameterRange = (output: any, context: __SerdeContext): IntegerParameterRange => {
  return take(output, {
    MaxValue: __expectString,
    MinValue: __expectString,
    Name: __expectString,
    ScalingType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1IntegerParameterRanges
 */
const de_IntegerParameterRanges = (output: any, context: __SerdeContext): IntegerParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IntegerParameterRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1IntegerParameterRangeSpecification
 */
const de_IntegerParameterRangeSpecification = (
  output: any,
  context: __SerdeContext
): IntegerParameterRangeSpecification => {
  return take(output, {
    MaxValue: __expectString,
    MinValue: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1JsonContentTypes
 */
const de_JsonContentTypes = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1JupyterLabAppImageConfig
 */
const de_JupyterLabAppImageConfig = (output: any, context: __SerdeContext): JupyterLabAppImageConfig => {
  return take(output, {
    ContainerConfig: (_: any) => de_ContainerConfig(_, context),
    FileSystemConfig: (_: any) => de_FileSystemConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1JupyterLabAppSettings
 */
const de_JupyterLabAppSettings = (output: any, context: __SerdeContext): JupyterLabAppSettings => {
  return take(output, {
    CodeRepositories: (_: any) => de_CodeRepositories(_, context),
    CustomImages: (_: any) => de_CustomImages(_, context),
    DefaultResourceSpec: (_: any) => de_ResourceSpec(_, context),
    LifecycleConfigArns: (_: any) => de_LifecycleConfigArns(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1JupyterServerAppSettings
 */
const de_JupyterServerAppSettings = (output: any, context: __SerdeContext): JupyterServerAppSettings => {
  return take(output, {
    CodeRepositories: (_: any) => de_CodeRepositories(_, context),
    DefaultResourceSpec: (_: any) => de_ResourceSpec(_, context),
    LifecycleConfigArns: (_: any) => de_LifecycleConfigArns(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1KendraSettings
 */
const de_KendraSettings = (output: any, context: __SerdeContext): KendraSettings => {
  return take(output, {
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1KernelGatewayAppSettings
 */
const de_KernelGatewayAppSettings = (output: any, context: __SerdeContext): KernelGatewayAppSettings => {
  return take(output, {
    CustomImages: (_: any) => de_CustomImages(_, context),
    DefaultResourceSpec: (_: any) => de_ResourceSpec(_, context),
    LifecycleConfigArns: (_: any) => de_LifecycleConfigArns(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1KernelGatewayImageConfig
 */
const de_KernelGatewayImageConfig = (output: any, context: __SerdeContext): KernelGatewayImageConfig => {
  return take(output, {
    FileSystemConfig: (_: any) => de_FileSystemConfig(_, context),
    KernelSpecs: (_: any) => de_KernelSpecs(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1KernelSpec
 */
const de_KernelSpec = (output: any, context: __SerdeContext): KernelSpec => {
  return take(output, {
    DisplayName: __expectString,
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1KernelSpecs
 */
const de_KernelSpecs = (output: any, context: __SerdeContext): KernelSpec[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KernelSpec(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LabelCounters
 */
const de_LabelCounters = (output: any, context: __SerdeContext): LabelCounters => {
  return take(output, {
    FailedNonRetryableError: __expectInt32,
    HumanLabeled: __expectInt32,
    MachineLabeled: __expectInt32,
    TotalLabeled: __expectInt32,
    Unlabeled: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1LabelCountersForWorkteam
 */
const de_LabelCountersForWorkteam = (output: any, context: __SerdeContext): LabelCountersForWorkteam => {
  return take(output, {
    HumanLabeled: __expectInt32,
    PendingHuman: __expectInt32,
    Total: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1LabelingJobAlgorithmsConfig
 */
const de_LabelingJobAlgorithmsConfig = (output: any, context: __SerdeContext): LabelingJobAlgorithmsConfig => {
  return take(output, {
    InitialActiveLearningModelArn: __expectString,
    LabelingJobAlgorithmSpecificationArn: __expectString,
    LabelingJobResourceConfig: (_: any) => de_LabelingJobResourceConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1LabelingJobDataAttributes
 */
const de_LabelingJobDataAttributes = (output: any, context: __SerdeContext): LabelingJobDataAttributes => {
  return take(output, {
    ContentClassifiers: (_: any) => de_ContentClassifiers(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1LabelingJobDataSource
 */
const de_LabelingJobDataSource = (output: any, context: __SerdeContext): LabelingJobDataSource => {
  return take(output, {
    S3DataSource: (_: any) => de_LabelingJobS3DataSource(_, context),
    SnsDataSource: (_: any) => de_LabelingJobSnsDataSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1LabelingJobForWorkteamSummary
 */
const de_LabelingJobForWorkteamSummary = (output: any, context: __SerdeContext): LabelingJobForWorkteamSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobReferenceCode: __expectString,
    LabelCounters: (_: any) => de_LabelCountersForWorkteam(_, context),
    LabelingJobName: __expectString,
    NumberOfHumanWorkersPerDataObject: __expectInt32,
    WorkRequesterAccountId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LabelingJobForWorkteamSummaryList
 */
const de_LabelingJobForWorkteamSummaryList = (
  output: any,
  context: __SerdeContext
): LabelingJobForWorkteamSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LabelingJobForWorkteamSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LabelingJobInputConfig
 */
const de_LabelingJobInputConfig = (output: any, context: __SerdeContext): LabelingJobInputConfig => {
  return take(output, {
    DataAttributes: (_: any) => de_LabelingJobDataAttributes(_, context),
    DataSource: (_: any) => de_LabelingJobDataSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1LabelingJobOutput
 */
const de_LabelingJobOutput = (output: any, context: __SerdeContext): LabelingJobOutput => {
  return take(output, {
    FinalActiveLearningModelArn: __expectString,
    OutputDatasetS3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LabelingJobOutputConfig
 */
const de_LabelingJobOutputConfig = (output: any, context: __SerdeContext): LabelingJobOutputConfig => {
  return take(output, {
    KmsKeyId: __expectString,
    S3OutputPath: __expectString,
    SnsTopicArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LabelingJobResourceConfig
 */
const de_LabelingJobResourceConfig = (output: any, context: __SerdeContext): LabelingJobResourceConfig => {
  return take(output, {
    VolumeKmsKeyId: __expectString,
    VpcConfig: (_: any) => de_VpcConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1LabelingJobS3DataSource
 */
const de_LabelingJobS3DataSource = (output: any, context: __SerdeContext): LabelingJobS3DataSource => {
  return take(output, {
    ManifestS3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LabelingJobSnsDataSource
 */
const de_LabelingJobSnsDataSource = (output: any, context: __SerdeContext): LabelingJobSnsDataSource => {
  return take(output, {
    SnsTopicArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LabelingJobStoppingConditions
 */
const de_LabelingJobStoppingConditions = (output: any, context: __SerdeContext): LabelingJobStoppingConditions => {
  return take(output, {
    MaxHumanLabeledObjectCount: __expectInt32,
    MaxPercentageOfInputDatasetLabeled: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1LabelingJobSummary
 */
const de_LabelingJobSummary = (output: any, context: __SerdeContext): LabelingJobSummary => {
  return take(output, {
    AnnotationConsolidationLambdaArn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    InputConfig: (_: any) => de_LabelingJobInputConfig(_, context),
    LabelCounters: (_: any) => de_LabelCounters(_, context),
    LabelingJobArn: __expectString,
    LabelingJobName: __expectString,
    LabelingJobOutput: (_: any) => de_LabelingJobOutput(_, context),
    LabelingJobStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PreHumanTaskLambdaArn: __expectString,
    WorkteamArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LabelingJobSummaryList
 */
const de_LabelingJobSummaryList = (output: any, context: __SerdeContext): LabelingJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LabelingJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LambdaStepMetadata
 */
const de_LambdaStepMetadata = (output: any, context: __SerdeContext): LambdaStepMetadata => {
  return take(output, {
    Arn: __expectString,
    OutputParameters: (_: any) => de_OutputParameterList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1LastUpdateStatus
 */
const de_LastUpdateStatus = (output: any, context: __SerdeContext): LastUpdateStatus => {
  return take(output, {
    FailureReason: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LifecycleConfigArns
 */
const de_LifecycleConfigArns = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LineageEntityParameters
 */
const de_LineageEntityParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_json1_1LineageGroupSummaries
 */
const de_LineageGroupSummaries = (output: any, context: __SerdeContext): LineageGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LineageGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LineageGroupSummary
 */
const de_LineageGroupSummary = (output: any, context: __SerdeContext): LineageGroupSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LineageGroupArn: __expectString,
    LineageGroupName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListActionsResponse
 */
const de_ListActionsResponse = (output: any, context: __SerdeContext): ListActionsResponse => {
  return take(output, {
    ActionSummaries: (_: any) => de_ActionSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListAlgorithmsOutput
 */
const de_ListAlgorithmsOutput = (output: any, context: __SerdeContext): ListAlgorithmsOutput => {
  return take(output, {
    AlgorithmSummaryList: (_: any) => de_AlgorithmSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListAliasesResponse
 */
const de_ListAliasesResponse = (output: any, context: __SerdeContext): ListAliasesResponse => {
  return take(output, {
    NextToken: __expectString,
    SageMakerImageVersionAliases: (_: any) => de_SageMakerImageVersionAliases(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListAppImageConfigsResponse
 */
const de_ListAppImageConfigsResponse = (output: any, context: __SerdeContext): ListAppImageConfigsResponse => {
  return take(output, {
    AppImageConfigs: (_: any) => de_AppImageConfigList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListAppsResponse
 */
const de_ListAppsResponse = (output: any, context: __SerdeContext): ListAppsResponse => {
  return take(output, {
    Apps: (_: any) => de_AppList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListArtifactsResponse
 */
const de_ListArtifactsResponse = (output: any, context: __SerdeContext): ListArtifactsResponse => {
  return take(output, {
    ArtifactSummaries: (_: any) => de_ArtifactSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListAssociationsResponse
 */
const de_ListAssociationsResponse = (output: any, context: __SerdeContext): ListAssociationsResponse => {
  return take(output, {
    AssociationSummaries: (_: any) => de_AssociationSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListAutoMLJobsResponse
 */
const de_ListAutoMLJobsResponse = (output: any, context: __SerdeContext): ListAutoMLJobsResponse => {
  return take(output, {
    AutoMLJobSummaries: (_: any) => de_AutoMLJobSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListCandidatesForAutoMLJobResponse
 */
const de_ListCandidatesForAutoMLJobResponse = (
  output: any,
  context: __SerdeContext
): ListCandidatesForAutoMLJobResponse => {
  return take(output, {
    Candidates: (_: any) => de_AutoMLCandidates(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListClusterNodesResponse
 */
const de_ListClusterNodesResponse = (output: any, context: __SerdeContext): ListClusterNodesResponse => {
  return take(output, {
    ClusterNodeSummaries: (_: any) => de_ClusterNodeSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListClustersResponse
 */
const de_ListClustersResponse = (output: any, context: __SerdeContext): ListClustersResponse => {
  return take(output, {
    ClusterSummaries: (_: any) => de_ClusterSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListCodeRepositoriesOutput
 */
const de_ListCodeRepositoriesOutput = (output: any, context: __SerdeContext): ListCodeRepositoriesOutput => {
  return take(output, {
    CodeRepositorySummaryList: (_: any) => de_CodeRepositorySummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListCompilationJobsResponse
 */
const de_ListCompilationJobsResponse = (output: any, context: __SerdeContext): ListCompilationJobsResponse => {
  return take(output, {
    CompilationJobSummaries: (_: any) => de_CompilationJobSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListContextsResponse
 */
const de_ListContextsResponse = (output: any, context: __SerdeContext): ListContextsResponse => {
  return take(output, {
    ContextSummaries: (_: any) => de_ContextSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDataQualityJobDefinitionsResponse
 */
const de_ListDataQualityJobDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): ListDataQualityJobDefinitionsResponse => {
  return take(output, {
    JobDefinitionSummaries: (_: any) => de_MonitoringJobDefinitionSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDeviceFleetsResponse
 */
const de_ListDeviceFleetsResponse = (output: any, context: __SerdeContext): ListDeviceFleetsResponse => {
  return take(output, {
    DeviceFleetSummaries: (_: any) => de_DeviceFleetSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDevicesResponse
 */
const de_ListDevicesResponse = (output: any, context: __SerdeContext): ListDevicesResponse => {
  return take(output, {
    DeviceSummaries: (_: any) => de_DeviceSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDomainsResponse
 */
const de_ListDomainsResponse = (output: any, context: __SerdeContext): ListDomainsResponse => {
  return take(output, {
    Domains: (_: any) => de_DomainList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEdgeDeploymentPlansResponse
 */
const de_ListEdgeDeploymentPlansResponse = (output: any, context: __SerdeContext): ListEdgeDeploymentPlansResponse => {
  return take(output, {
    EdgeDeploymentPlanSummaries: (_: any) => de_EdgeDeploymentPlanSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEdgePackagingJobsResponse
 */
const de_ListEdgePackagingJobsResponse = (output: any, context: __SerdeContext): ListEdgePackagingJobsResponse => {
  return take(output, {
    EdgePackagingJobSummaries: (_: any) => de_EdgePackagingJobSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEndpointConfigsOutput
 */
const de_ListEndpointConfigsOutput = (output: any, context: __SerdeContext): ListEndpointConfigsOutput => {
  return take(output, {
    EndpointConfigs: (_: any) => de_EndpointConfigSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEndpointsOutput
 */
const de_ListEndpointsOutput = (output: any, context: __SerdeContext): ListEndpointsOutput => {
  return take(output, {
    Endpoints: (_: any) => de_EndpointSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListExperimentsResponse
 */
const de_ListExperimentsResponse = (output: any, context: __SerdeContext): ListExperimentsResponse => {
  return take(output, {
    ExperimentSummaries: (_: any) => de_ExperimentSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListFeatureGroupsResponse
 */
const de_ListFeatureGroupsResponse = (output: any, context: __SerdeContext): ListFeatureGroupsResponse => {
  return take(output, {
    FeatureGroupSummaries: (_: any) => de_FeatureGroupSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListFlowDefinitionsResponse
 */
const de_ListFlowDefinitionsResponse = (output: any, context: __SerdeContext): ListFlowDefinitionsResponse => {
  return take(output, {
    FlowDefinitionSummaries: (_: any) => de_FlowDefinitionSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListHubContentsResponse
 */
const de_ListHubContentsResponse = (output: any, context: __SerdeContext): ListHubContentsResponse => {
  return take(output, {
    HubContentSummaries: (_: any) => de_HubContentInfoList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListHubContentVersionsResponse
 */
const de_ListHubContentVersionsResponse = (output: any, context: __SerdeContext): ListHubContentVersionsResponse => {
  return take(output, {
    HubContentSummaries: (_: any) => de_HubContentInfoList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListHubsResponse
 */
const de_ListHubsResponse = (output: any, context: __SerdeContext): ListHubsResponse => {
  return take(output, {
    HubSummaries: (_: any) => de_HubInfoList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListHumanTaskUisResponse
 */
const de_ListHumanTaskUisResponse = (output: any, context: __SerdeContext): ListHumanTaskUisResponse => {
  return take(output, {
    HumanTaskUiSummaries: (_: any) => de_HumanTaskUiSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListHyperParameterTuningJobsResponse
 */
const de_ListHyperParameterTuningJobsResponse = (
  output: any,
  context: __SerdeContext
): ListHyperParameterTuningJobsResponse => {
  return take(output, {
    HyperParameterTuningJobSummaries: (_: any) => de_HyperParameterTuningJobSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListImagesResponse
 */
const de_ListImagesResponse = (output: any, context: __SerdeContext): ListImagesResponse => {
  return take(output, {
    Images: (_: any) => de_Images(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListImageVersionsResponse
 */
const de_ListImageVersionsResponse = (output: any, context: __SerdeContext): ListImageVersionsResponse => {
  return take(output, {
    ImageVersions: (_: any) => de_ImageVersions(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListInferenceComponentsOutput
 */
const de_ListInferenceComponentsOutput = (output: any, context: __SerdeContext): ListInferenceComponentsOutput => {
  return take(output, {
    InferenceComponents: (_: any) => de_InferenceComponentSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListInferenceExperimentsResponse
 */
const de_ListInferenceExperimentsResponse = (
  output: any,
  context: __SerdeContext
): ListInferenceExperimentsResponse => {
  return take(output, {
    InferenceExperiments: (_: any) => de_InferenceExperimentList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListInferenceRecommendationsJobsResponse
 */
const de_ListInferenceRecommendationsJobsResponse = (
  output: any,
  context: __SerdeContext
): ListInferenceRecommendationsJobsResponse => {
  return take(output, {
    InferenceRecommendationsJobs: (_: any) => de_InferenceRecommendationsJobs(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListInferenceRecommendationsJobStepsResponse
 */
const de_ListInferenceRecommendationsJobStepsResponse = (
  output: any,
  context: __SerdeContext
): ListInferenceRecommendationsJobStepsResponse => {
  return take(output, {
    NextToken: __expectString,
    Steps: (_: any) => de_InferenceRecommendationsJobSteps(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListLabelingJobsForWorkteamResponse
 */
const de_ListLabelingJobsForWorkteamResponse = (
  output: any,
  context: __SerdeContext
): ListLabelingJobsForWorkteamResponse => {
  return take(output, {
    LabelingJobSummaryList: (_: any) => de_LabelingJobForWorkteamSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListLabelingJobsResponse
 */
const de_ListLabelingJobsResponse = (output: any, context: __SerdeContext): ListLabelingJobsResponse => {
  return take(output, {
    LabelingJobSummaryList: (_: any) => de_LabelingJobSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListLineageGroupsResponse
 */
const de_ListLineageGroupsResponse = (output: any, context: __SerdeContext): ListLineageGroupsResponse => {
  return take(output, {
    LineageGroupSummaries: (_: any) => de_LineageGroupSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListMlflowTrackingServersResponse
 */
const de_ListMlflowTrackingServersResponse = (
  output: any,
  context: __SerdeContext
): ListMlflowTrackingServersResponse => {
  return take(output, {
    NextToken: __expectString,
    TrackingServerSummaries: (_: any) => de_TrackingServerSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelBiasJobDefinitionsResponse
 */
const de_ListModelBiasJobDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): ListModelBiasJobDefinitionsResponse => {
  return take(output, {
    JobDefinitionSummaries: (_: any) => de_MonitoringJobDefinitionSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelCardExportJobsResponse
 */
const de_ListModelCardExportJobsResponse = (output: any, context: __SerdeContext): ListModelCardExportJobsResponse => {
  return take(output, {
    ModelCardExportJobSummaries: (_: any) => de_ModelCardExportJobSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelCardsResponse
 */
const de_ListModelCardsResponse = (output: any, context: __SerdeContext): ListModelCardsResponse => {
  return take(output, {
    ModelCardSummaries: (_: any) => de_ModelCardSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelCardVersionsResponse
 */
const de_ListModelCardVersionsResponse = (output: any, context: __SerdeContext): ListModelCardVersionsResponse => {
  return take(output, {
    ModelCardVersionSummaryList: (_: any) => de_ModelCardVersionSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelExplainabilityJobDefinitionsResponse
 */
const de_ListModelExplainabilityJobDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): ListModelExplainabilityJobDefinitionsResponse => {
  return take(output, {
    JobDefinitionSummaries: (_: any) => de_MonitoringJobDefinitionSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelMetadataResponse
 */
const de_ListModelMetadataResponse = (output: any, context: __SerdeContext): ListModelMetadataResponse => {
  return take(output, {
    ModelMetadataSummaries: (_: any) => de_ModelMetadataSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelPackageGroupsOutput
 */
const de_ListModelPackageGroupsOutput = (output: any, context: __SerdeContext): ListModelPackageGroupsOutput => {
  return take(output, {
    ModelPackageGroupSummaryList: (_: any) => de_ModelPackageGroupSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelPackagesOutput
 */
const de_ListModelPackagesOutput = (output: any, context: __SerdeContext): ListModelPackagesOutput => {
  return take(output, {
    ModelPackageSummaryList: (_: any) => de_ModelPackageSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelQualityJobDefinitionsResponse
 */
const de_ListModelQualityJobDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): ListModelQualityJobDefinitionsResponse => {
  return take(output, {
    JobDefinitionSummaries: (_: any) => de_MonitoringJobDefinitionSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelsOutput
 */
const de_ListModelsOutput = (output: any, context: __SerdeContext): ListModelsOutput => {
  return take(output, {
    Models: (_: any) => de_ModelSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListMonitoringAlertHistoryResponse
 */
const de_ListMonitoringAlertHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListMonitoringAlertHistoryResponse => {
  return take(output, {
    MonitoringAlertHistory: (_: any) => de_MonitoringAlertHistoryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListMonitoringAlertsResponse
 */
const de_ListMonitoringAlertsResponse = (output: any, context: __SerdeContext): ListMonitoringAlertsResponse => {
  return take(output, {
    MonitoringAlertSummaries: (_: any) => de_MonitoringAlertSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListMonitoringExecutionsResponse
 */
const de_ListMonitoringExecutionsResponse = (
  output: any,
  context: __SerdeContext
): ListMonitoringExecutionsResponse => {
  return take(output, {
    MonitoringExecutionSummaries: (_: any) => de_MonitoringExecutionSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListMonitoringSchedulesResponse
 */
const de_ListMonitoringSchedulesResponse = (output: any, context: __SerdeContext): ListMonitoringSchedulesResponse => {
  return take(output, {
    MonitoringScheduleSummaries: (_: any) => de_MonitoringScheduleSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsOutput
 */
const de_ListNotebookInstanceLifecycleConfigsOutput = (
  output: any,
  context: __SerdeContext
): ListNotebookInstanceLifecycleConfigsOutput => {
  return take(output, {
    NextToken: __expectString,
    NotebookInstanceLifecycleConfigs: (_: any) => de_NotebookInstanceLifecycleConfigSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListNotebookInstancesOutput
 */
const de_ListNotebookInstancesOutput = (output: any, context: __SerdeContext): ListNotebookInstancesOutput => {
  return take(output, {
    NextToken: __expectString,
    NotebookInstances: (_: any) => de_NotebookInstanceSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListPipelineExecutionsResponse
 */
const de_ListPipelineExecutionsResponse = (output: any, context: __SerdeContext): ListPipelineExecutionsResponse => {
  return take(output, {
    NextToken: __expectString,
    PipelineExecutionSummaries: (_: any) => de_PipelineExecutionSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListPipelineExecutionStepsResponse
 */
const de_ListPipelineExecutionStepsResponse = (
  output: any,
  context: __SerdeContext
): ListPipelineExecutionStepsResponse => {
  return take(output, {
    NextToken: __expectString,
    PipelineExecutionSteps: (_: any) => de_PipelineExecutionStepList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListPipelineParametersForExecutionResponse
 */
const de_ListPipelineParametersForExecutionResponse = (
  output: any,
  context: __SerdeContext
): ListPipelineParametersForExecutionResponse => {
  return take(output, {
    NextToken: __expectString,
    PipelineParameters: (_: any) => de_ParameterList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListPipelinesResponse
 */
const de_ListPipelinesResponse = (output: any, context: __SerdeContext): ListPipelinesResponse => {
  return take(output, {
    NextToken: __expectString,
    PipelineSummaries: (_: any) => de_PipelineSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListProcessingJobsResponse
 */
const de_ListProcessingJobsResponse = (output: any, context: __SerdeContext): ListProcessingJobsResponse => {
  return take(output, {
    NextToken: __expectString,
    ProcessingJobSummaries: (_: any) => de_ProcessingJobSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListProjectsOutput
 */
const de_ListProjectsOutput = (output: any, context: __SerdeContext): ListProjectsOutput => {
  return take(output, {
    NextToken: __expectString,
    ProjectSummaryList: (_: any) => de_ProjectSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListResourceCatalogsResponse
 */
const de_ListResourceCatalogsResponse = (output: any, context: __SerdeContext): ListResourceCatalogsResponse => {
  return take(output, {
    NextToken: __expectString,
    ResourceCatalogs: (_: any) => de_ResourceCatalogList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListSpacesResponse
 */
const de_ListSpacesResponse = (output: any, context: __SerdeContext): ListSpacesResponse => {
  return take(output, {
    NextToken: __expectString,
    Spaces: (_: any) => de_SpaceList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListStageDevicesResponse
 */
const de_ListStageDevicesResponse = (output: any, context: __SerdeContext): ListStageDevicesResponse => {
  return take(output, {
    DeviceDeploymentSummaries: (_: any) => de_DeviceDeploymentSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListStudioLifecycleConfigsResponse
 */
const de_ListStudioLifecycleConfigsResponse = (
  output: any,
  context: __SerdeContext
): ListStudioLifecycleConfigsResponse => {
  return take(output, {
    NextToken: __expectString,
    StudioLifecycleConfigs: (_: any) => de_StudioLifecycleConfigsList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListSubscribedWorkteamsResponse
 */
const de_ListSubscribedWorkteamsResponse = (output: any, context: __SerdeContext): ListSubscribedWorkteamsResponse => {
  return take(output, {
    NextToken: __expectString,
    SubscribedWorkteams: (_: any) => de_SubscribedWorkteams(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListTagsOutput
 */
const de_ListTagsOutput = (output: any, context: __SerdeContext): ListTagsOutput => {
  return take(output, {
    NextToken: __expectString,
    Tags: (_: any) => de_TagList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobResponse
 */
const de_ListTrainingJobsForHyperParameterTuningJobResponse = (
  output: any,
  context: __SerdeContext
): ListTrainingJobsForHyperParameterTuningJobResponse => {
  return take(output, {
    NextToken: __expectString,
    TrainingJobSummaries: (_: any) => de_HyperParameterTrainingJobSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListTrainingJobsResponse
 */
const de_ListTrainingJobsResponse = (output: any, context: __SerdeContext): ListTrainingJobsResponse => {
  return take(output, {
    NextToken: __expectString,
    TrainingJobSummaries: (_: any) => de_TrainingJobSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListTransformJobsResponse
 */
const de_ListTransformJobsResponse = (output: any, context: __SerdeContext): ListTransformJobsResponse => {
  return take(output, {
    NextToken: __expectString,
    TransformJobSummaries: (_: any) => de_TransformJobSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListTrialComponentsResponse
 */
const de_ListTrialComponentsResponse = (output: any, context: __SerdeContext): ListTrialComponentsResponse => {
  return take(output, {
    NextToken: __expectString,
    TrialComponentSummaries: (_: any) => de_TrialComponentSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListTrialsResponse
 */
const de_ListTrialsResponse = (output: any, context: __SerdeContext): ListTrialsResponse => {
  return take(output, {
    NextToken: __expectString,
    TrialSummaries: (_: any) => de_TrialSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListUserProfilesResponse
 */
const de_ListUserProfilesResponse = (output: any, context: __SerdeContext): ListUserProfilesResponse => {
  return take(output, {
    NextToken: __expectString,
    UserProfiles: (_: any) => de_UserProfileList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListWorkforcesResponse
 */
const de_ListWorkforcesResponse = (output: any, context: __SerdeContext): ListWorkforcesResponse => {
  return take(output, {
    NextToken: __expectString,
    Workforces: (_: any) => de_Workforces(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListWorkteamsResponse
 */
const de_ListWorkteamsResponse = (output: any, context: __SerdeContext): ListWorkteamsResponse => {
  return take(output, {
    NextToken: __expectString,
    Workteams: (_: any) => de_Workteams(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MemberDefinition
 */
const de_MemberDefinition = (output: any, context: __SerdeContext): MemberDefinition => {
  return take(output, {
    CognitoMemberDefinition: (_: any) => de_CognitoMemberDefinition(_, context),
    OidcMemberDefinition: (_: any) => de_OidcMemberDefinition(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MemberDefinitions
 */
const de_MemberDefinitions = (output: any, context: __SerdeContext): MemberDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MemberDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MetadataProperties
 */
const de_MetadataProperties = (output: any, context: __SerdeContext): MetadataProperties => {
  return take(output, {
    CommitId: __expectString,
    GeneratedBy: __expectString,
    ProjectId: __expectString,
    Repository: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MetricData
 */
const de_MetricData = (output: any, context: __SerdeContext): MetricData => {
  return take(output, {
    MetricName: __expectString,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Value: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1MetricDataList
 */
const de_MetricDataList = (output: any, context: __SerdeContext): MetricDatum[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricDatum(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MetricDatum
 */
const de_MetricDatum = (output: any, context: __SerdeContext): MetricDatum => {
  return take(output, {
    MetricName: __expectString,
    Set: __expectString,
    StandardMetricName: __expectString,
    Value: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1MetricDefinition
 */
const de_MetricDefinition = (output: any, context: __SerdeContext): MetricDefinition => {
  return take(output, {
    Name: __expectString,
    Regex: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MetricDefinitionList
 */
const de_MetricDefinitionList = (output: any, context: __SerdeContext): MetricDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MetricSpecification
 */
const de_MetricSpecification = (output: any, context: __SerdeContext): MetricSpecification => {
  if (output.Customized != null) {
    return {
      Customized: de_CustomizedMetricSpecification(output.Customized, context),
    };
  }
  if (output.Predefined != null) {
    return {
      Predefined: de_PredefinedMetricSpecification(output.Predefined, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_1MetricsSource
 */
const de_MetricsSource = (output: any, context: __SerdeContext): MetricsSource => {
  return take(output, {
    ContentDigest: __expectString,
    ContentType: __expectString,
    S3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Model
 */
const de_Model = (output: any, context: __SerdeContext): Model => {
  return take(output, {
    Containers: (_: any) => de_ContainerDefinitionList(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeploymentRecommendation: (_: any) => de_DeploymentRecommendation(_, context),
    EnableNetworkIsolation: __expectBoolean,
    ExecutionRoleArn: __expectString,
    InferenceExecutionConfig: (_: any) => de_InferenceExecutionConfig(_, context),
    ModelArn: __expectString,
    ModelName: __expectString,
    PrimaryContainer: (_: any) => de_ContainerDefinition(_, context),
    Tags: (_: any) => de_TagList(_, context),
    VpcConfig: (_: any) => de_VpcConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelAccessConfig
 */
const de_ModelAccessConfig = (output: any, context: __SerdeContext): ModelAccessConfig => {
  return take(output, {
    AcceptEula: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelArtifacts
 */
const de_ModelArtifacts = (output: any, context: __SerdeContext): ModelArtifacts => {
  return take(output, {
    S3ModelArtifacts: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelBiasAppSpecification
 */
const de_ModelBiasAppSpecification = (output: any, context: __SerdeContext): ModelBiasAppSpecification => {
  return take(output, {
    ConfigUri: __expectString,
    Environment: (_: any) => de_MonitoringEnvironmentMap(_, context),
    ImageUri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelBiasBaselineConfig
 */
const de_ModelBiasBaselineConfig = (output: any, context: __SerdeContext): ModelBiasBaselineConfig => {
  return take(output, {
    BaseliningJobName: __expectString,
    ConstraintsResource: (_: any) => de_MonitoringConstraintsResource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelBiasJobInput
 */
const de_ModelBiasJobInput = (output: any, context: __SerdeContext): ModelBiasJobInput => {
  return take(output, {
    BatchTransformInput: (_: any) => de_BatchTransformInput(_, context),
    EndpointInput: (_: any) => de_EndpointInput(_, context),
    GroundTruthS3Input: (_: any) => de_MonitoringGroundTruthS3Input(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelCard
 */
const de_ModelCard = (output: any, context: __SerdeContext): ModelCard => {
  return take(output, {
    Content: __expectString,
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelCardArn: __expectString,
    ModelCardName: __expectString,
    ModelCardStatus: __expectString,
    ModelCardVersion: __expectInt32,
    ModelId: __expectString,
    ModelPackageGroupName: __expectString,
    RiskRating: __expectString,
    SecurityConfig: (_: any) => de_ModelCardSecurityConfig(_, context),
    Tags: (_: any) => de_TagList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelCardExportArtifacts
 */
const de_ModelCardExportArtifacts = (output: any, context: __SerdeContext): ModelCardExportArtifacts => {
  return take(output, {
    S3ExportArtifacts: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelCardExportJobSummary
 */
const de_ModelCardExportJobSummary = (output: any, context: __SerdeContext): ModelCardExportJobSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelCardExportJobArn: __expectString,
    ModelCardExportJobName: __expectString,
    ModelCardName: __expectString,
    ModelCardVersion: __expectInt32,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelCardExportJobSummaryList
 */
const de_ModelCardExportJobSummaryList = (output: any, context: __SerdeContext): ModelCardExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelCardExportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelCardExportOutputConfig
 */
const de_ModelCardExportOutputConfig = (output: any, context: __SerdeContext): ModelCardExportOutputConfig => {
  return take(output, {
    S3OutputPath: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelCardSecurityConfig
 */
const de_ModelCardSecurityConfig = (output: any, context: __SerdeContext): ModelCardSecurityConfig => {
  return take(output, {
    KmsKeyId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelCardSummary
 */
const de_ModelCardSummary = (output: any, context: __SerdeContext): ModelCardSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelCardArn: __expectString,
    ModelCardName: __expectString,
    ModelCardStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelCardSummaryList
 */
const de_ModelCardSummaryList = (output: any, context: __SerdeContext): ModelCardSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelCardSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelCardVersionSummary
 */
const de_ModelCardVersionSummary = (output: any, context: __SerdeContext): ModelCardVersionSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelCardArn: __expectString,
    ModelCardName: __expectString,
    ModelCardStatus: __expectString,
    ModelCardVersion: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelCardVersionSummaryList
 */
const de_ModelCardVersionSummaryList = (output: any, context: __SerdeContext): ModelCardVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelCardVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelClientConfig
 */
const de_ModelClientConfig = (output: any, context: __SerdeContext): ModelClientConfig => {
  return take(output, {
    InvocationsMaxRetries: __expectInt32,
    InvocationsTimeoutInSeconds: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelConfiguration
 */
const de_ModelConfiguration = (output: any, context: __SerdeContext): ModelConfiguration => {
  return take(output, {
    CompilationJobName: __expectString,
    EnvironmentParameters: (_: any) => de_EnvironmentParameters(_, context),
    InferenceSpecificationName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelDashboardEndpoint
 */
const de_ModelDashboardEndpoint = (output: any, context: __SerdeContext): ModelDashboardEndpoint => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointArn: __expectString,
    EndpointName: __expectString,
    EndpointStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelDashboardEndpoints
 */
const de_ModelDashboardEndpoints = (output: any, context: __SerdeContext): ModelDashboardEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelDashboardEndpoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelDashboardIndicatorAction
 */
const de_ModelDashboardIndicatorAction = (output: any, context: __SerdeContext): ModelDashboardIndicatorAction => {
  return take(output, {
    Enabled: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelDashboardModel
 */
const de_ModelDashboardModel = (output: any, context: __SerdeContext): ModelDashboardModel => {
  return take(output, {
    Endpoints: (_: any) => de_ModelDashboardEndpoints(_, context),
    LastBatchTransformJob: (_: any) => de_TransformJob(_, context),
    Model: (_: any) => de_Model(_, context),
    ModelCard: (_: any) => de_ModelDashboardModelCard(_, context),
    MonitoringSchedules: (_: any) => de_ModelDashboardMonitoringSchedules(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelDashboardModelCard
 */
const de_ModelDashboardModelCard = (output: any, context: __SerdeContext): ModelDashboardModelCard => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelCardArn: __expectString,
    ModelCardName: __expectString,
    ModelCardStatus: __expectString,
    ModelCardVersion: __expectInt32,
    ModelId: __expectString,
    RiskRating: __expectString,
    SecurityConfig: (_: any) => de_ModelCardSecurityConfig(_, context),
    Tags: (_: any) => de_TagList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelDashboardMonitoringSchedule
 */
const de_ModelDashboardMonitoringSchedule = (
  output: any,
  context: __SerdeContext
): ModelDashboardMonitoringSchedule => {
  return take(output, {
    BatchTransformInput: (_: any) => de_BatchTransformInput(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointName: __expectString,
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastMonitoringExecutionSummary: (_: any) => de_MonitoringExecutionSummary(_, context),
    MonitoringAlertSummaries: (_: any) => de_MonitoringAlertSummaryList(_, context),
    MonitoringScheduleArn: __expectString,
    MonitoringScheduleConfig: (_: any) => de_MonitoringScheduleConfig(_, context),
    MonitoringScheduleName: __expectString,
    MonitoringScheduleStatus: __expectString,
    MonitoringType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelDashboardMonitoringSchedules
 */
const de_ModelDashboardMonitoringSchedules = (
  output: any,
  context: __SerdeContext
): ModelDashboardMonitoringSchedule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelDashboardMonitoringSchedule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelDataQuality
 */
const de_ModelDataQuality = (output: any, context: __SerdeContext): ModelDataQuality => {
  return take(output, {
    Constraints: (_: any) => de_MetricsSource(_, context),
    Statistics: (_: any) => de_MetricsSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelDataSource
 */
const de_ModelDataSource = (output: any, context: __SerdeContext): ModelDataSource => {
  return take(output, {
    S3DataSource: (_: any) => de_S3ModelDataSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelDeployConfig
 */
const de_ModelDeployConfig = (output: any, context: __SerdeContext): ModelDeployConfig => {
  return take(output, {
    AutoGenerateEndpointName: __expectBoolean,
    EndpointName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelDeployResult
 */
const de_ModelDeployResult = (output: any, context: __SerdeContext): ModelDeployResult => {
  return take(output, {
    EndpointName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelDigests
 */
const de_ModelDigests = (output: any, context: __SerdeContext): ModelDigests => {
  return take(output, {
    ArtifactDigest: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelExplainabilityAppSpecification
 */
const de_ModelExplainabilityAppSpecification = (
  output: any,
  context: __SerdeContext
): ModelExplainabilityAppSpecification => {
  return take(output, {
    ConfigUri: __expectString,
    Environment: (_: any) => de_MonitoringEnvironmentMap(_, context),
    ImageUri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelExplainabilityBaselineConfig
 */
const de_ModelExplainabilityBaselineConfig = (
  output: any,
  context: __SerdeContext
): ModelExplainabilityBaselineConfig => {
  return take(output, {
    BaseliningJobName: __expectString,
    ConstraintsResource: (_: any) => de_MonitoringConstraintsResource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelExplainabilityJobInput
 */
const de_ModelExplainabilityJobInput = (output: any, context: __SerdeContext): ModelExplainabilityJobInput => {
  return take(output, {
    BatchTransformInput: (_: any) => de_BatchTransformInput(_, context),
    EndpointInput: (_: any) => de_EndpointInput(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelInfrastructureConfig
 */
const de_ModelInfrastructureConfig = (output: any, context: __SerdeContext): ModelInfrastructureConfig => {
  return take(output, {
    InfrastructureType: __expectString,
    RealTimeInferenceConfig: (_: any) => de_RealTimeInferenceConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelInput
 */
const de_ModelInput = (output: any, context: __SerdeContext): ModelInput => {
  return take(output, {
    DataInputConfig: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelLatencyThreshold
 */
const de_ModelLatencyThreshold = (output: any, context: __SerdeContext): ModelLatencyThreshold => {
  return take(output, {
    Percentile: __expectString,
    ValueInMilliseconds: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelLatencyThresholds
 */
const de_ModelLatencyThresholds = (output: any, context: __SerdeContext): ModelLatencyThreshold[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelLatencyThreshold(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelMetadataSummaries
 */
const de_ModelMetadataSummaries = (output: any, context: __SerdeContext): ModelMetadataSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelMetadataSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelMetadataSummary
 */
const de_ModelMetadataSummary = (output: any, context: __SerdeContext): ModelMetadataSummary => {
  return take(output, {
    Domain: __expectString,
    Framework: __expectString,
    FrameworkVersion: __expectString,
    Model: __expectString,
    Task: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelMetrics
 */
const de_ModelMetrics = (output: any, context: __SerdeContext): ModelMetrics => {
  return take(output, {
    Bias: (_: any) => de_Bias(_, context),
    Explainability: (_: any) => de_Explainability(_, context),
    ModelDataQuality: (_: any) => de_ModelDataQuality(_, context),
    ModelQuality: (_: any) => de_ModelQuality(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelPackage
 */
const de_ModelPackage = (output: any, context: __SerdeContext): ModelPackage => {
  return take(output, {
    AdditionalInferenceSpecifications: (_: any) => de_AdditionalInferenceSpecifications(_, context),
    ApprovalDescription: __expectString,
    CertifyForMarketplace: __expectBoolean,
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CustomerMetadataProperties: (_: any) => de_CustomerMetadataMap(_, context),
    Domain: __expectString,
    DriftCheckBaselines: (_: any) => de_DriftCheckBaselines(_, context),
    InferenceSpecification: (_: any) => de_InferenceSpecification(_, context),
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MetadataProperties: (_: any) => de_MetadataProperties(_, context),
    ModelApprovalStatus: __expectString,
    ModelCard: (_: any) => de_ModelPackageModelCard(_, context),
    ModelMetrics: (_: any) => de_ModelMetrics(_, context),
    ModelPackageArn: __expectString,
    ModelPackageDescription: __expectString,
    ModelPackageGroupName: __expectString,
    ModelPackageName: __expectString,
    ModelPackageStatus: __expectString,
    ModelPackageStatusDetails: (_: any) => de_ModelPackageStatusDetails(_, context),
    ModelPackageVersion: __expectInt32,
    SamplePayloadUrl: __expectString,
    SecurityConfig: (_: any) => de_ModelPackageSecurityConfig(_, context),
    SkipModelValidation: __expectString,
    SourceAlgorithmSpecification: (_: any) => de_SourceAlgorithmSpecification(_, context),
    SourceUri: __expectString,
    Tags: (_: any) => de_TagList(_, context),
    Task: __expectString,
    ValidationSpecification: (_: any) => de_ModelPackageValidationSpecification(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelPackageContainerDefinition
 */
const de_ModelPackageContainerDefinition = (output: any, context: __SerdeContext): ModelPackageContainerDefinition => {
  return take(output, {
    AdditionalS3DataSource: (_: any) => de_AdditionalS3DataSource(_, context),
    ContainerHostname: __expectString,
    Environment: (_: any) => de_EnvironmentMap(_, context),
    Framework: __expectString,
    FrameworkVersion: __expectString,
    Image: __expectString,
    ImageDigest: __expectString,
    ModelDataSource: (_: any) => de_ModelDataSource(_, context),
    ModelDataUrl: __expectString,
    ModelInput: (_: any) => de_ModelInput(_, context),
    NearestModelName: __expectString,
    ProductId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelPackageContainerDefinitionList
 */
const de_ModelPackageContainerDefinitionList = (
  output: any,
  context: __SerdeContext
): ModelPackageContainerDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelPackageContainerDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelPackageGroup
 */
const de_ModelPackageGroup = (output: any, context: __SerdeContext): ModelPackageGroup => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelPackageGroupArn: __expectString,
    ModelPackageGroupDescription: __expectString,
    ModelPackageGroupName: __expectString,
    ModelPackageGroupStatus: __expectString,
    Tags: (_: any) => de_TagList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelPackageGroupSummary
 */
const de_ModelPackageGroupSummary = (output: any, context: __SerdeContext): ModelPackageGroupSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelPackageGroupArn: __expectString,
    ModelPackageGroupDescription: __expectString,
    ModelPackageGroupName: __expectString,
    ModelPackageGroupStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelPackageGroupSummaryList
 */
const de_ModelPackageGroupSummaryList = (output: any, context: __SerdeContext): ModelPackageGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelPackageGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelPackageModelCard
 */
const de_ModelPackageModelCard = (output: any, context: __SerdeContext): ModelPackageModelCard => {
  return take(output, {
    ModelCardContent: __expectString,
    ModelCardStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelPackageSecurityConfig
 */
const de_ModelPackageSecurityConfig = (output: any, context: __SerdeContext): ModelPackageSecurityConfig => {
  return take(output, {
    KmsKeyId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelPackageStatusDetails
 */
const de_ModelPackageStatusDetails = (output: any, context: __SerdeContext): ModelPackageStatusDetails => {
  return take(output, {
    ImageScanStatuses: (_: any) => de_ModelPackageStatusItemList(_, context),
    ValidationStatuses: (_: any) => de_ModelPackageStatusItemList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelPackageStatusItem
 */
const de_ModelPackageStatusItem = (output: any, context: __SerdeContext): ModelPackageStatusItem => {
  return take(output, {
    FailureReason: __expectString,
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelPackageStatusItemList
 */
const de_ModelPackageStatusItemList = (output: any, context: __SerdeContext): ModelPackageStatusItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelPackageStatusItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelPackageSummaries
 */
const de_ModelPackageSummaries = (
  output: any,
  context: __SerdeContext
): Record<string, BatchDescribeModelPackageSummary> => {
  return Object.entries(output).reduce(
    (acc: Record<string, BatchDescribeModelPackageSummary>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as string] = de_BatchDescribeModelPackageSummary(value, context);
      return acc;
    },
    {} as Record<string, BatchDescribeModelPackageSummary>
  );
};

/**
 * deserializeAws_json1_1ModelPackageSummary
 */
const de_ModelPackageSummary = (output: any, context: __SerdeContext): ModelPackageSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelApprovalStatus: __expectString,
    ModelPackageArn: __expectString,
    ModelPackageDescription: __expectString,
    ModelPackageGroupName: __expectString,
    ModelPackageName: __expectString,
    ModelPackageStatus: __expectString,
    ModelPackageVersion: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelPackageSummaryList
 */
const de_ModelPackageSummaryList = (output: any, context: __SerdeContext): ModelPackageSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelPackageSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelPackageValidationProfile
 */
const de_ModelPackageValidationProfile = (output: any, context: __SerdeContext): ModelPackageValidationProfile => {
  return take(output, {
    ProfileName: __expectString,
    TransformJobDefinition: (_: any) => de_TransformJobDefinition(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelPackageValidationProfiles
 */
const de_ModelPackageValidationProfiles = (output: any, context: __SerdeContext): ModelPackageValidationProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelPackageValidationProfile(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelPackageValidationSpecification
 */
const de_ModelPackageValidationSpecification = (
  output: any,
  context: __SerdeContext
): ModelPackageValidationSpecification => {
  return take(output, {
    ValidationProfiles: (_: any) => de_ModelPackageValidationProfiles(_, context),
    ValidationRole: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelQuality
 */
const de_ModelQuality = (output: any, context: __SerdeContext): ModelQuality => {
  return take(output, {
    Constraints: (_: any) => de_MetricsSource(_, context),
    Statistics: (_: any) => de_MetricsSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelQualityAppSpecification
 */
const de_ModelQualityAppSpecification = (output: any, context: __SerdeContext): ModelQualityAppSpecification => {
  return take(output, {
    ContainerArguments: (_: any) => de_MonitoringContainerArguments(_, context),
    ContainerEntrypoint: (_: any) => de_ContainerEntrypoint(_, context),
    Environment: (_: any) => de_MonitoringEnvironmentMap(_, context),
    ImageUri: __expectString,
    PostAnalyticsProcessorSourceUri: __expectString,
    ProblemType: __expectString,
    RecordPreprocessorSourceUri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelQualityBaselineConfig
 */
const de_ModelQualityBaselineConfig = (output: any, context: __SerdeContext): ModelQualityBaselineConfig => {
  return take(output, {
    BaseliningJobName: __expectString,
    ConstraintsResource: (_: any) => de_MonitoringConstraintsResource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelQualityJobInput
 */
const de_ModelQualityJobInput = (output: any, context: __SerdeContext): ModelQualityJobInput => {
  return take(output, {
    BatchTransformInput: (_: any) => de_BatchTransformInput(_, context),
    EndpointInput: (_: any) => de_EndpointInput(_, context),
    GroundTruthS3Input: (_: any) => de_MonitoringGroundTruthS3Input(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelRegisterSettings
 */
const de_ModelRegisterSettings = (output: any, context: __SerdeContext): ModelRegisterSettings => {
  return take(output, {
    CrossAccountModelRegisterRoleArn: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelStepMetadata
 */
const de_ModelStepMetadata = (output: any, context: __SerdeContext): ModelStepMetadata => {
  return take(output, {
    Arn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelSummary
 */
const de_ModelSummary = (output: any, context: __SerdeContext): ModelSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelArn: __expectString,
    ModelName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelSummaryList
 */
const de_ModelSummaryList = (output: any, context: __SerdeContext): ModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelVariantConfigSummary
 */
const de_ModelVariantConfigSummary = (output: any, context: __SerdeContext): ModelVariantConfigSummary => {
  return take(output, {
    InfrastructureConfig: (_: any) => de_ModelInfrastructureConfig(_, context),
    ModelName: __expectString,
    Status: __expectString,
    VariantName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelVariantConfigSummaryList
 */
const de_ModelVariantConfigSummaryList = (output: any, context: __SerdeContext): ModelVariantConfigSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelVariantConfigSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MonitoringAlertActions
 */
const de_MonitoringAlertActions = (output: any, context: __SerdeContext): MonitoringAlertActions => {
  return take(output, {
    ModelDashboardIndicator: (_: any) => de_ModelDashboardIndicatorAction(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringAlertHistoryList
 */
const de_MonitoringAlertHistoryList = (output: any, context: __SerdeContext): MonitoringAlertHistorySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitoringAlertHistorySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MonitoringAlertHistorySummary
 */
const de_MonitoringAlertHistorySummary = (output: any, context: __SerdeContext): MonitoringAlertHistorySummary => {
  return take(output, {
    AlertStatus: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MonitoringAlertName: __expectString,
    MonitoringScheduleName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringAlertSummary
 */
const de_MonitoringAlertSummary = (output: any, context: __SerdeContext): MonitoringAlertSummary => {
  return take(output, {
    Actions: (_: any) => de_MonitoringAlertActions(_, context),
    AlertStatus: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatapointsToAlert: __expectInt32,
    EvaluationPeriod: __expectInt32,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MonitoringAlertName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringAlertSummaryList
 */
const de_MonitoringAlertSummaryList = (output: any, context: __SerdeContext): MonitoringAlertSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitoringAlertSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MonitoringAppSpecification
 */
const de_MonitoringAppSpecification = (output: any, context: __SerdeContext): MonitoringAppSpecification => {
  return take(output, {
    ContainerArguments: (_: any) => de_MonitoringContainerArguments(_, context),
    ContainerEntrypoint: (_: any) => de_ContainerEntrypoint(_, context),
    ImageUri: __expectString,
    PostAnalyticsProcessorSourceUri: __expectString,
    RecordPreprocessorSourceUri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringBaselineConfig
 */
const de_MonitoringBaselineConfig = (output: any, context: __SerdeContext): MonitoringBaselineConfig => {
  return take(output, {
    BaseliningJobName: __expectString,
    ConstraintsResource: (_: any) => de_MonitoringConstraintsResource(_, context),
    StatisticsResource: (_: any) => de_MonitoringStatisticsResource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringClusterConfig
 */
const de_MonitoringClusterConfig = (output: any, context: __SerdeContext): MonitoringClusterConfig => {
  return take(output, {
    InstanceCount: __expectInt32,
    InstanceType: __expectString,
    VolumeKmsKeyId: __expectString,
    VolumeSizeInGB: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringConstraintsResource
 */
const de_MonitoringConstraintsResource = (output: any, context: __SerdeContext): MonitoringConstraintsResource => {
  return take(output, {
    S3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringContainerArguments
 */
const de_MonitoringContainerArguments = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MonitoringCsvDatasetFormat
 */
const de_MonitoringCsvDatasetFormat = (output: any, context: __SerdeContext): MonitoringCsvDatasetFormat => {
  return take(output, {
    Header: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringDatasetFormat
 */
const de_MonitoringDatasetFormat = (output: any, context: __SerdeContext): MonitoringDatasetFormat => {
  return take(output, {
    Csv: (_: any) => de_MonitoringCsvDatasetFormat(_, context),
    Json: (_: any) => de_MonitoringJsonDatasetFormat(_, context),
    Parquet: (_: any) => de_MonitoringParquetDatasetFormat(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringEnvironmentMap
 */
const de_MonitoringEnvironmentMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_json1_1MonitoringExecutionSummary
 */
const de_MonitoringExecutionSummary = (output: any, context: __SerdeContext): MonitoringExecutionSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointName: __expectString,
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MonitoringExecutionStatus: __expectString,
    MonitoringJobDefinitionName: __expectString,
    MonitoringScheduleName: __expectString,
    MonitoringType: __expectString,
    ProcessingJobArn: __expectString,
    ScheduledTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringExecutionSummaryList
 */
const de_MonitoringExecutionSummaryList = (output: any, context: __SerdeContext): MonitoringExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitoringExecutionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MonitoringGroundTruthS3Input
 */
const de_MonitoringGroundTruthS3Input = (output: any, context: __SerdeContext): MonitoringGroundTruthS3Input => {
  return take(output, {
    S3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringInput
 */
const de_MonitoringInput = (output: any, context: __SerdeContext): MonitoringInput => {
  return take(output, {
    BatchTransformInput: (_: any) => de_BatchTransformInput(_, context),
    EndpointInput: (_: any) => de_EndpointInput(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringInputs
 */
const de_MonitoringInputs = (output: any, context: __SerdeContext): MonitoringInput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitoringInput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MonitoringJobDefinition
 */
const de_MonitoringJobDefinition = (output: any, context: __SerdeContext): MonitoringJobDefinition => {
  return take(output, {
    BaselineConfig: (_: any) => de_MonitoringBaselineConfig(_, context),
    Environment: (_: any) => de_MonitoringEnvironmentMap(_, context),
    MonitoringAppSpecification: (_: any) => de_MonitoringAppSpecification(_, context),
    MonitoringInputs: (_: any) => de_MonitoringInputs(_, context),
    MonitoringOutputConfig: (_: any) => de_MonitoringOutputConfig(_, context),
    MonitoringResources: (_: any) => de_MonitoringResources(_, context),
    NetworkConfig: (_: any) => de_NetworkConfig(_, context),
    RoleArn: __expectString,
    StoppingCondition: (_: any) => de_MonitoringStoppingCondition(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringJobDefinitionSummary
 */
const de_MonitoringJobDefinitionSummary = (output: any, context: __SerdeContext): MonitoringJobDefinitionSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointName: __expectString,
    MonitoringJobDefinitionArn: __expectString,
    MonitoringJobDefinitionName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringJobDefinitionSummaryList
 */
const de_MonitoringJobDefinitionSummaryList = (
  output: any,
  context: __SerdeContext
): MonitoringJobDefinitionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitoringJobDefinitionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MonitoringJsonDatasetFormat
 */
const de_MonitoringJsonDatasetFormat = (output: any, context: __SerdeContext): MonitoringJsonDatasetFormat => {
  return take(output, {
    Line: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringNetworkConfig
 */
const de_MonitoringNetworkConfig = (output: any, context: __SerdeContext): MonitoringNetworkConfig => {
  return take(output, {
    EnableInterContainerTrafficEncryption: __expectBoolean,
    EnableNetworkIsolation: __expectBoolean,
    VpcConfig: (_: any) => de_VpcConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringOutput
 */
const de_MonitoringOutput = (output: any, context: __SerdeContext): MonitoringOutput => {
  return take(output, {
    S3Output: (_: any) => de_MonitoringS3Output(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringOutputConfig
 */
const de_MonitoringOutputConfig = (output: any, context: __SerdeContext): MonitoringOutputConfig => {
  return take(output, {
    KmsKeyId: __expectString,
    MonitoringOutputs: (_: any) => de_MonitoringOutputs(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringOutputs
 */
const de_MonitoringOutputs = (output: any, context: __SerdeContext): MonitoringOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitoringOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MonitoringParquetDatasetFormat
 */
const de_MonitoringParquetDatasetFormat = (output: any, context: __SerdeContext): MonitoringParquetDatasetFormat => {
  return take(output, {}) as any;
};

/**
 * deserializeAws_json1_1MonitoringResources
 */
const de_MonitoringResources = (output: any, context: __SerdeContext): MonitoringResources => {
  return take(output, {
    ClusterConfig: (_: any) => de_MonitoringClusterConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringS3Output
 */
const de_MonitoringS3Output = (output: any, context: __SerdeContext): MonitoringS3Output => {
  return take(output, {
    LocalPath: __expectString,
    S3UploadMode: __expectString,
    S3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringSchedule
 */
const de_MonitoringSchedule = (output: any, context: __SerdeContext): MonitoringSchedule => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointName: __expectString,
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastMonitoringExecutionSummary: (_: any) => de_MonitoringExecutionSummary(_, context),
    MonitoringScheduleArn: __expectString,
    MonitoringScheduleConfig: (_: any) => de_MonitoringScheduleConfig(_, context),
    MonitoringScheduleName: __expectString,
    MonitoringScheduleStatus: __expectString,
    MonitoringType: __expectString,
    Tags: (_: any) => de_TagList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringScheduleConfig
 */
const de_MonitoringScheduleConfig = (output: any, context: __SerdeContext): MonitoringScheduleConfig => {
  return take(output, {
    MonitoringJobDefinition: (_: any) => de_MonitoringJobDefinition(_, context),
    MonitoringJobDefinitionName: __expectString,
    MonitoringType: __expectString,
    ScheduleConfig: (_: any) => de_ScheduleConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringScheduleList
 */
const de_MonitoringScheduleList = (output: any, context: __SerdeContext): MonitoringSchedule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitoringSchedule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MonitoringScheduleSummary
 */
const de_MonitoringScheduleSummary = (output: any, context: __SerdeContext): MonitoringScheduleSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointName: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MonitoringJobDefinitionName: __expectString,
    MonitoringScheduleArn: __expectString,
    MonitoringScheduleName: __expectString,
    MonitoringScheduleStatus: __expectString,
    MonitoringType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringScheduleSummaryList
 */
const de_MonitoringScheduleSummaryList = (output: any, context: __SerdeContext): MonitoringScheduleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitoringScheduleSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MonitoringStatisticsResource
 */
const de_MonitoringStatisticsResource = (output: any, context: __SerdeContext): MonitoringStatisticsResource => {
  return take(output, {
    S3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringStoppingCondition
 */
const de_MonitoringStoppingCondition = (output: any, context: __SerdeContext): MonitoringStoppingCondition => {
  return take(output, {
    MaxRuntimeInSeconds: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1MultiModelConfig
 */
const de_MultiModelConfig = (output: any, context: __SerdeContext): MultiModelConfig => {
  return take(output, {
    ModelCacheSetting: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1NeoVpcConfig
 */
const de_NeoVpcConfig = (output: any, context: __SerdeContext): NeoVpcConfig => {
  return take(output, {
    SecurityGroupIds: (_: any) => de_NeoVpcSecurityGroupIds(_, context),
    Subnets: (_: any) => de_NeoVpcSubnets(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1NeoVpcSecurityGroupIds
 */
const de_NeoVpcSecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NeoVpcSubnets
 */
const de_NeoVpcSubnets = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NetworkConfig
 */
const de_NetworkConfig = (output: any, context: __SerdeContext): NetworkConfig => {
  return take(output, {
    EnableInterContainerTrafficEncryption: __expectBoolean,
    EnableNetworkIsolation: __expectBoolean,
    VpcConfig: (_: any) => de_VpcConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1NotebookInstanceAcceleratorTypes
 */
const de_NotebookInstanceAcceleratorTypes = (
  output: any,
  context: __SerdeContext
): NotebookInstanceAcceleratorType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotebookInstanceLifecycleConfigList
 */
const de_NotebookInstanceLifecycleConfigList = (
  output: any,
  context: __SerdeContext
): NotebookInstanceLifecycleHook[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NotebookInstanceLifecycleHook(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotebookInstanceLifecycleConfigSummary
 */
const de_NotebookInstanceLifecycleConfigSummary = (
  output: any,
  context: __SerdeContext
): NotebookInstanceLifecycleConfigSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NotebookInstanceLifecycleConfigArn: __expectString,
    NotebookInstanceLifecycleConfigName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1NotebookInstanceLifecycleConfigSummaryList
 */
const de_NotebookInstanceLifecycleConfigSummaryList = (
  output: any,
  context: __SerdeContext
): NotebookInstanceLifecycleConfigSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NotebookInstanceLifecycleConfigSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotebookInstanceLifecycleHook
 */
const de_NotebookInstanceLifecycleHook = (output: any, context: __SerdeContext): NotebookInstanceLifecycleHook => {
  return take(output, {
    Content: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1NotebookInstanceSummary
 */
const de_NotebookInstanceSummary = (output: any, context: __SerdeContext): NotebookInstanceSummary => {
  return take(output, {
    AdditionalCodeRepositories: (_: any) => de_AdditionalCodeRepositoryNamesOrUrls(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultCodeRepository: __expectString,
    InstanceType: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NotebookInstanceArn: __expectString,
    NotebookInstanceLifecycleConfigName: __expectString,
    NotebookInstanceName: __expectString,
    NotebookInstanceStatus: __expectString,
    Url: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1NotebookInstanceSummaryList
 */
const de_NotebookInstanceSummaryList = (output: any, context: __SerdeContext): NotebookInstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NotebookInstanceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotificationConfiguration
 */
const de_NotificationConfiguration = (output: any, context: __SerdeContext): NotificationConfiguration => {
  return take(output, {
    NotificationTopicArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ObjectiveStatusCounters
 */
const de_ObjectiveStatusCounters = (output: any, context: __SerdeContext): ObjectiveStatusCounters => {
  return take(output, {
    Failed: __expectInt32,
    Pending: __expectInt32,
    Succeeded: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1OfflineStoreConfig
 */
const de_OfflineStoreConfig = (output: any, context: __SerdeContext): OfflineStoreConfig => {
  return take(output, {
    DataCatalogConfig: (_: any) => de_DataCatalogConfig(_, context),
    DisableGlueTableCreation: __expectBoolean,
    S3StorageConfig: (_: any) => de_S3StorageConfig(_, context),
    TableFormat: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1OfflineStoreStatus
 */
const de_OfflineStoreStatus = (output: any, context: __SerdeContext): OfflineStoreStatus => {
  return take(output, {
    BlockedReason: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1OidcConfigForResponse
 */
const de_OidcConfigForResponse = (output: any, context: __SerdeContext): OidcConfigForResponse => {
  return take(output, {
    AuthenticationRequestExtraParams: (_: any) => de_AuthenticationRequestExtraParams(_, context),
    AuthorizationEndpoint: __expectString,
    ClientId: __expectString,
    Issuer: __expectString,
    JwksUri: __expectString,
    LogoutEndpoint: __expectString,
    Scope: __expectString,
    TokenEndpoint: __expectString,
    UserInfoEndpoint: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1OidcMemberDefinition
 */
const de_OidcMemberDefinition = (output: any, context: __SerdeContext): OidcMemberDefinition => {
  return take(output, {
    Groups: (_: any) => de_Groups(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1OnlineStoreConfig
 */
const de_OnlineStoreConfig = (output: any, context: __SerdeContext): OnlineStoreConfig => {
  return take(output, {
    EnableOnlineStore: __expectBoolean,
    SecurityConfig: (_: any) => de_OnlineStoreSecurityConfig(_, context),
    StorageType: __expectString,
    TtlDuration: (_: any) => de_TtlDuration(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1OnlineStoreSecurityConfig
 */
const de_OnlineStoreSecurityConfig = (output: any, context: __SerdeContext): OnlineStoreSecurityConfig => {
  return take(output, {
    KmsKeyId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1OutputConfig
 */
const de_OutputConfig = (output: any, context: __SerdeContext): OutputConfig => {
  return take(output, {
    CompilerOptions: __expectString,
    KmsKeyId: __expectString,
    S3OutputLocation: __expectString,
    TargetDevice: __expectString,
    TargetPlatform: (_: any) => de_TargetPlatform(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1OutputDataConfig
 */
const de_OutputDataConfig = (output: any, context: __SerdeContext): OutputDataConfig => {
  return take(output, {
    CompressionType: __expectString,
    KmsKeyId: __expectString,
    S3OutputPath: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1OutputParameter
 */
const de_OutputParameter = (output: any, context: __SerdeContext): OutputParameter => {
  return take(output, {
    Name: __expectString,
    Value: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1OutputParameterList
 */
const de_OutputParameterList = (output: any, context: __SerdeContext): OutputParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OutputParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OwnershipSettings
 */
const de_OwnershipSettings = (output: any, context: __SerdeContext): OwnershipSettings => {
  return take(output, {
    OwnerUserProfileName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1OwnershipSettingsSummary
 */
const de_OwnershipSettingsSummary = (output: any, context: __SerdeContext): OwnershipSettingsSummary => {
  return take(output, {
    OwnerUserProfileName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ParallelismConfiguration
 */
const de_ParallelismConfiguration = (output: any, context: __SerdeContext): ParallelismConfiguration => {
  return take(output, {
    MaxParallelExecutionSteps: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1Parameter
 */
const de_Parameter = (output: any, context: __SerdeContext): Parameter => {
  return take(output, {
    Name: __expectString,
    Value: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ParameterList
 */
const de_ParameterList = (output: any, context: __SerdeContext): Parameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Parameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ParameterRange
 */
const de_ParameterRange = (output: any, context: __SerdeContext): ParameterRange => {
  return take(output, {
    CategoricalParameterRangeSpecification: (_: any) => de_CategoricalParameterRangeSpecification(_, context),
    ContinuousParameterRangeSpecification: (_: any) => de_ContinuousParameterRangeSpecification(_, context),
    IntegerParameterRangeSpecification: (_: any) => de_IntegerParameterRangeSpecification(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ParameterRanges
 */
const de_ParameterRanges = (output: any, context: __SerdeContext): ParameterRanges => {
  return take(output, {
    AutoParameters: (_: any) => de_AutoParameters(_, context),
    CategoricalParameterRanges: (_: any) => de_CategoricalParameterRanges(_, context),
    ContinuousParameterRanges: (_: any) => de_ContinuousParameterRanges(_, context),
    IntegerParameterRanges: (_: any) => de_IntegerParameterRanges(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ParameterValues
 */
const de_ParameterValues = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Parent
 */
const de_Parent = (output: any, context: __SerdeContext): Parent => {
  return take(output, {
    ExperimentName: __expectString,
    TrialName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ParentHyperParameterTuningJob
 */
const de_ParentHyperParameterTuningJob = (output: any, context: __SerdeContext): ParentHyperParameterTuningJob => {
  return take(output, {
    HyperParameterTuningJobName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ParentHyperParameterTuningJobs
 */
const de_ParentHyperParameterTuningJobs = (output: any, context: __SerdeContext): ParentHyperParameterTuningJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ParentHyperParameterTuningJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Parents
 */
const de_Parents = (output: any, context: __SerdeContext): Parent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Parent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PendingDeploymentSummary
 */
const de_PendingDeploymentSummary = (output: any, context: __SerdeContext): PendingDeploymentSummary => {
  return take(output, {
    EndpointConfigName: __expectString,
    ProductionVariants: (_: any) => de_PendingProductionVariantSummaryList(_, context),
    ShadowProductionVariants: (_: any) => de_PendingProductionVariantSummaryList(_, context),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1PendingProductionVariantSummary
 */
const de_PendingProductionVariantSummary = (output: any, context: __SerdeContext): PendingProductionVariantSummary => {
  return take(output, {
    AcceleratorType: __expectString,
    CurrentInstanceCount: __expectInt32,
    CurrentServerlessConfig: (_: any) => de_ProductionVariantServerlessConfig(_, context),
    CurrentWeight: __limitedParseFloat32,
    DeployedImages: (_: any) => de_DeployedImages(_, context),
    DesiredInstanceCount: __expectInt32,
    DesiredServerlessConfig: (_: any) => de_ProductionVariantServerlessConfig(_, context),
    DesiredWeight: __limitedParseFloat32,
    InstanceType: __expectString,
    ManagedInstanceScaling: (_: any) => de_ProductionVariantManagedInstanceScaling(_, context),
    RoutingConfig: (_: any) => de_ProductionVariantRoutingConfig(_, context),
    VariantName: __expectString,
    VariantStatus: (_: any) => de_ProductionVariantStatusList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1PendingProductionVariantSummaryList
 */
const de_PendingProductionVariantSummaryList = (
  output: any,
  context: __SerdeContext
): PendingProductionVariantSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PendingProductionVariantSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Phase
 */
const de_Phase = (output: any, context: __SerdeContext): Phase => {
  return take(output, {
    DurationInSeconds: __expectInt32,
    InitialNumberOfUsers: __expectInt32,
    SpawnRate: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1Phases
 */
const de_Phases = (output: any, context: __SerdeContext): Phase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Phase(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Pipeline
 */
const de_Pipeline = (output: any, context: __SerdeContext): Pipeline => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastRunTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ParallelismConfiguration: (_: any) => de_ParallelismConfiguration(_, context),
    PipelineArn: __expectString,
    PipelineDescription: __expectString,
    PipelineDisplayName: __expectString,
    PipelineName: __expectString,
    PipelineStatus: __expectString,
    RoleArn: __expectString,
    Tags: (_: any) => de_TagList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1PipelineExecution
 */
const de_PipelineExecution = (output: any, context: __SerdeContext): PipelineExecution => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ParallelismConfiguration: (_: any) => de_ParallelismConfiguration(_, context),
    PipelineArn: __expectString,
    PipelineExecutionArn: __expectString,
    PipelineExecutionDescription: __expectString,
    PipelineExecutionDisplayName: __expectString,
    PipelineExecutionStatus: __expectString,
    PipelineExperimentConfig: (_: any) => de_PipelineExperimentConfig(_, context),
    PipelineParameters: (_: any) => de_ParameterList(_, context),
    SelectiveExecutionConfig: (_: any) => de_SelectiveExecutionConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1PipelineExecutionStep
 */
const de_PipelineExecutionStep = (output: any, context: __SerdeContext): PipelineExecutionStep => {
  return take(output, {
    AttemptCount: __expectInt32,
    CacheHitResult: (_: any) => de_CacheHitResult(_, context),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    Metadata: (_: any) => de_PipelineExecutionStepMetadata(_, context),
    SelectiveExecutionResult: (_: any) => de_SelectiveExecutionResult(_, context),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StepDescription: __expectString,
    StepDisplayName: __expectString,
    StepName: __expectString,
    StepStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PipelineExecutionStepList
 */
const de_PipelineExecutionStepList = (output: any, context: __SerdeContext): PipelineExecutionStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PipelineExecutionStep(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PipelineExecutionStepMetadata
 */
const de_PipelineExecutionStepMetadata = (output: any, context: __SerdeContext): PipelineExecutionStepMetadata => {
  return take(output, {
    AutoMLJob: (_: any) => de_AutoMLJobStepMetadata(_, context),
    Callback: (_: any) => de_CallbackStepMetadata(_, context),
    ClarifyCheck: (_: any) => de_ClarifyCheckStepMetadata(_, context),
    Condition: (_: any) => de_ConditionStepMetadata(_, context),
    EMR: (_: any) => de_EMRStepMetadata(_, context),
    Fail: (_: any) => de_FailStepMetadata(_, context),
    Lambda: (_: any) => de_LambdaStepMetadata(_, context),
    Model: (_: any) => de_ModelStepMetadata(_, context),
    ProcessingJob: (_: any) => de_ProcessingJobStepMetadata(_, context),
    QualityCheck: (_: any) => de_QualityCheckStepMetadata(_, context),
    RegisterModel: (_: any) => de_RegisterModelStepMetadata(_, context),
    TrainingJob: (_: any) => de_TrainingJobStepMetadata(_, context),
    TransformJob: (_: any) => de_TransformJobStepMetadata(_, context),
    TuningJob: (_: any) => de_TuningJobStepMetaData(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1PipelineExecutionSummary
 */
const de_PipelineExecutionSummary = (output: any, context: __SerdeContext): PipelineExecutionSummary => {
  return take(output, {
    PipelineExecutionArn: __expectString,
    PipelineExecutionDescription: __expectString,
    PipelineExecutionDisplayName: __expectString,
    PipelineExecutionFailureReason: __expectString,
    PipelineExecutionStatus: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1PipelineExecutionSummaryList
 */
const de_PipelineExecutionSummaryList = (output: any, context: __SerdeContext): PipelineExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PipelineExecutionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PipelineExperimentConfig
 */
const de_PipelineExperimentConfig = (output: any, context: __SerdeContext): PipelineExperimentConfig => {
  return take(output, {
    ExperimentName: __expectString,
    TrialName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PipelineSummary
 */
const de_PipelineSummary = (output: any, context: __SerdeContext): PipelineSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastExecutionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PipelineArn: __expectString,
    PipelineDescription: __expectString,
    PipelineDisplayName: __expectString,
    PipelineName: __expectString,
    RoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PipelineSummaryList
 */
const de_PipelineSummaryList = (output: any, context: __SerdeContext): PipelineSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PipelineSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PredefinedMetricSpecification
 */
const de_PredefinedMetricSpecification = (output: any, context: __SerdeContext): PredefinedMetricSpecification => {
  return take(output, {
    PredefinedMetricType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProcessingClusterConfig
 */
const de_ProcessingClusterConfig = (output: any, context: __SerdeContext): ProcessingClusterConfig => {
  return take(output, {
    InstanceCount: __expectInt32,
    InstanceType: __expectString,
    VolumeKmsKeyId: __expectString,
    VolumeSizeInGB: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ProcessingEnvironmentMap
 */
const de_ProcessingEnvironmentMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_json1_1ProcessingFeatureStoreOutput
 */
const de_ProcessingFeatureStoreOutput = (output: any, context: __SerdeContext): ProcessingFeatureStoreOutput => {
  return take(output, {
    FeatureGroupName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProcessingInput
 */
const de_ProcessingInput = (output: any, context: __SerdeContext): ProcessingInput => {
  return take(output, {
    AppManaged: __expectBoolean,
    DatasetDefinition: (_: any) => de_DatasetDefinition(_, context),
    InputName: __expectString,
    S3Input: (_: any) => de_ProcessingS3Input(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ProcessingInputs
 */
const de_ProcessingInputs = (output: any, context: __SerdeContext): ProcessingInput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProcessingInput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProcessingJob
 */
const de_ProcessingJob = (output: any, context: __SerdeContext): ProcessingJob => {
  return take(output, {
    AppSpecification: (_: any) => de_AppSpecification(_, context),
    AutoMLJobArn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Environment: (_: any) => de_ProcessingEnvironmentMap(_, context),
    ExitMessage: __expectString,
    ExperimentConfig: (_: any) => de_ExperimentConfig(_, context),
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MonitoringScheduleArn: __expectString,
    NetworkConfig: (_: any) => de_NetworkConfig(_, context),
    ProcessingEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProcessingInputs: (_: any) => de_ProcessingInputs(_, context),
    ProcessingJobArn: __expectString,
    ProcessingJobName: __expectString,
    ProcessingJobStatus: __expectString,
    ProcessingOutputConfig: (_: any) => de_ProcessingOutputConfig(_, context),
    ProcessingResources: (_: any) => de_ProcessingResources(_, context),
    ProcessingStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RoleArn: __expectString,
    StoppingCondition: (_: any) => de_ProcessingStoppingCondition(_, context),
    Tags: (_: any) => de_TagList(_, context),
    TrainingJobArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProcessingJobStepMetadata
 */
const de_ProcessingJobStepMetadata = (output: any, context: __SerdeContext): ProcessingJobStepMetadata => {
  return take(output, {
    Arn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProcessingJobSummaries
 */
const de_ProcessingJobSummaries = (output: any, context: __SerdeContext): ProcessingJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProcessingJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProcessingJobSummary
 */
const de_ProcessingJobSummary = (output: any, context: __SerdeContext): ProcessingJobSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExitMessage: __expectString,
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProcessingEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProcessingJobArn: __expectString,
    ProcessingJobName: __expectString,
    ProcessingJobStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProcessingOutput
 */
const de_ProcessingOutput = (output: any, context: __SerdeContext): ProcessingOutput => {
  return take(output, {
    AppManaged: __expectBoolean,
    FeatureStoreOutput: (_: any) => de_ProcessingFeatureStoreOutput(_, context),
    OutputName: __expectString,
    S3Output: (_: any) => de_ProcessingS3Output(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ProcessingOutputConfig
 */
const de_ProcessingOutputConfig = (output: any, context: __SerdeContext): ProcessingOutputConfig => {
  return take(output, {
    KmsKeyId: __expectString,
    Outputs: (_: any) => de_ProcessingOutputs(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ProcessingOutputs
 */
const de_ProcessingOutputs = (output: any, context: __SerdeContext): ProcessingOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProcessingOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProcessingResources
 */
const de_ProcessingResources = (output: any, context: __SerdeContext): ProcessingResources => {
  return take(output, {
    ClusterConfig: (_: any) => de_ProcessingClusterConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ProcessingS3Input
 */
const de_ProcessingS3Input = (output: any, context: __SerdeContext): ProcessingS3Input => {
  return take(output, {
    LocalPath: __expectString,
    S3CompressionType: __expectString,
    S3DataDistributionType: __expectString,
    S3DataType: __expectString,
    S3InputMode: __expectString,
    S3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProcessingS3Output
 */
const de_ProcessingS3Output = (output: any, context: __SerdeContext): ProcessingS3Output => {
  return take(output, {
    LocalPath: __expectString,
    S3UploadMode: __expectString,
    S3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProcessingStoppingCondition
 */
const de_ProcessingStoppingCondition = (output: any, context: __SerdeContext): ProcessingStoppingCondition => {
  return take(output, {
    MaxRuntimeInSeconds: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ProductionVariant
 */
const de_ProductionVariant = (output: any, context: __SerdeContext): ProductionVariant => {
  return take(output, {
    AcceleratorType: __expectString,
    ContainerStartupHealthCheckTimeoutInSeconds: __expectInt32,
    CoreDumpConfig: (_: any) => de_ProductionVariantCoreDumpConfig(_, context),
    EnableSSMAccess: __expectBoolean,
    InferenceAmiVersion: __expectString,
    InitialInstanceCount: __expectInt32,
    InitialVariantWeight: __limitedParseFloat32,
    InstanceType: __expectString,
    ManagedInstanceScaling: (_: any) => de_ProductionVariantManagedInstanceScaling(_, context),
    ModelDataDownloadTimeoutInSeconds: __expectInt32,
    ModelName: __expectString,
    RoutingConfig: (_: any) => de_ProductionVariantRoutingConfig(_, context),
    ServerlessConfig: (_: any) => de_ProductionVariantServerlessConfig(_, context),
    VariantName: __expectString,
    VolumeSizeInGB: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ProductionVariantCoreDumpConfig
 */
const de_ProductionVariantCoreDumpConfig = (output: any, context: __SerdeContext): ProductionVariantCoreDumpConfig => {
  return take(output, {
    DestinationS3Uri: __expectString,
    KmsKeyId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProductionVariantList
 */
const de_ProductionVariantList = (output: any, context: __SerdeContext): ProductionVariant[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProductionVariant(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProductionVariantManagedInstanceScaling
 */
const de_ProductionVariantManagedInstanceScaling = (
  output: any,
  context: __SerdeContext
): ProductionVariantManagedInstanceScaling => {
  return take(output, {
    MaxInstanceCount: __expectInt32,
    MinInstanceCount: __expectInt32,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProductionVariantRoutingConfig
 */
const de_ProductionVariantRoutingConfig = (output: any, context: __SerdeContext): ProductionVariantRoutingConfig => {
  return take(output, {
    RoutingStrategy: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProductionVariantServerlessConfig
 */
const de_ProductionVariantServerlessConfig = (
  output: any,
  context: __SerdeContext
): ProductionVariantServerlessConfig => {
  return take(output, {
    MaxConcurrency: __expectInt32,
    MemorySizeInMB: __expectInt32,
    ProvisionedConcurrency: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ProductionVariantStatus
 */
const de_ProductionVariantStatus = (output: any, context: __SerdeContext): ProductionVariantStatus => {
  return take(output, {
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProductionVariantStatusList
 */
const de_ProductionVariantStatusList = (output: any, context: __SerdeContext): ProductionVariantStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProductionVariantStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProductionVariantSummary
 */
const de_ProductionVariantSummary = (output: any, context: __SerdeContext): ProductionVariantSummary => {
  return take(output, {
    CurrentInstanceCount: __expectInt32,
    CurrentServerlessConfig: (_: any) => de_ProductionVariantServerlessConfig(_, context),
    CurrentWeight: __limitedParseFloat32,
    DeployedImages: (_: any) => de_DeployedImages(_, context),
    DesiredInstanceCount: __expectInt32,
    DesiredServerlessConfig: (_: any) => de_ProductionVariantServerlessConfig(_, context),
    DesiredWeight: __limitedParseFloat32,
    ManagedInstanceScaling: (_: any) => de_ProductionVariantManagedInstanceScaling(_, context),
    RoutingConfig: (_: any) => de_ProductionVariantRoutingConfig(_, context),
    VariantName: __expectString,
    VariantStatus: (_: any) => de_ProductionVariantStatusList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ProductionVariantSummaryList
 */
const de_ProductionVariantSummaryList = (output: any, context: __SerdeContext): ProductionVariantSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProductionVariantSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProductListings
 */
const de_ProductListings = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProfilerConfig
 */
const de_ProfilerConfig = (output: any, context: __SerdeContext): ProfilerConfig => {
  return take(output, {
    DisableProfiler: __expectBoolean,
    ProfilingIntervalInMilliseconds: __expectLong,
    ProfilingParameters: (_: any) => de_ProfilingParameters(_, context),
    S3OutputPath: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProfilerRuleConfiguration
 */
const de_ProfilerRuleConfiguration = (output: any, context: __SerdeContext): ProfilerRuleConfiguration => {
  return take(output, {
    InstanceType: __expectString,
    LocalPath: __expectString,
    RuleConfigurationName: __expectString,
    RuleEvaluatorImage: __expectString,
    RuleParameters: (_: any) => de_RuleParameters(_, context),
    S3OutputPath: __expectString,
    VolumeSizeInGB: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ProfilerRuleConfigurations
 */
const de_ProfilerRuleConfigurations = (output: any, context: __SerdeContext): ProfilerRuleConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProfilerRuleConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProfilerRuleEvaluationStatus
 */
const de_ProfilerRuleEvaluationStatus = (output: any, context: __SerdeContext): ProfilerRuleEvaluationStatus => {
  return take(output, {
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RuleConfigurationName: __expectString,
    RuleEvaluationJobArn: __expectString,
    RuleEvaluationStatus: __expectString,
    StatusDetails: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProfilerRuleEvaluationStatuses
 */
const de_ProfilerRuleEvaluationStatuses = (output: any, context: __SerdeContext): ProfilerRuleEvaluationStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProfilerRuleEvaluationStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProfilingParameters
 */
const de_ProfilingParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_json1_1Project
 */
const de_Project = (output: any, context: __SerdeContext): Project => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProjectArn: __expectString,
    ProjectDescription: __expectString,
    ProjectId: __expectString,
    ProjectName: __expectString,
    ProjectStatus: __expectString,
    ServiceCatalogProvisionedProductDetails: (_: any) => de_ServiceCatalogProvisionedProductDetails(_, context),
    ServiceCatalogProvisioningDetails: (_: any) => de_ServiceCatalogProvisioningDetails(_, context),
    Tags: (_: any) => de_TagList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ProjectSummary
 */
const de_ProjectSummary = (output: any, context: __SerdeContext): ProjectSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProjectArn: __expectString,
    ProjectDescription: __expectString,
    ProjectId: __expectString,
    ProjectName: __expectString,
    ProjectStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProjectSummaryList
 */
const de_ProjectSummaryList = (output: any, context: __SerdeContext): ProjectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProjectSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PropertyNameSuggestion
 */
const de_PropertyNameSuggestion = (output: any, context: __SerdeContext): PropertyNameSuggestion => {
  return take(output, {
    PropertyName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PropertyNameSuggestionList
 */
const de_PropertyNameSuggestionList = (output: any, context: __SerdeContext): PropertyNameSuggestion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PropertyNameSuggestion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProvisioningParameter
 */
const de_ProvisioningParameter = (output: any, context: __SerdeContext): ProvisioningParameter => {
  return take(output, {
    Key: __expectString,
    Value: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProvisioningParameters
 */
const de_ProvisioningParameters = (output: any, context: __SerdeContext): ProvisioningParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProvisioningParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PublicWorkforceTaskPrice
 */
const de_PublicWorkforceTaskPrice = (output: any, context: __SerdeContext): PublicWorkforceTaskPrice => {
  return take(output, {
    AmountInUsd: (_: any) => de_USD(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1PutModelPackageGroupPolicyOutput
 */
const de_PutModelPackageGroupPolicyOutput = (
  output: any,
  context: __SerdeContext
): PutModelPackageGroupPolicyOutput => {
  return take(output, {
    ModelPackageGroupArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1QualityCheckStepMetadata
 */
const de_QualityCheckStepMetadata = (output: any, context: __SerdeContext): QualityCheckStepMetadata => {
  return take(output, {
    BaselineUsedForDriftCheckConstraints: __expectString,
    BaselineUsedForDriftCheckStatistics: __expectString,
    CalculatedBaselineConstraints: __expectString,
    CalculatedBaselineStatistics: __expectString,
    CheckJobArn: __expectString,
    CheckType: __expectString,
    ModelPackageGroupName: __expectString,
    RegisterNewBaseline: __expectBoolean,
    SkipCheck: __expectBoolean,
    ViolationReport: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1QueryLineageResponse
 */
const de_QueryLineageResponse = (output: any, context: __SerdeContext): QueryLineageResponse => {
  return take(output, {
    Edges: (_: any) => de_Edges(_, context),
    NextToken: __expectString,
    Vertices: (_: any) => de_Vertices(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RealTimeInferenceConfig
 */
const de_RealTimeInferenceConfig = (output: any, context: __SerdeContext): RealTimeInferenceConfig => {
  return take(output, {
    InstanceCount: __expectInt32,
    InstanceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RealtimeInferenceInstanceTypes
 */
const de_RealtimeInferenceInstanceTypes = (output: any, context: __SerdeContext): ProductionVariantInstanceType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RealTimeInferenceRecommendation
 */
const de_RealTimeInferenceRecommendation = (output: any, context: __SerdeContext): RealTimeInferenceRecommendation => {
  return take(output, {
    Environment: (_: any) => de_EnvironmentMap(_, context),
    InstanceType: __expectString,
    RecommendationId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RealTimeInferenceRecommendations
 */
const de_RealTimeInferenceRecommendations = (
  output: any,
  context: __SerdeContext
): RealTimeInferenceRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RealTimeInferenceRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecommendationJobContainerConfig
 */
const de_RecommendationJobContainerConfig = (
  output: any,
  context: __SerdeContext
): RecommendationJobContainerConfig => {
  return take(output, {
    DataInputConfig: __expectString,
    Domain: __expectString,
    Framework: __expectString,
    FrameworkVersion: __expectString,
    NearestModelName: __expectString,
    PayloadConfig: (_: any) => de_RecommendationJobPayloadConfig(_, context),
    SupportedEndpointType: __expectString,
    SupportedInstanceTypes: (_: any) => de_RecommendationJobSupportedInstanceTypes(_, context),
    SupportedResponseMIMETypes: (_: any) => de_RecommendationJobSupportedResponseMIMETypes(_, context),
    Task: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RecommendationJobInferenceBenchmark
 */
const de_RecommendationJobInferenceBenchmark = (
  output: any,
  context: __SerdeContext
): RecommendationJobInferenceBenchmark => {
  return take(output, {
    EndpointConfiguration: (_: any) => de_EndpointOutputConfiguration(_, context),
    EndpointMetrics: (_: any) => de_InferenceMetrics(_, context),
    FailureReason: __expectString,
    InvocationEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InvocationStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Metrics: (_: any) => de_RecommendationMetrics(_, context),
    ModelConfiguration: (_: any) => de_ModelConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RecommendationJobInputConfig
 */
const de_RecommendationJobInputConfig = (output: any, context: __SerdeContext): RecommendationJobInputConfig => {
  return take(output, {
    ContainerConfig: (_: any) => de_RecommendationJobContainerConfig(_, context),
    EndpointConfigurations: (_: any) => de_EndpointInputConfigurations(_, context),
    Endpoints: (_: any) => de_Endpoints(_, context),
    JobDurationInSeconds: __expectInt32,
    ModelName: __expectString,
    ModelPackageVersionArn: __expectString,
    ResourceLimit: (_: any) => de_RecommendationJobResourceLimit(_, context),
    TrafficPattern: (_: any) => de_TrafficPattern(_, context),
    VolumeKmsKeyId: __expectString,
    VpcConfig: (_: any) => de_RecommendationJobVpcConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RecommendationJobPayloadConfig
 */
const de_RecommendationJobPayloadConfig = (output: any, context: __SerdeContext): RecommendationJobPayloadConfig => {
  return take(output, {
    SamplePayloadUrl: __expectString,
    SupportedContentTypes: (_: any) => de_RecommendationJobSupportedContentTypes(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RecommendationJobResourceLimit
 */
const de_RecommendationJobResourceLimit = (output: any, context: __SerdeContext): RecommendationJobResourceLimit => {
  return take(output, {
    MaxNumberOfTests: __expectInt32,
    MaxParallelOfTests: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1RecommendationJobStoppingConditions
 */
const de_RecommendationJobStoppingConditions = (
  output: any,
  context: __SerdeContext
): RecommendationJobStoppingConditions => {
  return take(output, {
    FlatInvocations: __expectString,
    MaxInvocations: __expectInt32,
    ModelLatencyThresholds: (_: any) => de_ModelLatencyThresholds(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RecommendationJobSupportedContentTypes
 */
const de_RecommendationJobSupportedContentTypes = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecommendationJobSupportedInstanceTypes
 */
const de_RecommendationJobSupportedInstanceTypes = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecommendationJobSupportedResponseMIMETypes
 */
const de_RecommendationJobSupportedResponseMIMETypes = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecommendationJobVpcConfig
 */
const de_RecommendationJobVpcConfig = (output: any, context: __SerdeContext): RecommendationJobVpcConfig => {
  return take(output, {
    SecurityGroupIds: (_: any) => de_RecommendationJobVpcSecurityGroupIds(_, context),
    Subnets: (_: any) => de_RecommendationJobVpcSubnets(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RecommendationJobVpcSecurityGroupIds
 */
const de_RecommendationJobVpcSecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecommendationJobVpcSubnets
 */
const de_RecommendationJobVpcSubnets = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecommendationMetrics
 */
const de_RecommendationMetrics = (output: any, context: __SerdeContext): RecommendationMetrics => {
  return take(output, {
    CostPerHour: __limitedParseFloat32,
    CostPerInference: __limitedParseFloat32,
    CpuUtilization: __limitedParseFloat32,
    MaxInvocations: __expectInt32,
    MemoryUtilization: __limitedParseFloat32,
    ModelLatency: __expectInt32,
    ModelSetupTime: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1RedshiftDatasetDefinition
 */
const de_RedshiftDatasetDefinition = (output: any, context: __SerdeContext): RedshiftDatasetDefinition => {
  return take(output, {
    ClusterId: __expectString,
    ClusterRoleArn: __expectString,
    Database: __expectString,
    DbUser: __expectString,
    KmsKeyId: __expectString,
    OutputCompression: __expectString,
    OutputFormat: __expectString,
    OutputS3Uri: __expectString,
    QueryString: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RegisterModelStepMetadata
 */
const de_RegisterModelStepMetadata = (output: any, context: __SerdeContext): RegisterModelStepMetadata => {
  return take(output, {
    Arn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RemoteDebugConfig
 */
const de_RemoteDebugConfig = (output: any, context: __SerdeContext): RemoteDebugConfig => {
  return take(output, {
    EnableRemoteDebug: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1RenderingError
 */
const de_RenderingError = (output: any, context: __SerdeContext): RenderingError => {
  return take(output, {
    Code: __expectString,
    Message: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RenderingErrorList
 */
const de_RenderingErrorList = (output: any, context: __SerdeContext): RenderingError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RenderingError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RenderUiTemplateResponse
 */
const de_RenderUiTemplateResponse = (output: any, context: __SerdeContext): RenderUiTemplateResponse => {
  return take(output, {
    Errors: (_: any) => de_RenderingErrorList(_, context),
    RenderedContent: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RepositoryAuthConfig
 */
const de_RepositoryAuthConfig = (output: any, context: __SerdeContext): RepositoryAuthConfig => {
  return take(output, {
    RepositoryCredentialsProviderArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ResolvedAttributes
 */
const de_ResolvedAttributes = (output: any, context: __SerdeContext): ResolvedAttributes => {
  return take(output, {
    AutoMLJobObjective: (_: any) => de_AutoMLJobObjective(_, context),
    CompletionCriteria: (_: any) => de_AutoMLJobCompletionCriteria(_, context),
    ProblemType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceCatalog
 */
const de_ResourceCatalog = (output: any, context: __SerdeContext): ResourceCatalog => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ResourceCatalogArn: __expectString,
    ResourceCatalogName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceCatalogList
 */
const de_ResourceCatalogList = (output: any, context: __SerdeContext): ResourceCatalog[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceCatalog(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceConfig
 */
const de_ResourceConfig = (output: any, context: __SerdeContext): ResourceConfig => {
  return take(output, {
    InstanceCount: __expectInt32,
    InstanceGroups: (_: any) => de_InstanceGroups(_, context),
    InstanceType: __expectString,
    KeepAlivePeriodInSeconds: __expectInt32,
    VolumeKmsKeyId: __expectString,
    VolumeSizeInGB: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceInUse
 */
const de_ResourceInUse = (output: any, context: __SerdeContext): ResourceInUse => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceLimitExceeded
 */
const de_ResourceLimitExceeded = (output: any, context: __SerdeContext): ResourceLimitExceeded => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceLimits
 */
const de_ResourceLimits = (output: any, context: __SerdeContext): ResourceLimits => {
  return take(output, {
    MaxNumberOfTrainingJobs: __expectInt32,
    MaxParallelTrainingJobs: __expectInt32,
    MaxRuntimeInSeconds: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceNotFound
 */
const de_ResourceNotFound = (output: any, context: __SerdeContext): ResourceNotFound => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceSpec
 */
const de_ResourceSpec = (output: any, context: __SerdeContext): ResourceSpec => {
  return take(output, {
    InstanceType: __expectString,
    LifecycleConfigArn: __expectString,
    SageMakerImageArn: __expectString,
    SageMakerImageVersionAlias: __expectString,
    SageMakerImageVersionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ResponseMIMETypes
 */
const de_ResponseMIMETypes = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RetryPipelineExecutionResponse
 */
const de_RetryPipelineExecutionResponse = (output: any, context: __SerdeContext): RetryPipelineExecutionResponse => {
  return take(output, {
    PipelineExecutionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RetryStrategy
 */
const de_RetryStrategy = (output: any, context: __SerdeContext): RetryStrategy => {
  return take(output, {
    MaximumRetryAttempts: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1RollingUpdatePolicy
 */
const de_RollingUpdatePolicy = (output: any, context: __SerdeContext): RollingUpdatePolicy => {
  return take(output, {
    MaximumBatchSize: (_: any) => de_CapacitySize(_, context),
    MaximumExecutionTimeoutInSeconds: __expectInt32,
    RollbackMaximumBatchSize: (_: any) => de_CapacitySize(_, context),
    WaitIntervalInSeconds: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1RSessionAppSettings
 */
const de_RSessionAppSettings = (output: any, context: __SerdeContext): RSessionAppSettings => {
  return take(output, {
    CustomImages: (_: any) => de_CustomImages(_, context),
    DefaultResourceSpec: (_: any) => de_ResourceSpec(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RStudioServerProAppSettings
 */
const de_RStudioServerProAppSettings = (output: any, context: __SerdeContext): RStudioServerProAppSettings => {
  return take(output, {
    AccessStatus: __expectString,
    UserGroup: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RStudioServerProDomainSettings
 */
const de_RStudioServerProDomainSettings = (output: any, context: __SerdeContext): RStudioServerProDomainSettings => {
  return take(output, {
    DefaultResourceSpec: (_: any) => de_ResourceSpec(_, context),
    DomainExecutionRoleArn: __expectString,
    RStudioConnectUrl: __expectString,
    RStudioPackageManagerUrl: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RuleParameters
 */
const de_RuleParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_json1_1S3DataSource
 */
const de_S3DataSource = (output: any, context: __SerdeContext): S3DataSource => {
  return take(output, {
    AttributeNames: (_: any) => de_AttributeNames(_, context),
    InstanceGroupNames: (_: any) => de_InstanceGroupNames(_, context),
    S3DataDistributionType: __expectString,
    S3DataType: __expectString,
    S3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1S3ModelDataSource
 */
const de_S3ModelDataSource = (output: any, context: __SerdeContext): S3ModelDataSource => {
  return take(output, {
    CompressionType: __expectString,
    ModelAccessConfig: (_: any) => de_ModelAccessConfig(_, context),
    S3DataType: __expectString,
    S3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1S3Presign
 */
const de_S3Presign = (output: any, context: __SerdeContext): S3Presign => {
  return take(output, {
    IamPolicyConstraints: (_: any) => de_IamPolicyConstraints(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1S3StorageConfig
 */
const de_S3StorageConfig = (output: any, context: __SerdeContext): S3StorageConfig => {
  return take(output, {
    KmsKeyId: __expectString,
    ResolvedOutputS3Uri: __expectString,
    S3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SageMakerImageVersionAliases
 */
const de_SageMakerImageVersionAliases = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ScalingPolicies
 */
const de_ScalingPolicies = (output: any, context: __SerdeContext): ScalingPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScalingPolicy(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ScalingPolicy
 */
const de_ScalingPolicy = (output: any, context: __SerdeContext): ScalingPolicy => {
  if (output.TargetTracking != null) {
    return {
      TargetTracking: de_TargetTrackingScalingPolicyConfiguration(output.TargetTracking, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_1ScalingPolicyMetric
 */
const de_ScalingPolicyMetric = (output: any, context: __SerdeContext): ScalingPolicyMetric => {
  return take(output, {
    InvocationsPerInstance: __expectInt32,
    ModelLatency: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ScalingPolicyObjective
 */
const de_ScalingPolicyObjective = (output: any, context: __SerdeContext): ScalingPolicyObjective => {
  return take(output, {
    MaxInvocationsPerMinute: __expectInt32,
    MinInvocationsPerMinute: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ScheduleConfig
 */
const de_ScheduleConfig = (output: any, context: __SerdeContext): ScheduleConfig => {
  return take(output, {
    DataAnalysisEndTime: __expectString,
    DataAnalysisStartTime: __expectString,
    ScheduleExpression: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SearchRecord
 */
const de_SearchRecord = (output: any, context: __SerdeContext): SearchRecord => {
  return take(output, {
    Endpoint: (_: any) => de_Endpoint(_, context),
    Experiment: (_: any) => de_Experiment(_, context),
    FeatureGroup: (_: any) => de_FeatureGroup(_, context),
    FeatureMetadata: (_: any) => de_FeatureMetadata(_, context),
    HyperParameterTuningJob: (_: any) => de_HyperParameterTuningJobSearchEntity(_, context),
    Model: (_: any) => de_ModelDashboardModel(_, context),
    ModelCard: (_: any) => de_ModelCard(_, context),
    ModelPackage: (_: any) => de_ModelPackage(_, context),
    ModelPackageGroup: (_: any) => de_ModelPackageGroup(_, context),
    Pipeline: (_: any) => de_Pipeline(_, context),
    PipelineExecution: (_: any) => de_PipelineExecution(_, context),
    Project: (_: any) => de_Project(_, context),
    TrainingJob: (_: any) => de_TrainingJob(_, context),
    Trial: (_: any) => de_Trial(_, context),
    TrialComponent: (_: any) => de_TrialComponent(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1SearchResponse
 */
const de_SearchResponse = (output: any, context: __SerdeContext): SearchResponse => {
  return take(output, {
    NextToken: __expectString,
    Results: (_: any) => de_SearchResultsList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1SearchResultsList
 */
const de_SearchResultsList = (output: any, context: __SerdeContext): SearchRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SearchRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SecondaryStatusTransition
 */
const de_SecondaryStatusTransition = (output: any, context: __SerdeContext): SecondaryStatusTransition => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SecondaryStatusTransitions
 */
const de_SecondaryStatusTransitions = (output: any, context: __SerdeContext): SecondaryStatusTransition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SecondaryStatusTransition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SecurityGroupIds
 */
const de_SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SelectedStep
 */
const de_SelectedStep = (output: any, context: __SerdeContext): SelectedStep => {
  return take(output, {
    StepName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SelectedStepList
 */
const de_SelectedStepList = (output: any, context: __SerdeContext): SelectedStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SelectedStep(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SelectiveExecutionConfig
 */
const de_SelectiveExecutionConfig = (output: any, context: __SerdeContext): SelectiveExecutionConfig => {
  return take(output, {
    SelectedSteps: (_: any) => de_SelectedStepList(_, context),
    SourcePipelineExecutionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SelectiveExecutionResult
 */
const de_SelectiveExecutionResult = (output: any, context: __SerdeContext): SelectiveExecutionResult => {
  return take(output, {
    SourcePipelineExecutionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SendPipelineExecutionStepFailureResponse
 */
const de_SendPipelineExecutionStepFailureResponse = (
  output: any,
  context: __SerdeContext
): SendPipelineExecutionStepFailureResponse => {
  return take(output, {
    PipelineExecutionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SendPipelineExecutionStepSuccessResponse
 */
const de_SendPipelineExecutionStepSuccessResponse = (
  output: any,
  context: __SerdeContext
): SendPipelineExecutionStepSuccessResponse => {
  return take(output, {
    PipelineExecutionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ServiceCatalogProvisionedProductDetails
 */
const de_ServiceCatalogProvisionedProductDetails = (
  output: any,
  context: __SerdeContext
): ServiceCatalogProvisionedProductDetails => {
  return take(output, {
    ProvisionedProductId: __expectString,
    ProvisionedProductStatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ServiceCatalogProvisioningDetails
 */
const de_ServiceCatalogProvisioningDetails = (
  output: any,
  context: __SerdeContext
): ServiceCatalogProvisioningDetails => {
  return take(output, {
    PathId: __expectString,
    ProductId: __expectString,
    ProvisioningArtifactId: __expectString,
    ProvisioningParameters: (_: any) => de_ProvisioningParameters(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ShadowModeConfig
 */
const de_ShadowModeConfig = (output: any, context: __SerdeContext): ShadowModeConfig => {
  return take(output, {
    ShadowModelVariants: (_: any) => de_ShadowModelVariantConfigList(_, context),
    SourceModelVariantName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ShadowModelVariantConfig
 */
const de_ShadowModelVariantConfig = (output: any, context: __SerdeContext): ShadowModelVariantConfig => {
  return take(output, {
    SamplingPercentage: __expectInt32,
    ShadowModelVariantName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ShadowModelVariantConfigList
 */
const de_ShadowModelVariantConfigList = (output: any, context: __SerdeContext): ShadowModelVariantConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ShadowModelVariantConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SharingSettings
 */
const de_SharingSettings = (output: any, context: __SerdeContext): SharingSettings => {
  return take(output, {
    NotebookOutputOption: __expectString,
    S3KmsKeyId: __expectString,
    S3OutputPath: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ShuffleConfig
 */
const de_ShuffleConfig = (output: any, context: __SerdeContext): ShuffleConfig => {
  return take(output, {
    Seed: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1SourceAlgorithm
 */
const de_SourceAlgorithm = (output: any, context: __SerdeContext): SourceAlgorithm => {
  return take(output, {
    AlgorithmName: __expectString,
    ModelDataSource: (_: any) => de_ModelDataSource(_, context),
    ModelDataUrl: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SourceAlgorithmList
 */
const de_SourceAlgorithmList = (output: any, context: __SerdeContext): SourceAlgorithm[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SourceAlgorithm(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SourceAlgorithmSpecification
 */
const de_SourceAlgorithmSpecification = (output: any, context: __SerdeContext): SourceAlgorithmSpecification => {
  return take(output, {
    SourceAlgorithms: (_: any) => de_SourceAlgorithmList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1SourceIpConfig
 */
const de_SourceIpConfig = (output: any, context: __SerdeContext): SourceIpConfig => {
  return take(output, {
    Cidrs: (_: any) => de_Cidrs(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1SpaceCodeEditorAppSettings
 */
const de_SpaceCodeEditorAppSettings = (output: any, context: __SerdeContext): SpaceCodeEditorAppSettings => {
  return take(output, {
    DefaultResourceSpec: (_: any) => de_ResourceSpec(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1SpaceDetails
 */
const de_SpaceDetails = (output: any, context: __SerdeContext): SpaceDetails => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainId: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OwnershipSettingsSummary: (_: any) => de_OwnershipSettingsSummary(_, context),
    SpaceDisplayName: __expectString,
    SpaceName: __expectString,
    SpaceSettingsSummary: (_: any) => de_SpaceSettingsSummary(_, context),
    SpaceSharingSettingsSummary: (_: any) => de_SpaceSharingSettingsSummary(_, context),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SpaceJupyterLabAppSettings
 */
const de_SpaceJupyterLabAppSettings = (output: any, context: __SerdeContext): SpaceJupyterLabAppSettings => {
  return take(output, {
    CodeRepositories: (_: any) => de_CodeRepositories(_, context),
    DefaultResourceSpec: (_: any) => de_ResourceSpec(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1SpaceList
 */
const de_SpaceList = (output: any, context: __SerdeContext): SpaceDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SpaceDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SpaceSettings
 */
const de_SpaceSettings = (output: any, context: __SerdeContext): SpaceSettings => {
  return take(output, {
    AppType: __expectString,
    CodeEditorAppSettings: (_: any) => de_SpaceCodeEditorAppSettings(_, context),
    CustomFileSystems: (_: any) => de_CustomFileSystems(_, context),
    JupyterLabAppSettings: (_: any) => de_SpaceJupyterLabAppSettings(_, context),
    JupyterServerAppSettings: (_: any) => de_JupyterServerAppSettings(_, context),
    KernelGatewayAppSettings: (_: any) => de_KernelGatewayAppSettings(_, context),
    SpaceStorageSettings: (_: any) => de_SpaceStorageSettings(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1SpaceSettingsSummary
 */
const de_SpaceSettingsSummary = (output: any, context: __SerdeContext): SpaceSettingsSummary => {
  return take(output, {
    AppType: __expectString,
    SpaceStorageSettings: (_: any) => de_SpaceStorageSettings(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1SpaceSharingSettings
 */
const de_SpaceSharingSettings = (output: any, context: __SerdeContext): SpaceSharingSettings => {
  return take(output, {
    SharingType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SpaceSharingSettingsSummary
 */
const de_SpaceSharingSettingsSummary = (output: any, context: __SerdeContext): SpaceSharingSettingsSummary => {
  return take(output, {
    SharingType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SpaceStorageSettings
 */
const de_SpaceStorageSettings = (output: any, context: __SerdeContext): SpaceStorageSettings => {
  return take(output, {
    EbsStorageSettings: (_: any) => de_EbsStorageSettings(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Stairs
 */
const de_Stairs = (output: any, context: __SerdeContext): Stairs => {
  return take(output, {
    DurationInSeconds: __expectInt32,
    NumberOfSteps: __expectInt32,
    UsersPerStep: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1StartInferenceExperimentResponse
 */
const de_StartInferenceExperimentResponse = (
  output: any,
  context: __SerdeContext
): StartInferenceExperimentResponse => {
  return take(output, {
    InferenceExperimentArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1StartMlflowTrackingServerResponse
 */
const de_StartMlflowTrackingServerResponse = (
  output: any,
  context: __SerdeContext
): StartMlflowTrackingServerResponse => {
  return take(output, {
    TrackingServerArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1StartPipelineExecutionResponse
 */
const de_StartPipelineExecutionResponse = (output: any, context: __SerdeContext): StartPipelineExecutionResponse => {
  return take(output, {
    PipelineExecutionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1StopInferenceExperimentResponse
 */
const de_StopInferenceExperimentResponse = (output: any, context: __SerdeContext): StopInferenceExperimentResponse => {
  return take(output, {
    InferenceExperimentArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1StopMlflowTrackingServerResponse
 */
const de_StopMlflowTrackingServerResponse = (
  output: any,
  context: __SerdeContext
): StopMlflowTrackingServerResponse => {
  return take(output, {
    TrackingServerArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1StoppingCondition
 */
const de_StoppingCondition = (output: any, context: __SerdeContext): StoppingCondition => {
  return take(output, {
    MaxPendingTimeInSeconds: __expectInt32,
    MaxRuntimeInSeconds: __expectInt32,
    MaxWaitTimeInSeconds: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1StopPipelineExecutionResponse
 */
const de_StopPipelineExecutionResponse = (output: any, context: __SerdeContext): StopPipelineExecutionResponse => {
  return take(output, {
    PipelineExecutionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1StudioLifecycleConfigDetails
 */
const de_StudioLifecycleConfigDetails = (output: any, context: __SerdeContext): StudioLifecycleConfigDetails => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StudioLifecycleConfigAppType: __expectString,
    StudioLifecycleConfigArn: __expectString,
    StudioLifecycleConfigName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1StudioLifecycleConfigsList
 */
const de_StudioLifecycleConfigsList = (output: any, context: __SerdeContext): StudioLifecycleConfigDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StudioLifecycleConfigDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Subnets
 */
const de_Subnets = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SubscribedWorkteam
 */
const de_SubscribedWorkteam = (output: any, context: __SerdeContext): SubscribedWorkteam => {
  return take(output, {
    ListingId: __expectString,
    MarketplaceDescription: __expectString,
    MarketplaceTitle: __expectString,
    SellerName: __expectString,
    WorkteamArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SubscribedWorkteams
 */
const de_SubscribedWorkteams = (output: any, context: __SerdeContext): SubscribedWorkteam[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SubscribedWorkteam(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TabularJobConfig
 */
const de_TabularJobConfig = (output: any, context: __SerdeContext): TabularJobConfig => {
  return take(output, {
    CandidateGenerationConfig: (_: any) => de_CandidateGenerationConfig(_, context),
    CompletionCriteria: (_: any) => de_AutoMLJobCompletionCriteria(_, context),
    FeatureSpecificationS3Uri: __expectString,
    GenerateCandidateDefinitionsOnly: __expectBoolean,
    Mode: __expectString,
    ProblemType: __expectString,
    SampleWeightAttributeName: __expectString,
    TargetAttributeName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TabularResolvedAttributes
 */
const de_TabularResolvedAttributes = (output: any, context: __SerdeContext): TabularResolvedAttributes => {
  return take(output, {
    ProblemType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return take(output, {
    Key: __expectString,
    Value: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TargetPlatform
 */
const de_TargetPlatform = (output: any, context: __SerdeContext): TargetPlatform => {
  return take(output, {
    Accelerator: __expectString,
    Arch: __expectString,
    Os: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TargetTrackingScalingPolicyConfiguration
 */
const de_TargetTrackingScalingPolicyConfiguration = (
  output: any,
  context: __SerdeContext
): TargetTrackingScalingPolicyConfiguration => {
  return take(output, {
    MetricSpecification: (_: any) => de_MetricSpecification(__expectUnion(_), context),
    TargetValue: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1TaskKeywords
 */
const de_TaskKeywords = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TensorBoardAppSettings
 */
const de_TensorBoardAppSettings = (output: any, context: __SerdeContext): TensorBoardAppSettings => {
  return take(output, {
    DefaultResourceSpec: (_: any) => de_ResourceSpec(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TensorBoardOutputConfig
 */
const de_TensorBoardOutputConfig = (output: any, context: __SerdeContext): TensorBoardOutputConfig => {
  return take(output, {
    LocalPath: __expectString,
    S3OutputPath: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TextClassificationJobConfig
 */
const de_TextClassificationJobConfig = (output: any, context: __SerdeContext): TextClassificationJobConfig => {
  return take(output, {
    CompletionCriteria: (_: any) => de_AutoMLJobCompletionCriteria(_, context),
    ContentColumn: __expectString,
    TargetLabelColumn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TextGenerationHyperParameters
 */
const de_TextGenerationHyperParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_json1_1TextGenerationJobConfig
 */
const de_TextGenerationJobConfig = (output: any, context: __SerdeContext): TextGenerationJobConfig => {
  return take(output, {
    BaseModelName: __expectString,
    CompletionCriteria: (_: any) => de_AutoMLJobCompletionCriteria(_, context),
    ModelAccessConfig: (_: any) => de_ModelAccessConfig(_, context),
    TextGenerationHyperParameters: (_: any) => de_TextGenerationHyperParameters(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TextGenerationResolvedAttributes
 */
const de_TextGenerationResolvedAttributes = (
  output: any,
  context: __SerdeContext
): TextGenerationResolvedAttributes => {
  return take(output, {
    BaseModelName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ThroughputConfigDescription
 */
const de_ThroughputConfigDescription = (output: any, context: __SerdeContext): ThroughputConfigDescription => {
  return take(output, {
    ProvisionedReadCapacityUnits: __expectInt32,
    ProvisionedWriteCapacityUnits: __expectInt32,
    ThroughputMode: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TimeSeriesConfig
 */
const de_TimeSeriesConfig = (output: any, context: __SerdeContext): TimeSeriesConfig => {
  return take(output, {
    GroupingAttributeNames: (_: any) => de_GroupingAttributeNames(_, context),
    ItemIdentifierAttributeName: __expectString,
    TargetAttributeName: __expectString,
    TimestampAttributeName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TimeSeriesForecastingJobConfig
 */
const de_TimeSeriesForecastingJobConfig = (output: any, context: __SerdeContext): TimeSeriesForecastingJobConfig => {
  return take(output, {
    CandidateGenerationConfig: (_: any) => de_CandidateGenerationConfig(_, context),
    CompletionCriteria: (_: any) => de_AutoMLJobCompletionCriteria(_, context),
    FeatureSpecificationS3Uri: __expectString,
    ForecastFrequency: __expectString,
    ForecastHorizon: __expectInt32,
    ForecastQuantiles: (_: any) => de_ForecastQuantiles(_, context),
    HolidayConfig: (_: any) => de_HolidayConfig(_, context),
    TimeSeriesConfig: (_: any) => de_TimeSeriesConfig(_, context),
    Transformations: (_: any) => de_TimeSeriesTransformations(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TimeSeriesForecastingSettings
 */
const de_TimeSeriesForecastingSettings = (output: any, context: __SerdeContext): TimeSeriesForecastingSettings => {
  return take(output, {
    AmazonForecastRoleArn: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TimeSeriesTransformations
 */
const de_TimeSeriesTransformations = (output: any, context: __SerdeContext): TimeSeriesTransformations => {
  return take(output, {
    Aggregation: (_: any) => de_AggregationTransformations(_, context),
    Filling: (_: any) => de_FillingTransformations(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TrackingServerSummary
 */
const de_TrackingServerSummary = (output: any, context: __SerdeContext): TrackingServerSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IsActive: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MlflowVersion: __expectString,
    TrackingServerArn: __expectString,
    TrackingServerName: __expectString,
    TrackingServerStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TrackingServerSummaryList
 */
const de_TrackingServerSummaryList = (output: any, context: __SerdeContext): TrackingServerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrackingServerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrafficPattern
 */
const de_TrafficPattern = (output: any, context: __SerdeContext): TrafficPattern => {
  return take(output, {
    Phases: (_: any) => de_Phases(_, context),
    Stairs: (_: any) => de_Stairs(_, context),
    TrafficType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TrafficRoutingConfig
 */
const de_TrafficRoutingConfig = (output: any, context: __SerdeContext): TrafficRoutingConfig => {
  return take(output, {
    CanarySize: (_: any) => de_CapacitySize(_, context),
    LinearStepSize: (_: any) => de_CapacitySize(_, context),
    Type: __expectString,
    WaitIntervalInSeconds: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1TrainingContainerArguments
 */
const de_TrainingContainerArguments = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrainingContainerEntrypoint
 */
const de_TrainingContainerEntrypoint = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrainingEnvironmentMap
 */
const de_TrainingEnvironmentMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_json1_1TrainingImageConfig
 */
const de_TrainingImageConfig = (output: any, context: __SerdeContext): TrainingImageConfig => {
  return take(output, {
    TrainingRepositoryAccessMode: __expectString,
    TrainingRepositoryAuthConfig: (_: any) => de_TrainingRepositoryAuthConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TrainingInstanceTypes
 */
const de_TrainingInstanceTypes = (output: any, context: __SerdeContext): TrainingInstanceType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrainingJob
 */
const de_TrainingJob = (output: any, context: __SerdeContext): TrainingJob => {
  return take(output, {
    AlgorithmSpecification: (_: any) => de_AlgorithmSpecification(_, context),
    AutoMLJobArn: __expectString,
    BillableTimeInSeconds: __expectInt32,
    CheckpointConfig: (_: any) => de_CheckpointConfig(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DebugHookConfig: (_: any) => de_DebugHookConfig(_, context),
    DebugRuleConfigurations: (_: any) => de_DebugRuleConfigurations(_, context),
    DebugRuleEvaluationStatuses: (_: any) => de_DebugRuleEvaluationStatuses(_, context),
    EnableInterContainerTrafficEncryption: __expectBoolean,
    EnableManagedSpotTraining: __expectBoolean,
    EnableNetworkIsolation: __expectBoolean,
    Environment: (_: any) => de_TrainingEnvironmentMap(_, context),
    ExperimentConfig: (_: any) => de_ExperimentConfig(_, context),
    FailureReason: __expectString,
    FinalMetricDataList: (_: any) => de_FinalMetricDataList(_, context),
    HyperParameters: (_: any) => de_HyperParameters(_, context),
    InputDataConfig: (_: any) => de_InputDataConfig(_, context),
    LabelingJobArn: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelArtifacts: (_: any) => de_ModelArtifacts(_, context),
    OutputDataConfig: (_: any) => de_OutputDataConfig(_, context),
    ProfilerConfig: (_: any) => de_ProfilerConfig(_, context),
    ResourceConfig: (_: any) => de_ResourceConfig(_, context),
    RetryStrategy: (_: any) => de_RetryStrategy(_, context),
    RoleArn: __expectString,
    SecondaryStatus: __expectString,
    SecondaryStatusTransitions: (_: any) => de_SecondaryStatusTransitions(_, context),
    StoppingCondition: (_: any) => de_StoppingCondition(_, context),
    Tags: (_: any) => de_TagList(_, context),
    TensorBoardOutputConfig: (_: any) => de_TensorBoardOutputConfig(_, context),
    TrainingEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingJobArn: __expectString,
    TrainingJobName: __expectString,
    TrainingJobStatus: __expectString,
    TrainingStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingTimeInSeconds: __expectInt32,
    TuningJobArn: __expectString,
    VpcConfig: (_: any) => de_VpcConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TrainingJobDefinition
 */
const de_TrainingJobDefinition = (output: any, context: __SerdeContext): TrainingJobDefinition => {
  return take(output, {
    HyperParameters: (_: any) => de_HyperParameters(_, context),
    InputDataConfig: (_: any) => de_InputDataConfig(_, context),
    OutputDataConfig: (_: any) => de_OutputDataConfig(_, context),
    ResourceConfig: (_: any) => de_ResourceConfig(_, context),
    StoppingCondition: (_: any) => de_StoppingCondition(_, context),
    TrainingInputMode: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TrainingJobStatusCounters
 */
const de_TrainingJobStatusCounters = (output: any, context: __SerdeContext): TrainingJobStatusCounters => {
  return take(output, {
    Completed: __expectInt32,
    InProgress: __expectInt32,
    NonRetryableError: __expectInt32,
    RetryableError: __expectInt32,
    Stopped: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1TrainingJobStepMetadata
 */
const de_TrainingJobStepMetadata = (output: any, context: __SerdeContext): TrainingJobStepMetadata => {
  return take(output, {
    Arn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TrainingJobSummaries
 */
const de_TrainingJobSummaries = (output: any, context: __SerdeContext): TrainingJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrainingJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrainingJobSummary
 */
const de_TrainingJobSummary = (output: any, context: __SerdeContext): TrainingJobSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingJobArn: __expectString,
    TrainingJobName: __expectString,
    TrainingJobStatus: __expectString,
    WarmPoolStatus: (_: any) => de_WarmPoolStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TrainingRepositoryAuthConfig
 */
const de_TrainingRepositoryAuthConfig = (output: any, context: __SerdeContext): TrainingRepositoryAuthConfig => {
  return take(output, {
    TrainingRepositoryCredentialsProviderArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TrainingSpecification
 */
const de_TrainingSpecification = (output: any, context: __SerdeContext): TrainingSpecification => {
  return take(output, {
    AdditionalS3DataSource: (_: any) => de_AdditionalS3DataSource(_, context),
    MetricDefinitions: (_: any) => de_MetricDefinitionList(_, context),
    SupportedHyperParameters: (_: any) => de_HyperParameterSpecifications(_, context),
    SupportedTrainingInstanceTypes: (_: any) => de_TrainingInstanceTypes(_, context),
    SupportedTuningJobObjectiveMetrics: (_: any) => de_HyperParameterTuningJobObjectives(_, context),
    SupportsDistributedTraining: __expectBoolean,
    TrainingChannels: (_: any) => de_ChannelSpecifications(_, context),
    TrainingImage: __expectString,
    TrainingImageDigest: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TransformDataSource
 */
const de_TransformDataSource = (output: any, context: __SerdeContext): TransformDataSource => {
  return take(output, {
    S3DataSource: (_: any) => de_TransformS3DataSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TransformEnvironmentMap
 */
const de_TransformEnvironmentMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_json1_1TransformInput
 */
const de_TransformInput = (output: any, context: __SerdeContext): TransformInput => {
  return take(output, {
    CompressionType: __expectString,
    ContentType: __expectString,
    DataSource: (_: any) => de_TransformDataSource(_, context),
    SplitType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TransformInstanceTypes
 */
const de_TransformInstanceTypes = (output: any, context: __SerdeContext): TransformInstanceType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TransformJob
 */
const de_TransformJob = (output: any, context: __SerdeContext): TransformJob => {
  return take(output, {
    AutoMLJobArn: __expectString,
    BatchStrategy: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataCaptureConfig: (_: any) => de_BatchDataCaptureConfig(_, context),
    DataProcessing: (_: any) => de_DataProcessing(_, context),
    Environment: (_: any) => de_TransformEnvironmentMap(_, context),
    ExperimentConfig: (_: any) => de_ExperimentConfig(_, context),
    FailureReason: __expectString,
    LabelingJobArn: __expectString,
    MaxConcurrentTransforms: __expectInt32,
    MaxPayloadInMB: __expectInt32,
    ModelClientConfig: (_: any) => de_ModelClientConfig(_, context),
    ModelName: __expectString,
    Tags: (_: any) => de_TagList(_, context),
    TransformEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TransformInput: (_: any) => de_TransformInput(_, context),
    TransformJobArn: __expectString,
    TransformJobName: __expectString,
    TransformJobStatus: __expectString,
    TransformOutput: (_: any) => de_TransformOutput(_, context),
    TransformResources: (_: any) => de_TransformResources(_, context),
    TransformStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1TransformJobDefinition
 */
const de_TransformJobDefinition = (output: any, context: __SerdeContext): TransformJobDefinition => {
  return take(output, {
    BatchStrategy: __expectString,
    Environment: (_: any) => de_TransformEnvironmentMap(_, context),
    MaxConcurrentTransforms: __expectInt32,
    MaxPayloadInMB: __expectInt32,
    TransformInput: (_: any) => de_TransformInput(_, context),
    TransformOutput: (_: any) => de_TransformOutput(_, context),
    TransformResources: (_: any) => de_TransformResources(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TransformJobStepMetadata
 */
const de_TransformJobStepMetadata = (output: any, context: __SerdeContext): TransformJobStepMetadata => {
  return take(output, {
    Arn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TransformJobSummaries
 */
const de_TransformJobSummaries = (output: any, context: __SerdeContext): TransformJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TransformJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TransformJobSummary
 */
const de_TransformJobSummary = (output: any, context: __SerdeContext): TransformJobSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TransformEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TransformJobArn: __expectString,
    TransformJobName: __expectString,
    TransformJobStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TransformOutput
 */
const de_TransformOutput = (output: any, context: __SerdeContext): TransformOutput => {
  return take(output, {
    Accept: __expectString,
    AssembleWith: __expectString,
    KmsKeyId: __expectString,
    S3OutputPath: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TransformResources
 */
const de_TransformResources = (output: any, context: __SerdeContext): TransformResources => {
  return take(output, {
    InstanceCount: __expectInt32,
    InstanceType: __expectString,
    VolumeKmsKeyId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TransformS3DataSource
 */
const de_TransformS3DataSource = (output: any, context: __SerdeContext): TransformS3DataSource => {
  return take(output, {
    S3DataType: __expectString,
    S3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Trial
 */
const de_Trial = (output: any, context: __SerdeContext): Trial => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    ExperimentName: __expectString,
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MetadataProperties: (_: any) => de_MetadataProperties(_, context),
    Source: (_: any) => de_TrialSource(_, context),
    Tags: (_: any) => de_TagList(_, context),
    TrialArn: __expectString,
    TrialComponentSummaries: (_: any) => de_TrialComponentSimpleSummaries(_, context),
    TrialName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TrialComponent
 */
const de_TrialComponent = (output: any, context: __SerdeContext): TrialComponent => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputArtifacts: (_: any) => de_TrialComponentArtifacts(_, context),
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LineageGroupArn: __expectString,
    MetadataProperties: (_: any) => de_MetadataProperties(_, context),
    Metrics: (_: any) => de_TrialComponentMetricSummaries(_, context),
    OutputArtifacts: (_: any) => de_TrialComponentArtifacts(_, context),
    Parameters: (_: any) => de_TrialComponentParameters(_, context),
    Parents: (_: any) => de_Parents(_, context),
    RunName: __expectString,
    Source: (_: any) => de_TrialComponentSource(_, context),
    SourceDetail: (_: any) => de_TrialComponentSourceDetail(_, context),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: (_: any) => de_TrialComponentStatus(_, context),
    Tags: (_: any) => de_TagList(_, context),
    TrialComponentArn: __expectString,
    TrialComponentName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TrialComponentArtifact
 */
const de_TrialComponentArtifact = (output: any, context: __SerdeContext): TrialComponentArtifact => {
  return take(output, {
    MediaType: __expectString,
    Value: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TrialComponentArtifacts
 */
const de_TrialComponentArtifacts = (output: any, context: __SerdeContext): Record<string, TrialComponentArtifact> => {
  return Object.entries(output).reduce((acc: Record<string, TrialComponentArtifact>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_TrialComponentArtifact(value, context);
    return acc;
  }, {} as Record<string, TrialComponentArtifact>);
};

/**
 * deserializeAws_json1_1TrialComponentMetricSummaries
 */
const de_TrialComponentMetricSummaries = (output: any, context: __SerdeContext): TrialComponentMetricSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrialComponentMetricSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrialComponentMetricSummary
 */
const de_TrialComponentMetricSummary = (output: any, context: __SerdeContext): TrialComponentMetricSummary => {
  return take(output, {
    Avg: __limitedParseDouble,
    Count: __expectInt32,
    Last: __limitedParseDouble,
    Max: __limitedParseDouble,
    MetricName: __expectString,
    Min: __limitedParseDouble,
    SourceArn: __expectString,
    StdDev: __limitedParseDouble,
    TimeStamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1TrialComponentParameters
 */
const de_TrialComponentParameters = (
  output: any,
  context: __SerdeContext
): Record<string, TrialComponentParameterValue> => {
  return Object.entries(output).reduce(
    (acc: Record<string, TrialComponentParameterValue>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as string] = de_TrialComponentParameterValue(__expectUnion(value), context);
      return acc;
    },
    {} as Record<string, TrialComponentParameterValue>
  );
};

/**
 * deserializeAws_json1_1TrialComponentParameterValue
 */
const de_TrialComponentParameterValue = (output: any, context: __SerdeContext): TrialComponentParameterValue => {
  if (__limitedParseDouble(output.NumberValue) !== undefined) {
    return { NumberValue: __limitedParseDouble(output.NumberValue) as any };
  }
  if (__expectString(output.StringValue) !== undefined) {
    return { StringValue: __expectString(output.StringValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_1TrialComponentSimpleSummaries
 */
const de_TrialComponentSimpleSummaries = (output: any, context: __SerdeContext): TrialComponentSimpleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrialComponentSimpleSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrialComponentSimpleSummary
 */
const de_TrialComponentSimpleSummary = (output: any, context: __SerdeContext): TrialComponentSimpleSummary => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrialComponentArn: __expectString,
    TrialComponentName: __expectString,
    TrialComponentSource: (_: any) => de_TrialComponentSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TrialComponentSource
 */
const de_TrialComponentSource = (output: any, context: __SerdeContext): TrialComponentSource => {
  return take(output, {
    SourceArn: __expectString,
    SourceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TrialComponentSourceDetail
 */
const de_TrialComponentSourceDetail = (output: any, context: __SerdeContext): TrialComponentSourceDetail => {
  return take(output, {
    ProcessingJob: (_: any) => de_ProcessingJob(_, context),
    SourceArn: __expectString,
    TrainingJob: (_: any) => de_TrainingJob(_, context),
    TransformJob: (_: any) => de_TransformJob(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TrialComponentSources
 */
const de_TrialComponentSources = (output: any, context: __SerdeContext): TrialComponentSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrialComponentSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrialComponentStatus
 */
const de_TrialComponentStatus = (output: any, context: __SerdeContext): TrialComponentStatus => {
  return take(output, {
    Message: __expectString,
    PrimaryStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TrialComponentSummaries
 */
const de_TrialComponentSummaries = (output: any, context: __SerdeContext): TrialComponentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrialComponentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrialComponentSummary
 */
const de_TrialComponentSummary = (output: any, context: __SerdeContext): TrialComponentSummary => {
  return take(output, {
    CreatedBy: (_: any) => de_UserContext(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: (_: any) => de_UserContext(_, context),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: (_: any) => de_TrialComponentStatus(_, context),
    TrialComponentArn: __expectString,
    TrialComponentName: __expectString,
    TrialComponentSource: (_: any) => de_TrialComponentSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TrialSource
 */
const de_TrialSource = (output: any, context: __SerdeContext): TrialSource => {
  return take(output, {
    SourceArn: __expectString,
    SourceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TrialSummaries
 */
const de_TrialSummaries = (output: any, context: __SerdeContext): TrialSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrialSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrialSummary
 */
const de_TrialSummary = (output: any, context: __SerdeContext): TrialSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrialArn: __expectString,
    TrialName: __expectString,
    TrialSource: (_: any) => de_TrialSource(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TtlDuration
 */
const de_TtlDuration = (output: any, context: __SerdeContext): TtlDuration => {
  return take(output, {
    Unit: __expectString,
    Value: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1TuningJobCompletionCriteria
 */
const de_TuningJobCompletionCriteria = (output: any, context: __SerdeContext): TuningJobCompletionCriteria => {
  return take(output, {
    BestObjectiveNotImproving: (_: any) => de_BestObjectiveNotImproving(_, context),
    ConvergenceDetected: (_: any) => de_ConvergenceDetected(_, context),
    TargetObjectiveMetricValue: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1TuningJobStepMetaData
 */
const de_TuningJobStepMetaData = (output: any, context: __SerdeContext): TuningJobStepMetaData => {
  return take(output, {
    Arn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UiConfig
 */
const de_UiConfig = (output: any, context: __SerdeContext): UiConfig => {
  return take(output, {
    HumanTaskUiArn: __expectString,
    UiTemplateS3Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UiTemplateInfo
 */
const de_UiTemplateInfo = (output: any, context: __SerdeContext): UiTemplateInfo => {
  return take(output, {
    ContentSha256: __expectString,
    Url: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateActionResponse
 */
const de_UpdateActionResponse = (output: any, context: __SerdeContext): UpdateActionResponse => {
  return take(output, {
    ActionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateAppImageConfigResponse
 */
const de_UpdateAppImageConfigResponse = (output: any, context: __SerdeContext): UpdateAppImageConfigResponse => {
  return take(output, {
    AppImageConfigArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateArtifactResponse
 */
const de_UpdateArtifactResponse = (output: any, context: __SerdeContext): UpdateArtifactResponse => {
  return take(output, {
    ArtifactArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateClusterResponse
 */
const de_UpdateClusterResponse = (output: any, context: __SerdeContext): UpdateClusterResponse => {
  return take(output, {
    ClusterArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateClusterSoftwareResponse
 */
const de_UpdateClusterSoftwareResponse = (output: any, context: __SerdeContext): UpdateClusterSoftwareResponse => {
  return take(output, {
    ClusterArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateCodeRepositoryOutput
 */
const de_UpdateCodeRepositoryOutput = (output: any, context: __SerdeContext): UpdateCodeRepositoryOutput => {
  return take(output, {
    CodeRepositoryArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateContextResponse
 */
const de_UpdateContextResponse = (output: any, context: __SerdeContext): UpdateContextResponse => {
  return take(output, {
    ContextArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateDomainResponse
 */
const de_UpdateDomainResponse = (output: any, context: __SerdeContext): UpdateDomainResponse => {
  return take(output, {
    DomainArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateEndpointOutput
 */
const de_UpdateEndpointOutput = (output: any, context: __SerdeContext): UpdateEndpointOutput => {
  return take(output, {
    EndpointArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateEndpointWeightsAndCapacitiesOutput
 */
const de_UpdateEndpointWeightsAndCapacitiesOutput = (
  output: any,
  context: __SerdeContext
): UpdateEndpointWeightsAndCapacitiesOutput => {
  return take(output, {
    EndpointArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateExperimentResponse
 */
const de_UpdateExperimentResponse = (output: any, context: __SerdeContext): UpdateExperimentResponse => {
  return take(output, {
    ExperimentArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateFeatureGroupResponse
 */
const de_UpdateFeatureGroupResponse = (output: any, context: __SerdeContext): UpdateFeatureGroupResponse => {
  return take(output, {
    FeatureGroupArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateHubResponse
 */
const de_UpdateHubResponse = (output: any, context: __SerdeContext): UpdateHubResponse => {
  return take(output, {
    HubArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateImageResponse
 */
const de_UpdateImageResponse = (output: any, context: __SerdeContext): UpdateImageResponse => {
  return take(output, {
    ImageArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateImageVersionResponse
 */
const de_UpdateImageVersionResponse = (output: any, context: __SerdeContext): UpdateImageVersionResponse => {
  return take(output, {
    ImageVersionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateInferenceComponentOutput
 */
const de_UpdateInferenceComponentOutput = (output: any, context: __SerdeContext): UpdateInferenceComponentOutput => {
  return take(output, {
    InferenceComponentArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateInferenceComponentRuntimeConfigOutput
 */
const de_UpdateInferenceComponentRuntimeConfigOutput = (
  output: any,
  context: __SerdeContext
): UpdateInferenceComponentRuntimeConfigOutput => {
  return take(output, {
    InferenceComponentArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateInferenceExperimentResponse
 */
const de_UpdateInferenceExperimentResponse = (
  output: any,
  context: __SerdeContext
): UpdateInferenceExperimentResponse => {
  return take(output, {
    InferenceExperimentArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateMlflowTrackingServerResponse
 */
const de_UpdateMlflowTrackingServerResponse = (
  output: any,
  context: __SerdeContext
): UpdateMlflowTrackingServerResponse => {
  return take(output, {
    TrackingServerArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateModelCardResponse
 */
const de_UpdateModelCardResponse = (output: any, context: __SerdeContext): UpdateModelCardResponse => {
  return take(output, {
    ModelCardArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateModelPackageOutput
 */
const de_UpdateModelPackageOutput = (output: any, context: __SerdeContext): UpdateModelPackageOutput => {
  return take(output, {
    ModelPackageArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateMonitoringAlertResponse
 */
const de_UpdateMonitoringAlertResponse = (output: any, context: __SerdeContext): UpdateMonitoringAlertResponse => {
  return take(output, {
    MonitoringAlertName: __expectString,
    MonitoringScheduleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateMonitoringScheduleResponse
 */
const de_UpdateMonitoringScheduleResponse = (
  output: any,
  context: __SerdeContext
): UpdateMonitoringScheduleResponse => {
  return take(output, {
    MonitoringScheduleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateNotebookInstanceLifecycleConfigOutput
 */
const de_UpdateNotebookInstanceLifecycleConfigOutput = (
  output: any,
  context: __SerdeContext
): UpdateNotebookInstanceLifecycleConfigOutput => {
  return take(output, {}) as any;
};

/**
 * deserializeAws_json1_1UpdateNotebookInstanceOutput
 */
const de_UpdateNotebookInstanceOutput = (output: any, context: __SerdeContext): UpdateNotebookInstanceOutput => {
  return take(output, {}) as any;
};

/**
 * deserializeAws_json1_1UpdatePipelineExecutionResponse
 */
const de_UpdatePipelineExecutionResponse = (output: any, context: __SerdeContext): UpdatePipelineExecutionResponse => {
  return take(output, {
    PipelineExecutionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdatePipelineResponse
 */
const de_UpdatePipelineResponse = (output: any, context: __SerdeContext): UpdatePipelineResponse => {
  return take(output, {
    PipelineArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateProjectOutput
 */
const de_UpdateProjectOutput = (output: any, context: __SerdeContext): UpdateProjectOutput => {
  return take(output, {
    ProjectArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateSpaceResponse
 */
const de_UpdateSpaceResponse = (output: any, context: __SerdeContext): UpdateSpaceResponse => {
  return take(output, {
    SpaceArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateTrainingJobResponse
 */
const de_UpdateTrainingJobResponse = (output: any, context: __SerdeContext): UpdateTrainingJobResponse => {
  return take(output, {
    TrainingJobArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateTrialComponentResponse
 */
const de_UpdateTrialComponentResponse = (output: any, context: __SerdeContext): UpdateTrialComponentResponse => {
  return take(output, {
    TrialComponentArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateTrialResponse
 */
const de_UpdateTrialResponse = (output: any, context: __SerdeContext): UpdateTrialResponse => {
  return take(output, {
    TrialArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateUserProfileResponse
 */
const de_UpdateUserProfileResponse = (output: any, context: __SerdeContext): UpdateUserProfileResponse => {
  return take(output, {
    UserProfileArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateWorkforceResponse
 */
const de_UpdateWorkforceResponse = (output: any, context: __SerdeContext): UpdateWorkforceResponse => {
  return take(output, {
    Workforce: (_: any) => de_Workforce(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateWorkteamResponse
 */
const de_UpdateWorkteamResponse = (output: any, context: __SerdeContext): UpdateWorkteamResponse => {
  return take(output, {
    Workteam: (_: any) => de_Workteam(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1USD
 */
const de_USD = (output: any, context: __SerdeContext): USD => {
  return take(output, {
    Cents: __expectInt32,
    Dollars: __expectInt32,
    TenthFractionsOfACent: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1UserContext
 */
const de_UserContext = (output: any, context: __SerdeContext): UserContext => {
  return take(output, {
    DomainId: __expectString,
    IamIdentity: (_: any) => de_IamIdentity(_, context),
    UserProfileArn: __expectString,
    UserProfileName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UserProfileDetails
 */
const de_UserProfileDetails = (output: any, context: __SerdeContext): UserProfileDetails => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainId: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    UserProfileName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UserProfileList
 */
const de_UserProfileList = (output: any, context: __SerdeContext): UserProfileDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UserProfileDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UserSettings
 */
const de_UserSettings = (output: any, context: __SerdeContext): UserSettings => {
  return take(output, {
    CanvasAppSettings: (_: any) => de_CanvasAppSettings(_, context),
    CodeEditorAppSettings: (_: any) => de_CodeEditorAppSettings(_, context),
    CustomFileSystemConfigs: (_: any) => de_CustomFileSystemConfigs(_, context),
    CustomPosixUserConfig: (_: any) => de_CustomPosixUserConfig(_, context),
    DefaultLandingUri: __expectString,
    ExecutionRole: __expectString,
    JupyterLabAppSettings: (_: any) => de_JupyterLabAppSettings(_, context),
    JupyterServerAppSettings: (_: any) => de_JupyterServerAppSettings(_, context),
    KernelGatewayAppSettings: (_: any) => de_KernelGatewayAppSettings(_, context),
    RSessionAppSettings: (_: any) => de_RSessionAppSettings(_, context),
    RStudioServerProAppSettings: (_: any) => de_RStudioServerProAppSettings(_, context),
    SecurityGroups: (_: any) => de_SecurityGroupIds(_, context),
    SharingSettings: (_: any) => de_SharingSettings(_, context),
    SpaceStorageSettings: (_: any) => de_DefaultSpaceStorageSettings(_, context),
    StudioWebPortal: __expectString,
    TensorBoardAppSettings: (_: any) => de_TensorBoardAppSettings(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1VectorConfig
 */
const de_VectorConfig = (output: any, context: __SerdeContext): VectorConfig => {
  return take(output, {
    Dimension: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1Vertex
 */
const de_Vertex = (output: any, context: __SerdeContext): Vertex => {
  return take(output, {
    Arn: __expectString,
    LineageType: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Vertices
 */
const de_Vertices = (output: any, context: __SerdeContext): Vertex[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Vertex(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VpcConfig
 */
const de_VpcConfig = (output: any, context: __SerdeContext): VpcConfig => {
  return take(output, {
    SecurityGroupIds: (_: any) => de_VpcSecurityGroupIds(_, context),
    Subnets: (_: any) => de_Subnets(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1VpcOnlyTrustedAccounts
 */
const de_VpcOnlyTrustedAccounts = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VpcSecurityGroupIds
 */
const de_VpcSecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WarmPoolStatus
 */
const de_WarmPoolStatus = (output: any, context: __SerdeContext): WarmPoolStatus => {
  return take(output, {
    ResourceRetainedBillableTimeInSeconds: __expectInt32,
    ReusedByJob: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1WorkerAccessConfiguration
 */
const de_WorkerAccessConfiguration = (output: any, context: __SerdeContext): WorkerAccessConfiguration => {
  return take(output, {
    S3Presign: (_: any) => de_S3Presign(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Workforce
 */
const de_Workforce = (output: any, context: __SerdeContext): Workforce => {
  return take(output, {
    CognitoConfig: (_: any) => de_CognitoConfig(_, context),
    CreateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    LastUpdatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OidcConfig: (_: any) => de_OidcConfigForResponse(_, context),
    SourceIpConfig: (_: any) => de_SourceIpConfig(_, context),
    Status: __expectString,
    SubDomain: __expectString,
    WorkforceArn: __expectString,
    WorkforceName: __expectString,
    WorkforceVpcConfig: (_: any) => de_WorkforceVpcConfigResponse(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Workforces
 */
const de_Workforces = (output: any, context: __SerdeContext): Workforce[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Workforce(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WorkforceSecurityGroupIds
 */
const de_WorkforceSecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WorkforceSubnets
 */
const de_WorkforceSubnets = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WorkforceVpcConfigResponse
 */
const de_WorkforceVpcConfigResponse = (output: any, context: __SerdeContext): WorkforceVpcConfigResponse => {
  return take(output, {
    SecurityGroupIds: (_: any) => de_WorkforceSecurityGroupIds(_, context),
    Subnets: (_: any) => de_WorkforceSubnets(_, context),
    VpcEndpointId: __expectString,
    VpcId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1WorkspaceSettings
 */
const de_WorkspaceSettings = (output: any, context: __SerdeContext): WorkspaceSettings => {
  return take(output, {
    S3ArtifactPath: __expectString,
    S3KmsKeyId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Workteam
 */
const de_Workteam = (output: any, context: __SerdeContext): Workteam => {
  return take(output, {
    CreateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastUpdatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MemberDefinitions: (_: any) => de_MemberDefinitions(_, context),
    NotificationConfiguration: (_: any) => de_NotificationConfiguration(_, context),
    ProductListingIds: (_: any) => de_ProductListings(_, context),
    SubDomain: __expectString,
    WorkerAccessConfiguration: (_: any) => de_WorkerAccessConfiguration(_, context),
    WorkforceArn: __expectString,
    WorkteamArn: __expectString,
    WorkteamName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Workteams
 */
const de_Workteams = (output: any, context: __SerdeContext): Workteam[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Workteam(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `SageMaker.${operation}`,
  };
}
