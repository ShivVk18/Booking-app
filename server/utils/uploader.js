const cloudinary = require('cloudinary').v2
const fs = require('fs')

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET
  }); 


exports.fileUploadToCloudinary = async(localFilePath) =>{
   
       try {
            if(!localFilePath)return null

            const response = await cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto"
            })

            console.log("File upload on cloudinary",response.url);

            return response
            
       } catch (error) {
          fs.unlinkSync(localFilePath)
          return null
       }
}