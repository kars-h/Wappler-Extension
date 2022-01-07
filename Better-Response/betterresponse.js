// Better response v1 by Kars Hamstra
exports.betterresponse = function (options) {
    // parse an option, like above a default value (null) will be used if it is not set, it doesn't check the type
    let data = this.parseOptional(options.data, '*', null);
    // parse an option, a default value (200) will be used if it is not a valid number
    let status = this.parseOptional(options.status, 'number', 200);

    if (options.headers === undefined) {
        //if undefined, don't set the variable - just send the status and data
        this.res.status(status).json(data);
    }
    else {

        let contentType = options.headers['Content-Type'];

        // if contenttype is set
        if (contentType != 'application/json') {
            this.res.set(options.headers);
            this.res.status(status).send(data);
        } else {
            // content type is set to json

            this.res.set(options.headers);
            this.res.status(status).json(data);
        }
    }




};