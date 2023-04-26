package com.valhalla.valhalla.models;

import java.util.Date;

public class UsuariosXPlanes {
    private int id_user_plan;
    private int id_user;
    private int id_plan;
    private Date fecha_comienzo;
    private Date fecha_fin;
    private boolean activo;

    public UsuariosXPlanes() {
    }

    public UsuariosXPlanes(int id_user_plan, int id_user, int id_plan, Date fecha_comienzo, Date fecha_fin,
            boolean activo) {
        this.id_user_plan = id_user_plan;
        this.id_user = id_user;
        this.id_plan = id_plan;
        this.fecha_comienzo = fecha_comienzo;
        this.fecha_fin = fecha_fin;
        this.activo = activo;
    }

    public int getId_user_plan() {
        return id_user_plan;
    }

    public void setId_user_plan(int id_user_plan) {
        this.id_user_plan = id_user_plan;
    }

    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

    public int getId_plan() {
        return id_plan;
    }

    public void setId_plan(int id_plan) {
        this.id_plan = id_plan;
    }

    public Date getFecha_comienzo() {
        return fecha_comienzo;
    }

    public void setFecha_comienzo(Date fecha_comienzo) {
        this.fecha_comienzo = fecha_comienzo;
    }

    public Date getFecha_fin() {
        return fecha_fin;
    }

    public void setFecha_fin(Date fecha_fin) {
        this.fecha_fin = fecha_fin;
    }

    public boolean isActivo() {
        return activo;
    }

    public void setActivo(boolean activo) {
        this.activo = activo;
    }

}
