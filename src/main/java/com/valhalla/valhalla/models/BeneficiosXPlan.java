/* package com.valhalla.valhalla.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
@Table(name = "beneficiosxplan")
public class BeneficiosXPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idbeneficio_plan;

    @ManyToOne
    @JoinColumn(name = "idbeneficio")
    private Beneficios beneficio;
    
    @ManyToOne
    @JoinColumn(name = "idplan")
    private Planes plan;


} */
