var canvas = new fabric.Canvas('canvas');
var prodCanvProp = 0.63036233725889;
var dpiWarn = 0.94594594594595;
var dpiErr = 1.2612612612613;
canvas.setBackgroundColor("white");
canvas.renderAll();
var fSide;
var sSide;
var side1 = new fabric.StaticCanvas('side');
var side2 = new fabric.StaticCanvas('side2');
var side1SVG;
var side2SVG;
var defaultCanvas = JSON.parse('{"objects":[{"type":"i-text","originX":"left","originY":"top","left":324,"top":35,"width":274.82,"height":39.55,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":0,"text":"Название фирмы","fontSize":"35","fontWeight":"bold","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":358,"top":86,"width":238.44,"height":45.2,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":1,"text":"Имя Фамилия","fontSize":40,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":477,"top":133,"width":118.6,"height":28.25,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":2,"text":"Должность","fontSize":"25","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":25,"top":251,"width":78.56,"height":33.9,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":3,"text":"Адрес","fontSize":"30","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":23,"top":289,"width":92.02,"height":28.25,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":4,"text":"Телефон","fontSize":"25","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":513,"top":254,"width":81.64,"height":33.9,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":5,"text":"E-mail","fontSize":"30","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":460,"top":292,"width":133.98,"height":28.25,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":6,"text":"web-site.com","fontSize":"25","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}}],"background":"white"}');
var first = JSON.parse('{"objects":[{"type":"i-text","originX":"left","originY":"top","left":129,"top":26,"width":299.16,"height":45.2,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"Название фирмы ","fontSize":40,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":67,"top":109,"width":168.11,"height":45.2,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"Ваше имя","fontSize":"40","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":70,"top":157,"width":118.6,"height":28.25,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"Должность","fontSize":"25","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":15,"top":299,"width":110.42,"height":33.9,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"Телефон","fontSize":"30","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":17,"top":261,"width":78.56,"height":33.9,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"Адрес","fontSize":"30","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}}],"background":"white","backgroundImage":{"type":"image","originX":"left","originY":"top","left":0,"top":0,"width":630,"height":350,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"src":"http://vizitka.zt.ua/images/fonviz/vizitka_fon_parikmaher%201.jpg","filters":[],"resizeFilters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"}}');
var second = JSON.parse('{"objects":[{"type":"i-text","originX":"left","originY":"top","left":201,"top":9,"width":337.77,"height":45.2,"fill":"rgb(255,255,255)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":0,"text":"Название компании","fontSize":40,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":12,"top":195,"width":178.83,"height":33.9,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":1,"text":"Имя Фамилия","fontSize":"30","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":12,"top":229,"width":118.6,"height":28.25,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":2,"text":"Должность","fontSize":"25","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":11,"top":275,"width":65.47,"height":28.25,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":3,"text":"Адрес","fontSize":"25","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":11,"top":309,"width":92.02,"height":28.25,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":4,"text":"Телефон","fontSize":"25","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}}],"background":"white","backgroundImage":{"type":"image","originX":"left","originY":"top","left":0,"top":0,"width":630,"height":350,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"src":"http://xprsv.ru/wp-content/uploads/2015/11/шаблон_10.jpg","filters":[],"resizeFilters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"}}');
var third = JSON.parse('{"objects":[{"type":"i-text","originX":"left","originY":"top","left":33,"top":23,"width":378.86,"height":56.5,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":0,"text":"Такси Название","fontSize":"50","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":22,"top":212,"width":147.23,"height":45.2,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":1,"text":"Телефон","fontSize":40,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":24,"top":266,"width":72.6,"height":45.2,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":2,"text":"Имя","fontSize":40,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}}],"background":"white","backgroundImage":{"type":"image","originX":"left","originY":"top","left":0,"top":0,"width":630,"height":350,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"src":"https://pp.vk.me/c638425/v638425984/fe81/nckInwbiINA.jpg","filters":[],"resizeFilters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"}}');
var fourth = JSON.parse('{"objects":[{"type":"image","originX":"left","originY":"top","left":30,"top":59.33,"width":200,"height":200,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1.2,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"src":"http://labazanov.ru/Data/Sites/1/ice/files/7f8653cefc77814d7a9ddc9f0c21956e.jpg","filters":[],"resizeFilters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"},{"type":"i-text","originX":"left","originY":"top","left":310,"top":10,"width":220.63,"height":45.2,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":1,"text":"Организация","fontSize":40,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":304,"top":80,"width":238.44,"height":45.2,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":2,"text":"Имя Фамилия","fontSize":40,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":351,"top":123,"width":142.32,"height":33.9,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":3,"text":"Должность","fontSize":"30","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":241,"top":276,"width":78.56,"height":33.9,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":4,"text":"Адрес","fontSize":"30","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":497,"top":277,"width":110.42,"height":33.9,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":5,"text":"Телефон","fontSize":"30","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}}],"background":"white"}');
var fifth = JSON.parse('{"objects":[{"type":"i-text","originX":"left","originY":"top","left":33,"top":25,"width":241.43,"height":45.2,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":0,"text":"Организация","fontSize":40,"fontWeight":"bold","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":35,"top":79,"width":101.22,"height":33.9,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":1,"text":"Услуги:","fontSize":"30","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":17,"top":214,"width":91.65,"height":39.55,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":2,"text":"Адрес","fontSize":"35","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":15,"top":262,"width":128.82,"height":39.55,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":3,"text":"Телефон","fontSize":"35","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}}],"background":"white","backgroundImage":{"type":"image","originX":"left","originY":"top","left":0,"top":0,"width":630,"height":350,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"src":"http://www.allpbspb.ru/upload/iblock/9b4/9b4a15378218980c2da33ea1e3ef1b76.jpg","filters":[],"resizeFilters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"}}');
var sixth = JSON.parse('{"objects":[{"type":"image","originX":"left","originY":"top","left":370,"top":63.52,"width":200,"height":200,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1.22,"scaleY":1.22,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"src":"http://mirtortov.com.ua/wp-content/uploads/Kapriz.jpg","filters":[],"resizeFilters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"},{"type":"i-text","originX":"left","originY":"top","left":65,"top":33,"width":241.43,"height":45.2,"fill":"rgb(153,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":1,"text":"Организация","fontSize":40,"fontWeight":"bold","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":62,"top":110,"width":101.22,"height":33.9,"fill":"rgb(153,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":2,"text":"Услуги:","fontSize":"30","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":35,"top":239,"width":91.65,"height":39.55,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":3,"text":"Адрес","fontSize":"35","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","originX":"left","originY":"top","left":33,"top":281,"width":128.82,"height":39.55,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"id":4,"text":"Телефон","fontSize":"35","fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}}],"background":"white"}');
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
canvas.on('mouse:up', function () {
    if ( $(".fSide").attr('active')=='true') fSide = canvas.toJSON(['id']);
    if ( $(".sSide").attr('active')=='true') sSide = canvas.toJSON(['id']);
});

