// Better response v2 by Kars Hamstra
exports.betterresponse = function (options) {
    // Parse the 'text input' - if nothing is used, set to 'null'
    let data = this.parseOptional(options.data, '*', null);
    // Parse the 'status input' - if not a valid number, set to 200
    let status = this.parseOptional(options.status, 'number', 200);

    let headers = this.parseOptional(options.headers, 'object', null);

    //If headers are not set at all, send the data as json
    if (headers === null) {
        this.res.status(status).json(data);
    }
    else { // If headers are set, then set the headers in the response
        this.res.set(options.headers);
        this.res.status(status).send(data);
    }

};
