Template.cardList.helpers({
    pictures: function() {
      return Pictures.find();    //return all data stored in collection "Pictures"
    }
  });

  document.getElementById("file_input_file").onpropertychange = function () {
    document.getElementById("fileuploadurl").value = this.value.replace(/C:\\fakepath\\/i, '');
};