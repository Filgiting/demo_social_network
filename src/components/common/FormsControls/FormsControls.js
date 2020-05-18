import React from 'react';
import styles from './FormsControls.module.css';

export const Element = Element => ({input, meta: {touched, error}, ...props}) => {

    const hasError = touched && error;

    return (

        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <Element {...input} {...props} />
            </div>
            {hasError && <span>{error}</span> }
        </div>
    );
};