//Functions for showing and hiding <div> for editing elements
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
    $('.selectedColor').css('color', canvas.getActiveObject().fill);
    $('.selectedColorTextBackground').css('color', canvas.getActiveObject().textBackgroundColor);
    if(canvas.getActiveObject().stroke==null)
        $('.selectedColorStroke').css('color', 'rgb(0,0,0)');
    $('.selectedColorStroke').css('color', canvas.getActiveObject().stroke);
    $('.attrLineHeight').val(canvas.getActiveObject().lineHeight);
    $('.attrСharSpacing').val(canvas.getActiveObject().charSpacing);
    $('.strokeWidth').val(canvas.getActiveObject().strokeWidth);
    //  $('#slider').slider('option', 'value', canvas.getActiveObject().angle);
    //$('#rotate').val(canvas.getActiveObject().angle);
    // $('#slider1').slider('option', 'value', (canvas.getActiveObject().opacity)*100);
    //  $("#contentSlider1").text((canvas.getActiveObject().opacity)*100);
    $('.divTextAttributes').removeClass('hidden');
}
function showImgAttr(){
    $('.divCommonAttributes').removeClass('hidden');
    $('.divLayerAttributes').removeClass('hidden');
    $('.btnDeleteObject').removeClass('hidden');
}
function showShapeAttr() {
    hideAttr();
    $('.divCommonAttributes').removeClass('hidden');
    $('.strokeWidth').val(canvas.getActiveObject().strokeWidth);
    $('.divLayerAttributes').removeClass('hidden');
    $('.btnDeleteObject').removeClass('hidden');
    $('.divShapeAttr').removeClass('hidden');
    $('.selectedColor').css('color', canvas.getActiveObject().fill);
}
function showGroupAttr(){
}
function hideAttr(){
    $('.divLayerAttributes').addClass('hidden');
    $('.btnDeleteObject').addClass('hidden');
    $('.divTextAttributes').addClass('hidden');
    $('.divCommonAttributes').addClass('hidden');
    $('.divShapeAttr').addClass('hidden');
}
//end functions for showing and hiding

