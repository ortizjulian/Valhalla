package com.valhalla.valhalla.services;

import com.valhalla.valhalla.models.ERol;
import com.valhalla.valhalla.models.Rol;

public interface RolService {
    public Rol findByName(ERol rol);
}
