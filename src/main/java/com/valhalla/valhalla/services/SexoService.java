package com.valhalla.valhalla.services;

import com.valhalla.valhalla.models.ESexo;

import com.valhalla.valhalla.models.Sexo;

public interface SexoService {
    public Sexo findByName(ESexo sexo);
}
