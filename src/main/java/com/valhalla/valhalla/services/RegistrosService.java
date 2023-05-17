package com.valhalla.valhalla.services;

import java.util.List;

import com.valhalla.valhalla.models.Registros;

public interface RegistrosService {
    public List<Registros> getRegistros();

    public Registros createRegistro(Registros registro);

    Registros findByIdregistro(int idregistro);

    public void updateRegistro(Registros registro);
}
