package com.valhalla.valhalla.services;

import java.util.List;

import com.valhalla.valhalla.models.Clases;

public interface ClasesService {

    public void createClases(Clases clase);

    public List<Clases> getClases();
}