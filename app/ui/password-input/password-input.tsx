import React, {useState} from 'react';
import {Input} from "@/app/components";
import { useFormContext } from "react-hook-form";
import styles from '@/app/components/input/input.module.css';
import {HidePasswordIcon, ShowPasswordIcon} from "@/app/icons";
import {PASSWORD_FIELD, PASSWORD_REGEX} from "@/app/constants";
import clsx from "clsx";

export const PasswordInput = () => {
    const { control, setValue, watch, formState: { errors } } = useFormContext();
    const password = watch(PASSWORD_FIELD);

    const [passwordToggle, setPasswordToggle] = useState(false);

    const inRange = 8 < password?.length && password?.length < 64;
    const hasDigit = /(?=.*\d)/.test(password);
    const hasUppercase = /(?=.*[A-Z])/.test(password);

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

    const onChange = (event) => {
        const value = event.target.value;
        const valueWithoutSpaces = value.replace(
            / /g,
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
