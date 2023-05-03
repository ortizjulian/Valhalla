package com.valhalla.valhalla.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valhalla.valhalla.models.ERol;
import com.valhalla.valhalla.models.Rol;

public interface RolRepository extends JpaRepository<Rol, Integer> {
    Rol findByName(ERol name);
}
