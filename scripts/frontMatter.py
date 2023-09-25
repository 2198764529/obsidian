class FrontMatter:

    def __init__(self,mdPath,isTest=True):
        self.isTest = isTest
        self.md_frontMatter = []
        self.mdPath = mdPath
        self.readlimit = 10
        self.enconding = 'utf-8'
        self.fileFormat = 'md'
        self.FMline = "---\n"

    
    def getMdFM(self,):
        if not self.mdPath.endswith(self.fileFormat):
            print('文件格式不对')
        with open(self.mdPath,encoding=self.enconding) as f:
            # checkMdFM
            # if
            line = f.readline()
            if line!=self.FMline:
                print("格式不对")
            while line!=self.FMline or f.tell()==5:
                line = f.readline()
                if not line.startswith('-'):
                    data = line.split(":",maxsplit=1)
                    if len(data)==2:
                        self.md_frontMatter.append([
                            data[0],[] if data[1]=="\n" else data[1].replace('\n','')
                        ])
                elif line.startswith("- "):
                    self.md_frontMatter[-1][-1].append(
                        line.replace("- ","").replace("\n",'')
                        )
                    
                

    def setMdFMValue(self,key,value):
        with open(self.mdPath,'r+',encoding=self.enconding) as f:
            lines = f.readlines()
            f.seek(0)
            f.truncate()
            flag = True
            for i,line in enumerate(lines):
                if flag and (line==self.FMline and i!=0):
                    f.write("{}: {}\n".format(key,value))
                if line.startswith(key):
                    f.write("{}: {}\n".format(key,value))
                    flag = False
                else:
                    f.write(line)

    def delMdFMValue(self,key):
            with open(self.mdPath,'r+',encoding=self.enconding) as f:
                lines = f.readlines()
                f.seek(0)
                f.truncate()
                flag = True
                for i,line in enumerate(lines):
                    if not line.startswith(key):
                       
                        f.write(line)