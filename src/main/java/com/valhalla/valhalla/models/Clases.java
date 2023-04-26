package com.valhalla.valhalla.models;

import java.util.Date;

public class Clases {

    private int id_clase;
    private String nombre;
    private String descripcion;

    private int id_profesor;
    private int id_sede;
    private int capacidad;
    private String fecha_inicio;
    private String fecha_final;

    public Clases(int id_clase, String nombre, String descripcion, int id_profesor, int id_sede, int capacidad,
            String fecha_inicio, String fecha_final) {
        this.id_clase = id_clase;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.id_profesor = id_profesor;
        this.id_sede = id_sede;
        this.capacidad = capacidad;
        this.fecha_inicio = fecha_inicio;
        this.fecha_final = fecha_final;
    }

    public String getFecha_inicio() {
        return fecha_inicio;
    }

    public void setFecha_inicio(String fecha_inicio) {
        this.fecha_inicio = fecha_inicio;
    }

    public String getFecha_final() {
        return fecha_final;
    }

    public void setFecha_final(String fecha_final) {
        this.fecha_final = fecha_final;
    }

    public int getId_clase() {
        return id_clase;
    }

    public void setId_clase(int id_clase) {
        this.id_clase = id_clase;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getId_profesor() {
        return id_profesor;
    }

    public void setId_profesor(int id_profesor) {
        this.id_profesor = id_profesor;
    }

    public int getId_sede() {
        return id_sede;
    }

    public void setId_sede(int id_sede) {
        this.id_sede = id_sede;
    }

    public int getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(int capacidad) {
        this.capacidad = capacidad;
    }

    public Clases() {

    }

}
