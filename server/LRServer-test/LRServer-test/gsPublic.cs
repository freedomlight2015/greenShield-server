using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using System.Web;


    public class gsPublic
    {
        public static Int32 Global_Guard_verifyUsr_ON=1;//0 不开防护 1 弹出框 
        public static Int32 Global_Disable_Track;// 0开启在线访客 1关闭在线访客
        public static string Global_VerifyCode;
        /// <summary>
        /// 防护1->对话开启弹出框
        /// </summary>
        /// <param name="textWriter"></param>
        public static void ChatpreLevel1(System.IO.TextWriter textWriter)
        {
            if (gsPublic.Global_Guard_verifyUsr_ON == 1)
            {
                string path = a3.q + @"Site\chatpreLevelOne.js";
                if (File.Exists(path))
                {
                    try
                    {
                        using (FileStream stream = File.Open(path, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
                        {
                            using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                            {
                                string content = reader.ReadToEnd();
                                textWriter.Write(content);
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        e.b("gsPublic->ChatpreLevel1:" + ex.ToString());
                    }
                }
                
            }
            else
            {
                textWriter.Write("function LastFunction()" + a8.a);
                textWriter.Write("{" + a8.a);
                textWriter.Write(a8.b + "if (skid!='' && skid!=null)" + a8.a);
                textWriter.Write(a8.b + "{" + a8.a);
                textWriter.Write(a8.b + "chatwordsFrame.testclick(skid,sk);" + a8.a);
                textWriter.Write(a8.b + "}" + a8.a);
                textWriter.Write("LastFunction3();" + a8.a);
                textWriter.Write("}" + a8.a);
            }
        }
        /// <summary>
        /// 防护1->在线访客是否真实用户
        /// </summary>
        /// <param name="textWriter"></param>
        public static void OnlineLevel1(System.IO.TextWriter textWriter)
        {

        }
        /// <summary>
        /// 管理页面
        /// </summary>
        public static void ManagerLogin()
        {
            string username = HttpContext.Current.Request.Form["username"];
            string password = HttpContext.Current.Request.Form["password"];
            string swtID = HttpContext.Current.Request.Form["id"];
            string swtSiteID = swtID.Substring(3, swtID.Length - 3);

            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                Alert("用户名或者密码不能为空", "login.html");
                return;
            }
            bn bn = aq.x(swtSiteID);
            if (bn == null)
            {
                Alert("站点错误", "login.html");
                return;
            }
            try
            {
                Monitor.Enter(bn);
                DataTable table = bn.w()["Operators"];
                DataRow row2 = table.Rows.Find(username);
                if (row2 == null)
                {
                    Alert("管理名称或者密码不正确1", "login.html");
                    return;
                }
                string desEn = gsPublic.encrpt(password, swtSiteID);
                //HttpContext.Current.Response.Write(password + "\r\n");
                //HttpContext.Current.Response.Write(swtSiteID + "\r\n");
                //HttpContext.Current.Response.Write(desEn + "\r\n");
                //HttpContext.Current.Response.Write(row2["password"].ToString() + "\r\n");
                if (string.IsNullOrEmpty(desEn) || desEn != row2["password"].ToString())
                {
                    Alert("管理名称或者密码不正确2","login.html");
                }
                gsPublic.Global_VerifyCode = desEn;
                Alert("登录成功","bhSecurity.aspx");
                return;
            }
            catch (Exception ex)
            {
                e.b("ManagerLogin: " + ex.ToString());
            }
            finally
            {
                Monitor.Exit(bn);
            }
        }
        /// <summary>
        /// 管理操作
        /// </summary>
        public static void MangerOpt()
        {
            string vid = HttpContext.Current.Request.Form["vid"];
            if (vid != gsPublic.Global_VerifyCode)
            {
                Alert("请先登录", "login.html");
            }
            string opt = HttpContext.Current.Request.Form["opt"];
            if (string.IsNullOrEmpty(opt))
            {
                gsPublic.Global_Guard_verifyUsr_ON = 0;
            }
            else if (opt == "level1")
            {
                gsPublic.Global_Guard_verifyUsr_ON = 1;
            }
            else if (opt == "level2")
            {
                gsPublic.Global_Guard_verifyUsr_ON = 1;
            }
            else
            {
                gsPublic.Global_Guard_verifyUsr_ON = 0;
            }
            string track = HttpContext.Current.Request.Form["track"];
            if (string.IsNullOrEmpty(track))
            {
                gsPublic.Global_Disable_Track = 0;
            }
            else if (track == "off")
            {
                gsPublic.Global_Disable_Track = 0;
            }
            else if (track == "on")
            {
                gsPublic.Global_Disable_Track = 1;
            }
            Alert("修改成功","bhSecurity.aspx");
            return;
 
        }
        private static void Alert(string str,string redirect)
        {
            HttpContext.Current.Response.Write("<script>alert('" + str + "');window.location='"+redirect+"';</script>");
            HttpContext.Current.Response.End();
        }
        public static string encrpt(string string_0, string string_1)
        {
            try
            {
                DESCryptoServiceProvider provider = new DESCryptoServiceProvider();
                byte[] bytes = Encoding.Default.GetBytes(string_0);
                provider.Key = Encoding.ASCII.GetBytes(string_1);
                provider.IV = Encoding.ASCII.GetBytes(string_1);
                MemoryStream stream = new MemoryStream();
                CryptoStream stream2 = new CryptoStream(stream, provider.CreateEncryptor(), CryptoStreamMode.Write);
                stream2.Write(bytes, 0, bytes.Length);
                stream2.FlushFinalBlock();
                StringBuilder builder = new StringBuilder();
                foreach (byte num2 in stream.ToArray())
                {
                    builder.AppendFormat("{0:X2}", num2);
                }
                builder.ToString();
                return builder.ToString();
            }
            catch
            {
                return "";
            }
        }
    }

