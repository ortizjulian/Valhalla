
package com.valhalla.valhalla.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.valhalla.valhalla.models.Prizes;

@Repository
public interface PrizesRepository extends JpaRepository<Prizes, Integer> {

}
