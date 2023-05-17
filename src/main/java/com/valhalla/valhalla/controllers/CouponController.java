package com.valhalla.valhalla.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.valhalla.valhalla.models.Coupon;
import com.valhalla.valhalla.models.User;
import com.valhalla.valhalla.payload.response.MessageResponse;
import com.valhalla.valhalla.services.CouponsService;
import com.valhalla.valhalla.services.PrizesService;
import com.valhalla.valhalla.services.UserService;

@RestController
@RequestMapping("api/coupon")
public class CouponController {
    @Autowired
    private PrizesService prizesService;

    @Autowired
    private UserService userService;

    @Autowired
    private CouponsService couponsService;

    byte status = 0;
    byte used = 1;
    @PostMapping("/create")
    public  ResponseEntity<?> CreateCoupon(@RequestParam String description){
        try{

            System.out.println("hola");
            Coupon coupon = new Coupon();

            /* String username = userDetails.getUsername();
            User usuario = userService.findByCedula(Long.valueOf(username)); */

            coupon.setValidity(new Date());
            coupon.setIdprize(prizesService.findByDescription(description));
            coupon.setIduser(userService.findByCedula(1234567));
            coupon.setStatus(status);
            
            return ResponseEntity.ok(new MessageResponse("Cupon añadido"));
        }
        catch(Exception e){
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: comuniquese con la administración\n" + e.getMessage()));
        }

    }



    @GetMapping()
    public ArrayList<Coupon>[] getCoupons(@AuthenticationPrincipal UserDetails userDetails) {
        System.out.println("errooor 1");
        ArrayList<Coupon> current = new ArrayList<>();
        ArrayList<Coupon> used = new ArrayList<>();
        ArrayList<Coupon> expired = new ArrayList<>();
        
        String username = userDetails.getUsername();
        User usuario = userService.findByCedula(Long.valueOf(username));

        for (Coupon x : couponsService.findByIduser(usuario)) {
            if (x.getStatus() == 0 && x.getValidity().compareTo(new Date()) >= 0) {
                current.add(x);
            } else if (x.getStatus() == 1) {
                used.add(x);
            } else {
                expired.add(x);
            }
        }
        System.out.println("errooor 2");
        
        ArrayList<Coupon>[] coupons = new ArrayList[3];
        coupons[0] = (current);
        coupons[1] = (used);
        coupons[2] = (expired);
        System.out.println("errooor 3");
        return coupons;
    }


}