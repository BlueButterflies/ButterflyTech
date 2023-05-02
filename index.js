  function translate(lng, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
    if(lng == 'en'){
      $("#enTranslator").css('color', '#f4623a');
      $("#khTranslator").css('color', '#212529');
    } 
    if(lng == 'kh'){
      $("#khTranslator").css('color', '#f4623a');
      $("#enTranslator").css('color', '#212529');
    }
}
$(document).ready(function(){
  $("#enTranslator").click(function(){
    translate('en', 'lng-tag');
  });
  $("#khTranslator").click(function(){
    translate('kh', 'lng-tag');
  });
});