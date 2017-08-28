using System;
using System.Collections.Generic;
using System.Text;
using System.Web;


public class bz
{
    /// <summary>
    /// 用户在线验证
    /// </summary>
    public static void echo_confirm()
    {
        if (a3.Global_Guard_verifyUsr_ON == 1)
        {
            HttpContext.Current.Response.Write("var LR_centerMsgDiv=null,LR_centerMsgDiv_checked=false;var LR_centerMsgDivStatu=null;function LR_GetConfirmElement(){var els=document.getElementsByTagName('DIV');for(var i=0;i<els.length;i++){var el_z=LR_Getstyle(els[i],'zIndex');var position_z=LR_Getstyle(els[i],'position');var bottom_z=LR_Getstyle(els[i],'bottom');if(parseInt(el_z)>500&&position_z.indexOf('fixed')!=-1&&bottom_z!='0px'){var el_left=LR_Getstyle(els[i],'left');if(el_left=='50%'){LR_centerMsgDiv=els[i];LR_CheckConfirmElement();return}if(el_left.indexOf('px')!=-1){var el_left_int=parseInt(el_left.replace('px'));if(el_left_int>200){LR_centerMsgDiv=els[i];LR_CheckConfirmElement();return}}}}if(LR_centerMsgDiv_checked){LR_showInviteDiv('欢迎咨询',_lr_invitestring)}if(LR_centerMsgDiv==null&&!LR_centerMsgDiv_checked){LR_centerMsgDiv_checked=true;setTimeout('LR_GetConfirmElement()',3000);return}}function LR_Getstyle(obj,property){if(obj.currentStyle){return obj.currentStyle[property]}else if(window.getComputedStyle){return document.defaultView.getComputedStyle(obj,null)[property]}return null}function LR_CheckConfirmElement(){if(LR_centerMsgDivStatu==null){LR_centerMsgDiv.style.display='block';LR_centerMsgDiv.style.visibility='visible'}var lr_dsp=LR_centerMsgDiv.style.display;var lr_visible=LR_centerMsgDiv.style.visibility;if(LR_centerMsgDivStatu!=null){if(lr_dsp=='none'||lr_visible=='hidden'){LR_confirm();return}if(LR_centerMsgDiv.id=='LRfloater1'){if(document.getElementById('LRdiv1').style.display=='none'){LR_confirm();return}}}LR_centerMsgDivStatu=lr_dsp;setTimeout('LR_CheckConfirmElement()',1000)}function LR_confirm(){if(LR_cid==null||LR_cid==''){setTimeout('LR_confirm();',500);return}LR_hcloopJS(LR_sysurl+'js/JS_Confirm.aspx?eventx=1&clientx=1&id='+LR_siteid+'&sid='+LR_sid+'&cid='+LR_cid)}LR_GetConfirmElement();");
        }
    }
}

