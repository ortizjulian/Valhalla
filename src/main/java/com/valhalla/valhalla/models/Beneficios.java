package com.valhalla.valhalla.models;

public class Beneficios {
    private int id_beneficio;
    private String descripcion;

    public Beneficios(int id_beneficio, String descripcion) {
        this.id_beneficio = id_beneficio;
        this.descripcion = descripcion;
    }

    public int getId_beneficio() {
        return id_beneficio;
    }

    public void setId_beneficio(int id_beneficio) {
        this.id_beneficio = id_beneficio;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
