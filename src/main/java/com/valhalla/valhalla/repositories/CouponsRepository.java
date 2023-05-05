package com.valhalla.valhalla.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.valhalla.valhalla.models.Coupon;

@Repository
public interface CouponsRepository extends JpaRepository<Coupon, Integer> {

}
