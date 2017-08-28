using System;
using System.Collections.Generic;
using System.Text;

public class j
{
    public static void writeConfirmCode(System.IO.TextWriter textWriter)
    {
        if (a3.Global_Guard_verifyUsr_ON == 1)
        {
            textWriter.Write("try{if(obj1.addEventListener){obj1.addEventListener('mousemove',LR_on_MoveEvent,false);obj1.addEventListener('click',LR_on_ClickEvent,false)}else if(obj1.attachEvent){obj1.attachEvent('onmousemove',LR_on_MoveEvent);obj1.attachEvent('onclick',LR_on_ClickEvent)}}catch(e){}}else{var TextBox1_editor_obj=LR_GetObj('TextBox1_editor');try{if(TextBox1_editor_obj.addEventListener){TextBox1_editor_obj.addEventListener('mousemove',LR_on_MoveEvent1,false);TextBox1_editor_obj.addEventListener('click',LR_on_ClickEvent1,false)}else if(TextBox1_editor_obj.attachEvent){TextBox1_editor_obj.attachEvent('onmousemove',LR_on_MoveEvent1);TextBox1_editor_obj.attachEvent('onclick',LR_on_ClickEvent1)}}catch(e){}}var LR_Eventx=null;var LR_EventClick=null;function LR_removeHandler(element,type,handler){if(element.removeEventListener){element.removeEventListener(type,handler,false)}else if(element.detachEvent){element.detachEvent('on'+type,handler)}else{element['on'+type]=null}}function LR_getPageX(evt){var result=evt.pageX,doc=obj1;if(!result&&result!==0){result=(evt.clientX||0)+(doc.documentElement.scrollLeft||doc.body.scrollLeft)}return result}function LR_getPageX1(evt){var result=evt.pageX,doc=document;if(!result&&result!==0){result=(evt.clientX||0)+(doc.documentElement.scrollLeft||doc.body.scrollLeft)}return result}function LR_on_MoveEvent(evt){evt=evt||window.event;LR_Eventx=LR_getPageX(evt);LR_removeHandler(obj1,'mousemove',LR_on_MoveEvent)}function LR_on_ClickEvent(evt){evt=evt||window.event;LR_EventClick=true;LR_removeHandler(obj1,'click',LR_on_ClickEvent)}function LR_on_MoveEvent1(evt){evt=evt||window.event;LR_Eventx=LR_getPageX1(evt);LR_removeHandler(LR_GetObj('TextBox1_editor'),'mousemove',LR_on_MoveEvent1)}function LR_on_ClickEvent1(evt){evt=evt||window.event;LR_EventClick=true;LR_removeHandler(LR_GetObj('TextBox1_editor'),'click',LR_on_ClickEvent1)}function LR_hcloopJS_1(url,param){var me=arguments.callee;var src=url.indexOf('?')=='-1'?url+'?':url;src+=param+'&d='+new Date().getTime();me.Script&&me.Script.parentNode.removeChild(me.Script);me.Script=document.createElement('script');me.Script.setAttribute('type','text/javascript');me.Script.src=src;document.getElementsByTagName('head')[0].appendChild(me.Script)}function getWindowWidth(){var windowWidth=0;if(typeof(window.innerWidth)=='number'){windowWidth=window.innerWidth}else{if(document.documentElement&&document.documentElement.clientWidth){windowWidth=document.documentElement.clientWidth}else{if(document.body&&document.body.clientWidth){windowWidth=document.body.clientWidth}}}return windowWidth}function LR_sentConfirmUrl(){if(LR_Eventx==null||LR_EventClick==null||LR_cid==null||LR_cid==''){setTimeout('LR_sentConfirmUrl();',500);return}LR_hcloopJS_1(LR_sysurl+'js/JS_Confirm.aspx?eventx='+LR_Eventx+'&clientx='+getWindowWidth()+'&id='+LR_siteid+'&sid='+LR_sid+'&cid='+LR_cid)}LR_sentConfirmUrl();");
        }
        else
        {
            textWriter.Write("}");
        }
    }
    public static void test(System.IO.TextWriter textWriter)
    {
        gsPublic.ChatpreLevel1(textWriter);
    }
}