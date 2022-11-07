const myPromise = function (callback) {
    let value = null
    const successCb = []
    const failureCb = []

    const onSuccess = () => {
        successCb.forEach(cb => cb())
    }

    const onFailure = () => {
        failureCb.forEach(cb => cb())
    }

    try {
        callback(onSuccess, onFailure)
    } catch (e) {
        onFailure(e)
    }

    this.then = (resolve, reject) => {
        successCb.push(() => {
            value = resolve(value)
        })
        failureCb.push(() => {
            value = reject(value)
        })
        return this
    }
}

export default myPromise
