import * as yup from "yup";
import {EMAIL_REGEX, PASSWORD_REGEX} from "@/app/constants";
import {Inputs} from "@/app/types";

export const loginFormSchema = yup
    .object<Inputs>({
        email: yup.string().label('Email')
            .email()
            .matches(EMAIL_REGEX, 'Invalid email format')
            .required('Email is required field'),
        password: yup.string().label('Password')
            .min(8)
            .max(64)
            .matches(PASSWORD_REGEX, 'Invalid password format')
            .required(),
    })
    .required();
