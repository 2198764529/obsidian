import os 

class Walk:

    def __init__(self,root) -> None:
        self.root = root
    
    def getFiles(self,):
        ls = []
        for path,dir_list,file_list in os.walk(self.root):  
            for file_name in file_list:  
                ls.append(os.path.join(path, file_name))
        return ls