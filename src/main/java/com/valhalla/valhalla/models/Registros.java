package com.valhalla.valhalla.models;

import java.util.Date;

public class Registros {
    private int id_registro;
    private int id_user;
    private int id_sede;
    private Date fecha_hora_entrada;
    private Date fecha_hora_salida;

    public int getId_registro() {
        return id_registro;
    }

    public void setId_registro(int id_registro) {
        this.id_registro = id_registro;
    }

    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

    public int getId_sede() {
        return id_sede;
    }

    public void setId_sede(int id_sede) {
        this.id_sede = id_sede;
    }

    public Date getFecha_hora_entrada() {
        return fecha_hora_entrada;
    }

    public void setFecha_hora_entrada(Date fecha_hora_entrada) {
        this.fecha_hora_entrada = fecha_hora_entrada;
    }

    public Date getFecha_hora_salida() {
        return fecha_hora_salida;
    }

    public void setFecha_hora_salida(Date fecha_hora_salida) {
        this.fecha_hora_salida = fecha_hora_salida;
    }

    public Registros() {
    }

    public Registros(int id_registro, int id_user, int id_sede, Date fecha_hora_entrada, Date fecha_hora_salida) {
        this.id_registro = id_registro;
        this.id_user = id_user;
        this.id_sede = id_sede;
        this.fecha_hora_entrada = fecha_hora_entrada;
        this.fecha_hora_salida = fecha_hora_salida;
    }

}
