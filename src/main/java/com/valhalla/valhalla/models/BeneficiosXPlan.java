package com.valhalla.valhalla.models;

public class BeneficiosXPlan {
    private int id_plan;
    private int id_beneficio;

    public BeneficiosXPlan(int id_plan, int id_beneficio) {
        this.id_plan = id_plan;
        this.id_beneficio = id_beneficio;
    }

    public int getId_plan() {
        return id_plan;
    }

    public void setId_plan(int id_plan) {
        this.id_plan = id_plan;
    }

    public int getId_beneficio() {
        return id_beneficio;
    }

    public void setId_beneficio(int id_beneficio) {
        this.id_beneficio = id_beneficio;
    }
}
