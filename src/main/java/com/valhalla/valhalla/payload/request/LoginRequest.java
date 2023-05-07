package com.valhalla.valhalla.payload.request;

public class LoginRequest {

    private long cedula;

    private String password;

    public long getCedula() {
        return cedula;
    }

    public void setCedula(long cedula) {
        this.cedula = cedula;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
