var dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
dropbox.addEventListener('dragleave', dragLeave, false);

function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
}
function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
    $('#dropbox').css('box-shadow', '0 0 5px 5px #2aabd2').css('opacity', 0.8);
}
function dragLeave() {
    $('#dropbox').css('box-shadow', '').css('opacity', 1);
}
function drop(e) {
    e.stopPropagation();
    e.preventDefault();
    $('#dropbox').css('box-shadow', '').css('opacity', 1)
    var dt = e.dataTransfer;
    var files = dt.files;

    handleFiles(files);
}
function handleFiles(files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var imageType = /^image\//;
        if (!imageType.test(file.type)) {
            continue;
        }
        var img = document.createElement("img");
        img.src = window.URL.createObjectURL(file);
        var heig = $("#dropbox").outerHeight();
        var wid = $("#dropbox").outerWidth();
        var $cont = $('.custImages');
        var $box =
        '<div class="imageRect" data-id=' + img.src +'id="image" >'+
        '<div class="refTabs">'+
        '<a href="#" class="refTab addToCanv"   data-id="'+ img.src +'" title="Добавить на холст"  ><img class="refTabIco" src="images/addTo.svg"> </a>'+
        '<a href="#" class="refTab setBack"   data-id="'+ img.src +'" title="Сделать фоном"  ><img class="refTabIco" src="images/background.svg"> </a>'+
        '<a href="#" class="refTab preview"  data-id="'+ img.src +'"  title="Предпросмотр" > <img class="refTabIco" src="images/eye.svg"></a>'+
        '<a href="#" class="refTab remove"  data-id="'+ img.src +'"  title="Удалить"> <img class="refTabIco" src="images/rubbish-bin-delete-button.svg"></a>'+
        '</div>'+
        '<img style="border-radius: 5px;" ' +'src=' + img.src+ ' >'+

        '</div>'
            $cont.prepend($box);
        }

}

