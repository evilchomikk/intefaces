package com.example.IntefejsyBack.service;

import com.example.IntefejsyBack.entity.Door;
import com.example.IntefejsyBack.repository.DoorRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
@AllArgsConstructor
public class DoorServiceImpl implements DoorService {

    private final DoorRepository doorRepository;

    @Override
    public List<Door> getAll() {
        return doorRepository.findAll();
    }

    @Override
    public void saveDoor(Door door) {
        Random random = new Random();
        door.setCode(random.nextInt(1000000) + 1000000 + "");
        doorRepository.save(door);
    }

    @Override
    public List<Door> getFiltered(Door door) {
        List<Door> doors = doorRepository.findAll();
        var Lname = door.getName();
        var Lheight = door.getHeight();
        var Lwidth = door.getWidth();
        var Lcolor = door.getColor();
        var Lmaterial = door.getMaterial();
        var Lcode = door.getCode();


        return doors.stream()
                .filter(ldoor -> {
                    if (Lname != null && !Lname.isEmpty()) {
                        return ldoor.getName().contains(Lname);
                    }
                    return true;
                })
                .filter(ldoor -> {
                    if (Lheight != 0) {
                        return ldoor.getHeight() > door.getHeight();
                    }
                    return true;
                })
                .filter(ldoor -> {
                    if (Lwidth != 0) {
                        return ldoor.getWidth() > door.getWidth();
                    }
                    return true;
                })
                .filter(ldoor -> {
                    if (Lcolor != null && !Lcolor.isEmpty()) {
                        return ldoor.getColor().contains(Lcolor);
                    }
                    return true;
                })
                .filter(ldoor -> {
                    if (Lmaterial != null && !Lmaterial.isEmpty()) {
                        return ldoor.getMaterial().contains(Lmaterial);
                    }
                    return true;
                })
                .filter(ldoor -> {
                    if (Lcode != null && !Lcode.isEmpty()) {
                        return ldoor.getCode().contains(Lcode);
                    }
                    return true;
                }).toList();
    }
}
