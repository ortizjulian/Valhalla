package com.valhalla.valhalla.models;

import java.util.Date;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
@Table(name = "registros")
public class Registros {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_registro;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_user")
    private User id_user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_sede")
    private Sedes id_sede;

    @Column(name = "fecha_hora_entrada", nullable = false)
    private Date fecha_hora_entrada; //0 available, 1 used

    @Column(name = "fecha_hora_salida", nullable = false)
    private Date fecha_hora_salida;

}
