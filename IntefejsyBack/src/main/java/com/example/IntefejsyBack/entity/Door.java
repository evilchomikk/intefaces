package com.example.IntefejsyBack.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Door {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String color;
    private String material;
    private double height;
    private double width;
    private String direction;
    private double price;
    private double quantity;
    private String code;
    private String category;
    private double weight;

    private String image1;
    private String image2;
}
