const { generateRefSerialize } = require('../../utils/hash')

/**
 * Crear referencia serializada
 * @param {*} flowJson
 * @returns
 */
const toSerialize = (flowJson) => {
    if (!Array.isArray(flowJson)) throw new Error('Esto debe ser un ARRAY')

    const jsonToSerialize = flowJson.map((row, index) => ({
        ...row,
        refSerialize: `${generateRefSerialize({
            index,
            answer: row.answer,
        })}`,
    }))

    return jsonToSerialize
}

module.exports = { toSerialize }