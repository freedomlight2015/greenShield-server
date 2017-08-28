using System;
using System.Collections.Specialized;
using System.Data;
using System.IO;
using System.Text;
using System.Threading;
using System.Web;

public class cd
{
    public static void x()
    {
        if (a3.j)
        {
            //设置superfox是否启用或者关闭，如果过期了则会定时发送信息访问该URL来设置是否启用superfox防护功能
            string key = HttpContext.Current.Request.Form["key"];
            if (!(string.IsNullOrEmpty(key)))
            {
                if (key == "3DkLt8!TngP")//随机数，需要每一家都不同
                {
                    string operate = HttpContext.Current.Request.Form["operate"];
                    if (!string.IsNullOrEmpty(operate))
                    {
                        switch (operate.Trim())
                        {
                            case "setExpire"://设置过期
                                a3.Global_Guard_verifyUsr_ON = 0;
                                HttpContext.Current.Response.AppendHeader("operate", "success");
                                return;
                            case "verifyOn"://防护打开
                                a3.Global_Guard_verifyUsr_ON = 1;
                                HttpContext.Current.Response.AppendHeader("operate", "success");
                                return;
                            case "verifyOff"://防护关闭
                                a3.Global_Guard_verifyUsr_ON = 0;
                                HttpContext.Current.Response.AppendHeader("operate", "success");
                                return;
                            default://错误参数设置
                                HttpContext.Current.Response.AppendHeader("operate", "bad parameter");
                                return;
                        }
                    }
                }

            }
            //设置superfox结束
            try
            {
                if (!b(null, null))
                {
                    HttpContext.Current.Response.AppendHeader("r", "server err login");
                }
                else
                {
                    string str = HttpContext.Current.Request.Form["s"];
                    if (string.IsNullOrEmpty(str) || (str.Length != 8))
                    {
                        HttpContext.Current.Response.AppendHeader("r", "server err");
                    }
                    else
                    {
                        HttpContext.Current.Response.AppendHeader("r", "DelSiteID " + h.a(str, false));
                    }
                }
            }
            catch (Exception exception)
            {
                HttpContext.Current.Response.AppendHeader("r", "server err");
                e.b(exception.ToString());
            }
        }
    }
    public static bool b(string A_0, string A_1)
    {
        return true;
    }
}