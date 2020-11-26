export const validateNumber = input => {
    const re = /^[1-9]\d*$/;
    return re.test(input);
};