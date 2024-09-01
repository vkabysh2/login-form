import React from 'react';

type IconProps = {
    className: string,
    onClick: () => void,
}

export const ShowPasswordIcon = (props: IconProps) => {
    const { className, onClick } = props;

    return (
        <svg onClick={onClick} className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.26482 9.6C6.84587 7.40529 9.27533 6 11.9998 6C15.1659 6 17.9336 7.89787 19.4344 10.727C19.8574 11.5244 19.8668 12.4792 19.4378 13.2733C18.3213 15.3396 15.9143 18 11.9998 18C8.85386 18 6.10124 16.1263 4.59401 13.327C4.14841 12.4994 4.14833 11.5007 4.59391 10.6732C4.79587 10.2981 5.02019 9.93958 5.26482 9.6ZM11.9995 16C14.2087 16 15.9995 14.2091 15.9995 12C15.9995 9.79086 14.2087 8 11.9995 8C9.79037 8 7.99951 9.79086 7.99951 12C7.99951 14.2091 9.79037 16 11.9995 16Z" fill="currentColor"/>
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
    );
};
