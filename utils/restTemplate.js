const axios = require("axios")

const makeNetworkRequest = (url, method, body, headers) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await axios({
                url: url,
                method: method,
                data: body,
                headers: headers
            })
            resolve(data)
        }
        catch (err) {
            reject(err)
        }
    })
}

module.exports = { makeNetworkRequest }