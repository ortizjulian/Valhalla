package com.valhalla.valhalla.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.valhalla.valhalla.models.User;
import com.valhalla.valhalla.repositories.UserRepositoy;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UserRepositoy userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByCedula(Long.valueOf(username));

        return UserDetailsImpl.build(user);
    }

}
