import React from 'react';
import {Rule} from "@/app/components";
import {useFormContext} from "react-hook-form";
import {Inputs} from "@/app/types";
import {digitRegex, PASSWORD_FIELD, uppercaseRegex} from "@/app/constants";

export const Rules = () => {
    const { watch } = useFormContext<Inputs>();
    const password = watch(PASSWORD_FIELD);
    const passwordPopulated = Boolean(password?.length);

    const inRange = password?.length > 8;
    const hasDigit = digitRegex.test(password);
    const hasUppercase = uppercaseRegex.test(password);

    return (
        <div className="rules">
            <Rule
                invalid={passwordPopulated}
                valid={inRange}
            >
                8 characters or more (no spaces)
            </Rule>
            <Rule
                invalid={passwordPopulated}
                valid={hasUppercase}
            >
                Uppercase and lowercase letters
            </Rule>
            <Rule
                invalid={passwordPopulated}
                valid={hasDigit}
            >
                At least one digit
            </Rule>
        </div>
    );
};
