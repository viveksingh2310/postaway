import multer from 'multer'
const storageConfig=multer.diskStorage(
  {
    destination:function(req,file,cb){
        cb(null,'../../images')
    },
    filename:function(req,file,cb){
        const uniqueName=Date.now()+" "+file.originalname+"  ";
        cb(null,uniqueName)
    }
  }
)
const fileUpload=new multer({storage:storageConfig});
export default fileUpload;