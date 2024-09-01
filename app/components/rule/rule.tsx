import React, {PropsWithChildren} from 'react';
import styles from '@/app/components/rule/rule.module.css';
import clsx from "clsx";

type RuleProps = {
    invalid: boolean;
    valid: boolean;
}

export const Rule = (props: PropsWithChildren<RuleProps>) => {
    const { invalid, valid, children } = props;

    return (
        <div className={clsx(styles.rule_message, {
            [styles.invalid_message]: invalid,
            [styles.valid_message]: valid,
        })}>
            {children}
        </div>
    );
};
