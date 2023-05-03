
package com.valhalla.valhalla.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.valhalla.valhalla.models.Prizes;
import com.valhalla.valhalla.repositories.PrizesRepository;
import com.valhalla.valhalla.services.PrizesService;

@Service
public class PrizesServiceImpl implements PrizesService {

    @Autowired
    private PrizesRepository PrizesRepository;

    @Override
    public List<Prizes> getPrizes() {
        return PrizesRepository.findAll();
    }

}
