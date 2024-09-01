import React from 'react';
import {Input} from "@/app/components";
import {useFormContext} from "react-hook-form";
import {EMAIL_FIELD, EMAIL_REGEX} from "@/app/constants";
import {Inputs} from "@/app/types";

export const EmailInput = () => {
    const { control, watch, formState: { errors }} = useFormContext<Inputs>();
    const email = watch(EMAIL_FIELD);
    const emailMatchesPattern = EMAIL_REGEX.test(email);
    const emailHasErrors = !emailMatchesPattern;
    const errorMessages = errors?.email
        ? errors?.email?.message
        : null;

    return (
        <Input
            control={control}
            name={EMAIL_FIELD}
            placeholder="Enter your email"
            success={emailMatchesPattern}
            hasErrors={emailHasErrors && email?.length}
            errorMessages={emailHasErrors && errorMessages}
        />
    );
};
