package com.valhalla.valhalla.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.valhalla.valhalla.models.Coupon;
import com.valhalla.valhalla.models.User;

@Repository
public interface CouponsRepository extends JpaRepository<Coupon, Integer> {
    public Coupon findByIdcoupon(int idcoupon);

    public List<Coupon> findByIduser(User usuario); 

}
