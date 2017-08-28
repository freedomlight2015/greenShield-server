using C1.C1Zip;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using System.Windows.Forms;

namespace SwtTool
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void encrpt_btn_Click(object sender, EventArgs e)
        {
            this.encript_txt.Text = encrpt(this.encript_txt.Text,this.encrptkey.Text);
        }

        /// <summary>
        /// 解密
        /// </summary>
        /// <param name="string_0"></param>
        /// <param name="string_1"></param>
        /// <returns></returns>
        public static string decrpt(string string_0, string string_1)
        {
            try
            {
                DESCryptoServiceProvider provider = new DESCryptoServiceProvider();
                byte[] buffer = new byte[string_0.Length / 2];
                for (int i = 0; i < (string_0.Length / 2); i++)
                {
                    int num2 = Convert.ToInt32(string_0.Substring(i * 2, 2), 0x10);
                    buffer[i] = (byte)num2;
                }
                provider.Key = Encoding.ASCII.GetBytes(string_1);
                provider.IV = Encoding.ASCII.GetBytes(string_1);
                MemoryStream stream = new MemoryStream();
                CryptoStream stream2 = new CryptoStream(stream, provider.CreateDecryptor(), CryptoStreamMode.Write);
                stream2.Write(buffer, 0, buffer.Length);
                stream2.FlushFinalBlock();
                new StringBuilder();
                return Encoding.Default.GetString(stream.ToArray());
            }
            catch (Exception ex)
            {
                return "";
            }
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
        private void dencrpt_btn_Click(object sender, EventArgs e)
        {
            this.decrpt_txt.Text = decrpt(this.decrpt_txt.Text,this.decrptKey.Text);
        }

        private void openFileDialog1_FileOk(object sender, CancelEventArgs e)
        {

        }

      
        private void uncompress_choice_Click(object sender, EventArgs e)
        {
            OpenFileDialog openFileDialog = new OpenFileDialog();
            openFileDialog.InitialDirectory = "c:\\";//注意这里写路径时要用c:\\而不是c:\
            openFileDialog.Filter = "文本文件|*.*|C#文件|*.cs|所有文件|*.*";
            openFileDialog.RestoreDirectory = true;
            openFileDialog.InitialDirectory=Environment.CurrentDirectory;
            openFileDialog.FilterIndex = 1;
            if (openFileDialog.ShowDialog() == DialogResult.OK)
            {
                string file = openFileDialog.FileName;
                this.uncompress_txt.Text = file;
            }
        }
        public static bool uncompress(Stream stream_0, string string_0)
        {
            bool flag = true;
            FileStream baseStream = null;
            try
            {
                baseStream = new FileStream(string_0, FileMode.Open, FileAccess.Read);
                C1ZStreamReader reader = new C1ZStreamReader(baseStream);
                uncompress_write(stream_0, reader);
            }
            catch
            {
                flag = false;
            }
            finally
            {
                if (baseStream != null)
                {
                    baseStream.Close();
                }
            }
            return flag;
        }
        public static void uncompress_write(Stream stream_0, Stream stream_1)
        {
            int num;
            if (stream_1.Position != 0L)
            {
                stream_1.Position = 0L;
            }
            byte[] buffer = new byte[0x8000];
            while ((num = stream_1.Read(buffer, 0, buffer.Length)) != 0)
            {
                stream_0.Write(buffer, 0, num);
            }
            stream_0.Flush();
        }
        private void uncompress_btn_Click(object sender, EventArgs e)
        {
            MemoryStream ms = new MemoryStream();
            uncompress(ms, uncompress_txt.Text);
            string s = System.Text.Encoding.Default.GetString(ms.ToArray());
            this.result.Text = s;
        }

        private void compressSave_Click(object sender, EventArgs e)
        {
            saveFileDialog1.Filter = "txt files (*.txt)|*.txt|All files (*.*)|*.*";
            saveFileDialog1.RestoreDirectory = true;
            saveFileDialog1.InitialDirectory = Environment.CurrentDirectory;
            if (saveFileDialog1.ShowDialog() == DialogResult.OK)
            {
                MemoryStream stream = new MemoryStream();
                StreamWriter writer = new StreamWriter( stream );  
                writer.Write(this.result.Text);  
                writer.Flush();
                saveCompress(saveFileDialog1.FileName, stream);
            }
        }
        public static bool saveCompress(string string_0, Stream stream_0)
        {
            bool flag = true;
            FileStream stream = null;
            try
            {
                stream = new FileStream(string_0, FileMode.Open, FileAccess.Write);
                C1ZStreamWriter writer = new C1ZStreamWriter(stream);
                compressWrite(writer, stream_0);
            }
            catch(Exception ex)
            {
                flag = false;
            }
            finally
            {
                if (stream != null)
                {
                    stream.Close();
                }
            }
            return flag;
        }
        public static void compressWrite(Stream stream_0, Stream stream_1)
        {
            int num;
            if (stream_1.Position != 0L)
            {
                stream_1.Position = 0L;
            }
            byte[] buffer = new byte[0x8000];
            while ((num = stream_1.Read(buffer, 0, buffer.Length)) != 0)
            {
                stream_0.Write(buffer, 0, num);
            }
            stream_0.Flush();
        }

        private void openFileDialog1_FileOk_1(object sender, CancelEventArgs e)
        {

        }

        private void compress_btn_Click(object sender, EventArgs e)
        {
            
            saveFileDialog1.Filter = "txt files (*.txt)|*.txt|All files (*.*)|*.*";
            saveFileDialog1.RestoreDirectory = true;
            saveFileDialog1.InitialDirectory = Environment.CurrentDirectory;
            if (saveFileDialog1.ShowDialog() == DialogResult.OK)
            {
                FileStream baseStream = new FileStream(this.compress_txt.Text, FileMode.Open, FileAccess.Read);
                saveCompress(saveFileDialog1.FileName, baseStream);
            }
        }

        private void compress_choice_Click(object sender, EventArgs e)
        {
            OpenFileDialog openFileDialog = new OpenFileDialog();
            openFileDialog.InitialDirectory = "c:\\";//注意这里写路径时要用c:\\而不是c:\
            openFileDialog.Filter = "文本文件|*.*|C#文件|*.cs|所有文件|*.*";
            openFileDialog.RestoreDirectory = true;
            openFileDialog.InitialDirectory = Environment.CurrentDirectory;
            openFileDialog.FilterIndex = 1;
            if (openFileDialog.ShowDialog() == DialogResult.OK)
            {
                string file = openFileDialog.FileName;
                this.compress_txt.Text = file;
            }
        }
    }
}