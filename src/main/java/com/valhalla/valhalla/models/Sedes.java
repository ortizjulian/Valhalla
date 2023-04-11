package com.valhalla.valhalla.models;

/* 
@Entity
@Table(name = "persona")
*/
public class Sedes {
    /*
     * @Id
     * 
     * @GeneratedValue(strategy = GenerationType.AUTO)
     */
    int id;
    String nombre;
    String direccion;
    String linkImagen;
    long telefono;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
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

    public Sedes(int id, String nombre, String direccion, String linkImagen, long telefono) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.linkImagen = linkImagen;
        this.telefono = telefono;
    }
}
