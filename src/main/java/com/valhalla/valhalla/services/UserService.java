package com.valhalla.valhalla.services;

import com.valhalla.valhalla.models.User;

public interface UserService {
    public void createUser(User usuario);

    public User findByCedula(long cedula);

    boolean existsByCedula(long cedula);

    boolean existsByCorreo(String correo);
}
