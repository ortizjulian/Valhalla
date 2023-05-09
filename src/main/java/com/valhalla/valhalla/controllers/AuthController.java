package com.valhalla.valhalla.controllers;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.valhalla.valhalla.models.ERol;
import com.valhalla.valhalla.models.ESexo;
import com.valhalla.valhalla.models.Rol;
import com.valhalla.valhalla.models.Sexo;
import com.valhalla.valhalla.models.User;
import com.valhalla.valhalla.payload.request.LoginRequest;
import com.valhalla.valhalla.payload.response.JwtResponse;
import com.valhalla.valhalla.payload.response.MessageResponse;
import com.valhalla.valhalla.security.jwt.JwtUtils;
import com.valhalla.valhalla.security.services.UserDetailsImpl;
import com.valhalla.valhalla.services.RolService;
import com.valhalla.valhalla.services.SexoService;
import com.valhalla.valhalla.services.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@RestController
@RequestMapping("/auth")

public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserService userService;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    private RolService rolService;

    @Autowired
    private SexoService sexService;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getCedula() + "", loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        JwtResponse response = new JwtResponse(jwt,
                Long.valueOf(userDetails.getId()),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles);

        return ResponseEntity.ok(response);

    }

    @PostMapping(value = "/register")
    public ResponseEntity<?> RegisterUser(@RequestBody User usuario) {
        try {
            if (userService.existsByCedula(usuario.getCedula())) {
                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Error: Cedula is already taken!"));

            }

            if (userService.existsByCorreo(usuario.getCorreo())) {
                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Error: Correo is already taken!"));
            }

            Sexo sexo = sexService.findByName(ESexo.fromString(usuario.getSexoFront()));
            usuario.setSexo(sexo);
            usuario.setContrasena(encoder.encode(usuario.getContrasena()));
            Set<Rol> roles = new HashSet<>();

            Rol userRol = rolService.findByName(ERol.ROLE_USER);
            roles.add(userRol);

            usuario.setRoles(roles);

            userService.createUser(usuario);

            return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: No se pudo registrar el usuario"));
        }

    }

}
