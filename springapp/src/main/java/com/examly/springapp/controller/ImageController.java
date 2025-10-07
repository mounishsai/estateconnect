package com.examly.springapp.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.examly.springapp.model.ImageDTO;
import com.examly.springapp.model.PropertyImage;
import com.examly.springapp.service.ImageService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class ImageController {

	@Autowired
	ImageService imageService;

	@PostMapping("/upload-image")
	public ResponseEntity<PropertyImage> uploadImage(@RequestParam("file") MultipartFile file,
			@RequestParam("data") String data) {
		try {
			// Convert JSON string to ImageUploadRequest object
			ObjectMapper objectMapper = new ObjectMapper();
			ImageDTO uploadRequest = objectMapper.readValue(data, ImageDTO.class);

			// Call the service to handle the upload
			PropertyImage imageEntity = imageService.uploadImage(file, uploadRequest.getTitle(),
					 uploadRequest.getUploadedBy(), uploadRequest.getUploadDate());

			return ResponseEntity.ok(imageEntity);
		} catch (Exception e) {
			return ResponseEntity.status(500).body(null);
		}
	}

	@GetMapping("/get-image/{title}")
	public ResponseEntity<?> getImages(@PathVariable String title){
		List<String> paths=imageService.getImagesByPropertyTitle(title);
		if(paths.size()!=0){
			return ResponseEntity.status(200).body(paths);
		}
		else{
			return ResponseEntity.status(404).body("Not found");
		}
	}
}



//   --------------------------------- CHANGES ----------------------------------------------- 


// package com.examly.springapp.controller;

// import java.nio.file.Files;
// import java.nio.file.Path;
// import java.nio.file.Paths;
// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.core.io.Resource;
// import org.springframework.core.io.UrlResource;
// import org.springframework.http.HttpHeaders;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;
// import org.springframework.web.multipart.MultipartFile;

// import com.examly.springapp.model.ImageDTO;
// import com.examly.springapp.model.PropertyImage;
// import com.examly.springapp.service.ImageService;
// import com.fasterxml.jackson.databind.ObjectMapper;

// @RestController
// public class ImageController {

//     @Autowired
//     ImageService imageService;

//     @Value("${file.upload-dir}")
//     private String uploadDir;

//     @PostMapping("/upload-image")
//     public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file,
//                                          @RequestParam("data") String data) {
//         try {
//             ObjectMapper objectMapper = new ObjectMapper();
//             ImageDTO uploadRequest = objectMapper.readValue(data, ImageDTO.class);

//             PropertyImage imageEntity = imageService.uploadImage(file, uploadRequest.getTitle(),
//                     uploadRequest.getUploadedBy(), uploadRequest.getUploadDate());

//             return ResponseEntity.ok(imageEntity);
//         } catch (Exception e) {
//             return ResponseEntity.status(500).body("Image upload failed: " + e.getMessage());
//         }
//     }

//     @GetMapping("/get-image/{title}")
//     public ResponseEntity<?> getImages(@PathVariable String title) {
//         List<String> paths = imageService.getImagesByPropertyTitle(title);
//         if (!paths.isEmpty()) {
//             return ResponseEntity.ok(paths);
//         } else {
//             return ResponseEntity.status(404).body("Not found");
//         }
//     }

//     @GetMapping("/images/{filename:.+}")
//     public ResponseEntity<Resource> serveImage(@PathVariable String filename) {
//         try {
//             Path filePath = Paths.get(uploadDir).resolve(filename).normalize();
//             Resource resource = new UrlResource(filePath.toUri());

//             if (!resource.exists()) {
//                 return ResponseEntity.notFound().build();
//             }

//             String contentType = Files.probeContentType(filePath);
//             if (contentType == null) {
//                 contentType = "application/octet-stream";
//             }

//             return ResponseEntity.ok()
//                     .header(HttpHeaders.CONTENT_TYPE, contentType)
//                     .body(resource);

//         } catch (Exception e) {
//             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//         }
//     }
// }



