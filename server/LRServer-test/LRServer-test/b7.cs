using System;
using System.Collections.Generic;
using System.Text;
using System.Web;

    public class b7
    {
        public static void swtDefendSetting()
        {
            if (a3.j)
            {
                string str = HttpContext.Current.Request.QueryString["siteid"];
                string defendtype = HttpContext.Current.Request.Form["defendtype"];
                int defendvalue = Convert.ToInt32(HttpContext.Current.Request.Form["defendvalue"]);
                try
                {
                    if ((str != null) && (str.Length == 8))
                    {
                        string str3 = HttpContext.Current.Request.Form["sn"];
                        if (!aq.a(str, (bn)null, str3, (string)null))
                        {
                            HttpContext.Current.Response.AppendHeader("r", "server err");
                        }
                        else
                        {
                            if (defendtype == "VerifyUser_Defend_On")//用户认证模式
                            {
                                a3.Global_Guard_verifyUsr_ON = defendvalue;
                            }
                            HttpContext.Current.Response.AppendHeader("r", "ok");
                        }
                    }
                }
                catch (Exception ex)
                {
                    e.b(ex.ToString());
                }
            }
        }
    }
