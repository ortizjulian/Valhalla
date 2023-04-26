package com.valhalla.valhalla.models;

import java.util.Date;

public class Coupon {
    private int id_premio;
    private int id_user;
    private byte status;
    private Date vigencia = new Date();
    private int id_coupon;

    //Constructor
    public Coupon(int id_premio, int id_user, byte status, Date vigencia, int id_coupon) {
        this.id_premio = id_premio;
        this.id_user = id_user;
        this.status = status;
        this.vigencia = vigencia;
        this.id_coupon = id_coupon;
    }

    //Getters y setters
    public int getId_premio() {
        return id_premio;
    }
    public void setId_premio(int id_premio) {
        this.id_premio = id_premio;
    }
    public int getId_user() {
        return id_user;
    }
    public void setId_user(int id_user) {
        this.id_user = id_user;
    }
    public byte getStatus() {
        return status;
    }
    public void setStatus(byte status) {
        this.status = status;
    }
    public Date getVigencia() {
        return vigencia;
    }
    public void setVigencia(Date vigencia) {
        this.vigencia = vigencia;
    }
    public int getId_coupon() {
        return id_coupon;
    }
    public void setId_coupon(int id_coupon) {
        this.id_coupon = id_coupon;
    }



}
