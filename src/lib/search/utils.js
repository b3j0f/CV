export const filter = (input, elts, fields = []) => {
    const regexp = typeof input === 'string' ? new RegExp(input) : input

    return elts.map(elt => match())
}

export const match = (input, elt, fields = []) => {
    const regexp = typeof input === 'string' ? new RegExp(input) : input

    const _fields = fields || Object.keys(elt)

    _fields.forEach(
        field => {
            const prop = elt
            if (typeof prop === 'string' && prop.match(regexp)) {
                return true
            }
        }
    )

    return false
}
