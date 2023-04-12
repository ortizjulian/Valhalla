package com.valhalla.valhalla.models;

public class Sedes {

    int id;
    String ciudad;
    String direccion;
    String linkImagen;
    String barrio;
    long telefono;

    public String getBarrio() {
        return barrio;
    }

    public void setBarrio(String barrio) {
        this.barrio = barrio;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getLinkImagen() {
        return linkImagen;
    }

    public void setLinkImagen(String linkImagen) {
        this.linkImagen = linkImagen;
    }

    public long getTelefono() {
        return telefono;
    }

    public void setTelefono(long telefono) {
        this.telefono = telefono;
    }

    public Sedes() {

    }

    public Sedes(int id, String ciudad, String direccion, String linkImagen, String barrio, long telefono) {
        this.id = id;
        this.ciudad = ciudad;
        this.direccion = direccion;
        this.linkImagen = linkImagen;
        this.barrio = barrio;
        this.telefono = telefono;
    }
}
