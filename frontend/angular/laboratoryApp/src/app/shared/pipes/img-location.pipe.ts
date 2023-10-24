import { Pipe, PipeTransform } from '@angular/core';
import { JPEG_JPG_ROOT_LOCATION, SVG_ROOT_LOCATION } from '../constants/image-location.constant';
type FileType= "jpeg"|"jpg"|"svg"
@Pipe({
  name: 'imgLocation'
})
export class ImgLocationPipe implements PipeTransform {

  extractFileType(fileName:string):string{
    const splitFileName=fileName.split('.')
    return splitFileName[splitFileName.length-1].toLowerCase()
  }

  rootFileLocations:any={
    svg:SVG_ROOT_LOCATION,
    jpeg_jpg:JPEG_JPG_ROOT_LOCATION
  }

  transform(fileName: string): string {
    const fileType=this.extractFileType(fileName);
    const location=fileType==='jpeg' || fileType==='jpg' ?"jpeg_jpg":fileType;
    return `${this.rootFileLocations[location]}${fileName}`;
  }

}
