package com.valhalla.valhalla.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.valhalla.valhalla.models.ERol;
import com.valhalla.valhalla.models.Rol;
import com.valhalla.valhalla.repositories.RolRepository;
import com.valhalla.valhalla.services.RolService;

@Service
public class RolServiceImpl implements RolService {

    @Autowired
    private RolRepository rolRepository;

    @Override
    public Rol findByName(ERol rol) {
        return rolRepository.findByName(rol);
    }

}
