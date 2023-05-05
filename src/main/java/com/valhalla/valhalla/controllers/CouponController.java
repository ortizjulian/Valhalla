package com.valhalla.valhalla.controllers;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import com.valhalla.valhalla.models.Coupon;

@RestController
@RequestMapping("/coupon")
public class CouponController {
    byte status = 0;
    byte used = 1;
    ArrayList<Coupon> listCoupons = new ArrayList<Coupon>();

    public CouponController() { // int id_premio, int id_user, byte status, Date vigencia, int id_coupon

    }

    @GetMapping("/{user_id}")
    public ArrayList<Coupon>[] getCoupons(@PathVariable int user_id) {
        ArrayList<Coupon> current = new ArrayList<Coupon>();
        ArrayList<Coupon> used = new ArrayList<Coupon>();
        ArrayList<Coupon> expired = new ArrayList<Coupon>();
        for (Coupon x : listCoupons) {
            if (x.getStatus() == 0 && x.getValidity().compareTo(new Date()) >= 0) {
                current.add(x);
            } else if (x.getStatus() == 1) {
                used.add(x);
            } else {
                expired.add(x);
            }
        }
        ArrayList<Coupon>[] coupons = new ArrayList[3];
        coupons[0] = (current);
        coupons[1] = (used);
        coupons[2] = (expired);
        return coupons;
    }

}