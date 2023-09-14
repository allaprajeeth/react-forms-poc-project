import { UISchemaElement } from "@jsonforms/core";

export class BaseSchema{
    data : {
        [attr: string]: any;
    } | undefined;
    jsonSchema : {
        [attr: string]: any;
    } | undefined;
    uiSchema:UISchemaElement | undefined;
}