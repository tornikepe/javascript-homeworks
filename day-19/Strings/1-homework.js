function rmHtmlTags(param) {
    if (typeof param !== 'string') {
        throw new TypeError('Param is not string')
    } else {
        console.log(param.replace(/(<([^>]+)>)/ig, ''));
    }
}

rmHtmlTags('<p><strong><em>Content</em></strong></p>') // Content
// rmHtmlTags(1) // Content