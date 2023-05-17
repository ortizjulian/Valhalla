
package com.valhalla.valhalla.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.valhalla.valhalla.models.Registros;

@Repository
public interface RegistrosRepository extends JpaRepository<Registros, Integer> {
    Registros findByIdregistro(int idregistro);

}
