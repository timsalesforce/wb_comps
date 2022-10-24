
/**
 * extendedErrorDetails
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface ExtendedErrorDetails {
    /** ExtendedErrorCode|xsd:string|ACTIONCALL_DUPLICATE_INPUT_PARAM,ACTIONCALL_DUPLICATE_OUTPUT_PARAM,ACTIONCALL_INPUT_VALIDATION_FAILED,ACTIONCALL_INVALID_INPUT_PARAM_NAME,ACTIONCALL_MISSING_NAME,ACTIONCALL_MISSING_REQUIRED_PARAM,ACTIONCALL_MISSING_REQUIRED_TYPE,ACTIONCALL_NOT_FOUND_WITH_NAME_AND_TYPE,ACTIONCALL_NOT_SUPPORTED_FOR_PROCESSTYPE,ACTIONCALL_NOT_SUPPORTED_FOR_TRIGGERTYPE,ACTIONCALL_TRANSACTION_MODEL_NOT_ALLOWED,ACTIONCALL_TRANSACTION_MODEL_NOT_SUPPORTED,ACTIONCALL_TRIGGERING_RECORD_MISMATCHED_OBJECTTYPE,ACTION_CALL_INVALID_CONFIGURATION,ACTION_CALL_INVALID_INPUT_PARAM,ACTION_CALL_INVALID_OUTPUT_PARAM,ADDING_ATTACHMENT_QUESTIONS_ADDITION_TO_EXISTING_SURVEY,APEXCALLOUT_INPUT_DUPLICATE,APEXCALLOUT_INPUT_INCOMPATIBLE_DATATYPE,APEXCALLOUT_INVALID,APEXCALLOUT_MISSING_CLASSNAME,APEXCALLOUT_NOT_FOUND,APEXCALLOUT_OUTPUT_INCOMPATIBLE_DATATYPE,APEXCALLOUT_OUTPUT_INVALID,APEXCALLOUT_REQUIRED_INPUT_MISSING,APEXCLASS_MISSING_INTERFACE,APEX_CLASS_VARIABLE_NOT_FOUND,ASSIGNEE_AUTOPROC,ASSIGNEE_USER_USERNAME,ASSIGNMENTITEM_ELEMENT_MISSING_DATATYPE,ASSIGNMENTITEM_ELEMENT_NOT_SUPPORTED,ASSIGNMENTITEM_FIELD_INVALID_DATATYPE,ASSIGNMENTITEM_FIELD_INVALID_DATATYPE_WITH_ELEMENT,ASSIGNMENTITEM_INCOMPATIBLE_DATATYPES,ASSIGNMENTITEM_INVALID_ASSIGNTOREFERENCE,ASSIGNMENTITEM_INVALID_COLLECTION,ASSIGNMENTITEM_INVALID_DATATYPE_IN_ELEMENT,ASSIGNMENTITEM_INVALID_ELEMENTREFERENCE,ASSIGNMENTITEM_INVALID_MERGE_FIELD,ASSIGNMENTITEM_INVALID_OPERATOR,ASSIGNMENTITEM_INVALID_REFERENCE,ASSIGNMENTITEM_INVALID_VALUE,ASSIGNMENTITEM_LEFT_DATATYPE_INVALID_FOR_OPERATOR,ASSIGNMENTITEM_MODIFIES_NONVARIABLE,ASSIGNMENTITEM_NONEXISTENT_REFERENCE,ASSIGNMENTITEM_REQUIRED,ASSIGNMENTITEM_RIGHT_DATATYPE_INVALID_FOR_OPERATOR,AUTOLAUNCHED_CHOICELOOKUP_NOT_SUPPORTED,AUTOLAUNCHED_CHOICE_NOT_SUPPORTED,AUTOLAUNCHED_SCREEN_NOT_SUPPORTED,AUTOLAUNCHED_STEP_NOT_SUPPORTED,AUTOLAUNCHED_SUBFLOW_INCOMPATIBLE_FLOWTYPE,AUTOLAUNCHED_WAIT_NOT_SUPPORTED,BEFORE_SAVE_FLOW_RECORD_UPDATE_CANNOT_HAVE_FAULT_CONNECTOR,BEFORE_SAVE_FLOW_RECORD_UPDATE_INVALID_REFERENCE,BEFORE_SAVE_FLOW_RECORD_UPDATE_REQUIRES_INPUTASSIGNMENTS,BOTH_START_NODE_AND_REFERENCE_FOUND,CHOICEFIELD_DEFAULT_CHOICE_NOT_FOUND,CHOICEFIELD_MISSING_CHOICE,CHOICELOOKUP_DATATYPE_INCOMPATIBLE_WITH_CHOICEFIELD,CHOICE_DATATYPE_INCOMPATIBLE_WITH_CHOICEFIELD,CHOICE_LOOKUP_COLLECTION_REFERENCE_NULL,CHOICE_LOOKUP_INVALID_COLLECTION_REFERENCE,CHOICE_NOT_SUPPORTED_FOR_SCREENFIELDTYPE,CHOICE_USED_MULTIPLE_TIMES_IN_SAME_FIELD,COLLECTION_PROCESSOR_DUPLICATE_MAPITEM,COLLECTION_PROCESSOR_INVALID_COLLECTION_REFERENCE,COLLECTION_PROCESSOR_INVALID_CONFIGURATION,COLLECTION_PROCESSOR_INVALID_OUTPUTSOBJECTTYPE,COLLECTION_PROCESSOR_MAX_SORT_FIELDS_LIMIT_EXCEEDED,COLLECTION_PROCESSOR_MISMATCHED_OBJECTTYPE,COLLECTION_PROCESSOR_MISSING_MAP,COLLECTION_PROCESSOR_MISSING_OUTPUTSOBJECTTYPE,COLLECTION_PROCESSOR_MISSING_PARAMETER,COLLECTION_PROCESSOR_MISSING_SORT,COLLECTION_PROCESSOR_NOT_SUPPORTED_FOR_API_VERSION,COLLECTION_PROCESSOR_REQUIRES_PERM,COLLECTION_PROCESSOR_SORT_FIELD_INVALID_FOR_OBJECT,COLLECTION_PROCESSOR_TYPE_NOT_SUPPORTED,COLLECTION_PROCESSOR_VARIABLE_NULL,CONDITIONAL_SCREENFIELD_VISIBILITY_NOT_SUPPORTED_FOR_ENVIRONMENT,CONDITION_BUILDER_MISSING_FLOW_VARIABLE,CONDITION_BUILDER_MISSING_REQUIRED_PERMISSIONS,CONDITION_BUILDER_UNSUPPORTED_FLOW_VARIABLE,CONDITION_INVALID_LEFTOPERAND,CONDITION_LOGIC_EXCEEDS_LIMIT,CONDITION_LOGIC_INVALID,CONDITION_LOGIC_MISSING,CONDITION_MISSING_DATATYPE,CONDITION_MISSING_OPERATOR,CONDITION_OPERAND_DATATYPES_INCOMPATIBLE,CONDITION_OPERAND_INCOMPATIBLE_WITH_ELEMENT,CONDITION_OPERATOR_INCOMPATIBLE,CONDITION_REFERENCED_ELEMENT_NOT_FOUND,CONDITION_RIGHTOPERAND_NULL,CONNECTOR_MISSING_TARGET,CONSTANT_INCLUDES_REFERENCES,CUSTOMEVENTS_NOT_ENABLED,CUSTOMEVENT_MISSING_PROCESSMETADATAVALUES,CUSTOMEVENT_OBJECTTYPE_NOT_FOUND,CUSTOMEVENT_OBJECTTYPE_NOT_SUPPORTED,CUSTOMEVENT_PROCESSMETADATAVALUES_MISSING_NAME,CUSTOMEVENT_PROCESSMETADATAVALUES_MORE_THAN_ONE_NAME,DATATYPE_INVALID,DATATYPE_MISSING,DATA_TYPE_NOT_SUPPORTED_FOR_PROCESSTYPE,DECISION_DEFAULT_CONNECTOR_MISSING_LABEL,DECISION_MISSING_OUTCOME,DYNAMIC_TYPE_MAPPING_MISSING,ELEMENT_CONNECTS_TO_SELF,ELEMENT_COORDINATES_INVALID,ELEMENT_INVALID_CONNECTOR,ELEMENT_INVALID_REFERENCE,ELEMENT_INVALID_REFERENCE_FOR_CONFLICTING_FIELD_VALUE,ELEMENT_MISSING_CONNECTOR,ELEMENT_MISSING_LABEL,ELEMENT_MISSING_NAME,ELEMENT_MISSING_REFERENCE,ELEMENT_MORE_THAN_ONE_FIELD,ELEMENT_NAME_INVALID,ELEMENT_NEVER_USED,ELEMENT_NOT_SUPPORTED_IN_SUBFLOW_FOR_TRIGGER_TYPE,ELEMENT_SCALE_SMALLER_THAN_DEFAULTVALUE,ELEMENT_SUBTYPE_NOT_SUPPORTED_FOR_ELEMENTTYPE,ELEMENT_SUBTYPE_NOT_SUPPORTED_FOR_PROCESSTYPE,ELEMENT_TYPE_NOT_SUPPORTED_FOR_ENVIRONMENT,ENTRY_CONDITION_CONFLICTING_FILTERS,ENVIRONMENTS_VALUE_CHANGED,ENVIRONMENT_PERMISSION_REQUIRED,EXTERNAL_OBJECTS_NOT_SUPPORTED,EXTERNAL_OBJECT_FIELDS_NOT_SUPPORTED,EX_AUTOLAUNCHED_SUBFLOW_INCOMPATIBLE_FLOWTYPE,FEATURE_DISABLED,FIELDASSIGNMENT_FIELD_INCOMPATIBLE_DATATYPE,FIELDASSIGNMENT_INVALID_DATATYPE,FIELDASSIGNMENT_INVALID_ELEMENT,FIELDASSIGNMENT_INVALID_REFERENCE,FIELDASSIGNMENT_MULTIPLE_REFERENCES_SAME_FIELD,FIELDASSIGNMENT_PICKLISTFIELD_INCOMPATIBLE_DATATYPE,FIELDASSIGNMENT_REFERENCED_ELEMENT_MISSING_DATATYPE,FIELDSERVICE_UNSUPPORTED_FIELD_TYPE,FIELD_INVALID_VALUE,FIELD_NOT_FOUND,FIELD_RELATIONSHIP_NOT_SUPPORTED,FIELD_TYPE_NOT_SUPPORTED_AS_CHILD_OF_SCREENFIELD_REGION_OR_REGIONCONTAINER,FIELD_TYPE_NOT_SUPPORTED_AS_PARENT,FIELD_VALUE_REQUIRES_PERM,FLEXIPAGE_COMPONENT_ATTRIBUTE_EXPRESSION_EXCEPTION,FLEXIPAGE_COMPONENT_ATTRIBUTE_GENERIC_EXCEPTION,FLEXIPAGE_COMPONENT_ATTRIBUTE_MISSING_REQUIRED,FLEXIPAGE_COMPONENT_ATTRIBUTE_TOO_LONG,FLEXIPAGE_COMPONENT_CUSTOM_VALIDATION_EXCEPTION,FLEXIPAGE_COMPONENT_DESIGN_EXCEPTION,FLEXIPAGE_COMPONENT_EVENT_DUPLICATE_TARGET_EXCEPTION,FLEXIPAGE_COMPONENT_EVENT_EMPTY_TARGET_MAPPING_EXCEPTION,FLEXIPAGE_COMPONENT_EVENT_INVALID_FORMFACTOR_EXCEPTION,FLEXIPAGE_COMPONENT_EVENT_INVALID_SERVICE_EXCEPTION,FLEXIPAGE_COMPONENT_EVENT_SOURCE_EXCEPTION,FLEXIPAGE_COMPONENT_MAX_LIMIT_EXCEPTION,FLEXIPAGE_COMPONENT_RULE_VALIDATION_EXCEPTION,FLEXIPAGE_DUPLICATE_PROPERTY_COMPONENT_EXCEPTION,FLEXIPAGE_EVENT_ATTRIBUTE_GENERIC_EXCEPTION,FLEXIPAGE_INVALID_ITEM_INSTANCE_TYPE_EXCEPTION,FLEXIPAGE_INVALID_PROPERTY_TYPE_COMPONENT_EXCEPTION,FLEXIPAGE_INVALID_PROPERTY_TYPE_EVENT_TARGET_EXCEPTION,FLEXIPAGE_ITEM_INSTANCE_CUSTOM_VALIDATION_EXCEPTION,FLEXIPAGE_MAX_INTERACTIONS_EXCEPTION,FLEXIPAGE_PICKLIST_INVALID_VALUE_EXCEPTION,FLEXIPAGE_RENAMED_COMPONENT_VALIDATION_EXCEPTION,FLEXIPAGE_TEMPLATE_INVALID_SWITCH,FLOW_ALREADY_OVERRIDDEN,FLOW_COMPLEX_VALUE_COLLECTION_TYPE_EXPECTED,FLOW_COMPLEX_VALUE_INVALID_JSON,FLOW_COMPLEX_VALUE_INVALID_MERGE_FIELD,FLOW_COMPLEX_VALUE_NOT_SUPPORTED,FLOW_COMPLEX_VALUE_SCALAR_TYPE_EXPECTED,FLOW_CONTEXT_RECORD_ASSIGNMENT_VARIABLE_INVALID,FLOW_ELEMENT_SCALE_LESS_THAN_ZERO,FLOW_IMMEDIATE_PATH_INCOMPATIBLE_WITH_EXTERNAL_CALLOUTS,FLOW_IMMEDIATE_PATH_INCOMPATIBLE_WITH_EXTERNAL_OBJECTS,FLOW_INCLUDES_STEP,FLOW_INPUTPARAM_MISMATCHED_APEX_CLASS,FLOW_INTERVIEW_BULK_EXECUTION,FLOW_INTERVIEW_HANDLED_ERROR,FLOW_INTERVIEW_INPUT_VALIDATION,FLOW_INTERVIEW_INTERACTION_NOT_FOUND,FLOW_INTERVIEW_INVALID_CHOICE_USER_INPUT,FLOW_INTERVIEW_INVALID_FIELD_VALUE,FLOW_INTERVIEW_INVALID_START_REQUEST,FLOW_INTERVIEW_LIMIT_EXCEEDED,FLOW_INTERVIEW_MISSING_CHOICE_FOR_REQUIRED_CHOICE_FIELD,FLOW_INTERVIEW_MISSING_VALUE_FOR_REQUIRED_INPUT_FIELD,FLOW_INTERVIEW_NAVIGATE,FLOW_INTERVIEW_RANGE_VALIDATION,FLOW_INTERVIEW_REGEX_VALIDATION,FLOW_INTERVIEW_RESUME_INTERVIEW,FLOW_INTERVIEW_SAVE_RESULT,FLOW_INTERVIEW_SET_CHOICE_SELECTED,FLOW_INTERVIEW_START_INTERVIEW,FLOW_INTERVIEW_TYPE_CONVERSION,FLOW_INVALID_NAME,FLOW_NAME_USED_IN_OTHER_CLIENT,FLOW_OVERRIDABLE_CANNOT_BE_OVERRIDE,FLOW_OVERRIDABLE_CANNOT_BE_TEMPLATE,FLOW_OVERRIDDEN_FLOW_INVALID_REFERENCE,FLOW_OVERRIDE_EXTRA_VARIABLE,FLOW_OVERRIDE_INCOMPATIBLE_PROCESS_TYPE,FLOW_OVERRIDE_INCOMPATIBLE_TYPE,FLOW_OVERRIDE_INCOMPATIBLE_VARIABLE,FLOW_RECORD_PRIOR_AUTOLAUNCH_UPDATE_ONLY,FLOW_RECORD_PRIOR_INVALID_IN_RECORD_CREATE,FLOW_RECORD_PRIOR_INVALID_IN_RECORD_DELETE,FLOW_RECORD_PRIOR_INVALID_IN_RECORD_UPDATE,FLOW_RECORD_PRIOR_READ_ONLY,FLOW_REFERENCES_APEX_CLASS_NOT_IN_SAME_PACKAGE,FLOW_RESOURCE_NOT_SUPPORTED_FOR_ENVIRONMENT,FLOW_RULE_REQUIRE_RECORD_CHANGED_NEVER_CHECKED_FOR_RECORD_PRIOR,FLOW_SCHEDULED_PATH_ALLOWED_ONE_ASYNCAFTERCOMMIT_PATH,FLOW_SCHEDULED_PATH_ASYNCAFTERCOMMIT_REQUIRES_RECORD_CHANGED_OR_ISCHANGED,FLOW_SCHEDULED_PATH_CANNOT_USE_IS_CHANGED,FLOW_SCHEDULED_PATH_INCOMPATIBLE_TIME_SOURCE,FLOW_SCHEDULED_PATH_INCOMPATIBLE_WHEN_DECISION_REQUIRES_RECORD_CHANGED,FLOW_SCHEDULED_PATH_INCOMPATIBLE_WITH_FLOW_TRIGGER_TYPE,FLOW_SCHEDULED_PATH_INCOMPATIBLE_WITH_RECORD_PRIOR,FLOW_SCHEDULED_PATH_INVALID_BATCH_SIZE,FLOW_SCHEDULED_PATH_INVALID_OFFSET,FLOW_SCHEDULED_PATH_REQUIRES_DEFAULT_WORKFLOW_USER,FLOW_SCHEDULED_PATH_REQUIRES_RECORD_CHANGED_TO_MEET_CRITERIA,FLOW_SCHEDULE_INFORMATION_INCOMPLETE,FLOW_SOBJECT_VARIABLE_NOT_PERSISTED,FLOW_SOURCE_TEMPLATE_INVALID_REFERENCE,FLOW_STAGE_INCLUDES_REFERENCES,FLOW_STAGE_ORDER_DUPLICATE,FLOW_STAGE_ORDER_OUT_OF_RANGE,FLOW_SYSTEM_VARIABLE_NOT_SUPPORTED_FOR_TRIGGERTYPE,FLOW_TEST_API_NAME_DUPLICATED,FLOW_TEST_ASSERTION_MISSING,FLOW_TEST_ASSERTION_NOT_SUPPORTED,FLOW_TEST_CONDITION_INCOMPATIBLE,FLOW_TEST_CONDITION_INVALID_DATATYPE_MAPPING,FLOW_TEST_CONDITION_LIMIT,FLOW_TEST_CONDITION_NOT_SUPPORTED,FLOW_TEST_DATATYPE_INVALID,FLOW_TEST_FLOW_INVALID,FLOW_TEST_IMMEDIATE_PATH_MISSING,FLOW_TEST_MERGE_FIELD_INVALID,FLOW_TEST_MERGE_FIELD_NOT_SUPPORTED,FLOW_TEST_OPERATOR_INVALID,FLOW_TEST_PARAMETER_DUPLICATED,FLOW_TEST_PARAMETER_INCOMPATIBLE,FLOW_TEST_PARAMETER_INVALID,FLOW_TEST_PARAMETER_MISSING,FLOW_TEST_PARAMETER_NOT_SUPPORTED,FLOW_TEST_PARAMS_REQUIRED,FLOW_TEST_POINTS_DUPLICATED,FLOW_TEST_POINT_MISSING,FLOW_TEST_POINT_NOT_SUPPORTED,FLOW_TEST_PROCESSTYPE_INVALID,FLOW_TEST_RIGHTVALUE_INVALID,FLOW_TRIGGER_DERIVED_FIELD_NOT_SUPPORTED,FLOW_TRIGGER_ORDER_OUT_OF_BOUNDS,FLOW_TRIGGER_TYPE_INCOMPATIBLE_WITH_RECORD_TRIGGER_TYPE,FORMULA_CMT_LIMIT_EXCEEDED,FORMULA_EXPRESSION_INVALID,GLOBAL_VARIABLE_NOT_SUPPORTED_FOR_PROCESSTYPE,HTTP_METHOD_NOT_SUPPORTED,INCONSISTENT_DYNAMIC_TYPE_MAPPING,INCONSISTENT_VALUE_FOR_DYNAMIC_VALUE_FIELD,INPUTPARAM_CONFIGURATION_NOT_FOUND,INPUTPARAM_INCOMPATIBLE_CONFIGURATION_ONLY,INPUTPARAM_INCOMPATIBLE_DATATYPE,INPUTPARAM_INCOMPATIBLE_WITH_COLLECTION_VARIABLE,INPUTPARAM_INCOMPATIBLE_WITH_NONCOLLECTION_VARIABLE,INPUTPARAM_MISMATCHED_OBJECTTYPE,INVALID_ASSIGNEE,INVALID_EMAIL_ADDRESS,INVALID_ENVIRONMENTS_VALUE,INVALID_FLOW,INVALID_FLOW_INTERVIEW,INVALID_PROCESSTYPE_ENVIRONMENT_COMBINATION,INVALID_REGEX_IN_SURVEY_QUESTIONS,INVALID_SENDER_TYPE,INVALID_SURVEY_VARIABLE_NAME_OR_TYPE,INVOCABLE_ACTION_TYPE_NOT_SUPPORTED_FOR_ENVIRONMENT,LOOP_ASSIGNNEXTVALUETO_MISMATCHED_APEXCLASSTYPE,LOOP_ASSIGNNEXTVALUETO_MISMATCHED_DATATYPE,LOOP_ASSIGNNEXTVALUETO_MISMATCHED_OBJECTTYPE,LOOP_ASSIGNNEXTVALUETO_MISSING,LOOP_ASSIGNNEXTVALUETO_MISSING_VARIABLE,LOOP_ASSIGNNEXTVALUETO_REFERENCE_NOT_FOUND,LOOP_COLLECTION_ELEMENT_NOT_FOUND,LOOP_COLLECTION_NOT_FOUND,LOOP_COLLECTION_NOT_SUPPORTED_FOR_FIELD,LOOP_MISSING_COLLECTION,MAX_CHILD_TYPES,MAX_EXTERNAL_REFERENCES_IN_QUERY,MAX_STATEMENT_SIZE,MISSING_ASSIGNEE,MISSING_ASSIGNEE_TYPE,MISSING_EMAIL_RECIPIENTS,MULTIPLE_ASSIGNEES_NOT_ALLOWED,NON_EXPOSED_COMPONENT_IN_FLOW,NON_GLOBAL_COMPONENT_IN_EXPORTED_FLOW,NUMBER_OF_SCREENFIELD_REGIONS_EXCEEDS_LIMIT,OBJECTTYPE_INVALID,OBJECT_CANNOT_BE_CREATED,OBJECT_CANNOT_BE_DELETED,OBJECT_CANNOT_BE_QUERIED,OBJECT_CANNOT_BE_UPDATED,OBJECT_ENCRYPTED_FIELDS_NOT_SUPPORTED,OBJECT_NOT_FOUND,OBJECT_TYPE_DOES_NOT_EXIST,ORCHESTRATION_REQUIRESASYNCPROCESSING_NOT_SUPPORTED,ORG_WIDE_EMAIL_INVALID,ORG_WIDE_EMAIL_NOT_USED,OUTPUTPARAM_ASSIGNTOREFERENCE_INVALID,OUTPUTPARAM_ASSIGNTOREFERENCE_NOTFOUND,OUTPUTPARAM_INCOMPATIBLE_DATATYPE,OUTPUTPARAM_MISMATCHED_OBJECTTYPE,OUTPUTPARAM_MISMATCHED_WITH_COLLECTION_VARIABLE,OUTPUTPARAM_MISSING_ASSIGNTOREFERENCE,OUTPUTPARAM_MISTMATCHED_WITH_NONCOLLECTION_VARIABLE,PARAM_DATATYPE_NOT_SUPPORTED,PAST_SCHEDULE_FLOW_WILL_NOT_RUN,PRICE_ADJUSTMENT_TIER_VALIDATION_ERROR,PROCESSMETADATAVALUES_NOT_SUPPORTED_FOR_PROCESSTYPE,PROCESSMETADATAVALUE_NONEXISTENT_ELEMENT,PROCESSTYPE_COMPONENTTYPE_NOT_SUPPORTED,PROCESSTYPE_ELEMENT_CONFIG_NOT_SUPPORTED,PROCESSTYPE_ELEMENT_NOT_SUPPORTED,PROCESSTYPE_EVALUATIONFLOW_REQUIRED,PROCESSTYPE_NOT_SUPPORTED,PROCESSTYPE_SCREEN_FIELDTYPE_NOT_SUPPORTED,PROCESS_TYPE_INCOMPATIBLE,RECOMMENDATION_STRATEGY_EXCEPTION,RECORDFILTER_ENCRYPTED_FIELDS_NOT_SUPPORTED,RECORDFILTER_GEOLOCATION_FIELDS_NOT_SUPPORTED,RECORDFILTER_INVALID_DATATYPE,RECORDFILTER_INVALID_ELEMENT,RECORDFILTER_INVALID_OPERATOR,RECORDFILTER_INVALID_REFERENCE,RECORDFILTER_MISSING_DATATYPE,RECORDFILTER_MULTIPLE_QUERIES_SAME_FIELD,RECORDFILTER_NON_PRIMITIVE,RECORDLOOKUP_IDASSIGNMENT_VARIABLE_INCOMPATIBLE_DATATYPE,RECORDLOOKUP_IDASSIGNMENT_VARIABLE_NOT_FOUND,RECORDUPDATE_MISSING_FILTERS,REFERENCED_ELEMENT_NOT_FOUND,REQUIRED_VARIABLE_INVALID,REQUIRED_VARIABLE_MISSING,RESOURCE_NOT_SUPPORTED,RULE_MISSING_CONDITION,RULE_REQUIRE_RECORD_CHANGED_NEVER_CHECKED,SCHEDULE_TRIGGERED_FLOW_REQUIRES_DEFAULT_WORKFLOW_USER,SCREENCOMPONENT_CONTAINS_VISIBILITY_RULE,SCREENFIELD_API_VERSION_NOT_SUPPORTED,SCREENFIELD_BOOLEAN_ISREQUIRED_IS_FALSE,SCREENFIELD_CANNOT_HAVE_BOTH_DEFAULTVALUE_AND_DEFAULTSELECTEDCHOICEREFERENCE,SCREENFIELD_DEFAULTVALUE_NOT_SUPPORTED,SCREENFIELD_EXTENSION_DUPLICATE_INPUT_PARAM,SCREENFIELD_EXTENSION_DUPLICATE_OUTPUT_PARAM,SCREENFIELD_EXTENSION_IMPLEMENTATION_INVALID,SCREENFIELD_EXTENSION_INPUT_ATTRIBUTE_INVALID,SCREENFIELD_EXTENSION_NAME_INVALID,SCREENFIELD_EXTENSION_NAME_MISSING,SCREENFIELD_EXTENSION_NAME_NOT_SUPPORTED,SCREENFIELD_EXTENSION_OUTPUT_ATTRIBUTE_INVALID,SCREENFIELD_EXTENSION_REQUIRED_INPUT_MISSING,SCREENFIELD_INPUTS_NOT_SUPPORTED,SCREENFIELD_INPUTS_ON_NEXT_NAV_TO_ASSOC_SCRN_NOT_SUPPORTED,SCREENFIELD_INVALID_DATATYPE,SCREENFIELD_MULTISELECTCHOICE_SEMICOLON_NOT_SUPPORTED,SCREENFIELD_OBJECTFIELDREFERENCE_INVALID_FORMAT,SCREENFIELD_OBJECTPROVIDED_CANNOT_HAVE_DEFAULTVALUE,SCREENFIELD_OBJECTPROVIDED_CANNOT_HAVE_HELPTEXT,SCREENFIELD_OBJECTPROVIDED_INVALID_DATATYPE,SCREENFIELD_OBJECTPROVIDED_ISREQUIRED_NOT_SUPPORTED,SCREENFIELD_OBJECTPROVIDED_LIGHTNING_RUNTIME_DISABLED,SCREENFIELD_OBJECTPROVIDED_MISSING_OBJECTFIELDREFERENCE,SCREENFIELD_OUTPUTS_NOT_SUPPORTED,SCREENFIELD_REGION_CONTAINS_DUPLICATE_INPUT_PARAMETER_VALUES,SCREENFIELD_REGION_INPUT_PARAMETER_NOT_SUPPORTED,SCREENFIELD_REGION_MISSING_REQUIRED_PERMISSIONS,SCREENFIELD_REGION_NOT_IN_CONTAINER,SCREENFIELD_REGION_REQUIRED_INPUT_PARAMETER_MISSING,SCREENFIELD_REGION_WIDTH_SUM_EXCEEDS_LIMIT,SCREENFIELD_REGION_WIDTH_VALUE_INVALID,SCREENFIELD_TYPE_NOT_SUPPORTED,SCREENFIELD_TYPE_NOT_SUPPORTED_FOR_API_VERSION,SCREENFIELD_TYPE_NOT_SUPPORTED_FOR_ENVIRONMENT,SCREENFIELD_USERINPUT_NOT_SUPPORTED_FOR_CHOICETYPE,SCREENFIELD_VALIDATIONRULE_NOT_SUPPORTED,SCREENFOOTER_MERGEFIELD_NOT_SUPPORTED,SCREENRULE_ACTION_INVALID_ATTRIBUTE,SCREENRULE_ACTION_INVALID_ATTRIBUTE_FOR_API_VERSION,SCREENRULE_ACTION_INVALID_VALUE,SCREENRULE_ACTION_MISSING_ATTRIBUTE,SCREENRULE_ACTION_MISSING_FIELDREFERENCE,SCREENRULE_ACTION_MISSING_VALUE,SCREENRULE_ATTRIBUTE_NOT_SUPPORTED_FOR_SCREENFIELD,SCREENRULE_FIELD_NOT_FOUND_ON_SCREEN,SCREENRULE_MISSING_ACTION,SCREENRULE_NOT_SUPPORTED_IN_ORG,SCREENRULE_SCREENFIELD_NOT_VISIBLE,SCREENRULE_VISIBILITY_NOT_SUPPORTED_IN_ORG,SCREEN_ALLOWBACK_ALLOWFINISH_BOTH_FALSE,SCREEN_CONTAINS_LIGHTNING_COMPONENT,SCREEN_CONTAINS_REGION_CONTAINER_COMPONENT,SCREEN_FIELD_REGION_CONTAINER_TYPE_INVALID_VALUE,SCREEN_FIELD_REGION_CONTAINER_TYPE_MISSING,SCREEN_FIELD_SECTION_HEADER_INVALID_VALUE,SCREEN_FIELD_SECTION_HEADER_MISSING,SCREEN_MISSING_FOOTER_AND_LIGHTNING_COMPONENT,SCREEN_MISSING_LABEL,SCREEN_MULTISELECTFIELD_DOESNT_SUPPORT_CHOICE_WITH_USERINPUT,SCREEN_PAUSEDTEXT_NOT_SHOWN_WHEN_ALLOWPAUSE_IS_FALSE,SETTING_FIELD_MAKES_OTHER_FIELD_REQUIRED,SETTING_FIELD_MAKES_OTHER_FIELD_UNSUPPORTED,SETTING_FIELD_VALUE_MAKES_OTHER_FIELD_UNSUPPORTED,SETTING_FIELD_VALUE_MAKES_OTHER_FIELD_VALUE_UNSUPPORTED,SLACK_API_EXCEPTION_EXTENSION,SOBJECT_ELEMENT_INCOMPATIBLE_DATATYPE,SOBJECT_ELEMENT_MISMATCHED_OBJECTTYPE,SORT_ENCRYPTED_FIELDS_NOT_SUPPORTED,SORT_FIELD_MISSING,SORT_FIELD_NOT_SUPPORTED,SORT_GEOLOCATION_FIELDS_NOT_SUPPORTED,SORT_LIMIT_INVALID,SORT_ORDER_MISSING,SPECIFIC_FIELD_VALUE_MAKES_OTHER_FIELD_REQUIRED,SPECIFIC_FIELD_VALUE_MAKES_OTHER_FIELD_VALUE_REQUIRED,STAGE_NAME_NOT_FULLY_QUALIFIED,START_ELEMENT_MISSING,SUBFLOW_DESKTOP_DESIGNER_FLOWS_NOT_SUPPORTED,SUBFLOW_DIFFERENT_RUNMODE,SUBFLOW_INPUT_ELEMENT_INCOMPATIBLE_DATATYPES,SUBFLOW_INPUT_MISMATCHED_APEX_CLASS,SUBFLOW_INPUT_MISMATCHED_COLLECTIONTYPES,SUBFLOW_INPUT_MISMATCHED_OBJECTS,SUBFLOW_INPUT_MISSING_NAME,SUBFLOW_INPUT_MULTIPLE_ASSIGNMENTS_TO_ONE_VARIABLE,SUBFLOW_INPUT_REFERENCES_FIELD_ON_SOBJECT_VARIABLE,SUBFLOW_INPUT_VALUE_INCOMPATIBLE_DATATYPES,SUBFLOW_INPUT_VARIABLE_NOT_FOUND_IN_MASTERFLOW,SUBFLOW_INPUT_VARIABLE_NOT_FOUND_IN_REFERENCEDFLOW,SUBFLOW_INPUT_VARIABLE_NO_INPUT_ACCESS,SUBFLOW_INVALID_NAME,SUBFLOW_INVALID_REFERENCE,SUBFLOW_MASTER_FLOW_TYPE_NOT_AUTOLAUNCHED,SUBFLOW_MISSING_NAME,SUBFLOW_NO_ACTIVE_VERSION,SUBFLOW_OUTPUT_INCOMPATIBLE_DATATYPES,SUBFLOW_OUTPUT_MISMATCHED_APEX_CLASS,SUBFLOW_OUTPUT_MISMATCHED_COLLECTIONTYPES,SUBFLOW_OUTPUT_MISMATCHED_OBJECTS,SUBFLOW_OUTPUT_MISSING_ASSIGNTOREFERENCE,SUBFLOW_OUTPUT_MISSING_NAME,SUBFLOW_OUTPUT_MULTIPLE_ASSIGNMENTS_TO_ONE_VARIABLE,SUBFLOW_OUTPUT_REFERENCES_FIELD_ON_SOBJECT_VARIABLE,SUBFLOW_OUTPUT_TARGET_DOES_NOT_EXIST_IN_MASTER_FLOW,SUBFLOW_OUTPUT_VARIABLE_NOT_FOUND_IN_MASTERFLOW,SUBFLOW_OUTPUT_VARIABLE_NOT_FOUND_IN_REFERENCEDFLOW,SUBFLOW_OUTPUT_VARIABLE_NO_OUTPUT_ACCESS,SUBFLOW_PROCESSTYPE_NOT_SUPPORTED,SUBFLOW_PROCESS_TYPE_INCOMPATIBLE,SUBFLOW_REFERENCES_MASTERFLOW,SURVEY_ADVANCED_CONDITION_LOGIC_NOT_SUPPORTED,SURVEY_CHOICE_NOT_REFERENCED_BY_A_QUESTION,SURVEY_CHOICE_REFERENCED_BY_MULTIPLE_QUESTIONS,SURVEY_ELEMENT_NEVER_REACHED,SURVEY_ENRICH_INVALID_CONFIGURATION,SURVEY_INACTIVE_SUBFLOWS,SURVEY_INVALID_ATTACHMENT_QUESTION_CONFIGURATION,SURVEY_INVALID_CMT_CONFIGURED,SURVEY_INVALID_CUSTOM_THANK_YOU_CONFIGURATION,SURVEY_INVALID_LINK_TARGET_IN_QUESTION_LABEL,SURVEY_INVALID_MATRIX_QUESTION_CONFIGURATION,SURVEY_INVALID_MERGE_FIELD_CONFIGURATION,SURVEY_INVALID_OUTPUT_VARIABLE,SURVEY_MISSING_QUESTION_OR_SUBFLOW,SURVEY_MISSING_REQUIRED_VARIABLES,SURVEY_MULTIPLE_SCREENS_CANNOT_CONNECT_TO_SAME_DECISION,SURVEY_NESTED_SUBFLOWS,SURVEY_NONSURVEY_SUBFLOWS,SURVEY_RULE_INVALID_RIGHT_OPERAND,SURVEY_SCREENFIELD_TYPE_NOT_SUPPORTED_FOR_QUESTION,SURVEY_START_ELEMENT_INVALID,SURVEY_VARIABLE_ACCESS_INVALID,SYSTEM_MODE_NOT_ALLOWED,TRIGGERED_FLOW_REDUNDANT_QUERY,TRIGGERING_RECORD_UPDATE_REQUIRES_INPUTASSIGNMENTS,TRIGGER_ORDER_NOT_SUPPORTED,TRIGGER_TYPE_CONTEXT_OBJECT_NOT_SUPPORTED,TRIGGER_TYPE_ELEMENT_NOT_SUPPORTED,TRIGGER_TYPE_INCOMPATIBLE_WITH_PROCESS_TYPE,TRIGGER_TYPE_NOT_ALLOWED_FOR_SUBFLOW,TYPE_MAPPING_DUPLICATED,TYPE_MAPPING_NAME_MISSING,TYPE_MAPPING_NOT_FOUND,TYPE_MAPPING_NOT_SUPPORTED,TYPE_MAPPING_NOT_SUPPORTED_FOR_API_VERSION,TYPE_MAPPING_NOT_SUPPORTED_FOR_PROCESS_TYPE,UNEXPECTED_ERROR,VALIDATION_EXCEPTION,VALUE_CHAR_LIMIT_EXCEEDED,VARIABLE_FIELD_NOT_SUPPORTED_FOR_DATATYPE,VARIABLE_FIELD_NOT_SUPPORTED_FOR_DATATYPE_AND_COLLECTION,VARIABLE_FIELD_REQUIRED_FOR_DATATYPE,VARIABLE_SCALE_EXCEEDS_LIMIT,VARIABLE_SCALE_NEGATIVE_INTEGER,VARIABLE_SCALE_NULL,VERSION_NOT_VALID,VISIBILITY_RULE_EXCEEDS_CONDITION_LIMIT,VISIBILITY_RULE_NOT_AVAILABLE_IN_ORG,VISIBILITY_RULE_NOT_SUPPORTED_FOR_API_VERSION,VISIBILITY_RULE_NOT_SUPPORTED_FOR_PROCESSTYPE,VISIBILITY_RULE_NO_CONDITIONS,WAITEVENT_DEFAULT_CONNECTOR_MISSING_LABEL,WAITEVENT_DUPLICATE_INPUT_PARAM,WAITEVENT_INPUT_NOT_SUPPORTED_FOR_EVENTTYPE,WAITEVENT_INPUT_REQUIRES_LITERAL_VALUE,WAITEVENT_INVALID_CONDITION_LOGIC,WAITEVENT_MISSING,WAITEVENT_MISSING_CONNECTOR,WAITEVENT_MISSING_EVENTTYPE,WAITEVENT_OBJECT_NOT_SUPPORTED_FOR_EVENTTYPE,WAITEVENT_OUTPUT_NOT_SUPPORTED_FOR_EVENTTYPE,WAITEVENT_RELATIVEALARM_INVALID_DATETIME_FIELD,WAITEVENT_RELATIVEALARM_INVALID_FIELD,WAITEVENT_RELATIVEALARM_INVALID_OBJECTTYPE,WAITEVENT_RELATIVEALARM_INVALID_OFFSETNUMBER,WAITEVENT_RELATIVEALARM_INVALID_OFFSETUNIT,WAITEVENT_REQUIRED_INPUT_MISSING,WAITEVENT_TYPE_INVALID_OR_NOT_SUPPORTED,WORKFLOW_MISSING_PROCESSMETADATAVALUES,WORKFLOW_OBJECTTYPE_NOT_FOUND,WORKFLOW_OBJECTTYPE_NOT_SUPPORTED,WORKFLOW_OBJECTVARIABLE_AND_OLDOBJECTVARIABLE_REFERENCE_SAME_SOBJECT_VARIABLE,WORKFLOW_OBJECTVARIABLE_DOESNT_SUPPORT_INPUT,WORKFLOW_OLDOBJECTVARIABLE_DOESNT_SUPPORT_INPUT,WORKFLOW_PROCESSMETADATAVALUES_MORE_THAN_ONE_NAME,WORKFLOW_PROCESS_METADATAVALUES_MISSING_NAME,WORKFLOW_RECURSIVECOUNTVARIABLE_DOESNT_SUPPORT_INPUT,WORKFLOW_RULE_NOT_DEACTIVATED,WORKFLOW_TRIGGERTYPE_INVALID_VALUE */
    extendedErrorCode?: string;
}
