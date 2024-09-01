import clsx from 'clsx';
import styles from '@/app/components/input/input.module.css';
import { ReactNode } from "react";
import {useController} from "react-hook-form";
import {Control} from "react-hook-form/dist/types/form";
import {Inputs} from "@/app/types";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    control: Control<Inputs>;
    endIcon?: ReactNode;
    success: boolean;
    hasErrors: boolean;
    errorMessages?: ReactNode;
}

export function Input(props: InputProps) {
    const {
        name,
        type,
        placeholder,
        onChange,
        control: { control },
        success,
        hasErrors,
        endIcon,
        errorMessages,
    } = props;

    const { field } = useController<Inputs>({
        name,
        control,
    } as any);

    return (
        <div>
            <div className={clsx(styles.input,
                {
                    [styles.input_has_errors]: hasErrors || errorMessages,
                    [styles.input_success]: success,
                    [styles.input_width_error]: errorMessages,
                },
            )}>
                <input
                    onChange={onChange || field.onChange}
                    onBlur={field.onBlur}
                    value={field.value}
                    name={field.name}
                    type={type}
                    ref={field.ref}
                    placeholder={placeholder}
                />
                {endIcon && (
                    <div className={styles.end_icon}>
                        {endIcon}
                    </div>
                )}
            </div>
            {errorMessages && (
                <div className={styles.error_messages}>
                    {errorMessages}
                </div>
            )}
        </div>
    );
}
