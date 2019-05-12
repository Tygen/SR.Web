Pictures = new FS.Collection('Pictures', {
    stores: [new FS.Store.GridFS('Pictures')],
    filter: {
        allow: {
            contentTypes: ['image/*']
        },
        onInvalid: function (message) {
            FlashMessage.sendError(message);
        }
    }
});

Pictures.allow({
    insert: function () { return true; },
    download: function () { return true; }
});

Images = new Mongo.Collection('images');