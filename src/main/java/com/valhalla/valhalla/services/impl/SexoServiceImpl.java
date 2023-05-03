package com.valhalla.valhalla.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.valhalla.valhalla.models.ESexo;
import com.valhalla.valhalla.models.Sexo;
import com.valhalla.valhalla.repositories.SexoRepository;
import com.valhalla.valhalla.services.SexoService;

@Service
public class SexoServiceImpl implements SexoService {

    @Autowired
    private SexoRepository sexoRepository;

    @Override
    public Sexo findByName(ESexo sexo) {
        return sexoRepository.findByName(sexo);
    }

}
