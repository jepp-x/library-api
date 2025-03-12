import multer from "multer";
import{multerSaveFilesorg} from "multer-savefilesorg";



export const remoteUpload = multer({
    storage:multerSaveFilesorg({
        apisAccessToken:process.env.SAVEFILESORG_API_KEY,
        relativePath:'/library-api/*'
    })
})