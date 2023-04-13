package com.valhalla.valhalla.models;

import java.util.Date;

public class User {

    public enum Rol {
        CLIENTE,
        ADMIN,
    }

    public enum Sexo {
        MASCULINO,
        FEMENINO,
    }

    private int id;
    private String nombre;
    private String correo;
    private String contrasena;
    private Date fechaNacimiento;
    private long telefono;
    private Rol rol;
    private Sexo sexo;
    private long cedula;

    public User(int id, String nombre, String correo, String contrasena, Date fechaNacimiento, long telefono, Rol rol,
            Sexo sexo, long cedula) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
        this.rol = rol;
        this.sexo = sexo;
        this.cedula = cedula;
    }

    public User() {
    }

    private int sede;

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

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contraseña) {
        this.contrasena = contraseña;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fecha_nacimiento) {
        this.fechaNacimiento = fecha_nacimiento;
    }

    public long getTelefono() {
        return telefono;
    }

    public void setTelefono(long telefono) {
        this.telefono = telefono;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }

    public Sexo getSexo() {
        return sexo;
    }

    public void setSexo(Sexo sexo) {
        this.sexo = sexo;
    }

    public long getCedula() {
        return cedula;
    }

    public void setCedula(long cedula) {
        this.cedula = cedula;
    }

    public int getSede() {
        return sede;
    }

    public void setSede(int sede) {
        this.sede = sede;
    }

}
