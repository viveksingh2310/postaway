import multer from 'multer'
const storageConfig=multer.diskStorage(
  {
    destination:(req,file,cb)=>{
        cb(null,'images/')
    },
    filename:(req,file,cb)=>{
        const uniqueName=Date.now()+" "+file.originalname+"  ";
        cb(null,uniqueName)
    },
  },
);
export const fileUpload=multer({storage:storageConfig});
