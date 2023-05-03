package com.valhalla.valhalla.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.valhalla.valhalla.models.Planes;

@Repository
public interface PlanesRepository extends JpaRepository<Planes, Integer> {
    
    @Query("SELECT DISTINCT p FROM Planes p JOIN FETCH p.beneficios")
    List<Planes> findAllWithBeneficios();

}
