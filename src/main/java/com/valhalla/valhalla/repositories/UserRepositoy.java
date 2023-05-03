package com.valhalla.valhalla.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.valhalla.valhalla.models.User;

@Repository
public interface UserRepositoy extends JpaRepository<User, Integer> {
    public User findByCedula(long cedula);

    boolean existsByCedula(long cedula);

    boolean existsByCorreo(String correo);
}
