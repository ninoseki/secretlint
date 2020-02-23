import {
    SecretLintCoreDescriptorRule,
    SecretLintCoreDescriptorRulePreset,
    SecretLintRuleCreator,
    SecretLintRuleCreatorOptions,
    SecretLintRulePresetContext,
    SecretLintSourceCode
} from "@secretlint/types";
import { RunningEvents } from "./RunningEvents";
import { ContextEvents, createRuleContext } from "./RuleContext";

/**
 * Create a context for Rule Preset
 * @param descriptorRulePreset
 * @param sourceCode
 * @param runningEvents
 * @param contextEvents
 * @param sharedOptions
 */
export const createRulePresetContext = ({
    descriptorRulePreset,
    sourceCode,
    runningEvents,
    contextEvents,
    sharedOptions
}: {
    descriptorRulePreset: SecretLintCoreDescriptorRulePreset;
    sourceCode: SecretLintSourceCode;
    contextEvents: ContextEvents;
    runningEvents: RunningEvents;
    sharedOptions: {};
}): SecretLintRulePresetContext => {
    const presetRules = descriptorRulePreset.rules || [];
    if (!Array.isArray(presetRules)) {
        console.error(`${descriptorRulePreset.id}:PresetRules is invalid format`, presetRules);
        throw new Error("preset's rules should be an array of rule definitions");
    }
    return {
        sharedOptions,
        registerRule<Options extends SecretLintRuleCreatorOptions>(
            rule: SecretLintRuleCreator<Options>,
            defaultValue?: Omit<SecretLintCoreDescriptorRule<Options>, "id" | "rule">
        ): void {
            const descriptorRule = presetRules.find(descriptorRule => {
                return descriptorRule.id === rule.meta.id;
            });
            // Use undefined instead of {}
            // Default value will be handled by RunningEvents#registerRule
            const descriptorRuleOptions = descriptorRule ? descriptorRule.options : undefined;
            const descriptorRuleDisabled = descriptorRule ? descriptorRule.disabled : undefined;
            const descriptorRuleSeverity = descriptorRule ? descriptorRule.severity : undefined;
            const context = createRuleContext({
                // rule id is a single rule in a preset
                ruleId: rule.meta.id,
                // parent rule id is rule preset id
                ruleParentId: descriptorRulePreset.id,
                severity: descriptorRuleSeverity,
                sourceCode,
                contextEvents: contextEvents,
                sharedOptions: sharedOptions
            });
            const defaultValueOfPreset = defaultValue ? defaultValue : {};
            runningEvents.registerRule({
                descriptorRule: {
                    // options and disabled ...
                    ...defaultValueOfPreset,
                    // Prefer to use user setting
                    // User can override preset setting
                    ...descriptorRule,
                    id: rule.meta.id,
                    options: descriptorRuleOptions,
                    rule,
                    disabled: descriptorRuleDisabled,
                    severity: descriptorRuleSeverity
                },
                context
            });
        }
    };
};
