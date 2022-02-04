export const validate = (values: any) => {
    const errors: any = {}// otherwise non-empty object will be returned

    if (!values.password) {
        errors.password = "PASSWORD Required"
    }
    if (!values.email) {
        errors.email = "EMAIL REQUIRED"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "INVALID EMAIL"
    }
    return errors
}

