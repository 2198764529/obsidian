import os
def getFileTime(fPath,type):
    if type=="Access":
        return os.path.getatime(fPath)
    elif type=="Create":
        return os.path.getctime(fPath)
    elif type=="Modify":
        return os.path.getmtime(fPath)

