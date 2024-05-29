package com.example.IntefejsyBack.controller;

import com.example.IntefejsyBack.entity.Door;
import com.example.IntefejsyBack.repository.DoorRepository;
import com.example.IntefejsyBack.service.DoorService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.List;

@RestController
@RequestMapping("/api/door")
@RequiredArgsConstructor
public class DoorController {

    private final DoorService doorService;

    @GetMapping
    public ResponseEntity<List<Door>> getAll() {
        return ResponseEntity.ok(doorService.getAll());
    }

    @PostMapping("/add")
    public ResponseEntity<Door> addDoor(@RequestBody String doorData) throws IOException {

        ObjectMapper objectMapper = new ObjectMapper();
        Door door = objectMapper.readValue(doorData, Door.class);


        door.setId(null);
        doorService.saveDoor(door);
        return ResponseEntity.status(HttpStatus.CREATED).body(door);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Door>> getAllDoors() {
        return ResponseEntity.ok(doorService.getAll());
    }

    @PostMapping("/savePhoto")
    public ResponseEntity<String> savePhoto(@RequestParam("image") MultipartFile file) throws IOException {
        if(file.isEmpty()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("File is empty");
        }

        try {
            String directory = "C:\\Users\\Kulka\\Documents\\interfaces\\intefaces\\src\\assets\\images \\";
            String fileName = file.getOriginalFilename();
            String filePath = directory + fileName;
            File dest = new File(filePath);
            file.transferTo(dest);
            return ResponseEntity.ok("\\assets\\images\\" + fileName);
        }
        catch (IOException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error while saving file");
        }
    }

    @PostMapping("/getFiltered")
    public ResponseEntity<List<Door>> getFiltered(@RequestBody Door door) {
        return ResponseEntity.ok(doorService.getFiltered(door));
    }

}