//Functions for element adding
$('.shape').click(function () {
    var shape = $(this).attr('data-id');
    if (shape == 'square'){
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 50,
            height: 50
        });
        canvas.add(rect);}
    if (shape == 'circle'){
        var circle = new fabric.Circle({
            left: 100,
            top: 100,
            fill: 'red',
            radius: 30
        });
        canvas.add(circle);}
    if (shape == 'triangle'){
        var triangle = new fabric.Triangle({
            left: 100,
            top: 100,
            fill: 'red',
            width: 75
        });
        canvas.add(triangle);}
    canvas.renderAll();
})
$('.btnAddText').click(function () {
    hideAttr();
    var fabicText = new fabric.IText(prompt("Введите текст", "Текст"), {
        left: 100,
        top: 100,
        editable: false,
        id: canvas.getObjects().length,
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
$(document).on('click', '.addToCanv', function() {
    var img = document.createElement("img");
    img.src = ($(this).attr('data-id'));
    img.setAttribute('height', 200);
    img.setAttribute('width', 200);
    var imgInstance = new fabric.Image(img, {
        left: 100,
        top: 100
    });
    canvas.add(imgInstance);

});
$('.btnAddImage').click(function(){
    $('.file').trigger('click');
});
$('.file').on('change', function () {
    var files = document.forms[1].elements[0].files;
    var images = $('.imageRect').attr('data-id');
    var bool = false;
    for (var i = 0; i < files.length; i++) {
        bool = false;
        var file = files[i];
        var imageType = /^image\//;
        if (!imageType.test(file.type)) {
            continue;
        }
        var img = document.createElement("img");
        img.src = window.URL.createObjectURL(file);
       /* for (var y=0; y<images.length; y++){
            if (img.src == images[y].data-id) bool = true;
        }*/
        if(bool == true) continue;
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
});
//end functions for elements adding



//Functions for text editing
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
    autosize($('.textField'));
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
    setTimeout('$(".cardRegion").scrollTop(0);', 1);
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

$('.selectColorTextBackground').click(function(){
    var clr = $(this).attr('data-color');
    $('.selectedColorTextBackground').css('color', clr);
    canvas.getActiveObject().set('textBackgroundColor', clr);
    canvas.renderAll();
});

$('.attrTextBold').click(function(){
    if(canvas.getActiveObject().fontWeight == 'normal'){
        canvas.getActiveObject().set('fontWeight', 'bold');
        $(this).addClass('active');
    }else{
        canvas.getActiveObject().set('fontWeight', 'normal');
        $(this).removeClass('active');
    }
    canvas.renderAll();
});
$('.attrTextItalic').click(function(){
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
//end of functions for text editing

//Common editors
$('.btnLayerAttributes').click(function(){
    var name = $(this).attr('data-name');
    if(name == 'layerUp') {canvas.getActiveObject().bringToFront();  canvas.renderAll()}
    else if(name == 'layerUpOne') {canvas.getActiveObject().bringForward();  canvas.renderAll()}
    else if(name == 'layerDownOne') {canvas.getActiveObject().sendBackwards();  canvas.renderAll()}
    else if(name == 'layerDown') {canvas.getActiveObject().sendToBack();  canvas.renderAll()}
});
$('.btnDeleteObject').click(function(){
    if (canvas.getActiveGroup()){
        canvas.getActiveGroup().forEachObject(function(a) {
            canvas.remove(a);
        });
        canvas.discardActiveGroup();
    }else if(canvas.getActiveObject().type == 'text' || canvas.getActiveObject().type == 'i-text'){

    }else canvas.fxRemove(canvas.getActiveObject());
    canvas.renderAll();
    hideAttr();
});

$('.btnDeleteAll').click(function () {
    if(confirm('Вы уверены? Все содержимое холста будет удалено безвозвратно.')){
        canvas.setBackgroundImage($('.default')[0].src, canvas.renderAll.bind(canvas));
        canvas.setBackgroundColor('rgb(255,255,255');
        $('.selectedCanvasColor').css('color', 'rgb(255,255,255');
        var objects = canvas.getObjects();
        objects.forEach(function (item, i, arr) {
           if(item.type == 'text' || item.type == 'i-text'){
               item.set('text', '');
               item.set('strokeWidth', 0);
               item.set('fill', 'black');
               item.set('stroke', 'black');
               item.set('fontFamily', 'Times New Roman');
               item.set('fontSize', '40');
               item.set('fontWeight','');
               item.set('fontStyle','');
               item.set('textDecoration','');
               item.set('textAlign','left');
               canvas.renderAll();
               $("#textCont").each(function () {
                   $(this).children('.form-group').children('.input-group').children('.form-control').val('');
               });
           }
           else canvas.fxRemove(item);
        });
    }
});
$('.selectColor').click(function(){
    var clr = $(this).attr('data-color');
    $('.selectedColor').css('color', clr);
    canvas.getActiveObject().set('fill', clr);
    canvas.renderAll();
    setTimeout('$(".cardRegion").scrollTop(0);', 1)
});
$('.selectColorStroke').click(function(){
    var clr = $(this).attr('data-color');
    $('.selectedColorStroke').css('color', clr);
    canvas.getActiveObject().set('stroke', clr);
    canvas.renderAll();
    setTimeout('$(".cardRegion").scrollTop(0);', 1)
});
$('.selectCanvasColor').click(function () {
    var clr = $(this).attr('data-color');
    $('.selectedCanvasColor').css('color', clr);
    canvas.setBackgroundImage($('.default')[0].src, canvas.renderAll.bind(canvas));
    canvas.setBackgroundColor(clr, canvas.renderAll.bind(canvas));
    setTimeout('$(".cardRegion").scrollTop(0);', 1);
});

$('.erase').click(function () {
    canvas.setBackgroundImage($('.default')[0].src, canvas.renderAll.bind(canvas));
    canvas.setBackgroundColor('rgb(255,255,255)', canvas.renderAll.bind(canvas));
    $('.selectedCanvasColor').css('color', 'rgb(255,255,255)');
});

$('.strokeWidth').change(function(){
    var wid = $(this).val();
    canvas.getActiveObject().setStrokeWidth(wid);
    canvas.renderAll();
});
$(document).on('click', '.remove', function() {
    $(this).parent().parent().remove();
});
$('.turnDown').click(function () {
    var modal = document.getElementById('myModal');
    $('.back').removeClass('hidden');
    modal.style.display = "none";
});
$(document).on('click', '.preview', function() {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01");
    var send = document.getElementById("send");
    hideAttr();
    $('#collapseOne').collapse('hide');
    modal.style.display = "block";
    modalImg.style.display = "";
    modalImg.src = $(this).attr('data-id');
    var caption = document.getElementById('caption');
    caption.innerHTML = '';
    send.style.display = "none"
}).hover(function () {
    $('#collapseOne').collapse('hide');
});
$(document).on('click', '.setBack', function() {
    fabric.Image.fromURL($(this).attr('data-id'), function(img) {
        img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    });
});
$('.canvRev').click(function () {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01");
    var caption = document.getElementById('caption');
    var send = document.getElementById("send");
    hideAttr();
    $('#collapseOne').collapse('hide');
    modal.style.display = "block";
    modalImg.style.display = "none";
    caption.innerHTML = canvas.toSVG();
    send.style.display = "none"

}).hover(function () {
    $('#collapseOne').collapse('hide');
});
$('.imgTemplate').click(function () {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01");
    var send = document.getElementById("send");
    hideAttr();
    $('#collapseOne').collapse('hide');
    modal.style.display = "block";
    modalImg.style.display = "";
    modalImg.src = $(this)[0].src;
    var caption = document.getElementById('caption');
    caption.innerHTML = '';
    send.style.display = "none";
    $('.setTemp').removeClass('hidden').attr('data-id', Number($(this).attr('data-id')));

});
$('.setTemp').click(function () {
    var modal = document.getElementById('myModal');
    switch (Number($(this).attr('data-id'))){
        case 1:
            canvas.loadFromJSON(first);
            canvas.renderAll();
            parseText();
            $(this).addClass('hidden');
            modal.style.display = "none";
            break;
        case 2:
            canvas.loadFromJSON(second);
            canvas.renderAll();
            parseText();
            $(this).addClass('hidden');
            modal.style.display = "none";
            break;
        case 3:
            canvas.loadFromJSON(third);
            canvas.renderAll();
            parseText();
            $(this).addClass('hidden');
            modal.style.display = "none";
            break;
        case 4:
            canvas.loadFromJSON(fourth);
            canvas.renderAll();
            $(this).addClass('hidden');
            modal.style.display = "none";
            setTimeout('parseText()', 2000);
            break;
        case 5:
            canvas.loadFromJSON(fifth);
            canvas.renderAll();
            modal.style.display = "none";
            setTimeout('parseText()', 2000);
            break;
        case 6:
            canvas.loadFromJSON(sixth);
            canvas.renderAll();
            $(this).addClass('hidden');
            modal.style.display = "none";
            setTimeout('parseText()', 2000);
            break;
    }
})
//end of common editors

// Work with card sides
$('.fSide').click(function () {
    if ( $(this).attr('active')=='true') return;
    $(this).attr('active',true).css({'background': '#DAA520'});
    $('.sSide').attr('active', false).css({'background': '#ffed00'});
    if (fSide == undefined) {
        canvas.setBackgroundColor('white');
    } else {
        sSide = (canvas.toJSON(['id']));
        canvas.clear();
        canvas.loadFromJSON(fSide);
    }
    hideAttr();
    parseText();
});
$('.sSide').click(function () {
    $('.iconClose').css({'display':''});
    if ( $(this).attr('active')=='true') return;
    $(this).attr('active',true);
    $('.fSide').attr('active', false).css({'background': '#ffed00'});
    $(this).css({'background': '#DAA520'});
    fSide = (canvas.toJSON(['id']));
    canvas.clear();
    if (sSide == undefined){
        canvas.setBackgroundColor('white')
    } else {
        canvas.loadFromJSON(sSide);
    }
    hideAttr();
    parseText();
    canvas.renderAll();
});
$('.icon').click(function () {
    if (confirm("Вы уверены? Обратная сторона будет удалена.")){
        $('.iconClose').css({'display':'none'});
        $('.fSide').css({'background': '#DAA520'}).attr('active', true);
        $('.sSide').css({'background': '#ffed00'}).attr('active', false);
        sSide = undefined;
        canvas.clear();
        setTimeout('canvas.loadFromJSON(fSide)', 100);
        hideAttr();
    }
});
window.onload=  function () {
    $('.fSide').css({'background': '#DAA520'}).attr('active', true);
    canvas.loadFromJSON(defaultCanvas);
    canvas.renderAll();
    parseText();
};
//end of work with card sides


//Send email
$('.btnPrint').click(function () {
    if ( $(".fSide").attr('active')=='true') fSide = canvas.toJSON();
    if ( $(".sSide").attr('active')=='true') sSide = canvas.toJSON();
    var modal = document.getElementById('myModal');
    var side = document.getElementById("side");
    var send = document.getElementById("send");
    var caption = document.getElementById('caption');
    var modalImg = document.getElementById("img01");
    hideAttr();
    $('.back').addClass('hidden');
    $('#collapseOne').collapse('hide');
    modal.style.display = "block";
    send.style.display = "block";
    modalImg.style.display = "none";
    side1.loadFromJSON(fSide);
    side2.loadFromJSON(sSide);
    caption.innerHTML = '';
    setTimeout(function () {
        side1SVG = side1.toSVG();
        side2SVG = side2.toSVG();
    }, 50)

}).hover(function () {
    $('#collapseOne').collapse('hide');
});

$('.printData').submit(function () {
    event.stopPropagation();
    event.preventDefault();
    var data = {
        name: $('#name').val(),
        phone:$('#phone').val(),
        email:$('#email').val(),
        comment:$('#comment').val(),
        side1: side1SVG,
        side2: side2SVG
    };
    $.ajax({
        url: "/editor/email",
        type: "POST",
        data: data,
        cache : false,
        success: function(){
        }
    })
});
//