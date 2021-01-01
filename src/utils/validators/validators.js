 export const requiredField = (value) => {
    if (value) {
        return undefined
    } else {
        return 'Required field'
    }
}
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) {
        return `Max length is ${maxLength}`
    }
    else {
        return undefined
    }
}
