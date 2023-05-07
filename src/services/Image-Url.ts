import NoImage from "../assets/NoImage.webp";

const GetOptimizeUrl = (url : string) =>{
    if(url){
        const index = url.indexOf('media/') + "media/".length;
        return url.slice(0,index) + "crop/600/400/" + url.slice(index);
    }
    else{
        return NoImage;
    }
};

export default GetOptimizeUrl;