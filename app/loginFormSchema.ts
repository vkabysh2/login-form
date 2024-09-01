import * as yup from "yup";
import {digitRegex, EMAIL_REGEX, PASSWORD_REGEX, uppercaseRegex} from "@/app/constants";

export const loginFormSchema = yup
    .object({
        email: yup.string().label('Email')
            .email()
            .matches(EMAIL_REGEX, 'Invalid email format')
            .required('Email is required field'),
        password: yup.string().label('Password')
            .min(8)
            .max(64)
            .matches(PASSWORD_REGEX, 'Invalid password format')
            .required()
            .test(function (password) {
                if (password) {
                    if (8 < password?.length && password?.length < 64 && uppercaseRegex.test(password) && digitRegex.test(password)) {
                        return true;
                    }
                }

                return this.createError({ message: 'error in password '});
            }),
    })
    .required();
