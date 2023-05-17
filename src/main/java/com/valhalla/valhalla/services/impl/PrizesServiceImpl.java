
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
    private PrizesRepository prizesRepository;

    @Override
    public List<Prizes> getPrizes() {
        return prizesRepository.findAll();
    }

    @Override
    public Prizes findByIdprize(int idprize) {
        return prizesRepository.findByIdprize(idprize);
    }

    @Override
    public Prizes findByDescription(String description) {
        return prizesRepository.findByDescription(description);
    }

}
