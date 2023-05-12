
package com.valhalla.valhalla.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.valhalla.valhalla.models.Registros;
import com.valhalla.valhalla.repositories.RegistrosRepository;
import com.valhalla.valhalla.services.RegistrosService;

@Service
public class RegistrosServiceImpl implements RegistrosService {

    @Autowired
    private RegistrosRepository RegistrosRepository;

    @Override
    public List<Registros> getRegistros() {
        return RegistrosRepository.findAll();
    }

    @Override
    public Registros createRegistro(Registros registro){
        return RegistrosRepository.save(registro);
    }

}