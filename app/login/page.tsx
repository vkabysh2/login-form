'use client';

import { MouseEvent } from "react";
import { yupResolver } from "@hookform/resolvers/yup"
import { Button } from "@/app/components";
import {
    useForm,
    FormProvider,
} from "react-hook-form";
import Image from 'next/image';
import { loginFormSchema } from "@/app/loginFormSchema";
import { PasswordInput } from "@/app/ui/password-input/password-input";
import { EmailInput } from "@/app/ui/email-input/email-input";
import { Rules } from "@/app/ui/rules/rules";

export default function LoginForm() {
    const { ...methods } = useForm({ resolver: yupResolver(loginFormSchema) });
    const { touchedFields } = methods.formState;
    const keys = Object.keys(touchedFields);
    const disabled = keys.length === 0;

    const onSignUpClick = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event);
    }

    const onSubmit = (data: any) => console.log(data);

    return (
        <>
            <main className="main">
                <FormProvider {...methods}>
                    <form className="main_form" onSubmit={methods.handleSubmit(onSubmit)}>
                        <h1 className="sing_up">
                            Sign up
                        </h1>
                        <div className="">
                            <EmailInput />
                            <PasswordInput />
                        </div>
                        <Rules />
                        <div className="button_wrapper">
                            <Button
                                onClick={onSignUpClick}
                                type="submit"
                                disabled={disabled}
                            >
                                Sign up
                            </Button>
                        </div>
                    </form>
                </FormProvider>
            </main>
        </>
    );
}
