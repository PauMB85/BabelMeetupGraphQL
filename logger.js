module.exports = (request, response, next) => {
    const start = +new Date();
    const diffStart = +new Date() - start;
    const stream = process.stdout;
    const url = request.url;
    const method = request.method;

    response.on('finish', () => {
        const duration = (+new Date()) - start - diffStart;
        const message = '> ' + method + ' ' + url + '  took ' + duration + ' ms\n';
        stream.write(message);
    });

    next();
}
