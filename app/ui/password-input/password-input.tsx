import React, {ChangeEvent, useState} from 'react';
import {Input} from "@/app/components";
import { useFormContext } from "react-hook-form";
import styles from '@/app/components/input/input.module.css';
import {
    HidePasswordIcon,
    ShowPasswordIcon,
} from "@/app/icons";
import {
    digitRegex,
    PASSWORD_FIELD, spaceRegex,
    uppercaseRegex,
} from "@/app/constants";
import clsx from "clsx";
import {Inputs} from "@/app/types";

export const PasswordInput = () => {
    const { control, setValue, watch, formState: { errors } } = useFormContext<Inputs>();
    const password = watch(PASSWORD_FIELD);

    const [passwordToggle, setPasswordToggle] = useState(false);

    const inRange = 8 < password?.length && password?.length < 64;
    const hasDigit = digitRegex.test(password);
    const hasUppercase = uppercaseRegex.test(password);

    const passwordPopulated = Boolean(password?.length);
    const passwordHasErrors = passwordPopulated && (!inRange || !hasDigit || !hasUppercase);

    const Icon = passwordToggle ? ShowPasswordIcon : HidePasswordIcon;

    const onTogglePassword = () => {
        setPasswordToggle(!passwordToggle);
    }

    const endIcon = (
        <Icon
            className={clsx(styles.toggle_password, {
                [styles.toggle_password_error]: passwordHasErrors,
                [styles.toggle_password_success]: !passwordHasErrors && passwordPopulated,
            })}
            onClick={onTogglePassword}
        />
    );

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const valueWithoutSpaces = value.replace(
            spaceRegex,
            ""
        );

        setValue(PASSWORD_FIELD, valueWithoutSpaces);
    }

    const errorMessages = errors?.password
        ? errors?.password?.message
        : null;

    return (
        <Input
            control={control}
            name={PASSWORD_FIELD}
            placeholder="Create your password"
            type={passwordToggle ? 'text' : 'password'}
            hasErrors={passwordHasErrors}
            errorMessages={passwordHasErrors && errorMessages}
            success={!passwordHasErrors && passwordPopulated}
            endIcon={endIcon}
            onChange={onChange}
        />
    );
};
