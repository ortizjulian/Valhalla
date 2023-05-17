package com.valhalla.valhalla.models;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
@Table(name = "coupons")
public class Coupon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idcoupon;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "iduser")
    private User iduser;

/*     @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_user")
    private User id_user; */

    @Column(name = "status", nullable = false)
    private byte status; //0 available, 1 used

    @Column(name = "validity", nullable = false)
    private Date validity;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "idprize")
    private Prizes idprize;


}