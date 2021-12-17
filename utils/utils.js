const validImageExtensions = [ 'jpg', 'jpeg', 'png', 'JPG', 'JPEG', 'PNG'];

const fileToBase64 = ( mimetype, buffer ) => {
    const base64Buffer = Buffer.from(buffer).toString('base64');
    return 'data:' + mimetype + ';base64,' + base64Buffer;
}

const errorFactory = ( msg, statusCode ) => {
    const error = new Error(msg);
    error.code = statusCode;
    return error;
}

const imageExtensionValidator = fileName => {

    let extension = fileName.split('.');
    extension = extension[extension.length -1];

    if(validImageExtensions.includes(extension)){
        return true;
    }

}

module.exports = {
    fileToBase64,
    errorFactory,
    imageExtensionValidator
};
