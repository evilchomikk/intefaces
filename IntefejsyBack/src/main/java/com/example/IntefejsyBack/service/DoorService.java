package com.example.IntefejsyBack.service;

import com.example.IntefejsyBack.entity.Door;

import java.util.List;

public interface DoorService {

    List<Door> getAll();
    void saveDoor(Door door);

    List<Door> getFiltered(Door door);
}
