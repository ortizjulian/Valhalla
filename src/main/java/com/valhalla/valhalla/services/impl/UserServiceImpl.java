package com.valhalla.valhalla.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.valhalla.valhalla.models.User;
import com.valhalla.valhalla.repositories.UserRepositoy;
import com.valhalla.valhalla.services.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepositoy userRepository;

    @Override
    public void createUser(User usuario) {
        userRepository.save(usuario);
    }

    @Override
    public User findByCedula(long cedula) {
        return userRepository.findByCedula(cedula);
    }

    @Override
    public boolean existsByCedula(long cedula) {
        return userRepository.existsByCedula(cedula);
    }

    @Override
    public boolean existsByCorreo(String correo) {
        return userRepository.existsByCorreo(correo);
    }

}
