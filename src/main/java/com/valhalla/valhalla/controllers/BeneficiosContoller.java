package com.valhalla.valhalla.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.valhalla.valhalla.models.Beneficios;
import com.valhalla.valhalla.models.BeneficiosXPlan;

@RestController
@RequestMapping("/beneficios")
public class BeneficiosContoller {

    ArrayList<BeneficiosXPlan> listBeneficiosXPlan = new ArrayList<BeneficiosXPlan>();

    ArrayList<Beneficios> listBeneficios = new ArrayList<Beneficios>();

    public BeneficiosContoller() {

        listBeneficios.add(new Beneficios(1, "Una sola sede"));
        listBeneficios.add(new Beneficios(2, "Todas las sedes"));
        listBeneficios.add(new Beneficios(3, "Plan Personalizado"));
        listBeneficios.add(new Beneficios(4, "Acceso a la Plataforma"));
        listBeneficios.add(new Beneficios(5, "Cita con Deportólogo"));
        listBeneficios.add(new Beneficios(6, "Acesso a los retos"));
        listBeneficios.add(new Beneficios(7, "Cita con Nutricionista"));
        listBeneficios.add(new Beneficios(8, "Clases Premium"));

        listBeneficiosXPlan.add(new BeneficiosXPlan(1, 1));
        listBeneficiosXPlan.add(new BeneficiosXPlan(1, 3));
        listBeneficiosXPlan.add(new BeneficiosXPlan(1, 4));

        listBeneficiosXPlan.add(new BeneficiosXPlan(2, 2));
        listBeneficiosXPlan.add(new BeneficiosXPlan(2, 3));
        listBeneficiosXPlan.add(new BeneficiosXPlan(2, 4));
        listBeneficiosXPlan.add(new BeneficiosXPlan(2, 5));
        listBeneficiosXPlan.add(new BeneficiosXPlan(2, 6));

        listBeneficiosXPlan.add(new BeneficiosXPlan(3, 2));
        listBeneficiosXPlan.add(new BeneficiosXPlan(3, 3));
        listBeneficiosXPlan.add(new BeneficiosXPlan(3, 4));
        listBeneficiosXPlan.add(new BeneficiosXPlan(3, 5));
        listBeneficiosXPlan.add(new BeneficiosXPlan(3, 6));
        listBeneficiosXPlan.add(new BeneficiosXPlan(3, 7));
        listBeneficiosXPlan.add(new BeneficiosXPlan(3, 8));

    }

    @GetMapping("/{idPlan}")
    public ArrayList<Beneficios> getBeneficiosXplan(@PathVariable int idPlan) {
        ArrayList<Beneficios> beneficiosXplan = new ArrayList<Beneficios>();

        for (BeneficiosXPlan beneficiosDelPlan : listBeneficiosXPlan) {
            if (beneficiosDelPlan.getId_plan() == idPlan) {
                for (Beneficios beneficio : listBeneficios) {
                    if (beneficio.getId_beneficio() == beneficiosDelPlan.getId_beneficio()) {
                        beneficiosXplan.add(beneficio);
                    }
                }
            }
        }

        return beneficiosXplan;
    }

}
