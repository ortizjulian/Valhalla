package com.valhalla.valhalla.services;

import java.util.List;

import com.valhalla.valhalla.models.Coupon;
import com.valhalla.valhalla.models.User;

public interface CouponsService {
    public List<Coupon> getCoupon();

    public Coupon findByIdcoupon(int idcoupon);

    public List<Coupon> findByIduser(User usuario); 
}
