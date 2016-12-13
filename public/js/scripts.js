var canvas = new fabric.Canvas('canvas');
var prodCanvProp = 0.63036233725889;
var dpiWarn = 0.94594594594595;
var dpiErr = 1.2612612612613;
/*$(document).ready(function(){
    $( "#slider" ).slider({
        value : 0,//Значение, которое будет выставлено слайдеру при загрузке
        min : -180,//Минимально возможное значение на ползунке
        max : 180,//Максимально возможное значение на ползунке
        step : 45,//Шаг, с которым будет двигаться ползунок
        create: function( event, ui ) {
            val = $( "#slider" ).slider("value");
            $( "#contentSlider" ).html( val );
        },
        slide: function( event, ui ) {
            $( "#contentSlider" ).html( ui.value );//При изменении значения ползунка заполняем элемент с id contentSlider
            $('#rotate').val(ui.value);
            canvas.getActiveObject().set('angle', (ui.value));
            canvas.renderAll();
        }
    });
});
$(document).ready(function(){
    $( "#slider1" ).slider({
        value : 100,
        min : 0,
        max : 100,
        step : 1,
        create: function( event, ui ) {
            val = $( "#slider1" ).slider("value");
            $( "#contentSlider1" ).html( val );
        },
        slide: function( event, ui ) {
            $( "#contentSlider1" ).html( ui.value );
            canvas.getActiveObject().setOpacity((ui.value)/100);
            canvas.renderAll();
        }
    });
});*/
$('.btnDeleteObject').click(function(){
    if(canvas.getActiveObject().type == 'text' || canvas.getActiveObject().type == 'i-text'){
        $('#textCont').trigger('click');
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
$('.btnAddText').click(function () {
    var fabicText = new fabric.IText('', {
        left: 100,
        top: 100,
        id: canvas.getObjects().length,
        editable: false,
        hasRotatingPoint: false,
        hasControls: false,
        centeredRotation: true
    });
    fabicText.setControlVisible('mr', false),
    fabicText.setControlVisible('ml', false),
    fabicText.setControlVisible('mb', false),
    fabicText.setControlVisible('mt', false)
    canvas.add(fabicText);
    parseText();
});
function parseText() {
    var $cont = $('#textCont');
    $cont.empty();
    canvas.forEachObject(function(obj){
        if(obj.type == 'text' || obj.type == 'i-text'){
            var fieldName = '';
            if(obj.fieldName) fieldName = obj.fieldName;
            var $fld = '<div class="form-group" data-id="' + obj.id + '">' +
                '<div class="input-group input-group-sm">' +
                '<textarea type="text" rows="1" class="form-control textField" data-name="' + fieldName + '">' + obj.text + '</textarea>' +
                '<div class="input-group-addon">' +
                '<a href="#1" class="removeText">' +
                '<i class="fa fa-trash fa-lg"></i>' +
                '</a>' +
                '</div>' +
                '</div>' +
                '</div>';
            $cont.append($fld);
        }
    });
    //$('.textField').autosize();
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
}).on('focusin', '.textField', function () {
    var id = $(this).parents('.form-group').data('id');
    canvas.forEachObject(function(obj){
        if(obj.id == id) canvas.setActiveObject(obj);
    });
    if(canvas.getActiveObject().type == 'text' || canvas.getActiveObject().type == 'i-text') showTextAttr();
}).on('keyup', '.textField', function () {
    canvas.getActiveObject().set('text', $(this).val());
    canvas.renderAll();
});
function hideAttr(){
    $('.divLayerAttributes').addClass('hidden');
    $('.divDeleteObject').addClass('hidden');
    $('.divTextAttributes').addClass('hidden');
    $('.divCommonAttributes').addClass('hidden');
}
canvas.on('mouse:down', function(options) {
    if(options.target){
        if(options.target.type == 'text' || options.target.type == 'i-text') showTextAttr();
        else if(options.target.type == 'image') showImgAttr();
        else if(options.target.type == 'group') showGroupAttr();
        else if(options.target.type == 'rect' || options.target.type == 'circle' || options.target.type == 'triangle') showShapeAttr();
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
    $('.divCommonAttributes').removeClass('hidden');
    $('.divLayerAttributes').removeClass('hidden');
    $('.attrFontName').val(canvas.getActiveObject().fontFamily);
    $('.attrFontSize').val(canvas.getActiveObject().fontSize);
    if(canvas.getActiveObject().fontWeight == 'bold') $('#attrTextBold').addClass('active');
    else $('#attrTextBold').removeClass('active');
    if(canvas.getActiveObject().fontStyle == 'italic') $('#attrTextItalic').addClass('active');
    else $('#attrTextItalic').removeClass('active');
    if(canvas.getActiveObject().textDecoration == 'underline') $('#attrTextUnderline').addClass('active');
    else $('#attrTextUnderline').removeClass('active');
    $('.textAlign').removeClass('active');
    $('.textAlign[data-align="' + canvas.getActiveObject().textAlign + '"]').addClass('active');
    $('.selectedColorText').css('color', canvas.getActiveObject().fill);
    $('.selectedColorTextBackground').css('color', canvas.getActiveObject().textBackgroundColor);
    if(canvas.getActiveObject().stroke==null)
        $('.selectedColorStroke').css('color', 'rgb(0,0,0)');
    $('.selectedColorStroke').css('color', canvas.getActiveObject().stroke);
    $('.attrLineHeight').val(canvas.getActiveObject().lineHeight);
    $('.attrСharSpacing').val(canvas.getActiveObject().charSpacing);
    $('.strokeWidth').val(canvas.getActiveObject().strokeWidth);
    $('#slider').slider('option', 'value', canvas.getActiveObject().angle);
    $('#rotate').val(canvas.getActiveObject().angle);
    $('#slider1').slider('option', 'value', (canvas.getActiveObject().opacity)*100);
    $("#contentSlider1").text((canvas.getActiveObject().opacity)*100);
    $('.divTextAttributes').removeClass('hidden');
}
function showImgAttr() {
    $('.panel-collapse').removeClass('in').addClass('collapse');
    $('#collapseTwo.panel-collapse').addClass('in').removeClass('collapse').css('height', 'auto');
    hideAttr();
    $('.divCommonAttributes').removeClass('hidden');
    $('.divLayerAttributes').removeClass('hidden');
    $('.divDeleteObject').removeClass('hidden');
}
function showShapeAttr() {
    $('.divCommonAttributes').removeClass('hidden');
    $('.divLayerAttributes').removeClass('hidden');
    $('.divDeleteObject').removeClass('hidden');
}


$('.btnLayerAttributes').click(function(){
    var name = $(this).attr('data-name');
    if(name == 'layerUp') {canvas.getActiveObject().bringToFront();  canvas.renderAll()}
    else if(name == 'layerUpOne') {canvas.getActiveObject().bringForward();  canvas.renderAll()}
    else if(name == 'layerDownOne') {canvas.getActiveObject().sendBackwards();  canvas.renderAll()}
    else if(name == 'layerDown') {canvas.getActiveObject().sendToBack();  canvas.renderAll()}
});
$('.selectColorText').click(function(){
    var clr = $(this).attr('data-color');
    $('.selectedColorText').css('color', clr);
    canvas.getActiveObject().set('fill', clr);
    canvas.renderAll();
});
$('.selectColorStroke').click(function(){
    var clr = $(this).attr('data-color');
    $('.selectedColorStroke').css('color', clr);
    canvas.getActiveObject().set('stroke', clr);
    canvas.renderAll();
});
$('.selectColorTextBackground').click(function(){
    var clr = $(this).attr('data-color');
    $('.selectedColorTextBackground').css('color', clr);
    canvas.getActiveObject().set('textBackgroundColor', clr);
    canvas.renderAll();
});
$('.strokeWidth').change(function(){
    var wid = $(this).val();
    canvas.getActiveObject().set('strokeWidth', wid);
    canvas.renderAll();
})
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
$('.attrTextUnderline').click(function(){
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
$('.attrFontName').change(function(){
    canvas.getActiveObject().set('fontFamily', $(this).val());
    canvas.renderAll();
});
$('.attrFontSize').change(function(){
   canvas.getActiveObject().set('fontSize', $('.attrFontSize').val());
    canvas.renderAll();
});
$('.attrLineHeight').change(function(){
    canvas.getActiveObject().set('lineHeight', $('.attrLineHeight').val());
    canvas.renderAll();
});
$('.attrСharSpacing').change(function(){
    canvas.getActiveObject().set('charSpacing', $('.attrСharSpacing').val());
    canvas.renderAll();
});
$('#rotate').change(function(){
    canvas.getActiveObject().set('angle', $(this).val());
    $('#slider').slider('option', 'value', canvas.getActiveObject().angle);
    canvas.renderAll();
});
$('.shape').click(function () {
    var shape = $(this).attr('data-id');
    if (shape == 'square'){
    var rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'black',
        width: 50,
        height: 50
    });
    canvas.add(rect);}
    if (shape == 'circle'){
        var circle = new fabric.Circle({
            left: 100,
            top: 100,
            fill: 'black',
            radius: 30
        });
        canvas.add(circle);}
    if (shape == 'triangle'){
        var triangle = new fabric.Triangle({
            left: 100,
            top: 100,
            fill: 'black',
            width: 75
        });
        canvas.add(triangle);}
    canvas.renderAll();
})

$('.btnUploadImage, .btnAddImage').click(function(){
    handleFiles($('.file-input').trigger('click'));
});

$('body').on('hover', '.divImage', function(){
    var id = $(this).attr('data-id');
    $('.imgButtons').addClass('hidden');
    $('.imgButtons[data-id="' + id + '"]').removeClass('hidden');
}).on('mouseout', 'divImage', function(){
    var id = $(this).attr('data-id');
    $('.imgButtons[data-id="' + id + '"]').addClass('hidden');
}).on('click', '.addImageCanvas', function(){
    var img = $(this).attr('data-id');
                var image = fabric.Image.fromURL(img , function(img) {
                    var scale = prodCanvProp;
                    if(img.width * scale > canvas.width) scale = canvas.width / img.width;
                    if(img.height * scale > canvas.height) scale = canvas.height / img.height;
                    img.scaleX = scale;
                    img.scaleY = scale;
                    img.left = (canvas.width - (img.width * scale)) / 2;
                    img.top = (canvas.height - (img.height * scale)) / 2;
                    canvas.add(img);
                });
                canvas.renderAll();
}).on('click', '.previewImage', function(){
    var img = $(this).attr('data-id');
    var path = $('.customerImage').attr('data-path');
    var data = {
        action : 'customerImagePreview',
        img : img,
        path : path
    };
    load_modal(data, 'big');
}).on('click', '.deleteImage', function(){
    var img = $(this).attr('data-id');
    $("[data-id=" + '"'+img +'"' + "]").remove();


});
function loadCustomerImages(){
    var data = {
        action : 'loadCustomerImages'
    };
    $.ajax({
        dataType: "json",
        data: data,
        success: function (data) {
            if(data){
                $.each(data, function (key, val) {
                    addCustomerImage(val);
                });
            }
        }
    });
}
function addCustomerImage(img){
    var serv = '//localhost:63342';
    var $cont = $('.custImages');
    var $box = '<div class="col-md-12 divImage  " data-id="' + img['img'] + '">' +
        '<div class="text-center imgButtons" data-id="' + img['img'] + '" style="margin: 79px 1px 1px 1px; padding: 3px; position: absolute; width: 105px; background: rgba(200,200,200,0.9);">' +
        '<a href="#1" class="addImageCanvas show_tooltip" data-id="' + img['img'] + '" title="Поместить на холст"><i class="fa fa-lg fa-toggle-left"></i></a>&nbsp;&nbsp;' +
        '<a href="#1" class="previewImage show_tooltip" data-id="' + img['img'] + '" title="Увеличенный просмотр"><i class="fa fa-lg fa-search"></i></a>&nbsp;&nbsp;' +
        '<a href="#1" class="deleteImage show_tooltip" data-id="' + img['img'] + '" title="Удалить картинку"><i class="fa fa-lg fa-trash"></i></a>' +
        '</div>' +
        '<a class="thumbnail" data-id="' + img['img'] + '">' +
        '<img class="img-responsive customerImage" src="' + serv + img['path'] + img['img'] + '_small.png" data-path="' + img['path'] + '" data-id="' + img['img'] + '">' +
        '</a>' +
        '</div>';
    $cont.prepend($box);
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

        var $cont = $('.custImages');

        var $box = '<div class="col-md-12 divImage" data-id="' + img.src + '">' +
            '<div class="text-center imgButtons hidden" data-id="' + img.src + '" style="margin: 79px 1px 1px 1px; padding: 3px; position: absolute; width: 105px; background: rgba(200,200,200,0.9);">' +
            '<a href="#1" class="addImageCanvas show_tooltip" data-id="' + img.src + '" title="Поместить на холст"><i class="fa fa-lg fa-toggle-left"></i></a>&nbsp;&nbsp;' +
            '<a href="#1" class="previewImage show_tooltip" data-id="' + img.src + '" title="Увеличенный просмотр"><i class="fa fa-lg fa-search"></i></a>&nbsp;&nbsp;' +
            '<a href="#1" class="deleteImage show_tooltip" data-id="' + img.src + '" title="Удалить картинку"><i class="fa fa-lg fa-trash"></i></a>' +
            '</div>' +
            '<a class="thumbnail" data-id="' + img.src + '">' +
            '<img class="img-responsive customerImage" src= "' + img.src + '" data-id="' + img.src + '">' +
            '</a>' +
            '</div>';
        $cont.prepend($box);
    }

}

canvas.setBackgroundColor("white");
canvas.renderAll();