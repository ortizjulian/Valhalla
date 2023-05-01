
package com.valhalla.valhalla.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.valhalla.valhalla.models.Sedes;
import com.valhalla.valhalla.repositories.SedesRepository;
import com.valhalla.valhalla.services.SedesService;

@Service
public class SedesServiceImpl implements SedesService {

    @Autowired
    private SedesRepository sedesRepository;

    @Override
    public List<Sedes> getSedes() {
        return sedesRepository.findAll();
    }

}
