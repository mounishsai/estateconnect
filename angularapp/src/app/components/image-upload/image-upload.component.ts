import { Component, OnInit } from '@angular/core';
import { PropertyImage } from 'src/app/models/propertyImage.model';
import { ImageService } from 'src/app/services/imageService.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  selectedFile: File | null = null;
  imageData: PropertyImage = {
    title: '',
    uploadedBy: '',
    uploadDate: ''
 
    }


  constructor(private imageService: ImageService) { }

  
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  
 onUpload(): void {
  if (this.selectedFile) {
    this.imageService.uploadImage(this.selectedFile, this.imageData).subscribe({
      next: (response) => console.log('Upload successful:', response),
      error: (error) => console.error('Upload failed:', error)
    });
  }
}


  ngOnInit(): void {
  }

}
