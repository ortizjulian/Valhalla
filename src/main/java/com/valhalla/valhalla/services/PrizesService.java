package com.valhalla.valhalla.services;

import java.util.List;

import com.valhalla.valhalla.models.Prizes;

public interface PrizesService {
    public List<Prizes> getPrizes();
    public Prizes findByIdprize(int idprize);
    public Prizes findByDescription(String description);

}
