
package com.valhalla.valhalla.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.valhalla.valhalla.models.Coupon;
import com.valhalla.valhalla.models.User;
import com.valhalla.valhalla.repositories.CouponsRepository;
import com.valhalla.valhalla.services.CouponsService;

@Service
public class CouponsServiceImpl implements CouponsService {

    @Autowired
    private CouponsRepository couponsRepository;

    @Override
    public List<Coupon> getCoupon() {
        return couponsRepository.findAll();
    }

    @Override 
    public Coupon findByIdcoupon(int idcoupon){
        return  couponsRepository.findByIdcoupon(idcoupon);
    }

    @Override 
    public List<Coupon> findByIduser(User usuario){
        return  couponsRepository.findByIduser(usuario);
    }


}
