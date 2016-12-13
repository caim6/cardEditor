var canvas = new fabric.Canvas('canvas');
var dpiWarn = 0.94594594594595;
var dpiErr = 1.2612612612613;

function changeImg(){
    var imgElement = document.querySelector("img");
    var imgInstance = new fabric.Image(imgElement, {
        width: canvas.getWidth(), height: canvas.getHeight()
        });
    canvas.setBackgroundImage(imgInstance,  canvas.renderAll.bind(canvas));
}
function previewFile() {
    var preview = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        preview.src = reader.result;
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}
$('.btnAddText').click(function () {
    var fabicText = new fabric.IText(prompt("Text:", ""), {
        left: 30,
        top: 30,
        id: canvas.getObjects().length,
    });
    canvas.add(fabicText);
    parseText();
});
$('.btnLayerAttributes').click(function(){
    var name = $(this).attr('data-name');
    if(name == 'layerUp') canvas.getActiveObject().bringToFront();
    else if(name == 'layerUpOne') canvas.getActiveObject().bringForward();
    else if(name == 'layerDownOne') canvas.getActiveObject().sendBackwards();
    else if(name == 'layerDown') canvas.getActiveObject().sendToBack();
});
function parseText() {
    var $cont = $('#textCont');
    $cont.empty();
    canvas.forEachObject(function (obj) {
        if (obj.type == 'text' || obj.type == 'i-text') {
            var fieldName = '';
            if (obj.fieldName) fieldName = obj.fieldName;
            var $fld = '<div class="form-group" data-id="' + obj.id + '">' +
                '<div class="input-group input-group-sm">' +
                '<textarea type="text" rows="1" class="form-control textField" data-name="' + fieldName + '">' + obj.text + '</textarea>' +
                '<div class="input-group-addon">' +
                '<a href="#1" class="removeText"> del' +
                '<i class="fa fa-trash fa-lg"></i>' +
                '</a>' +
                '</div>' +
                '</div>' +
                '</div>';
            $cont.append($fld);
        }
    });
    $('.textField').autosize();
}
$('#textCont').on('click', '.removeText', function () {
    var id = $(this).parents('.form-group').data('id');
    var $field = $(this).parents('.form-group').find('.textField');
    canvas.forEachObject(function(obj){
        if(obj.id == id){
            obj.set('text', '');
            canvas.renderAll();
        }
    });
    $field.val('');
    hideAttr();
});
canvas.on('mouse:down', function(options) {
    if(options.target){
        if(options.target.type == 'text' || options.target.type == 'i-text') showTextAttr();
        else if(options.target.type == 'image') showImgAttr();
        else if(options.target.type == 'group') showGroupAttr();
        else hideAttr();
        if(options.target.type == 'image'){
            if((options.target.scaleX > dpiWarn || options.target.scaleY > dpiWarn) && (options.target.scaleX <= dpiErr && options.target.scaleY <= dpiErr)){
                $('.errorDpi').addClass('hidden');
                $('.warningDpi').removeClass('hidden');
            }else if(options.target.scaleX > dpiErr || options.target.scaleY > dpiErr){
                $('.errorDpi').removeClass('hidden');
                $('.warningDpi').addClass('hidden');
            }else{
                $('.errorDpi').addClass('hidden');
                $('.warningDpi').addClass('hidden');
            }
        }
    }else{
        hideAttr();
    }
}).on('object:scaling', function(options){
    if(options.target){
        if(options.target.type == 'image'){
            if((options.target.scaleX > dpiWarn || options.target.scaleY > dpiWarn) && (options.target.scaleX <= dpiErr && options.target.scaleY <= dpiErr)){
                $('.errorDpi').addClass('hidden');
                $('.warningDpi').removeClass('hidden');
            }else if(options.target.scaleX > dpiErr || options.target.scaleY > dpiErr){
                $('.errorDpi').removeClass('hidden');
                $('.warningDpi').addClass('hidden');
            }else{
                $('.errorDpi').addClass('hidden');
                $('.warningDpi').addClass('hidden');
            }
        }
    }
});
function showTextAttr(){
    $('.panel-collapse').removeClass('in').addClass('collapse');
    $('#collapseOne.panel-collapse').addClass('in').removeClass('collapse').css('height', 'auto');
    hideAttr();
    $('.divLayerAttributes').removeClass('hidden');
    //$('.divDeleteObject').removeClass('hidden');
    $('.divTextAttributes').removeClass('hidden');
    $('.attrFontName [value="' + canvas.getActiveObject().fontFamily + '"]').attr("selected", "selected");
    $('.attrFontSize [value="' + canvas.getActiveObject().fontSize + '"]').attr("selected", "selected");
    if(canvas.getActiveObject().fontWeight == 'bold') $('#attrTextBold').addClass('active');
    else $('#attrTextBold').removeClass('active');
    if(canvas.getActiveObject().fontStyle == 'italic') $('#attrTextItalic').addClass('active');
    else $('#attrTextItalic').removeClass('active');
    if(canvas.getActiveObject().textDecoration == 'underline') $('#attrTextUnderline').addClass('active');
    else $('#attrTextUnderline').removeClass('active');
    $('.textAlign').removeClass('active');
    $('.textAlign[data-align="' + canvas.getActiveObject().textAlign + '"]').addClass('active');
    $('.selectedColor').css('color', canvas.getActiveObject().fill);
}
function showImgAttr(){
    $('.panel-collapse').removeClass('in').addClass('collapse');
    $('#collapseTwo.panel-collapse').addClass('in').removeClass('collapse').css('height', 'auto');
    hideAttr();
    $('.divLayerAttributes').removeClass('hidden');
    $('.divDeleteObject').removeClass('hidden');
}
function hideAttr(){
    $('.divLayerAttributes').addClass('hidden');
    $('.divDeleteObject').addClass('hidden');
    $('.divTextAttributes').addClass('hidden');
    $('.errorDpi').addClass('hidden');
    $('.warningDpi').addClass('hidden');
}
$('.btnDeleteObject').click(function(){
    if(canvas.getActiveObject().type == 'text' || canvas.getActiveObject().type == 'i-text'){
        var id = canvas.getActiveObject().id;
        $('#textCont .form-group[data-id="' + id + '"]').remove();
    }
    if (canvas.getActiveGroup()){
        canvas.getActiveGroup().forEachObject(function(a) {
            canvas.remove(a);
        });
        canvas.discardActiveGroup();
    }else canvas.remove(canvas.getActiveObject());
    canvas.renderAll();
    hideAttr();
});
$('.attrFontName').change(function(){
    canvas.getActiveObject().set('fontFamily', $(this).val());
    canvas.renderAll();
});
$('#attrTextBold').click(function(){
    if(canvas.getActiveObject().fontWeight == 'normal'){
        canvas.getActiveObject().set('fontWeight', 'bold');
        $(this).addClass('active');
    }else{
        canvas.getActiveObject().set('fontWeight', 'normal');
        $(this).removeClass('active');
    }
    canvas.renderAll();
});
$('#attrTextItalic').click(function(){
    if(canvas.getActiveObject().fontStyle == ''){
        canvas.getActiveObject().set('fontStyle', 'italic');
        $(this).addClass('active');
    }else{
        canvas.getActiveObject().set('fontStyle', '');
        $(this).removeClass('active');
    }
    canvas.renderAll();
});
$('#attrTextUnderline').click(function(){
    if(canvas.getActiveObject().textDecoration == ''){
        canvas.getActiveObject().set('textDecoration', 'underline');
        $(this).addClass('active');
    }else{
        canvas.getActiveObject().set('textDecoration', '');
        $(this).removeClass('active');
    }
    canvas.renderAll();
});
$('.textAlign').click(function(){
    var align = $(this).attr('data-align');
    canvas.getActiveObject().set('textAlign', align);
    $('.textAlign').removeClass('active');
    $('.textAlign[data-align="' + align + '"]').addClass('active');
    canvas.renderAll();
});
function showGroupAttr(){hideAttr();}

