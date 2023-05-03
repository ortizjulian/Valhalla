package com.valhalla.valhalla.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "prizes")
public class Prizes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_prize;

    @Column(name = "description", nullable = false)
    private String description;

}
