from frontMatter import FrontMatter
from walk import Walk
from datetime import TimeStampToTime 
from file import getFileTime 
import os

if __name__=="__main__":
    f_path = "C:/Users/李枫/Desktop/hugoHome/content/posts/生活记录/一些网站密码.md"
    w = Walk('content')
    
    for f_path in w.getFiles():
        fm = FrontMatter(f_path)
        ctime = getFileTime(f_path,'Create')
        ctime = TimeStampToTime(ctime)
        print(ctime)
        fm.setMdFMValue('PublishDate',ctime)
        fm.delMdFMValue('t')