
package com.valhalla.valhalla.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.valhalla.valhalla.models.Planes;
import com.valhalla.valhalla.repositories.PlanesRepository;
import com.valhalla.valhalla.services.PlanesService;

@Service
public class PlanesServiceImpl implements PlanesService {

    @Autowired
    private PlanesRepository planesRepository;

    @Override
    public List<Planes> getPlanes() {
        return planesRepository.findAllWithBeneficios();
    }

}
