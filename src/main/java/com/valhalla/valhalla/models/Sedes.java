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
@Table(name = "sedes")
public class Sedes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idsedes;

    @Column(name = "ciudad", nullable = false)
    private String ciudad;

    @Column(name = "nombre", nullable = false)
    private String nombre;

    @Column(name = "direccion", nullable = false)
    private String direccion;

    @Column(name = "link_imagen", nullable = false)
    private String linkImagen;

    @Column(name = "telefono", nullable = false)
    private long telefono;

}
