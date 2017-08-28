using System;
using System.Collections.Generic;
using System.Text;
using System.Web;

public class b1
{
    /// <summary>
    /// 手机端对话验证
    /// </summary>
    public static void chaptre_mobile_confirm()
    {
        if (a3.Global_Guard_verifyUsr_ON == 1)
        {
            HttpContext.Current.Response.Write("<script language=\"javascript\">function getWindowWidth(){var windowWidth=0;if(typeof(window.innerWidth)=='number'){windowWidth=window.innerWidth}else{if(document.documentElement&&document.documentElement.clientWidth){windowWidth=document.documentElement.clientWidth}else{if(document.body&&document.body.clientWidth){windowWidth=document.body.clientWidth}}}return windowWidth}function LR_hcloopJS_1(url,param){var me=arguments.callee;var src=url.indexOf('?')=='-1'?url+'?':url;src+=param+'&d='+new Date().getTime();me.Script&&me.Script.parentNode.removeChild(me.Script);me.Script=document.createElement('script');me.Script.setAttribute('type','text/javascript');me.Script.src=src;document.getElementsByTagName('head')[0].appendChild(me.Script)}function LR_sendConfirm(clientX){if(LR_cid==''||LR_cid==null || window.inputIsFocus==false){setTimeout('LR_sendConfirm('+clientX+')',500);return}LR_hcloopJS_1(LR_sysurl+'js/JS_Confirm.aspx?eventx='+clientX+'&clientx='+getWindowWidth()+'&id='+LR_siteid+'&sid='+LR_sid+'&cid='+LR_cid)}function LR_mobileconfirm(event){var touch=event.touches[0];document.removeEventListener('touchstart',LR_mobileconfirm,false);LR_sendConfirm(touch.clientX)}document.addEventListener('touchstart',LR_mobileconfirm,false);</script>");
        }
    }
}