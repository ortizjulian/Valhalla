package com.valhalla.valhalla.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valhalla.valhalla.models.ESexo;

import com.valhalla.valhalla.models.Sexo;

public interface SexoRepository extends JpaRepository<Sexo, Integer> {
    Sexo findByName(ESexo name);
}