function changeBackgroundColor(){
    canvas.setBackgroundColor(document.getElementById("cardColor").value, canvas.renderAll.bind(canvas));
}

function eraseBackground() {
    canvas.setBackgroundColor("white", canvas.renderAll.bind(canvas));
    var imgElement = "images/defaultBack.png";
    var imgInstance = new fabric.Image(imgElement, {
        width: canvas.getWidth(), height: canvas.getHeight()
    });
    canvas.setBackgroundImage(imgInstance,  canvas.renderAll.bind(canvas));
    document.getElementById("cardColor").setAttribute("value", "#FFFFFF");
}
function addImage() {
    var imgElement = document.querySelector("img");
    var imgInstance = new fabric.Image(imgElement, {
        width:100,
        height: 100,
        left: 10,
        top: 10
    });

    canvas.add(imgInstance);
}

function setCanvasSize(){
   var form = document.getElementById("size");
    var value = form[0].checked;
    var cnvs = document.getElementById("canvas");
    if(value==true) {
        canvas.setHeight(250);
        canvas.setWidth(450);
        canvas.backgroundImage.setWidth(450);
        canvas.backgroundImage.setHeight(250);
        canvas.renderAll();
    }
    else {
        canvas.setHeight(275);
        canvas.setWidth(425);
        canvas.backgroundImage.setWidth(425);
        canvas.backgroundImage.setHeight(275);
        canvas.renderAll();
    }
}
/*function setOrientation(){
    var form = document.getElementById("orientation");
    var value = form[0].checked;
    var cnvs = document.getElementById("canvas");
    if(value==true){}
    else{}
}*/
function saveCanvas(){
   alert(canvas.toSVG());
}
