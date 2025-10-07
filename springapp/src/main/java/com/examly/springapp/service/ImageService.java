

package com.examly.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.examly.springapp.model.PropertyImage;
import com.examly.springapp.repository.PropertyImageRepo;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class ImageService {

	@Value("${file.upload-dir}")
	private String uploadDir;

	@Autowired
	PropertyImageRepo imageRepository;

	public PropertyImage uploadImage(MultipartFile file, String title , String uploadedBy,String uploadDate) throws IOException {
		// Create directory if it doesn't exist
		File directory = new File(uploadDir);
		if (!directory.exists()) {
			directory.mkdirs();
		}

		// Save file to server
		String fileName = file.getOriginalFilename();
		Path filePath = Paths.get(uploadDir, fileName);
		Files.write(filePath, file.getBytes());

		// Save file info and metadata to the database
		PropertyImage imageEntity = new PropertyImage();
		imageEntity.setFileName(fileName);
		imageEntity.setFilePath(filePath.toString());
		imageEntity.setTitle(title);
		imageEntity.setUploadedBy(uploadedBy);
		imageEntity.setUploadDate(uploadDate);

		return imageRepository.save(imageEntity);
	}

	public List<String> getImagesByPropertyTitle(String title){
		return imageRepository.filePaths(title);
	}
}


// ----------------------------------------------CHANGES--------------------------------------


// package com.examly.springapp.service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.stereotype.Service;
// import org.springframework.web.multipart.MultipartFile;

// import com.examly.springapp.model.PropertyImage;
// import com.examly.springapp.repository.PropertyImageRepo;

// import java.io.File;
// import java.io.IOException;
// import java.nio.file.Files;
// import java.nio.file.Path;
// import java.nio.file.Paths;
// import java.util.List;

// @Service
// public class ImageService {

//     @Value("${file.upload-dir}")
//     private String uploadDir;

//     @Autowired
//     PropertyImageRepo imageRepository;

//     public PropertyImage uploadImage(MultipartFile file, String title, String uploadedBy, String uploadDate) throws IOException {
//         File directory = new File(uploadDir);
//         if (!directory.exists()) {
//             directory.mkdirs();
//         }

//         String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
//         Path filePath = Paths.get(uploadDir, fileName);
//         Files.write(filePath, file.getBytes());

//         PropertyImage imageEntity = new PropertyImage();
//         imageEntity.setFileName(fileName);
//         imageEntity.setFilePath(filePath.toString());
//         imageEntity.setTitle(title);
//         imageEntity.setUploadedBy(uploadedBy);
//         imageEntity.setUploadDate(uploadDate);

//         return imageRepository.save(imageEntity);
//     }

//     public List<String> getImagesByPropertyTitle(String title) {
//         return imageRepository.filePaths(title);
//     }
// }


