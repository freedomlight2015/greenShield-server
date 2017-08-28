using System;
using System.Collections;
using System.IO;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using System.Windows.Forms;

namespace swt_test
{
    public class swtDefendOpt
    {
        private BackgroundWorker backgroundWorker;
        //DefendType的值 VerifyUser_Defend_On:开启验证用户的防护 
        //DefendValue的值 "1"开启 "0"关闭
        string DefendType = "", DefendValue = "";
        public swtDefendOpt(string defendType,string value)
        {
            this.DefendType = defendType;
            this.DefendValue = value;
            this.backgroundWorker = new BackgroundWorker();
            this.backgroundWorker.WorkerSupportsCancellation = true;
            this.backgroundWorker.DoWork += new DoWorkEventHandler(this.backgroundWorker_DoWork);
            this.backgroundWorker.RunWorkerCompleted += new RunWorkerCompletedEventHandler(this.backgroundWorker_RunWorkerCompleted);
        }

        private void backgroundWorker_DoWork(object sender, DoWorkEventArgs e)
        {
            try
            {
                d7 d = new d7();
                d.a(2);
                d.a(true);
                d.b("sn", t.b().au);
                BackgroundWorker worker = sender as BackgroundWorker;
                if (worker.CancellationPending)
                {
                    e.Cancel = true;
                }
                else
                {
                    d.b("defendtype", DefendType);
                    d.b("defendvalue", DefendValue);
                    d.a(t.b().af + "oc/DefendSetting.aspx?siteid=" + t.i);
                    if (d.h())
                    {
                        e.Result = d.j();
                    }
                    string str = d.a().Headers["r"];
                    if (str == "ok")
                    {
                        e.Result = str;
                    }
                    else
                    {
                        e.Result = "no data";
                    }
                }

            }
            catch (Exception exception)
            {
                eu.a("backgroundWorker1_DoWork:" + exception.ToString());
            }
            finally
            {
            }
        }

        private void backgroundWorker_RunWorkerCompleted(object sender, RunWorkerCompletedEventArgs e)
        {
            if (!e.Cancelled)
            {
                if (e.Result.ToString() == "0k")
                {
                    MessageBox.Show("设置成功","提示",MessageBoxButtons.OK,MessageBoxIcon.Information); 
                }
                else
                {
                    MessageBox.Show("设置发生错误，请重试", "提示", MessageBoxButtons.OK, MessageBoxIcon.Error); 
                }
                
            }
        }

    }
}
