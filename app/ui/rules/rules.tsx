import React from 'react';
import {Rule} from "@/app/components";
import {useFormContext} from "react-hook-form";

export const Rules = () => {
    const { watch } = useFormContext();
    const password = watch('password');
    const passwordPopulated = Boolean(password?.length);

    const inRange = password?.length > 8;
    const hasDigit = /(?=.*\d)/.test(password);
    const hasUppercase = /(?=.*[A-Z])/.test(password);

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
