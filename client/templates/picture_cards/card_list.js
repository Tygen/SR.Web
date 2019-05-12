Template.cardList.helpers({
    pictures: function () {
        return Pictures.find();    //return all data stored in collection "Pictures"
    }
});

// script use to insert photo into GridFS
//TODO:add error notification here
Template.cardList.events({
    'click #submit_btn': function () {
        //notification bar
        var snackbarContainer = document.querySelector('#upload_success');
        var data = { message: '照片已成功上传' };

        var file = $('#file_input_file').get(0).files[0];

        if (file) {

            //convert image into base64 string
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function (){
                var base64 = reader.result;
                console.log(typeof(base64));

                Images.insert({
                    type: 'image',
                    author: 'test',
                    data: base64
                });
            }

            //insert file as base64 string
            


            fsFile = new FS.File(file);
            Pictures.insert(fsFile, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("img uploaded");
                    snackbarContainer.MaterialSnackbar.showSnackbar(data);
                }
            });
        } else {
            //when the submit button is pressed without adding any images/photos
            //the result should read 'No File Uploaded'
            //toastr.error('No File Uploaded');
            //Router.go('/add');
            var data = { message: '您未选中任何照片' };
            snackbarContainer.MaterialSnackbar.showSnackbar(data);
        }
        return false;
    }
});

