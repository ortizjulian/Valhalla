package com.valhalla.valhalla.models;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="planes")

public class Planes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_planes;

    @Column(name = "nombre", nullable = false)
    private String nombre;

    @Column(name = "descripcion", nullable = false)
    private String descripcion;

    @Column(name = "precio", nullable = false)
    private float precio;

    @ManyToMany
    @JoinTable(
        name = "beneficios_x_plan",
        joinColumns = @JoinColumn(name = "id_plan"),
        inverseJoinColumns = @JoinColumn(name = "id_beneficio"))

    private List<Beneficios> beneficios;
}
