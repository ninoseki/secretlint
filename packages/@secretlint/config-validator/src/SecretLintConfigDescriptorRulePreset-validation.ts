/* tslint:disable */
// generated by typescript-json-validator
import {inspect} from 'util';
import Ajv = require('ajv');
import {SecretLintConfigDescriptorRulePreset} from '@secretlint/types';
export const ajv = new Ajv({"allErrors":true,"coerceTypes":"array","format":"fast","nullable":false,"unicode":true,"uniqueItems":true,"useDefaults":true});

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

export {SecretLintConfigDescriptorRulePreset};
export const SecretLintConfigDescriptorRulePresetSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "Options": {
      "$ref": "#/definitions/__type"
    },
    "Options_1": {
      "$ref": "#/definitions/__type_3"
    },
    "Options_2": {
      "type": "object"
    },
    "Options_3": {
      "type": "object"
    },
    "SecretLintRuleCreator": {
      "$ref": "#/definitions/__type_1"
    },
    "SecretLintRuleCreator_1": {
      "$ref": "#/definitions/__type_5"
    },
    "SecretLintRuleLocalizeMessages": {
      "$ref": "#/definitions/__type_2"
    },
    "SecretLintRulePresetCreator": {
      "$ref": "#/definitions/__type_4"
    },
    "SecretLintRulePresetCreator_1": {
      "$ref": "#/definitions/__type_6"
    },
    "SecretLintRuleSeverityLevel": {
      "description": "Rule Severity Level",
      "enum": [
        "error",
        "info",
        "warning"
      ],
      "type": "string"
    },
    "__type": {
      "properties": {
      },
      "type": "object"
    },
    "__type_1": {
      "properties": {
        "messages": {
          "$ref": "#/definitions/SecretLintRuleLocalizeMessages"
        },
        "meta": {
          "properties": {
            "docs": {
              "properties": {
                "url": {
                  "type": "string"
                }
              },
              "required": [
                "url"
              ],
              "type": "object"
            },
            "id": {
              "type": "string"
            },
            "recommended": {
              "type": "boolean"
            },
            "supportedContentTypes": {
              "items": {
                "enum": [
                  "all",
                  "binary",
                  "text"
                ],
                "type": "string"
              },
              "type": "array"
            },
            "type": {
              "enum": [
                "filter",
                "scanner"
              ],
              "type": "string"
            }
          },
          "required": [
            "id",
            "recommended",
            "supportedContentTypes",
            "type"
          ],
          "type": "object"
        }
      },
      "required": [
        "messages",
        "meta"
      ],
      "type": "object"
    },
    "__type_2": {
      "additionalProperties": {
        "anyOf": [
          {
            "allOf": [
              {
                "$ref": "#/definitions/{[x:string]:string;}"
              },
              {
                "properties": {
                  "en": {
                    "type": "string"
                  }
                },
                "required": [
                  "en"
                ],
                "type": "object"
              }
            ]
          },
          {
            "type": "string"
          }
        ]
      },
      "type": "object"
    },
    "__type_3": {
      "properties": {
      },
      "type": "object"
    },
    "__type_4": {
      "properties": {
        "meta": {
          "properties": {
            "docs": {
              "properties": {
                "url": {
                  "type": "string"
                }
              },
              "required": [
                "url"
              ],
              "type": "object"
            },
            "id": {
              "type": "string"
            },
            "recommended": {
              "type": "boolean"
            },
            "type": {
              "enum": [
                "preset"
              ],
              "type": "string"
            }
          },
          "required": [
            "id",
            "recommended",
            "type"
          ],
          "type": "object"
        }
      },
      "required": [
        "meta"
      ],
      "type": "object"
    },
    "__type_5": {
      "properties": {
        "messages": {
          "$ref": "#/definitions/SecretLintRuleLocalizeMessages"
        },
        "meta": {
          "properties": {
            "docs": {
              "properties": {
                "url": {
                  "type": "string"
                }
              },
              "required": [
                "url"
              ],
              "type": "object"
            },
            "id": {
              "type": "string"
            },
            "recommended": {
              "type": "boolean"
            },
            "supportedContentTypes": {
              "items": {
                "enum": [
                  "all",
                  "binary",
                  "text"
                ],
                "type": "string"
              },
              "type": "array"
            },
            "type": {
              "enum": [
                "filter",
                "scanner"
              ],
              "type": "string"
            }
          },
          "required": [
            "id",
            "recommended",
            "supportedContentTypes",
            "type"
          ],
          "type": "object"
        }
      },
      "required": [
        "messages",
        "meta"
      ],
      "type": "object"
    },
    "__type_6": {
      "properties": {
        "meta": {
          "properties": {
            "docs": {
              "properties": {
                "url": {
                  "type": "string"
                }
              },
              "required": [
                "url"
              ],
              "type": "object"
            },
            "id": {
              "type": "string"
            },
            "recommended": {
              "type": "boolean"
            },
            "type": {
              "enum": [
                "preset"
              ],
              "type": "string"
            }
          },
          "required": [
            "id",
            "recommended",
            "type"
          ],
          "type": "object"
        }
      },
      "required": [
        "meta"
      ],
      "type": "object"
    },
    "{[x:string]:string;}": {
      "type": "object"
    }
  },
  "properties": {
    "disabled": {
      "description": "Disable the rule\nDefault: false",
      "type": "boolean"
    },
    "id": {
      "description": "**Required**\nRule Preset id that is package name or shorten package name\nExamples\n- \"@scope/secretlint-rule-preset-example\" or \"@scope/preset-example\"(shorten)\n- \"secretlint-rule-preset-example\" or \"preset-example\"(shorten)",
      "type": "string"
    },
    "options": {
      "$ref": "#/definitions/Options_3",
      "description": "Rule options\nSee each rule documentation\nDefault: {} (empty object)"
    },
    "rule": {
      "$ref": "#/definitions/SecretLintRulePresetCreator_1",
      "description": "FOR DEBUG\nRule instance"
    },
    "rules": {
      "description": "Preset's rule definitions\nrules is an array of rule definition\nExample\n{\n     \"id\": \"preset\"\n     \"rules\": [{ \"id\": \"example\", \"options\": {}]}\n}",
      "items": {
        "properties": {
          "disabled": {
            "description": "If true, Disable the rule.\nDefault: false",
            "type": "boolean"
          },
          "id": {
            "description": "**Required**\nRule id that is package name or shorten package name\nExamples\n- \"@scope/secretlint-rule-example\" or \"@scope/example\"(shorten)\n- \"secretlint-rule-example\" or \"example\"(shorten)",
            "type": "string"
          },
          "options": {
            "$ref": "#/definitions/Options",
            "description": "Rule options.\nThis value is defined by each rules.\nDefault: {} (empty object)"
          },
          "rule": {
            "$ref": "#/definitions/SecretLintRuleCreator",
            "description": "FOR DEBUG\nRule instance"
          },
          "severity": {
            "$ref": "#/definitions/SecretLintRuleSeverityLevel",
            "description": "Severity level for the rule.\nDefault: \"error\""
          }
        },
        "required": [
          "id"
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "required": [
    "id"
  ],
  "type": "object"
};
export type ValidateFunction<T> = ((data: unknown) => data is T) & Pick<Ajv.ValidateFunction, 'errors'>
export const isSecretLintConfigDescriptorRulePreset = ajv.compile(SecretLintConfigDescriptorRulePresetSchema) as ValidateFunction<SecretLintConfigDescriptorRulePreset>;
export default function validate(value: unknown): SecretLintConfigDescriptorRulePreset {
  if (isSecretLintConfigDescriptorRulePreset(value)) {
    return value;
  } else {
    throw new Error(
      ajv.errorsText(isSecretLintConfigDescriptorRulePreset.errors!.filter((e: any) => e.keyword !== 'if'), {dataVar: 'SecretLintConfigDescriptorRulePreset'}) +
      '\n\n' +
      inspect(value),
    );
  }
}
