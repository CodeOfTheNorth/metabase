/* @flow */

import type { CardId } from "./Card";
import type { ConcreteField } from "./Query";

export type ParameterId = string;
export type ParameterType = string;

export type Parameter = {
    id: ParameterId,
    name: string,
    type: ParameterType,
    slug: string,
    default?: string,

    target?: ParameterTarget
};

export type ParameterValue = number | string;

export type VariableTarget = ["template-tag", string];
export type DimensionTarget = ["template-tag", string] | ConcreteField

export type ParameterTarget =
    ["variable", VariableTarget] |
    ["dimension", DimensionTarget];

export type ParameterMappingOption = {
    name: string,
    target: ParameterTarget,
};

export type ParameterMapping = {
    card_id: CardId,
    parameter_id: ParameterId,
    target: ParameterTarget
};

export type ParameterOption = {
    name: string,
    description?: string,
    type: ParameterType
};

export type ParameterInstance = {
    type: ParameterType,
    target: ParameterTarget,
    value: string
};

export type ParameterMappingUIOption = ParameterMappingOption & {
    icon: ?string,
    sectionName: string,
    isFk?: boolean,
    isVariable?: boolean,
};

export type ParameterValues = {
    [id: ParameterId]: ParameterValue
};
