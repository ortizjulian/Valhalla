
package com.valhalla.valhalla.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.valhalla.valhalla.models.Clases;

@Repository
public interface ClasesRepository extends JpaRepository<Clases, Integer> {

}
