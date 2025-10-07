import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/services/imageService.service';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-admin-add-property',
  templateUrl: './admin-add-property.component.html',
  styleUrls: ['./admin-add-property.component.css']
})
export class AdminAddPropertyComponent  {

  propertyForm:FormGroup
  productId:number
  submitted: boolean = false;
  // propertyAlreadyExists: boolean = false;
  selectedImages: File[] = [];
  // imagePreviews: string[] = [];
     

  

  constructor(private service:PropertyService, private fb:FormBuilder, private router:Router) {
      this.propertyForm=fb.group(
        {
          //file_name:fb.control(""),
          title:fb.control("",Validators.required),
          description:fb.control("",Validators.required),
          location:fb.control("",Validators.required),
          price:fb.control("",[Validators.required,Validators.min(0)]),
          type:fb.control("",Validators.required),
          status:fb.control("",Validators.required),
          area:fb.control("",Validators.required),
          hallCount:fb.control("",Validators.required),
          bedroomCount:fb.control("",Validators.required),
          kitchenCount:fb.control("",Validators.required),
          washroomCount:fb.control("",Validators.required),
          balconyCount:fb.control("",Validators.required),
          parkingArea:fb.control("",Validators.required),
          hosptialDistance:fb.control("",Validators.required),
          airportDistance:fb.control("",Validators.required),
          railwayStationDistance:fb.control("",Validators.required)
        }
      )
   }

  

  
  
 
  // propertyAlreadyExists:boolean=false
  // checkPropExists(): boolean{
  //   console.log(this.propertyForm.get('title').value);
  //   this.service.checkPropertyExists(this.propertyForm.get('title').value).subscribe(data=>{
  //     if(data){
  //       console.log(data)
  //       this.propertyAlreadyExists = true;
  //       return true;
  //     }
  //   })
  //   return false;
  // }
 

   // public addProperty(){
   // this.submitted = true;
   //   if(this.propertyForm.valid){
   //     this.service.addProperty(this.propertyForm.value).subscribe(data=>{
         // this.router.navigate(['/addProperty'])

   //     })
   //   }
    
   // }

   //Image Related Things 

  //selectedImages: File[] = [];

  onImageSelect(event: any): void {
    console.log(event);``
    this.selectedImages = Array.from(event.target.files);
  }

  addProperty(): void {
    // if(this.checkPropExists()){
    //   return;
    // }
    this.submitted = true;
  
    if (this.propertyForm.valid) {
      this.propertyForm
      this.service.addProperty(this.propertyForm.value).subscribe(createdProperty => {
        
        
        if (this.selectedImages.length > 0) {
          const uploadTasks = this.selectedImages.map(file => {
            const imageData = {
              title: this.propertyForm.value.title,
              uploadedBy: 'Admin', // or get from auth
              uploadDate: new Date().toISOString().split('T')[0]
            };
  
            const formData = new FormData();
            formData.append('file', file);
            formData.append('data', JSON.stringify(imageData));
  
            return this.service.uploadImage(formData); // Call to image upload endpoint
          });
  
          // Wait for all uploads to complete
          Promise.all(uploadTasks.map(task => task.toPromise())).then(() => {
            alert('Property and images uploaded successfully!');
            this.router.navigate(['/admin/viewProp']);
          }).catch(() => {
            alert('Property added, but image upload failed.');
          });
  
        } else {
          alert('Property added without images.');
          this.router.navigate(['/admin/viewProp']);
        }
      });
    }
  }
  
}

// -------------------------------------------CHANGES--------------------------------------------



// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { PropertyService } from 'src/app/services/property.service';

// @Component({
//   selector: 'app-admin-add-property',
//   templateUrl: './admin-add-property.component.html',
//   styleUrls: ['./admin-add-property.component.css']
// })
// export class AdminAddPropertyComponent implements OnInit {

//   propertyForm: FormGroup;
//   submitted: boolean = false;
//   propertyAlreadyExists: boolean = false;
//   selectedImages: File[] = [];
//   imagePreviews: string[] = [];

//   constructor(private service: PropertyService, private fb: FormBuilder, private router: Router) {
//     this.propertyForm = fb.group({
//       title: fb.control("", Validators.required),
//       description: fb.control("", Validators.required),
//       location: fb.control("", Validators.required),
//       price: fb.control("", [Validators.required, Validators.min(0)]),
//       type: fb.control("", Validators.required),
//       status: fb.control("", Validators.required)
//     });
//   }

//   ngOnInit(): void {}

//   onImageSelect(event: any): void {
//     this.selectedImages = Array.from(event.target.files);
//     this.imagePreviews = [];

//     this.selectedImages.forEach(file => {
//       const reader = new FileReader();
//       reader.onload = () => {
//         this.imagePreviews.push(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     });
//   }

//   addProperty(): void {
//     this.submitted = true;

//     if (this.propertyForm.valid) {
//       this.service.checkPropertyExists(this.propertyForm.get('title')?.value).subscribe(data => {
//         if (data) {
//           this.propertyAlreadyExists = true;
//           return;
//         }

//         this.service.addProperty(this.propertyForm.value).subscribe(createdProperty => {
//           if (this.selectedImages.length > 0) {
//             const uploadTasks = this.selectedImages.map(file => {
//               const imageData = {
//                 title: this.propertyForm.value.title,
//                 uploadedBy: 'Admin',
//                 uploadDate: new Date().toISOString().split('T')[0]
//               };

//               const formData = new FormData();
//               formData.append('file', file);
//               formData.append('data', JSON.stringify(imageData));

//               return this.service.uploadImage(formData);
//             });

//             Promise.all(uploadTasks.map(task => task.toPromise())).then(() => {
//               alert('Property and images uploaded successfully!');
//               this.resetForm();
//               this.router.navigate(['/admin/viewProp']);
//             }).catch(() => {
//               alert('Property added, but image upload failed.');
//               this.router.navigate(['/admin/viewProp']);
//             });

//           } else {
//             alert('Property added without images.');
//             this.resetForm();
//             this.router.navigate(['/admin/viewProp']);
//           }
//         });
//       });
//     }
//   }

//   resetForm(): void {
//     this.propertyForm.reset();
//     this.selectedImages = [];
//     this.imagePreviews = [];
//     this.submitted = false;
//     this.propertyAlreadyExists = false;
//   }
// }
