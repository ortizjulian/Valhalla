package com.valhalla.valhalla.models;

import java.util.Date;

public class Clases {

    private int id_clase;
    private String nombre;
    private String descripcion;
    // private String linkImagen;
    private Date fecha_hora = new Date();
    private int id_profesor;
    private int id_sede;
    private int capacidad;

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

    public Date getFecha_hora() {
        return fecha_hora;
    }

    public void setFecha_hora(Date fecha_hora) {
        this.fecha_hora = fecha_hora;
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

    public Clases(int id_clase, String nombre, String descripcion, Date fecha_hora,
            int id_profesor,
            int id_sede, int capacidad) {
        this.id_clase = id_clase;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha_hora = fecha_hora;
        this.id_profesor = id_profesor;
        this.id_sede = id_clase;
        this.capacidad = capacidad;

    }

}
