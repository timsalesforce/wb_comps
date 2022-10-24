
/**
 * flowCoverage
 * @targetNSAlias `tns`
 * @targetNamespace `http://soap.sforce.com/2006/04/metadata`
 */
export interface FlowCoverage {
    /** xsd:string */
    elementsNotCovered?: Array<string>;
    /** xsd:string */
    flowId?: string;
    /** xsd:string */
    flowName?: string;
    /** xsd:string */
    flowNamespace?: string;
    /** xsd:int */
    numElements?: string;
    /** xsd:int */
    numElementsNotCovered?: string;
    /** FlowProcessType|xsd:string|AutoLaunchedFlow,Flow,Workflow,CustomEvent,InvocableProcess,LoginFlow,ActionPlan,JourneyBuilderIntegration,UserProvisioningFlow,Survey,SurveyEnrich,Appointments,FSCLending,DigitalForm,FieldServiceMobile,OrchestrationFlow,FieldServiceWeb,TransactionSecurityFlow,ContactRequestFlow,ActionCadenceFlow,ManagedContentFlow,CheckoutFlow,CartAsyncFlow,CustomerLifecycle,Journey,RecommendationStrategy,Orchestrator,RoutingFlow,ServiceCatalogItemFlow,EvaluationFlow,LoyaltyManagementFlow,CMSOrchestrator */
    processType?: string;
}
