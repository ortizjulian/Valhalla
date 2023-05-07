
package com.valhalla.valhalla.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.valhalla.valhalla.models.Coupon;
import com.valhalla.valhalla.repositories.CouponsRepository;
import com.valhalla.valhalla.services.CouponsService;

@Service
public class CouponsServiceImpl implements CouponsService {

    @Autowired
    private CouponsRepository CouponsRepository;

    @Override
    public List<Coupon> getCoupon() {
        return CouponsRepository.findAll();
    }

}
