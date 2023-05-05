
package com.valhalla.valhalla.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.valhalla.valhalla.models.Sedes;


@Repository
public interface SedesRepository extends JpaRepository<Sedes, Integer> {
    public Sedes findByIdsedes(int idsedes);
}
