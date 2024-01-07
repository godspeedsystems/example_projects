module.exports = (ctx, args) => {
    return {
        success: false,
        code: 502,
        data: {
            message: 'test failiyure'
        }
    }
}