
export const requiredField = value => {
    if (value) return undefined;

    return 'Field is error';
};

export const maxLengthCreator = (maxNumber) => value => {
    if (value.length > maxNumber) return `Max length is ${maxNumber} symbols`;

    return undefined;
};