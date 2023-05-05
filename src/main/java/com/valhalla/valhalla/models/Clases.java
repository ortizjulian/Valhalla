package com.valhalla.valhalla.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="clases")

public class Clases {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_clases;

    @Column(name = "nombre", nullable = false)
    private String nombre;

    @Column(name = "descripcion", nullable = false)
    private String descripcion;

    @Column(name = "link_imagen", nullable = false)
    private String link_imagen;

    @Column(name = "fecha_inicio", nullable = false)
    private String fecha_inicio;

    @Column(name = "fecha_fin", nullable = false)
    private String fecha_fin;

    @Column(name = "capacidad", nullable = false)
    private byte capacidad;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_profesor")
    private User profesor;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_sede")
    private Sedes sede;
    
}