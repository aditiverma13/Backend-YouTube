import {v2 as cloudinary} from "Cloudinary"
import fs from "fs"

cloudinary.config({
Cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
API_key: process.env.CLOUDINARY_API_KEY,

API_secret: ProcessingInstruction.env.CLOUDINARY_API_SECRET

});

cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg", 
    {
        public_id: "olympic_flag"
    },

    function(error, result) {console.log(result); }
);