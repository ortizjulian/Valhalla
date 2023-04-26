package com.valhalla.valhalla.controllers;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.valhalla.valhalla.models.User;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @GetMapping()
    public boolean login(@RequestParam long cedula, @RequestParam String contrasena) {
        long cedula1 = 10000;
        String contrasena1 = "hola";

        if (cedula == cedula1 && contrasena.equals(contrasena1)) {

            return true;
        }
        return false;

    }

    /*
     * @PostMapping("user")
     * public User login2(@RequestParam long cedula, @RequestParam String
     * contrasena) {
     * 
     * String token = getJWTToken(cedula);
     * User user = new User();
     * // user.setCedula(cedula);
     * // user.setToken(token);
     * return user;
     * 
     * }
     * 
     * private String getJWTToken(Long username) {
     * String secretKey = "mySecretKey";
     * List<GrantedAuthority> grantedAuthorities = AuthorityUtils
     * .commaSeparatedStringToAuthorityList("ROLE_USER");
     * 
     * String token = Jwts
     * .builder()
     * .setId("softtekJWT")
     * .setSubject(username + "")
     * .claim("authorities",
     * grantedAuthorities.stream()
     * .map(GrantedAuthority::getAuthority)
     * .collect(Collectors.toList()))
     * .setIssuedAt(new Date(System.currentTimeMillis()))
     * .setExpiration(new Date(System.currentTimeMillis() + 86400000))
     * .signWith(SignatureAlgorithm.HS512,
     * secretKey.getBytes())
     * .compact();
     * 
     * return "Bearer " + token;
     * }
     */
    @PostMapping(value = "/register")
    public User RegisterUser(@RequestBody User usuario) {
        User user = new User();
        user.setNombre(usuario.getNombre());
        user.setCorreo(usuario.getCorreo());
        user.setContrasena(usuario.getContrasena());
        // user.setFechaNacimiento(usuario.getFechaNacimiento());
        // user.setTelefono(usuario.getTelefono());
        user.setRol(User.Rol.CLIENTE);
        user.setSexo(usuario.getSexo());
        user.setCedula(usuario.getCedula());
        return user;

    }

}
