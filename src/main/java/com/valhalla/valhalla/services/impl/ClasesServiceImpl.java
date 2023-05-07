package com.valhalla.valhalla.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.valhalla.valhalla.models.Clases;
import com.valhalla.valhalla.repositories.ClasesRepository;
import com.valhalla.valhalla.services.ClasesService;

@Service
public class ClasesServiceImpl implements ClasesService {

    @Autowired
    private ClasesRepository clasesRepository;

    @Override
    public void createClases(Clases clase) {
        clasesRepository.save(clase);
    }

    @Override
    public List<Clases> getClases() {
        return clasesRepository.findAll();
    }

}
